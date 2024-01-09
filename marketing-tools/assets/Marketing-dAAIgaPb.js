import{_ as N,a as B,b as E,c as M,d as A,e as V}from"./CampaignName.vue_vue_type_style_index_0_lang-UMcfvufh.js";import{d as $,u as y,r as L,o as _,c as g,a as u,b as r,w as I,e as P,t as k,f as R,g as v,P as U,T as F,p as G,h as D,S as z,i as H,y as j,j as O,k as W,l as b,m as x}from"./index-Oq4y4SQt.js";import{_ as J}from"./export-TyQYsAMS.js";import"./download-W-RCzVwd.js";import"./delete-outline-XLZSpg-F.js";const q={class:"ta-file-wrapper"},K=u("label",{for:"ta-file"},"受眾 (BOE 匯出 csv)",-1),Q={class:"d-flex mt-2 align-items-center w-100"},X={key:0,class:"hint"},Y=$({__name:"ImportTa",setup(S){const s=y(),c=L(0),p=L(0),d=async()=>{(await window.showOpenFilePicker({id:"marketing-import-ta-"+s.hashCode(s.campaignName),multiple:!0,types:[{accept:{"text/csv":[".csv"]}}]})).forEach(async t=>{const o=await(await t.getFile()).text();f(o)})},f=n=>{U.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:(t,e)=>(console.log(`Header: ${e}`,t),t==="特定用戶名單(TAMI專用)"?"groupName":t.startsWith("Subscr Id")?"subId":t==="台灣大會員編號"?"twmId":(t.startsWith('"')||s.userArgSet.add(t),t)),complete:t=>{if(t.errors.length>0){alert("Parse Error");return}console.log(`[TaFile] add ${t.data.length} Users begin`),p.value+=t.data.length;for(let e=0;e<t.data.length;e++){const o=t.data[e],i={};s.userArgSet.forEach(l=>{i[l]=o[l]}),s.addUser(o.twmId,o.subId,void 0,i)}console.log(`[TaFile] add ${t.data.length} Users Complete`),s.groupList.push(...h(t.data)),c.value+=s.groupList.length,console.log(`[TaFile] complete ${s.groupList.length} TaGroup`)}})},h=n=>{const t=new Map;return n.forEach(e=>{let o;t.has(e.groupName)?o=t.get(e.groupName):(o=new F(e.groupName),t.set(e.groupName,o)),o==null||o.addTwmId(e.twmId)}),Array.from(t.values())};return(n,t)=>{const e=G;return _(),g("div",q,[K,u("div",Q,[r(e,{variant:"outline-primary",size:"sm",onClick:d},{default:I(()=>[P("匯入")]),_:1})]),p.value>0?(_(),g("small",X," 載入 "+k(c.value)+" 群, "+k(p.value)+" 筆記錄, "+k(R(s).userArgSet.size)+" 參數 ",1)):v("",!0)])}}}),Z={class:"campaign-config-wrapper"},tt=u("span",null,"匯出設定檔",-1),et=u("span",null,"匯入設定檔",-1),st=$({__name:"MarketingConfigFile",setup(S){const s=y(),c=L(),p=L(null);D(c,()=>{c.value&&d(c.value)});const d=n=>{const t=new FileReader;t.onload=function(e){var T;const o=(T=e.target)==null?void 0:T.result,i=JSON.parse(o);s.campaignName=i.name;const l=new Map;i.groupList.forEach(a=>l.set(a.name,a)),s.groupList.length=0,i.taGroupNameList.forEach(a=>{const m=l.get(a);m&&s.groupList.push(new F(m.name,m.twmIdList))}),s.smsGroupList.length=0,i.smsGroupNameList.forEach(a=>{const m=l.get(a);if(m){const C=new z(m.name,m.twmIdList);C.smsTwmIdList=m.smsTwmIdList.slice(0),s.smsGroupList.push(C)}}),i.userInfoList.slice(0).forEach(a=>{a.subId&&a.subId.length>0&&s.subIdUserMap.set(a.subId,a),a.twmId&&a.twmId.length>0&&s.twmIdUserMap.set(a.twmId,a)}),s.refreshFilted()},t.readAsText(n)},f=async()=>{var n;[n]=await window.showOpenFilePicker({multiple:!0,types:[{description:"Images",accept:{"image/*":[".png",".gif",".jpeg",".jpg"]}}]}),console.log(n);const t=await n.getFile();console.log(t);const e=await t.text();console.log(e)},h=async()=>{const e=`http://bizsms.taiwanmobile.com:18994/send.cgi?username=VCST011400&password=7499639952&rateplan=A&srcaddr=8708246&dstaddr=0932087196&smbody=${encodeURI(`⏰台灣大%field1%資費用戶
符合您59折資格4h後結束！日本麗克特三明治機送18道食譜及環保袋https://twm5g.co/eoDP`)}`,{data:o}=await H.get(e);console.log(o)};return(n,t)=>{const e=J,o=G,i=N,l=j;return _(),g("div",Z,[r(o,{variant:"outline-primary",size:"sm",onClick:h,class:"ms-1"},{default:I(()=>[r(e),tt]),_:1}),r(o,{variant:"outline-primary",size:"sm",onClick:f,class:"ms-1"},{default:I(()=>[r(i),et]),_:1}),r(l,{ref_key:"configFileRef",ref:p,id:"import-campaign-config",modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=w=>c.value=w),accept:"application/json"},null,8,["modelValue"])])}}}),ot={class:"marketing"},nt=u("h1",null,"行銷管理小平台",-1),at={class:"main"},it={class:"title-wrapper section"},rt={class:"file-wrapper"},ct={key:0,class:"main-wrapper section"},dt=$({__name:"Marketing",setup(S){const s=y(),c=O();W(async()=>{await c.initDB()});const p=b(()=>s.groupList&&s.groupList.length>0),d=b(()=>s.smsGroupList&&s.smsGroupList.length>0);return(f,h)=>{const n=B,t=st,e=Y,o=E,i=M,l=A,w=V;return _(),g("div",ot,[nt,u("div",at,[u("section",it,[r(n),r(t)]),u("section",rt,[r(e,{class:"section"}),r(o,{class:"section"}),r(i,{class:"section"})]),p.value||d.value?(_(),g("section",ct,[p.value?(_(),x(l,{key:0})):v("",!0),d.value?(_(),x(w,{key:1})):v("",!0)])):v("",!0)])])}}});export{dt as default};
