import"./UnivariatePolynomial-B1fo8xe7.js";import{N as r,D as c,R as p,V as a,F as m,d as g}from"./PhetioControlledVisibilityProperty-C4xreNPS.js";import{P as f}from"./PatternRuleNode-DtVtA1K1.js";import{L as h}from"./Theme-D414G__S.js";import{p as w}from"./patternBoards-D316jvfQ.js";import{c as u}from"./curatedRules-CDzQ6Oga.js";import"./PatternNode-D6_iUgkx.js";import"./PatternRule-CbsljjHG.js";import"./PatternBoardSolver-JIwhRtt1.js";import"./SpinningIndicatorNode-DOFXt6Ex.js";import"./TextPushButton-gLDghw4s.js";self.assertions.enableAssert();const t=new r,y=new r({renderer:"svg",children:[t]}),n=new c(y,{allowWebGL:!0,allowBackingScaleAntialiasing:!0,allowSceneOverflow:!1});document.body.appendChild(n.domElement);n.setWidthHeight(self.innerWidth,self.innerHeight);console.log("test");(async()=>{const s=new p({fill:"#333"});t.addChild(s);const o=new a({x:10,y:10,align:"left"});t.addChild(o);const d=e=>{o.addChild(new g(e,{margin:5}))},l=u;d(new a({spacing:20,children:l.map(e=>{const i=new f(e,w.get(e.patternBoard));return i.cursor="pointer",i.addInputListener(new m({fire:()=>{h(JSON.stringify(e.serialize())),console.log(JSON.stringify(e.serialize()))}})),i})})),n.setWidthHeight(Math.ceil(t.right+10),Math.ceil(t.bottom+10)),n.initializeEvents(),n.updateOnRequestAnimationFrame(e=>{})})();