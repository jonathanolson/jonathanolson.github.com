import{d as s}from"./compression-L63-wCoo.js";import{d as c,m as i,k as p,H as l}from"./patternBoards-DsO5TEFU.js";import{V as o}from"./UnivariatePolynomial-B7u1WGdr.js";import{C as u,G as m,e as w,f,B as g}from"./BasicPuzzle-A0tzNytz.js";const y=e=>{if(e.type==="BaseBoard"){const t=e.vertices.map(n=>({logicalCoordinates:new o(n.x,n.y),viewCoordinates:new o(n.vx,n.vy)})),r=e.faces.map(n=>({logicalCoordinates:new o(n.x,n.y),vertices:n.vertices.map(a=>t[a])}));return new c(i({vertices:t,faces:r}))}else{if(e.type==="SquareBoard")return new p(e.width,e.height);if(e.type==="HexagonalBoard")return new l(e.radius,e.scale,e.isPointyTop,e.holeRadius);throw new Error("Unknown board")}},D=(e,t)=>{const r=t.type;if(r==="CompleteData")return u.deserializeState(e,t);if(r==="FaceValueData")return m.deserializeState(e,t);if(r==="EdgeData")return w.deserializeState(e,t);if(r==="SimpleRegionData")return f.deserializeState(e,t);throw new Error(`Unknown action type: ${r}, could not deserialize`)},S=e=>{if(e.version!==1)throw new Error(`Unsupported puzzle version: ${e.version}`);const t=y(e.board),r=D(t,e.state);return new g(t,r)},E=e=>{try{const t=JSON.parse(s(e));return S(t)}catch(t){return console.error(t),null}};export{E as p};