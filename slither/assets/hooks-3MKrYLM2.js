import"./Vector2Property-DCXaH-JP.js";import{N as m,f as S}from"./PhetioControlledVisibilityProperty-BRVDbtg_.js";import{P as g}from"./PatternBoardRuleSet-I--QaYl3.js";import{P as z,s as B,d as w}from"./PatternRule-CrjXMziT.js";import{a as f,b as R,B as s}from"./BinaryRuleCollection-Co2eOjDC.js";import{_ as N}from"./getCoordinateClusteredMap-DCjAm76-.js";import{q as h,t as b}from"./patternBoards-Hmq_9LOt.js";import{B as u}from"./BinaryRuleSequence-QbUJFJaZ.js";import"./FeatureSet-DDOmfIdB.js";import"./FaceColorDualFeature-DKZsSiFX.js";import"./logic-solver-O3GFcRDa.js";import"./getSolutionImpliedRules-FTQqQQkV.js";import"./HighlanderPruner-DdNF9lmw.js";import"./getPeriodicTilingGenerator-o-Elo7dg.js";import"./generalPatternBoardGenerations-Z1YspuhJ.js";class c{constructor(t,e){this.patternBoards=t,this.serializedRules=e}getRules(){const t=[];return this.forEachRule(e=>t.push(e)),t}get size(){return this.serializedRules.length}getRule(t){return z.collectionDeserialize(this.patternBoards,this.serializedRules[t])}forEachRule(t){for(let e=0;e<this.serializedRules.length;e++){const o=z.collectionDeserialize(this.patternBoards,this.serializedRules[e]);t(o)}}addRule(t){this.patternBoards.includes(t.patternBoard)||this.patternBoards.push(t.patternBoard),this.serializedRules.push(t.collectionSerialize(this.patternBoards.indexOf(t.patternBoard)))}addNonredundantRuleSet(t,e=Number.POSITIVE_INFINITY){const o=this.getRules().flatMap(a=>a.getEmbeddedRules(h(a.patternBoard,t.patternBoard)));let r=0,n=0,l=0,d=0;for(const a of t.rules){const p=a.getInputDifficultyScoreA();if(d=Math.max(d,p),t.patternBoard.faces.length>1&&p>e){l++;continue}a.isRedundant(o)||(this.addRule(a),r+=p,n++,o.push(...a.getEmbeddedRules(h(a.patternBoard,t.patternBoard))))}console.log(`added ${n}, skipped ${l} with average score ${Math.round(r/n)}, maxEncounteredScore ${d}`)}combineWith(t){const e=t.getRules();let o=null,r=[];for(let n=0;n<e.length;n++){n%100===0&&console.log(n,e.length);const l=e[n],d=l.patternBoard;d!==o&&(r=this.getRules().flatMap(a=>a.getEmbeddedRules(h(a.patternBoard,d))),o=d),l.isRedundant(r)||(this.addRule(l),r.push(...l.getEmbeddedRules(h(l.patternBoard,d))))}}serialize(){return{patternBoards:this.patternBoards.map(B),rules:f(JSON.stringify(this.serializedRules))}}static deserialize(t){const e=t.patternBoards.map(w),o=R(t.rules);if(o===null)throw console.log(t.rules),new Error("Failed to decompress rules!");{const r=JSON.parse(o);return new c(e,r)}}static empty(){return new c([],[])}static fromRules(t){const e=N.uniq(t.map(r=>r.patternBoard)),o=t.map(r=>r.collectionSerialize(e.indexOf(r.patternBoard)));return new c(e,o)}}const q=new m,E=new m({renderer:"svg",children:[q]}),C=new S(E,{allowWebGL:!0,allowBackingScaleAntialiasing:!0,allowSceneOverflow:!1});document.body.appendChild(C.domElement);C.setWidthHeight(window.innerWidth,window.innerHeight);window.standardSquareBoardGenerations=b;window.getSequenceName=i=>u.getName(i);window.getEmptySequence=i=>u.empty(i).serialize();window.getSequenceStatus=i=>u.deserialize(i).getStatusString();window.getNextBoardInSequence=i=>{const e=u.deserialize(i).getNextBoard();return e?B(e):null};window.getSequenceWithProcessingBoard=(i,t)=>{const e=u.deserialize(i),o=w(t);return e.addProcessingBoard(o),e.serialize()};window.getSequenceWithoutProcessingBoard=(i,t)=>{const e=u.deserialize(i),o=w(t);return e.removeProcessingBoard(o),e.serialize()};window.getSequenceWithCollection=(i,t,e)=>{const o=u.deserialize(i),r=w(t),n=s.deserialize(e);return o.addProcessedBoardCollection(r,n),o.serialize()};window.getCollectionForSequence=(i,t)=>{const e=u.deserialize(i),o=w(t);return e.getCollectionForBoard(o).serialize()};window.withCollection=(i,t)=>{const e=s.deserialize(i),o=s.deserialize(t);return e.withCollection(o).serialize()};window.withCollectionNonequal=(i,t)=>{const e=s.deserialize(i),o=s.deserialize(t);return e.withCollectionNonequal(o).serialize()};window.withCollectionNonredundant=(i,t)=>{const e=s.deserialize(i),o=s.deserialize(t);return e.withCollectionNonredundant(o).serialize()};window.withoutCollectionNonequal=(i,t)=>{const e=s.deserialize(i),o=s.deserialize(t);return e.withoutCollectionNonequal(o).serialize()};window.withoutCollectionNonredundant=(i,t)=>{const e=s.deserialize(i),o=s.deserialize(t);return e.withoutCollectionNonredundant(o).serialize()};window.addRuleSetToCollection=(i,t,e=Number.POSITIVE_INFINITY)=>{try{console.log(`input: ${i.rules.slice(0,20)}...${i.rules.slice(-20)}`);const o=c.deserialize(i),r=g.deserialize(t);o.addNonredundantRuleSet(r,e);const n=o.serialize();if(!c.deserialize(n))throw new Error("Failed to deserialize what we serialized");return console.log(`output: ${n.rules.slice(0,20)}...${n.rules.slice(-20)}`),n}catch(o){throw console.log(`${o} ${o==null?void 0:o.stack}`),o}};window.addRuleSetToBinaryCollection=(i,t,e=Number.POSITIVE_INFINITY)=>{try{const o=s.deserialize(i),r=g.deserialize(t),l=o.withNonredundantRuleSet(r,e).serialize();if(!s.deserialize(l))throw new Error("Failed to deserialize what we serialized");return l}catch(o){throw console.log(`${o} ${o==null?void 0:o.stack}`),o}};window.combineCollections=(i,t)=>{try{const e=c.deserialize(i),o=c.deserialize(t);return e.combineWith(o),e.serialize()}catch(e){throw console.log(`${e} ${e==null?void 0:e.stack}`),e}};