import{U as m,V as F}from"./Theme-8u5h1Tq8.js";import{o as _}from"./Vector2Property-CFyCN_2h.js";import{N as L,S as l,P as f,C as M,T as y}from"./PhetioControlledVisibilityProperty-thEXBwUY.js";import{d as $,e as B,g as A}from"./patternBoards-DzVBPT7g.js";import{e as ee,c as I,d as R,b as oe,S as V,a as Q,B as O,R as Z}from"./PatternRule-B98-ERhf.js";class le extends L{constructor(c,P,n,X){const w=_()({showQuestionMarks:!0,labels:!1},X),h=P.getFeaturesArray();$()&&B(n,"planarPatternMap should be defined");const i=new L({scale:30}),W=new l;c.faces.forEach(e=>{if(e.isExit&&e.edges.length<2)return;const o=n.faceMap.get(e);W.polygon(o)}),i.addChild(new f(W,{fill:"#000"}));const g=[255,160,20,96,70,230,0],D=g.map(()=>new l),H=g.map(()=>new l);h.filter(e=>e instanceof ee).forEach((e,o)=>{e.primaryFaces.forEach(t=>{const s=n.faceMap.get(t);D[o%g.length].polygon(s)}),e.secondaryFaces.forEach(t=>{const s=n.faceMap.get(t);H[o%g.length].polygon(s)})}),D.forEach((e,o)=>{e.bounds.isFinite()&&i.addChild(new f(e,{fill:m.faceColorLightHueLUTProperty.value[g[o]]}))}),H.forEach((e,o)=>{e.bounds.isFinite()&&i.addChild(new f(e,{fill:m.faceColorDarkHueLUTProperty.value[g[o]]}))}),c.sectors.forEach(e=>{const o=h.filter(t=>(t instanceof I||t instanceof R||t instanceof oe||t instanceof V)&&t.sector===e);if(o.length){const t=o.some(E=>E instanceof V),s=o.some(E=>E instanceof I),r=o.some(E=>E instanceof R),a=t,p=s,U=!a&&r,Y=!a&&!p,j=!a&&!U,q=a?m.sectorOnlyOneColorProperty:p?m.sectorNotOneColorProperty:U?m.sectorNotTwoColorProperty:m.sectorNotZeroColorProperty,k=n.sectorMap.get(e),G=k[0],d=k[1],J=k[2],z=G.minus(d),K=J.minus(d),b=z.normalized(),C=z.angle;let x=K.angle;x<C&&(x+=2*Math.PI);let N;const u=.25;j?N=new l().moveToPoint(b.timesScalar(u-.03).plus(d)).arcPoint(d,u-.03,C,x,!0).moveToPoint(b.timesScalar(u+.03).plus(d)).arcPoint(d,u+.03,C,x,!0).makeImmutable():N=new l().moveToPoint(b.timesScalar(u).plus(d)).arcPoint(d,u,C,x,!0).makeImmutable(),i.addChild(new f(N,{stroke:q,lineWidth:.02,lineDash:Y?[.03,.03]:[]}))}});const S=new l;c.edges.forEach(e=>{if(e.isExit)return;const o=n.edgeMap.get(e);S.moveToPoint(o[0]),S.lineToPoint(o[1])}),i.addChild(new f(S,{stroke:"rgba(255,255,255,0.2)",lineWidth:.01})),c.vertices.forEach(e=>{const o=e.isExit;i.addChild(new M(o?.06:.04,{center:n.vertexMap.get(e),lineWidth:.02,stroke:"rgba(255,255,255,0.2)",fill:o?"#222":"rgba(255,255,255,0.2)"}))}),c.faces.forEach(e=>{if(e.isExit){const o=h.find(t=>t instanceof Q&&t.face===e)??null;if(o&&o.value===null){const t=n.faceMap.get(e),s=l.polygon(t);i.addChild(new f(s,{stroke:"#666",lineWidth:.05,lineDash:[.05,.05]}))}}else{const o=h.find(t=>t instanceof Q&&t.face===e)??null;if(!o||o.value!==null){const t=o?o.value.toString():w.showQuestionMarks?"?":"";if(t.length){const s=n.faceMap.get(e),r=A(s),a=new y(t,{font:F,centerX:r.x,centerY:r.y,fill:o?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.2)",maxWidth:.9,maxHeight:.9});i.addChild(a)}}}}),c.edges.forEach(e=>{if(e.isExit){const o=h.filter(s=>(s instanceof O||s instanceof Z)&&s.edge===e),t=e.exitVertex;o.forEach(s=>{const r=s instanceof O;i.addChild(new M(.12,{center:n.vertexMap.get(t),lineWidth:.03,stroke:r?"#000":"#f00"}))})}});const T=new l;c.edges.forEach(e=>{if(!e.isExit&&h.filter(t=>t instanceof Z&&t.edge===e).length){const t=n.edgeMap.get(e);T.moveToPoint(t[0]),T.lineToPoint(t[1])}}),i.addChild(new f(T,{stroke:"#f00",lineWidth:.05,lineCap:"round"}));const v=new l;c.edges.forEach(e=>{if(!e.isExit&&h.filter(t=>t instanceof O&&t.edge===e).length){const t=n.edgeMap.get(e);v.moveToPoint(t[0]),v.lineToPoint(t[1])}}),i.addChild(new f(v,{stroke:"#fff",lineWidth:.1,lineCap:"round"})),w.labels&&(c.edges.forEach(e=>{if(!e.isExit){const o=n.edgeMap.get(e),t=o[0].average(o[1]);i.addChild(new y(e.index,{font:F,center:t,fill:"#fa0",maxWidth:.4,maxHeight:.4}))}}),c.faces.forEach(e=>{const o=e.isExit,t=n.faceMap.get(e);let s=A(t);if(o){const r=s.minus(e.edges[0].vertices.map(a=>n.vertexMap.get(a)).reduce((a,p)=>a.plus(p)).timesScalar(.5));s=s.plus(r.timesScalar(1.5))}i.addChild(new y(e.index,{font:F,center:s,fill:o?"#0ff":"#0f0",maxWidth:.4,maxHeight:.4}))}),c.vertices.forEach(e=>{const o=n.vertexMap.get(e);i.addChild(new y(e.index,{font:F,center:o,fill:"#fff",maxWidth:.4,maxHeight:.4}))})),w.children=[i],super(w),this.patternBoard=c,this.featureSet=P,this.planarPatternMap=n}}export{le as P};