"use strict";(()=>{var s=e=>{function t(n){return typeof HTMLElement=="object"?n instanceof HTMLElement:n&&typeof n=="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}function r(n){return typeof Node=="object"?n instanceof Node:n&&typeof n=="object"&&typeof n.nodeType=="number"&&typeof n.nodeName=="string"}function o(n){return n instanceof NodeList}function a(n){return n instanceof HTMLCollection}function f(n){return Object.prototype.toString.call(n)==="[object HTMLDocument]"}function w(n){return Object.prototype.toString.call(n)==="[object Window]"}let c=Object.prototype.toString.call(e);if(e===void 0)return"undefined";if(e===null)return"null";if(w(e))return"window";if(f(e))return"document";if(t(e))return"element";if(r(e))return"node";if(o(e))return"nodelist";if(a(e))return"htmlcollection";if(e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))return"buffer";if(typeof window=="object"&&e===window)return"window";if(typeof global=="object"&&e===global)return"global";if(typeof e=="number"&&isNaN(e)||typeof e=="object"&&c==="[object Number]"&&isNaN(e))return"nan";if(typeof e=="object"&&c.substr(-6)==="Event]")return"event";if(c.substr(0,12)==="[object HTML")return"element";if(c.substr(0,12)==="[object Node")return"node";let l=c.match(/\[object\s*([^\]]+)\]/);return l?l[1].toLowerCase():"object"};function i(e){return e.map(t=>{switch(s(t)){case"window":case"function":case"date":case"symbol":return{type:s(t),content:t.toString()};case"document":return{type:s(t),content:t.documentElement.outerHTML};case"element":return{type:s(t),content:t.outerHTML};case"node":return{type:s(t),content:t.textContent};case"nodelist":case"htmlcollection":return{type:s(t),content:[...t].map(o=>i([o])[0].content)};case"array":return{type:s(t),content:t.map(o=>i([o])[0].content)};case"object":case"event":let r={};for(let o in t)r[o]=t[o];return{type:s(t),content:Object.keys(r).reduce((o,a)=>({...o,[a]:i([r[a]])[0].content}),{})};case"error":return{type:s(t),content:t.constructor.name+": "+t.message}}try{return{type:"other",content:structuredClone(t)}}catch{return{type:"other",content:String(t)}}})}var d=()=>{window.console=new Proxy(console,{get(e,t){return function(...r){if(!(t in e)){let o=`Uncaught TypeError: console.${String(t)} is not a function`;e.error(o),parent.postMessage({type:"console",method:"error",args:i([o])},"*");return}e[t](...r),parent.postMessage({type:"console",method:t,args:i(r)},"*")}}}),window.addEventListener("error",e=>{parent.postMessage({type:"console",method:"error",args:i([e.message])},"*")})},u=()=>{window.addEventListener("message",e=>{if(e.data.console){let t=()=>{try{return{type:"console",method:"output",args:i([window.eval(e.data.console)])}}catch(r){return{type:"console",method:"error",args:i([r])}}};parent.postMessage(t(),"*")}})},p=()=>{window.addEventListener("resize",()=>{parent.postMessage({type:"resize",sizes:{width:window.innerWidth,height:window.innerHeight}},"*")})},y=()=>{window.addEventListener("scroll",()=>{parent.postMessage({type:"scroll",position:{x:window.scrollX,y:window.scrollY}},"*")});let e="#livecodes-scroll-position:";if(location.hash.startsWith(e)){let[t,r]=location.hash.replace(e,"").split(",").map(Number);window.addEventListener("DOMContentLoaded",()=>{window.scrollTo({top:r,left:t})})}};window.livecodes=window.livecodes||{},window.livecodes.env!=="development"&&(window.livecodes.env="development",d(),u(),p(),y(),window.addEventListener("message",function(e){if(e.data.styles){let t=document.querySelector("#__livecodes_styles__");if(!t)return;t.innerHTML=e.data.styles}e.data.flush?(document.body.innerHTML="",document.head.innerHTML=""):parent.postMessage({type:"loading",payload:!1},"*")}),window.addEventListener("load",()=>{parent.postMessage({type:"loading",payload:!1},"*")}),window.addEventListener("click",()=>{parent.postMessage({type:"clicked"},"*")}));})();
