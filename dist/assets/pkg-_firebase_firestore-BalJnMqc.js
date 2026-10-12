import{a as wo,b as Pi,g as Io,_ as Ao,r as xs,S as vo}from"./pkg-_firebase_app-6Z0qKAvU.js";import{C as Vo}from"./pkg-_firebase_component-BL_B0eaU.js";import{F as Ro,d as Si,m as Fr,p as Ci,w as Po,x as So,h as pt,y as Co,k as xo}from"./pkg-_firebase_util-BK542VBS.js";import{I as Je,g as bo,E as No,X as Do,a as ko,b as mr,W as En,c as Lo,M as Oo,S as bs}from"./pkg-_firebase_webchannel_wrapper-BiAmWhZc.js";import{L as Mo,a as Se}from"./pkg-_firebase_logger-CNz1B4Yj.js";import{R as qr}from"./pkg-re2js-C89UaZPX.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt="12.18.0";function Uo(n){Vt=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const et=new Mo("@firebase/firestore");function ut(){return et.logLevel}function w(n,...e){if(et.logLevel<=Se.DEBUG){const t=e.map(Br);et.debug(`Firestore (${Vt}): ${n}`,...t)}}function Ne(n,...e){if(et.logLevel<=Se.ERROR){const t=e.map(Br);et.error(`Firestore (${Vt}): ${n}`,...t)}}function ge(n,...e){if(et.logLevel<=Se.WARN){const t=e.map(Br);et.warn(`Firestore (${Vt}): ${n}`,...t)}}function Br(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,xi(n,r,t)}function xi(n,e,t){let r=`FIRESTORE (${Vt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ne(r),new Error(r)}function I(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||xi(e,s,r)}function P(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Fo(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function b(n,e){return n<e?-1:n>e?1:0}function Ir(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return _r(s)===_r(i)?b(s,i):_r(s)?1:-1}return b(n.length,e.length)}const qo=55296,Bo=57343;function _r(n){const e=n.charCodeAt(0);return e>=qo&&e<=Bo}function gt(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.comparator=e,this.root=t||H.EMPTY}insert(e,t){return new O(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,H.BLACK,null,null))}remove(e){return new O(this.comparator,this.root.remove(e,this.comparator).copy(null,null,H.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tn(this.root,e,this.comparator,!0)}}class Tn{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class H{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??H.RED,this.left=s??H.EMPTY,this.right=i??H.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new H(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return H.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return H.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v(43730,{key:this.key,value:this.value});if(this.right.isRed())throw v(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw v(27949);return e+(this.isRed()?0:1)}}H.EMPTY=null,H.RED=!0,H.BLACK=!1;H.EMPTY=new class{constructor(){this.size=0}get key(){throw v(57766)}get value(){throw v(16141)}get color(){throw v(16727)}get left(){throw v(29726)}get right(){throw v(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new H(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.comparator=e,this.data=new O(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ns(this.data.getIterator())}getIteratorFrom(e){return new Ns(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof z)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new z(this.comparator);return t.data=e,t}}class Ns{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Ro{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="__name__";class Ee{constructor(e,t,r){t===void 0?t=0:t>e.length&&v(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&v(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ee.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ee?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ee.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return b(e.length,t.length)}static compareSegments(e,t){const r=Ee.isNumericId(e),s=Ee.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ee.extractNumericId(e).compare(Ee.extractNumericId(t)):Ir(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Je.fromString(e.substring(4,e.length-2))}}class D extends Ee{construct(e,t,r){return new D(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new D(t)}static emptyPath(){return new D([])}}const $o=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let de=class ct extends Ee{construct(e,t,r){return new ct(e,t,r)}static isValidIdentifier(e){return $o.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Te}static keyField(){return new ct([Te])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new T(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new T(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new T(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(t)}static emptyPath(){return new ct([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new pe([])}unionWith(e){let t=new z(de.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new pe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gt(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function nt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function zo(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function bi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.path=e}static fromPath(e){return new A(D.fromString(e))}static fromName(e){return new A(D.fromString(e).popFirst(5))}static empty(){return new A(D.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&D.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return D.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new A(new D(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n,e,t){if(!t)throw new T(_.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Go(n,e,t,r){if(e===!0&&r===!0)throw new T(_.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ds(n){if(!A.isDocumentKey(n))throw new T(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ks(n){if(A.isDocumentKey(n))throw new T(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function cn(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function jn(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":v(12329,{type:typeof n})}function yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new T(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jn(n);throw new T(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function B(n,e){const t={typeString:n};return e&&(t.value=e),t}function ln(n,e){if(!cn(n))throw new T(_.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new T(_.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=-62135596800,Os=1e6;class L{static now(){return L.fromMillis(Date.now())}static fromDate(e){return L.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Os);return new L(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ls)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Os}_compareTo(e){return this.seconds===e.seconds?b(this.nanoseconds,e.nanoseconds):b(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:L._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ln(e,L._jsonSchema))return new L(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ls;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}L._jsonSchemaVersion="firestore/timestamp/1.0",L._jsonSchema={type:B("string",L._jsonSchemaVersion),seconds:B("number"),nanoseconds:B("number")};/**
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
 */class Di extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Di("Invalid base64 string: "+i):i}})(e);return new G(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new G(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return b(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}G.EMPTY_BYTE_STRING=new G("");const Qo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fe(n){if(I(!!n,39018),typeof n=="string"){let e=0;const t=Qo.exec(n);if(I(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:M(n.seconds),nanos:M(n.nanos)}}function M(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qe(n){return typeof n=="string"?G.fromBase64String(n):G.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="server_timestamp",Li="__type__",Oi="__previous_value__",Mi="__local_write_time__";function Wn(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Li])==null?void 0:r.stringValue)===ki}function hn(n){const e=n.mapValue.fields[Oi];return Wn(e)?hn(e):e}function Et(n){const e=Fe(n.mapValue.fields[Mi].timestampValue);return new L(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,r,s,i,a,o,u,c,l,h,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=l,this.apiKey=h,this._customHeaders=f,this.grpcFlowControlWindow=g}}const jt="(default)";class Wt{constructor(e,t){this.projectId=e,this.database=t||jt}static empty(){return new Wt("","")}get isDefaultDatabase(){return this.database===jt}isEqual(e){return e instanceof Wt&&e.projectId===this.projectId&&e.database===this.database}}function Wo(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new T(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wt(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=-1;function Kn(n){return n==null}function Kt(n){return n===0&&1/n==-1/0}function Ko(n){return typeof n=="number"&&Number.isInteger(n)&&!Kt(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Ho(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="__type__",Yo="__max__",wn={mapValue:{}},Fi="__vector__",Ht="value",Tt={nullValue:"NULL_VALUE"},ie={booleanValue:!0},K={booleanValue:!1};function Q(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wn(n)?4:Jo(n)?9007199254740991:Dn(n)?10:11:v(28295,{value:n})}function _e(n,e,t){if(n===e)return!0;const r=Q(n);if(r!==Q(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Et(n).isEqual(Et(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const o=Fe(i.timestampValue),u=Fe(a.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return qe(i.bytesValue).isEqual(qe(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return M(i.geoPointValue.latitude)===M(a.geoPointValue.latitude)&&M(i.geoPointValue.longitude)===M(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a,o){if("integerValue"in i&&"integerValue"in a)return M(i.integerValue)===M(a.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in a)u=M(i.doubleValue),c=M(a.doubleValue);else{if(!(o!=null&&o.t))return!1;u=M(i.integerValue??i.doubleValue),c=M(a.integerValue??a.doubleValue)}return u===c?!!(o!=null&&o.i)||Kt(u)===Kt(c):!!(o===void 0||o.o)&&isNaN(u)&&isNaN(c)})(n,e,t);case 9:return gt(n.arrayValue.values||[],e.arrayValue.values||[],((s,i)=>_e(s,i,t)));case 10:case 11:return(function(i,a,o){const u=i.mapValue.fields||{},c=a.mapValue.fields||{};if(Nn(u)!==Nn(c))return!1;for(const l in u)if(u.hasOwnProperty(l)&&(c[l]===void 0||!_e(u[l],c[l],o)))return!1;return!0})(n,e,t);default:return v(52216,{left:n})}}function Yt(n,e){return(n.values||[]).find((t=>_e(t,e)))!==void 0}function ae(n,e){if(n===e)return 0;const t=Q(n),r=Q(e);if(t!==r)return b(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return b(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const o=M(i.integerValue||i.doubleValue),u=M(a.integerValue||a.doubleValue);return o<u?-1:o>u?1:o===u?0:isNaN(o)?isNaN(u)?0:-1:1})(n,e);case 3:return Ms(n.timestampValue,e.timestampValue);case 4:return Ms(Et(n),Et(e));case 5:return Ir(n.stringValue,e.stringValue);case 6:return(function(i,a){const o=qe(i),u=qe(a);return o.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const o=i.split("/"),u=a.split("/");for(let c=0;c<o.length&&c<u.length;c++){const l=b(o[c],u[c]);if(l!==0)return l}return b(o.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const o=b(M(i.latitude),M(a.latitude));return o!==0?o:b(M(i.longitude),M(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Us(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var f,g,E,C;const o=i.fields||{},u=a.fields||{},c=(f=o[Ht])==null?void 0:f.arrayValue,l=(g=u[Ht])==null?void 0:g.arrayValue,h=b(((E=c==null?void 0:c.values)==null?void 0:E.length)||0,((C=l==null?void 0:l.values)==null?void 0:C.length)||0);return h!==0?h:Us(c,l)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===wn.mapValue&&a===wn.mapValue)return 0;if(i===wn.mapValue)return 1;if(a===wn.mapValue)return-1;const o=i.fields||{},u=Object.keys(o),c=a.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const f=Ir(u[h],l[h]);if(f!==0)return f;const g=ae(o[u[h]],c[l[h]]);if(g!==0)return g}return b(u.length,l.length)})(n.mapValue,e.mapValue);default:throw v(23264,{u:t})}}function Ms(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return b(n,e);const t=Fe(n),r=Fe(e),s=b(t.seconds,r.seconds);return s!==0?s:b(t.nanos,r.nanos)}function Us(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ae(t[s],r[s]);if(i!==void 0&&i!==0)return i}return b(t.length,r.length)}function wt(n){return Ar(n)}function Ar(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Fe(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return qe(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return A.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ar(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ar(t.fields[a])}`;return s+"}"})(n.mapValue):v(61005,{value:n})}function Rn(n){switch(Q(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hn(n);return e?16+Rn(e):16;case 5:return 2*n.stringValue.length;case 6:return qe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Rn(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return nt(r.fields,((i,a)=>{s+=i.length+Rn(a)})),s})(n.mapValue);default:throw v(13486,{value:n})}}function Fs(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function we(n){return!!n&&"integerValue"in n}function Ye(n){return!!n&&"doubleValue"in n}function Be(n){return we(n)||Ye(n)}function It(n){return!!n&&"arrayValue"in n}function he(n){return!!n&&"nullValue"in n}function oe(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xe(n){return!!n&&"mapValue"in n}function Dn(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ui])==null?void 0:r.stringValue)===Fi}function vr(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Ht])==null?void 0:t.arrayValue}function Ft(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return nt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ft(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ft(n.arrayValue.values[t]);return e}return{...n}}function Jo(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Yo}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.value=e}static empty(){return new le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xe(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ft(t)}setAll(e){let t=de.emptyPath(),r={},s=[];e.forEach(((a,o)=>{if(!t.isImmediateParentOf(o)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=o.popLast()}a?r[o.lastSegment()]=Ft(a):s.push(o.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Xe(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _e(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Xe(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){nt(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new le(Ft(this.value))}}function qi(n){const e=[];return nt(n.fields,((t,r)=>{const s=new de([t]);if(Xe(r)){const i=qi(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new pe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kt(e)?"-0":e}}function Gr(n){return{integerValue:""+n}}function Qr(n,e,t){return Ko(e)?Gr(e):Hn(n,e)}/**
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
 */class Yn{constructor(){this._=void 0}}function Xo(n,e,t){return n instanceof kn?(function(s,i){const a={fields:{[Li]:{stringValue:ki},[Mi]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wn(i)&&(i=hn(i)),i&&(a.fields[Oi]=i),{mapValue:a}})(t,e):n instanceof Jt?$i(n,e):n instanceof Xt?zi(n,e):n instanceof Zt?(function(s,i){const a=Bi(s,i),o=Mn(a)+Mn(s.l);return we(a)&&we(s.l)?Gr(o):Hn(s.serializer,o)})(n,e):n instanceof Ln?(function(s,i){return qs(s,i,Math.min)})(n,e):n instanceof On?(function(s,i){return qs(s,i,Math.max)})(n,e):void 0}function Zo(n,e,t){return n instanceof Jt?$i(n,e):n instanceof Xt?zi(n,e):t}function Bi(n,e){return n instanceof Zt?Be(e)?e:{integerValue:0}:null}class kn extends Yn{}class Jt extends Yn{constructor(e){super(),this.elements=e}}function $i(n,e){const t=Gi(e);for(const r of n.elements)t.some((s=>_e(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Xt extends Yn{constructor(e){super(),this.elements=e}}function zi(n,e){let t=Gi(e);for(const r of n.elements)t=t.filter((s=>!_e(s,r)));return{arrayValue:{values:t}}}class jr extends Yn{constructor(e,t){super(),this.serializer=e,this.l=t}}class Zt extends jr{}class Ln extends jr{}class On extends jr{}function qs(n,e,t){if(!Be(e))return n.l;const r=t(Mn(e),Mn(n.l));return we(e)&&we(n.l)?Gr(r):Hn(n.serializer,r)}function Mn(n){return M(n.integerValue||n.doubleValue)}function Gi(n){return It(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function eu(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Jt&&s instanceof Jt||r instanceof Xt&&s instanceof Xt?gt(r.elements,s.elements,_e):r instanceof Zt&&s instanceof Zt||r instanceof Ln&&s instanceof Ln||r instanceof On&&s instanceof On?_e(r.l,s.l):r instanceof kn&&s instanceof kn})(n.transform,e.transform)}class tu{constructor(e,t){this.version=e,this.transformResults=t}}class Ie{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ie}static exists(e){return new Ie(void 0,e)}static updateTime(e){return new Ie(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pn(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Jn{}function Qi(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wr(n.key,Ie.none()):new dn(n.key,n.data,Ie.none());{const t=n.data,r=le.empty();let s=new z(de.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new rt(n.key,r,new pe(s.toArray()),Ie.none())}}function nu(n,e,t){n instanceof dn?(function(s,i,a){const o=s.value.clone(),u=$s(s.fieldTransforms,i,a.transformResults);o.setAll(u),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()})(n,e,t):n instanceof rt?(function(s,i,a){if(!Pn(s.precondition,i))return void i.convertToUnknownDocument(a.version);const o=$s(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(ji(s)),u.setAll(o),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function qt(n,e,t,r){return n instanceof dn?(function(i,a,o,u){if(!Pn(i.precondition,a))return o;const c=i.value.clone(),l=zs(i.fieldTransforms,u,a);return c.setAll(l),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null})(n,e,t,r):n instanceof rt?(function(i,a,o,u){if(!Pn(i.precondition,a))return o;const c=zs(i.fieldTransforms,u,a),l=a.data;return l.setAll(ji(i)),l.setAll(c),a.convertToFoundDocument(a.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((h=>h.field)))})(n,e,t,r):(function(i,a,o){return Pn(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o})(n,e,t)}function ru(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Bi(r.transform,s||null);i!=null&&(t===null&&(t=le.empty()),t.set(r.field,i))}return t||null}function Bs(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gt(r,s,((i,a)=>eu(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dn extends Jn{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rt extends Jn{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ji(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function $s(n,e,t){const r=new Map;I(n.length===t.length,32656,{h:t.length,T:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,o=e.data.field(i.field);r.set(i.field,Zo(a,o,t[s]))}return r}function zs(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Xo(i,a,e))}return r}class Wr extends Jn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class su extends Jn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Un{constructor(e,t){this.position=e,this.inclusive=t}}function Gs(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=A.comparator(A.fromName(a.referenceValue),t.key):r=ae(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qs(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_e(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wi{}class q extends Wi{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new au(e,t,r):t==="array-contains"?new cu(e,r):t==="in"?new lu(e,r):t==="not-in"?new hu(e,r):t==="array-contains-any"?new du(e,r):new q(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ou(e,r):new uu(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ae(t,this.value)):t!==null&&Q(this.value)===Q(t)&&this.matchesComparison(ae(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return v(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends Wi{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new ye(e,t)}matches(e){return Ki(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function Ki(n){return n.op==="and"}function Hi(n){return iu(n)&&Ki(n)}function iu(n){for(const e of n.filters)if(e instanceof ye)return!1;return!0}function Vr(n){if(n instanceof q)return n.field.canonicalString()+n.op.toString()+wt(n.value);if(Hi(n))return n.filters.map((e=>Vr(e))).join(",");{const e=n.filters.map((t=>Vr(t))).join(",");return`${n.op}(${e})`}}function Yi(n,e){return n instanceof q?(function(r,s){return s instanceof q&&r.op===s.op&&r.field.isEqual(s.field)&&_e(r.value,s.value)})(n,e):n instanceof ye?(function(r,s){return s instanceof ye&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,o)=>i&&Yi(a,s.filters[o])),!0):!1})(n,e):void v(19439)}function Ji(n){return n instanceof q?(function(t){return`${t.field.canonicalString()} ${t.op} ${wt(t.value)}`})(n):n instanceof ye?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ji).join(" ,")+"}"})(n):"Filter"}class au extends q{constructor(e,t,r){super(e,t,r),this.key=A.fromName(r.referenceValue)}matches(e){const t=A.comparator(e.key,this.key);return this.matchesComparison(t)}}class ou extends q{constructor(e,t){super(e,"in",t),this.keys=Xi("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class uu extends q{constructor(e,t){super(e,"not-in",t),this.keys=Xi("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Xi(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>A.fromName(r.referenceValue)))}class cu extends q{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return It(t)&&Yt(t.arrayValue,this.value)}}class lu extends q{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Yt(this.value.arrayValue,t)}}class hu extends q{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Yt(this.value.arrayValue,t)}}class du extends q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!It(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Yt(this.value.arrayValue,r)))}}/**
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
 */class en{constructor(e,t="asc"){this.field=e,this.dir=t}}function fu(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static fromTimestamp(e){return new R(e)}static min(){return new R(new L(0,0))}static max(){return new R(new L(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,r,s,i,a,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(e){return new Z(e,0,R.min(),R.min(),R.min(),le.empty(),0)}static newFoundDocument(e,t,r,s){return new Z(e,1,t,R.min(),r,s,0)}static newNoDocument(e,t){return new Z(e,2,t,R.min(),R.min(),le.empty(),0)}static newUnknownDocument(e,t){return new Z(e,3,t,R.min(),R.min(),le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const tn=-1;function mu(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=R.fromTimestamp(r===1e9?new L(t+1,0):new L(t,r));return new $e(s,A.empty(),e)}function _u(n){return new $e(n.readTime,n.key,tn)}class $e{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new $e(R.min(),A.empty(),tn)}static max(){return new $e(R.max(),A.empty(),tn)}}function pu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=A.comparator(n.documentKey,e.documentKey),t!==0?t:b(n.largestBatchId,e.largestBatchId))}/**
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
 */class gu{constructor(e,t=null,r=[],s=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=o,this.R=null}}function js(n,e=null,t=[],r=[],s=null,i=null,a=null){return new gu(n,e,t,r,s,i,a)}function Zi(n){const e=P(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Vr(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Kn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>wt(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>wt(r))).join(",")),e.R=t}return e.R}function ea(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!fu(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Yi(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qs(n.startAt,e.startAt)&&Qs(n.endAt,e.endAt)}function He(n){return!!n.isCorePipeline}function ta(n){return!!n.path&&A.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t=null,r=[],s=[],i=null,a="F",o=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function yu(n,e,t,r,s,i,a,o){return new Rt(n,e,t,r,s,i,a,o)}function na(n){return new Rt(n)}function Ws(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Eu(n){return A.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ra(n){return n.collectionGroup!==null}function Bt(n){const e=P(n);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new z(de.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((c=>{c.isInequality()&&(o=o.add(c.field))}))})),o})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new en(i,r))})),t.has(de.keyField().canonicalString())||e.I.push(new en(de.keyField(),r))}return e.I}function Ae(n){const e=P(n);return e.A||(e.A=Tu(e,Bt(n))),e.A}function Tu(n,e){if(n.limitType==="F")return js(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new en(s.field,i)}));const t=n.endAt?new Un(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Un(n.startAt.position,n.startAt.inclusive):null;return js(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Rr(n,e){const t=n.filters.concat([e]);return new Rt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function wu(n,e){const t=n.explicitOrderBy.concat([e]);return new Rt(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Pr(n,e,t){return new Rt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Iu(n,e){return ea(Ae(n),Ae(e))&&n.limitType===e.limitType}function $t(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Ji(s))).join(", ")}]`),Kn(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>wt(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>wt(s))).join(",")),`Target(${r})`})(Ae(n))}; limitType=${n.limitType})`}function Xn(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):A.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Bt(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,o,u){const c=Gs(a,o,u);return a.inclusive?c<=0:c<0})(r.startAt,Bt(r),s)||r.endAt&&!(function(a,o,u){const c=Gs(a,o,u);return a.inclusive?c>=0:c>0})(r.endAt,Bt(r),s))})(n,e)}function Kr(n){return(e,t)=>{let r=!1;for(const s of Bt(n)){const i=Au(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Au(n,e,t){const r=n.field.isKeyField()?A.comparator(e.key,t.key):(function(i,a,o){const u=a.data.field(i),c=o.data.field(i);return u!==null&&c!==null?ae(u,c):v(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return v(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,N;function Vu(n){switch(n){case _.OK:return v(64938);case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0;default:return v(15467,{code:n})}}function sa(n){if(n===void 0)return Ne("GRPC error has no .code"),_.UNKNOWN;switch(n){case F.OK:return _.OK;case F.CANCELLED:return _.CANCELLED;case F.UNKNOWN:return _.UNKNOWN;case F.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case F.INTERNAL:return _.INTERNAL;case F.UNAVAILABLE:return _.UNAVAILABLE;case F.UNAUTHENTICATED:return _.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case F.NOT_FOUND:return _.NOT_FOUND;case F.ALREADY_EXISTS:return _.ALREADY_EXISTS;case F.PERMISSION_DENIED:return _.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case F.ABORTED:return _.ABORTED;case F.OUT_OF_RANGE:return _.OUT_OF_RANGE;case F.UNIMPLEMENTED:return _.UNIMPLEMENTED;case F.DATA_LOSS:return _.DATA_LOSS;default:return v(39323,{code:n})}}(N=F||(F={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){nt(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return bi(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new O(A.comparator);function re(){return Ru}const ia=new O(A.comparator);function lt(...n){let e=ia;for(const t of n)e=e.insert(t.key,t);return e}function aa(n){let e=ia;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function ke(){return zt()}function oa(){return zt()}function zt(){return new st((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Pu=new O(A.comparator),Su=new z(A.comparator);function x(...n){let e=Su;for(const t of n)e=e.add(t);return e}const Cu=new z(b);function xu(){return Cu}/**
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
 */function bu(){return new TextEncoder}/**
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
 */const Nu=new Je([4294967295,4294967295],0);function Ks(n){const e=bu().encode(n),t=new Oo;return t.update(e),new Uint8Array(t.digest())}function Hs(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Je([t,r],0),new Je([s,i],0)]}class Hr{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Mt(`Invalid padding: ${t}`);if(r<0)throw new Mt(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mt(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Mt(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=Je.fromNumber(this.m)}S(e,t,r){let s=e.add(t.multiply(Je.fromNumber(r)));return s.compare(Nu)===1&&(s=new Je([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}v(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=Ks(e),[r,s]=Hs(t);for(let i=0;i<this.hashCount;i++){const a=this.S(r,s,i);if(!this.v(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Hr(i,s,t);return r.forEach((o=>a.insert(o))),a}insert(e){if(this.m===0)return;const t=Ks(e),[r,s]=Hs(t);for(let i=0;i<this.hashCount;i++){const a=this.S(r,s,i);this.D(a)}}D(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Mt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,r,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,mn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new fn(R.min(),s,new O(b),re(),re(),x())}}class mn{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new mn(r,t,x(),x(),x())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t,r,s){this.C=e,this.removedTargetIds=t,this.key=r,this.F=s}}class ua{constructor(e,t){this.targetId=e,this.O=t}}class ca{constructor(e,t,r=G.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ys{constructor(e){this.targetId=e,this.M=0,this.N=Js(),this.L=G.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=x(),t=x(),r=x();return this.N.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:v(38017,{changeType:i})}})),new mn(this.L,this.B,e,t,r)}W(){this.U=!1,this.N=Js()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,I(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const Lt="WatchChangeAggregator";class Du{constructor(e){this.Z=e,this.X=new Map,this.ee=re(),this.te=In(),this.ne=re(),this.re=In(),this.ie=new O(b)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,(t=>{const r=this.X.get(t);if(r)switch(e.state){case 0:this.ue(t)&&r.$(e.resumeToken);break;case 1:r.J(),r.k||r.W(),r.$(e.resumeToken);break;case 2:r.J(),r.k||this.removeTarget(t);break;case 3:this.ue(t)&&(r.Y(),r.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),r.$(e.resumeToken));break;default:v(56790,{state:e.state})}else w(Lt,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach(((r,s)=>{this.ue(s)&&t(s)}))}le(e){var t;return He(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:ta(e)}Ee(e){const t=e.targetId,r=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(r===0){const a=new A(He(i)?D.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,a,Z.newNoDocument(a,R.min()))}else I(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.Te(t);if(a!==r){const o=this.Pe(e),u=o?this.Re(o,e,a):1;if(u!==0){this.ce(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,c)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,o;try{a=qe(r).toUint8Array()}catch(u){if(u instanceof Di)return ge("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{o=new Hr(a,s,i)}catch(u){return ge(u instanceof Mt?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return o.m===0?null:o}Re(e,t,r){return t.O.count===r-this.Ve(e,t.targetId)?0:2}Ve(e,t){const r=this.Z.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Z.Ae(),o=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(o)||(this.oe(t,i,null),s++)})),s}de(e){const t=new Map;this.X.forEach(((i,a)=>{const o=this.he(a);if(o){if(i.current&&this.le(o.target)){const u=He(o.target)?D.fromString(o.target.getPipelineDocuments()[0]):o.target.path,c=new A(u);this.fe(c).has(a)||this.me(a,c)||this.oe(a,c,Z.newNoDocument(c,e))}i.q&&(t.set(a,i.K()),i.W())}}));let r=x();this.re.forEach(((i,a)=>{let o=!0;a.forEachWhile((u=>{const c=this.he(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)})),o&&(r=r.add(i))})),this.ee.forEach(((i,a)=>a.setReadTime(e))),this.ne.forEach(((i,a)=>a.setReadTime(e)));const s=new fn(e,t,this.ie,this.ee,this.ne,r);return this.ee=re(),this.te=In(),this.ne=re(),this.re=In(),this.ie=new O(b),s}_e(e,t){const r=this.X.get(e);if(!r||!this.ue(e))return void w(Lt,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;r.G(t.key,s),He(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,r){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),r&&(He(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,r):this.ee=this.ee.insert(t,r))):w(Lt,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const r=t.K();return this.Z.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}H(e){let t=this.X.get(e);t||(w(Lt,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Ys(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new z(b),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new z(b),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||w(Lt,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new Ys(e)),this.Z.getRemoteKeysForTarget(e).forEach((t=>{this.oe(e,t,null)}))}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function In(){return new O(A.comparator)}function Js(){return new O(A.comparator)}const ku={asc:"ASCENDING",desc:"DESCENDING"},Lu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ou={and:"AND",or:"OR"};class Mu{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sr(n,e){return n.useProto3Json||Kn(e)?e:{value:e}}function Fn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yr(n){const e=Fe(n);return new L(e.seconds,e.nanos)}function la(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cn(n,e){return Fn(n,e.toTimestamp())}function ve(n){return I(!!n,49232),R.fromTimestamp(Yr(n))}function Jr(n,e){return Cr(n,e).canonicalString()}function Cr(n,e){const t=(function(s){return new D(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ha(n){const e=D.fromString(n);return I(pa(e),10190,{key:e.toString()}),e}function qn(n,e){return Jr(n.databaseId,e.path)}function pr(n,e){const t=ha(e);if(t.get(1)!==n.databaseId.projectId)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new A(fa(t))}function da(n,e){return Jr(n.databaseId,e)}function Uu(n){const e=ha(n);return e.length===4?D.emptyPath():fa(e)}function xr(n){return new D(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fa(n){return I(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Xs(n,e,t){return{name:qn(n,e),fields:t.value.mapValue.fields}}function Fu(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:v(39313,{state:c})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(c,l){return c.useProto3Json?(I(l===void 0||typeof l=="string",58123),G.fromBase64String(l||"")):(I(l===void 0||l instanceof Buffer||l instanceof Uint8Array,16193),G.fromUint8Array(l||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&(function(c){const l=c.code===void 0?_.UNKNOWN:sa(c.code);return new T(l,c.message||"")})(a);t=new ca(r,s,i,o||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=pr(n,r.document.name),i=ve(r.document.updateTime),a=r.document.createTime?ve(r.document.createTime):R.min(),o=new le({mapValue:{fields:r.document.fields}}),u=Z.newFoundDocument(s,i,a,o),c=r.targetIds||[],l=r.removedTargetIds||[];t=new Sn(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=pr(n,r.document),i=r.readTime?ve(r.readTime):R.min(),a=Z.newNoDocument(s,i),o=r.removedTargetIds||[];t=new Sn([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=pr(n,r.document),i=r.removedTargetIds||[];t=new Sn([],i,s,null)}else{if(!("filter"in e))return v(11601,{ye:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new vu(s,i),o=r.targetId;t=new ua(o,a)}}return t}function qu(n,e){let t;if(e instanceof dn)t={update:Xs(n,e.key,e.value)};else if(e instanceof Wr)t={delete:qn(n,e.key)};else if(e instanceof rt)t={update:Xs(n,e.key,e.data),updateMask:Yu(e.fieldMask)};else{if(!(e instanceof su))return v(16599,{we:e.type});t={verify:qn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const o=a.transform;if(o instanceof kn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Jt)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xt)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zt)return{fieldPath:a.field.canonicalString(),increment:o.l};if(o instanceof Ln)return{fieldPath:a.field.canonicalString(),minimum:o.l};if(o instanceof On)return{fieldPath:a.field.canonicalString(),maximum:o.l};throw v(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Cn(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:v(27497)})(n,e.precondition)),t}function Bu(n,e){return n&&n.length>0?(I(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?ve(s.updateTime):ve(i);return a.isEqual(R.min())&&(a=ve(i)),new tu(a,s.transformResults||[])})(t,e)))):[]}function $u(n,e){return{documents:[da(n,e.path)]}}function zu(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=da(n,s);const i=(function(c){if(c.length!==0)return _a(ye.create(c,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(c){if(c.length!==0)return c.map((l=>(function(f){return{field:ht(f.field),direction:Wu(f.dir)}})(l)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const o=Sr(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{be:t,parent:s}}function Gu(n){let e=Uu(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){I(r===1,65062);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=(function(h){const f=ma(h);return f instanceof ye&&Hi(f)?f.getFilters():[f]})(t.where));let a=[];t.orderBy&&(a=(function(h){return h.map((f=>(function(E){return new en(dt(E.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(f)))})(t.orderBy));let o=null;t.limit&&(o=(function(h){let f;return f=typeof h=="object"?h.value:h,Kn(f)?null:f})(t.limit));let u=null;t.startAt&&(u=(function(h){const f=!!h.before,g=h.values||[];return new Un(g,f)})(t.startAt));let c=null;return t.endAt&&(c=(function(h){const f=!h.before,g=h.values||[];return new Un(g,f)})(t.endAt)),yu(e,s,a,i,o,"F",u,c)}function Qu(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ju(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(n)))}}}}function ma(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=dt(t.unaryFilter.field);return q.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=dt(t.unaryFilter.field);return q.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=dt(t.unaryFilter.field);return q.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=dt(t.unaryFilter.field);return q.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return v(61313);default:return v(60726)}})(n):n.fieldFilter!==void 0?(function(t){return q.create(dt(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return v(58110);default:return v(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ye.create(t.compositeFilter.filters.map((r=>ma(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return v(1026)}})(t.compositeFilter.op))})(n):v(30097,{filter:n})}function Wu(n){return ku[n]}function Ku(n){return Lu[n]}function Hu(n){return Ou[n]}function ht(n){return{fieldPath:n.canonicalString()}}function dt(n){return de.fromServerFormat(n.fieldPath)}function _a(n){return n instanceof q?(function(t){if(t.op==="=="){if(oe(t.value))return{unaryFilter:{field:ht(t.field),op:"IS_NAN"}};if(he(t.value))return{unaryFilter:{field:ht(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(oe(t.value))return{unaryFilter:{field:ht(t.field),op:"IS_NOT_NAN"}};if(he(t.value))return{unaryFilter:{field:ht(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ht(t.field),op:Ku(t.op),value:t.value}}})(n):n instanceof ye?(function(t){const r=t.getFilters().map((s=>_a(s)));return r.length===1?r[0]:{compositeFilter:{op:Hu(t.op),filters:r}}})(n):v(54877,{filter:n})}function Yu(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function pa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ga(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function nn(n,e){const t={fields:{}};return e.forEach(((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)})),{mapValue:t}}function ya(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n){return new Mu(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new me(G.fromBase64String(e))}catch(t){throw new T(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new me(G.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ln(e,me._jsonSchema))return me.fromBase64String(e.bytes)}}me._jsonSchemaVersion="firestore/bytes/1.0",me._jsonSchema={type:B("string",me._jsonSchemaVersion),bytes:B("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new T(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Ju(){return new Xr(Te)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return b(this._lat,e._lat)||b(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ve._jsonSchemaVersion}}static fromJSON(e){if(ln(e,Ve._jsonSchema))return new Ve(e.latitude,e.longitude)}}Ve._jsonSchemaVersion="firestore/geoPoint/1.0",Ve._jsonSchema={type:B("string",Ve._jsonSchemaVersion),latitude:B("number"),longitude:B("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(X.UNAUTHENTICATED)))}shutdown(){}}class Zu{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ec{constructor(e){this.ve=e,this.currentUser=X.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){I(this.xe===void 0,42304);let r=this.De;const s=u=>this.De!==r?(r=this.De,t(u)):Promise.resolve();let i=new Le;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new Le,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},o=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),a())};this.ve.onInit((u=>o(u))),setTimeout((()=>{if(!this.auth){const u=this.ve.getImmediate({optional:!0});u?o(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Le)}}),0),a()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.De!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(I(typeof r.accessToken=="string",31837,{Fe:r}),new Ta(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return I(e===null||typeof e=="string",2055,{Oe:e}),new X(e)}}class tc{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r,this.type="FirstParty",this.user=X.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class nc{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r}getToken(){return Promise.resolve(new tc(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable((()=>t(X.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rc{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,wo(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){I(this.xe===void 0,3512);const r=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.qe;return this.qe=i.token,w("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.$e)return Promise.resolve(new Zs(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(I(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Zs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function wa(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */class sc{Ke(e){}shutdown(){}}/**
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
 */const ei="ConnectivityMonitor";class ti{constructor(){this.Qe=()=>this.We(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.Qe),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.Qe),window.addEventListener("offline",this.Ge)}We(){w(ei,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){w(ei,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let An=null;function br(){return An===null?An=(function(){return 268435456+Math.round(2147483648*Math.random())})():An++,"0x"+An.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="RestConnection",ic={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ac{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${r}/databases/${s}`,this.et=this.databaseId.database===jt?`project_id=${r}`:`project_id=${r}&database_id=${s}`}tt(e,t,r,s,i){const a=br(),o=this.nt(e,t.toUriEncodedString());w(gr,`Sending RPC '${e}' ${a}:`,o,r);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:c}=new URL(o),l=Fr(c);return this.it(e,o,u,r,l).then((h=>(w(gr,`Received RPC '${e}' ${a}: `,h),h)),(h=>{throw ge(gr,`RPC '${e}' ${a} failed with error: `,h,"url: ",o,"request:",r),h}))}st(e,t,r,s,i,a){return this.tt(e,t,r,s,i)}rt(e,t,r){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vt})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const r=ic[e];let s=`${this.Ze}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="WebChannelConnection",Ot=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ft extends ac{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!ft.gt){const e=bo();Ot(e,No.STAT_EVENT,(t=>{t.stat===bs.PROXY?w(J,"STAT_EVENT: detected buffering proxy"):t.stat===bs.NOPROXY&&w(J,"STAT_EVENT: detected no buffering proxy")})),ft.gt=!0}}it(e,t,r,s,i){const a=br();return new Promise(((o,u)=>{const c=new Do;c.setWithCredentials(!0),c.listenOnce(ko.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case mr.NO_ERROR:const h=c.getResponseJson();w(J,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(h)),o(h);break;case mr.TIMEOUT:w(J,`RPC '${e}' ${a} timed out`),u(new T(_.DEADLINE_EXCEEDED,"Request time out"));break;case mr.HTTP_ERROR:const f=c.getStatus();if(w(J,`RPC '${e}' ${a} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const C=(function(k){const U=k.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(U)>=0?U:_.UNKNOWN})(E.status);u(new T(C,E.message))}else u(new T(_.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new T(_.UNAVAILABLE,"Connection failed."));break;default:v(9055,{yt:e,streamId:a,wt:c.getLastErrorCode(),bt:c.getLastError()})}}finally{w(J,`RPC '${e}' ${a} completed.`)}}));const l=JSON.stringify(s);w(J,`RPC '${e}' ${a} sending request:`,s),c.send(t,"POST",l,r,15)}))}St(e,t,r){const s=br(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(o.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(o.useFetchStreams=!0),this.rt(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;const c=i.join("");w(J,`Creating RPC '${e}' stream ${s}: ${c}`,o);const l=a.createWebChannel(c,o);this.vt(l);let h=!1,f=!1;const g=new oc({_t:E=>{f?w(J,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(h||(w(J,`Opening RPC '${e}' stream ${s} transport.`),l.open(),h=!0),w(J,`RPC '${e}' stream ${s} sending:`,E),l.send(E))},ot:()=>l.close()});return Ot(l,En.EventType.OPEN,(()=>{f||(w(J,`RPC '${e}' stream ${s} transport opened.`),g.Rt())})),Ot(l,En.EventType.CLOSE,(()=>{f||(f=!0,w(J,`RPC '${e}' stream ${s} transport closed`),g.At(),this.Dt(l))})),Ot(l,En.EventType.ERROR,(E=>{f||(f=!0,ge(J,`RPC '${e}' stream ${s} transport errored. Name:`,E.name,"Message:",E.message),g.At(new T(_.UNAVAILABLE,"The operation could not be completed")))})),Ot(l,En.EventType.MESSAGE,(E=>{var C;if(!f){const S=E.data[0];I(!!S,16349);const k=S,U=(k==null?void 0:k.error)||((C=k[0])==null?void 0:C.error);if(U){w(J,`RPC '${e}' stream ${s} received error:`,U);const ue=U.status;let kt=(function(fr){const Cs=F[fr];if(Cs!==void 0)return sa(Cs)})(ue),Ke=U.message;ue==="NOT_FOUND"&&Ke.includes("database")&&Ke.includes("does not exist")&&Ke.includes(this.databaseId.database)&&ge(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),kt===void 0&&(kt=_.INTERNAL,Ke="Unknown error status: "+ue+" with message "+U.message),f=!0,g.At(new T(kt,Ke)),l.close()}else w(J,`RPC '${e}' stream ${s} received:`,S),g.Vt(S)}})),ft.ft(),setTimeout((()=>{g.It()}),0),g}terminate(){this.dt.forEach((e=>e.close())),this.dt=[]}vt(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter((t=>t===e))}rt(e,t,r){super.rt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Lo()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n){return new ft(n)}ft.gt=!1;class Ia{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=r,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),r=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-r);s>0&&w("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,(()=>(this.Lt=Date.now(),e()))),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="PersistentStream";class Aa{constructor(e,t,r,s,i,a,o,u){this.xt=e,this.$t=r,this.Kt=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=u,this.state=0,this.Qt=0,this.Wt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new Ia(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Wt===null&&(this.Wt=this.xt.enqueueAfterDelay(this.$t,6e4,(()=>this.en())))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Wt&&(this.Wt.cancel(),this.Wt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Qt++,e!==4?this.jt.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(Ne(t.toString()),Ne("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Qt),t=this.Qt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.Qt===t&&this.an(r,s)}),(r=>{e((()=>{const s=new T(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.un(s)}))}))}an(e,t){const r=this._n(this.Qt);this.stream=this.cn(e,t),this.stream.ut((()=>{r((()=>this.listener.ut()))})),this.stream.lt((()=>{r((()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,(()=>(this.Jt()&&(this.state=3),Promise.resolve()))),this.listener.lt())))})),this.stream.ht((s=>{r((()=>this.un(s)))})),this.stream.onMessage((s=>{r((()=>++this.zt==1?this.En(s):this.onNext(s)))}))}Yt(){this.state=5,this.jt.Ut((async()=>{this.state=0,this.start()}))}un(e){return w(ni,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget((()=>this.Qt===e?t():(w(ni,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cc extends Aa{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}cn(e,t){return this.connection.St("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=Fu(this.serializer,e),r=(function(i){if(!("targetChange"in i))return R.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?R.min():a.readTime?ve(a.readTime):R.min()})(e);return this.listener.hn(t,r)}Tn(e){const t={};t.database=xr(this.serializer),t.addTarget=(function(i,a){let o;const u=a.target;if(o=He(u)?{pipelineQuery:ju(i,u)}:ta(u)?{documents:$u(i,u)}:{query:zu(i,u).be},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=la(i,a.resumeToken);const c=Sr(i,a.expectedCount);c!==null&&(o.expectedCount=c)}else if(a.snapshotVersion.compareTo(R.min())>0){o.readTime=Fn(i,a.snapshotVersion.toTimestamp());const c=Sr(i,a.expectedCount);c!==null&&(o.expectedCount=c)}return o})(this.serializer,e);const r=Qu(this.serializer,e);r&&(t.labels=r),this.tn(t)}Pn(e){const t={};t.database=xr(this.serializer),t.removeTarget=e,this.tn(t)}}class lc extends Aa{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.St("Write",e,t)}En(e){return I(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,I(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){I(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=Bu(e.writeResults,e.commitTime),r=ve(e.commitTime);return this.listener.Vn(r,t)}dn(){const e={};e.database=xr(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>qu(this.serializer,r)))};this.tn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{}class dc extends hc{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,r,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.tt(e,Cr(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(_.UNKNOWN,i.toString())}))}st(e,t,r,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,o])=>this.connection.st(e,Cr(t,r),s,a,o,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new T(_.UNKNOWN,a.toString())}))}terminate(){this.fn=!0,this.connection.terminate()}}function fc(n,e,t,r){return new dc(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="ComponentProvider",ri=new Map;function _c(n,e,t,r,s){return new jo(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,wa(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
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
 */const si={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},va=41943040;class ne{static withCacheSize(e){return new ne(e,ne.DEFAULT_COLLECTION_PERCENTILE,ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}ne.DEFAULT_COLLECTION_PERCENTILE=10,ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ne.DEFAULT=new ne(va,ne.DEFAULT_COLLECTION_PERCENTILE,ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ne.DISABLED=new ne(-1,0,0);/**
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
 */class er{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.pn(r),this.gn=r=>t.writeSequenceNumber(r))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}er.yn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(n){if(n.code!==_.FAILED_PRECONDITION||n.message!==pc)throw n;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):p.reject(t)}static resolve(e){return new p(((t,r)=>{t(e)}))}static reject(e){return new p(((t,r)=>{r(e)}))}static waitFor(e){return new p(((t,r)=>{let s=0,i=0,a=!1;e.forEach((o=>{++s,o.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=p.resolve(!1);for(const r of e)t=t.next((s=>s?p.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new p(((r,s)=>{const i=e.length,a=new Array(i);let o=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next((l=>{a[c]=l,++o,o===i&&r(a)}),(l=>s(l)))}}))}static doWhile(e,t){return new p(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function yc(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function St(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="LruGarbageCollector",Va=1048576;function ai([n,e],[t,r]){const s=b(n,t);return s===0?b(e,r):s}class Ec{constructor(e){this.Jn=e,this.buffer=new z(ai),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ai(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Tc{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){w(ii,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){St(t)?w(ii,"Ignoring IndexedDB error during garbage collection: ",t):await Pt(t)}await this.tr(3e5)}))}}class wc{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return p.resolve(er.yn);const r=new Ec(t);return this.nr.forEachTarget(e,(s=>r.Xn(s.sequenceNumber))).next((()=>this.nr.ir(e,(s=>r.Xn(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.nr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(w("LruGarbageCollector","Garbage collection skipped; disabled"),p.resolve(si)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),si):this.sr(e,t)))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let r,s,i,a,o,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,a=Date.now(),this.nthSequenceNumber(e,s)))).next((h=>(r=h,o=Date.now(),this.removeTargets(e,r,t)))).next((h=>(i=h,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((h=>(c=Date.now(),ut()<=Se.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-l}ms
	Determined least recently used ${s} in `+(o-a)+`ms
	Removed ${i} targets in `+(u-o)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),p.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h}))))}}function Ic(n,e){return new wc(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="firestore.googleapis.com",oi=!0;class ui{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new T(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ra,this.ssl=oi}else this.host=e.host,this.ssl=e.ssl??oi;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=va;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Va)throw new T(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Go("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wa(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new T(_.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),a=Object.keys(s);if(i.length!==a.length)return!1;for(const o of i)if(r[o]!==s[o])return!1;return!0})(this._customHeaders,e._customHeaders)}}let tr=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ui({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new T(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ui(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Xu;switch(r.type){case"firstParty":return new nc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new T(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=ri.get(t);r&&(w(mc,"Removing Datastore"),ri.delete(t),r.terminate())})(this),Promise.resolve()}};function Ac(n,e,t,r={}){var c;n=yt(n,tr);const s=Fr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},o=`${e}:${t}`;s&&Ci(`https://${o}`),i.host!==Ra&&i.host!==o&&ge("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:o,ssl:s,emulatorOptions:r};if(!Si(u,a)&&(n._setSettings(u),r.mockUserToken)){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=X.MOCK_USER;else{l=So(r.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new T(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new X(f)}n._authCredentials=new Zu(new Ta(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new it(this.firestore,e,this._query)}}class ${constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $(this.firestore,e,this._key)}toJSON(){return{type:$._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ln(t,$._jsonSchema))return new $(e,r||null,new A(D.fromString(t.referencePath)))}}$._jsonSchemaVersion="firestore/documentReference/1.0",$._jsonSchema={type:B("string",$._jsonSchemaVersion),referencePath:B("string")};class Oe extends it{constructor(e,t,r){super(e,t,na(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $(this.firestore,null,new A(e))}withConverter(e){return new Oe(this.firestore,e,this._path)}}function Qd(n,e,...t){if(n=pt(n),Ni("collection","path",e),n instanceof tr){const r=D.fromString(e,...t);return ks(r),new Oe(n,null,r)}{if(!(n instanceof $||n instanceof Oe))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(D.fromString(e,...t));return ks(r),new Oe(n.firestore,null,r)}}function jd(n,e,...t){if(n=pt(n),arguments.length===1&&(e=$r.newId()),Ni("doc","path",e),n instanceof tr){const r=D.fromString(e,...t);return Ds(r),new $(n,null,new A(r))}{if(!(n instanceof $||n instanceof Oe))throw new T(_.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(D.fromString(e,...t));return Ds(r),new $(n.firestore,n instanceof Oe?n.converter:null,new A(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class se{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:se._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ln(e,se._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new se(e.vectorValues);throw new T(_.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}se._jsonSchemaVersion="firestore/vectorValue/1.0",se._jsonSchema={type:B("string",se._jsonSchemaVersion),vectorValues:B("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=/^__.*__$/;class Vc{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new rt(e,this.data,this.fieldMask,t,this.fieldTransforms):new dn(e,this.data,t,this.fieldTransforms)}}function Pa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v(40011,{dataSource:n})}}class Zr{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Zr({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Bn(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Pa(this.dataSource)&&vc.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Rc{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Zn(e)}createContext(e,t,r,s=!1){return new Zr({dataSource:e,methodName:t,targetDoc:r,path:de.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sa(n){const e=n._freezeSettings(),t=Zn(n._databaseId);return new Rc(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Pc(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);ba("Data must be an object, but it was:",a,r);const o=Ca(r,a);let u,c;if(i.merge)u=new pe(a.fieldMask),c=a.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=_n(e,h,t);if(!a.contains(f))throw new T(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);bc(l,f)||l.push(f)}u=new pe(l),c=a.fieldTransforms.filter((h=>u.covers(h.field)))}else u=null,c=a.fieldTransforms;return new Vc(new le(o),u,c)}function Sc(n,e,t,r=!1){return At(t,n.createContext(r?4:3,e))}function At(n,e,t){if(xa(n=pt(n)))return ba("Unsupported field value:",e,n),Ca(n,e);if(n instanceof Ea)return(function(s,i){if(!Pa(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,i){const a=[];let o=0;for(const u of s){let c=At(u,i.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),a.push(c),o++}return{arrayValue:{values:a}}})(n,e)}return(function(s,i,a){if((s=pt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Qr(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=L.fromDate(s);return{timestampValue:Fn(i.serializer,o)}}if(s instanceof L){const o=new L(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Fn(i.serializer,o)}}if(s instanceof Ve)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof me)return{bytesValue:la(i.serializer,s._byteString)};if(s instanceof $){const o=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(o))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Jr(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof se)return(function(u,c){const l=u instanceof se?u.toArray():u;return{mapValue:{fields:{[Ui]:{stringValue:Fi},[Ht]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return Hn(c.serializer,f)}))}}}}}})(s,i);if(ga(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${jn(s)}`)})(n,e)}function Ca(n,e){const t={};return bi(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nt(n,((r,s)=>{const i=At(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function xa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof L||n instanceof Ve||n instanceof me||n instanceof $||n instanceof Ea||n instanceof se||ga(n))}function ba(n,e,t){if(!xa(t)||!cn(t)){const r=jn(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function _n(n,e,t){if((e=pt(e))instanceof Xr)return e._internalPath;if(typeof e=="string")return xc(n,e);throw Bn("Field path arguments must be of type string or ",n,!1,void 0,t)}const Cc=new RegExp("[~\\*/\\[\\]]");function xc(n,e,t){if(e.search(Cc)>=0)throw Bn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xr(...e.split("."))._internalPath}catch{throw Bn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bn(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new T(_.INVALID_ARGUMENT,o+n+u)}function bc(n,e){return n.some((t=>t.isEqual(e)))}function Na(n){return typeof n._readUserData=="function"}/**
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
 */class ee{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=le.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let o;i.nestedOptions&&cn(a)?o={mapValue:{fields:new ee(i.nestedOptions).getOptionsProto(t,a)}}:a&&(o=At(a,t)??void 0),o&&r.set(de.fromServerFormat(i.serverName),o)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(zo(r,((a,o)=>[de.fromServerFormat(o),a!==void 0?At(a,e):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function Nc(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!cn(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}function Dc(n){return new se(n)}/**
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
 */function y(n){let e;return n instanceof at?n:(e=cn(n)?Uc(n):n instanceof Array?Fc(n):Da(n,void 0),e)}function yr(n){if(n instanceof at)return n;if(n instanceof se)return rn(n);if(Array.isArray(n))return rn(Dc(n));throw new Error("Unsupported value: "+typeof n)}function es(n){return Ho(n)?xn(n):y(n)}class at{constructor(){this._protoValueType="ProtoValue"}add(e){return new m("add",[this,y(e)],"add")}asBoolean(){if(this instanceof ze)return this;if(this instanceof xt)return new La(this);if(this instanceof Ct)return new Mc(this);if(this instanceof m)return new ka(this);throw new T("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new m("subtract",[this,y(e)],"subtract")}multiply(e){return new m("multiply",[this,y(e)],"multiply")}divide(e){return new m("divide",[this,y(e)],"divide")}mod(e){return new m("mod",[this,y(e)],"mod")}equal(e){return new m("equal",[this,y(e)],"equal").asBoolean()}notEqual(e){return new m("not_equal",[this,y(e)],"notEqual").asBoolean()}lessThan(e){return new m("less_than",[this,y(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new m("less_than_or_equal",[this,y(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new m("greater_than",[this,y(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new m("greater_than_or_equal",[this,y(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map((s=>y(s)));return new m("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new m("array_contains",[this,y(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Ut(e.map(y),"arrayContainsAll"):e;return new m("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Ut(e.map(y),"arrayContainsAny"):e;return new m("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new m("array_reverse",[this])}arrayLength(){return new m("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Ut(e.map(y),"equalAny"):e;return new m("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Ut(e.map(y),"notEqualAny"):e;return new m("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new m("exists",[this],"exists").asBoolean()}charLength(){return new m("char_length",[this],"charLength")}like(e){return new m("like",[this,y(e)],"like").asBoolean()}regexContains(e){return new m("regex_contains",[this,y(e)],"regexContains").asBoolean()}regexFind(e){return new m("regex_find",[this,y(e)],"regexFind")}regexFindAll(e){return new m("regex_find_all",[this,y(e)],"regexFindAll")}regexMatch(e){return new m("regex_match",[this,y(e)],"regexMatch").asBoolean()}stringContains(e){return new m("string_contains",[this,y(e)],"stringContains").asBoolean()}startsWith(e){return new m("starts_with",[this,y(e)],"startsWith").asBoolean()}endsWith(e){return new m("ends_with",[this,y(e)],"endsWith").asBoolean()}toLower(){return new m("to_lower",[this],"toLower")}toUpper(){return new m("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(y(e)),new m("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(y(e)),new m("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(y(e)),new m("rtrim",t,"rtrim")}type(){return new m("type",[this])}isType(e){return new m("is_type",[this,rn(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(y);return new m("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new m("string_index_of",[this,y(e)],"stringIndexOf")}stringRepeat(e){return new m("string_repeat",[this,y(e)],"stringRepeat")}stringReplaceAll(e,t){return new m("string_replace_all",[this,y(e),y(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new m("string_replace_one",[this,y(e),y(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(y);return new m("concat",[this,...r],"concat")}reverse(){return new m("reverse",[this],"reverse")}arrayFilter(e,t){return new m("array_filter",[this,y(e),t],"arrayFilter")}arrayTransform(e,t){return new m("array_transform",[this,y(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new m("array_transform",[this,y(e),y(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,y(e)];return t!==void 0&&r.push(y(t)),new m("array_slice",r,"arraySlice")}arrayFirst(){return new m("array_first",[this],"arrayFirst")}arrayFirstN(e){return new m("array_first_n",[this,y(e)],"arrayFirstN")}arrayLast(){return new m("array_last",[this],"arrayLast")}arrayLastN(e){return new m("array_last_n",[this,y(e)],"arrayLastN")}arrayMaximum(){return new m("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new m("maximum_n",[this,y(e)],"arrayMaximumN")}arrayMinimum(){return new m("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new m("minimum_n",[this,y(e)],"arrayMinimumN")}arrayIndexOf(e){return new m("array_index_of",[this,y(e),y("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new m("array_index_of",[this,y(e),y("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new m("array_index_of_all",[this,y(e)],"arrayIndexOfAll")}byteLength(){return new m("byte_length",[this],"byteLength")}ceil(){return new m("ceil",[this])}floor(){return new m("floor",[this])}abs(){return new m("abs",[this])}exp(){return new m("exp",[this])}mapGet(e){return new m("map_get",[this,rn(e)],"mapGet")}mapSet(e,t,...r){const s=[this,y(e),y(t),...r.map(y)];return new m("map_set",s,"mapSet")}mapKeys(){return new m("map_keys",[this],"mapKeys")}mapValues(){return new m("map_values",[this],"mapValues")}mapEntries(){return new m("map_entries",[this],"mapEntries")}getField(e){return new m("get_field",[this,y(e)],"get_field")}count(){return ce._create("count",[this],"count")}sum(){return ce._create("sum",[this],"sum")}average(){return ce._create("average",[this],"average")}minimum(){return ce._create("minimum",[this],"minimum")}maximum(){return ce._create("maximum",[this],"maximum")}first(){return ce._create("first",[this],"first")}last(){return ce._create("last",[this],"last")}arrayAgg(){return ce._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return ce._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return ce._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new m("maximum",[this,...r.map(y)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new m("minimum",[this,...r.map(y)],"minimum")}vectorLength(){return new m("vector_length",[this],"vectorLength")}cosineDistance(e){return new m("cosine_distance",[this,yr(e)],"cosineDistance")}dotProduct(e){return new m("dot_product",[this,yr(e)],"dotProduct")}euclideanDistance(e){return new m("euclidean_distance",[this,yr(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new m("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new m("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new m("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new m("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new m("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new m("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new m("timestamp_add",[this,y(e),y(t)],"timestampAdd")}timestampSubtract(e,t){return new m("timestamp_subtract",[this,y(e),y(t)],"timestampSubtract")}timestampDiff(e,t){return new m("timestamp_diff",[this,es(e),y(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,y(e)];return t&&r.push(y(t)),new m("timestamp_extract",r,"timestampExtract")}documentId(){return new m("document_id",[this],"documentId")}parent(){return new m("parent",[this],"parent")}substring(e,t){const r=y(e);return new m("substring",t===void 0?[this,r]:[this,r,y(t)],"substring")}arrayGet(e){return new m("array_get",[this,y(e)],"arrayGet")}isError(){return new m("is_error",[this],"isError").asBoolean()}ifError(e){const t=new m("if_error",[this,y(e)],"ifError");return e instanceof ze?t.asBoolean():t}isAbsent(){return new m("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new m("map_remove",[this,y(e)],"mapRemove")}mapMerge(e,...t){const r=y(e),s=t.map(y);return new m("map_merge",[this,r,...s],"mapMerge")}pow(e){return new m("pow",[this,y(e)])}trunc(e){return e===void 0?new m("trunc",[this]):new m("trunc",[this,y(e)],"trunc")}round(e){return e===void 0?new m("round",[this]):new m("round",[this,y(e)],"round")}collectionId(){return new m("collection_id",[this])}length(){return new m("length",[this])}ln(){return new m("ln",[this])}sqrt(){return new m("sqrt",[this])}stringReverse(){return new m("string_reverse",[this])}ifAbsent(e){return new m("if_absent",[this,y(e)],"ifAbsent")}ifNull(e){return new m("if_null",[this,y(e)],"ifNull")}coalesce(e,...t){return new m("coalesce",[this,y(e),...t.map(y)],"coalesce")}join(e){return new m("join",[this,y(e)],"join")}log10(){return new m("log10",[this])}arraySum(){return new m("sum",[this])}split(e){return new m("split",[this,y(e)])}timestampTruncate(e,t){const r=[this,y(e)];return t&&r.push(y(t)),new m("timestamp_trunc",r)}ascending(){return qc(this)}descending(){return Bc(this)}as(e){return new Lc(this,e,"as")}}class ce{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new ce(e,t);return s._methodName=r,s}as(e){return new kc(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class kc{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class Lc{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Ut extends at{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map((t=>t._toProto(e)))}}}_readUserData(e){this.ur.forEach((t=>t._readUserData(e)))}}class Ct extends at{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new m("geo_distance",[this,y(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function xn(n){return Oc(n,"field")}function Oc(n,e){return new Ct(typeof n=="string"?Te===n?Ju()._internalPath:_n("field",n):n._internalPath,e)}class xt extends at{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new xt(e,void 0);return t._protoValue=e,t}_toProto(e){return I(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,Nc(this._protoValue)||(this._protoValue=At(this.value,e))}}function rn(n,e){return Da(n,"constant")}function Da(n,e){const t=new xt(n,e);return typeof n=="boolean"?new La(t):t}class m extends at{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new ee({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((r=>r._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class ze extends at{get _methodName(){return this._expr._methodName}countIf(){return ce._create("count_if",[this],"countIf")}not(){return new m("not",[this],"not").asBoolean()}conditional(e,t){return new m("conditional",[this,e,t],"conditional")}ifError(e){const t=y(e),r=new m("if_error",[this,t],"ifError");return t instanceof ze?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class ka extends ze{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class La extends ze{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Mc extends ze{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Uc(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(rn(r)),t.push(y(s))}return new m("map",t,"map")}function Fc(n){return(function(t,r){return new m("array",t.map((s=>y(s))),r)})(n,"array")}function qc(n){return new Oa(es(n),"ascending","ascending")}function Bc(n){return new Oa(es(n),"descending","descending")}class Oa{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:ya(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class fe{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Ma extends fe{get _name(){return"add_fields"}get _optionsUtil(){return new ee({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[nn(e,this.fields)]}}_readUserData(e){super._readUserData(e),Ge(this.fields,e)}}class Ua extends fe{get _name(){return"aggregate"}get _optionsUtil(){return new ee({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[nn(e,this.accumulators),nn(e,this.groups)]}}_readUserData(e){super._readUserData(e),Ge(this.groups,e),Ge(this.accumulators,e)}}class Fa extends fe{get _name(){return"distinct"}get _optionsUtil(){return new ee({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[nn(e,this.groups)]}}_readUserData(e){super._readUserData(e),Ge(this.groups,e)}}class nr extends fe{get _name(){return"collection"}get _optionsUtil(){return new ee({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class rr extends fe{get _name(){return"collection_group"}get _optionsUtil(){return new ee({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class ts extends fe{get _name(){return"database"}get _optionsUtil(){return new ee({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class ns extends fe{get _name(){return"documents"}get _optionsUtil(){return new ee({})}constructor(e,t){if(super(t),!e||e.length===0)throw new T(_.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(r);if(s.size!==r.length)throw new T(_.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=r,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class sr extends fe{get _name(){return"where"}get _optionsUtil(){return new ee({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Ge(this.condition,e)}}class tt extends fe{get _name(){return"limit"}get _optionsUtil(){return new ee({})}constructor(e,t){I(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Qr(e,this.limit)]}}}class ci extends fe{get _name(){return"offset"}get _optionsUtil(){return new ee({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Qr(e,this.offset)]}}}class $c extends fe{get _name(){return"select"}get _optionsUtil(){return new ee({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[nn(e,this.selections)]}}_readUserData(e){super._readUserData(e),Ge(this.selections,e)}}class Ce extends fe{get _name(){return"sort"}get _optionsUtil(){return new ee({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),Ge(this.orderings,e)}}class rs extends fe{get _name(){return"replace_with"}get _optionsUtil(){return new ee({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),ya(rs.Pr)]}}_readUserData(e){super._readUserData(e),Ge(this.map,e)}}rs.Pr="full_replace";function Ge(n,e){return Na(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Ar(e,t){const r=this.userDataReader.createContext(3,e);return Na(t)?t._readUserData(r):Array.isArray(t)?t.forEach((s=>s._readUserData(r))):t.forEach((s=>s._readUserData(r))),t}where(e){const t=this.stages.map((r=>r));return this.Ar("where",e),t.push(new sr(e,{})),new Gt(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((r=>r));return t.push(new tt(e,{})),new Gt(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map((s=>s));return"orderings"in e?r.push(new Ce(this.Ar("sort",e.orderings),{})):r.push(new Ce(this.Ar("sort",[e,...t]),{})),new Gt(this._db,this.userDataReader,this._userDataWriter,r)}Vr(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class te{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return ir(this)}getPipelineCollectionGroup(){return ss(this)}getPipelineCollectionId(){return zc(this)}getPipelineDocuments(){return Nr(this)}getPipelineFlavor(){return(function(t){let r="exact";return t.stages.forEach(((s,i)=>{s._name!==Fa.name&&s._name!==Ua.name||(r="keyless"),s._name===$c.name&&r==="exact"&&(r="augmented"),s._name===Ma.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")})),r})(this)}getPipelineSourceType(){return Me(this)}}function Me(n){const e=n.stages[0];return e instanceof nr||e instanceof rr||e instanceof ts||e instanceof ns?e._name:"unknown"}function ir(n){if(Me(n)==="collection")return n.stages[0].Er}function ss(n){if(Me(n)==="collection_group")return n.stages[0].collectionId}function zc(n){switch(Me(n)){case"collection":return D.fromString(ir(n)).lastSegment();case"collection_group":return ss(n);default:return}}function Nr(n){if(Me(n)==="documents")return n.stages[0].hr}class d{constructor(e,t){this.type=e,this.value=t}static dr(){return new d("ERROR",void 0)}static mr(){return new d("UNSET",void 0)}static pr(){return new d("NULL",Tt)}static newValue(e){return he(e)?new d("NULL",Tt):(function(r){return!!r&&"booleanValue"in r})(e)?new d("BOOLEAN",e):we(e)?new d("INT",e):Ye(e)?new d("DOUBLE",e):(function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue})(e)?new d("TIMESTAMP",e):(function(r){return!!r&&"stringValue"in r})(e)?new d("STRING",e):(function(r){return!!r&&"bytesValue"in r})(e)?new d("BYTES",e):e.referenceValue?new d("REFERENCE",e):e.geoPointValue?new d("GEO_POINT",e):It(e)?new d("ARRAY",e):Dn(e)?new d("VECTOR",e):Xe(e)?new d("MAP",e):new d("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function Qt(n){if(!n.gr())return n.value}function qa(n){return n instanceof ze?n._expr:n}function V(n){if((n=qa(n))instanceof Ct)return new Gc(n);if(n instanceof xt)return new Qc(n);if(n instanceof Ut)return new jc(n);if(n instanceof m){if(n.name==="add")return new Hc(n);if(n.name==="subtract")return new Yc(n);if(n.name==="multiply")return new Jc(n);if(n.name==="divide")return new Xc(n);if(n.name==="mod")return new Zc(n);if(n.name==="and")return new el(n);if(n.name==="equal")return new dl(n);if(n.name==="not_equal")return new fl(n);if(n.name==="less_than")return new ml(n);if(n.name==="less_than_or_equal")return new _l(n);if(n.name==="greater_than")return new pl(n);if(n.name==="greater_than_or_equal")return new gl(n);if(n.name==="array_concat")return new yl(n);if(n.name==="array_reverse")return new El(n);if(n.name==="array_contains")return new Tl(n);if(n.name==="array_contains_all")return new wl(n);if(n.name==="array_contains_any")return new Il(n);if(n.name==="array_length")return new Al(n);if(n.name==="array_element")return new vl(n);if(n.name==="equal_any")return new Ba(n);if(n.name==="not_equal_any")return new nl(n);if(n.name==="is_nan")return new rl(n);if(n.name==="is_not_nan")return new sl(n);if(n.name==="is_null")return new il(n);if(n.name==="is_not_null")return new al(n);if(n.name==="is_error")return new ol(n);if(n.name==="exists")return new ul(n);if(n.name==="not")return new ar(n);if(n.name==="or")return new tl(n);if(n.name==="xor")return new is(n);if(n.name==="conditional")return new cl(n);if(n.name==="maximum")return new ll(n);if(n.name==="minimum")return new hl(n);if(n.name==="reverse")return new Vl(n);if(n.name==="replace_first")return new Rl(n);if(n.name==="replace_all")return new Pl(n);if(n.name==="char_length")return new Sl(n);if(n.name==="byte_length")return new Cl(n);if(n.name==="like")return new xl(n);if(n.name==="regex_contains")return new bl(n);if(n.name==="regex_match")return new Nl(n);if(n.name==="string_contains")return new Dl(n);if(n.name==="starts_with")return new kl(n);if(n.name==="ends_with")return new Ll(n);if(n.name==="to_lower")return new Ol(n);if(n.name==="to_upper")return new Ml(n);if(n.name==="trim")return new Ul(n);if(n.name==="string_concat")return new Fl(n);if(n.name==="map_get")return new ql(n);if(n.name==="cosine_distance")return new Bl(n);if(n.name==="dot_product")return new $l(n);if(n.name==="euclidean_distance")return new zl(n);if(n.name==="vector_length")return new Gl(n);if(n.name==="unix_micros_to_timestamp")return new Hl(n);if(n.name==="timestamp_to_unix_micros")return new Xl(n);if(n.name==="unix_millis_to_timestamp")return new Yl(n);if(n.name==="timestamp_to_unix_millis")return new Zl(n);if(n.name==="unix_seconds_to_timestamp")return new Jl(n);if(n.name==="timestamp_to_unix_seconds")return new eh(n);if(n.name==="timestamp_add")return new th(n);if(n.name==="timestamp_subtract")return new nh(n)}throw new Error(`Unknown Expr : ${n}`)}class Gc{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Te)return d.newValue({referenceValue:qn(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return d.newValue({timestampValue:Cn(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return d.newValue({timestampValue:Cn(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Wn(r)?d.newValue((function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Cn(i.serializer,R.fromTimestamp(Et(a)))};if(i.serverTimestampBehavior==="previous"){const o=hn(a);if(o)return o}return{nullValue:"NULL_VALUE"}})(e,r)):d.newValue(r):d.mr()}}class Qc{constructor(e){this.expr=e}evaluate(e,t){return d.newValue(this.expr._getValue())}}class jc{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.ur.map((s=>V(s).evaluate(e,t)));return r.some((s=>s.gr()))?d.dr():d.newValue({arrayValue:{values:r.map((s=>s.value))}})}}function Y(n){return Ye(n)?Number(n.doubleValue):Number(n.integerValue)}function Re(n){return BigInt(n.integerValue)}const Wc=BigInt("0x7fffffffffffffff"),Kc=-BigInt("0x8000000000000000");class pn{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length>=2,24778);const r=V(this.expr.params[0]).evaluate(e,t),s=V(this.expr.params[1]).evaluate(e,t);let i=this.wr(r,s);for(const a of this.expr.params.slice(2)){const o=V(a).evaluate(e,t);i=this.wr(i,o)}return i}wr(e,t){if(e.gr()||t.gr())return d.dr();if(e.yr()||t.yr())return d.pr();const r=e.value,s=t.value;if(!Ye(r)&&!we(r)||!Ye(s)&&!we(s))return d.dr();if(Ye(r)||Ye(s)){const i=this.br(r,s);return i?d.newValue(i):d.dr()}if(we(r)&&we(s)){const i=this.Sr(r,s);return i===void 0?d.dr():typeof i=="number"?d.newValue({doubleValue:i}):i<Kc||i>Wc?d.dr():d.newValue({integerValue:`${i}`})}return d.dr()}}function De(n,e){return Q(n)!==Q(e)?"TYPE_MISMATCH":oe(n)||oe(e)?"NOT_EQ":he(n)&&he(e)?"EQ":he(n)||he(e)?"NULL":It(n)&&It(e)?(function(r,s){var a,o,u;if(((a=r.values)==null?void 0:a.length)!==((o=s.values)==null?void 0:o.length))return"NOT_EQ";let i=!1;for(let c=0;c<(((u=r.values)==null?void 0:u.length)??0);c++){const l=r.values[c],h=s.values[c];switch(De(l,h)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:v(44609,{vr:l,Dr:h})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):Dn(n)&&Dn(e)||Xe(n)&&Xe(e)?(function(r,s){const i=r.fields||{},a=s.fields||{};if(Nn(i)!==Nn(a))return"NOT_EQ";let o=!1;for(const u in i)if(i.hasOwnProperty(u)){if(a[u]===void 0)return"NOT_EQ";switch(De(i[u],a[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":o=!0}}return o?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(r,s){return _e(r,s,{o:!1,t:!0,i:!0})})(n,e)?"EQ":"NOT_EQ"}class Hc extends pn{Sr(e,t){return Re(e)+Re(t)}br(e,t){return{doubleValue:Y(e)+Y(t)}}}class Yc extends pn{constructor(e){super(e),this.expr=e}Sr(e,t){return Re(e)-Re(t)}br(e,t){return{doubleValue:Y(e)-Y(t)}}}class Jc extends pn{constructor(e){super(e),this.expr=e}Sr(e,t){return Re(e)*Re(t)}br(e,t){return{doubleValue:Y(e)*Y(t)}}}class Xc extends pn{constructor(e){super(e),this.expr=e}Sr(e,t){const r=Re(t);if(r!==BigInt(0))return Re(e)/r}br(e,t){const r=Y(t);return r===0?{doubleValue:Kt(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Y(e)/r}}}class Zc extends pn{constructor(e){super(e),this.expr=e}Sr(e,t){const r=Re(t);if(r!==BigInt(0))return Re(e)%r}br(e,t){const r=Y(t);if(r!==0)return{doubleValue:Y(e)%r}}}class el{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const o=V(a).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!((i=o.value)!=null&&i.booleanValue))return d.newValue(K);break;case"NULL":s=!0;break;default:r=!0}}return r?d.dr():s?d.pr():d.newValue(ie)}}class ar{constructor(e){this.expr=e}evaluate(e,t){var s;I(this.expr.params.length===1,9634);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return d.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return d.pr();default:return d.dr()}}}class tl{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const o=V(a).evaluate(e,t);switch(o.type){case"BOOLEAN":if((i=o.value)!=null&&i.booleanValue)return d.newValue(ie);break;case"NULL":s=!0;break;default:r=!0}}return r?d.dr():s?d.pr():d.newValue(K)}}class is{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const o=V(a).evaluate(e,t);switch(o.type){case"BOOLEAN":r=is.xor(r,!!((i=o.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return d.dr()}}return s?d.pr():d.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class Ba{constructor(e){this.expr=e}evaluate(e,t){var a,o;I(this.expr.params.length===2,55094);let r=!1;const s=V(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return d.dr()}const i=V(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return d.dr()}if(r)return d.pr();for(const u of((o=(a=i.value)==null?void 0:a.arrayValue)==null?void 0:o.values)??[])switch(he(s.value)&&he(u)?"EQ":De(s.value,u)){case"EQ":return d.newValue(ie);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:v(44608,{value:s.value,candidate:u})}return r?d.pr():d.newValue(K)}}class nl{constructor(e){this.expr=e}evaluate(e,t){return new ar(new m("not",[new m("equal_any",this.expr.params)])).evaluate(e,t)}}class rl{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,23322);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return d.newValue(K);case"DOUBLE":return d.newValue({booleanValue:isNaN(Y(r.value))});case"NULL":return d.pr();default:return d.dr()}}}class sl{constructor(e){this.expr=e}evaluate(e,t){return I(this.expr.params.length===1,50406),new ar(new m("not",[new m("is_nan",this.expr.params)])).evaluate(e,t)}}class il{constructor(e){this.expr=e}evaluate(e,t){switch(I(this.expr.params.length===1,23123),V(this.expr.params[0]).evaluate(e,t).type){case"NULL":return d.newValue(ie);case"UNSET":case"ERROR":return d.dr();default:return d.newValue(K)}}}class al{constructor(e){this.expr=e}evaluate(e,t){return I(this.expr.params.length===1,23167),new ar(new m("not",[new m("is_null",this.expr.params)])).evaluate(e,t)}}class ol{constructor(e){this.expr=e}evaluate(e,t){return I(this.expr.params.length===1,5228),V(this.expr.params[0]).evaluate(e,t).type==="ERROR"?d.newValue(ie):d.newValue(K)}}class ul{constructor(e){this.expr=e}evaluate(e,t){switch(I(this.expr.params.length===1,6877),V(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return d.dr();case"UNSET":return d.newValue(K);default:return d.newValue(ie)}}}class cl{constructor(e){this.expr=e}evaluate(e,t){var s;I(this.expr.params.length===3,11706);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?V(this.expr.params[1]).evaluate(e,t):V(this.expr.params[2]).evaluate(e,t);case"NULL":return V(this.expr.params[2]).evaluate(e,t);default:return d.dr()}}}class ll{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>V(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ae(i.value,s.value)>0?i:s}return s===void 0?d.pr():s}}class hl{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>V(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ae(i.value,s.value)<0?i:s}return s===void 0?d.pr():s}}class bt{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return d.dr()}const s=V(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return d.dr()}return this.Cr(r,s)}}class dl extends bt{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return d.newValue(ie);if(e.yr()||t.yr()||oe(e.value)||oe(t.value)||Q(e.value)!==Q(t.value))return d.newValue(K);switch(De(e.value,t.value)){case"EQ":return d.newValue(ie);case"NOT_EQ":return d.newValue(K);case"NULL":return d.pr();default:v(44615,{left:e,right:t})}}}class fl extends bt{constructor(e){super(e),this.expr=e}Cr(e,t){switch(De(e.value,t.value)){case"EQ":return d.newValue(K);case"NOT_EQ":case"TYPE_MISMATCH":return d.newValue(ie);case"NULL":return d.pr();default:v(44614,{left:e,right:t})}}}class ml extends bt{constructor(e){super(e),this.expr=e}Cr(e,t){return Q(e.value)!==Q(t.value)||oe(e.value)||oe(t.value)?d.newValue(K):d.newValue({booleanValue:ae(e.value,t.value)<0})}}class _l extends bt{constructor(e){super(e),this.expr=e}Cr(e,t){return Q(e.value)!==Q(t.value)||oe(e.value)||oe(t.value)?d.newValue(K):De(e.value,t.value)==="EQ"?d.newValue(ie):d.newValue({booleanValue:ae(e.value,t.value)<0})}}class pl extends bt{constructor(e){super(e),this.expr=e}Cr(e,t){return Q(e.value)!==Q(t.value)||oe(e.value)||oe(t.value)?d.newValue(K):d.newValue({booleanValue:ae(e.value,t.value)>0})}}class gl extends bt{constructor(e){super(e),this.expr=e}Cr(e,t){return Q(e.value)!==Q(t.value)||oe(e.value)||oe(t.value)?d.newValue(K):De(e.value,t.value)==="EQ"?d.newValue(ie):d.newValue({booleanValue:ae(e.value,t.value)>0})}}class yl{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class El{constructor(e){this.expr=e}evaluate(e,t){var s;I(this.expr.params.length===1,216);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return d.pr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return d.newValue({arrayValue:{values:[...i].reverse()}})}default:return d.dr()}}}class Tl{constructor(e){this.expr=e}evaluate(e,t){return I(this.expr.params.length===2,52884),new Ba(new m("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class wl{constructor(e){this.expr=e}evaluate(e,t){var u,c,l,h;I(this.expr.params.length===2,1392);let r=!1;const s=V(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return d.dr()}const i=V(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return d.dr()}if(r)return d.pr();const a=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],o=((h=(l=s.value)==null?void 0:l.arrayValue)==null?void 0:h.values)??[];for(const f of a){let g=!1;r=!1;for(const E of o){switch(he(f)&&he(E)?"EQ":De(f,E)){case"EQ":g=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:v(44613,{value:E,search:f})}if(g)break}if(!g)return d.newValue(K)}return d.newValue(ie)}}class Il{constructor(e){this.expr=e}evaluate(e,t){var u,c,l,h;I(this.expr.params.length===2,2680);let r=!1;const s=V(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return d.dr()}const i=V(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return d.dr()}if(r)return d.pr();const a=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],o=((h=(l=s.value)==null?void 0:l.arrayValue)==null?void 0:h.values)??[];for(const f of o)for(const g of a)switch(he(f)&&he(g)?"EQ":De(f,g)){case"EQ":return d.newValue(ie);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:v(60403,{value:f,search:g})}return r?d.pr():d.newValue(K)}}class Al{constructor(e){this.expr=e}evaluate(e,t){var s,i,a;I(this.expr.params.length===1,38605);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return d.pr();case"ARRAY":return d.newValue({integerValue:`${((a=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:a.length)??0}`});default:return d.dr()}}}class vl{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Vl{constructor(e){this.expr=e}evaluate(e,t){var s,i;I(this.expr.params.length===1,1508);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return d.pr();case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;if(typeof a=="string"){const o=G.fromBase64String(a).toUint8Array();return o.reverse(),d.newValue({bytesValue:G.fromUint8Array(o).toBase64()})}return d.newValue({bytesValue:new Uint8Array(a).reverse()})}case"STRING":{const a=(i=r.value)==null?void 0:i.stringValue,o=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(a),u=Array.from(o,(c=>c.segment)).reverse();return d.newValue({stringValue:u.join("")})}default:return d.dr()}}}class Rl{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Pl{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Sl{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,19400);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return d.pr();case"STRING":{const s=(function(a){let o=0;for(let u=0;u<a.length;u++){const c=a.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const l=a.codePointAt(u+1);l!==void 0&&l>=56320&&l<=57343?(o+=1,u++):o+=1}else o+=1;else o+=1;else{if(!(c<=1114111))return;o+=1,u++}}return o})(r.value.stringValue);return s===void 0?d.dr():d.newValue({integerValue:s})}default:return d.dr()}}}class Cl{constructor(e){this.expr=e}evaluate(e,t){var s,i;I(this.expr.params.length===1,8486);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;return typeof a=="string"?d.newValue({integerValue:G.fromBase64String(a).toUint8Array().length}):d.newValue({integerValue:new Uint8Array(a).length})}case"STRING":{const a=(function(u){let c=0;for(let l=0;l<u.length;l++){const h=u.codePointAt(l);if(h===void 0)return;if(h>=55296&&h<=57343){if(!(h<=56319))return;{const f=u.codePointAt(l+1);if(f===void 0||!(f>=56320&&f<=57343))return;c+=4,l++}}else if(h<=127)c+=1;else if(h<=2047)c+=2;else if(h<=65535)c+=3;else{if(!(h<=1114111))return;c+=4,l++}}return c})((i=r.value)==null?void 0:i.stringValue);return a===void 0?d.dr():d.newValue({integerValue:a})}case"NULL":return d.pr();default:return d.dr()}}}class Nt{constructor(e){this.expr=e}evaluate(e,t){var a,o;I(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=V(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return d.dr()}const i=V(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return d.dr()}return r?d.pr():this.Fr((a=s.value)==null?void 0:a.stringValue,(o=i.value)==null?void 0:o.stringValue)}}class xl extends Nt{Fr(e,t){try{const r=(function(a){let o="";for(let u=0;u<a.length;u++){const c=a.charAt(u);switch(c){case"_":o+=".";break;case"%":o+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":o+="\\"+c;break;default:o+=c}}return"^"+o+"$"})(t),s=qr.compile(r);return d.newValue({booleanValue:s.matches(e)})}catch(r){return ge(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),d.dr()}}}class bl extends Nt{Fr(e,t){try{const r=qr.compile(t);return d.newValue({booleanValue:r.test(e)})}catch{return ge(`Invalid regex pattern found in regex_contains: ${t}, returning error`),d.dr()}}}class Nl extends Nt{Fr(e,t){try{return d.newValue({booleanValue:qr.compile(t).matches(e)})}catch{return ge(`Invalid regex pattern found in regex_match: ${t}, returning error`),d.dr()}}}class Dl extends Nt{Fr(e,t){return d.newValue({booleanValue:e.includes(t)})}}class kl extends Nt{Fr(e,t){return d.newValue({booleanValue:e.startsWith(t)})}}class Ll extends Nt{Fr(e,t){return d.newValue({booleanValue:e.endsWith(t)})}}class Ol{constructor(e){this.expr=e}evaluate(e,t){var s,i;I(this.expr.params.length===1,29079);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return d.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return d.pr();default:return d.dr()}}}class Ml{constructor(e){this.expr=e}evaluate(e,t){var s,i;I(this.expr.params.length===1,60487);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return d.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return d.pr();default:return d.dr()}}}class Ul{constructor(e){this.expr=e}evaluate(e,t){var s,i;I(this.expr.params.length===1,28544);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return d.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return d.pr();default:return d.dr()}}}class Fl{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((a=>V(a).evaluate(e,t)));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return d.dr()}return i?d.pr():d.newValue({stringValue:s})}}class ql{constructor(e){this.expr=e}evaluate(e,t){var a,o,u,c;I(this.expr.params.length===2,4483);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return d.mr();case"MAP":break;default:return d.dr()}const s=V(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return d.dr();const i=(c=(o=(a=r.value)==null?void 0:a.mapValue)==null?void 0:o.fields)==null?void 0:c[(u=s.value)==null?void 0:u.stringValue];return i===void 0?d.mr():d.newValue(i)}}class as{constructor(e){this.expr=e}evaluate(e,t){var c,l;I(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=V(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return d.dr()}const i=V(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return d.dr()}if(r)return d.pr();const a=vr(s.value),o=vr(i.value);if(a===void 0||o===void 0||((c=a.values)==null?void 0:c.length)!==((l=o.values)==null?void 0:l.length))return d.dr();const u=this.Or(a,o);return u===void 0||isNaN(u)?d.dr():d.newValue({doubleValue:u})}}class Bl extends as{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,a=0,o=0;for(let c=0;c<r.length;c++){if(!Be(r[c])||!Be(s[c]))return;const l=Y(r[c]),h=Y(s[c]);i+=l*h,a+=l*l,o+=h*h}const u=Math.sqrt(a)*Math.sqrt(o);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class $l extends as{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Be(r[a])||!Be(s[a]))return;i+=Y(r[a])*Y(s[a])}return i}}class zl extends as{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Be(r[a])||!Be(s[a]))return;const o=Y(r[a]),u=Y(s[a]);i+=Math.pow(o-u,2)}return Math.sqrt(i)}}class Gl{constructor(e){this.expr=e}evaluate(e,t){var s;I(this.expr.params.length===1,39044);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=vr(r.value);return d.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return d.pr();default:return d.dr()}}}const sn=BigInt(-62135596800),an=BigInt(253402300799),$n=BigInt(1e3),Ue=BigInt(1e6),Ql=sn*$n,jl=an*$n+BigInt(999),Wl=sn*Ue,Kl=an*Ue+BigInt(999999);function os(n){return n>=Wl&&n<=Kl}function $a(n){return n>=sn&&n<=an}function on(n,e){const t=BigInt(n);return!(t<sn||t>an)&&!(e<0||e>=1e9)&&(t!==sn||e===0)&&!(t===an&&e>999999999)}function za(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function us(n){return BigInt(n.seconds)*Ue+BigInt(Math.trunc(n.nanoseconds/1e3))}class cs{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return d.pr();default:return d.dr()}}}class Hl extends cs{toTimestamp(e){if(!os(e))return d.dr();let t=Number(e/Ue),r=Number(e%Ue*BigInt(1e3));const s=za(t,r);return t=s.seconds,r=s.nanos,on(t,r)?d.newValue({timestampValue:{seconds:t,nanos:r}}):d.dr()}}class Yl extends cs{toTimestamp(e){if(!(function(a){return a>=Ql&&a<=jl})(e))return d.dr();let t=Number(e/$n),r=Number(e%$n*BigInt(1e6));const s=za(t,r);return t=s.seconds,r=s.nanos,on(t,r)?d.newValue({timestampValue:{seconds:t,nanos:r}}):d.dr()}}class Jl extends cs{toTimestamp(e){if(!$a(e))return d.dr();const t=Number(e);return d.newValue({timestampValue:{seconds:t,nanos:0}})}}class ls{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=V(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return d.pr();default:return d.dr()}const s=Yr(r.value.timestampValue);return on(s.seconds,s.nanoseconds)?this.Mr(s):d.dr()}}class Xl extends ls{Mr(e){const t=us(e);return os(t)?d.newValue({integerValue:`${t.toString()}`}):d.dr()}}class Zl extends ls{Mr(e){const t=us(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?d.newValue({integerValue:r.toString()}):d.newValue({integerValue:(r-BigInt(1)).toString()})}}class eh extends ls{Mr(e){const t=BigInt(e.seconds);return $a(t)?d.newValue({integerValue:t.toString()}):d.dr()}}class Ga{constructor(e){this.expr=e}evaluate(e,t){I(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=V(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return d.dr()}const i=V(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=(function(U){switch(U){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),a===void 0)return d.dr();break;case"NULL":r=!0;break;default:return d.dr()}const o=V(this.expr.params[2]).evaluate(e,t);switch(o.type){case"INT":break;case"NULL":r=!0;break;default:return d.dr()}if(r)return d.pr();const u=BigInt(o.value.integerValue);let c;try{switch(a){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return d.dr()}if(a!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Nr(a)))return d.dr()}catch(k){return ge(`Error during timestamp arithmetic: ${k}`),d.dr()}const l=Yr(s.value.timestampValue);if(!on(l.seconds,l.nanoseconds))return d.dr();const h=us(l),f=this.Lr(h,c);if(!os(f))return d.dr();const g=Number(f/Ue),E=f%Ue,C=Number((E<0?E+Ue:E)*BigInt(1e3)),S=E<0?g-1:g;return on(S,C)?d.newValue({timestampValue:{seconds:S,nanos:C}}):d.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class th extends Ga{Lr(e,t){return e+t}}class nh extends Ga{Lr(e,t){return e-t}}function un(n){if((n=qa(n))instanceof Ct)return`fld(${n.fieldName})`;if(n instanceof xt)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof $?`ref(${t.path})`:t instanceof se?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof m)return`fn(${n.name},[${n.params.map(un).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.ur.map(un).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function rh(n){if(n instanceof Ma)return`${n._name}(${vn(n.fields)})`;if(n instanceof Ua){let e=`${n._name}(${vn(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${vn(n.groups)})`),e}if(n instanceof Fa)return`${n._name}(${vn(n.groups)})`;if(n instanceof nr)return`${n._name}(${n.Er})`;if(n instanceof rr)return`${n._name}(${n.collectionId})`;if(n instanceof ts)return`${n._name}()`;if(n instanceof ns)return`${n._name}(${n.hr.sort()})`;if(n instanceof sr)return`${n._name}(${un(n.condition)})`;if(n instanceof tt)return`${n._name}(${n.limit})`;if(n instanceof Ce)return`${n._name}(${(function(t){return t.map((r=>`${un(r.expr)}${r.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function vn(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${un(t)}`)).join(",")}`}function be(n){return n.stages.map((e=>rh(e))).join("|")}function Qa(n,e){return be(n)===be(e)}function j(n){return n instanceof te}function li(n){return j(n)?be(n):$t(n)}function ja(n){return j(n)?be(n):(function(t){return`${Zi(Ae(t))}|lt:${t.limitType}`})(n)}function or(n,e){return n instanceof te&&e instanceof te?Qa(n,e):!(n instanceof te&&!(e instanceof te)||!(n instanceof te)&&e instanceof te)&&Iu(n,e)}function Wa(n){return He(n)?be(n):Zi(n)}function Ka(n,e){return n instanceof te&&e instanceof te?Qa(n,e):!(n instanceof te&&!(e instanceof te)||!(n instanceof te)&&e instanceof te)&&ea(n,e)}function sh(n,e){const t=(function(s){let i=!1;const a=[];for(const o of s)if(o instanceof Ce)if(i=!0,o.orderings.some((u=>u.expr instanceof Ct&&u.expr.fieldName===Te)))a.push(o);else{const u=o.orderings.map((c=>c));u.push(xn(Te).ascending()),a.push(new Ce(u,{}))}else o instanceof tt&&(i||(a.push(new Ce([xn(Te).ascending()],{})),i=!0)),a.push(o);return i||a.push(new Ce([xn(Te).ascending()],{})),a})(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach((s=>s._readUserData(r)))}return new te(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nu(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=qt(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=qt(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=oa();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let o=this.applyToLocalView(a,i.mutatedFields);o=t.has(s.key)?null:o;const u=Qi(a,o);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(R.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),x())}isEqual(e){return this.batchId===e.batchId&&gt(this.mutations,e.mutations,((t,r)=>Bs(t,r)))&&gt(this.baseMutations,e.baseMutations,((t,r)=>Bs(t,r)))}}class hs{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){I(e.mutations.length===r.length,58842,{Br:e.mutations.length,Ur:r.length});let s=(function(){return Pu})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new hs(e,t,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="";function ah(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hi(e)),e=oh(n.get(t),e);return hi(e)}function oh(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ha:t+="";break;default:t+=i}}return t}function hi(n){return n+Ha+""}/**
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
 */class uh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xe{constructor(e,t,r,s,i=R.min(),a=R.min(),o=G.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=u}withSequenceNumber(e){return new xe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.qr=e}}function lh(n){const e=Gu({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pr(e,e.limit,"L"):e}/**
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
 */class hh{constructor(){this.Yi=new dh}addToCollectionParentIndex(e,t){return this.Yi.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}deleteAllFieldIndexes(e){return p.resolve()}createTargetIndexes(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve($e.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve($e.min())}updateCollectionGroup(e,t,r){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class dh{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new z(D.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new z(D.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new Qe(0)}static ws(){return new Qe(-1)}}// Copyright 2024 Google LLC* @license
function Ya(n,e){var r;let t=e;for(const s of n.stages)t=mh({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function ur(n,e){return Ya(n,[e]).length>0}function fh(n,e){return j(n)?ur(n,e):Xn(n,e)}function mh(n,e,t){if(e instanceof nr)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()&&`/${o.key.getCollectionPath().canonicalString()}`===i.Er))})(0,e,t);if(e instanceof sr)return(function(s,i,a){return a.filter((o=>{const u=Qt(V(i.condition).evaluate(s,o));return u!==void 0&&_e(u,ie)}))})(n,e,t);if(e instanceof rr)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()&&o.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof ts)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()))})(0,0,t);if(e instanceof ns)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()&&i.Tr.has(o.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof tt)return(function(s,i,a){return a.slice(0,i.limit)})(0,e,t);if(e instanceof Ce)return(function(s,i,a){const o=i.orderings.map((u=>({Os:V(u.expr),direction:u.direction})));return[...a].sort(((u,c)=>{for(const{Os:l,direction:h}of o){const f=Qt(l.evaluate(s,u)),g=Qt(l.evaluate(s,c)),E=ae(f??Tt,g??Tt);if(E!==0)return h==="ascending"?E:-E}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Dr(n){const e=(function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Ce)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,r)=>{for(const s of e){const i=Qt(V(s.expr).evaluate({serializer:n.serializer},t)),a=Qt(V(s.expr).evaluate({serializer:n.serializer},r)),o=ae(i||Tt,a||Tt);if(o!==0)return s.direction==="ascending"?o:-o}return 0}}function Er(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof tt)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.changes=new st((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Z.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?p.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ph{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&qt(r.mutation,s,pe.empty(),L.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,x()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=x()){const s=ke();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=lt();return i.forEach(((o,u)=>{a=a.insert(o,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=ke();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,x())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,o)=>{t.set(a,o)}))}))}computeViews(e,t,r,s){let i=re();const a=zt(),o=(function(){return zt()})();return t.forEach(((u,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof rt)?i=i.insert(c.key,c):l!==void 0?(a.set(c.key,l.mutation.getFieldMask()),qt(l.mutation,c,l.mutation.getFieldMask(),L.now())):a.set(c.key,pe.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((c,l)=>a.set(c,l))),t.forEach(((c,l)=>o.set(c,new ph(l,a.get(c)??null)))),o)))}recalculateAndSaveOverlays(e,t){const r=zt();let s=new O(((a,o)=>a-o)),i=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const o of a)o.keys().forEach((u=>{const c=t.get(u);if(c===null)return;let l=r.get(u)||pe.empty();l=o.applyToLocalView(c,l),r.set(u,l);const h=(s.get(o.batchId)||x()).add(u);s=s.insert(o.batchId,h)}))})).next((()=>{const a=[],o=s.getReverseIterator();for(;o.hasNext();){const u=o.getNext(),c=u.key,l=u.value,h=oa();l.forEach((f=>{if(!i.has(f)){const g=Qi(t.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}})),a.push(this.documentOverlayCache.saveOverlays(e,c,h))}return p.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return j(t)?this.getDocumentsMatchingPipeline(e,t,r,s):Eu(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ra(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):p.resolve(ke());let o=tn,u=i;return a.next((c=>p.forEach(c,((l,h)=>(o<h.largestBatchId&&(o=h.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next((f=>{u=u.insert(l,f)}))))).next((()=>this.populateOverlays(e,c,i))).next((()=>this.computeViews(e,u,c,x()))).next((l=>({batchId:o,changes:aa(l)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new A(t)).next((r=>{let s=lt();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=lt();return this.indexManager.getCollectionParents(e,i).next((o=>p.forEach(o,(u=>{const c=(function(h,f){return new Rt(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next((l=>{l.forEach(((h,f)=>{a=a.insert(h,f)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>this.retrieveMatchingLocalDocuments(i,a,(o=>Xn(t,o)))))}getDocumentsMatchingPipeline(e,t,r,s){if(Me(t)==="collection_group"){const i=ss(t);let a=lt();return this.indexManager.getCollectionParents(e,i).next((o=>p.forEach(o,(u=>{const c=(function(h,f){const g=h.stages.map((E=>E instanceof rr?new nr(f.canonicalString(),{}):E));return new te(h.serializer,g)})(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,r,s).next((l=>{l.forEach(((h,f)=>{a=a.insert(h,f)}))}))})).next((()=>a))))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next((a=>{switch(i=a,Me(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let o=x();for(const u of Nr(t))o=o.add(A.fromPath(u));return this.remoteDocumentCache.getEntries(e,o);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new T("invalid-argument",`Invalid pipeline source to execute offline: ${be(t)}`)}})).next((a=>this.retrieveMatchingLocalDocuments(i,a,(o=>ur(t,o)))))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach(((i,a)=>{const o=a.getKey();t.get(o)===null&&(t=t.insert(o,Z.newInvalidDocument(o)))}));let s=lt();return t.forEach(((i,a)=>{const o=e.get(i);o!==void 0&&qt(o.mutation,a,pe.empty(),L.now()),r(a)&&(s=s.insert(i,a))})),s}getOverlaysForPipeline(e,t,r){switch(Me(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,D.fromString(ir(t)),r);case"collection_group":throw new T("invalid-argument",`Unexpected collection group pipeline: ${be(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Nr(t).map((s=>A.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new T("invalid-argument",`Failed to get overlays for pipeline: ${be(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.serializer=e,this.Ks=new Map,this.Qs=new Map}getBundleMetadata(e,t){return p.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ve(s.createTime)}})(t)),p.resolve()}getNamedQuery(e,t){return p.resolve(this.Qs.get(t))}saveNamedQuery(e,t){return this.Qs.set(t.name,(function(s){return{name:s.name,query:lh(s.bundledQuery),readTime:ve(s.readTime)}})(t)),p.resolve()}}/**
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
 */class Eh{constructor(){this.overlays=new O(A.comparator),this.Ws=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ke();return p.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}getAllOverlays(e,t){const r=ke();return this.overlays.forEach(((s,i)=>{i.largestBatchId>t&&r.set(s,i)})),p.resolve(r)}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.Yr(e,t,i)})),p.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ws.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ws.delete(r)),p.resolve()}getOverlaysForCollection(e,t,r){const s=ke(),i=t.length+1,a=new A(t.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const u=o.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return p.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new O(((c,l)=>c-l));const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=ke(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const o=ke(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((c,l)=>o.set(c,l))),!(o.size()>=s)););return p.resolve(o)}Yr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ws.get(s.largestBatchId).delete(r.key);this.Ws.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new uh(t,r));let i=this.Ws.get(t);i===void 0&&(i=x(),this.Ws.set(t,i)),this.Ws.set(t,i.add(r.key))}}/**
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
 */class Th{constructor(){this.sessionToken=G.EMPTY_BYTE_STRING}getSessionToken(e){return p.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,p.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.Gs=new z(W.zs),this.js=new z(W.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const r=new W(e,t);this.Gs=this.Gs.add(r),this.js=this.js.add(r)}Js(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Ys(new W(e,t))}Zs(e,t){e.forEach((r=>this.removeReference(r,t)))}Xs(e){const t=new A(new D([])),r=new W(t,e),s=new W(t,e+1),i=[];return this.js.forEachInRange([r,s],(a=>{this.Ys(a),i.push(a.key)})),i}e_(){this.Gs.forEach((e=>this.Ys(e)))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new A(new D([])),r=new W(t,e),s=new W(t,e+1);let i=x();return this.js.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new W(e,0),r=this.Gs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class W{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return A.comparator(e.key,t.key)||b(e.n_,t.n_)}static Hs(e,t){return b(e.n_,t.n_)||A.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Wr=1,this.r_=new z(W.zs)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Wr;this.Wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ih(i,t,r,s);this.mutationQueue.push(a);for(const o of s)this.r_=this.r_.add(new W(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return p.resolve(a)}lookupMutationBatch(e,t){return p.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.s_(r),i=s<0?0:s;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?zr:this.Wr-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new W(t,0),s=new W(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([r,s],(a=>{const o=this.i_(a.n_);i.push(o)})),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new z(b);return t.forEach((s=>{const i=new W(s,0),a=new W(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,a],(o=>{r=r.add(o.n_)}))})),p.resolve(this.__(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;A.isDocumentKey(i)||(i=i.child(""));const a=new W(new A(i),0);let o=new z(b);return this.r_.forEachWhile((u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(o=o.add(u.n_)),!0)}),a),p.resolve(this.__(o))}__(e){const t=[];return e.forEach((r=>{const s=this.i_(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){I(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.r_;return p.forEach(t.mutations,(s=>{const i=new W(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.r_=r}))}jr(e){}containsKey(e,t){const r=new W(t,0),s=this.r_.firstAfterOrEqual(r);return p.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.a_=e,this.docs=(function(){return new O(A.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.a_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return p.resolve(r?r.document.mutableCopy():Z.newInvalidDocument(t))}getEntries(e,t){let r=re();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Z.newInvalidDocument(s))})),p.resolve(r)}getAllEntries(e){let t=re();return this.docs.forEach(((r,s)=>{t=t.insert(r,s.document)})),p.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;j(t)?(i=D.fromString(ir(t)),a=l=>ur(t,l)):(i=t.path,a=l=>Xn(t,l));let o=re();const u=new A(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:l,value:{document:h}}=c.getNext();if(!i.isPrefixOf(l.path))break;l.path.length>i.length+1||pu(_u(h),r)<=0||(s.has(h.key)||a(h))&&(o=o.insert(h.key,h.mutableCopy()))}return p.resolve(o)}getAllFromCollectionGroup(e,t,r,s){v(9500)}u_(e,t){return p.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Ah(this)}getSize(e){return p.resolve(this.size)}}class Ah extends _h{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(r)})),p.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.persistence=e,this.c_=new st((t=>Wa(t)),Ka),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.l_=0,this.E_=new ds,this.targetCount=0,this.h_=Qe.ys()}forEachTarget(e,t){return this.c_.forEach(((r,s)=>t(s))),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.l_&&(this.l_=t),p.resolve()}vs(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new Qe(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.vs(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.vs(t),p.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.c_.forEach(((a,o)=>{o.sequenceNumber<=t&&r.get(o.targetId)===null&&(this.c_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)})),p.waitFor(i).next((()=>s))}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const r=this.c_.get(t)||null;return p.resolve(r)}addMatchingKeys(e,t,r){return this.E_.Js(t,r),p.resolve()}removeMatchingKeys(e,t,r){this.E_.Zs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),p.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),p.resolve()}getMatchingKeysForTargetId(e,t){const r=this.E_.t_(t);return p.resolve(r)}containsKey(e,t){return p.resolve(this.E_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t){this.T_={},this.overlays={},this.P_=new er(0),this.R_=!1,this.R_=!0,this.I_=new Th,this.referenceDelegate=e(this),this.A_=new vh(this),this.indexManager=new hh,this.remoteDocumentCache=(function(s){return new Ih(s)})((r=>this.referenceDelegate.V_(r))),this.serializer=new ch(t),this.d_=new yh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Eh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.T_[e.toKey()];return r||(r=new wh(t,this.referenceDelegate),this.T_[e.toKey()]=r),r}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,r){w("MemoryPersistence","Starting transaction:",e);const s=new Vh(this.P_.next());return this.referenceDelegate.f_(),r(s).next((i=>this.referenceDelegate.m_(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}p_(e,t){return p.or(Object.values(this.T_).map((r=>()=>r.containsKey(e,t))))}}class Vh extends gc{constructor(e){super(),this.currentSequenceNumber=e}}class fs{constructor(e){this.persistence=e,this.g_=new ds,this.y_=null}static w_(e){return new fs(e)}get b_(){if(this.y_)return this.y_;throw v(60996)}addReference(e,t,r){return this.g_.addReference(r,t),this.b_.delete(r.toString()),p.resolve()}removeReference(e,t,r){return this.g_.removeReference(r,t),this.b_.add(r.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),p.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach((s=>this.b_.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.b_.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.b_,(r=>{const s=A.fromPath(r);return this.S_(e,s).next((i=>{i||t.removeEntry(s,R.min())}))})).next((()=>(this.y_=null,t.apply(e))))}updateLimboDocument(e,t){return this.S_(e,t).next((r=>{r?this.b_.delete(t.toString()):this.b_.add(t.toString())}))}V_(e){return 0}S_(e,t){return p.or([()=>p.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class zn{constructor(e,t){this.persistence=e,this.v_=new st((r=>ah(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Ic(this,t)}static w_(e,t){return new zn(e,t)}f_(){}m_(e){return p.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}xs(e){let t=0;return this.ir(e,(r=>{t++})).next((()=>t))}ir(e,t){return p.forEach(this.v_,((r,s)=>this.Fs(e,r,s).next((i=>i?p.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,(a=>this.Fs(e,a,t).next((o=>{o||(r++,i.removeEntry(a,R.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.v_.set(t,e.currentSequenceNumber),p.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.v_.set(r,e.currentSequenceNumber),p.resolve()}removeReference(e,t,r){return this.v_.set(r,e.currentSequenceNumber),p.resolve()}updateLimboDocument(e,t){return this.v_.set(t,e.currentSequenceNumber),p.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rn(e.data.value)),t}Fs(e,t,r){return p.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.v_.get(t);return p.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ao=r,this.Vo=s}static fo(e,t){let r=x(),s=x();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ms(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(n,e){return A.comparator(n.key,e.key)}/**
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
 */class Ph{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Sh{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=(function(){return Co()?8:yc(xo())>0?6:4})()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.So(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.vo(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Ph;return this.Do(e,t,a).next((o=>{if(i.result=o,this.po)return this.xo(e,t,a,o.size)}))})).next((()=>i.result))}xo(e,t,r,s){return j(t)?p.resolve():r.documentReadCount<this.yo?(ut()<=Se.DEBUG&&w("QueryEngine","SDK will not create cache indexes for query:",$t(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),p.resolve()):(ut()<=Se.DEBUG&&w("QueryEngine","Query:",$t(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.wo*s?(ut()<=Se.DEBUG&&w("QueryEngine","The SDK decides to create cache indexes for query:",$t(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ae(t))):p.resolve())}So(e,t){if(j(t))return p.resolve(null);let r=t;if(Ws(r))return p.resolve(null);let s=Ae(r);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(r.limit!==null&&i===1&&(r=Pr(r,null,"F"),s=Ae(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next((a=>{const o=x(...a);return this.bo.getDocuments(e,o).next((u=>this.indexManager.getMinOffset(e,s).next((c=>{const l=this.Co(r,u);return this.Fo(r,l,o,c.readTime)?this.So(e,Pr(r,null,"F")):this.Oo(e,l,r,c)}))))})))))}vo(e,t,r,s){return(j(t)?(function(a){for(const o of a.stages){if(o instanceof tt||o instanceof ci)return!1;if(o instanceof sr){if(o.condition instanceof ka&&o.condition._expr.name==="exists"&&o.condition._expr.params[0]instanceof Ct&&o.condition._expr.params[0].fieldName===Te)continue;return!1}}return!0})(t):Ws(t))||s.isEqual(R.min())?p.resolve(null):this.bo.getDocuments(e,r).next((i=>{const a=this.Co(t,i);return this.Fo(t,a,r,s)?p.resolve(null):(ut()<=Se.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),li(t)),this.Oo(e,a,t,mu(s,tn)).next((o=>o)))}))}Co(e,t){let r,s;return j(e)?(r=new z(Rh),s=i=>ur(e,i)):(r=new z(Kr(e)),s=i=>Xn(e,i)),t.forEach(((i,a)=>{s(a)&&(r=r.add(a))})),r}Fo(e,t,r,s){if(j(e))return(function(o){return o.stages.some((u=>u instanceof tt||u instanceof ci))})(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,r){return ut()<=Se.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",li(t)),this.bo.getDocumentsMatchingQuery(e,t,$e.min(),r)}Oo(e,t,r,s){return this.bo.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="LocalStore",Ch=3e8;class xh{constructor(e,t,r,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new O(b),this.Lo=new st((i=>Wa(i)),Ka),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(r)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gh(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.No)))}}function bh(n,e,t,r){return new xh(n,e,t,r)}async function Xa(n,e){const t=P(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],o=[];let u=x();for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(r,u).next((c=>({qo:c,removedBatchIds:a,addedBatchIds:o})))}))}))}function Nh(n,e){const t=P(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return(function(o,u,c,l){const h=c.batch,f=h.keys();let g=p.resolve();return f.forEach((E=>{g=g.next((()=>l.getEntry(u,E))).next((C=>{const S=c.docVersions.get(E);I(S!==null,48541),C.version.compareTo(S)<0&&(h.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),l.addEntry(C)))}))})),g.next((()=>o.mutationQueue.removeMutationBatch(u,h)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(o){let u=x();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(u=u.add(o.batch.mutations[c].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Za(n){const e=P(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.A_.getLastRemoteSnapshotVersion(t)))}function Dh(n,e){const t=P(n),r=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const o=[];e.targetChanges.forEach(((l,h)=>{const f=s.get(h);if(!f)return;o.push(t.A_.removeMatchingKeys(i,l.removedDocuments,h).next((()=>t.A_.addMatchingKeys(i,l.addedDocuments,h))));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(G.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(h,g),(function(C,S,k){return C.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=Ch?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0})(f,g,l)&&o.push(t.A_.updateTargetData(i,g))}));let u=re(),c=x();if(e.documentUpdates.forEach((l=>{e.resolvedLimboDocuments.has(l)&&o.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))})),o.push(kh(i,a,e.documentUpdates).next((l=>{u=l.$o,c=l.Ko}))),!r.isEqual(R.min())){const l=t.A_.getLastRemoteSnapshotVersion(i).next((h=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,r)));o.push(l)}return p.waitFor(o).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,c))).next((()=>u))})).then((i=>(t.No=s,i)))}function kh(n,e,t){let r=x(),s=x();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=re();return t.forEach(((o,u)=>{const c=i.get(o);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(o)),u.isNoDocument()&&u.version.isEqual(R.min())?(e.removeEntry(o,u.readTime),a=a.insert(o,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),a=a.insert(o,u)):w(_s,"Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",u.version)})),{$o:a,Ko:s}}))}function Lh(n,e){const t=P(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=zr),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Oh(n,e){const t=P(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.A_.getTargetData(r,e).next((i=>i?(s=i,p.resolve(s)):t.A_.allocateTargetId(r).next((a=>(s=new xe(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.A_.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.No.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(r.targetId,r),t.Lo.set(e,r.targetId)),r}))}async function kr(n,e,t){const r=P(n),s=r.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!St(a))throw a;w(_s,`Failed to update sequence numbers for target ${e}: ${a}`)}r.No=r.No.remove(e),r.Lo.delete(s.target)}function di(n,e,t){const r=P(n);let s=R.min(),i=x();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,c,l){const h=P(u),f=h.Lo.get(l);return f!==void 0?p.resolve(h.No.get(f)):h.A_.getTargetData(c,l)})(r,a,j(e)?e:Ae(e)).next((o=>{if(o)return s=o.lastLimboFreeSnapshotVersion,r.A_.getMatchingKeysForTargetId(a,o.targetId).next((u=>{i=u}))})).next((()=>r.Mo.getDocumentsMatchingQuery(a,e,t?s:R.min(),t?i:x()))).next((o=>(Mh(r,o),{documents:o,Qo:i})))))}function Mh(n,e){e.forEach(((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Bo.get(s)||R.min();r.readTime.compareTo(i)>0&&n.Bo.set(s,r.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve()))))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(Ne(t),this.Zo=!1):w("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="RemoteStore";class Fh{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new Qe(1e3),this.ua=new Qe(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke((a=>{r.enqueueAndForget((async()=>{ot(this)&&(w(Pe,"Restarting streams for network reachability change."),await(async function(u){const c=P(u);c.ca.add(4),await gn(c),c.ha.set("Unknown"),c.ca.delete(4),await cr(c)})(this))}))})),this.ha=new Uh(r,s)}}async function cr(n){if(ot(n))for(const e of n.la)await e(!0)}async function gn(n){for(const e of n.la)await e(!1)}function Lr(n,e){return n._a.get(e)||void 0}function eo(n,e){const t=P(n),r=Lr(t,e.targetId);if(r!==void 0&&t.sa.has(r))return;const s=(function(o,u){const c=Lr(o,u);c!==void 0&&o.oa.delete(c);const l=(function(f,g){return g%2!=0?f.ua.next():f.aa.next()})(o,u);return o._a.set(u,l),o.oa.set(l,u),l})(t,e.targetId);w(Pe,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new xe(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),Es(t)?ys(t):Dt(t).Jt()&&gs(t,i)}function ps(n,e){const t=P(n),r=Dt(t),s=Lr(t,e);w(Pe,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),r.Jt()&&to(t,s),t.sa.size===0&&(r.Jt()?r.Xt():ot(t)&&t.ha.set("Unknown"))}function gs(n,e){if(n.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(R.min())>0){const t=n.oa.get(e.targetId);if(t===void 0)return void w(Pe,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Dt(n).Tn(e)}function to(n,e){n.Ta.H(e),Dt(n).Pn(e)}function ys(n){n.Ta=new Du({getRemoteKeysForTarget:e=>{const t=n.oa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):x()},ge:e=>n.sa.get(e)||null,Ae:()=>n.datastore.serializer.databaseId}),Dt(n).start(),n.ha.Xo()}function Es(n){return ot(n)&&!Dt(n).Ht()&&n.sa.size>0}function ot(n){return P(n).ca.size===0}function no(n){n.Ta=void 0}async function qh(n){n.ha.set("Online")}async function Bh(n){n.sa.forEach(((e,t)=>{gs(n,e)}))}async function $h(n,e){no(n),Es(n)?(n.ha.na(e),ys(n)):n.ha.set("Unknown")}async function zh(n,e,t){if(n.ha.set("Online"),e instanceof ca&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const o of i.targetIds){if(s.sa.has(o)){const u=s.oa.get(o);u!==void 0&&(await s.remoteSyncer.rejectListen(u,a),s._a.delete(u),s.oa.delete(o)),s.sa.delete(o)}s.Ta.removeTarget(o)}})(n,e)}catch(r){w(Pe,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gn(n,r)}else if(e instanceof Sn?n.Ta.se(e):e instanceof ua?n.Ta.Ee(e):n.Ta.ae(e),!t.isEqual(R.min()))try{const r=await Za(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const o=i.Ta.de(a);o.targetChanges.forEach(((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.sa.get(l);h&&i.sa.set(l,h.withResumeToken(c.resumeToken,a))}})),o.targetMismatches.forEach(((c,l)=>{const h=i.sa.get(c);if(!h)return;i.sa.set(c,h.withResumeToken(G.EMPTY_BYTE_STRING,h.snapshotVersion)),to(i,c);const f=new xe(h.target,c,l,h.sequenceNumber);gs(i,f)}));const u=(function(l,h){const f=new Map;h.targetChanges.forEach(((E,C)=>{const S=l.oa.get(C);S!==void 0&&f.set(S,E)}));let g=new O(b);return h.targetMismatches.forEach(((E,C)=>{const S=l.oa.get(E);S!==void 0&&(g=g.insert(S,C))})),new fn(h.snapshotVersion,f,g,h.documentUpdates,h.augmentedDocumentUpdates,h.resolvedLimboDocuments)})(i,o);return i.remoteSyncer.applyRemoteEvent(u)})(n,t)}catch(r){w(Pe,"Failed to raise snapshot:",r),await Gn(n,r)}}async function Gn(n,e,t){if(!St(e))throw e;n.ca.add(1),await gn(n),n.ha.set("Offline"),t||(t=()=>Za(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{w(Pe,"Retrying IndexedDB access"),await t(),n.ca.delete(1),await cr(n)}))}function ro(n,e){return e().catch((t=>Gn(n,t,e)))}async function lr(n){const e=P(n),t=je(e);let r=e.ia.length>0?e.ia[e.ia.length-1].batchId:zr;for(;Gh(e);)try{const s=await Lh(e.localStore,r);if(s===null){e.ia.length===0&&t.Xt();break}r=s.batchId,Qh(e,s)}catch(s){await Gn(e,s)}so(e)&&io(e)}function Gh(n){return ot(n)&&n.ia.length<10}function Qh(n,e){n.ia.push(e);const t=je(n);t.Jt()&&t.Rn&&t.In(e.mutations)}function so(n){return ot(n)&&!je(n).Ht()&&n.ia.length>0}function io(n){je(n).start()}async function jh(n){je(n).dn()}async function Wh(n){const e=je(n);for(const t of n.ia)e.In(t.mutations)}async function Kh(n,e,t){const r=n.ia.shift(),s=hs.from(r,e,t);await ro(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await lr(n)}async function Hh(n,e){e&&je(n).Rn&&await(async function(r,s){if((function(a){return Vu(a)&&a!==_.ABORTED})(s.code)){const i=r.ia.shift();je(r).Zt(),await ro(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await lr(r)}})(n,e),so(n)&&io(n)}async function fi(n,e){const t=P(n);t.asyncQueue.verifyOperationInProgress(),w(Pe,"RemoteStore received new credentials");const r=ot(t);t.ca.add(3),await gn(t),r&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await cr(t)}async function Yh(n,e){const t=P(n);e?(t.ca.delete(2),await cr(t)):e||(t.ca.add(2),await gn(t),t.ha.set("Unknown"))}function Dt(n){return n.Pa||(n.Pa=(function(t,r,s){const i=P(t);return i.mn(),new cc(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{ut:qh.bind(null,n),lt:Bh.bind(null,n),ht:$h.bind(null,n),hn:zh.bind(null,n)}),n.la.push((async e=>{e?(n.Pa.Zt(),Es(n)?ys(n):n.ha.set("Unknown")):(await n.Pa.stop(),no(n))}))),n.Pa}function je(n){return n.Ra||(n.Ra=(function(t,r,s){const i=P(t);return i.mn(),new lc(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{ut:()=>Promise.resolve(),lt:jh.bind(null,n),ht:Hh.bind(null,n),An:Wh.bind(null,n),Vn:Kh.bind(null,n)}),n.la.push((async e=>{e?(n.Ra.Zt(),await lr(n)):(await n.Ra.stop(),n.ia.length>0&&(w(Pe,`Stopping write stream with ${n.ia.length} pending writes`),n.ia=[]))}))),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):Ne("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,o=new Ts(e,t,a,s,i);return o.start(r),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ws(n,e){if(Ne("AsyncQueue",`${e}: ${n}`),St(n))return new T(_.UNAVAILABLE,`${e}: ${n}`);throw n}class mi{constructor(){this.activeTargetIds=xu()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xh{constructor(){this.du=new mi,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,r){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new mi,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Tr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{static emptySet(e){return new Ze(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||A.comparator(t.key,r.key):(t,r)=>A.comparator(t.key,r.key),this.keyedMap=lt(),this.sortedSet=new O(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ze;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.mu=new O(A.comparator)}track(e){const t=e.doc.key,r=this.mu.get(t);r?e.type!==0&&r.type===3?this.mu=this.mu.insert(t,e):e.type===3&&r.type!==1?this.mu=this.mu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.mu=this.mu.remove(t):e.type===1&&r.type===2?this.mu=this.mu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):v(63341,{ye:e,pu:r}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal(((t,r)=>{e.push(r)})),e}}class vt{constructor(e,t,r,s,i,a,o,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((o=>{a.push({type:0,doc:o})})),new vt(e,t,Ze.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&or(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some((e=>e.Su()))}}class ed{constructor(){this.queries=pi(),this.onlineState="Unknown",this.vu=new Set}terminate(){(function(t,r){const s=P(t),i=s.queries;s.queries=pi(),i.forEach(((a,o)=>{for(const u of o.wu)u.onError(r)}))})(this,new T(_.ABORTED,"Firestore shutting down"))}}function pi(){return new st((n=>ja(n)),or)}async function td(n,e){const t=P(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.Su()&&(r=2):(i=new Zh,r=e.Su()?0:1);try{switch(r){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const o=ws(a,`Initialization of query '${j(e.query)?be(e.query):$t(e.query)}' failed`);return void e.onError(o)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&Is(t)}async function nd(n,e){const t=P(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wu.indexOf(e);a>=0&&(i.wu.splice(a,1),i.wu.length===0?s=e.Su()?0:1:!i.bu()&&e.Su()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function rd(n,e){const t=P(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const o of a.wu)o.xu(s)&&(r=!0);a.yu=s}}r&&Is(t)}function sd(n,e,t){const r=P(n),s=r.queries.get(e);if(s)for(const i of s.wu)i.onError(t);r.queries.delete(e)}function Is(n){n.vu.forEach((e=>{e.next()}))}var Or;(function(n){n.Default="default",n.Cache="cache"})(Or||(Or={}));class id{constructor(e,t,r){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=r||{}}xu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.Su())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=vt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}Su(){return this.options.source!==Or.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.key=e}}class oo{constructor(e){this.key=e}}class ad{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=x(),this.mutatedKeys=x(),this.Hu=j(e)?Dr(e):Kr(e),this.Ju=new Ze(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const r=t?t.Xu:new _i,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,o=!1;const[u,c]=this.ec(this.query,s);e.inorderTraversal(((h,f)=>{const g=s.get(h),E=fh(this.query,f)?f:null,C=!!g&&this.mutatedKeys.has(g.key),S=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;g&&E?g.data.isEqual(E.data)?C!==S&&(r.track({type:3,doc:E}),k=!0):this.tc(g,E)||(r.track({type:2,doc:E}),k=!0,(u&&this.Hu(E,u)>0||c&&this.Hu(E,c)<0)&&(o=!0)):!g&&E?(r.track({type:0,doc:E}),k=!0):g&&!E&&(r.track({type:1,doc:g}),k=!0,(u||c)&&(o=!0)),k&&(E?(a=a.add(E),i=S?i.add(h):i.delete(h)):(a=a.delete(h),i=i.delete(h)))}));const l=this.nc(this.query);if(l)if(j(this.query)){const h=[];a.forEach((E=>h.push(E)));const f=Ya(this.query,h);let g=new Ze(Dr(this.query));for(const E of f)g=g.add(E);a.forEach((E=>{g.has(E.key)||(i=i.delete(E.key),r.track({type:1,doc:E}))})),a=g}else{const h=this.rc(this.query);for(;a.size>l;){const f=h==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}}return{Ju:a,Xu:r,Fo:o,mutatedKeys:i}}nc(e){var t;return j(e)?(t=Er(e))==null?void 0:t.limit:e.limit||void 0}rc(e){if(j(e)){const t=Er(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){var r;if(j(e)){const s=(r=Er(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const a=e.Xu.gu();a.sort(((l,h)=>(function(g,E){const C=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v(20277,{ye:S})}};return C(g)-C(E)})(l.type,h.type)||this.Hu(l.doc,h.doc))),this.sc(r),s=s??!1;const o=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,c=u!==this.zu;return this.zu=u,a.length!==0||c?{snapshot:new vt(this.query,e.Ju,i,a,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),oc:o}:{oc:o}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new _i,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach((t=>this.Gu=this.Gu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Gu=this.Gu.delete(t))),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=x(),this.Ju.forEach((r=>{this.ac(r.key)&&(this.ju=this.ju.add(r.key))}));const t=[];return e.forEach((r=>{this.ju.has(r)||t.push(new oo(r))})),this.ju.forEach((r=>{e.has(r)||t.push(new ao(r))})),t}uc(e){this.Gu=e.Qo,this.ju=x();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return vt.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const As="SyncEngine";class od{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ud{constructor(e){this.key=e,this.lc=!1}}class cd{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ec={},this.hc=new st((o=>ja(o)),or),this.Tc=new Map,this.Pc=new Set,this.Rc=new O(A.comparator),this.Ic=new Map,this.Ac=new ds,this.Vc={},this.dc=new Map,this.fc=Qe.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function ld(n,e,t=!0){const r=mo(n);let s;const i=r.hc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await uo(r,e,t,!0),s}async function hd(n,e){const t=mo(n);await uo(t,e,!0,!1)}async function uo(n,e,t,r){const s=await Oh(n.localStore,j(e)?e:Ae(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let o;return r&&(o=await dd(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&eo(n.remoteStore,s),o}async function dd(n,e,t,r,s){n.gc=(h,f,g)=>(async function(C,S,k,U){let ue=S.view.Zu(k);ue.Fo&&(ue=await di(C.localStore,S.query,!1).then((({documents:fr})=>S.view.Zu(fr,ue))));const kt=U&&U.targetChanges.get(S.targetId),Ke=U&&U.targetMismatches.get(S.targetId)!=null,dr=S.view.applyChanges(ue,C.isPrimaryClient,kt,Ke);return yi(C,S.targetId,dr.oc),dr.snapshot})(n,h,f,g);const i=await di(n.localStore,e,!0),a=new ad(e,i.Qo),o=a.Zu(i.documents),u=mn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),c=a.applyChanges(o,n.isPrimaryClient,u);yi(n,t,c.oc);const l=new od(e,t,a);return n.hc.set(e,l),n.Tc.has(t)?n.Tc.get(t).push(e):n.Tc.set(t,[e]),c.snapshot}async function fd(n,e,t){const r=P(n),s=r.hc.get(e),i=r.Tc.get(s.targetId);if(i.length>1)return r.Tc.set(s.targetId,i.filter((a=>!or(a,e)))),void r.hc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kr(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ps(r.remoteStore,s.targetId),Mr(r,s.targetId)})).catch(Pt)):(Mr(r,s.targetId),await kr(r.localStore,s.targetId,!0))}async function md(n,e){const t=P(n),r=t.hc.get(e),s=t.Tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ps(t.remoteStore,r.targetId))}async function _d(n,e,t){const r=Id(n);try{const s=await(function(a,o){const u=P(a),c=L.now(),l=o.reduce(((g,E)=>g.add(E.key)),x());let h,f;return u.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let E=re(),C=x();return u.Uo.getEntries(g,l).next((S=>{E=S,E.forEach(((k,U)=>{U.isValidDocument()||(C=C.add(k))}))})).next((()=>u.localDocuments.getOverlayedDocuments(g,E))).next((S=>{h=S;const k=[];for(const U of o){const ue=ru(U,h.get(U.key).overlayedDocument);ue!=null&&k.push(new rt(U.key,ue,qi(ue.value.mapValue),Ie.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,k,o)})).next((S=>{f=S;const k=S.applyToLocalDocumentSet(h,C);return u.documentOverlayCache.saveOverlays(g,S.batchId,k)}))})).then((()=>({batchId:f.batchId,changes:aa(h)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,o,u){let c=a.Vc[a.currentUser.toKey()];c||(c=new O(b)),c=c.insert(o,u),a.Vc[a.currentUser.toKey()]=c})(r,s.batchId,t),await yn(r,s.changes),await lr(r.remoteStore)}catch(s){const i=ws(s,"Failed to persist write");t.reject(i)}}async function co(n,e){const t=P(n);try{const r=await Dh(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Ic.get(i);a&&(I(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lc=!0:s.modifiedDocuments.size>0?I(a.lc,14607):s.removedDocuments.size>0&&(I(a.lc,42227),a.lc=!1))})),await yn(t,r,e)}catch(r){await Pt(r)}}function gi(n,e,t){const r=P(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hc.forEach(((i,a)=>{const o=a.view.Du(e);o.snapshot&&s.push(o.snapshot)})),(function(a,o){const u=P(a);u.onlineState=o;let c=!1;u.queries.forEach(((l,h)=>{for(const f of h.wu)f.Du(o)&&(c=!0)})),c&&Is(u)})(r.eventManager,e),s.length&&r.Ec.hn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pd(n,e,t){const r=P(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ic.get(e),i=s&&s.key;if(i){let a=new O(A.comparator);a=a.insert(i,Z.newNoDocument(i,R.min()));const o=x().add(i),u=new fn(R.min(),new Map,new O(b),a,re(),o);await co(r,u),r.Rc=r.Rc.remove(i),r.Ic.delete(e),vs(r)}else await kr(r.localStore,e,!1).then((()=>Mr(r,e,t))).catch(Pt)}async function gd(n,e){const t=P(n),r=e.batch.batchId;try{const s=await Nh(t.localStore,e);ho(t,r,null),lo(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await yn(t,s)}catch(s){await Pt(s)}}async function yd(n,e,t){const r=P(n);try{const s=await(function(a,o){const u=P(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(c=>{let l;return u.mutationQueue.lookupMutationBatch(c,o).next((h=>(I(h!==null,37113),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h)))).next((()=>u.mutationQueue.performConsistencyCheck(c))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,o))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l))).next((()=>u.localDocuments.getDocuments(c,l)))}))})(r.localStore,e);ho(r,e,t),lo(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await yn(r,s)}catch(s){await Pt(s)}}function lo(n,e){(n.dc.get(e)||[]).forEach((t=>{t.resolve()})),n.dc.delete(e)}function ho(n,e,t){const r=P(n);let s=r.Vc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vc[r.currentUser.toKey()]=s}}function Mr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tc.get(e))n.hc.delete(r),t&&n.Ec.yc(r,t);n.Tc.delete(e),n.isPrimaryClient&&n.Ac.Xs(e).forEach((r=>{n.Ac.containsKey(r)||fo(n,r)}))}function fo(n,e){n.Pc.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(ps(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ic.delete(t),vs(n))}function yi(n,e,t){for(const r of t)r instanceof ao?(n.Ac.addReference(r.key,e),Ed(n,r)):r instanceof oo?(w(As,"Document no longer in limbo: "+r.key),n.Ac.removeReference(r.key,e),n.Ac.containsKey(r.key)||fo(n,r.key)):v(19791,{wc:r})}function Ed(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Pc.has(r)||(w(As,"New document in limbo: "+t),n.Pc.add(r),vs(n))}function vs(n){for(;n.Pc.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Pc.values().next().value;n.Pc.delete(e);const t=new A(D.fromString(e)),r=n.fc.next();n.Ic.set(r,new ud(t)),n.Rc=n.Rc.insert(t,r),eo(n.remoteStore,new xe(Ae(na(t.path)),r,"TargetPurposeLimboResolution",er.yn))}}async function yn(n,e,t){const r=P(n),s=[],i=[],a=[];r.hc.isEmpty()||(r.hc.forEach(((o,u)=>{a.push(r.gc(u,e,t).then((c=>{var l;if((c||t)&&r.isPrimaryClient){const h=c?!c.fromCache:(l=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:l.current;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){s.push(c);const h=ms.fo(u.targetId,c);i.push(h)}})))})),await Promise.all(a),r.Ec.hn(s),await(async function(u,c){const l=P(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>p.forEach(c,(f=>p.forEach(f.Ao,(g=>l.persistence.referenceDelegate.addReference(h,f.targetId,g))).next((()=>p.forEach(f.Vo,(g=>l.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))))))}catch(h){if(!St(h))throw h;w(_s,"Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const g=l.No.get(f),E=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(E);l.No=l.No.insert(f,C)}}})(r.localStore,i))}async function Td(n,e){const t=P(n);if(!t.currentUser.isEqual(e)){w(As,"User change. New user:",e.toKey());const r=await Xa(t.localStore,e);t.currentUser=e,(function(i,a){i.dc.forEach((o=>{o.forEach((u=>{u.reject(new T(_.CANCELLED,a))}))})),i.dc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yn(t,r.qo)}}function wd(n,e){const t=P(n),r=t.Ic.get(e);if(r&&r.lc)return x().add(r.key);{let s=x();const i=t.Tc.get(e);if(!i)return s;for(const a of i??[]){const o=t.hc.get(a);s=s.unionWith(o.view.Yu)}return s}}function mo(n){const e=P(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=co.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wd.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pd.bind(null,e),e.Ec.hn=rd.bind(null,e.eventManager),e.Ec.yc=sd.bind(null,e.eventManager),e}function Id(n){const e=P(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yd.bind(null,e),e}class Qn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zn(e.databaseInfo.databaseId),this.sharedClientState=this.Sc(e),this.persistence=this.vc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return bh(this.persistence,new Sh,e.initialUser,this.serializer)}vc(e){return new Ja(fs.w_,this.serializer)}Sc(e){return new Xh}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qn.provider={build:()=>new Qn};class Ad extends Qn{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){I(this.persistence.referenceDelegate instanceof zn,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Tc(r,e.asyncQueue,t)}vc(e){const t=this.cacheSizeBytes!==void 0?ne.withCacheSize(this.cacheSizeBytes):ne.DEFAULT;return new Ja((r=>zn.w_(r,t)),this.serializer)}}class Ur{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gi(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Td.bind(null,this.syncEngine),await Yh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ed})()}createDatastore(e){const t=Zn(e.databaseInfo.databaseId),r=uc(e.databaseInfo);return fc(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,o){return new Fh(r,s,i,a,o)})(this.localStore,this.datastore,e.asyncQueue,(t=>gi(this.syncEngine,t,0)),(function(){return ti.Je()?new ti:new sc})())}createSyncEngine(e,t){return(function(s,i,a,o,u,c,l){const h=new cd(s,i,a,o,u,c);return l&&(h.mc=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=P(s);w(Pe,"RemoteStore shutting down."),i.ca.add(5),await gn(i),i.Ea.shutdown(),i.ha.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ur.provider={build:()=>new Ur};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="FirestoreClient";class vd{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=X.UNAUTHENTICATED,this.clientId=$r.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{w(We,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(w(We,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ws(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function wr(n,e){n.asyncQueue.verifyOperationInProgress(),w(We,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Xa(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ei(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Vd(n);w(We,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>fi(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>fi(e.remoteStore,s))),n._onlineComponents=e}async function Vd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){w(We,"Using user provided OfflineComponentProvider");try{await wr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===_.FAILED_PRECONDITION||s.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ge("Error using user provided cache. Falling back to memory cache: "+t),await wr(n,new Qn)}}else w(We,"Using default OfflineComponentProvider"),await wr(n,new Ad(void 0));return n._offlineComponents}async function _o(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(w(We,"Using user provided OnlineComponentProvider"),await Ei(n,n._uninitializedComponentsProvider._online)):(w(We,"Using default OnlineComponentProvider"),await Ei(n,new Ur))),n._onlineComponents}function Rd(n){return _o(n).then((e=>e.syncEngine))}async function Pd(n){const e=await _o(n),t=e.eventManager;return t.onListen=ld.bind(null,e.syncEngine),t.onUnlisten=fd.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hd.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=md.bind(null,e.syncEngine),t}function Sd(n,e,t={}){const r=new Le;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,o,u,c){const l=new Jh({next:f=>{l.Aa(),a.enqueueAndForget((()=>nd(i,h))),f.fromCache&&u.source==="server"?c.reject(new T(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new id(o instanceof Gt?sh(o):o,l,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return td(i,h)})(await Pd(n),n.asyncQueue,e,t,r))),r.promise}function Cd(n,e){const t=new Le;return n.asyncQueue.enqueueAndForget((async()=>_d(await Rd(n),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(_n("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},xd=class extends po{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{convertValue(e,t="none"){switch(Q(e)){case 0:return null;case 1:return e.booleanValue;case 2:return M(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw v(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return nt(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Ht].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>M(a.doubleValue)));return new se(t)}convertGeoPoint(e){return new Ve(M(e.latitude),M(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=hn(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Et(e));default:return null}}convertTimestamp(e){const t=Fe(e);return new L(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=D.fromString(e);I(pa(r),9688,{name:e});const s=new Wt(r.get(1),r.get(3)),i=new A(r.popFirst(5));return s.isEqual(t)||Ne(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="AsyncQueue";class wi{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Qc=null,this.Wc=!1,this.Gc=!1,this.zc=[],this.jt=new Ia(this,"async_queue_retry"),this.jc=()=>{const r=Tr();r&&w(Ti,"Visibility state changed to "+r.visibilityState),this.jt.qt()},this.Hc=e;const t=Tr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=Tr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise((()=>{}));const t=new Le;return this.Yc((()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.qc.push(e),this.Zc())))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.jt.reset()}catch(e){if(!St(e))throw e;w(Ti,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.jt.Ut((()=>this.Zc()))}}Yc(e){const t=this.Hc.then((()=>(this.Wc=!0,e().catch((r=>{throw this.Qc=r,this.Wc=!1,Ne("INTERNAL UNHANDLED ERROR: ",Ii(r)),r})).then((r=>(this.Wc=!1,r))))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=Ts.createAndSchedule(this,e,t,r,(i=>this.Xc(i)));return this.Kc.push(s),s}Jc(){this.Qc&&v(47125,{el:Ii(this.Qc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then((()=>{this.Kc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()}))}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function Ii(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class hr extends tr{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new wi,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wi(e),this._firestoreClient=void 0,await e}}}function Hd(n,e,t){t||(t=jt);const r=Pi(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Si(i,e))return s;throw new T(_.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new T(_.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Va)throw new T(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Fr(e.host)&&Ci(e.host),r.initialize({options:e,instanceIdentifier:t})}function Yd(n,e){const t=typeof n=="object"?n:Io(),r=typeof n=="string"?n:e||jt,s=Pi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Po("firestore");i&&Ac(s,...i)}return s}function go(n){if(n._terminated)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Dd(n),n._firestoreClient}function Dd(n){var r,s,i,a;const e=n._freezeSettings(),t=_c(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new vd(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}})(n._componentsProvider))}/**
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
 */class kd extends bd{constructor(e){super(),this.firestore=e}convertBytes(e){return new me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $(this.firestore,null,t)}}class Vn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mt extends po{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(_n("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new T(_.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=mt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}mt._jsonSchemaVersion="firestore/documentSnapshot/1.0",mt._jsonSchema={type:B("string",mt._jsonSchemaVersion),bundleSource:B("string","DocumentSnapshot"),bundleName:B("string"),bundle:B("string")};class bn extends mt{data(e={}){return super.data(e)}}class _t{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Vn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new bn(this._firestore,this._userDataWriter,r.key,r,new Vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((o=>{j(s._snapshot.query)?Dr(s._snapshot.query):Kr(s.query._query);const u=new bn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((o=>i||o.type!==3)).map((o=>{const u=new bn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),l=a.indexOf(o.doc.key)),{type:Ld(o.type),doc:u,oldIndex:c,newIndex:l}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new T(_.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_t._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$r.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ld(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v(61501,{type:n})}}/**
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
 */_t._jsonSchemaVersion="firestore/querySnapshot/1.0",_t._jsonSchema={type:B("string",_t._jsonSchemaVersion),bundleSource:B("string","QuerySnapshot"),bundleName:B("string"),bundle:B("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new T(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vs{}class yo extends Vs{}function Jd(n,e,...t){let r=[];e instanceof Vs&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof Ps)).length,o=i.filter((u=>u instanceof Rs)).length;if(a>1||a>0&&o>0)throw new T(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Rs extends yo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Rs(e,t,r)}_apply(e){const t=this._parse(e);return Eo(e._query,t),new it(e.firestore,e.converter,Rr(e._query,t))}_parse(e){const t=Sa(e.firestore);return(function(i,a,o,u,c,l,h){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new T(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){vi(h,l);const E=[];for(const C of h)E.push(Ai(u,i,C));f={arrayValue:{values:E}}}else f=Ai(u,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||vi(h,l),f=Sc(o,a,h,l==="in"||l==="not-in");return q.create(c,l,f)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ps extends Vs{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ps(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:ye.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const o=i.getFlattenedFilters();for(const u of o)Eo(a,u),a=Rr(a,u)})(e._query,t),new it(e.firestore,e.converter,Rr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ss extends yo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ss(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new T(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new T(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new en(i,a)})(e._query,this._field,this._direction);return new it(e.firestore,e.converter,wu(e._query,t))}}function Xd(n,e="asc"){const t=e,r=_n("orderBy",n);return Ss._create(r,t)}function Ai(n,e,t){if(typeof(t=pt(t))=="string"){if(t==="")throw new T(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ra(e)&&t.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(D.fromString(t));if(!A.isDocumentKey(r))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fs(n,new A(r))}if(t instanceof $)return Fs(n,t._key);throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jn(t)}.`)}function vi(n,e){if(!Array.isArray(n)||n.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Eo(n,e){const t=(function(s,i){for(const a of s)for(const o of a.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Zd(n){n=yt(n,it);const e=yt(n.firestore,hr),t=go(e),r=new kd(e);return Od(n._query),Sd(t,n._query).then((s=>new _t(e,r,n,s)))}function ef(n,e,t){n=yt(n,$);const r=yt(n.firestore,hr),s=Nd(n.converter,e,t),i=Sa(r);return To(r,[Pc(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ie.none())])}function tf(n){return To(yt(n.firestore,hr),[new Wr(n._key,Ie.none())])}function To(n,e){const t=go(n);return Cd(t,e)}const Vi="@firebase/firestore",Ri="4.17.1";(function(e,t=!0){Uo(vo),Ao(new Vo("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),o=new hr(new ec(r.getProvider("auth-internal")),new rc(a,r.getProvider("app-check-internal")),Wo(a,s),a);return i={useFetchStreams:t,...i},o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),xs(Vi,Ri,e),xs(Vi,Ri,"esm2020")})();export{tf as a,Zd as b,Qd as c,jd as d,Yd as g,Hd as i,Xd as o,Jd as q,ef as s};
