import{N as w,ar as g,as as p,ai as m,A as y,aj as f,m as d,at as h,G as P,Z as v,T as B,au as L,an as z,aq as A}from"./getCoordinateCluteredMap-xTjLuE-A.js";import{s as b}from"./scanURL-D4Uhtyab.js";const a=localStorage.getItem("opencv-url");a&&b(a);window.assertions.enableAssert();const i=new w,S=new w({renderer:"svg",children:[i]}),T=new g("Button presses: {{count}}"),r=new p({family:"sans-serif",size:25}),t=new m(S,{allowWebGL:!0,allowBackingScaleAntialiasing:!0,allowSceneOverflow:!1,accessibility:!0,backgroundColor:"#eee",assumeFullWindow:!1,listenToOnlyElement:!0}),n=new y(i);t.addInputListener(n);const u=new f(new d(0,0,window.innerWidth,window.innerHeight)),l=new h(0),x=new P({spacing:10,children:[new v("Test",{font:r,listener:()=>{l.value++}}),new B(new L(T,{count:l}),{font:r})]});i.addChild(new z(x,{alignBoundsProperty:u,xAlign:"center",yAlign:"top",margin:20}));t.initializeEvents();let o=!0;const c=()=>{o=!1;const e=new d(0,0,window.innerWidth,window.innerHeight);t.setWidthHeight(e.width,e.height),u.value=e,A.mobileSafari&&window.scrollTo(0,0),n.setTargetBounds(e),n.setPanBounds(e)},s=()=>{o=!0};$(window).resize(s);window.addEventListener("resize",s);window.addEventListener("orientationchange",s);window.visualViewport&&window.visualViewport.addEventListener("resize",s);c();t.updateOnRequestAnimationFrame(e=>{o&&c(),n.step(e)});