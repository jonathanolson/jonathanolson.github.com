import{o as n}from"./Vector2Property-DCXaH-JP.js";import{N as a,H as s}from"./PhetioControlledVisibilityProperty-BRVDbtg_.js";import"./getCoordinateClusteredMap-DCjAm76-.js";import{P as i}from"./PatternNode-CLzdEy8s.js";import{A as p}from"./ShadedSphereNode-GgOLtD-k.js";import"./TextPushButton-CXcXt4ga.js";class f extends a{constructor(t,e,r){const o=n()({patternNodeOptions:{}},r);o.children=[new s({spacing:10,align:"origin",children:[new i(t.patternBoard,t.inputFeatureSet,e,o.patternNodeOptions),new p(0,0,20,0,{fill:"#ccc",stroke:"#ccc",headHeight:7,headWidth:7,tailWidth:1,layoutOptions:{align:"center"}}),new i(t.patternBoard,t.outputFeatureSet,e,o.patternNodeOptions)]})],super(o),this.rule=t,this.planarPatternMap=e}}export{f as P};