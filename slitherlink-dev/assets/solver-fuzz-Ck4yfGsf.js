import{k as w}from"./Vector2Property-CFyCN_2h.js";import{N as F,D as O,B as W}from"./PhetioControlledVisibilityProperty-thEXBwUY.js";import"./TextPushButton-ps8wVt8M.js";import{_ as z,d as E,e as b,S as G,H as L,P as R}from"./patternBoards-DzVBPT7g.js";import{p as q}from"./polygonGenerators-B6WeaZhu.js";import{P as K,a8 as P,ap as T,al as A}from"./DisplayEmbedding-0lYbDpnA.js";import{d as _,E as B,B as j,s as v}from"./BasicPuzzle-DTNX_hiE.js";import{d as I,s as M,M as N,e as J,f as Q}from"./SATSolver-Bo8XdtXN.js";import{s as m,A as C}from"./AnnotationNode-BFIu-f0I.js";import"./Theme-8u5h1Tq8.js";import"./SpinningIndicatorNode-wGbDYIGh.js";import"./PatternRule-B98-ERhf.js";import"./PatternBoardSolver-DIArGw3P.js";class U extends Error{constructor(){super("Interrupted")}}const V=async function(e,l){if(await m(e),l.value)throw new U},X=async(e,l,a)=>{let g=0;for(;g++<100;){const c=_.fromFaces(e,()=>null),n=w.shuffle(e.faces);let r=-1,i=[];const t=s=>{try{return i=M(e,s,{maxIterations:1e4,failOnMultipleSolutions:!0}),i.length}catch(o){if(o instanceof N)return 2;if(o instanceof J)return 0;throw o}};for(const s of n){l&&await V(0,l);let o=w.shuffle(z.range(0,s.edges.length));o[0]===0&&(o=w.shuffle(o));for(const y of o){const d=c.createDelta();if(d.setFaceValue(s,y),r=t(d),r>=1){d.apply(c);break}}if(r===1)break}if(r===1)return I(e,c,i[0])}throw new Error("Failed to generate a puzzle, board might not be solvable")},Y=async(e,l=()=>!0,a,g)=>{const c=e.board,n=e.cleanState.clone(),r=w.shuffle(c.faces),i=t=>{try{return M(c,t,{maxIterations:1e4,failOnMultipleSolutions:!0}),!1}catch(s){if(s instanceof N)return!0;throw s}};E()&&b(!i(n),"Initial state has multiple solutions"),E()&&b(l(c,n.clone()),"Initial state is not easy enough");for(const t of r){if(a&&await V(0,a),n.getFaceValue(t)===null)continue;const o=n.createDelta();o.setFaceValue(t,null),!i(o)&&l(c,o.clone())&&o.apply(n)}return I(e.board,n,e.blackEdges)};self.assertions.enableAssert();const k=new F,Z=new F({renderer:"svg",children:[k]}),S=new O(Z,{allowWebGL:!0,allowBackingScaleAntialiasing:!0,allowSceneOverflow:!1});document.body.appendChild(S.domElement);S.setWidthHeight(self.innerWidth,self.innerHeight);console.log("test");const $=e=>R.get(e,e.defaultParameterValues),x=[new G(10,10),new L(4,1,!0),...q.map($)];(async()=>{let e=null;const l=new W(!1);for(;;){console.log("board loaded");const a=x[Math.floor(Math.random()*x.length)],g=await X(a,l),n=await Y(g,()=>!0,l),r=n.cleanState.clone();n.blackEdges.forEach(d=>r.setEdgeState(d,B.BLACK)),Q(a,r);const i=j.fromSolvedPuzzle(n);e&&e.dispose(),e=new K(i,{scale:30,left:20,top:20}),k.addChild(e),S.updateDisplay(),await m(50);const t=i.stateProperty.value.clone(),s=P(a,t),o=()=>{i.stateProperty.value=t.clone(),S.updateDisplay()};let y=0;for(;!v(t);){if(e.clearAnnotationNodes(),y++>1e5)throw new Error("Solver iteration limit exceeded? Looped?");const d=t.clone(),D=s.clone(d),f=s.nextAction();if(f){console.log(f);const p=new T(a,t,r);e.addAnnotationNode(new C(a,f.annotation,A)),o(),await m(0);try{f.apply(p)}catch(h){console.error(h);debugger;const u=D.nextAction();u&&u.apply(p)}f.apply(t)}else if(!v(t)){const p=P(a,t),h=p.nextAction();if(h)throw e.addAnnotationNode(new C(a,h.annotation,A)),o(),await m(0),new Error("Fresh solver should not have any actions");p.dispose();const u=z.find(z.shuffle(a.edges),H=>t.getEdgeState(H)===B.WHITE);if(E()&&b(u),t.setEdgeState(u,r.getEdgeState(u)),console.log("setting white edge to red/black",u),!s.dirty)throw new Error("Solver should be dirty after setting edge state")}o(),await m(0)}if(!v(t))throw new Error("Solver did not solve the puzzle")}})();