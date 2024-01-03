var S=Object.defineProperty;var $=(a,e,t)=>e in a?S(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var d=(a,e,t)=>($(a,typeof e!="symbol"?e+"":e,t),t),C=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var s=(a,e,t)=>(C(a,e,"read from private field"),t?t.call(a):e.get(a)),p=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},D=(a,e,t,o)=>(C(a,e,"write to private field"),o?o.call(a,t):e.set(a,t),t);import{d as B,r as U,h as j,o as v,c as N,b as T,a as L,y as P,U as x,t as V,g as W,V as G}from"./index-pW61h_tb.js";const M={class:"youtube-preview-wrapper"},F=["src"],X=B({__name:"YoutubePreview",emits:["upload"],setup(a,{emit:e}){const t=e,o=U(),r=U("/ffmpeg/1920x1080.mp4");return j(o,()=>{!o||!o.value||(r.value=URL.createObjectURL(o.value),t("upload",o.value))}),(i,l)=>{const c=P;return v(),N("div",M,[T(c,{id:"video-upload",modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=f=>o.value=f),accept:"video/*"},null,8,["modelValue"]),L("video",{src:r.value,controls:"",class:"mt-3"},null,8,F)])}}});var n;(function(a){a.LOAD="LOAD",a.EXEC="EXEC",a.WRITE_FILE="WRITE_FILE",a.READ_FILE="READ_FILE",a.DELETE_FILE="DELETE_FILE",a.RENAME="RENAME",a.CREATE_DIR="CREATE_DIR",a.LIST_DIR="LIST_DIR",a.DELETE_DIR="DELETE_DIR",a.ERROR="ERROR",a.DOWNLOAD="DOWNLOAD",a.PROGRESS="PROGRESS",a.LOG="LOG",a.MOUNT="MOUNT",a.UNMOUNT="UNMOUNT"})(n||(n={}));const z=(()=>{let a=0;return()=>a++})(),H=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),Y=new Error("called FFmpeg.terminate()");var u,R,h,m,_,g,E;class q{constructor(){p(this,u,null);p(this,R,{});p(this,h,{});p(this,m,[]);p(this,_,[]);d(this,"loaded",!1);p(this,g,()=>{s(this,u)&&(s(this,u).onmessage=({data:{id:e,type:t,data:o}})=>{switch(t){case n.LOAD:this.loaded=!0,s(this,R)[e](o);break;case n.MOUNT:case n.UNMOUNT:case n.EXEC:case n.WRITE_FILE:case n.READ_FILE:case n.DELETE_FILE:case n.RENAME:case n.CREATE_DIR:case n.LIST_DIR:case n.DELETE_DIR:s(this,R)[e](o);break;case n.LOG:s(this,m).forEach(r=>r(o));break;case n.PROGRESS:s(this,_).forEach(r=>r(o));break;case n.ERROR:s(this,h)[e](o);break}delete s(this,R)[e],delete s(this,h)[e]})});p(this,E,({type:e,data:t},o=[],r)=>s(this,u)?new Promise((i,l)=>{const c=z();s(this,u)&&s(this,u).postMessage({id:c,type:e,data:t},o),s(this,R)[c]=i,s(this,h)[c]=l,r==null||r.addEventListener("abort",()=>{l(new DOMException(`Message # ${c} was aborted`,"AbortError"))},{once:!0})}):Promise.reject(H));d(this,"load",({classWorkerURL:e,...t}={},{signal:o}={})=>(s(this,u)||(D(this,u,e?new Worker(new URL(e,import.meta.url),{type:"module"}):new Worker(new URL(""+new URL("worker-nzAqrILV.js",import.meta.url).href,import.meta.url),{type:"module"})),s(this,g).call(this)),s(this,E).call(this,{type:n.LOAD,data:t},void 0,o)));d(this,"exec",(e,t=-1,{signal:o}={})=>s(this,E).call(this,{type:n.EXEC,data:{args:e,timeout:t}},void 0,o));d(this,"terminate",()=>{const e=Object.keys(s(this,h));for(const t of e)s(this,h)[t](Y),delete s(this,h)[t],delete s(this,R)[t];s(this,u)&&(s(this,u).terminate(),D(this,u,null),this.loaded=!1)});d(this,"writeFile",(e,t,{signal:o}={})=>{const r=[];return t instanceof Uint8Array&&r.push(t.buffer),s(this,E).call(this,{type:n.WRITE_FILE,data:{path:e,data:t}},r,o)});d(this,"mount",(e,t,o)=>{const r=[];return s(this,E).call(this,{type:n.MOUNT,data:{fsType:e,options:t,mountPoint:o}},r)});d(this,"unmount",e=>{const t=[];return s(this,E).call(this,{type:n.UNMOUNT,data:{mountPoint:e}},t)});d(this,"readFile",(e,t="binary",{signal:o}={})=>s(this,E).call(this,{type:n.READ_FILE,data:{path:e,encoding:t}},void 0,o));d(this,"deleteFile",(e,{signal:t}={})=>s(this,E).call(this,{type:n.DELETE_FILE,data:{path:e}},void 0,t));d(this,"rename",(e,t,{signal:o}={})=>s(this,E).call(this,{type:n.RENAME,data:{oldPath:e,newPath:t}},void 0,o));d(this,"createDir",(e,{signal:t}={})=>s(this,E).call(this,{type:n.CREATE_DIR,data:{path:e}},void 0,t));d(this,"listDir",(e,{signal:t}={})=>s(this,E).call(this,{type:n.LIST_DIR,data:{path:e}},void 0,t));d(this,"deleteDir",(e,{signal:t}={})=>s(this,E).call(this,{type:n.DELETE_DIR,data:{path:e}},void 0,t))}on(e,t){e==="log"?s(this,m).push(t):e==="progress"&&s(this,_).push(t)}off(e,t){e==="log"?D(this,m,s(this,m).filter(o=>o!==t)):e==="progress"&&D(this,_,s(this,_).filter(o=>o!==t))}}u=new WeakMap,R=new WeakMap,h=new WeakMap,m=new WeakMap,_=new WeakMap,g=new WeakMap,E=new WeakMap;const Z=new Error("failed to get response body reader"),J=new Error("failed to complete download"),K="Content-Length",Q=a=>new Promise((e,t)=>{const o=new FileReader;o.onload=()=>{const{result:r}=o;r instanceof ArrayBuffer?e(new Uint8Array(r)):e(new Uint8Array)},o.onerror=r=>{var i,l;t(Error(`File could not be read! Code=${((l=(i=r==null?void 0:r.target)==null?void 0:i.error)==null?void 0:l.code)||-1}`))},o.readAsArrayBuffer(a)}),ee=async a=>{let e;if(typeof a=="string")/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(a)?e=atob(a.split(",")[1]).split("").map(t=>t.charCodeAt(0)):e=await(await fetch(a)).arrayBuffer();else if(a instanceof URL)e=await(await fetch(a)).arrayBuffer();else if(a instanceof File||a instanceof Blob)e=await Q(a);else return new Uint8Array;return new Uint8Array(e)},te=async(a,e)=>{var r;const t=await fetch(a);let o;try{const i=parseInt(t.headers.get(K)||"-1"),l=(r=t.body)==null?void 0:r.getReader();if(!l)throw Z;const c=[];let f=0;for(;;){const{done:w,value:I}=await l.read(),b=I?I.length:0;if(w){if(i!=-1&&i!==f)throw J;e&&e({url:a,total:i,received:f,delta:b,done:w});break}c.push(I),f+=b,e&&e({url:a,total:i,received:f,delta:b,done:w})}const O=new Uint8Array(f);let k=0;for(const w of c)O.set(w,k),k+=w.length;o=O.buffer}catch(i){console.log("failed to send download progress event: ",i),o=await t.arrayBuffer(),e&&e({url:a,total:o.byteLength,received:o.byteLength,delta:0,done:!0})}return o},A=async(a,e,t=!1,o)=>{const r=t?await te(a,o):await(await fetch(a)).arrayBuffer(),i=new Blob([r],{type:e});return URL.createObjectURL(i)},ae={class:"animation-wrapper"},oe=L("h1",null,"動畫製作",-1),se={class:"mt-4"},re={class:"time-bar"},ne=L("br",null,null,-1),ie=["src"],y="https://unpkg.com/@ffmpeg/core-mt@0.12.4/dist/esm",de=B({__name:"Animation",setup(a){const e=new q,t=x(["Click Start to Transcode"]),o=U(),r=async i=>{t.push("start upload"),e.on("log",({type:f,message:O})=>{console.log(`[Animation] on ffmpeg log: ${f}: ${O}`)}),await e.load({coreURL:await A(`${y}/ffmpeg-core.js`,"text/javascript"),wasmURL:await A(`${y}/ffmpeg-core.wasm`,"application/wasm"),workerURL:await A(`${y}/ffmpeg-core.worker.js`,"text/javascript")}),t.push("Start transcoding"),await e.writeFile("test.mp4",await ee(i)),await e.exec(["-stream_loop","-1","-i","test.mp4","-filter:v","fps=5,scale=800:-1:flags=lanczos","-ss","9","-to","13.3","output.webp"]),t.push("Complete transcoding"),console.log("1111");const l=await e.readFile("output.webp");console.log("2222");const c=l;o.value=URL.createObjectURL(new Blob([c],{type:"image/webp"})),console.log(`Array: ${c.length}, ${c.byteLength}`)};return(i,l)=>{const c=G;return v(),N("div",ae,[oe,L("div",se,[T(X,{onUpload:r}),L("div",re,[T(c,{type:"range"})]),ne,L("p",null,V(t),1),o.value?(v(),N("img",{key:0,src:o.value},null,8,ie)):W("",!0)])])}}});export{de as default};
