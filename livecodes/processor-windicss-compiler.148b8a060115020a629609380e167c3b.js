"use strict";(()=>{var m=(a,o)=>({...o.customSettings[a]});self.createWindicssCompiler=()=>async(a,{config:o,options:y})=>{let l=`<template>${y.html}
<script>${o.script.content}<\/script></template>`,n=m("windicss",o),{Processor:f,HTMLParser:b,CSSParser:h}=self.windicss,r=new f;r.loadConfig(n);let p=new b(l),i;if(n.attributify){let s=e=>Array.isArray(e)?e:[e],c=p.parseAttrs().reduceRight((e,u)=>{let t=u.key;if(t==="class"||t==="className")return e;let g=s(u.value);if(t in e){let C=s(e[t]);e[t]=[...C,...g]}else e[t]=g;return e},{});i=r.attributify(c).styleSheet}else{let s=p.parseClasses().map(c=>c.result).join(" ");i=r.interpret(s).styleSheet}let x=n.preflight!==!1,w=n.preflight!==!1,v=n.preflight!==!1,T=r.preflight(l,x,w,v),E=new h(a,r).parse(),d=!0;return E.extend(T,!d).extend(i,d).build(!1)};})();
