import{o as e,E as n,B as s,G as p,H as o}from"./patternBoards-CdPs5rJx.js";const d=a=>JSON.stringify({patternBoard:e(a.patternBoard.descriptor),planarPatternMap:n(a.planarPatternMap)}),P=a=>{const r=JSON.parse(a),t=new s(p(r.patternBoard));return{patternBoard:t,planarPatternMap:o(r.planarPatternMap,t)}};export{P as d,d as s};