import{g as T,R as x,V as u}from"./Vector2Property-DCXaH-JP.js";import{N as O,P as M}from"./PhetioControlledVisibilityProperty-BRVDbtg_.js";import{_ as S,S as v,L as B,a as E,b as F}from"./getCoordinateClusteredMap-DCjAm76-.js";import{D as A,l as D,U as H}from"./standardSolverFactory-DvvOIRLV.js";import{c as N}from"./Theme-CvstiQLg.js";import{C as I}from"./BasicPuzzle-Bfe5BzDw.js";import{S as b,g as q,s as C,T as P,V as G}from"./SATSolver-t5tsio6h.js";import{p as W,a as j,b as U,c as X,d as Y,e as J,g as c,r as L,f as Q,s as _,t as $,h as z,i as K,j as Z,k as ee,l as se,m as le,n as re,o as te,q as ae,u as ie,v as ge,w as de,x as ce,y as pe,z as oe,A as ue,B as he}from"./getPeriodicTilingGenerator-o-Elo7dg.js";class Me extends O{constructor(g,e,p,i=null){let l;const h=s=>new v().moveToPoint(s.start.viewCoordinates).lineToPoint(s.end.viewCoordinates).getStrokedShape(new B({lineWidth:.2,lineCap:"round"})).getStrokedShape(new B({lineWidth:.02})),r=(s,t)=>new M(h(s),{fill:t}),f=[];if(e.type==="ForcedLine")l=[r(e.whiteEdge,"red"),r(e.blackEdge,"blue")];else if(e.type==="AlmostEmptyToRed")l=[r(e.whiteEdge,"red"),...e.redEdges.map(s=>r(s,"blue"))];else if(e.type==="JointToRed")l=[...e.whiteEdges.map(s=>r(s,"red")),...e.blackEdges.map(s=>r(s,"blue"))];else if(e.type==="FaceSatisfied")l=[...e.whiteEdges.map(s=>r(s,"red")),...e.blackEdges.map(s=>r(s,"blue"))];else if(e.type==="FaceAntiSatisfied")l=[...e.whiteEdges.map(s=>r(s,"red")),...e.redEdges.map(s=>r(s,"blue"))];else if(e.type==="ForcedSolveLoop")l=[...e.regionEdges.map(s=>r(s,"blue")),...e.pathEdges.map(s=>r(s,"red"))];else if(e.type==="PrematureForcedLoop")l=[...e.regionEdges.map(s=>r(s,"blue")),...e.pathEdges.map(s=>r(s,"red"))];else if(e.type==="CompletingEdgesAfterSolve")l=[...e.whiteEdges.map(s=>r(s,"red"))];else if(e.type==="FaceColoringBlackEdge")l=[r(e.edge,"red")];else if(e.type==="FaceColoringRedEdge")l=[r(e.edge,"red")];else if(e.type==="FaceColorToBlack")l=[r(e.edge,"red")];else if(e.type==="FaceColorToRed")l=[r(e.edge,"red")];else if(e.type==="FaceColorNoTrivialLoop")l=[...e.face.edges.map(s=>r(s,"red"))];else if(e.type==="FaceColorMatchToRed"||e.type==="FaceColorMatchToBlack"||e.type==="FaceColorBalance")l=[...e.balancedPairs.flatMap((s,t)=>{const a=["green","blue","black"][t%3],o=["magenta","orange","yellow"][t%3];return[...s[0].map(n=>r(n,a)),...s[1].map(n=>r(n,o))]})],e.type==="FaceColorMatchToRed"?l.push(...e.matchingEdges.map(s=>r(s,"red"))):e.type==="FaceColorMatchToBlack"?l.push(...e.matchingEdges.map(s=>r(s,"red"))):e.type==="FaceColorBalance"&&(l.push(...e.matchingEdges.map(s=>r(s,"orange"))),l.push(...e.oppositeEdges.map(s=>r(s,"red"))));else if(e.type==="DoubleMinusOneFaces")l=[...e.toBlackEdges.map(s=>r(s,"red")),...e.toRedEdges.map(s=>r(s,"red"))];else if(e.type==="SingleEdgeToSector"||e.type==="DoubleEdgeToSector")l=[e.sector.edge,e.sector.next.edge].map(s=>r(s,"red"));else if(e.type==="ForcedSector"){const s=[...e.toRedEdges,...e.toBlackEdges];l=[e.sector.edge,e.sector.next.edge].map(t=>r(t,s.includes(t)?"red":"blue"))}else if(e.type==="StaticFaceSectors")l=S.uniq(e.sectors.flatMap(s=>[s.edge,s.next.edge])).map(s=>r(s,"red"));else if(e.type==="VertexState")l=e.vertex.edges.map(s=>r(s,"blue"));else if(e.type==="VertexStateToEdge")l=[...e.toBlackEdges.map(s=>r(s,"red")),...e.toRedEdges.map(s=>r(s,"red"))];else if(e.type==="VertexStateToSector")l=S.uniq(e.sectors.flatMap(s=>[s.edge,s.next.edge])).map(s=>r(s,"red"));else if(e.type==="VertexStateToSameFaceColor"||e.type==="VertexStateToOppositeFaceColor")l=S.uniq([...e.facesA,...e.facesB].flatMap(s=>s.edges)).map(s=>r(s,"red"));else if(e.type==="FaceState")l=e.face.edges.map(s=>r(s,"red"));else if(e.type==="FaceStateToEdge")l=[...e.toBlackEdges.map(s=>r(s,"red")),...e.toRedEdges.map(s=>r(s,"red"))];else if(e.type==="FaceStateToSector")l=S.uniq(e.sectors.flatMap(s=>[s.edge,s.next.edge])).map(s=>r(s,"red"));else if(e.type==="FaceStateToSameFaceColor"||e.type==="FaceStateToOppositeFaceColor"){const s=new Set([...e.facesA,...e.facesB].flatMap(a=>a.edges)),t=e.face.edges.filter(a=>!s.has(a));l=[...[...s].map(a=>r(a,"red")),...t.map(a=>r(a,"blue"))]}else if(e.type==="FaceStateToVertexState")l=e.face.edges.filter(t=>e.vertices.includes(t.start)||e.vertices.includes(t.end)).map(t=>r(t,"red"));else if(e.type==="Pattern"){if(l=[],i){const s=A.getDisplayEmbedding(e.rule.patternBoard,e.boardPatternBoard,e.boardPatternBoard.board,e.embedding),t=.5+.05,a=.15,o=s.expandedBounds.top+a-(i.top+t),n=i.bottom-t-(s.expandedBounds.bottom-a),m=new D(e.rule,s,{maxWidth:i.width-2*t,maxHeight:Math.max(o,n)});o>n?m.centerBottom=s.expandedBounds.centerTop.plusXY(0,-a):m.centerTop=s.expandedBounds.centerBottom.plusXY(0,a),m.left<i.left+t&&(m.left=i.left+t),m.right>i.right-t&&(m.right=i.right-t);const y=s.tightBounds.dilated(.2),R=.1;l.push(new M(v.roundRectangle(y.x,y.y,y.width,y.height,R,R),{stroke:N.uiButtonBaseColorProperty,lineWidth:.04})),l.push(m)}}else l=[],console.log(`unknown type: ${e.type}`);super({children:l,pickable:!1}),this.board=g,this.annotation=e,this.style=p,this.disposeEmitter.addListener(()=>f.forEach(s=>s()))}static getHintNode(g){return new H(g.type)}}let w=null,k=0;const ve=()=>{if(w&&(k++,k>5)){const d=w;w=null,d(null)}},fe=async function(d){return new Promise((g,e)=>{w=g,k=0,b.debugSleep&&console.log("sleep start"),setTimeout(()=>{b.debugSleep&&console.log("sleep end"),w===g&&(w=null,g(null)),b.debugSleep&&console.log("resolved")},d)})};class me extends Error{constructor(){super("Interrupted")}}const V=async function(d,g){if(await fe(d),b.debugSleep&&console.log("after sleep before interrupt check"),g.value)throw new me},Be=async(d,g,e)=>{let p=0;for(;p++<100;){const i=I.fromFaces(d,()=>null),l=T.shuffle(d.faces);let h=-1,r=[];const f=s=>{try{return r=C(d,s,{maxIterations:1e4,failOnMultipleSolutions:!0}),r.length}catch(t){if(t instanceof P)return 2;if(t instanceof G)return 0;throw t}};for(const s of l){b.debugSleep&&console.log("going to sleep"),g&&await V(0,g),b.debugSleep&&console.log("finished sleep, generating next!");let t=T.shuffle(S.range(0,s.edges.length));t[0]===0&&(t=T.shuffle(t));for(const a of t){const o=i.createDelta();if(o.setFaceValue(s,a),h=f(o),h>=1){o.apply(i),e&&e.emit(d.faces.indexOf(s),a);break}}if(h===1)break}if(h===1)return q(d,i,r[0])}throw new Error("Failed to generate a puzzle, board might not be solvable")},qe=async(d,g=()=>!0,e,p)=>{const i=d.board,l=d.cleanState.clone(),h=T.shuffle(i.faces),r=f=>{try{return C(i,f,{maxIterations:1e4,failOnMultipleSolutions:!0}),!1}catch(s){if(s instanceof P)return!0;throw s}};E()&&F(!r(l),"Initial state has multiple solutions"),E()&&F(g(i,l.clone()),"Initial state is not easy enough");for(const f of h){e&&await V(0,e);const s=l.getFaceValue(f);if(s===null){p&&p.emit(i.faces.indexOf(f),null);continue}const t=l.createDelta();t.setFaceValue(f,null),!r(t)&&g(i,t.clone())?(t.apply(l),p&&p.emit(i.faces.indexOf(f),null)):p&&p.emit(i.faces.indexOf(f),s)}return q(d.board,l,d.blackEdges)},ne={name:"Square",parameters:{width:{label:"Width",type:"integer",range:new x(2,50)},height:{label:"Height",type:"integer",range:new x(2,50)}},defaultParameterValues:{width:6,height:10},generate:d=>{const g=d.width,e=d.height;return S.range(0,e).flatMap(p=>S.range(0,g).map(i=>[new u(i,p),new u(i+1,p),new u(i+1,p+1),new u(i,p+1)]))}},Se={name:"Hexagonal",parameters:{radius:{label:"Radius",type:"integer",range:new x(1,30)},isPointyTop:{label:"Pointy Top",type:"boolean"},holeRadius:{label:"Hole Radius",type:"integer",range:new x(0,25),advanced:!0}},defaultParameterValues:{radius:4,isPointyTop:!0,holeRadius:0},generate:d=>{const g=d.radius,e=d.isPointyTop,p=d.holeRadius;let i,l;e?(i=new u(Math.sqrt(3),0),l=new u(Math.sqrt(3)/2,3/2)):(i=new u(3/2,Math.sqrt(3)/2),l=new u(0,Math.sqrt(3)));const h=[new u(1,0),new u(1,-1),new u(0,-1),new u(-1,0),new u(-1,1),new u(0,1)],r=S.range(0,6).map(a=>h[a].plus(h[(a+1)%6])),f=a=>r.map(o=>o.plus(a.timesScalar(3))),s=(a,o)=>(Math.abs(a.x-o.x)+Math.abs(a.x+a.y-o.x-o.y)+Math.abs(a.y-o.y))/2,t=[];for(let a=-g;a<=g;a++)for(let o=Math.max(-g,-a-g);o<=Math.min(g,-a+g);o++){const n=new u(a,o);s(n,new u(0,0))>=p&&t.push(f(n).map(m=>i.timesScalar(m.x).plus(l.timesScalar(m.y)).timesScalar(1/3)))}return t}},be={name:"Penrose",parameters:{radius:{label:"Radius",type:"choice",choices:[{value:"6",label:"6"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"20",label:"20"}]}},defaultParameterValues:{radius:"6"},generate:d=>{const g={6:W,10:j,11:U,13:X,14:Y,20:J}[d.radius];E()&&F(g);const e=.01,p=g.thinShape.subpaths.filter(l=>l.segments.length).map(l=>l.points.slice(0,-1).map(h=>h.timesScalar(e)));return[...g.thickShape.subpaths.filter(l=>l.segments.length).map(l=>l.points.slice(0,-1).map(h=>h.timesScalar(e))),...p]}},Ce=[ne,c(L,{width:8,height:8}),Se,c(Q,{width:8,height:8,squareRegion:!0}),c(_,{width:5,height:6,squareRegion:!0}),c($,{width:6,height:5}),c(z,{width:9,height:9}),c(K,{width:9,height:9}),c(Z,{width:7,height:8}),c(ee),c(se),c(le),c(re,{squareRegion:!0}),c(te),c(ae),c(ie,{width:9,height:9}),c(ge),c(de,{width:9,height:9}),c(ce),c(pe),c(oe,{width:6,height:8,squareRegion:!0}),c(ue),c(he),be];export{Me as A,qe as a,Be as g,V as i,Ce as p,fe as s,ve as w};