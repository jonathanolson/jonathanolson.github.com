let e=null,l=0;const s=()=>{if(e&&(l++,l>5)){const n=e;e=null,n(null)}},u=async function(n){return new Promise((o,t)=>{e=o,l=0,setTimeout(()=>{e===o&&(e=null,o(null))},n)})};export{u as s,s as w};
