var z=Object.defineProperty;var T=(g,t,e)=>t in g?z(g,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):g[t]=e;var S=(g,t,e)=>T(g,typeof t!="symbol"?t+"":t,e);import{d as y,e as F,_ as A,aa as M,ar as $,as as q}from"./patternBoards-DzVBPT7g.js";import{g as v,P as N,k as E,l as R,m as P,s as U,i as W}from"./PatternRule-B98-ERhf.js";import{H as L,G}from"./GenericRichSolution-dcEeS49P.js";import{P as O}from"./PatternBoardSolver-DIArGw3P.js";class V{constructor(t,e,s){S(this,"exitEdgeIndices");S(this,"solutionAttributeSetLists");this.initialFeatureSet=t,this.binaryFeatureMap=e,this.richSolutions=s;const n=t.patternBoard,a=n.edges.filter(i=>i.isExit);this.exitEdgeIndices=a.map(i=>e.getExitIndex(i)),this.solutionAttributeSetLists=new Array(1<<a.length).fill([]);const r=v(n,t.getFeaturesArray()),o=(i,c,l)=>{if(i===a.length){const d=L.filterWithInfo(s,r,l).map(p=>p.solutionAttributeSet);this.solutionAttributeSetLists[c]=d}else o(i+1,c,l),o(i+1,c|1<<i,[...l,a[i]])};o(0,0,[])}getSolutionAttributeSets(t){let e=0;for(let s=0;s<this.exitEdgeIndices.length;s++){const n=this.exitEdgeIndices[s];(t&1n<<BigInt(n))!==0n&&(e|=1<<s)}return this.solutionAttributeSetLists[e]}}const k=new WeakMap,j=(g,t=!1)=>{y()&&F(g);let e=k.get(g)??null;return e||(e=O.getSolutions(g,[]),t&&k.set(g,e)),e},H=new WeakMap,J=(g,t=!1)=>{y()&&F(g);let e=H.get(g)??null;return e||(e=j(g).map(s=>new G(g,s,!0),t),t&&H.set(g,e)),e},K=(g,t,e)=>{const s=g.inputFeatureSet.getFeaturesArray(),n=g.outputFeatureSet.getFeaturesArray();let a=e??J(g.patternBoard);t&&(a=V.filterWithFeatureSet(a,g.inputFeatureSet)),a=a.filter(r=>s.every(o=>o.isPossibleWith(r.isEdgeBlack)));for(const r of a)if(!n.every(o=>o.isPossibleWith(r.isEdgeBlack)))return!1;return!0};class Q{constructor(t,e,s,n,a){this.ruleIndex=t,this.embeddingIndex=e,this.rule=s,this.embeddedRule=n,this.embedding=a}}class b{constructor(t,e,s,n,a){if(this.patternBoards=t,this.data=e,this.ruleIndices=s,this.nextRuleIndex=n,this.highlander=a,y())for(let r=0;r<s.length;r++)F(e[s[r]]<t.length,"pattern board index")}clone(){return new b(this.patternBoards.slice(),new Uint8Array(this.data),this.ruleIndices.slice(),this.nextRuleIndex,this.highlander)}addRule(t){this.patternBoards.includes(t.patternBoard)||this.patternBoards.push(t.patternBoard);const e=t.getBinary(this.patternBoards);this.nextRuleIndex+e.length>this.data.length&&this.allocateMoreSpace(e.length),this.highlander||(this.highlander=t.highlander),this.data.set(e,this.nextRuleIndex),this.ruleIndices.push(this.nextRuleIndex),this.nextRuleIndex+=e.length}addRuleSuffixBytes(t,e,s){this.patternBoards.includes(t)||this.patternBoards.push(t);const n=[this.patternBoards.indexOf(t),...e];this.nextRuleIndex+n.length>this.data.length&&this.allocateMoreSpace(n.length),this.highlander||(this.highlander=s),this.data.set(n,this.nextRuleIndex),this.ruleIndices.push(this.nextRuleIndex),this.nextRuleIndex+=n.length}getRules(){const t=[];return this.forEachRule(e=>t.push(e)),t}get size(){return this.ruleIndices.length}allocateMoreSpace(t){const e=Math.max(this.data.length*2,this.data.length+t),s=new Uint8Array(e);s.set(this.data,0),this.data=s}getRule(t,e){return N.fromBinary(this.patternBoards,this.data,this.ruleIndices[t],e===void 0?this.highlander:e)}getRuleBytes(t,e){const s=this.ruleIndices[t],n=t+1<this.ruleIndices.length?this.ruleIndices[t+1]:this.nextRuleIndex,a=[];for(let r=e?s:s+1;r<n;r++)a.push(this.data[r]);return a}getRulePatternBoard(t){return this.patternBoards[this.data[this.ruleIndices[t]]]}forEachRule(t){for(let e=0;e<this.ruleIndices.length;e++)t(this.getRule(e))}withPatternBoardFilter(t){const e=this.patternBoards.map(t),s=this.patternBoards.filter((o,i)=>e[i]),n=[],a=[];let r=0;for(let o=0;o<this.ruleIndices.length;o++){const i=this.ruleIndices[o],c=this.data[i];if(y()&&F(c<this.patternBoards.length,"pattern board index"),e[c]){const l=s.indexOf(this.patternBoards[c]);y()&&F(l!==-1,"pattern board index");const d=o+1<this.ruleIndices.length?this.ruleIndices[o+1]:this.data.length;n.push(l,...this.data.slice(i+1,d)),a.push(r),y()&&F(n[r]===l,"pattern board index"),r=n.length}}return new b(s,new Uint8Array(n),a,r,this.highlander)}withRules(t){const e=this.highlander||t.some(o=>o.highlander),s=A.uniq([...this.patternBoards,...t.map(o=>o.patternBoard)]),n=[...this.data],a=[...this.ruleIndices];let r=this.nextRuleIndex;for(const o of t)n.push(...o.getBinary(s)),a.push(r),r=n.length;return new b(s,new Uint8Array(n),a,r,e)}withCollection(t){const e=this.clone();return t.forEachRule(s=>{e.addRule(s)}),e}withCollectionNonequal(t){const e=this.clone();let s=0;const n=this.getRules();return t.forEachRule(a=>{s%100===0&&console.log(s,`${this.size} + ${t.size}`),s++,n.every(r=>!a.equals(r))&&e.addRule(a)}),e}withCollectionNonredundant(t){const e=this.clone();let s=0;return t.forEachRule(n=>{s%100===0&&console.log(s,`${this.size} + ${t.size}`),s++,e.isRuleRedundant(n)||e.addRule(n)}),e}withoutCollectionNonequal(t){const e=b.empty();let s=0;const n=t.getRules();return this.forEachRule(a=>{s%100===0&&console.log(s,`${this.size} - ${t.size}`),s++,n.every(r=>!a.equals(r))&&e.addRule(a)}),e}withoutCollectionNonredundant(t){const e=b.empty();let s=0;return this.forEachRule(n=>{s%100===0&&console.log(s,`${this.size} - ${t.size}`),s++,t.isRuleRedundant(n)||e.addRule(n)}),e}withRulesApplied(t,e=()=>!1){const s=t.clone();for(;;){const n=s.clone();let a=null,r=[];for(let o=0;o<this.ruleIndices.length;o++){const i=this.ruleIndices[o],c=this.data[i],l=this.patternBoards[c];l!==a&&(a=l,r=M(l,t.patternBoard));const d=r;for(const p of d)if(this.isActionableEmbeddingFromFeatureSet(s,o,p)){const h=this.getRule(o).embedded(s.patternBoard,p);if(y()){self.isPatternRuleValid=K;const f=h.getMatchState(s);if(f===E.INCOMPATIBLE||f===E.DORMANT){debugger;throw new Error("Why would this happen")}}h.apply(s)}}if(e(s)||n.equals(s))break}return s}isRuleRedundant(t){return t.isTrivial()?!0:t.outputFeatureSet.isSubsetOf(this.withRulesApplied(t.inputFeatureSet,e=>t.outputFeatureSet.isSubsetOf(e)))}findNextActionableEmbeddedRuleFromData(t,e,s=0,n=0,a,r=this.size){let o=0;for(let i=s;i<r;i++){o%1e3===0&&console.log("search",o),o++;const c=this.ruleIndices[i],l=this.data[c],d=this.patternBoards[l],p=M(d,t);let u=n;for(n=0;u<p.length;u++){const h=p[u];if(this.isActionableEmbeddingFromData(t,e,i,h)){const f=a?this.getRule(i,a(i)):this.getRule(i),m=f.embedded(t,h);return y()&&(F(f.inputFeatureSet.getBoardMatchState(e,h,!0)===R.MATCH),F(f.outputFeatureSet.getBoardMatchState(e,h,!0)!==R.MATCH),F(!m||!!f.inputFeatureSet.embedded(d,h))),m?new Q(i,u,f,m,h):null}}}return null}isActionableEmbeddingFromData(t,e,s,n){let a=this.ruleIndices[s];const r=this.data[a++],o=this.patternBoards[r];y()&&F(o,"pattern board");const i=P(o);for(;;){const c=this.data[a++];if(c===255)break;if(c===254){const l=this.data[a++];for(y()&&F(l<128);;){const d=this.data[a++];if(d===255||d===254){a--;break}if(d&128){const p=d&127,u=e.oppositeFaceColors[n.mapFace(o.faces[l]).index],h=e.faceColors[n.mapFace(o.faces[p]).index];if(u!==h)return!1}else{const p=d,u=e.faceColors[n.mapFace(o.faces[l]).index],h=e.faceColors[n.mapFace(o.faces[p]).index];if(u!==h)return!1}}}else{const l=i.featureMatchers[c];if(l(e,n)!==R.MATCH)return!1}}for(;;){const c=this.data[a++];if(c===255)break;if(c===254){const l=this.data[a++];for(y()&&F(l<128);;){const d=this.data[a++];if(d===255||d===254){a--;break}if(d&128){const p=d&127,u=e.oppositeFaceColors[n.mapFace(o.faces[l]).index],h=e.faceColors[n.mapFace(o.faces[p]).index];if(u!==h)return!0}else{const p=d,u=e.faceColors[n.mapFace(o.faces[l]).index],h=e.faceColors[n.mapFace(o.faces[p]).index];if(u!==h)return!0}}}else{const l=i.featureMatchers[c];if(l(e,n)!==R.MATCH)return!0}}return!1}isActionableEmbeddingFromFeatureSet(t,e,s){let n=this.ruleIndices[e];const a=this.data[n++],r=this.patternBoards[a];y()&&F(r,"pattern board");const o=P(r);for(;;){const i=this.data[n++];if(i===255)break;if(i===254){const c=this.data[n++];y()&&F(c<128);const l=s.mapFace(r.faces[c]),d=t.getFaceColorDualFromFace(l);if(!d)return!1;const p=d.secondaryFaces.includes(l);y()&&F(p||d.primaryFaces.includes(l));const u=p?d.secondaryFaces:d.primaryFaces,h=p?d.primaryFaces:d.secondaryFaces;for(;;){const f=this.data[n++];if(f===255||f===254){n--;break}if(f&128){const m=f&127,x=s.mapFace(r.faces[m]);if(!h.includes(x))return!1}else{const m=f,x=s.mapFace(r.faces[m]);if(!u.includes(x))return!1}}}else{const c=o.featureSetMatchers[i];if(c(t,s)!==R.MATCH)return!1}}for(;;){const i=this.data[n++];if(i===255)break;if(i===254){const c=this.data[n++];y()&&F(c<128);const l=s.mapFace(r.faces[c]),d=t.getFaceColorDualFromFace(l);if(!d)return!0;const p=d.secondaryFaces.includes(l);y()&&F(p||d.primaryFaces.includes(l));const u=p?d.secondaryFaces:d.primaryFaces,h=p?d.primaryFaces:d.secondaryFaces;for(;;){const f=this.data[n++];if(f===255||f===254){n--;break}if(f&128){const m=f&127,x=s.mapFace(r.faces[m]);if(!h.includes(x))return!0}else{const m=f,x=s.mapFace(r.faces[m]);if(!u.includes(x))return!0}}}else{const c=o.featureSetMatchers[i];if(c(t,s)!==R.MATCH)return!0}}return!1}getActionableEmbeddingsFromData(t,e,s){let n=this.ruleIndices[s];const a=this.data[n++],r=this.patternBoards[a];y()&&F(r,"pattern board");const o=P(r);let i=M(r,t),c=i.slice();for(;;){const p=this.data[n++];let u=0;if(p===255)break;if(p===254){const h=this.data[n++];for(y()&&F(h<128);;){const f=this.data[n++];if(f===255||f===254){n--;break}if(f&128){const x=f&127;for(let I=0;I<i.length;I++){const B=i[I],w=e.oppositeFaceColors[B.mapFace(r.faces[h]).index],C=e.faceColors[B.mapFace(r.faces[x]).index];w===C&&(c[u++]=B)}}else{const x=f;for(let I=0;I<i.length;I++){const B=i[I],w=e.faceColors[B.mapFace(r.faces[h]).index],C=e.faceColors[B.mapFace(r.faces[x]).index];w===C&&(c[u++]=B)}}if(c.length=u,u===0)return c;const m=i;i=c,c=m,u=0}}else{const h=o.featureMatchers[p];for(let m=0;m<i.length;m++){const x=i[m];h(e,x)===R.MATCH&&(c[u++]=x)}if(c.length=u,u===0)return c;const f=i;i=c,c=f,u=0}}const l=i.map(()=>!1);let d=0;for(;;){const p=this.data[n++];if(p===255)break;if(p===254){const u=this.data[n++];for(y()&&F(u<128);;){const h=this.data[n++];if(h===255||h===254){n--;break}if(h&128){const f=h&127;for(let m=0;m<i.length;m++)if(!l[m]){const x=i[m],I=e.oppositeFaceColors[x.mapFace(r.faces[u]).index],B=e.faceColors[x.mapFace(r.faces[f]).index];I!==B&&(l[m]=!0,d++)}}else{const f=h;for(let m=0;m<i.length;m++)if(!l[m]){const x=i[m],I=e.faceColors[x.mapFace(r.faces[u]).index],B=e.faceColors[x.mapFace(r.faces[f]).index];I!==B&&(l[m]=!0,d++)}}}}else{const u=o.featureMatchers[p];for(let h=0;h<i.length;h++)if(!l[h]){const f=i[h];u(e,f)!==R.MATCH&&(l[h]=!0,d++)}}}return d?i.filter((p,u)=>l[u]):[]}serialize(){return{patternBoards:this.patternBoards.map(U),rules:$(this.data.subarray(0,this.nextRuleIndex)),highlander:this.highlander}}static deserialize(t){const e=q(t.rules);if(!e)throw new Error("Failed to decompress rules!");let s=0;const n=[];for(;s<e.length;){n.push(s),y()&&F(e[s]!==254);let a=0;for(;a<2;)y()&&F(s<e.length,"Unexpected end of data"),e[s++]===255&&a++}return new b(t.patternBoards.map(W),e,n,e.length,t.highlander)}static empty(){return new b([],new Uint8Array(0),[],0,!1)}static fromRules(t){const e=t.some(o=>o.highlander),s=A.uniq(t.map(o=>o.patternBoard)),n=[];let a=0;const r=[];for(const o of t)n.push(...o.getBinary(s)),r.push(a),a=n.length;return new b(s,new Uint8Array(n),r,a,e)}}export{b as B,V as H,J as g,K as i};