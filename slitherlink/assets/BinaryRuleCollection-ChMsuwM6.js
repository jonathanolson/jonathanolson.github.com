var z=Object.defineProperty;var T=(g,t,e)=>t in g?z(g,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):g[t]=e;var S=(g,t,e)=>(T(g,typeof t!="symbol"?t+"":t,e),e);import{P as W,a as A,g as M,s as $,d as q}from"./PatternRule-Bgza_EDD.js";import{a as v,b as N}from"./compression-CFlaLHJe.js";import{e as F,f as y,_ as E}from"./getCoordinateClusteredMap-Bd_wM-c0.js";import{r as P}from"./patternBoards-CVo-HFgJ.js";import{g as U,b as R}from"./FeatureSet-RmLjQa6B.js";import{G as L,H as G}from"./Highlander-BB6x0e65.js";import{P as O}from"./PatternBoardSolver-vRQRWARQ.js";const k=new WeakMap,V=(g,t=!1)=>{F()&&y(g);let e=k.get(g)??null;return e||(e=O.getSolutions(g,[]),t&&k.set(g,e)),e},H=new WeakMap,j=(g,t=!1)=>{F()&&y(g);let e=H.get(g)??null;return e||(e=V(g).map(s=>new L(g,s,!0),t),t&&H.set(g,e)),e};class J{constructor(t,e,s){S(this,"exitEdgeIndices");S(this,"solutionAttributeSetLists");this.initialFeatureSet=t,this.binaryFeatureMap=e,this.richSolutions=s;const r=t.patternBoard,a=r.edges.filter(o=>o.isExit);this.exitEdgeIndices=a.map(o=>e.getExitIndex(o)),this.solutionAttributeSetLists=new Array(1<<a.length).fill([]);const n=U(r,t.getFeaturesArray()),i=(o,l,d)=>{if(o===a.length){const c=G.filterWithInfo(s,n,d).map(h=>h.solutionAttributeSet);this.solutionAttributeSetLists[l]=c}else i(o+1,l,d),i(o+1,l|1<<o,[...d,a[o]])};i(0,0,[])}getSolutionAttributeSets(t){let e=0;for(let s=0;s<this.exitEdgeIndices.length;s++){const r=this.exitEdgeIndices[s];(t&1n<<BigInt(r))!==0n&&(e|=1<<s)}return this.solutionAttributeSetLists[e]}}const K=(g,t,e)=>{const s=g.inputFeatureSet.getFeaturesArray(),r=g.outputFeatureSet.getFeaturesArray();let a=e??j(g.patternBoard);t&&(a=J.filterWithFeatureSet(a,g.inputFeatureSet)),a=a.filter(n=>s.every(i=>i.isPossibleWith(n.isEdgeBlack)));for(const n of a)if(!r.every(i=>i.isPossibleWith(n.isEdgeBlack)))return!1;return!0};class b{constructor(t,e,s,r,a){if(this.patternBoards=t,this.data=e,this.ruleIndices=s,this.nextRuleIndex=r,this.highlander=a,F())for(let n=0;n<s.length;n++)y(e[s[n]]<t.length,"pattern board index")}clone(){return new b(this.patternBoards.slice(),new Uint8Array(this.data),this.ruleIndices.slice(),this.nextRuleIndex,this.highlander)}addRule(t){this.patternBoards.includes(t.patternBoard)||this.patternBoards.push(t.patternBoard);const e=t.getBinary(this.patternBoards);this.nextRuleIndex+e.length>this.data.length&&this.allocateMoreSpace(e.length),this.highlander||(this.highlander=t.highlander),this.data.set(e,this.nextRuleIndex),this.ruleIndices.push(this.nextRuleIndex),this.nextRuleIndex+=e.length}addRuleSuffixBytes(t,e,s){this.patternBoards.includes(t)||this.patternBoards.push(t);const r=[this.patternBoards.indexOf(t),...e];this.nextRuleIndex+r.length>this.data.length&&this.allocateMoreSpace(r.length),this.highlander||(this.highlander=s),this.data.set(r,this.nextRuleIndex),this.ruleIndices.push(this.nextRuleIndex),this.nextRuleIndex+=r.length}getRules(){const t=[];return this.forEachRule(e=>t.push(e)),t}get size(){return this.ruleIndices.length}allocateMoreSpace(t){const e=Math.max(this.data.length*2,this.data.length+t),s=new Uint8Array(e);s.set(this.data,0),this.data=s}getRule(t,e){return W.fromBinary(this.patternBoards,this.data,this.ruleIndices[t],e===void 0?this.highlander:e)}getRuleBytes(t,e){const s=this.ruleIndices[t],r=t+1<this.ruleIndices.length?this.ruleIndices[t+1]:this.nextRuleIndex,a=[];for(let n=e?s:s+1;n<r;n++)a.push(this.data[n]);return a}getRulePatternBoard(t){return this.patternBoards[this.data[this.ruleIndices[t]]]}forEachRule(t){for(let e=0;e<this.ruleIndices.length;e++)t(this.getRule(e))}withPatternBoardFilter(t){const e=this.patternBoards.map(t),s=this.patternBoards.filter((i,o)=>e[o]),r=[],a=[];let n=0;for(let i=0;i<this.ruleIndices.length;i++){const o=this.ruleIndices[i],l=this.data[o];if(F()&&y(l<this.patternBoards.length,"pattern board index"),e[l]){const d=s.indexOf(this.patternBoards[l]);F()&&y(d!==-1,"pattern board index");const c=i+1<this.ruleIndices.length?this.ruleIndices[i+1]:this.data.length;r.push(d,...this.data.slice(o+1,c)),a.push(n),F()&&y(r[n]===d,"pattern board index"),n=r.length}}return new b(s,new Uint8Array(r),a,n,this.highlander)}withRules(t){const e=this.highlander||t.some(i=>i.highlander),s=E.uniq([...this.patternBoards,...t.map(i=>i.patternBoard)]),r=[...this.data],a=[...this.ruleIndices];let n=this.nextRuleIndex;for(const i of t)r.push(...i.getBinary(s)),a.push(n),n=r.length;return new b(s,new Uint8Array(r),a,n,e)}withCollection(t){const e=this.clone();return t.forEachRule(s=>{e.addRule(s)}),e}withCollectionNonequal(t){const e=this.clone();let s=0;const r=this.getRules();return t.forEachRule(a=>{s%100===0&&console.log(s,`${this.size} + ${t.size}`),s++,r.every(n=>!a.equals(n))&&e.addRule(a)}),e}withCollectionNonredundant(t){const e=this.clone();let s=0;return t.forEachRule(r=>{s%100===0&&console.log(s,`${this.size} + ${t.size}`),s++,e.isRuleRedundant(r)||e.addRule(r)}),e}withoutCollectionNonequal(t){const e=b.empty();let s=0;const r=t.getRules();return this.forEachRule(a=>{s%100===0&&console.log(s,`${this.size} - ${t.size}`),s++,r.every(n=>!a.equals(n))&&e.addRule(a)}),e}withoutCollectionNonredundant(t){const e=b.empty();let s=0;return this.forEachRule(r=>{s%100===0&&console.log(s,`${this.size} - ${t.size}`),s++,t.isRuleRedundant(r)||e.addRule(r)}),e}withRulesApplied(t,e=()=>!1){const s=t.clone();for(;;){const r=s.clone();let a=null,n=[];for(let i=0;i<this.ruleIndices.length;i++){const o=this.ruleIndices[i],l=this.data[o],d=this.patternBoards[l];d!==a&&(a=d,n=P(d,t.patternBoard));const c=n;for(const h of c)if(this.isActionableEmbeddingFromFeatureSet(s,i,h)){const f=this.getRule(i).embedded(s.patternBoard,h);if(F()){window.isPatternRuleValid=K;const p=f.getMatchState(s);if(p===A.INCOMPATIBLE||p===A.DORMANT){debugger;throw new Error("Why would this happen")}}f.apply(s)}}if(e(s)||r.equals(s))break}return s}isRuleRedundant(t){return t.isTrivial()?!0:t.outputFeatureSet.isSubsetOf(this.withRulesApplied(t.inputFeatureSet,e=>t.outputFeatureSet.isSubsetOf(e)))}findNextActionableEmbeddedRuleFromData(t,e,s=0,r){let a=0;for(let n=s;n<this.ruleIndices.length;n++){a%1e3===0&&console.log("search",a),a++;const i=this.ruleIndices[n],o=this.data[i],l=this.patternBoards[o],d=P(l,t);for(const c of d)if(this.isActionableEmbeddingFromData(t,e,n,c)){const h=r?this.getRule(n,r(n)):this.getRule(n),u=h.embedded(t,c);if(F()&&(y(h.inputFeatureSet.getBoardMatchState(e,c,!0)===R.MATCH),y(h.outputFeatureSet.getBoardMatchState(e,c,!0)!==R.MATCH),y(!u||!!h.inputFeatureSet.embedded(l,c))),u)return{rule:h,embeddedRule:u,embedding:c,ruleIndex:n};debugger;throw new Error("Why would this happen")}}return null}isActionableEmbeddingFromData(t,e,s,r){let a=this.ruleIndices[s];const n=this.data[a++],i=this.patternBoards[n];F()&&y(i,"pattern board");const o=M(i);for(;;){const l=this.data[a++];if(l===255)break;if(l===254){const d=this.data[a++];for(F()&&y(d<128);;){const c=this.data[a++];if(c===255||c===254){a--;break}if(c&128){const h=c&127,u=e.oppositeFaceColors[r.mapFace(i.faces[d]).index],f=e.faceColors[r.mapFace(i.faces[h]).index];if(u!==f)return!1}else{const h=c,u=e.faceColors[r.mapFace(i.faces[d]).index],f=e.faceColors[r.mapFace(i.faces[h]).index];if(u!==f)return!1}}}else{const d=o.featureMatchers[l];if(d(e,r)!==R.MATCH)return!1}}for(;;){const l=this.data[a++];if(l===255)break;if(l===254){const d=this.data[a++];for(F()&&y(d<128);;){const c=this.data[a++];if(c===255||c===254){a--;break}if(c&128){const h=c&127,u=e.oppositeFaceColors[r.mapFace(i.faces[d]).index],f=e.faceColors[r.mapFace(i.faces[h]).index];if(u!==f)return!0}else{const h=c,u=e.faceColors[r.mapFace(i.faces[d]).index],f=e.faceColors[r.mapFace(i.faces[h]).index];if(u!==f)return!0}}}else{const d=o.featureMatchers[l];if(d(e,r)!==R.MATCH)return!0}}return!1}isActionableEmbeddingFromFeatureSet(t,e,s){let r=this.ruleIndices[e];const a=this.data[r++],n=this.patternBoards[a];F()&&y(n,"pattern board");const i=M(n);for(;;){const o=this.data[r++];if(o===255)break;if(o===254){const l=this.data[r++];F()&&y(l<128);const d=s.mapFace(n.faces[l]),c=t.getFaceColorDualFromFace(d);if(!c)return!1;const h=c.secondaryFaces.includes(d);F()&&y(h||c.primaryFaces.includes(d));const u=h?c.secondaryFaces:c.primaryFaces,f=h?c.primaryFaces:c.secondaryFaces;for(;;){const p=this.data[r++];if(p===255||p===254){r--;break}if(p&128){const m=p&127,x=s.mapFace(n.faces[m]);if(!f.includes(x))return!1}else{const m=p,x=s.mapFace(n.faces[m]);if(!u.includes(x))return!1}}}else{const l=i.featureSetMatchers[o];if(l(t,s)!==R.MATCH)return!1}}for(;;){const o=this.data[r++];if(o===255)break;if(o===254){const l=this.data[r++];F()&&y(l<128);const d=s.mapFace(n.faces[l]),c=t.getFaceColorDualFromFace(d);if(!c)return!0;const h=c.secondaryFaces.includes(d);F()&&y(h||c.primaryFaces.includes(d));const u=h?c.secondaryFaces:c.primaryFaces,f=h?c.primaryFaces:c.secondaryFaces;for(;;){const p=this.data[r++];if(p===255||p===254){r--;break}if(p&128){const m=p&127,x=s.mapFace(n.faces[m]);if(!f.includes(x))return!0}else{const m=p,x=s.mapFace(n.faces[m]);if(!u.includes(x))return!0}}}else{const l=i.featureSetMatchers[o];if(l(t,s)!==R.MATCH)return!0}}return!1}getActionableEmbeddingsFromData(t,e,s){let r=this.ruleIndices[s];const a=this.data[r++],n=this.patternBoards[a];F()&&y(n,"pattern board");const i=M(n);let o=P(n,t),l=o.slice();for(;;){const h=this.data[r++];let u=0;if(h===255)break;if(h===254){const f=this.data[r++];for(F()&&y(f<128);;){const p=this.data[r++];if(p===255||p===254){r--;break}if(p&128){const x=p&127;for(let I=0;I<o.length;I++){const B=o[I],w=e.oppositeFaceColors[B.mapFace(n.faces[f]).index],C=e.faceColors[B.mapFace(n.faces[x]).index];w===C&&(l[u++]=B)}}else{const x=p;for(let I=0;I<o.length;I++){const B=o[I],w=e.faceColors[B.mapFace(n.faces[f]).index],C=e.faceColors[B.mapFace(n.faces[x]).index];w===C&&(l[u++]=B)}}if(l.length=u,u===0)return l;const m=o;o=l,l=m,u=0}}else{const f=i.featureMatchers[h];for(let m=0;m<o.length;m++){const x=o[m];f(e,x)===R.MATCH&&(l[u++]=x)}if(l.length=u,u===0)return l;const p=o;o=l,l=p,u=0}}const d=o.map(()=>!1);let c=0;for(;;){const h=this.data[r++];if(h===255)break;if(h===254){const u=this.data[r++];for(F()&&y(u<128);;){const f=this.data[r++];if(f===255||f===254){r--;break}if(f&128){const p=f&127;for(let m=0;m<o.length;m++)if(!d[m]){const x=o[m],I=e.oppositeFaceColors[x.mapFace(n.faces[u]).index],B=e.faceColors[x.mapFace(n.faces[p]).index];I!==B&&(d[m]=!0,c++)}}else{const p=f;for(let m=0;m<o.length;m++)if(!d[m]){const x=o[m],I=e.faceColors[x.mapFace(n.faces[u]).index],B=e.faceColors[x.mapFace(n.faces[p]).index];I!==B&&(d[m]=!0,c++)}}}}else{const u=i.featureMatchers[h];for(let f=0;f<o.length;f++)if(!d[f]){const p=o[f];u(e,p)!==R.MATCH&&(d[f]=!0,c++)}}}return c?o.filter((h,u)=>d[u]):[]}serialize(){return{patternBoards:this.patternBoards.map($),rules:v(this.data.subarray(0,this.nextRuleIndex)),highlander:this.highlander}}static deserialize(t){const e=N(t.rules);if(!e)throw new Error("Failed to decompress rules!");let s=0;const r=[];for(;s<e.length;){r.push(s),F()&&y(e[s]!==254);let a=0;for(;a<2;)F()&&y(s<e.length,"Unexpected end of data"),e[s++]===255&&a++}return new b(t.patternBoards.map(q),e,r,e.length,t.highlander)}static empty(){return new b([],new Uint8Array(0),[],0,!1)}static fromRules(t){const e=t.some(i=>i.highlander),s=E.uniq(t.map(i=>i.patternBoard)),r=[];let a=0;const n=[];for(const i of t)r.push(...i.getBinary(s)),n.push(a),a=r.length;return new b(s,new Uint8Array(r),n,a,e)}}export{b as B,J as H,j as g,K as i};