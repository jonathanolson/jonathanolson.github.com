import"./UnivariatePolynomial-B1fo8xe7.js";import{N as c,D as d}from"./PhetioControlledVisibilityProperty-C4xreNPS.js";import{s as z}from"./patternBoards-D316jvfQ.js";import{B as n}from"./BinaryRuleCollection-CEs3YSsv.js";import{B as r}from"./BinaryRuleSequence-Cx1D9IlE.js";import{s as C,i as s}from"./PatternRule-CbsljjHG.js";import{B as m}from"./BinaryMixedRuleGroup-BHPHI_4n.js";import"./compression-L63-wCoo.js";import"./Highlander-XyUc4N_h.js";import"./PatternBoardSolver-JIwhRtt1.js";import"./generalPatternBoardGenerations-DjU58nWO.js";import"./RichSolution-BE9o6Zv_.js";const f=new c,g=new c({renderer:"svg",children:[f]}),a=new d(g,{allowWebGL:!0,allowBackingScaleAntialiasing:!0,allowSceneOverflow:!1});document.body.appendChild(a.domElement);a.setWidthHeight(self.innerWidth,self.innerHeight);self.standardSquareBoardGenerations=z;self.getSequenceName=e=>r.getName(e);self.getEmptySequence=e=>r.empty(e).serialize();self.getSequenceStatus=e=>r.deserialize(e).getStatusString();self.getNextBoardInSequence=e=>{const o=r.deserialize(e).getNextBoard();return o?C(o):null};self.getSequenceWithProcessingBoard=(e,t)=>{const o=r.deserialize(e),l=s(t);return o.addProcessingBoard(l),o.serialize()};self.getSequenceWithoutProcessingBoard=(e,t)=>{const o=r.deserialize(e),l=s(t);return o.removeProcessingBoard(l),o.serialize()};self.getSequenceWithCollection=(e,t,o)=>{const l=r.deserialize(e),i=s(t),u=n.deserialize(o);return l.addProcessedBoardCollection(i,u),l.serialize()};self.getCollectionForSequence=(e,t)=>{const o=r.deserialize(e),l=s(t);return o.getCollectionForBoard(l).serialize()};self.withCollection=(e,t)=>{const o=n.deserialize(e),l=n.deserialize(t);return o.withCollection(l).serialize()};self.withCollectionNonequal=(e,t)=>{const o=n.deserialize(e),l=n.deserialize(t);return o.withCollectionNonequal(l).serialize()};self.withCollectionNonredundant=(e,t)=>{const o=n.deserialize(e),l=n.deserialize(t);return o.withCollectionNonredundant(l).serialize()};self.withoutCollectionNonequal=(e,t)=>{const o=n.deserialize(e),l=n.deserialize(t);return o.withoutCollectionNonequal(l).serialize()};self.withoutCollectionNonredundant=(e,t)=>{const o=n.deserialize(e),l=n.deserialize(t);return o.withoutCollectionNonredundant(l).serialize()};self.collectionsToSortedMixedGroup=(e,t)=>{const o=e?n.deserialize(e):null,l=t?n.deserialize(t):null;console.log("main count",o?o.size:0),console.log("highlander count",l?l.size:0);const i=m.fromCollections(o,l);return console.log("rule count",i.size),i.sortedDefault().serialize()};