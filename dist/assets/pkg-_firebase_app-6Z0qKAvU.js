import{C as l,a as B}from"./pkg-_firebase_component-BL_B0eaU.js";import{L as P}from"./pkg-_firebase_logger-CNz1B4Yj.js";import{g as C,E as H,d as D,b as I,i as O,v as F,F as A}from"./pkg-_firebase_util-BK542VBS.js";import{o as R}from"./pkg-idb-BXWtuYvb.js";/**
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
 */class M{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(T(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function T(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const m="@firebase/app",E="0.16.1";/**
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
 */const c=new P("@firebase/app"),k="@firebase/app-compat",U="@firebase/analytics-compat",V="@firebase/analytics",L="@firebase/app-check-compat",j="@firebase/app-check",J="@firebase/auth",G="@firebase/auth-compat",z="@firebase/database",Y="@firebase/data-connect",q="@firebase/database-compat",X="@firebase/functions",K="@firebase/functions-compat",W="@firebase/installations",Q="@firebase/installations-compat",Z="@firebase/messaging",ee="@firebase/messaging-compat",te="@firebase/performance",ae="@firebase/performance-compat",re="@firebase/remote-config",ne="@firebase/remote-config-compat",se="@firebase/storage",ie="@firebase/storage-compat",oe="@firebase/firestore",ce="@firebase/ai",pe="@firebase/firestore-compat",he="firebase",le="12.18.0";/**
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
 */const b="[DEFAULT]",de={[m]:"fire-core",[k]:"fire-core-compat",[V]:"fire-analytics",[U]:"fire-analytics-compat",[j]:"fire-app-check",[L]:"fire-app-check-compat",[J]:"fire-auth",[G]:"fire-auth-compat",[z]:"fire-rtdb",[Y]:"fire-data-connect",[q]:"fire-rtdb-compat",[X]:"fire-fn",[K]:"fire-fn-compat",[W]:"fire-iid",[Q]:"fire-iid-compat",[Z]:"fire-fcm",[ee]:"fire-fcm-compat",[te]:"fire-perf",[ae]:"fire-perf-compat",[re]:"fire-rc",[ne]:"fire-rc-compat",[se]:"fire-gcs",[ie]:"fire-gcs-compat",[oe]:"fire-fst",[pe]:"fire-fst-compat",[ce]:"fire-vertex","fire-js":"fire-js",[he]:"fire-js-all"};/**
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
 */const p=new Map,fe=new Map,g=new Map;function $(a,e){try{a.container.addComponent(e)}catch(t){c.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,t)}}function u(a){const e=a.name;if(g.has(e))return c.debug(`There were multiple attempts to register component ${e}.`),!1;g.set(e,a);for(const t of p.values())$(t,a);for(const t of fe.values())$(t,a);return!0}function Be(a,e){const t=a.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),a.container.getProvider(e)}function Pe(a){return a==null?!1:a.settings!==void 0}/**
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
 */const me={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},o=new H("app","Firebase",me);/**
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
 */class be{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new l("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw o.create("app-deleted",{appName:this._name})}}/**
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
 */const He=le;function ge(a,e={}){let t=a;typeof e!="object"&&(e={name:e});const r={name:b,automaticDataCollectionEnabled:!0,...e},n=r.name;if(typeof n!="string"||!n)throw o.create("bad-app-name",{appName:String(n)});if(t||(t=C()),!t)throw o.create("no-options");const s=p.get(n);if(s)if(D(t,s.options)){if(D(r,s.config))return s;throw o.create("duplicate-app",{appName:n,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw o.create("duplicate-app",{appName:n,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(t)});const i=new B(n);for(const _ of g.values())i.addComponent(_);const w=new be(t,r,i);return p.set(n,w),w}function Oe(a=b){const e=p.get(a);if(!e&&a===b&&C())return ge();if(!e)throw o.create("no-app",{appName:a});return e}function Fe(){return Array.from(p.values())}function d(a,e,t){let r=de[a]??a;t&&(r+=`-${t}`);const n=r.match(/\s|\//),s=e.match(/\s|\//);if(n||s){const i=[`Unable to register library "${r}" with version "${e}":`];n&&i.push(`library name "${r}" contains illegal characters (whitespace or "/")`),n&&s&&i.push("and"),s&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),c.warn(i.join(" "));return}u(new l(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ue="firebase-heartbeat-database",we=1,h="firebase-heartbeat-store";let f=null;function x(){return f||(f=R(ue,we,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(h)}catch(t){console.warn(t)}}}}).catch(a=>{throw o.create("idb-open",{originalErrorMessage:a.message})})),f}async function _e(a){try{const t=(await x()).transaction(h),r=await t.objectStore(h).get(N(a));return await t.done,r}catch(e){if(e instanceof A)c.warn(e.message);else{const t=o.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});c.warn(t.message)}}}async function v(a,e){try{const r=(await x()).transaction(h,"readwrite");await r.objectStore(h).put(e,N(a)),await r.done}catch(t){if(t instanceof A)c.warn(t.message);else{const r=o.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});c.warn(r.message)}}}function N(a){return`${a.name}!${a.options.appId}`}/**
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
 */const De=1024,Ee=30;class $e{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ye(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=y();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Ee){const i=Se(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){c.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=y(),{heartbeatsToSend:r,unsentEntries:n}=ve(this._heartbeatsCache.heartbeats),s=I(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return c.warn(t),""}}}function y(){return new Date().toISOString().substring(0,10)}function ve(a,e=De){const t=[];let r=a.slice();for(const n of a){const s=t.find(i=>i.agent===n.agent);if(s){if(s.dates.push(n.date),S(t)>e){s.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),S(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ye{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return O()?F().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _e(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return v(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return v(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function S(a){return I(JSON.stringify({version:2,heartbeats:a})).length}function Se(a){if(a.length===0)return-1;let e=0,t=a[0].date;for(let r=1;r<a.length;r++)a[r].date<t&&(t=a[r].date,e=r);return e}/**
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
 */function Ce(a){u(new l("platform-logger",e=>new M(e),"PRIVATE")),u(new l("heartbeat",e=>new $e(e),"PRIVATE")),d(m,E,a),d(m,E,"esm2020"),d("fire-js","")}/**
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
 */Ce("");export{He as S,u as _,Pe as a,Be as b,Fe as c,Oe as g,ge as i,d as r};
