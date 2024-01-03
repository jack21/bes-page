import{_ as D,a as L,b as A,c as G,d as N,e as M}from"./CampaignName.vue_vue_type_style_index_0_lang-GuBf6kmz.js";import{d as $,u as E,i as I,r as w,h as P,o as n,c as l,b as s,t as B,f as z,g as C,y as H,w as S,a as m,p as V,j as O,k as T,l as b,F as R}from"./index-pW61h_tb.js";import{P as j}from"./papaparse.min-5ICVaBZ4.js";import"./download-g_VoSwF1.js";import"./delete-outline-M6JYSCXM.js";import"./index-e-O61oxw.js";const q={class:"ta-file-wrapper"},W={key:0,class:"hint"},J=$({__name:"CampaignImportTa",setup(k){const e=E(),u=I(),a=w([]),g=w(0),i=w(0);P(a,()=>{i.value=0,e.userArgSet.clear(),a.value.forEach(p=>d(p))});const d=p=>{j.parse(p,{header:!0,skipEmptyLines:!0,transformHeader:(t,r)=>(console.log(`Header: ${r}`,t),t==="特定用戶名單(TAMI專用)"?"groupName":t==="Subscr Id"?"subId":t==="台灣大會員編號"?"twmId":t==="目前方案專案V+D+V資費"?"tariff":t==="租期(月)"?"duration":(t.startsWith('"')||e.userArgSet.add(t),t)),complete:t=>{if(t.errors.length>0){alert("Parse Error");return}i.value+=t.data.length;const r=new Map;for(let c=0;c<t.data.length;c++){const o=t.data[c];r.set(o.twmId,o)}console.log(`[CampaignImportTa] add ${t.data.length} TA -> ${r.size} Users`),console.time("DB Insert");const h=Array.from(r.values());e.partition(h,3e3).forEach(c=>{var v;let o="(?,?,?,?),".repeat(c.length);o=o.substring(0,o.length-1),o=`INSERT INTO user (twm_id, sub_id, tariff, duration) VALUES ${o}`;const _=[];c.forEach(f=>{_.push(f.twmId),_.push(f.subId),_.push(f.tariff),_.push(f.duration)}),(v=u.db)==null||v.run(o,_)}),console.timeEnd("DB Insert"),console.log(`[CampaignImportTa] add ${r.size} Users Complete`)}})};return(p,t)=>{const r=H;return n(),l("div",q,[s(r,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=h=>a.value=h),label:"受眾 (BOE 匯出 csv)",accept:"text/csv",multiple:""},null,8,["modelValue"]),i.value>0?(n(),l("small",W," 載入 "+B(g.value)+" 群, "+B(i.value)+" 筆記錄, "+B(z(e).userArgSet.size)+" 參數 ",1)):C("",!0)])}}}),K={class:"campaign-config-wrapper"},Q=m("span",null,"儲存簡訊活動",-1),X=$({__name:"CampaignConfigFile",setup(k){const e=I(),u=async()=>{await e.saveDB()};return(a,g)=>{const i=D,d=V;return n(),l("div",K,[s(d,{variant:"outline-primary",size:"sm",onClick:u,class:"ms-1"},{default:S(()=>[s(i),Q]),_:1})])}}}),Y={class:"icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Z=m("path",{fill:"currentColor",d:"M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.61-.35-1.28-.59-2-.72V8H4v10h9.09c-.05.33-.09.66-.09 1m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},null,-1),tt=[Z];function et(k,e){return n(),l("svg",Y,[...tt])}const st={name:"mdi-folder-plus-outline",render:et},ot=m("h1",null,"行銷管理大平台",-1),nt={key:0,class:"first-view"},at=m("span",null,"建立新簡訊活動",-1),rt=m("span",null,"匯入簡訊活動",-1),it={key:1,class:"main"},ct={class:"title-wrapper section"},lt={class:"file-wrapper section"},pt={key:0,class:"main-wrapper section"},gt=$({__name:"Campaign",setup(k){const e=E(),u=I(),a=w(!1);O(async()=>{e.addUserTest("45564360","66737619","0935523767"),e.addUserTest("45764165","66783939","0935525530"),e.addUserTest("13520651","57674022","0972197982"),e.addUserTest("42731870","","0932087196"),e.addUserTest("45495665","66737900","0915055636"),e.addUserTest("40295784","65496240","0983085853")});const g=async()=>{await u.createDB(),a.value=!0},i=async()=>{const[t]=await window.showOpenFilePicker({id:"campaign-import-db",multiple:!1,types:[{accept:{"text/csv":[".db"]}}]});await u.importDB(t),a.value=!0},d=T(()=>e.groupList&&e.groupList.length>0),p=T(()=>e.smsGroupList&&e.smsGroupList.length>0);return(t,r)=>{const h=st,y=V,c=D,o=L,_=X,v=J,f=A,x=G,U=N,F=M;return n(),l(R,null,[ot,a.value?(n(),l("div",it,[m("section",ct,[s(o),s(_)]),m("section",lt,[s(v),s(f),s(x)]),d.value||p.value?(n(),l("section",pt,[d.value?(n(),b(U,{key:0})):C("",!0),p.value?(n(),b(F,{key:1})):C("",!0)])):C("",!0)])):(n(),l("div",nt,[s(y,{variant:"outline-primary",onClick:g},{default:S(()=>[s(h),at]),_:1}),s(y,{variant:"outline-primary",onClick:i,class:"ms-1"},{default:S(()=>[s(c),rt]),_:1})]))],64)}}});export{gt as default};
