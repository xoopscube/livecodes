"use strict";(()=>{var a=(t,e=!0)=>t.replace(/\\/g,e?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var l=(t,e)=>({...e.customSettings[t]});var d=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],m=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],u=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],i={getModuleUrl:(t,{isModule:e=!0,defaultCDN:o="esm.sh",external:s}={})=>{t=t.replace(/#nobundle/g,"");let r=n=>!s||!n.includes("https://esm.sh")?n:n.includes("?")?`${n}&external=${s}`:`${n}?external=${s}`,c=p(t,e,o);return c?r(c):e?r("https://esm.sh/"+t):"https://cdn.jsdelivr.net/npm/"+t},getUrl:(t,e)=>t.startsWith("http")||t.startsWith("data:")?t:p(t,!1,e||f())||t,cdnLists:{npm:m,module:d,gh:u},checkCDNs:async(t,e)=>{let o=[e,...i.cdnLists.npm].filter(Boolean);for(let s of o)try{if((await fetch(i.getUrl(t,s),{method:"HEAD"})).ok)return s}catch{}return i.cdnLists.npm[0]}},f=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||i.cdnLists.npm[0]}catch{return i.cdnLists.npm[0]}},p=(t,e,o)=>{let s=e&&t.startsWith("unpkg:")?"?module":"";t.startsWith("gh:")?t=t.replace("gh",u[0]):t.includes(":")||(t=(o||(e?d[0]:m[0]))+":"+t);for(let r of h){let[c,n]=r;if(c.test(t))return t.replace(c,n)+s}return null},h=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:x,getModuleUrl:C}=i;var g=x("twig@1.17.1/twig.min.js");self.createTwigCompiler=()=>async(t,{config:e})=>{let o=l("twig",e),s=e.customSettings.template?.data||{};return e.customSettings.template?.prerender!==!1?self.Twig.twig({...o,data:t}).render(s):`<!-- ... compiling ... -->

<script src="${g}"><\/script>
<script>
window.addEventListener("load", () => {
const template = Twig.twig({
...${a(JSON.stringify(o))},
data:\`${a(t)}\`
});
const content = template.render({
...${a(JSON.stringify(s||{}))},
...window.livecodes?.templateData,
});
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'twig', content}}, '*');
});
<\/script>
`};})();
