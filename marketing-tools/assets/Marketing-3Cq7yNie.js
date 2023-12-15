import{P as N,_ as B,a as M,b as E,c as V,d as A,e as H}from"./CampaignName.vue_vue_type_style_index_0_lang-h18fUgHr.js";import{d as x,u as y,r as $,o as _,c as g,a as p,b as c,w as I,e as P,t as k,f as R,g as v,T as F,p as G,h as U,y as D,S as z,i as j,j as O,k as C,l as b}from"./index-xZd3i5kS.js";import{a as W}from"./axios-QLjAsgXu.js";import"./index-Hoo_MgR2.js";const J={class:"ta-file-wrapper"},Z=p("label",{for:"ta-file"},"受眾 (BOE 匯出 csv)",-1),q={class:"d-flex mt-2 align-items-center w-100"},K={key:0,class:"hint"},Q=x({__name:"ImportTa",setup(L){const s=y(),r=$(0),m=$(0),d=async()=>{(await window.showOpenFilePicker({id:"marketing-import-ta",multiple:!0,types:[{accept:{"text/csv":[".csv"]}}]})).forEach(async t=>{const o=await(await t.getFile()).text();f(o)})},f=n=>{N.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:(t,e)=>(console.log(`Header: ${e}`,t),t==="特定用戶名單(TAMI專用)"?"groupName":t.startsWith("Subscr Id")?"subId":t==="台灣大會員編號"?"twmId":(t.startsWith('"')||s.userArgSet.add(t),t)),complete:t=>{if(t.errors.length>0){alert("Parse Error");return}console.log(`[TaFile] add ${t.data.length} Users begin`),m.value+=t.data.length;for(let e=0;e<t.data.length;e++){const o=t.data[e],i={};s.userArgSet.forEach(l=>{i[l]=o[l]}),s.addUser(o.twmId,o.subId,void 0,i)}console.log(`[TaFile] add ${t.data.length} Users Complete`),s.groupList.push(...h(t.data)),r.value+=s.groupList.length,console.log(`[TaFile] complete ${s.groupList.length} TaGroup`)}})},h=n=>{const t=new Map;return n.forEach(e=>{let o;t.has(e.groupName)?o=t.get(e.groupName):(o=new F(e.groupName),t.set(e.groupName,o)),o==null||o.addTwmId(e.twmId)}),Array.from(t.values())};return(n,t)=>{const e=G;return _(),g("div",J,[Z,p("div",q,[c(e,{variant:"outline-primary",size:"sm",onClick:d},{default:I(()=>[P("匯入")]),_:1})]),m.value>0?(_(),g("small",K," 載入 "+k(r.value)+" 群, "+k(m.value)+" 筆記錄, "+k(R(s).userArgSet.size)+" 參數 ",1)):v("",!0)])}}}),X={class:"icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Y=p("path",{fill:"currentColor",d:"m23 12l-4-4v3h-9v2h9v3M1 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3h-2V6H3v12h12v-3h2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"},null,-1),tt=[Y];function et(L,s){return _(),g("svg",X,[...tt])}const st={name:"mdi-export",render:et},ot={class:"campaign-config-wrapper"},nt=p("span",null,"匯出設定檔",-1),at=p("span",null,"匯入設定檔",-1),it=x({__name:"MarketingConfigFile",setup(L){const s=y(),r=$(),m=$(null);U(r,()=>{r.value&&d(r.value)});const d=n=>{const t=new FileReader;t.onload=function(e){var S;const o=(S=e.target)==null?void 0:S.result,i=JSON.parse(o);s.campaignName=i.name;const l=new Map;i.groupList.forEach(a=>l.set(a.name,a)),s.groupList.length=0,i.taGroupNameList.forEach(a=>{const u=l.get(a);u&&s.groupList.push(new F(u.name,u.twmIdList))}),s.smsGroupList.length=0,i.smsGroupNameList.forEach(a=>{const u=l.get(a);if(u){const T=new z(u.name,u.twmIdList);T.smsTwmIdList=u.smsTwmIdList.slice(0),s.smsGroupList.push(T)}}),i.userInfoList.slice(0).forEach(a=>{a.subId&&a.subId.length>0&&s.subIdUserMap.set(a.subId,a),a.twmId&&a.twmId.length>0&&s.twmIdUserMap.set(a.twmId,a)}),s.refreshFilted()},t.readAsText(n)},f=async()=>{var n;[n]=await window.showOpenFilePicker({multiple:!0,types:[{description:"Images",accept:{"image/*":[".png",".gif",".jpeg",".jpg"]}}]}),console.log(n);const t=await n.getFile();console.log(t);const e=await t.text();console.log(e)},h=async()=>{const e=`http://bizsms.taiwanmobile.com:18994/send.cgi?username=VCST011400&password=7499639952&rateplan=A&srcaddr=8708246&dstaddr=0932087196&smbody=${encodeURI(`⏰台灣大%field1%資費用戶
符合您59折資格4h後結束！日本麗克特三明治機送18道食譜及環保袋https://twm5g.co/eoDP`)}`,{data:o}=await W.get(e);console.log(o)};return(n,t)=>{const e=st,o=G,i=B,l=D;return _(),g("div",ot,[c(o,{variant:"outline-primary",size:"sm",onClick:h,class:"ms-1"},{default:I(()=>[c(e),nt]),_:1}),c(o,{variant:"outline-primary",size:"sm",onClick:f,class:"ms-1"},{default:I(()=>[c(i),at]),_:1}),c(l,{ref_key:"configFileRef",ref:m,id:"import-campaign-config",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=w=>r.value=w),accept:"application/json"},null,8,["modelValue"])])}}}),ct={class:"marketing"},rt=p("h1",null,"行銷管理小平台",-1),lt={class:"main"},pt={class:"title-wrapper section"},mt={class:"file-wrapper"},ut={key:0,class:"main-wrapper section"},ht=x({__name:"Marketing",setup(L){const s=y(),r=j();O(async()=>{await r.initDB()});const m=C(()=>s.groupList&&s.groupList.length>0),d=C(()=>s.smsGroupList&&s.smsGroupList.length>0);return(f,h)=>{const n=M,t=it,e=Q,o=E,i=V,l=A,w=H;return _(),g("div",ct,[rt,p("div",lt,[p("section",pt,[c(n),c(t)]),p("section",mt,[c(e,{class:"section"}),c(o,{class:"section"}),c(i,{class:"section"})]),m.value||d.value?(_(),g("section",ut,[m.value?(_(),b(l,{key:0})):v("",!0),d.value?(_(),b(w,{key:1})):v("",!0)])):v("",!0)])])}}});export{ht as default};