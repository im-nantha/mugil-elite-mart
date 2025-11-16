const Zh=()=>{};var va={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ed=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],u=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,y=(o&3)<<4|u>>4;let A=(u&15)<<2|d>>6,P=d&63;h||(P=64,a||(A=64)),r.push(t[p],t[y],t[A],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ed(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||y==null)throw new td;const A=o<<2|u>>4;if(r.push(A),d!==64){const P=u<<4&240|d>>2;if(r.push(P),y!==64){const D=d<<6&192|y;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nd=function(n){const e=Yc(n);return Zc.encodeByteArray(e,!0)},zr=function(n){return nd(n).replace(/\./g,"")},eu=function(n){try{return Zc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sd=()=>rd().__FIREBASE_DEFAULTS__,id=()=>{if(typeof process>"u"||typeof va>"u")return;const n=va.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},od=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&eu(n[1]);return e&&JSON.parse(e)},hs=()=>{try{return Zh()||sd()||id()||od()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tu=n=>{var e,t;return(t=(e=hs())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ad=n=>{const e=tu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},nu=()=>{var n;return(n=hs())==null?void 0:n.config},ru=n=>{var e;return(e=hs())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function hn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function su(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ud(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[zr(JSON.stringify(t)),zr(JSON.stringify(a)),""].join(".")}const jn={};function ld(){const n={prod:[],emulator:[]};for(const e of Object.keys(jn))jn[e]?n.emulator.push(e):n.prod.push(e);return n}function hd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Aa=!1;function iu(n,e){if(typeof window>"u"||typeof document>"u"||!hn(window.location.host)||jn[n]===e||jn[n]||Aa)return;jn[n]=e;function t(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=ld().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,P){A.setAttribute("width","24"),A.setAttribute("id",P),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Aa=!0,a()},A}function p(A,P){A.setAttribute("id",P),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function y(){const A=hd(r),P=t("text"),D=document.getElementById(P)||document.createElement("span"),N=t("learnmore"),k=document.getElementById(N)||document.createElement("a"),j=t("preprendIcon"),H=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const K=A.element;u(K),p(k,N);const ce=d();h(H,j),K.append(H,D,k,ce),document.body.appendChild(K)}o?(D.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function fd(){var e;const n=(e=hs())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function md(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _d(){const n=Ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yd(){return!fd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ed(){try{return typeof indexedDB=="object"}catch{return!1}}function Td(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="FirebaseError";class Xe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Id,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?wd(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Xe(s,u,r)}}function wd(n,e){return n.replace(vd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vd=/\{\$([^}]+)}/g;function Ad(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(Ra(o)&&Ra(a)){if(!Nt(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ra(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Ln(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Rd(n,e){const t=new Sd(n,e);return t.subscribe.bind(t)}class Sd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Pd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ei),s.error===void 0&&(s.error=ei),s.complete===void 0&&(s.complete=ei);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ei(){}/**
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
 */function Se(n){return n&&n._delegate?n._delegate:n}class Ot{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bt="[DEFAULT]";/**
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
 */class Cd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new cd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kd(e))try{this.getOrInitializeService({instanceIdentifier:bt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bt){return this.instances.has(e)}getOptions(e=bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bt){return this.component?this.component.multipleInstances?e:bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bd(n){return n===bt?void 0:n}function kd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const Dd={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Nd=q.INFO,Od={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Md=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Od[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Li{constructor(e){this.name=e,this._logLevel=Nd,this._logHandler=Md,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Ld=(n,e)=>e.some(t=>n instanceof t);let Sa,Pa;function xd(){return Sa||(Sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fd(){return Pa||(Pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ou=new WeakMap,di=new WeakMap,au=new WeakMap,ti=new WeakMap,xi=new WeakMap;function Ud(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(lt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ou.set(t,n)}).catch(()=>{}),xi.set(e,n),e}function Bd(n){if(di.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});di.set(n,e)}let fi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return di.get(n);if(e==="objectStoreNames")return n.objectStoreNames||au.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jd(n){fi=n(fi)}function qd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ni(this),e,...t);return au.set(r,e.sort?e.sort():[e]),lt(r)}:Fd().includes(n)?function(...e){return n.apply(ni(this),e),lt(ou.get(this))}:function(...e){return lt(n.apply(ni(this),e))}}function $d(n){return typeof n=="function"?qd(n):(n instanceof IDBTransaction&&Bd(n),Ld(n,xd())?new Proxy(n,fi):n)}function lt(n){if(n instanceof IDBRequest)return Ud(n);if(ti.has(n))return ti.get(n);const e=$d(n);return e!==n&&(ti.set(n,e),xi.set(e,n)),e}const ni=n=>xi.get(n);function zd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),u=lt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(lt(a.result),h.oldVersion,h.newVersion,lt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Hd=["get","getKey","getAll","getAllKeys","count"],Wd=["put","add","delete","clear"],ri=new Map;function Ca(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ri.get(e))return ri.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Wd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hd.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&h.done]))[0]};return ri.set(e,o),o}jd(n=>({...n,get:(e,t,r)=>Ca(e,t)||n.get(e,t,r),has:(e,t)=>!!Ca(e,t)||n.has(e,t)}));/**
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
 */class Gd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Kd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Kd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pi="@firebase/app",ba="0.14.3";/**
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
 */const Ge=new Li("@firebase/app"),Qd="@firebase/app-compat",Jd="@firebase/analytics-compat",Xd="@firebase/analytics",Yd="@firebase/app-check-compat",Zd="@firebase/app-check",ef="@firebase/auth",tf="@firebase/auth-compat",nf="@firebase/database",rf="@firebase/data-connect",sf="@firebase/database-compat",of="@firebase/functions",af="@firebase/functions-compat",cf="@firebase/installations",uf="@firebase/installations-compat",lf="@firebase/messaging",hf="@firebase/messaging-compat",df="@firebase/performance",ff="@firebase/performance-compat",pf="@firebase/remote-config",mf="@firebase/remote-config-compat",gf="@firebase/storage",_f="@firebase/storage-compat",yf="@firebase/firestore",Ef="@firebase/ai",Tf="@firebase/firestore-compat",If="firebase",wf="12.3.0";/**
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
 */const mi="[DEFAULT]",vf={[pi]:"fire-core",[Qd]:"fire-core-compat",[Xd]:"fire-analytics",[Jd]:"fire-analytics-compat",[Zd]:"fire-app-check",[Yd]:"fire-app-check-compat",[ef]:"fire-auth",[tf]:"fire-auth-compat",[nf]:"fire-rtdb",[rf]:"fire-data-connect",[sf]:"fire-rtdb-compat",[of]:"fire-fn",[af]:"fire-fn-compat",[cf]:"fire-iid",[uf]:"fire-iid-compat",[lf]:"fire-fcm",[hf]:"fire-fcm-compat",[df]:"fire-perf",[ff]:"fire-perf-compat",[pf]:"fire-rc",[mf]:"fire-rc-compat",[gf]:"fire-gcs",[_f]:"fire-gcs-compat",[yf]:"fire-fst",[Tf]:"fire-fst-compat",[Ef]:"fire-vertex","fire-js":"fire-js",[If]:"fire-js-all"};/**
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
 */const Hr=new Map,Af=new Map,gi=new Map;function ka(n,e){try{n.container.addComponent(e)}catch(t){Ge.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nn(n){const e=n.name;if(gi.has(e))return Ge.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,n);for(const t of Hr.values())ka(t,n);for(const t of Af.values())ka(t,n);return!0}function Fi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function be(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Rf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ht=new rr("app","Firebase",Rf);/**
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
 */class Sf{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=wf;function cu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:mi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ht.create("bad-app-name",{appName:String(s)});if(t||(t=nu()),!t)throw ht.create("no-options");const o=Hr.get(s);if(o){if(Nt(t,o.options)&&Nt(r,o.config))return o;throw ht.create("duplicate-app",{appName:s})}const a=new Vd(s);for(const h of gi.values())a.addComponent(h);const u=new Sf(t,r,a);return Hr.set(s,u),u}function uu(n=mi){const e=Hr.get(n);if(!e&&n===mi&&nu())return cu();if(!e)throw ht.create("no-app",{appName:n});return e}function dt(n,e,t){let r=vf[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ge.warn(a.join(" "));return}nn(new Ot(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Pf="firebase-heartbeat-database",Cf=1,Kn="firebase-heartbeat-store";let si=null;function lu(){return si||(si=zd(Pf,Cf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Kn)}catch(t){console.warn(t)}}}}).catch(n=>{throw ht.create("idb-open",{originalErrorMessage:n.message})})),si}async function bf(n){try{const t=(await lu()).transaction(Kn),r=await t.objectStore(Kn).get(hu(n));return await t.done,r}catch(e){if(e instanceof Xe)Ge.warn(e.message);else{const t=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ge.warn(t.message)}}}async function Va(n,e){try{const r=(await lu()).transaction(Kn,"readwrite");await r.objectStore(Kn).put(e,hu(n)),await r.done}catch(t){if(t instanceof Xe)Ge.warn(t.message);else{const r=ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ge.warn(r.message)}}}function hu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kf=1024,Vf=30;class Df{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Of(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Da();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Vf){const a=Mf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ge.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Da(),{heartbeatsToSend:r,unsentEntries:s}=Nf(this._heartbeatsCache.heartbeats),o=zr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ge.warn(t),""}}}function Da(){return new Date().toISOString().substring(0,10)}function Nf(n,e=kf){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Na(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Na(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Of{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ed()?Td().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Va(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Va(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Na(n){return zr(JSON.stringify({version:2,heartbeats:n})).length}function Mf(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Lf(n){nn(new Ot("platform-logger",e=>new Gd(e),"PRIVATE")),nn(new Ot("heartbeat",e=>new Df(e),"PRIVATE")),dt(pi,ba,n),dt(pi,ba,"esm2020"),dt("fire-js","")}Lf("");var xf="firebase",Ff="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt(xf,Ff,"app");var Oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ft,du;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function _(){}_.prototype=m.prototype,T.F=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(I,E,v){for(var g=Array(arguments.length-2),we=2;we<arguments.length;we++)g[we-2]=arguments[we];return m.prototype[E].apply(I,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);const I=Array(16);if(typeof m=="string")for(var E=0;E<16;++E)I[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;E<16;++E)I[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];let v=T.g[3],g;g=m+(v^_&(E^v))+I[0]+3614090360&4294967295,m=_+(g<<7&4294967295|g>>>25),g=v+(E^m&(_^E))+I[1]+3905402710&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(_^v&(m^_))+I[2]+606105819&4294967295,E=v+(g<<17&4294967295|g>>>15),g=_+(m^E&(v^m))+I[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(v^_&(E^v))+I[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=v+(E^m&(_^E))+I[5]+1200080426&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(_^v&(m^_))+I[6]+2821735955&4294967295,E=v+(g<<17&4294967295|g>>>15),g=_+(m^E&(v^m))+I[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(v^_&(E^v))+I[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=v+(E^m&(_^E))+I[9]+2336552879&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(_^v&(m^_))+I[10]+4294925233&4294967295,E=v+(g<<17&4294967295|g>>>15),g=_+(m^E&(v^m))+I[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(v^_&(E^v))+I[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=v+(E^m&(_^E))+I[13]+4254626195&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(_^v&(m^_))+I[14]+2792965006&4294967295,E=v+(g<<17&4294967295|g>>>15),g=_+(m^E&(v^m))+I[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^v&(_^E))+I[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^E&(m^_))+I[6]+3225465664&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(v^m))+I[11]+643717713&4294967295,E=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(E^v))+I[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^v&(_^E))+I[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^E&(m^_))+I[10]+38016083&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(v^m))+I[15]+3634488961&4294967295,E=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(E^v))+I[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^v&(_^E))+I[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^E&(m^_))+I[14]+3275163606&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(v^m))+I[3]+4107603335&4294967295,E=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(E^v))+I[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^v&(_^E))+I[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^E&(m^_))+I[2]+4243563512&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(v^m))+I[7]+1735328473&4294967295,E=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(E^v))+I[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^v)+I[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^E)+I[8]+2272392833&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^_)+I[11]+1839030562&4294967295,E=v+(g<<16&4294967295|g>>>16),g=_+(E^v^m)+I[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^v)+I[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^E)+I[4]+1272893353&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^_)+I[7]+4139469664&4294967295,E=v+(g<<16&4294967295|g>>>16),g=_+(E^v^m)+I[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^v)+I[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^E)+I[0]+3936430074&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^_)+I[3]+3572445317&4294967295,E=v+(g<<16&4294967295|g>>>16),g=_+(E^v^m)+I[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^v)+I[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^E)+I[12]+3873151461&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^_)+I[15]+530742520&4294967295,E=v+(g<<16&4294967295|g>>>16),g=_+(E^v^m)+I[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~v))+I[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~E))+I[7]+1126891415&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~_))+I[14]+2878612391&4294967295,E=v+(g<<15&4294967295|g>>>17),g=_+(v^(E|~m))+I[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~v))+I[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~E))+I[3]+2399980690&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~_))+I[10]+4293915773&4294967295,E=v+(g<<15&4294967295|g>>>17),g=_+(v^(E|~m))+I[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~v))+I[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~E))+I[15]+4264355552&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~_))+I[6]+2734768916&4294967295,E=v+(g<<15&4294967295|g>>>17),g=_+(v^(E|~m))+I[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~v))+I[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~E))+I[11]+3174756917&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~_))+I[2]+718787259&4294967295,E=v+(g<<15&4294967295|g>>>17),g=_+(v^(E|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+v&4294967295}r.prototype.v=function(T,m){m===void 0&&(m=T.length);const _=m-this.blockSize,I=this.C;let E=this.h,v=0;for(;v<m;){if(E==0)for(;v<=_;)s(this,T,v),v+=this.blockSize;if(typeof T=="string"){for(;v<m;)if(I[E++]=T.charCodeAt(v++),E==this.blockSize){s(this,I),E=0;break}}else for(;v<m;)if(I[E++]=T[v++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=m},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;m=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=m&255,m/=256;for(this.v(T),T=Array(16),m=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)T[m++]=this.g[_]>>>I&255;return T};function o(T,m){var _=u;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;const _=[];let I=!0;for(let E=T.length-1;E>=0;E--){const v=T[E]|0;I&&v==m||(_[E]=v,I=!1)}this.g=_}var u={};function h(T){return-128<=T&&T<128?o(T,function(m){return new a([m|0],m<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(T<0)return k(d(-T));const m=[];let _=1;for(let I=0;T>=_;I++)m[I]=T/_|0,_*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return k(p(T.substring(1),m));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(m,8));let I=y;for(let v=0;v<T.length;v+=8){var E=Math.min(8,T.length-v);const g=parseInt(T.substring(v,v+E),m);E<8?(E=d(Math.pow(m,E)),I=I.j(E).add(d(g))):(I=I.j(_),I=I.add(d(g)))}return I}var y=h(0),A=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-k(this).m();let T=0,m=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);T+=(I>=0?I:4294967296+I)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(N(this))return"-"+k(this).toString(T);const m=d(Math.pow(T,6));var _=this;let I="";for(;;){const E=ce(_,m).g;_=j(_,E.j(m));let v=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=E,D(_))return v+I;for(;v.length<6;)v="0"+v;I=v+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(let m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=j(this,T),N(T)?-1:D(T)?0:1};function k(T){const m=T.g.length,_=[];for(let I=0;I<m;I++)_[I]=~T.g[I];return new a(_,~T.h).add(A)}n.abs=function(){return N(this)?k(this):this},n.add=function(T){const m=Math.max(this.g.length,T.g.length),_=[];let I=0;for(let E=0;E<=m;E++){let v=I+(this.i(E)&65535)+(T.i(E)&65535),g=(v>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);I=g>>>16,v&=65535,g&=65535,_[E]=g<<16|v}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(T,m){return T.add(k(m))}n.j=function(T){if(D(this)||D(T))return y;if(N(this))return N(T)?k(this).j(k(T)):k(k(this).j(T));if(N(T))return k(this.j(k(T)));if(this.l(P)<0&&T.l(P)<0)return d(this.m()*T.m());const m=this.g.length+T.g.length,_=[];for(var I=0;I<2*m;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<T.g.length;E++){const v=this.i(I)>>>16,g=this.i(I)&65535,we=T.i(E)>>>16,vt=T.i(E)&65535;_[2*I+2*E]+=g*vt,H(_,2*I+2*E),_[2*I+2*E+1]+=v*vt,H(_,2*I+2*E+1),_[2*I+2*E+1]+=g*we,H(_,2*I+2*E+1),_[2*I+2*E+2]+=v*we,H(_,2*I+2*E+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function H(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function K(T,m){this.g=T,this.h=m}function ce(T,m){if(D(m))throw Error("division by zero");if(D(T))return new K(y,y);if(N(T))return m=ce(k(T),m),new K(k(m.g),k(m.h));if(N(m))return m=ce(T,k(m)),new K(k(m.g),m.h);if(T.g.length>30){if(N(T)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,I=m;I.l(T)<=0;)_=Ae(_),I=Ae(I);var E=se(_,1),v=se(I,1);for(I=se(I,2),_=se(_,2);!D(I);){var g=v.add(I);g.l(T)<=0&&(E=E.add(_),v=g),I=se(I,1),_=se(_,1)}return m=j(T,E.j(m)),new K(E,m)}for(E=y;T.l(m)>=0;){for(_=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),v=d(_),g=v.j(m);N(g)||g.l(T)>0;)_-=I,v=d(_),g=v.j(m);D(v)&&(v=A),E=E.add(v),T=j(T,g)}return new K(E,T)}n.B=function(T){return ce(this,T).h},n.and=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)&T.i(I);return new a(_,this.h&T.h)},n.or=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)|T.i(I);return new a(_,this.h|T.h)},n.xor=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)^T.i(I);return new a(_,this.h^T.h)};function Ae(T){const m=T.g.length+1,_=[];for(let I=0;I<m;I++)_[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(_,T.h)}function se(T,m){const _=m>>5;m%=32;const I=T.g.length-_,E=[];for(let v=0;v<I;v++)E[v]=m>0?T.i(v+_)>>>m|T.i(v+_+1)<<32-m:T.i(v+_);return new a(E,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,du=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,ft=a}).apply(typeof Oa<"u"?Oa:typeof self<"u"?self:typeof window<"u"?window:{});var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fu,xn,pu,Or,_i,mu,gu,_u;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cr=="object"&&Cr];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in l))break e;l=l[w]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&e(l,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var l=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&l.push([f,c[f]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,l){return i.call.apply(i.bind,arguments)}function d(i,c,l){return d=h,d.apply(null,arguments)}function p(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function y(i,c){function l(){}l.prototype=c.prototype,i.Z=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(f,w,R){for(var b=Array(arguments.length-2),B=2;B<arguments.length;B++)b[B-2]=arguments[B];return c.prototype[w].apply(f,b)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function P(i){const c=i.length;if(c>0){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function D(i,c){for(let f=1;f<arguments.length;f++){const w=arguments[f];var l=typeof w;if(l=l!="object"?l:w?Array.isArray(w)?"array":l:"null",l=="array"||l=="object"&&typeof w.length=="number"){l=i.length||0;const R=w.length||0;i.length=l+R;for(let b=0;b<R;b++)i[l+b]=w[b]}else i.push(w)}}class N{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function k(i){a.setTimeout(()=>{throw i},0)}function j(){var i=T;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class H{constructor(){this.h=this.g=null}add(c,l){const f=K.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var K=new N(()=>new ce,i=>i.reset());class ce{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,se=!1,T=new H,m=()=>{const i=Promise.resolve(void 0);Ae=()=>{i.then(_)}};function _(){for(var i;i=j();){try{i.h.call(i.g)}catch(l){k(l)}var c=K;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}se=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return i})();function g(i){return/^[\s\xa0]*$/.test(i)}function we(i,c){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}y(we,E),we.prototype.init=function(i,c){const l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&we.Z.h.call(this)},we.prototype.h=function(){we.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),Ih=0;function wh(i,c,l,f,w){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=w,this.key=++Ih,this.da=this.fa=!1}function fr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function pr(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function vh(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function wo(i){const c={};for(const l in i)c[l]=i[l];return c}const vo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ao(i,c){let l,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(l in f)i[l]=f[l];for(let R=0;R<vo.length;R++)l=vo[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function mr(i){this.src=i,this.g={},this.h=0}mr.prototype.add=function(i,c,l,f,w){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const b=Vs(i,c,f,w);return b>-1?(c=i[b],l||(c.fa=!1)):(c=new wh(c,this.src,R,!!f,w),c.fa=l,i.push(c)),c};function ks(i,c){const l=c.type;if(l in i.g){var f=i.g[l],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=w>=0)&&Array.prototype.splice.call(f,w,1),R&&(fr(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Vs(i,c,l,f){for(let w=0;w<i.length;++w){const R=i[w];if(!R.da&&R.listener==c&&R.capture==!!l&&R.ha==f)return w}return-1}var Ds="closure_lm_"+(Math.random()*1e6|0),Ns={};function Ro(i,c,l,f,w){if(Array.isArray(c)){for(let R=0;R<c.length;R++)Ro(i,c[R],l,f,w);return null}return l=Co(l),i&&i[vt]?i.J(c,l,u(f)?!!f.capture:!1,w):Ah(i,c,l,!1,f,w)}function Ah(i,c,l,f,w,R){if(!c)throw Error("Invalid event type");const b=u(w)?!!w.capture:!!w;let B=Ms(i);if(B||(i[Ds]=B=new mr(i)),l=B.add(c,l,f,b,R),l.proxy)return l;if(f=Rh(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)v||(w=b),w===void 0&&(w=!1),i.addEventListener(c.toString(),f,w);else if(i.attachEvent)i.attachEvent(Po(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Rh(){function i(l){return c.call(i.src,i.listener,l)}const c=Sh;return i}function So(i,c,l,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)So(i,c[R],l,f,w);else f=u(f)?!!f.capture:!!f,l=Co(l),i&&i[vt]?(i=i.i,R=String(c).toString(),R in i.g&&(c=i.g[R],l=Vs(c,l,f,w),l>-1&&(fr(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete i.g[R],i.h--)))):i&&(i=Ms(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Vs(c,l,f,w)),(l=i>-1?c[i]:null)&&Os(l))}function Os(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[vt])ks(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(Po(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Ms(c))?(ks(l,i),l.h==0&&(l.src=null,c[Ds]=null)):fr(i)}}}function Po(i){return i in Ns?Ns[i]:Ns[i]="on"+i}function Sh(i,c){if(i.da)i=!0;else{c=new we(c,this);const l=i.listener,f=i.ha||i.src;i.fa&&Os(i),i=l.call(f,c)}return i}function Ms(i){return i=i[Ds],i instanceof mr?i:null}var Ls="__closure_events_fn_"+(Math.random()*1e9>>>0);function Co(i){return typeof i=="function"?i:(i[Ls]||(i[Ls]=function(c){return i.handleEvent(c)}),i[Ls])}function me(){I.call(this),this.i=new mr(this),this.M=this,this.G=null}y(me,I),me.prototype[vt]=!0,me.prototype.removeEventListener=function(i,c,l,f){So(this,i,c,l,f)};function Te(i,c){var l,f=i.G;if(f)for(l=[];f;f=f.G)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new E(c,i);else if(c instanceof E)c.target=c.target||i;else{var w=c;c=new E(f,i),Ao(c,w)}w=!0;let R,b;if(l)for(b=l.length-1;b>=0;b--)R=c.g=l[b],w=gr(R,f,!0,c)&&w;if(R=c.g=i,w=gr(R,f,!0,c)&&w,w=gr(R,f,!1,c)&&w,l)for(b=0;b<l.length;b++)R=c.g=l[b],w=gr(R,f,!1,c)&&w}me.prototype.N=function(){if(me.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const l=i.g[c];for(let f=0;f<l.length;f++)fr(l[f]);delete i.g[c],i.h--}}this.G=null},me.prototype.J=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},me.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function gr(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let R=0;R<c.length;++R){const b=c[R];if(b&&!b.da&&b.capture==l){const B=b.listener,ie=b.ha||b.src;b.fa&&ks(i.i,b),w=B.call(ie,f)!==!1&&w}}return w&&!f.defaultPrevented}function Ph(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function bo(i){i.g=Ph(()=>{i.g=null,i.i&&(i.i=!1,bo(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Ch extends I{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:bo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function En(i){I.call(this),this.h=i,this.g={}}y(En,I);var ko=[];function Vo(i){pr(i.g,function(c,l){this.g.hasOwnProperty(l)&&Os(c)},i),i.g={}}En.prototype.N=function(){En.Z.N.call(this),Vo(this)},En.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xs=a.JSON.stringify,bh=a.JSON.parse,kh=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Do(){}function No(){}var Tn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fs(){E.call(this,"d")}y(Fs,E);function Us(){E.call(this,"c")}y(Us,E);var At={},Oo=null;function _r(){return Oo=Oo||new me}At.Ia="serverreachability";function Mo(i){E.call(this,At.Ia,i)}y(Mo,E);function In(i){const c=_r();Te(c,new Mo(c))}At.STAT_EVENT="statevent";function Lo(i,c){E.call(this,At.STAT_EVENT,i),this.stat=c}y(Lo,E);function Ie(i){const c=_r();Te(c,new Lo(c,i))}At.Ja="timingevent";function xo(i,c){E.call(this,At.Ja,i),this.size=c}y(xo,E);function wn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function vn(){this.g=!0}vn.prototype.ua=function(){this.g=!1};function Vh(i,c,l,f,w,R){i.info(function(){if(i.g)if(R){var b="",B=R.split("&");for(let Q=0;Q<B.length;Q++){var ie=B[Q].split("=");if(ie.length>1){const ue=ie[0];ie=ie[1];const Oe=ue.split("_");b=Oe.length>=2&&Oe[1]=="type"?b+(ue+"="+ie+"&"):b+(ue+"=redacted&")}}}else b=null;else b=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+l+`
`+b})}function Dh(i,c,l,f,w,R,b){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+l+`
`+R+" "+b})}function $t(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Oh(i,l)+(f?" "+f:"")})}function Nh(i,c){i.info(function(){return"TIMEOUT: "+c})}vn.prototype.info=function(){};function Oh(i,c){if(!i.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var l=R[i];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let b=1;b<f.length;b++)f[b]=""}}}}return xs(R)}catch{return c}}var yr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Fo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Uo;function Bs(){}y(Bs,Do),Bs.prototype.g=function(){return new XMLHttpRequest},Uo=new Bs;function An(i){return encodeURIComponent(String(i))}function Mh(i){var c=1;i=i.split(":");const l=[];for(;c>0&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function Ye(i,c,l,f){this.j=i,this.i=c,this.l=l,this.S=f||1,this.V=new En(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Bo}function Bo(){this.i=null,this.g="",this.h=!1}var jo={},js={};function qs(i,c,l){i.M=1,i.A=Tr(Ne(c)),i.u=l,i.R=!0,qo(i,null)}function qo(i,c){i.F=Date.now(),Er(i),i.B=Ne(i.A);var l=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),ta(l.i,"t",f),i.C=0,l=i.j.L,i.h=new Bo,i.g=Ea(i.j,l?c:null,!i.u),i.P>0&&(i.O=new Ch(d(i.Y,i,i.g),i.P)),c=i.V,l=i.g,f=i.ba;var w="readystatechange";Array.isArray(w)||(w&&(ko[0]=w.toString()),w=ko);for(let R=0;R<w.length;R++){const b=Ro(l,w[R],f||c.handleEvent,!1,c.h||c);if(!b)break;c.g[b.key]=b}c=i.J?wo(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),In(),Vh(i.i,i.v,i.B,i.l,i.S,i.u)}Ye.prototype.ba=function(i){i=i.target;const c=this.O;c&&tt(i)==3?c.j():this.Y(i)},Ye.prototype.Y=function(i){try{if(i==this.g)e:{const B=tt(this.g),ie=this.g.ya(),Q=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||ca(this.g)))){this.K||B!=4||ie==7||(ie==8||Q<=0?In(3):In(2)),$s(this);var c=this.g.ca();this.X=c;var l=Lh(this);if(this.o=c==200,Dh(this.i,this.v,this.B,this.l,this.S,B,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var R=f;break t}}R=null}if(i=R)$t(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zs(this,i);else{this.o=!1,this.m=3,Ie(12),Rt(this),Rn(this);break e}}if(this.R){i=!0;let ue;for(;!this.K&&this.C<l.length;)if(ue=xh(this,l),ue==js){B==4&&(this.m=4,Ie(14),i=!1),$t(this.i,this.l,null,"[Incomplete Response]");break}else if(ue==jo){this.m=4,Ie(15),$t(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else $t(this.i,this.l,ue,null),zs(this,ue);if($o(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||l.length!=0||this.h.h||(this.m=1,Ie(16),i=!1),this.o=this.o&&i,!i)$t(this.i,this.l,l,"[Invalid Chunked Response]"),Rt(this),Rn(this);else if(l.length>0&&!this.W){this.W=!0;var b=this.j;b.g==this&&b.aa&&!b.P&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Ys(b),b.P=!0,Ie(11))}}else $t(this.i,this.l,l,null),zs(this,l);B==4&&Rt(this),this.o&&!this.K&&(B==4?ma(this.j,this):(this.o=!1,Er(this)))}else Xh(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,Ie(12)):(this.m=0,Ie(13)),Rt(this),Rn(this)}}}catch{}finally{}};function Lh(i){if(!$o(i))return i.g.la();const c=ca(i.g);if(c==="")return"";let l="";const f=c.length,w=tt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Rt(i),Rn(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<f;R++)i.h.h=!0,l+=i.h.i.decode(c[R],{stream:!(w&&R==f-1)});return c.length=0,i.h.g+=l,i.C=0,i.h.g}function $o(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function xh(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?js:(l=Number(c.substring(l,f)),isNaN(l)?jo:(f+=1,f+l>c.length?js:(c=c.slice(f,f+l),i.C=f+l,c)))}Ye.prototype.cancel=function(){this.K=!0,Rt(this)};function Er(i){i.T=Date.now()+i.H,zo(i,i.H)}function zo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=wn(d(i.aa,i),c)}function $s(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Ye.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Nh(this.i,this.B),this.M!=2&&(In(),Ie(17)),Rt(this),this.m=2,Rn(this)):zo(this,this.T-i)};function Rn(i){i.j.I==0||i.K||ma(i.j,i)}function Rt(i){$s(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Vo(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function zs(i,c){try{var l=i.j;if(l.I!=0&&(l.g==i||Hs(l.h,i))){if(!i.L&&Hs(l.h,i)&&l.I==3){try{var f=l.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)Rr(l),vr(l);else break e;Xs(l),Ie(18)}}else l.xa=w[1],0<l.xa-l.K&&w[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=wn(d(l.Va,l),6e3));Go(l.h)<=1&&l.ta&&(l.ta=void 0)}else Pt(l,11)}else if((i.L||l.g==i)&&Rr(l),!g(c))for(w=l.Ba.g.parse(c),c=0;c<w.length;c++){let Q=w[c];const ue=Q[0];if(!(ue<=l.K))if(l.K=ue,Q=Q[1],l.I==2)if(Q[0]=="c"){l.M=Q[1],l.ba=Q[2];const Oe=Q[3];Oe!=null&&(l.ka=Oe,l.j.info("VER="+l.ka));const Ct=Q[4];Ct!=null&&(l.za=Ct,l.j.info("SVER="+l.za));const nt=Q[5];nt!=null&&typeof nt=="number"&&nt>0&&(f=1.5*nt,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const rt=i.g;if(rt){const Pr=rt.g?rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pr){var R=f.h;R.g||Pr.indexOf("spdy")==-1&&Pr.indexOf("quic")==-1&&Pr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ws(R,R.h),R.h=null))}if(f.G){const Zs=rt.g?rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Zs&&(f.wa=Zs,J(f.J,f.G,Zs))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var b=i;if(f.na=ya(f,f.L?f.ba:null,f.W),b.L){Ko(f.h,b);var B=b,ie=f.O;ie&&(B.H=ie),B.D&&($s(B),Er(B)),f.g=b}else fa(f);l.i.length>0&&Ar(l)}else Q[0]!="stop"&&Q[0]!="close"||Pt(l,7);else l.I==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Pt(l,7):Js(l):Q[0]!="noop"&&l.l&&l.l.qa(Q),l.A=0)}}In(4)}catch{}}var Fh=class{constructor(i,c){this.g=i,this.map=c}};function Ho(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Wo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Go(i){return i.h?1:i.g?i.g.size:0}function Hs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Ws(i,c){i.g?i.g.add(c):i.h=c}function Ko(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Ho.prototype.cancel=function(){if(this.i=Qo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Qo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.G);return c}return P(i.i)}var Jo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uh(i,c){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const f=i[l].indexOf("=");let w,R=null;f>=0?(w=i[l].substring(0,f),R=i[l].substring(f+1)):w=i[l],c(w,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Ze(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof Ze?(this.l=i.l,Sn(this,i.j),this.o=i.o,this.g=i.g,Pn(this,i.u),this.h=i.h,Gs(this,na(i.i)),this.m=i.m):i&&(c=String(i).match(Jo))?(this.l=!1,Sn(this,c[1]||"",!0),this.o=Cn(c[2]||""),this.g=Cn(c[3]||"",!0),Pn(this,c[4]),this.h=Cn(c[5]||"",!0),Gs(this,c[6]||"",!0),this.m=Cn(c[7]||"")):(this.l=!1,this.i=new kn(null,this.l))}Ze.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(bn(c,Xo,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(bn(c,Xo,!0),"@"),i.push(An(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(bn(l,l.charAt(0)=="/"?qh:jh,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",bn(l,zh)),i.join("")},Ze.prototype.resolve=function(i){const c=Ne(this);let l=!!i.j;l?Sn(c,i.j):l=!!i.o,l?c.o=i.o:l=!!i.g,l?c.g=i.g:l=i.u!=null;var f=i.h;if(l)Pn(c,i.u);else if(l=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=c.h.lastIndexOf("/");w!=-1&&(f=c.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const R=[];for(let b=0;b<w.length;){const B=w[b++];B=="."?f&&b==w.length&&R.push(""):B==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&b==w.length&&R.push("")):(R.push(B),f=!0)}f=R.join("/")}else f=w}return l?c.h=f:l=i.i.toString()!=="",l?Gs(c,na(i.i)):l=!!i.m,l&&(c.m=i.m),c};function Ne(i){return new Ze(i)}function Sn(i,c,l){i.j=l?Cn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Pn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Gs(i,c,l){c instanceof kn?(i.i=c,Hh(i.i,i.l)):(l||(c=bn(c,$h)),i.i=new kn(c,i.l))}function J(i,c,l){i.i.set(c,l)}function Tr(i){return J(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Cn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function bn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,Bh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Bh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Xo=/[#\/\?@]/g,jh=/[#\?:]/g,qh=/[#\?]/g,$h=/[#\?@]/g,zh=/#/g;function kn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function St(i){i.g||(i.g=new Map,i.h=0,i.i&&Uh(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=kn.prototype,n.add=function(i,c){St(this),this.i=null,i=zt(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function Yo(i,c){St(i),c=zt(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Zo(i,c){return St(i),c=zt(i,c),i.g.has(c)}n.forEach=function(i,c){St(this),this.g.forEach(function(l,f){l.forEach(function(w){i.call(c,w,f,this)},this)},this)};function ea(i,c){St(i);let l=[];if(typeof c=="string")Zo(i,c)&&(l=l.concat(i.g.get(zt(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)l=l.concat(i[c]);return l}n.set=function(i,c){return St(this),this.i=null,i=zt(this,i),Zo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=ea(this,i),i.length>0?String(i[0]):c):c};function ta(i,c,l){Yo(i,c),l.length>0&&(i.i=null,i.g.set(zt(i,c),P(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var l=c[f];const w=An(l);l=ea(this,l);for(let R=0;R<l.length;R++){let b=w;l[R]!==""&&(b+="="+An(l[R])),i.push(b)}}return this.i=i.join("&")};function na(i){const c=new kn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function zt(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Hh(i,c){c&&!i.j&&(St(i),i.i=null,i.g.forEach(function(l,f){const w=f.toLowerCase();f!=w&&(Yo(this,f),ta(this,w,l))},i)),i.j=c}function Wh(i,c){const l=new vn;if(a.Image){const f=new Image;f.onload=p(et,l,"TestLoadImage: loaded",!0,c,f),f.onerror=p(et,l,"TestLoadImage: error",!1,c,f),f.onabort=p(et,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(et,l,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Gh(i,c){const l=new vn,f=new AbortController,w=setTimeout(()=>{f.abort(),et(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?et(l,"TestPingServer: ok",!0,c):et(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),et(l,"TestPingServer: error",!1,c)})}function et(i,c,l,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(l)}catch{}}function Kh(){this.g=new kh}function Ks(i){this.i=i.Sb||null,this.h=i.ab||!1}y(Ks,Do),Ks.prototype.g=function(){return new Ir(this.i,this.h)};function Ir(i,c){me.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Ir,me),n=Ir.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Dn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ra(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function ra(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Vn(this):Dn(this),this.readyState==3&&ra(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Vn(this))},n.Na=function(i){this.g&&(this.response=i,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Dn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Dn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ir.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function sa(i){let c="";return pr(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Qs(i,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=sa(l),typeof i=="string"?l!=null&&An(l):J(i,c,l))}function ee(i){me.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ee,me);var Qh=/^https?$/i,Jh=["POST","PUT"];n=ee.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Uo.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){ia(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)l.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),w=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Jh,c,void 0)>=0)||f||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of l)this.g.setRequestHeader(R,b);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){ia(this,R)}};function ia(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,oa(i),wr(i)}function oa(i){i.A||(i.A=!0,Te(i,"complete"),Te(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Te(this,"complete"),Te(this,"abort"),wr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),ee.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?aa(this):this.Xa())},n.Xa=function(){aa(this)};function aa(i){if(i.h&&typeof o<"u"){if(i.v&&tt(i)==4)setTimeout(i.Ca.bind(i),0);else if(Te(i,"readystatechange"),tt(i)==4){i.h=!1;try{const R=i.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=R===0){let b=String(i.D).match(Jo)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),f=!Qh.test(b?b.toLowerCase():"")}l=f}if(l)Te(i,"complete"),Te(i,"success");else{i.o=6;try{var w=tt(i)>2?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.ca()+"]",oa(i)}}finally{wr(i)}}}}function wr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,c||Te(i,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return tt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),bh(c)}};function ca(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Xh(i){const c={};i=(i.g&&tt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var l=Mh(i[f]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=c[w]||[];c[w]=R,R.push(l)}vh(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nn(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function ua(i){this.za=0,this.i=[],this.j=new vn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Nn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Nn("baseRetryDelayMs",5e3,i),this.Za=Nn("retryDelaySeedMs",1e4,i),this.Ta=Nn("forwardChannelMaxRetries",2,i),this.va=Nn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Ho(i&&i.concurrentRequestLimit),this.Ba=new Kh,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ua.prototype,n.ka=8,n.I=1,n.connect=function(i,c,l,f){Ie(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=ya(this,null,this.W),Ar(this)};function Js(i){if(la(i),i.I==3){var c=i.V++,l=Ne(i.J);if(J(l,"SID",i.M),J(l,"RID",c),J(l,"TYPE","terminate"),On(i,l),c=new Ye(i,i.j,c),c.M=2,c.A=Tr(Ne(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=Ea(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Er(c)}_a(i)}function vr(i){i.g&&(Ys(i),i.g.cancel(),i.g=null)}function la(i){vr(i),i.v&&(a.clearTimeout(i.v),i.v=null),Rr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Ar(i){if(!Wo(i.h)&&!i.m){i.m=!0;var c=i.Ea;Ae||m(),se||(Ae(),se=!0),T.add(c,i),i.D=0}}function Yh(i,c){return Go(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=wn(d(i.Ea,i,c),ga(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const w=new Ye(this,this.j,i);let R=this.o;if(this.U&&(R?(R=wo(R),Ao(R,this.U)):R=this.U),this.u!==null||this.R||(w.J=R,R=null),this.S)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=da(this,w,c),l=Ne(this.J),J(l,"RID",i),J(l,"CVER",22),this.G&&J(l,"X-HTTP-Session-Id",this.G),On(this,l),R&&(this.R?c="headers="+An(sa(R))+"&"+c:this.u&&Qs(l,this.u,R)),Ws(this.h,w),this.Ra&&J(l,"TYPE","init"),this.S?(J(l,"$req",c),J(l,"SID","null"),w.U=!0,qs(w,l,null)):qs(w,l,c),this.I=2}}else this.I==3&&(i?ha(this,i):this.i.length==0||Wo(this.h)||ha(this))};function ha(i,c){var l;c?l=c.l:l=i.V++;const f=Ne(i.J);J(f,"SID",i.M),J(f,"RID",l),J(f,"AID",i.K),On(i,f),i.u&&i.o&&Qs(f,i.u,i.o),l=new Ye(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),c&&(i.i=c.G.concat(i.i)),c=da(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Ws(i.h,l),qs(l,f,c)}function On(i,c){i.H&&pr(i.H,function(l,f){J(c,f,l)}),i.l&&pr({},function(l,f){J(c,f,l)})}function da(i,c,l){l=Math.min(i.i.length,l);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var w=i.i;let B=-1;for(;;){const ie=["count="+l];B==-1?l>0?(B=w[0].g,ie.push("ofs="+B)):B=0:ie.push("ofs="+B);let Q=!0;for(let ue=0;ue<l;ue++){var R=w[ue].g;const Oe=w[ue].map;if(R-=B,R<0)B=Math.max(0,w[ue].g-100),Q=!1;else try{R="req"+R+"_"||"";try{var b=Oe instanceof Map?Oe:Object.entries(Oe);for(const[Ct,nt]of b){let rt=nt;u(nt)&&(rt=xs(nt)),ie.push(R+Ct+"="+encodeURIComponent(rt))}}catch(Ct){throw ie.push(R+"type="+encodeURIComponent("_badmap")),Ct}}catch{f&&f(Oe)}}if(Q){b=ie.join("&");break e}}b=void 0}return i=i.i.splice(0,l),c.G=i,b}function fa(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;Ae||m(),se||(Ae(),se=!0),T.add(c,i),i.A=0}}function Xs(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=wn(d(i.Da,i),ga(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,pa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=wn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ie(10),vr(this),pa(this))};function Ys(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function pa(i){i.g=new Ye(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Ne(i.na);J(c,"RID","rpc"),J(c,"SID",i.M),J(c,"AID",i.K),J(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&J(c,"TO",i.ia),J(c,"TYPE","xmlhttp"),On(i,c),i.u&&i.o&&Qs(c,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=Tr(Ne(c)),l.u=null,l.R=!0,qo(l,i)}n.Va=function(){this.C!=null&&(this.C=null,vr(this),Xs(this),Ie(19))};function Rr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function ma(i,c){var l=null;if(i.g==c){Rr(i),Ys(i),i.g=null;var f=2}else if(Hs(i.h,c))l=c.G,Ko(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var w=i.D;f=_r(),Te(f,new xo(f,l)),Ar(i)}else fa(i);else if(w=c.m,w==3||w==0&&c.X>0||!(f==1&&Yh(i,c)||f==2&&Xs(i)))switch(l&&l.length>0&&(c=i.h,c.i=c.i.concat(l)),w){case 1:Pt(i,5);break;case 4:Pt(i,10);break;case 3:Pt(i,6);break;default:Pt(i,2)}}}function ga(i,c){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*c}function Pt(i,c){if(i.j.info("Error code "+c),c==2){var l=d(i.bb,i),f=i.Ua;const w=!f;f=new Ze(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Sn(f,"https"),Tr(f),w?Wh(f.toString(),l):Gh(f.toString(),l)}else Ie(2);i.I=0,i.l&&i.l.pa(c),_a(i),la(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function _a(i){if(i.I=0,i.ja=[],i.l){const c=Qo(i.h);(c.length!=0||i.i.length!=0)&&(D(i.ja,c),D(i.ja,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.oa()}}function ya(i,c,l){var f=l instanceof Ze?Ne(l):new Ze(l);if(f.g!="")c&&(f.g=c+"."+f.g),Pn(f,f.u);else{var w=a.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const R=new Ze(null);f&&Sn(R,f),c&&(R.g=c),w&&Pn(R,w),l&&(R.h=l),f=R}return l=i.G,c=i.wa,l&&c&&J(f,l,c),J(f,"VER",i.ka),On(i,f),f}function Ea(i,c,l){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new ee(new Ks({ab:l})):new ee(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ta(){}n=Ta.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Sr(){}Sr.prototype.g=function(i,c){return new Re(i,c)};function Re(i,c){me.call(this),this.g=new ua(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!g(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!g(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Ht(this)}y(Re,me),Re.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Re.prototype.close=function(){Js(this.g)},Re.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=xs(i),i=l);c.i.push(new Fh(c.Ya++,i)),c.I==3&&Ar(c)},Re.prototype.N=function(){this.g.l=null,delete this.j,Js(this.g),delete this.g,Re.Z.N.call(this)};function Ia(i){Fs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const l in c){i=l;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}y(Ia,Fs);function wa(){Us.call(this),this.status=1}y(wa,Us);function Ht(i){this.g=i}y(Ht,Ta),Ht.prototype.ra=function(){Te(this.g,"a")},Ht.prototype.qa=function(i){Te(this.g,new Ia(i))},Ht.prototype.pa=function(i){Te(this.g,new wa)},Ht.prototype.oa=function(){Te(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,Re.prototype.send=Re.prototype.o,Re.prototype.open=Re.prototype.m,Re.prototype.close=Re.prototype.close,_u=function(){return new Sr},gu=function(){return _r()},mu=At,_i={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yr.NO_ERROR=0,yr.TIMEOUT=8,yr.HTTP_ERROR=6,Or=yr,Fo.COMPLETE="complete",pu=Fo,No.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",me.prototype.listen=me.prototype.J,xn=No,ee.prototype.listenOnce=ee.prototype.K,ee.prototype.getLastError=ee.prototype.Ha,ee.prototype.getLastErrorCode=ee.prototype.ya,ee.prototype.getStatus=ee.prototype.ca,ee.prototype.getResponseJson=ee.prototype.La,ee.prototype.getResponseText=ee.prototype.la,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Fa,fu=ee}).apply(typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{});const Ma="@firebase/firestore",La="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Li("@firebase/firestore");function Wt(){return Mt.logLevel}function V(n,...e){if(Mt.logLevel<=q.DEBUG){const t=e.map(Ui);Mt.debug(`Firestore (${fn}): ${n}`,...t)}}function Ke(n,...e){if(Mt.logLevel<=q.ERROR){const t=e.map(Ui);Mt.error(`Firestore (${fn}): ${n}`,...t)}}function rn(n,...e){if(Mt.logLevel<=q.WARN){const t=e.map(Ui);Mt.warn(`Firestore (${fn}): ${n}`,...t)}}function Ui(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,yu(n,r,t)}function yu(n,e,t){let r=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ke(r),new Error(r)}function G(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||yu(e,s,r)}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Xe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(_e.UNAUTHENTICATED)))}shutdown(){}}class Bf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class jf{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Vt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;e.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},u=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>u(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Vt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new Eu(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new _e(e)}}class qf{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $f{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new qf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(_e.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xa(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xa(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Hf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function $(n,e){return n<e?-1:n>e?1:0}function yi(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),o=e.charAt(r);if(s!==o)return ii(s)===ii(o)?$(s,o):ii(s)?1:-1}return $(n.length,e.length)}const Wf=55296,Gf=57343;function ii(n){const e=n.charCodeAt(0);return e>=Wf&&e<=Gf}function sn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="__name__";class Me{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&x(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Me.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Me?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=Me.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return $(e.length,t.length)}static compareSegments(e,t){const r=Me.isNumericId(e),s=Me.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Me.extractNumericId(e).compare(Me.extractNumericId(t)):yi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ft.fromString(e.substring(4,e.length-2))}}class X extends Me{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new X(t)}static emptyPath(){return new X([])}}const Kf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends Me{construct(e,t,r){return new fe(e,t,r)}static isValidIdentifier(e){return Kf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fa}static keyField(){return new fe([Fa])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(X.fromString(e))}static fromName(e){return new M(X.fromString(e).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new X(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Qf(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ua(n){if(!M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ba(n){if(M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Iu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ji(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function qn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ji(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function re(n,e){const t={typeString:n};return e&&(t.value=e),t}function ir(n,e){if(!Iu(n))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new O(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=-62135596800,qa=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*qa);return new Y(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ja)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qa}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ir(e,Y._jsonSchema))return new Y(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ja;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:re("string",Y._jsonSchemaVersion),seconds:re("number"),nanoseconds:re("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new Y(0,0))}static max(){return new F(new Y(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qn=-1;function Jf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new Y(t+1,0):new Y(t,r));return new gt(s,M.empty(),e)}function Xf(n){return new gt(n.readTime,n.key,Qn)}class gt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new gt(F.min(),M.empty(),Qn)}static max(){return new gt(F.max(),M.empty(),Qn)}}function Yf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ep{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Zf)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):S.reject(t)}static resolve(e){return new S(((t,r)=>{t(e)}))}static reject(e){return new S(((t,r)=>{r(e)}))}static waitFor(e){return new S(((t,r)=>{let s=0,o=0,a=!1;e.forEach((u=>{++s,u.next((()=>{++o,a&&o===s&&t()}),(h=>r(h)))})),a=!0,o===s&&t()}))}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next((s=>s?S.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,o)=>{r.push(t.call(this,s,o))})),this.waitFor(r)}static mapArray(e,t){return new S(((r,s)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next((p=>{a[d]=p,++u,u===o&&r(a)}),(p=>s(p)))}}))}static doWhile(e,t){return new S(((r,s)=>{const o=()=>{e()===!0?t().next((()=>{o()}),s):r()};o()}))}}function tp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function mn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ds{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ds.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=-1;function fs(n){return n==null}function Wr(n){return n===0&&1/n==-1/0}function np(n){return typeof n=="number"&&Number.isInteger(n)&&!Wr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="";function rp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=$a(e)),e=sp(n.get(t),e);return $a(e)}function sp(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case wu:t+="";break;default:t+=o}}return t}function $a(n){return n+wu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ft(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new br(this.root,e,this.comparator,!1)}getReverseIterator(){return new br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new br(this.root,e,this.comparator,!0)}}class br{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??de.RED,this.left=s??de.EMPTY,this.right=o??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new de(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return de.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ha(this.data.getIterator())}getIteratorFrom(e){return new Ha(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ae(this.comparator);return t.data=e,t}}class Ha{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new ke([])}unionWith(e){let t=new ae(fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Au extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Au("Invalid base64 string: "+o):o}})(e);return new pe(t)}static fromUint8Array(e){const t=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const ip=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(n){if(G(!!n,39018),typeof n=="string"){let e=0;const t=ip.exec(n);if(G(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(n.seconds),nanos:te(n.nanos)}}function te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yt(n){return typeof n=="string"?pe.fromBase64String(n):pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="server_timestamp",Su="__type__",Pu="__previous_value__",Cu="__local_write_time__";function $i(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Su])==null?void 0:r.stringValue)===Ru}function ps(n){const e=n.mapValue.fields[Pu];return $i(e)?ps(e):e}function Jn(n){const e=_t(n.mapValue.fields[Cu].timestampValue);return new Y(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,r,s,o,a,u,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const Gr="(default)";class Xn{constructor(e,t){this.projectId=e,this.database=t||Gr}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database===Gr}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="__type__",ap="__max__",kr={mapValue:{}},ku="__vector__",Kr="value";function Et(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$i(n)?4:up(n)?9007199254740991:cp(n)?10:11:x(28295,{value:n})}function qe(n,e){if(n===e)return!0;const t=Et(n);if(t!==Et(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jn(n).isEqual(Jn(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=_t(s.timestampValue),u=_t(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,o){return yt(s.bytesValue).isEqual(yt(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,o){return te(s.geoPointValue.latitude)===te(o.geoPointValue.latitude)&&te(s.geoPointValue.longitude)===te(o.geoPointValue.longitude)})(n,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return te(s.integerValue)===te(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=te(s.doubleValue),u=te(o.doubleValue);return a===u?Wr(a)===Wr(u):isNaN(a)&&isNaN(u)}return!1})(n,e);case 9:return sn(n.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(za(a)!==za(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!qe(a[h],u[h])))return!1;return!0})(n,e);default:return x(52216,{left:n})}}function Yn(n,e){return(n.values||[]).find((t=>qe(t,e)))!==void 0}function on(n,e){if(n===e)return 0;const t=Et(n),r=Et(e);if(t!==r)return $(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const u=te(o.integerValue||o.doubleValue),h=te(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1})(n,e);case 3:return Wa(n.timestampValue,e.timestampValue);case 4:return Wa(Jn(n),Jn(e));case 5:return yi(n.stringValue,e.stringValue);case 6:return(function(o,a){const u=yt(o),h=yt(a);return u.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=$(u[d],h[d]);if(p!==0)return p}return $(u.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const u=$(te(o.latitude),te(a.latitude));return u!==0?u:$(te(o.longitude),te(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ga(n.arrayValue,e.arrayValue);case 10:return(function(o,a){var A,P,D,N;const u=o.fields||{},h=a.fields||{},d=(A=u[Kr])==null?void 0:A.arrayValue,p=(P=h[Kr])==null?void 0:P.arrayValue,y=$(((D=d==null?void 0:d.values)==null?void 0:D.length)||0,((N=p==null?void 0:p.values)==null?void 0:N.length)||0);return y!==0?y:Ga(d,p)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===kr.mapValue&&a===kr.mapValue)return 0;if(o===kr.mapValue)return 1;if(a===kr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let y=0;y<h.length&&y<p.length;++y){const A=yi(h[y],p[y]);if(A!==0)return A;const P=on(u[h[y]],d[p[y]]);if(P!==0)return P}return $(h.length,p.length)})(n.mapValue,e.mapValue);default:throw x(23264,{he:t})}}function Wa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);const t=_t(n),r=_t(e),s=$(t.seconds,r.seconds);return s!==0?s:$(t.nanos,r.nanos)}function Ga(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=on(t[s],r[s]);if(o)return o}return $(t.length,r.length)}function an(n){return Ei(n)}function Ei(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=_t(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return yt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return M.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=Ei(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ei(t.fields[a])}`;return s+"}"})(n.mapValue):x(61005,{value:n})}function Mr(n){switch(Et(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ps(n);return e?16+Mr(e):16;case 5:return 2*n.stringValue.length;case 6:return yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+Mr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ft(r.fields,((o,a)=>{s+=o.length+Mr(a)})),s})(n.mapValue);default:throw x(13486,{value:n})}}function Ti(n){return!!n&&"integerValue"in n}function zi(n){return!!n&&"arrayValue"in n}function Ka(n){return!!n&&"nullValue"in n}function Qa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Lr(n){return!!n&&"mapValue"in n}function cp(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[bu])==null?void 0:r.stringValue)===ku}function $n(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ft(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=$n(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$n(n.arrayValue.values[t]);return e}return{...n}}function up(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ap}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Lr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$n(t)}setAll(e){let t=fe.emptyPath(),r={},s=[];e.forEach(((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=$n(a):s.push(u.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());Lr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Lr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ft(t,((s,o)=>e[s]=o));for(const s of r)delete e[s]}clone(){return new Pe($n(this.value))}}function Vu(n){const e=[];return Ft(n.fields,((t,r)=>{const s=new fe([t]);if(Lr(r)){const o=Vu(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)})),new ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t,r,s,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new ye(e,0,F.min(),F.min(),F.min(),Pe.empty(),0)}static newFoundDocument(e,t,r,s){return new ye(e,1,t,F.min(),r,s,0)}static newNoDocument(e,t){return new ye(e,2,t,F.min(),F.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,F.min(),F.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qr{constructor(e,t){this.position=e,this.inclusive=t}}function Ja(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=on(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Jr{constructor(e,t="asc"){this.field=e,this.dir=t}}function lp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Du{}class oe extends Du{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new dp(e,t,r):t==="array-contains"?new mp(e,r):t==="in"?new gp(e,r):t==="not-in"?new _p(e,r):t==="array-contains-any"?new yp(e,r):new oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new fp(e,r):new pp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(on(t,this.value)):t!==null&&Et(this.value)===Et(t)&&this.matchesComparison(on(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends Du{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new $e(e,t)}matches(e){return Nu(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Nu(n){return n.op==="and"}function Ou(n){return hp(n)&&Nu(n)}function hp(n){for(const e of n.filters)if(e instanceof $e)return!1;return!0}function Ii(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+an(n.value);if(Ou(n))return n.filters.map((e=>Ii(e))).join(",");{const e=n.filters.map((t=>Ii(t))).join(",");return`${n.op}(${e})`}}function Mu(n,e){return n instanceof oe?(function(r,s){return s instanceof oe&&r.op===s.op&&r.field.isEqual(s.field)&&qe(r.value,s.value)})(n,e):n instanceof $e?(function(r,s){return s instanceof $e&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,u)=>o&&Mu(a,s.filters[u])),!0):!1})(n,e):void x(19439)}function Lu(n){return n instanceof oe?(function(t){return`${t.field.canonicalString()} ${t.op} ${an(t.value)}`})(n):n instanceof $e?(function(t){return t.op.toString()+" {"+t.getFilters().map(Lu).join(" ,")+"}"})(n):"Filter"}class dp extends oe{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class fp extends oe{constructor(e,t){super(e,"in",t),this.keys=xu("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class pp extends oe{constructor(e,t){super(e,"not-in",t),this.keys=xu("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function xu(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>M.fromName(r.referenceValue)))}class mp extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zi(t)&&Yn(t.arrayValue,this.value)}}class gp extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Yn(this.value.arrayValue,t)}}class _p extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Yn(this.value.arrayValue,t)}}class yp extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Yn(this.value.arrayValue,r)))}}/**
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
 */class Ep{constructor(e,t=null,r=[],s=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function Ya(n,e=null,t=[],r=[],s=null,o=null,a=null){return new Ep(n,e,t,r,s,o,a)}function Hi(n){const e=U(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Ii(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),fs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>an(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>an(r))).join(",")),e.Te=t}return e.Te}function Wi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Mu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xa(n.startAt,e.startAt)&&Xa(n.endAt,e.endAt)}function wi(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Tp(n,e,t,r,s,o,a,u){return new ms(n,e,t,r,s,o,a,u)}function Gi(n){return new ms(n)}function Za(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ip(n){return n.collectionGroup!==null}function zn(n){const e=U(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ae(fe.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Jr(o,r))})),t.has(fe.keyField().canonicalString())||e.Ie.push(new Jr(fe.keyField(),r))}return e.Ie}function Le(n){const e=U(n);return e.Ee||(e.Ee=wp(e,zn(n))),e.Ee}function wp(n,e){if(n.limitType==="F")return Ya(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Jr(s.field,o)}));const t=n.endAt?new Qr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qr(n.startAt.position,n.startAt.inclusive):null;return Ya(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function vi(n,e,t){return new ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gs(n,e){return Wi(Le(n),Le(e))&&n.limitType===e.limitType}function Fu(n){return`${Hi(Le(n))}|lt:${n.limitType}`}function Gt(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Lu(s))).join(", ")}]`),fs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>an(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>an(s))).join(",")),`Target(${r})`})(Le(n))}; limitType=${n.limitType})`}function _s(n,e){return e.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,e)&&(function(r,s){for(const o of zn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,u,h){const d=Ja(a,u,h);return a.inclusive?d<=0:d<0})(r.startAt,zn(r),s)||r.endAt&&!(function(a,u,h){const d=Ja(a,u,h);return a.inclusive?d>=0:d>0})(r.endAt,zn(r),s))})(n,e)}function vp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Uu(n){return(e,t)=>{let r=!1;for(const s of zn(n)){const o=Ap(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Ap(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):(function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?on(h,d):x(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ft(this.inner,((t,r)=>{for(const[s,o]of r)e(s,o)}))}isEmpty(){return vu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=new Z(M.comparator);function Qe(){return Rp}const Bu=new Z(M.comparator);function Fn(...n){let e=Bu;for(const t of n)e=e.insert(t.key,t);return e}function ju(n){let e=Bu;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function kt(){return Hn()}function qu(){return Hn()}function Hn(){return new Ut((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Sp=new Z(M.comparator),Pp=new ae(M.comparator);function z(...n){let e=Pp;for(const t of n)e=e.add(t);return e}const Cp=new ae($);function bp(){return Cp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(e)?"-0":e}}function $u(n){return{integerValue:""+n}}function kp(n,e){return np(e)?$u(e):Ki(n,e)}/**
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
 */class ys{constructor(){this._=void 0}}function Vp(n,e,t){return n instanceof Xr?(function(s,o){const a={fields:{[Su]:{stringValue:Ru},[Cu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&$i(o)&&(o=ps(o)),o&&(a.fields[Pu]=o),{mapValue:a}})(t,e):n instanceof Zn?Hu(n,e):n instanceof er?Wu(n,e):(function(s,o){const a=zu(s,o),u=ec(a)+ec(s.Ae);return Ti(a)&&Ti(s.Ae)?$u(u):Ki(s.serializer,u)})(n,e)}function Dp(n,e,t){return n instanceof Zn?Hu(n,e):n instanceof er?Wu(n,e):t}function zu(n,e){return n instanceof Yr?(function(r){return Ti(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(e)?e:{integerValue:0}:null}class Xr extends ys{}class Zn extends ys{constructor(e){super(),this.elements=e}}function Hu(n,e){const t=Gu(e);for(const r of n.elements)t.some((s=>qe(s,r)))||t.push(r);return{arrayValue:{values:t}}}class er extends ys{constructor(e){super(),this.elements=e}}function Wu(n,e){let t=Gu(e);for(const r of n.elements)t=t.filter((s=>!qe(s,r)));return{arrayValue:{values:t}}}class Yr extends ys{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ec(n){return te(n.integerValue||n.doubleValue)}function Gu(n){return zi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Np(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Zn&&s instanceof Zn||r instanceof er&&s instanceof er?sn(r.elements,s.elements,qe):r instanceof Yr&&s instanceof Yr?qe(r.Ae,s.Ae):r instanceof Xr&&s instanceof Xr})(n.transform,e.transform)}class Op{constructor(e,t){this.version=e,this.transformResults=t}}class We{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new We}static exists(e){return new We(void 0,e)}static updateTime(e){return new We(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Es{}function Ku(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ju(n.key,We.none()):new or(n.key,n.data,We.none());{const t=n.data,r=Pe.empty();let s=new ae(fe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Bt(n.key,r,new ke(s.toArray()),We.none())}}function Mp(n,e,t){n instanceof or?(function(s,o,a){const u=s.value.clone(),h=nc(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):n instanceof Bt?(function(s,o,a){if(!xr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=nc(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Qu(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Wn(n,e,t,r){return n instanceof or?(function(o,a,u,h){if(!xr(o.precondition,a))return u;const d=o.value.clone(),p=rc(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof Bt?(function(o,a,u,h){if(!xr(o.precondition,a))return u;const d=rc(o.fieldTransforms,h,a),p=a.data;return p.setAll(Qu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((y=>y.field)))})(n,e,t,r):(function(o,a,u){return xr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(n,e,t)}function Lp(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=zu(r.transform,s||null);o!=null&&(t===null&&(t=Pe.empty()),t.set(r.field,o))}return t||null}function tc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&sn(r,s,((o,a)=>Np(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class or extends Es{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bt extends Es{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Qu(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function nc(n,e,t){const r=new Map;G(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,u=e.data.field(o.field);r.set(o.field,Dp(a,u,t[s]))}return r}function rc(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,Vp(o,a,e))}return r}class Ju extends Es{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xp extends Es{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Mp(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Wn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Wn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qu();return this.mutations.forEach((s=>{const o=e.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(s.key)?null:u;const h=Ku(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),z())}isEqual(e){return this.batchId===e.batchId&&sn(this.mutations,e.mutations,((t,r)=>tc(t,r)))&&sn(this.baseMutations,e.baseMutations,((t,r)=>tc(t,r)))}}class Qi{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){G(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return Sp})();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Qi(e,t,r,s)}}/**
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
 */class Up{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Bp{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne,W;function jp(n){switch(n){case C.OK:return x(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function Xu(n){if(n===void 0)return Ke("GRPC error has no .code"),C.UNKNOWN;switch(n){case ne.OK:return C.OK;case ne.CANCELLED:return C.CANCELLED;case ne.UNKNOWN:return C.UNKNOWN;case ne.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ne.INTERNAL:return C.INTERNAL;case ne.UNAVAILABLE:return C.UNAVAILABLE;case ne.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ne.NOT_FOUND:return C.NOT_FOUND;case ne.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ne.ABORTED:return C.ABORTED;case ne.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ne.DATA_LOSS:return C.DATA_LOSS;default:return x(39323,{code:n})}}(W=ne||(ne={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qp(){return new TextEncoder}/**
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
 */const $p=new ft([4294967295,4294967295],0);function sc(n){const e=qp().encode(n),t=new du;return t.update(e),new Uint8Array(t.digest())}function ic(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ft([t,r],0),new ft([s,o],0)]}class Ji{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Un(`Invalid padding: ${t}`);if(r<0)throw new Un(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Un(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Un(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ft.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(ft.fromNumber(r)));return s.compare($p)===1&&(s=new ft([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=sc(e),[r,s]=ic(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Ji(o,s,t);return r.forEach((u=>a.insert(u))),a}insert(e){if(this.ge===0)return;const t=sc(e),[r,s]=ic(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ar.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ts(F.min(),s,new Z($),Qe(),z())}}class ar{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ar(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Yu{constructor(e,t){this.targetId=e,this.Ce=t}}class Zu{constructor(e,t,r=pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class oc{constructor(){this.ve=0,this.Fe=ac(),this.Me=pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=z(),t=z(),r=z();return this.Fe.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:x(38017,{changeType:o})}})),new ar(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=ac()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class zp{constructor(e){this.Ge=e,this.ze=new Map,this.je=Qe(),this.Je=Vr(),this.He=Vr(),this.Ye=new Z($)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:x(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(wi(o))if(r===0){const a=new M(o.path);this.et(t,a,ye.newNoDocument(a,F.min()))}else G(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const u=this.ut(e),h=u?this.ct(u,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,u;try{a=yt(r).toUint8Array()}catch(h){if(h instanceof Au)return rn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ji(a,s,o)}catch(h){return rn(h instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.et(t,o,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((o,a)=>{const u=this.ot(a);if(u){if(o.current&&wi(u.target)){const h=new M(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,ye.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.qe())}}));let r=z();this.He.forEach(((o,a)=>{let u=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(e)));const s=new Ts(e,t,this.Ye,this.je,r);return this.je=Qe(),this.Je=Vr(),this.He=Vr(),this.Ye=new Z($),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new oc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ae($),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ae($),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new oc),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Vr(){return new Z(M.comparator)}function ac(){return new Z(M.comparator)}const Hp={asc:"ASCENDING",desc:"DESCENDING"},Wp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gp={and:"AND",or:"OR"};class Kp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ai(n,e){return n.useProto3Json||fs(e)?e:{value:e}}function Zr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function el(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Qp(n,e){return Zr(n,e.toTimestamp())}function xe(n){return G(!!n,49232),F.fromTimestamp((function(t){const r=_t(t);return new Y(r.seconds,r.nanos)})(n))}function Xi(n,e){return Ri(n,e).canonicalString()}function Ri(n,e){const t=(function(s){return new X(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function tl(n){const e=X.fromString(n);return G(ol(e),10190,{key:e.toString()}),e}function Si(n,e){return Xi(n.databaseId,e.path)}function oi(n,e){const t=tl(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(rl(t))}function nl(n,e){return Xi(n.databaseId,e)}function Jp(n){const e=tl(n);return e.length===4?X.emptyPath():rl(e)}function Pi(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rl(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function cc(n,e,t){return{name:Si(n,e),fields:t.value.mapValue.fields}}function Xp(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(d,p){return d.useProto3Json?(G(p===void 0||typeof p=="string",58123),pe.fromBase64String(p||"")):(G(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),pe.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&(function(d){const p=d.code===void 0?C.UNKNOWN:Xu(d.code);return new O(p,d.message||"")})(a);t=new Zu(r,s,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oi(n,r.document.name),o=xe(r.document.updateTime),a=r.document.createTime?xe(r.document.createTime):F.min(),u=new Pe({mapValue:{fields:r.document.fields}}),h=ye.newFoundDocument(s,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Fr(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oi(n,r.document),o=r.readTime?xe(r.readTime):F.min(),a=ye.newNoDocument(s,o),u=r.removedTargetIds||[];t=new Fr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oi(n,r.document),o=r.removedTargetIds||[];t=new Fr([],o,s,null)}else{if(!("filter"in e))return x(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Bp(s,o),u=r.targetId;t=new Yu(u,a)}}return t}function Yp(n,e){let t;if(e instanceof or)t={update:cc(n,e.key,e.value)};else if(e instanceof Ju)t={delete:Si(n,e.key)};else if(e instanceof Bt)t={update:cc(n,e.key,e.data),updateMask:am(e.fieldMask)};else{if(!(e instanceof xp))return x(16599,{Vt:e.type});t={verify:Si(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(o,a){const u=a.transform;if(u instanceof Xr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Zn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof er)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Yr)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw x(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:Qp(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)})(n,e.precondition)),t}function Zp(n,e){return n&&n.length>0?(G(e!==void 0,14353),n.map((t=>(function(s,o){let a=s.updateTime?xe(s.updateTime):xe(o);return a.isEqual(F.min())&&(a=xe(o)),new Op(a,s.transformResults||[])})(t,e)))):[]}function em(n,e){return{documents:[nl(n,e.path)]}}function tm(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=nl(n,s);const o=(function(d){if(d.length!==0)return il($e.create(d,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((p=>(function(A){return{field:Kt(A.field),direction:sm(A.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Ai(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function nm(n){let e=Jp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){G(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=(function(y){const A=sl(y);return A instanceof $e&&Ou(A)?A.getFilters():[A]})(t.where));let a=[];t.orderBy&&(a=(function(y){return y.map((A=>(function(D){return new Jr(Qt(D.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(A)))})(t.orderBy));let u=null;t.limit&&(u=(function(y){let A;return A=typeof y=="object"?y.value:y,fs(A)?null:A})(t.limit));let h=null;t.startAt&&(h=(function(y){const A=!!y.before,P=y.values||[];return new Qr(P,A)})(t.startAt));let d=null;return t.endAt&&(d=(function(y){const A=!y.before,P=y.values||[];return new Qr(P,A)})(t.endAt)),Tp(e,s,a,o,u,"F",h,d)}function rm(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sl(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Qt(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qt(t.unaryFilter.field);return oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qt(t.unaryFilter.field);return oe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Qt(t.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}})(n):n.fieldFilter!==void 0?(function(t){return oe.create(Qt(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return $e.create(t.compositeFilter.filters.map((r=>sl(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x(1026)}})(t.compositeFilter.op))})(n):x(30097,{filter:n})}function sm(n){return Hp[n]}function im(n){return Wp[n]}function om(n){return Gp[n]}function Kt(n){return{fieldPath:n.canonicalString()}}function Qt(n){return fe.fromServerFormat(n.fieldPath)}function il(n){return n instanceof oe?(function(t){if(t.op==="=="){if(Qa(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NAN"}};if(Ka(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qa(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NOT_NAN"}};if(Ka(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kt(t.field),op:im(t.op),value:t.value}}})(n):n instanceof $e?(function(t){const r=t.getFilters().map((s=>il(s)));return r.length===1?r[0]:{compositeFilter:{op:om(t.op),filters:r}}})(n):x(54877,{filter:n})}function am(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ol(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t,r,s,o=F.min(),a=F.min(),u=pe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.yt=e}}function um(n){const e=nm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vi(e,e.limit,"L"):e}/**
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
 */class lm{constructor(){this.Cn=new hm}addToCollectionParentIndex(e,t){return this.Cn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(gt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(gt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class hm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ae(X.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ae(X.comparator)).toArray()}}/**
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
 */const uc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},al=41943040;class ve{static withCacheSize(e){return new ve(e,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(al,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new cn(0)}static cr(){return new cn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="LruGarbageCollector",dm=1048576;function hc([n,e],[t,r]){const s=$(n,t);return s===0?$(e,r):s}class fm{constructor(e){this.Ir=e,this.buffer=new ae(hc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();hc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pm{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(lc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){mn(t)?V(lc,"Ignoring IndexedDB error during garbage collection: ",t):await pn(t)}await this.Vr(3e5)}))}}class mm{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return S.resolve(ds.ce);const r=new fm(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(uc)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(r=y,u=Date.now(),this.removeTargets(e,r,t)))).next((y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(e,r)))).next((y=>(d=Date.now(),Wt()<=q.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y}))))}}function gm(n,e){return new mm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.changes=new Ut((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ym{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Wn(r.mutation,s,ke.empty(),Y.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,z()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=z()){const s=kt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((o=>{let a=Fn();return o.forEach(((u,h)=>{a=a.insert(u,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=kt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,z())))}populateOverlays(e,t,r){const s=[];return r.forEach((o=>{t.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((a,u)=>{t.set(a,u)}))}))}computeViews(e,t,r,s){let o=Qe();const a=Hn(),u=(function(){return Hn()})();return t.forEach(((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Bt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Wn(p.mutation,d,p.mutation.getFieldMask(),Y.now())):a.set(d.key,ke.empty())})),this.recalculateAndSaveOverlays(e,o).next((h=>(h.forEach(((d,p)=>a.set(d,p))),t.forEach(((d,p)=>u.set(d,new ym(p,a.get(d)??null)))),u)))}recalculateAndSaveOverlays(e,t){const r=Hn();let s=new Z(((a,u)=>a-u)),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const u of a)u.keys().forEach((h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||ke.empty();p=u.applyToLocalView(d,p),r.set(h,p);const y=(s.get(u.batchId)||z()).add(h);s=s.insert(u.batchId,y)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,y=qu();p.forEach((A=>{if(!o.has(A)){const P=Ku(t.get(A),r.get(A));P!==null&&y.set(A,P),o=o.add(A)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return S.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ip(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):S.resolve(kt());let u=Qn,h=o;return a.next((d=>S.forEach(d,((p,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next((A=>{h=h.insert(p,A)}))))).next((()=>this.populateOverlays(e,d,o))).next((()=>this.computeViews(e,h,d,z()))).next((p=>({batchId:u,changes:ju(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next((r=>{let s=Fn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=Fn();return this.indexManager.getCollectionParents(e,o).next((u=>S.forEach(u,(h=>{const d=(function(y,A){return new ms(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((p=>{p.forEach(((y,A)=>{a=a.insert(y,A)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ye.newInvalidDocument(p)))}));let u=Fn();return a.forEach(((h,d)=>{const p=o.get(h);p!==void 0&&Wn(p.mutation,d,ke.empty(),Y.now()),_s(t,d)&&(u=u.insert(h,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return S.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:xe(s.createTime)}})(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:um(s.bundledQuery),readTime:xe(s.readTime)}})(t)),S.resolve()}}/**
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
 */class Im{constructor(){this.overlays=new Z(M.comparator),this.qr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=kt();return S.forEach(t,(s=>this.getOverlay(e,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,o)=>{this.St(e,t,o)})),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=kt(),o=t.length+1,a=new M(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new Z(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=kt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=kt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,p)=>u.set(d,p))),!(u.size()>=s)););return S.resolve(u)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Up(t,r));let o=this.qr.get(t);o===void 0&&(o=z(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
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
 */class wm{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.Qr=new ae(le.$r),this.Ur=new ae(le.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new le(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new le(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new M(new X([])),r=new le(t,e),s=new le(t,e+1),o=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new M(new X([])),r=new le(t,e),s=new le(t,e+1);let o=z();return this.Ur.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new le(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class le{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return M.comparator(e.key,t.key)||$(e.Yr,t.Yr)}static Kr(e,t){return $(e.Yr,t.Yr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ae(le.$r)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Fp(o,t,r,s);this.mutationQueue.push(a);for(const u of s)this.Zr=this.Zr.add(new le(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?qi:this.tr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new le(t,0),s=new le(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],(a=>{const u=this.Xr(a.Yr);o.push(u)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae($);return t.forEach((s=>{const o=new le(s,0),a=new le(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(u=>{r=r.add(u.Yr)}))})),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new le(new M(o),0);let u=new ae($);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Yr)),!0)}),a),S.resolve(this.ti(u))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){G(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(t.mutations,(s=>{const o=new le(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new le(t,0),s=this.Zr.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.ri=e,this.docs=(function(){return new Z(M.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=Qe();return t.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():ye.newInvalidDocument(s))})),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=Qe();const a=t.path,u=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Yf(Xf(p),r)<=0||(s.has(p.key)||_s(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(e,t,r,s){x(9500)}ii(e,t){return S.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Rm(this)}getSize(e){return S.resolve(this.size)}}class Rm extends _m{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),S.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.persistence=e,this.si=new Ut((t=>Hi(t)),Wi),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.oi=0,this._i=new Yi,this.targetCount=0,this.ai=cn.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),S.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new cn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Pr(t),S.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.si.forEach(((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)})),S.waitFor(o).next((()=>s))}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach((a=>{o.push(s.markPotentiallyOrphaned(e,a))})),S.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this.ui={},this.overlays={},this.ci=new ds(0),this.li=!1,this.li=!0,this.hi=new wm,this.referenceDelegate=e(this),this.Pi=new Sm(this),this.indexManager=new lm,this.remoteDocumentCache=(function(s){return new Am(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new cm(t),this.Ii=new Tm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Im,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new vm(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new Pm(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ai(e,t){return S.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class Pm extends ep{constructor(e){super(),this.currentSequenceNumber=e}}class Zi{constructor(e){this.persistence=e,this.Ri=new Yi,this.Vi=null}static mi(e){return new Zi(e)}get fi(){if(this.Vi)return this.Vi;throw x(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(r=>{const s=M.fromPath(r);return this.gi(e,s).next((o=>{o||t.removeEntry(s,F.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return S.or([()=>S.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class es{constructor(e,t){this.persistence=e,this.pi=new Ut((r=>rp(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=gm(this,t)}static mi(e,t){return new es(e,t)}Ei(){}di(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return S.forEach(this.pi,((r,s)=>this.br(e,r,s).next((o=>o?S.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((u=>{u||(r++,o.removeEntry(a,F.min()))})))).next((()=>o.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mr(e.data.value)),t}br(e,t,r){return S.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=z(),s=z();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new eo(e,t.fromCache,r,s)}}/**
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
 */class Cm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class bm{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return yd()?8:tp(Ee())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ys(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(e,t,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Cm;return this.Ss(e,t,a).next((u=>{if(o.result=u,this.Vs)return this.bs(e,t,a,u.size)}))})).next((()=>o.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(Wt()<=q.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Gt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(Wt()<=q.DEBUG&&V("QueryEngine","Query:",Gt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Wt()<=q.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Gt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Le(t))):S.resolve())}ys(e,t){if(Za(t))return S.resolve(null);let r=Le(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=vi(t,null,"F"),r=Le(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=z(...o);return this.ps.getDocuments(e,a).next((u=>this.indexManager.getMinOffset(e,r).next((h=>{const d=this.Ds(t,u);return this.Cs(t,d,a,h.readTime)?this.ys(e,vi(t,null,"F")):this.vs(e,d,t,h)}))))})))))}ws(e,t,r,s){return Za(t)||s.isEqual(F.min())?S.resolve(null):this.ps.getDocuments(e,r).next((o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,s)?S.resolve(null):(Wt()<=q.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gt(t)),this.vs(e,a,t,Jf(s,Qn)).next((u=>u)))}))}Ds(e,t){let r=new ae(Uu(e));return t.forEach(((s,o)=>{_s(e,o)&&(r=r.add(o))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(e,t,r){return Wt()<=q.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Gt(t)),this.ps.getDocumentsMatchingQuery(e,t,gt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="LocalStore",km=3e8;class Vm{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Z($),this.xs=new Ut((o=>Hi(o)),Wi),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Em(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Dm(n,e,t,r){return new Vm(n,e,t,r)}async function ul(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],u=[];let h=z();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function Nm(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(u,h,d,p){const y=d.batch,A=y.keys();let P=S.resolve();return A.forEach((D=>{P=P.next((()=>p.getEntry(h,D))).next((N=>{const k=d.docVersions.get(D);G(k!==null,48541),N.version.compareTo(k)<0&&(y.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))}))})),P.next((()=>u.mutationQueue.removeMutationBatch(h,y)))})(t,r,e,o).next((()=>o.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let h=z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function ll(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Om(n,e){const t=U(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const u=[];e.targetChanges.forEach(((p,y)=>{const A=s.get(y);if(!A)return;u.push(t.Pi.removeMatchingKeys(o,p.removedDocuments,y).next((()=>t.Pi.addMatchingKeys(o,p.addedDocuments,y))));let P=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?P=P.withResumeToken(pe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),s=s.insert(y,P),(function(N,k,j){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=km?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(A,P,p)&&u.push(t.Pi.updateTargetData(o,P))}));let h=Qe(),d=z();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))})),u.push(Mm(o,a,e.documentUpdates).next((p=>{h=p.ks,d=p.qs}))),!r.isEqual(F.min())){const p=t.Pi.getLastRemoteSnapshotVersion(o).next((y=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));u.push(p)}return S.waitFor(u).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(t.Ms=s,o)))}function Mm(n,e,t){let r=z(),s=z();return t.forEach((o=>r=r.add(o))),e.getEntries(n,r).next((o=>{let a=Qe();return t.forEach(((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(F.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):V(to,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)})),{ks:a,qs:s}}))}function Lm(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=qi),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function xm(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((o=>o?(s=o,S.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new ut(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Ci(n,e,t){const r=U(n),s=r.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!mn(a))throw a;V(to,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function dc(n,e,t){const r=U(n);let s=F.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,p){const y=U(h),A=y.xs.get(p);return A!==void 0?S.resolve(y.Ms.get(A)):y.Pi.getTargetData(d,p)})(r,a,Le(e)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,u.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?o:z()))).next((u=>(Fm(r,vp(e),u),{documents:u,Qs:o})))))}function Fm(n,e,t){let r=n.Os.get(e)||F.min();t.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(e,r)}class fc{constructor(){this.activeTargetIds=bp()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Um{constructor(){this.Mo=new fc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new fc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Bm{Oo(e){}shutdown(){}}/**
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
 */const pc="ConnectivityMonitor";class mc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(pc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(pc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Dr=null;function bi(){return Dr===null?Dr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Dr++,"0x"+Dr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="RestConnection",jm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qm{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Gr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,o){const a=bi(),u=this.zo(e,t.toUriEncodedString());V(ai,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(u),p=hn(d);return this.Jo(e,u,h,r,p).then((y=>(V(ai,`Received RPC '${e}' ${a}: `,y),y)),(y=>{throw rn(ai,`RPC '${e}' ${a} failed with error: `,y,"url: ",u,"request:",r),y}))}Ho(e,t,r,s,o,a){return this.Go(e,t,r,s,o)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+fn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,o)=>e[o]=s)),r&&r.headers.forEach(((s,o)=>e[o]=s))}zo(e,t){const r=jm[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="WebChannelConnection";class zm extends qm{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,o){const a=bi();return new Promise(((u,h)=>{const d=new fu;d.setWithCredentials(!0),d.listenOnce(pu.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Or.NO_ERROR:const y=d.getResponseJson();V(ge,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case Or.TIMEOUT:V(ge,`RPC '${e}' ${a} timed out`),h(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Or.HTTP_ERROR:const A=d.getStatus();if(V(ge,`RPC '${e}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const D=P==null?void 0:P.error;if(D&&D.status&&D.message){const N=(function(j){const H=j.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(H)>=0?H:C.UNKNOWN})(D.status);h(new O(N,D.message))}else h(new O(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new O(C.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(ge,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(s);V(ge,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)}))}T_(e,t,r){const s=bi(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=_u(),u=gu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");V(ge,`Creating RPC '${e}' stream ${s}: ${p}`,h);const y=a.createWebChannel(p,h);this.I_(y);let A=!1,P=!1;const D=new $m({Yo:k=>{P?V(ge,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(A||(V(ge,`Opening RPC '${e}' stream ${s} transport.`),y.open(),A=!0),V(ge,`RPC '${e}' stream ${s} sending:`,k),y.send(k))},Zo:()=>y.close()}),N=(k,j,H)=>{k.listen(j,(K=>{try{H(K)}catch(ce){setTimeout((()=>{throw ce}),0)}}))};return N(y,xn.EventType.OPEN,(()=>{P||(V(ge,`RPC '${e}' stream ${s} transport opened.`),D.o_())})),N(y,xn.EventType.CLOSE,(()=>{P||(P=!0,V(ge,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(y))})),N(y,xn.EventType.ERROR,(k=>{P||(P=!0,rn(ge,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),D.a_(new O(C.UNAVAILABLE,"The operation could not be completed")))})),N(y,xn.EventType.MESSAGE,(k=>{var j;if(!P){const H=k.data[0];G(!!H,16349);const K=H,ce=(K==null?void 0:K.error)||((j=K[0])==null?void 0:j.error);if(ce){V(ge,`RPC '${e}' stream ${s} received error:`,ce);const Ae=ce.status;let se=(function(_){const I=ne[_];if(I!==void 0)return Xu(I)})(Ae),T=ce.message;se===void 0&&(se=C.INTERNAL,T="Unknown error status: "+Ae+" with message "+ce.message),P=!0,D.a_(new O(se,T)),y.close()}else V(ge,`RPC '${e}' stream ${s} received:`,H),D.u_(H)}})),N(u,mu.STAT_EVENT,(k=>{k.stat===_i.PROXY?V(ge,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===_i.NOPROXY&&V(ge,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{D.__()}),0),D}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ci(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){return new Kp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="PersistentStream";class dl{constructor(e,t,r,s,o,a,u,h){this.Mi=e,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hl(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ke(t.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(gc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(V(gc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Hm extends dl{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Xp(this.serializer,e),r=(function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?xe(a.readTime):F.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Pi(this.serializer),t.addTarget=(function(o,a){let u;const h=a.target;if(u=wi(h)?{documents:em(o,h)}:{query:tm(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=el(o,a.resumeToken);const d=Ai(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){u.readTime=Zr(o,a.snapshotVersion.toTimestamp());const d=Ai(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,e);const r=rm(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Pi(this.serializer),t.removeTarget=e,this.q_(t)}}class Wm extends dl{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Zp(e.writeResults,e.commitTime),r=xe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Pi(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Yp(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{}class Km extends Gm{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(e,Ri(t,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())}))}Ho(e,t,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Ho(e,Ri(t,r),s,a,u,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Qm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ke(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="RemoteStore";class Jm{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{jt(this)&&(V(Lt,"Restarting streams for network reachability change."),await(async function(h){const d=U(h);d.Ea.add(4),await cr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await ws(d)})(this))}))})),this.Ra=new Qm(r,s)}}async function ws(n){if(jt(n))for(const e of n.da)await e(!0)}async function cr(n){for(const e of n.da)await e(!1)}function fl(n,e){const t=U(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),io(t)?so(t):gn(t).O_()&&ro(t,e))}function no(n,e){const t=U(n),r=gn(t);t.Ia.delete(e),r.O_()&&pl(t,e),t.Ia.size===0&&(r.O_()?r.L_():jt(t)&&t.Ra.set("Unknown"))}function ro(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gn(n).Y_(e)}function pl(n,e){n.Va.Ue(e),gn(n).Z_(e)}function so(n){n.Va=new zp({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),gn(n).start(),n.Ra.ua()}function io(n){return jt(n)&&!gn(n).x_()&&n.Ia.size>0}function jt(n){return U(n).Ea.size===0}function ml(n){n.Va=void 0}async function Xm(n){n.Ra.set("Online")}async function Ym(n){n.Ia.forEach(((e,t)=>{ro(n,e)}))}async function Zm(n,e){ml(n),io(n)?(n.Ra.ha(e),so(n)):n.Ra.set("Unknown")}async function eg(n,e,t){if(n.Ra.set("Online"),e instanceof Zu&&e.state===2&&e.cause)try{await(async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Va.removeTarget(u))})(n,e)}catch(r){V(Lt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ts(n,r)}else if(e instanceof Fr?n.Va.Ze(e):e instanceof Yu?n.Va.st(e):n.Va.tt(e),!t.isEqual(F.min()))try{const r=await ll(n.localStore);t.compareTo(r)>=0&&await(function(o,a){const u=o.Va.Tt(a);return u.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(h.resumeToken,a))}})),u.targetMismatches.forEach(((h,d)=>{const p=o.Ia.get(h);if(!p)return;o.Ia.set(h,p.withResumeToken(pe.EMPTY_BYTE_STRING,p.snapshotVersion)),pl(o,h);const y=new ut(p.target,h,d,p.sequenceNumber);ro(o,y)})),o.remoteSyncer.applyRemoteEvent(u)})(n,t)}catch(r){V(Lt,"Failed to raise snapshot:",r),await ts(n,r)}}async function ts(n,e,t){if(!mn(e))throw e;n.Ea.add(1),await cr(n),n.Ra.set("Offline"),t||(t=()=>ll(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(Lt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ws(n)}))}function gl(n,e){return e().catch((t=>ts(n,t,e)))}async function vs(n){const e=U(n),t=Tt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:qi;for(;tg(e);)try{const s=await Lm(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,ng(e,s)}catch(s){await ts(e,s)}_l(e)&&yl(e)}function tg(n){return jt(n)&&n.Ta.length<10}function ng(n,e){n.Ta.push(e);const t=Tt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function _l(n){return jt(n)&&!Tt(n).x_()&&n.Ta.length>0}function yl(n){Tt(n).start()}async function rg(n){Tt(n).ra()}async function sg(n){const e=Tt(n);for(const t of n.Ta)e.ea(t.mutations)}async function ig(n,e,t){const r=n.Ta.shift(),s=Qi.from(r,e,t);await gl(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await vs(n)}async function og(n,e){e&&Tt(n).X_&&await(async function(r,s){if((function(a){return jp(a)&&a!==C.ABORTED})(s.code)){const o=r.Ta.shift();Tt(r).B_(),await gl(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await vs(r)}})(n,e),_l(n)&&yl(n)}async function _c(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),V(Lt,"RemoteStore received new credentials");const r=jt(t);t.Ea.add(3),await cr(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ws(t)}async function ag(n,e){const t=U(n);e?(t.Ea.delete(2),await ws(t)):e||(t.Ea.add(2),await cr(t),t.Ra.set("Unknown"))}function gn(n){return n.ma||(n.ma=(function(t,r,s){const o=U(t);return o.sa(),new Hm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:Xm.bind(null,n),t_:Ym.bind(null,n),r_:Zm.bind(null,n),H_:eg.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),io(n)?so(n):n.Ra.set("Unknown")):(await n.ma.stop(),ml(n))}))),n.ma}function Tt(n){return n.fa||(n.fa=(function(t,r,s){const o=U(t);return o.sa(),new Wm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:rg.bind(null,n),r_:og.bind(null,n),ta:sg.bind(null,n),na:ig.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await vs(n)):(await n.fa.stop(),n.Ta.length>0&&(V(Lt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,u=new oo(e,t,a,s,o);return u.start(r),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ao(n,e){if(Ke("AsyncQueue",`${e}: ${n}`),mn(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{static emptySet(e){return new Xt(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=Fn(),this.sortedSet=new Z(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.ga=new Z(M.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):x(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class un{constructor(e,t,r,s,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach((u=>{a.push({type:0,doc:u})})),new un(e,t,Xt.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class ug{constructor(){this.queries=Ec(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=U(t),o=s.queries;s.queries=Ec(),o.forEach(((a,u)=>{for(const h of u.Sa)h.onError(r)}))})(this,new O(C.ABORTED,"Firestore shutting down"))}}function Ec(){return new Ut((n=>Fu(n)),gs)}async function lg(n,e){const t=U(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.ba()&&e.Da()&&(r=2):(o=new cg,r=e.Da()?0:1);try{switch(r){case 0:o.wa=await t.onListen(s,!0);break;case 1:o.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=ao(a,`Initialization of query '${Gt(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&co(t)}async function hg(n,e){const t=U(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=e.Da()?0:1:!o.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function dg(n,e){const t=U(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const u of a.Sa)u.Fa(s)&&(r=!0);a.wa=s}}r&&co(t)}function fg(n,e,t){const r=U(n),s=r.queries.get(e);if(s)for(const o of s.Sa)o.onError(t);r.queries.delete(e)}function co(n){n.Ca.forEach((e=>{e.next()}))}var ki,Tc;(Tc=ki||(ki={})).Ma="default",Tc.Cache="cache";class pg{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new un(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=un.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ki.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.key=e}}class Tl{constructor(e){this.key=e}}class mg{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=z(),this.mutatedKeys=z(),this.eu=Uu(e),this.tu=new Xt(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new yc,s=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,y)=>{const A=s.get(p),P=_s(this.query,y)?y:null,D=!!A&&this.mutatedKeys.has(A.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let k=!1;A&&P?A.data.isEqual(P.data)?D!==N&&(r.track({type:3,doc:P}),k=!0):this.su(A,P)||(r.track({type:2,doc:P}),k=!0,(h&&this.eu(P,h)>0||d&&this.eu(P,d)<0)&&(u=!0)):!A&&P?(r.track({type:0,doc:P}),k=!0):A&&!P&&(r.track({type:1,doc:A}),k=!0,(h||d)&&(u=!0)),k&&(P?(a=a.add(P),o=N?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:u,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((p,y)=>(function(P,D){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Rt:k})}};return N(P)-N(D)})(p.type,y.type)||this.eu(p.doc,y.doc))),this.ou(r),s=s??!1;const u=t&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new un(this.query,e.tu,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=z(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Tl(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new El(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return un.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const uo="SyncEngine";class gg{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class _g{constructor(e){this.key=e,this.hu=!1}}class yg{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ut((u=>Fu(u)),gs),this.Iu=new Map,this.Eu=new Set,this.du=new Z(M.comparator),this.Au=new Map,this.Ru=new Yi,this.Vu={},this.mu=new Map,this.fu=cn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Eg(n,e,t=!0){const r=Sl(n);let s;const o=r.Tu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Il(r,e,t,!0),s}async function Tg(n,e){const t=Sl(n);await Il(t,e,!0,!1)}async function Il(n,e,t,r){const s=await xm(n.localStore,Le(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await Ig(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&fl(n.remoteStore,s),u}async function Ig(n,e,t,r,s){n.pu=(y,A,P)=>(async function(N,k,j,H){let K=k.view.ru(j);K.Cs&&(K=await dc(N.localStore,k.query,!1).then((({documents:T})=>k.view.ru(T,K))));const ce=H&&H.targetChanges.get(k.targetId),Ae=H&&H.targetMismatches.get(k.targetId)!=null,se=k.view.applyChanges(K,N.isPrimaryClient,ce,Ae);return wc(N,k.targetId,se.au),se.snapshot})(n,y,A,P);const o=await dc(n.localStore,e,!0),a=new mg(e,o.Qs),u=a.ru(o.documents),h=ar.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);wc(n,t,d.au);const p=new gg(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function wg(n,e,t){const r=U(n),s=r.Tu.get(e),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!gs(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ci(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&no(r.remoteStore,s.targetId),Vi(r,s.targetId)})).catch(pn)):(Vi(r,s.targetId),await Ci(r.localStore,s.targetId,!0))}async function vg(n,e){const t=U(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),no(t.remoteStore,r.targetId))}async function Ag(n,e,t){const r=Vg(n);try{const s=await(function(a,u){const h=U(a),d=Y.now(),p=u.reduce(((P,D)=>P.add(D.key)),z());let y,A;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let D=Qe(),N=z();return h.Ns.getEntries(P,p).next((k=>{D=k,D.forEach(((j,H)=>{H.isValidDocument()||(N=N.add(j))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,D))).next((k=>{y=k;const j=[];for(const H of u){const K=Lp(H,y.get(H.key).overlayedDocument);K!=null&&j.push(new Bt(H.key,K,Vu(K.value.mapValue),We.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,j,u)})).next((k=>{A=k;const j=k.applyToLocalDocumentSet(y,N);return h.documentOverlayCache.saveOverlays(P,k.batchId,j)}))})).then((()=>({batchId:A.batchId,changes:ju(y)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,u,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new Z($)),d=d.insert(u,h),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,t),await ur(r,s.changes),await vs(r.remoteStore)}catch(s){const o=ao(s,"Failed to persist write");t.reject(o)}}async function wl(n,e){const t=U(n);try{const r=await Om(t.localStore,e);e.targetChanges.forEach(((s,o)=>{const a=t.Au.get(o);a&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?G(a.hu,14607):s.removedDocuments.size>0&&(G(a.hu,42227),a.hu=!1))})),await ur(t,r,e)}catch(r){await pn(r)}}function Ic(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((o,a)=>{const u=a.view.va(e);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const h=U(a);h.onlineState=u;let d=!1;h.queries.forEach(((p,y)=>{for(const A of y.Sa)A.va(u)&&(d=!0)})),d&&co(h)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rg(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),o=s&&s.key;if(o){let a=new Z(M.comparator);a=a.insert(o,ye.newNoDocument(o,F.min()));const u=z().add(o),h=new Ts(F.min(),new Map,new Z($),a,u);await wl(r,h),r.du=r.du.remove(o),r.Au.delete(e),lo(r)}else await Ci(r.localStore,e,!1).then((()=>Vi(r,e,t))).catch(pn)}async function Sg(n,e){const t=U(n),r=e.batch.batchId;try{const s=await Nm(t.localStore,e);Al(t,r,null),vl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ur(t,s)}catch(s){await pn(s)}}async function Pg(n,e,t){const r=U(n);try{const s=await(function(a,u){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next((y=>(G(y!==null,37113),p=y.keys(),h.mutationQueue.removeMutationBatch(d,y)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>h.localDocuments.getDocuments(d,p)))}))})(r.localStore,e);Al(r,e,t),vl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ur(r,s)}catch(s){await pn(s)}}function vl(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Al(n,e,t){const r=U(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Vi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Rl(n,r)}))}function Rl(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(no(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),lo(n))}function wc(n,e,t){for(const r of t)r instanceof El?(n.Ru.addReference(r.key,e),Cg(n,r)):r instanceof Tl?(V(uo,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Rl(n,r.key)):x(19791,{wu:r})}function Cg(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(V(uo,"New document in limbo: "+t),n.Eu.add(r),lo(n))}function lo(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new M(X.fromString(e)),r=n.fu.next();n.Au.set(r,new _g(t)),n.du=n.du.insert(t,r),fl(n.remoteStore,new ut(Le(Gi(t.path)),r,"TargetPurposeLimboResolution",ds.ce))}}async function ur(n,e,t){const r=U(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((u,h)=>{a.push(r.pu(h,e,t).then((d=>{var p;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){s.push(d);const y=eo.As(h.targetId,d);o.push(y)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(h,d){const p=U(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>S.forEach(d,(A=>S.forEach(A.Es,(P=>p.persistence.referenceDelegate.addReference(y,A.targetId,P))).next((()=>S.forEach(A.ds,(P=>p.persistence.referenceDelegate.removeReference(y,A.targetId,P)))))))))}catch(y){if(!mn(y))throw y;V(to,"Failed to update sequence numbers: "+y)}for(const y of d){const A=y.targetId;if(!y.fromCache){const P=p.Ms.get(A),D=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(D);p.Ms=p.Ms.insert(A,N)}}})(r.localStore,o))}async function bg(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){V(uo,"User change. New user:",e.toKey());const r=await ul(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((u=>{u.forEach((h=>{h.reject(new O(C.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ur(t,r.Ls)}}function kg(n,e){const t=U(n),r=t.Au.get(e);if(r&&r.hu)return z().add(r.key);{let s=z();const o=t.Iu.get(e);if(!o)return s;for(const a of o){const u=t.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function Sl(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rg.bind(null,e),e.Pu.H_=dg.bind(null,e.eventManager),e.Pu.yu=fg.bind(null,e.eventManager),e}function Vg(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pg.bind(null,e),e}class ns{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Is(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Dm(this.persistence,new bm,e.initialUser,this.serializer)}Cu(e){return new cl(Zi.mi,this.serializer)}Du(e){return new Um}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ns.provider={build:()=>new ns};class Dg extends ns{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){G(this.persistence.referenceDelegate instanceof es,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pm(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new cl((r=>es.mi(r,t)),this.serializer)}}class Di{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ic(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bg.bind(null,this.syncEngine),await ag(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ug})()}createDatastore(e){const t=Is(e.databaseInfo.databaseId),r=(function(o){return new zm(o)})(e.databaseInfo);return(function(o,a,u,h){return new Km(o,a,u,h)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,o,a,u){return new Jm(r,s,o,a,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ic(this.syncEngine,t,0)),(function(){return mc.v()?new mc:new Bm})())}createSyncEngine(e,t){return(function(s,o,a,u,h,d,p){const y=new yg(s,o,a,u,h,d);return p&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const o=U(s);V(Lt,"RemoteStore shutting down."),o.Ea.add(5),await cr(o),o.Aa.shutdown(),o.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Di.provider={build:()=>new Di};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ng{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ke("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="FirestoreClient";class Og{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=_e.UNAUTHENTICATED,this.clientId=Bi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{V(It,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(V(It,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ao(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ui(n,e){n.asyncQueue.verifyOperationInProgress(),V(It,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await ul(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function vc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Mg(n);V(It,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>_c(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>_c(e.remoteStore,s))),n._onlineComponents=e}async function Mg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(It,"Using user provided OfflineComponentProvider");try{await ui(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;rn("Error using user provided cache. Falling back to memory cache: "+t),await ui(n,new ns)}}else V(It,"Using default OfflineComponentProvider"),await ui(n,new Dg(void 0));return n._offlineComponents}async function Pl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(It,"Using user provided OnlineComponentProvider"),await vc(n,n._uninitializedComponentsProvider._online)):(V(It,"Using default OnlineComponentProvider"),await vc(n,new Di))),n._onlineComponents}function Lg(n){return Pl(n).then((e=>e.syncEngine))}async function Ac(n){const e=await Pl(n),t=e.eventManager;return t.onListen=Eg.bind(null,e.syncEngine),t.onUnlisten=wg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Tg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vg.bind(null,e.syncEngine),t}/**
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
 */function Cl(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="firestore.googleapis.com",Sc=!0;class Pc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bl,this.ssl=Sc}else this.host=e.host,this.ssl=e.ssl??Sc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=al;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dm)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cl(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class As{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Uf;switch(r.type){case"firstParty":return new $f(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Rc.get(t);r&&(V("ComponentProvider","Removing Datastore"),Rc.delete(t),r.terminate())})(this),Promise.resolve()}}function xg(n,e,t,r={}){var d;n=qn(n,As);const s=hn(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;s&&(su(`https://${u}`),iu("Firestore",!0)),o.host!==bl&&o.host!==u&&rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!Nt(h,a)&&(n._setSettings(h),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=_e.MOCK_USER;else{p=ud(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new _e(A)}n._authCredentials=new Bf(new Eu(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rs(this.firestore,e,this._query)}}class he{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}toJSON(){return{type:he._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ir(t,he._jsonSchema))return new he(e,r||null,new M(X.fromString(t.referencePath)))}}he._jsonSchemaVersion="firestore/documentReference/1.0",he._jsonSchema={type:re("string",he._jsonSchemaVersion),referencePath:re("string")};class pt extends Rs{constructor(e,t,r){super(e,t,Gi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new M(e))}withConverter(e){return new pt(this.firestore,e,this._path)}}function mE(n,e,...t){if(n=Se(n),Tu("collection","path",e),n instanceof As){const r=X.fromString(e,...t);return Ba(r),new pt(n,null,r)}{if(!(n instanceof he||n instanceof pt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Ba(r),new pt(n.firestore,null,r)}}function Fg(n,e,...t){if(n=Se(n),arguments.length===1&&(e=Bi.newId()),Tu("doc","path",e),n instanceof As){const r=X.fromString(e,...t);return Ua(r),new he(n,null,new M(r))}{if(!(n instanceof he||n instanceof pt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Ua(r),new he(n.firestore,n instanceof pt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="AsyncQueue";class bc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hl(this,"async_queue_retry"),this._c=()=>{const r=ci();r&&V(Cc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ci();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ci();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Vt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!mn(e))throw e;V(Cc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ke("INTERNAL UNHANDLED ERROR: ",kc(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=oo.createAndSchedule(this,e,t,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&x(47125,{Pc:kc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function kc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}class rs extends As{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new bc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bc(e),this._firestoreClient=void 0,await e}}}function Ug(n,e){const t=typeof n=="object"?n:uu(),r=typeof n=="string"?n:Gr,s=Fi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ad("firestore");o&&xg(s,...o)}return s}function kl(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Bg(n),n._firestoreClient}function Bg(n){var r,s,o;const e=n._freezeSettings(),t=(function(u,h,d,p){return new op(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Cl(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Og(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ce(pe.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ce(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ce._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ir(e,Ce._jsonSchema))return Ce.fromBase64String(e.bytes)}}Ce._jsonSchemaVersion="firestore/bytes/1.0",Ce._jsonSchema={type:re("string",Ce._jsonSchemaVersion),bytes:re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fe._jsonSchemaVersion}}static fromJSON(e){if(ir(e,Fe._jsonSchema))return new Fe(e.latitude,e.longitude)}}Fe._jsonSchemaVersion="firestore/geoPoint/1.0",Fe._jsonSchema={type:re("string",Fe._jsonSchemaVersion),latitude:re("number"),longitude:re("number")};/**
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
 */class Ue{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ir(e,Ue._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ue(e.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ue._jsonSchemaVersion="firestore/vectorValue/1.0",Ue._jsonSchema={type:re("string",Ue._jsonSchemaVersion),vectorValues:re("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=/^__.*__$/;class qg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new or(e,this.data,t,this.fieldTransforms)}}function Dl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ac:n})}}class fo{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new fo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ss(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Dl(this.Ac)&&jg.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class $g{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Is(e)}Cc(e,t,r,s=!1){return new fo({Ac:e,methodName:t,Dc:r,path:fe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zg(n){const e=n._freezeSettings(),t=Is(n._databaseId);return new $g(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Hg(n,e,t,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,s);Ll("Data must be an object, but it was:",a,r);const u=Ol(r,a);let h,d;if(o.merge)h=new ke(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const A=Wg(e,y,t);if(!a.contains(A))throw new O(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Kg(p,A)||p.push(A)}h=new ke(p),d=a.fieldTransforms.filter((y=>h.covers(y.field)))}else h=null,d=a.fieldTransforms;return new qg(new Pe(u),h,d)}function Nl(n,e){if(Ml(n=Se(n)))return Ll("Unsupported field value:",e,n),Ol(n,e);if(n instanceof Vl)return(function(r,s){if(!Dl(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const u of r){let h=Nl(u,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:Zr(s.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zr(s.serializer,o)}}if(r instanceof Fe)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ce)return{bytesValue:el(s.serializer,r._byteString)};if(r instanceof he){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Xi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ue)return(function(a,u){return{mapValue:{fields:{[bu]:{stringValue:ku},[Kr]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return Ki(u.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${ji(r)}`)})(n,e)}function Ol(n,e){const t={};return vu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ft(n,((r,s)=>{const o=Nl(s,e.mc(r));o!=null&&(t[r]=o)})),{mapValue:{fields:t}}}function Ml(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Fe||n instanceof Ce||n instanceof he||n instanceof Vl||n instanceof Ue)}function Ll(n,e,t){if(!Ml(t)||!Iu(t)){const r=ji(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Wg(n,e,t){if((e=Se(e))instanceof ho)return e._internalPath;if(typeof e=="string")return xl(n,e);throw ss("Field path arguments must be of type string or ",n,!1,void 0,t)}const Gg=new RegExp("[~\\*/\\[\\]]");function xl(n,e,t){if(e.search(Gg)>=0)throw ss(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ho(...e.split("."))._internalPath}catch{throw ss(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ss(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new O(C.INVALID_ARGUMENT,u+n+h)}function Kg(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ul("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Qg extends Fl{data(){return super.data()}}function Ul(n,e){return typeof e=="string"?xl(n,e):e instanceof ho?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xg{convertValue(e,t="none"){switch(Et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ft(e,((s,o)=>{r[s]=this.convertValue(o,t)})),r}convertVectorValue(e){var r,s,o;const t=(o=(s=(r=e.fields)==null?void 0:r[Kr].arrayValue)==null?void 0:s.values)==null?void 0:o.map((a=>te(a.doubleValue)));return new Ue(t)}convertGeoPoint(e){return new Fe(te(e.latitude),te(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ps(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Jn(e));default:return null}}convertTimestamp(e){const t=_t(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=X.fromString(e);G(ol(r),9688,{name:e});const s=new Xn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(t)||Ke(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Bn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dt extends Fl{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ul("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Dt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Dt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Dt._jsonSchema={type:re("string",Dt._jsonSchemaVersion),bundleSource:re("string","DocumentSnapshot"),bundleName:re("string"),bundle:re("string")};class Ur extends Dt{data(e={}){return super.data(e)}}class Yt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Bn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ur(this._firestore,this._userDataWriter,r.key,r,new Bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const h=new Ur(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Bn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const h=new Ur(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Bn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:Zg(u.type),doc:h,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Zg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}Yt._jsonSchemaVersion="firestore/querySnapshot/1.0",Yt._jsonSchema={type:re("string",Yt._jsonSchemaVersion),bundleSource:re("string","QuerySnapshot"),bundleName:re("string"),bundle:re("string")};class Bl extends Xg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ce(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,t)}}function gE(n,e){const t=qn(n.firestore,rs),r=Fg(n),s=Yg(n.converter,e);return e_(t,[Hg(zg(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,We.exists(!1))]).then((()=>r))}function _E(n,...e){var h,d,p;n=Se(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Vc(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Vc(e[r])){const y=e[r];e[r]=(h=y.next)==null?void 0:h.bind(y),e[r+1]=(d=y.error)==null?void 0:d.bind(y),e[r+2]=(p=y.complete)==null?void 0:p.bind(y)}let o,a,u;if(n instanceof he)a=qn(n.firestore,rs),u=Gi(n._key.path),o={next:y=>{e[r]&&e[r](t_(a,n,y))},error:e[r+1],complete:e[r+2]};else{const y=qn(n,Rs);a=qn(y.firestore,rs),u=y._query;const A=new Bl(a);o={next:P=>{e[r]&&e[r](new Yt(a,A,y,P))},error:e[r+1],complete:e[r+2]},Jg(n._query)}return(function(A,P,D,N){const k=new Ng(N),j=new pg(P,k,D);return A.asyncQueue.enqueueAndForget((async()=>lg(await Ac(A),j))),()=>{k.Nu(),A.asyncQueue.enqueueAndForget((async()=>hg(await Ac(A),j)))}})(kl(a),u,s,o)}function e_(n,e){return(function(r,s){const o=new Vt;return r.asyncQueue.enqueueAndForget((async()=>Ag(await Lg(r),s,o))),o.promise})(kl(n),e)}function t_(n,e,t){const r=t.docs.get(e._key),s=new Bl(n);return new Dt(n,s,e._key,r,new Bn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){fn=s})(dn),nn(new Ot("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new rs(new jf(r.getProvider("auth-internal")),new zf(a,r.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(d.options.projectId,p)})(a,s),a);return o={useFetchStreams:t,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),dt(Ma,La,e),dt(Ma,La,"esm2020")})();function jl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n_=jl,ql=new rr("auth","Firebase",jl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new Li("@firebase/auth");function r_(n,...e){is.logLevel<=q.WARN&&is.warn(`Auth (${dn}): ${n}`,...e)}function Br(n,...e){is.logLevel<=q.ERROR&&is.error(`Auth (${dn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n,...e){throw po(n,...e)}function Be(n,...e){return po(n,...e)}function $l(n,e,t){const r={...n_(),[e]:t};return new rr("auth","Firebase",r).create(e,{appName:n.name})}function mt(n){return $l(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function po(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ql.create(n,...e)}function L(n,e,...t){if(!n)throw po(e,...t)}function ze(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Br(e),new Error(e)}function Je(n,e){n||ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function s_(){return Dc()==="http:"||Dc()==="https:"}function Dc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s_()||md()||"connection"in navigator)?navigator.onLine:!0}function o_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Je(t>e,"Short delay should be less than long delay!"),this.isMobile=dd()||gd()}get(){return i_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n,e){Je(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],u_=new lr(3e4,6e4);function qt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function wt(n,e,t,r,s={}){return Hl(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=sr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...o};return pd()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&hn(n.emulatorConfig.host)&&(d.credentials="include"),zl.fetch()(await Wl(n,n.config.apiHost,t,u),d)})}async function Hl(n,e,t){n._canInitEmulator=!1;const r={...a_,...e};try{const s=new h_(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Nr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Nr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Nr(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw $l(n,p,d);De(n,p)}}catch(s){if(s instanceof Xe)throw s;De(n,"network-request-failed",{message:String(s)})}}async function Ss(n,e,t,r,s={}){const o=await wt(n,e,t,r,s);return"mfaPendingCredential"in o&&De(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Wl(n,e,t,r){const s=`${e}${t}?${r}`,o=n,a=o.config.emulator?mo(n.config,s):`${n.config.apiScheme}://${s}`;return c_.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function l_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class h_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),u_.get())})}}function Nr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Be(n,e,r);return s.customData._tokenResponse=t,s}function Nc(n){return n!==void 0&&n.enterprise!==void 0}class d_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return l_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function f_(n,e){return wt(n,"GET","/v2/recaptchaConfig",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(n,e){return wt(n,"POST","/v1/accounts:delete",e)}async function os(n,e){return wt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function m_(n,e=!1){const t=Se(n),r=await t.getIdToken(e),s=go(r);L(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Gn(li(s.auth_time)),issuedAtTime:Gn(li(s.iat)),expirationTime:Gn(li(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function li(n){return Number(n)*1e3}function go(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Br("JWT malformed, contained fewer than 3 sections"),null;try{const s=eu(t);return s?JSON.parse(s):(Br("Failed to decode base64 JWT payload"),null)}catch(s){return Br("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Oc(n){const e=go(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Xe&&g_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function g_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function as(n){var y;const e=n.auth,t=await n.getIdToken(),r=await tr(n,os(e,{idToken:t}));L(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=(y=s.providerUserInfo)!=null&&y.length?Gl(s.providerUserInfo):[],a=E_(n.providerData,o),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Oi(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function y_(n){const e=Se(n);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gl(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(n,e){const t=await Hl(n,{},async()=>{const r=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await Wl(n,s,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:r};return n.emulatorConfig&&hn(n.emulatorConfig.host)&&(h.credentials="include"),zl.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function I_(n,e){return wt(n,"POST","/v2/accounts:revokeToken",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=Oc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await T_(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new Zt;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(L(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zt,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ve{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new __(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Oi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await tr(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return m_(this,e)}reload(){return y_(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ve({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(mt(this.auth));const e=await this.getIdToken();return await tr(this,p_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,u=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:y,emailVerified:A,isAnonymous:P,providerData:D,stsTokenManager:N}=t;L(y&&N,e,"internal-error");const k=Zt.fromJSON(this.name,N);L(typeof y=="string",e,"internal-error"),st(r,e.name),st(s,e.name),L(typeof A=="boolean",e,"internal-error"),L(typeof P=="boolean",e,"internal-error"),st(o,e.name),st(a,e.name),st(u,e.name),st(h,e.name),st(d,e.name),st(p,e.name);const j=new Ve({uid:y,auth:e,email:s,emailVerified:A,displayName:r,isAnonymous:P,photoURL:a,phoneNumber:o,tenantId:u,stsTokenManager:k,createdAt:d,lastLoginAt:p});return D&&Array.isArray(D)&&(j.providerData=D.map(H=>({...H}))),h&&(j._redirectEventId=h),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new Zt;s.updateFromServerResponse(t);const o=new Ve({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await as(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];L(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Gl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),u=new Zt;u.updateFromIdToken(r);const h=new Ve({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Oi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;function He(n){Je(n instanceof Function,"Expected a class definition");let e=Mc.get(n);return e?(Je(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mc.set(n,e),e)}/**
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
 */class Kl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kl.type="NONE";const Lc=Kl;/**
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
 */function jr(n,e,t){return`firebase:${n}:${e}:${t}`}class en{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=jr(this.userKey,s.apiKey,o),this.fullPersistenceKey=jr("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await os(this.auth,{idToken:e}).catch(()=>{});return t?Ve._fromGetAccountInfoResponse(this.auth,t,e):null}return Ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new en(He(Lc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||He(Lc);const a=jr(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let y;if(typeof p=="string"){const A=await os(e,{idToken:p}).catch(()=>{});if(!A)break;y=await Ve._fromGetAccountInfoResponse(e,A,p)}else y=Ve._fromJSON(e,p);d!==o&&(u=y),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new en(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new en(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ql(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eh(e))return"Blackberry";if(th(e))return"Webos";if(Jl(e))return"Safari";if((e.includes("chrome/")||Xl(e))&&!e.includes("edge/"))return"Chrome";if(Zl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ql(n=Ee()){return/firefox\//i.test(n)}function Jl(n=Ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xl(n=Ee()){return/crios\//i.test(n)}function Yl(n=Ee()){return/iemobile/i.test(n)}function Zl(n=Ee()){return/android/i.test(n)}function eh(n=Ee()){return/blackberry/i.test(n)}function th(n=Ee()){return/webos/i.test(n)}function _o(n=Ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function w_(n=Ee()){var e;return _o(n)&&!!((e=window.navigator)!=null&&e.standalone)}function v_(){return _d()&&document.documentMode===10}function nh(n=Ee()){return _o(n)||Zl(n)||th(n)||eh(n)||/windows phone/i.test(n)||Yl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n,e=[]){let t;switch(n){case"Browser":t=xc(Ee());break;case"Worker":t=`${xc(Ee())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${r}`}/**
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
 */class A_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function R_(n,e={}){return wt(n,"GET","/v2/passwordPolicy",qt(n,e))}/**
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
 */const S_=6;class P_{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??S_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fc(this),this.idTokenSubscription=new Fc(this),this.beforeStateQueue=new A_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ql,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=He(t)),this._initializationPromise=this.queue(async()=>{var r,s,o;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await os(this,{idToken:e}),r=await Ve._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(be(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,u=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(r=h.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await as(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(be(this.app))return Promise.reject(mt(this));const t=e?Se(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return be(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R_(this),t=new P_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await I_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&He(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[He(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&r_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _n(n){return Se(n)}class Fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rd(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function b_(n){Ps=n}function sh(n){return Ps.loadJS(n)}function k_(){return Ps.recaptchaEnterpriseScript}function V_(){return Ps.gapiScript}function D_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class N_{constructor(){this.enterprise=new O_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class O_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const M_="recaptcha-enterprise",ih="NO_RECAPTCHA";class L_{constructor(e){this.type=M_,this.auth=_n(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{f_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new d_(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function s(o,a,u){const h=window.grecaptcha;Nc(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(ih)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new N_().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&Nc(window.grecaptcha))s(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=k_();h.length!==0&&(h+=u),sh(h).then(()=>{s(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function Uc(n,e,t,r=!1,s=!1){const o=new L_(n);let a;if(s)a=ih;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const u={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const h=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const h=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Bc(n,e,t,r,s){var o;if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Uc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Uc(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n,e){const t=Fi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Nt(o,e??{}))return s;De(s,"already-initialized")}return t.initialize({options:e})}function F_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(He);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function U_(n,e,t){const r=_n(n);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=oh(e),{host:a,port:u}=B_(e),h=u===null?"":`:${u}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Nt(d,r.config.emulator)&&Nt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,hn(a)?(su(`${o}//${a}${h}`),iu("Auth",!0)):j_()}function oh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function B_(n){const e=oh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:jc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:jc(a)}}}function jc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function j_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,t){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}async function q_(n,e){return wt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(n,e){return Ss(n,"POST","/v1/accounts:signInWithPassword",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(n,e){return Ss(n,"POST","/v1/accounts:signInWithEmailLink",qt(n,e))}async function H_(n,e){return Ss(n,"POST","/v1/accounts:signInWithEmailLink",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends yo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new nr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new nr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bc(e,t,"signInWithPassword",$_);case"emailLink":return z_(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bc(e,r,"signUpPassword",q_);case"emailLink":return H_(e,{idToken:t,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(n,e){return Ss(n,"POST","/v1/accounts:signInWithIdp",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="http://localhost";class xt extends yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):De("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=t;if(!r||!s)return null;const a=new xt(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return tn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,tn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tn(e,t)}buildRequest(){const e={requestUri:W_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function K_(n){const e=Mn(Ln(n)).link,t=e?Mn(Ln(e)).deep_link_id:null,r=Mn(Ln(n)).deep_link_id;return(r?Mn(Ln(r)).link:null)||r||t||e||n}class Eo{constructor(e){const t=Mn(Ln(e)),r=t.apiKey??null,s=t.oobCode??null,o=G_(t.mode??null);L(r&&s&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=K_(e);try{return new Eo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.providerId=yn.PROVIDER_ID}static credential(e,t){return nr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Eo.parseLink(t);return L(r,"argument-error"),nr._fromEmailAndCode(e,r.code,r.tenantId)}}yn.PROVIDER_ID="password";yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hr extends ah{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends hr{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ot.credential(t,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends hr{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends hr{constructor(){super("twitter.com")}static credential(e,t){return xt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ct.credential(t,r)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await Ve._fromIdTokenResponse(e,r,s),a=qc(r);return new ln({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=qc(r);return new ln({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function qc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Xe{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new cs(e,t,r,s)}}function ch(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(n,o,e,r):o})}async function Q_(n,e,t=!1){const r=await tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ln._forOperation(n,"link",r)}/**
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
 */async function J_(n,e,t=!1){const{auth:r}=n;if(be(r.app))return Promise.reject(mt(r));const s="reauthenticate";try{const o=await tr(n,ch(r,s,e,n),t);L(o.idToken,r,"internal-error");const a=go(o.idToken);L(a,r,"internal-error");const{sub:u}=a;return L(n.uid===u,r,"user-mismatch"),ln._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&De(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(n,e,t=!1){if(be(n.app))return Promise.reject(mt(n));const r="signIn",s=await ch(n,r,e),o=await ln._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}async function X_(n,e){return uh(_n(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(n){const e=_n(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function yE(n,e,t){return be(n.app)?Promise.reject(mt(n)):X_(Se(n),yn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Y_(n),r})}function Z_(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function ey(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}const us="__sak";/**
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
 */class lh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(us,"1"),this.storage.removeItem(us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=1e3,ny=10;class hh extends lh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);v_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ny):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ty)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hh.type="LOCAL";const ry=hh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends lh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dh.type="SESSION";const fh=dh;/**
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
 */function sy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Cs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,o)),h=await sy(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class iy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=To("",20);s.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const A=y;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(A.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return window}function oy(n){je().location.href=n}/**
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
 */function ph(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function ay(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function uy(){return ph()?self:null}/**
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
 */const mh="firebaseLocalStorageDb",ly=1,ls="firebaseLocalStorage",gh="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bs(n,e){return n.transaction([ls],e?"readwrite":"readonly").objectStore(ls)}function hy(){const n=indexedDB.deleteDatabase(mh);return new dr(n).toPromise()}function Mi(){const n=indexedDB.open(mh,ly);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ls,{keyPath:gh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ls)?e(r):(r.close(),await hy(),e(await Mi()))})})}async function $c(n,e,t){const r=bs(n,!0).put({[gh]:e,value:t});return new dr(r).toPromise()}async function dy(n,e){const t=bs(n,!1).get(e),r=await new dr(t).toPromise();return r===void 0?null:r.value}function zc(n,e){const t=bs(n,!0).delete(e);return new dr(t).toPromise()}const fy=800,py=3;class _h{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>py)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ph()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cs._getInstance(uy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await ay(),!this.activeServiceWorker)return;this.sender=new iy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mi();return await $c(e,us,"1"),await zc(e,us),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>$c(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>dy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=bs(s,!1).getAll();return new dr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_h.type="LOCAL";const my=_h;new lr(3e4,6e4);/**
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
 */function gy(n,e){return e?He(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Io extends yo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _y(n){return uh(n.auth,new Io(n),n.bypassAuthState)}function yy(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),J_(t,new Io(n),n.bypassAuthState)}async function Ey(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Q_(t,new Io(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _y;case"linkViaPopup":case"linkViaRedirect":return Ey;case"reauthViaPopup":case"reauthViaRedirect":return yy;default:De(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new lr(2e3,1e4);class Jt extends yh{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=To();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ty.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="pendingRedirect",qr=new Map;class wy extends yh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=qr.get(this.auth._key());if(!e){try{const r=await vy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}qr.set(this.auth._key(),e)}return this.bypassAuthState||qr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vy(n,e){const t=Sy(e),r=Ry(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Ay(n,e){qr.set(n._key(),e)}function Ry(n){return He(n._redirectPersistence)}function Sy(n){return jr(Iy,n.config.apiKey,n.name)}async function Py(n,e,t=!1){if(be(n.app))return Promise.reject(mt(n));const r=_n(n),s=gy(r,e),a=await new wy(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=600*1e3;class by{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ky(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Eh(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hc(e))}saveEventToCache(e){this.cachedEventUids.add(Hc(e)),this.lastProcessedEventTime=Date.now()}}function Hc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Eh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ky(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Eh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(n,e={}){return wt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ny=/^https?/;async function Oy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Vy(n);for(const t of e)try{if(My(t))return}catch{}De(n,"unauthorized-domain")}function My(n){const e=Ni(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ny.test(t))return!1;if(Dy.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ly=new lr(3e4,6e4);function Wc(){const n=je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xy(n){return new Promise((e,t)=>{var s,o,a;function r(){Wc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wc(),t(Be(n,"network-request-failed"))},timeout:Ly.get()})}if((o=(s=je().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=je().gapi)!=null&&a.load)r();else{const u=D_("iframefcb");return je()[u]=()=>{gapi.load?r():t(Be(n,"network-request-failed"))},sh(`${V_()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw $r=null,e})}let $r=null;function Fy(n){return $r=$r||xy(n),$r}/**
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
 */const Uy=new lr(5e3,15e3),By="__/auth/iframe",jy="emulator/auth/iframe",qy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$y=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zy(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?mo(e,jy):`https://${n.config.authDomain}/${By}`,r={apiKey:e.apiKey,appName:n.name,v:dn},s=$y.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${sr(r).slice(1)}`}async function Hy(n){const e=await Fy(n),t=je().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:zy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qy,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Be(n,"network-request-failed"),u=je().setTimeout(()=>{o(a)},Uy.get());function h(){je().clearTimeout(u),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const Wy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gy=500,Ky=600,Qy="_blank",Jy="http://localhost";class Gc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xy(n,e,t,r=Gy,s=Ky){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h={...Wy,width:r.toString(),height:s.toString(),top:o,left:a},d=Ee().toLowerCase();t&&(u=Xl(d)?Qy:t),Ql(d)&&(e=e||Jy,h.scrollbars="yes");const p=Object.entries(h).reduce((A,[P,D])=>`${A}${P}=${D},`,"");if(w_(d)&&u!=="_self")return Yy(e||"",u),new Gc(null);const y=window.open(e||"",u,p);L(y,n,"popup-blocked");try{y.focus()}catch{}return new Gc(y)}function Yy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Zy="__/auth/handler",eE="emulator/auth/handler",tE=encodeURIComponent("fac");async function Kc(n,e,t,r,s,o){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:dn,eventId:s};if(e instanceof ah){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ad(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof hr){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const h=await n._getAppCheckToken(),d=h?`#${tE}=${encodeURIComponent(h)}`:"";return`${nE(n)}?${sr(u).slice(1)}${d}`}function nE({config:n}){return n.emulator?mo(n,eE):`https://${n.authDomain}/${Zy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="webStorageSupport";class rE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fh,this._completeRedirectFn=Py,this._overrideRedirectResult=Ay}async _openPopup(e,t,r,s){var a;Je((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Kc(e,t,r,Ni(),s);return Xy(e,o,To())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await Kc(e,t,r,Ni(),s);return oy(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(Je(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Hy(e),r=new by(e);return t.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hi,{type:hi},s=>{var a;const o=(a=s==null?void 0:s[0])==null?void 0:a[hi];o!==void 0&&t(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Oy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nh()||Jl()||_o()}}const sE=rE;var Qc="@firebase/auth",Jc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aE(n){nn(new Ot("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rh(n)},d=new C_(r,s,o,h);return F_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),nn(new Ot("auth-internal",e=>{const t=_n(e.getProvider("auth").getImmediate());return(r=>new iE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dt(Qc,Jc,oE(n)),dt(Qc,Jc,"esm2020")}/**
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
 */const cE=300,uE=ru("authIdTokenMaxAge")||cE;let Xc=null;const lE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>uE)return;const s=t==null?void 0:t.token;Xc!==s&&(Xc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hE(n=uu()){const e=Fi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=x_(n,{popupRedirectResolver:sE,persistence:[my,ry,fh]}),r=ru("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=lE(o.toString());ey(t,a,()=>a(t.currentUser)),Z_(t,u=>a(u))}}const s=tu("auth");return s&&U_(t,`http://${s}`),t}function dE(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}b_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=Be("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",dE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aE("Browser");const fE={apiKey:"AIzaSyAL5i88eAEVJnBtGlN_dsv8tUP9HQEQq5c",authDomain:"mugil-database.firebaseapp.com",projectId:"mugil-database",storageBucket:"mugil-database.firebasestorage.app",messagingSenderId:"954608237264",appId:"1:954608237264:web:8f97c0cc80f29da08bbcd5",measurementId:"G-HB902DJLD"},Th=cu(fE),EE=Ug(Th),TE=hE(Th);export{gE as a,TE as b,mE as c,EE as d,_E as o,yE as s};
