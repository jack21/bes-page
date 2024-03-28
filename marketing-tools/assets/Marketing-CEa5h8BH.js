import{_ as E,a as M,b as P,c as U,d as R,e as z}from"./CampaignName.vue_vue_type_style_index_0_lang-DxsCseYy.js";import{d as $,u as S,r as v,w as D,c as C,o as u,a as I,b as h,e as _,f as k,g as T,h as x,i as y,j as f,t as g,B as N,C as L,P as H,T as O,k as V,l as W}from"./index-CI3FTn5e.js";import"./download-Bqgg8Ssx.js";import"./delete-outline-Vltenksv.js";import"./store_file-CsI73UJd.js";const j={class:"import-coupon"},q=h("h6",null,"已發送優惠券",-1),J={class:"d-flex mt-2 align-items-center w-100"},K={key:0,class:"hint"},Q=$({__name:"ImportCoupon",setup(b){const t=S(),r=v(0),c=v(0),l=v(0),m=v(0);D(r,(e,n)=>{e===0&&n>0&&t.refreshFilted()});const w=C(()=>r.value>0),d=async()=>{const e=await window.showOpenFilePicker({id:"market-import-coupon-"+t.hashCode(t.campaignName),multiple:!0,types:[{accept:{"text/plain":[".txt"]}}]});r.value=e.length,e.forEach(async n=>{const i=await(await n.getFile()).text();s(i)})},s=e=>{const n=e==null?void 0:e.split(`
`),a=m.value;l.value+=n.length,n.forEach(p=>{const B=p.split("	"),A=B[0],G=B[2].trim(),F=t.phoneNumberUserMap.get(A);F&&(F.couponCode=G,m.value++)});const i=m.value;console.log(`[SmsFile] load ${i-a} Sent Phone Numbers, Total: ${m.value}`),r.value--,c.value++},o=()=>{c.value=0,l.value=0,m.value=0,t.phoneNumberUserMap.forEach(e=>{e.couponCode=void 0}),t.refreshFilted()};return(e,n)=>{const a=N,i=E,p=L;return u(),I("div",j,[q,h("div",J,[_(a,{variant:"outline-primary",size:"sm",onClick:d,disabled:x(t).isUserEmpty},{default:k(()=>[T("匯入")]),_:1},8,["disabled"]),l.value>0&&!w.value?(u(),y(a,{key:0,variant:"outline-primary",size:"sm",class:"remove ms-1",onClick:o},{default:k(()=>[_(i)]),_:1})):f("",!0),w.value?(u(),y(p,{key:1,variant:"primary",class:"ms-1"})):f("",!0)]),c.value>0?(u(),I("small",K,g(c.value)+" 檔案, "+g(l.value)+" 筆記錄, "+g(m.value)+" 有效優惠券",1)):f("",!0)])}}}),X={class:"sms-file-wrapper"},Y=h("h6",null,"TAMI DeviceID (多選)",-1),Z={class:"d-flex mt-2 align-items-center w-100"},ee={key:0,class:"hint"},te=$({__name:"ImportTamiDeviceId",setup(b){const t=S(),r=v(0),c=v(0),l=v(0),m=v(0);D(r,(e,n)=>{e===0&&n>0&&t.refreshFilted()});const w=C(()=>r.value>0),d=async()=>{const e=await window.showOpenFilePicker({id:"market-tami-deviceid-"+t.hashCode(t.campaignName),multiple:!0,types:[{accept:{"text/csv":[".csv"]}}]});!e||e.length===0||(r.value=e.length,e.forEach(async n=>{const i=await(await n.getFile()).text();s(i)}))},s=e=>{const n=e.split(`
`);l.value+=n.length;let a=n.map(i=>{const p=i.split(",");return{subId:p[1],deviceId:p[2]}});a=a.filter(i=>i.deviceId&&i.deviceId!=="00000000-0000-0000-0000-000000000000"),m.value+=a.length,a.forEach(i=>{const p=t.subIdUserMap.get(i.subId);p&&(p.deviceId=i.deviceId)}),console.log(`[SmsFile] load ${a.length}`),r.value--,c.value++},o=()=>{c.value=0,l.value=0,t.phoneNumberSentSet.clear(),t.refreshFilted()};return(e,n)=>{const a=N,i=E,p=L;return u(),I("div",X,[Y,h("div",Z,[_(a,{variant:"outline-primary",size:"sm",onClick:d,disabled:x(t).isUserEmpty},{default:k(()=>[T("匯入")]),_:1},8,["disabled"]),l.value>0&&!w.value?(u(),y(a,{key:0,variant:"outline-primary",size:"sm",class:"remove ms-1",onClick:o},{default:k(()=>[_(i)]),_:1})):f("",!0),w.value?(u(),y(p,{key:1,variant:"primary",class:"ms-1"})):f("",!0)]),c.value>0?(u(),I("small",ee,g(c.value)+" 檔案, "+g(l.value)+" 筆記錄, 有效 "+g(m.value)+" 筆 Device ID ",1)):f("",!0)])}}}),se={class:"ta-file-wrapper"},oe=h("h6",null,"受眾 (BOE 匯出 csv)",-1),ne={class:"d-flex mt-2 align-items-center w-100"},ae={key:0,class:"hint"},ie=$({__name:"ImportTa",setup(b){const t=S(),r=v(0),c=v(0),l=async()=>{(await window.showOpenFilePicker({id:"market-import-ta-"+t.hashCode(t.campaignName),multiple:!0,types:[{accept:{"text/csv":[".csv"]}}]})).forEach(async s=>{const e=await(await s.getFile()).text();m(e)})},m=d=>{H.parse(d,{header:!0,skipEmptyLines:!0,transformHeader:(s,o)=>(console.log(`Header: ${o}`,s),s==="特定用戶名單(TAMI專用)"?"groupName":s.startsWith("Subscr Id")?"subId":s==="台灣大會員編號"?"twmId":(s.startsWith('"')||t.userArgSet.add(s),s)),complete:s=>{if(s.errors.length>0){alert("Parse Error");return}console.log(`[TaFile] add ${s.data.length} Users begin`),c.value+=s.data.length;for(let o=0;o<s.data.length;o++){const e=s.data[o],n={};t.userArgSet.forEach(a=>{n[a]=e[a]}),e.twmId||(e.twmId=e.subId),t.addUser(e.twmId,e.subId,void 0,n)}console.log(`[TaFile] add ${s.data.length} Users Complete`),t.groupList.push(...w(s.data)),r.value+=t.groupList.length,console.log(`[TaFile] complete ${t.groupList.length} TaGroup`)}})},w=d=>{const s=new Map;return d.forEach(o=>{let e;s.has(o.groupName)?e=s.get(o.groupName):(e=new O(o.groupName),s.set(o.groupName,e)),e==null||e.addTwmId(o.twmId)}),Array.from(s.values())};return(d,s)=>{const o=N;return u(),I("div",se,[oe,h("div",ne,[_(o,{variant:"outline-primary",size:"sm",onClick:l},{default:k(()=>[T("匯入")]),_:1})]),c.value>0?(u(),I("small",ae," 載入 "+g(r.value)+" 群, "+g(c.value)+" 筆記錄, "+g(x(t).userArgSet.size)+" 參數 ",1)):f("",!0)])}}}),ce={class:"marketing"},re=h("h1",null,"行銷管理小平台",-1),le={class:"main"},ue={class:"title-wrapper section"},pe={class:"file-wrapper"},me={key:0,class:"main-wrapper section"},ge=$({__name:"Marketing",setup(b){const t=S(),r=V();W(async()=>{await r.initDB()});const c=C(()=>t.groupList&&t.groupList.length>0),l=C(()=>t.smsGroupList&&t.smsGroupList.length>0);return(m,w)=>{const d=M,s=ie,o=P,e=U,n=te,a=Q,i=R,p=z;return u(),I("div",ce,[re,h("div",le,[h("section",ue,[_(d)]),h("section",pe,[_(s,{class:"section"}),_(o,{class:"section"}),_(e,{class:"section"}),_(n,{class:"section"}),_(a,{class:"section"})]),c.value||l.value?(u(),I("section",me,[c.value?(u(),y(i,{key:0})):f("",!0),l.value?(u(),y(p,{key:1})):f("",!0)])):f("",!0)])])}}});export{ge as default};