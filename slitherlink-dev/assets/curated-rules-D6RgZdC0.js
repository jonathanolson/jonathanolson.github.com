import"./Vector2Property-mpypjo8N.js";import{N as r,D as c,R as p,V as a,F as m,A as g}from"./PhetioControlledVisibilityProperty-C-W8fgEx.js";import{c as f}from"./curatedRules-CY5_xEfM.js";import{p as h}from"./patternBoards-59tNjMFd.js";import{M as w}from"./Theme-D5xBVTq4.js";import{P as u}from"./PatternRuleNode-DxX7gIPZ.js";import"./PatternRule-DfusC3Hu.js";import"./PatternBoardSolver-By-2anvW.js";import"./localStorage-B8VWGy9j.js";import"./PatternNode-BBc8vHgN.js";import"./SpinningIndicatorNode-BFgzh9_P.js";self.assertions.enableAssert();const t=new r,y=new r({renderer:"svg",children:[t]}),n=new c(y,{allowWebGL:!0,allowBackingScaleAntialiasing:!0,allowSceneOverflow:!1});document.body.appendChild(n.domElement);n.setWidthHeight(self.innerWidth,self.innerHeight);console.log("test");(async()=>{const s=new p({fill:"#333"});t.addChild(s);const o=new a({x:10,y:10,align:"left"});t.addChild(o);const l=e=>{o.addChild(new g(e,{margin:5}))},d=f;l(new a({spacing:20,children:d.map(e=>{const i=new u(e,h.get(e.patternBoard));return i.cursor="pointer",i.addInputListener(new m({fire:()=>{w(JSON.stringify(e.serialize())),console.log(JSON.stringify(e.serialize()))}})),i})})),n.setWidthHeight(Math.ceil(t.right+10),Math.ceil(t.bottom+10)),n.initializeEvents(),n.updateOnRequestAnimationFrame(e=>{})})();