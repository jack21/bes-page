import{o as v,a as z,b as x,d as Q,u as K,r as F,c as j,w as de,P as te,e,f as t,i as R,j as Y,g as u,t as C,v as Ue,x as re,y as Ge,z as Pe,A as Ae,k as D,B as Re,p as je,l as ve,H as he,q as He,F as oe,h as A,C as le,D as Te,E as Oe,G as Ye,I as Ze,Q as We,J as qe,K as ge,L as be,O as Se,M as Le,N as Ce,R as $e,U as Je,V as ce,W as Qe,X as xe,T as Be,Y as Fe,S as Ke,s as ze,Z as Xe,$ as et,a0 as tt}from"./index-XtFB_9oj.js";import{_ as me}from"./download-VkKIIX4H.js";import{_ as st}from"./delete-outline-UuyHDgYy.js";const nt={class:"icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ot=x("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"},null,-1),lt=[ot];function at(U,s){return v(),z("svg",nt,[...lt])}const we={name:"mdi-close",render:at},it={class:"export-sms-file"},ut=x("span",null,"門號 (商務簡訊)",-1),rt={key:0,class:"ms-4 mt-2"},ct={class:"d-flex mt-2 align-items-center w-100"},dt={key:0,class:"hint"},mt={class:"d-flex justify-content-between w-100"},pt={class:"d-flex align-items-center"},_t={class:"d-flex align-items-center"},ft=Q({__name:"ExportSmsFile",props:{disabled:{type:Boolean}},setup(U){const s=U,n=K(),d=F(!1),f=F([]),b=F([]),p=F(0),y=F(0),k=F(new Set),_=F([]),c=F(0),r=F(!1),l=j(()=>({text:`匯入 91 優惠券 (${o.value} 人缺優惠券)`,value:"upload-file"})),a=j(()=>{const I=Array.from(n.userArgSet).map(L=>({text:L,value:L}));return I.push(l.value),I}),S=j(()=>f.value.findIndex(I=>I===l.value.value)>=0);de(b,()=>{p.value=b.value.length,b.value.forEach(I=>N(I))});const N=I=>{r.value=!0,te.parse(I,{header:!0,skipEmptyLines:!0,encoding:"big5",transformHeader:(L,V)=>(console.log(`Header: ${V}`,L),L==="領取券號"?"couponCode":L==="是否領取"?"isRedeem":L),complete:L=>{if(L.errors.length>0){alert("Parse Error"),r.value=!1;return}const V=_.value.length;L.data.forEach(E=>{if(E.isRedeem.indexOf("否")===-1){console.log(`[ExportSmsFile] Coupon Code redeem: ${E.couponCode} -> ${E.isRedeem}`);return}if(k.value.has(E.couponCode)){console.log(`[ExportSmsFile] Coupon Code duplicated: ${E.couponCode}`);return}k.value.add(E.couponCode),_.value.push(E.couponCode)});const G=_.value.length;console.log(`[ExportSmsFile] read ${L.data.length} -> ${G-V} coupon Code`),p.value--,y.value++,r.value=!1}})},T=j(()=>p.value>0),P=()=>{o.value=m(),d.value=!0},o=F(0),m=()=>{let I=0;return console.log(`[ExportSmsFile] noCouponCodeCount, smsGroupList: ${n.smsGroupList.length}`),n.smsGroupList.forEach(L=>{console.log(`[ExportSmsFile] noCouponCodeCount, smsSendInfoList: ${L.smsSendInfoList.length}`),L.smsSendInfoList.forEach(V=>{console.log(`[ExportSmsFile] noCouponCodeCount, phoneNumberList: ${V.phoneNumberList.length}`),V.phoneNumberList.forEach(G=>{const E=n.phoneNumberUserMap.get(G);(!E||!E.couponCode)&&I++})})}),I},h=async()=>{if(!$.value)return;r.value=!0;const I="export-sms-file-"+n.hashCode(n.campaignName);n.saveZip($.value.fileName,$.value.downloadFileList,I),r.value=!1},$=F(),g=()=>{r.value=!0,$.value=w(),r.value=!1},w=()=>{c.value=0;const I=[],L=re(new Date,"yyyyMMdd");let V=0,G=0;const E=n.smsGroupList,Z=[],q=[],J=[];for(let ae=0;ae<E.length;ae++){const X=E[ae];let ye=0;const Ne=[];console.log(`[ExportSmsFile] smsGroup: ${X.name}: ${X.smsSendInfoList.length}`);for(let ne=0;ne<X.smsSendInfoList.length;ne++){const pe=X.smsSendInfoList[ne];V++;const se=M(pe);G+=se.length,ye+=se.length,console.log(`[ExportSmsFile] smsGroup: ${X.name}: [${ne+1}] ${se.length}`),J.push(se.length);const _e=n.partition(se,5e3);for(let ie=0;ie<_e.length;ie++){const fe=_e[ie],Ee=te.unparse(fe,{delimiter:"	"}),Ve=X.smsSendInfoList.length===1?"":`_${ne+1}`,De=_e.length===1?"":`_${ie+1}`,ke=`${n.campaignName}_商務簡訊_${L}_${ae+1}${Ve}${De}_${X.name}_${fe.length}.txt`;I.push({fileName:ke,data:Ee}),Z.push({smsText:pe.text,phoneNumberFileName:ke,smsCount:fe.length})}Ne.push({smsText:pe.text,smsCount:se.length})}q.push({taName:X.name,smsCount:ye,smsItemList:Ne})}const H={};H.sendDate=Ge().format("YYYY-MM-DD"),H.sendHour=Pe.Hour20,H.sendMinute=Ae.Minute00,H.smsList=Z,H.smsGroupList=q;const W=`${n.campaignName}_商務簡訊_${L}_${E.length}受眾_${V}群_${G}.cfg`,B=JSON.stringify(H);I.push({fileName:W,data:B});const ee=`${n.campaignName}_商務簡訊_${L}_${E.length}受眾_${V}群_${G}.zip`;return console.log(`受眾表用
${J.join(`
`)}`),{fileName:ee,downloadFileList:I}},i=new Set(["0979940180","0937654385","0937573896","0970646973","0980317712","0970008039","0905364116","0920693530"]),M=I=>{const L=[],V=I.phoneNumberList;for(let G=0;G<V.length;G++){const E=V[G];if(i.has(E))continue;const Z=n.phoneNumberUserMap.get(E);if(!Z)continue;const q=[E];for(let J=0;J<a.value.length;J++){const H=a.value[J];if(f.value.findIndex(B=>B===H.value)>=0)if(H.value===l.value.value){let B=Z.couponCode;B||(B=_.value[c.value++]),B?(Z.couponCode=B,q.push(B)):q.push("")}else Z.params&&q.push(Z.params[H.value])}L.push(q)}return L},O=()=>{b.value=[],y.value=0,_.value.length=0,k.value.clear()};return(I,L)=>{const V=me,G=D,E=Re,Z=je,q=we,J=ve,H=he;return v(),z("div",it,[e(G,{variant:"outline-primary",size:"sm",onClick:P,disabled:s.disabled},{default:t(()=>[e(V),ut]),_:1},8,["disabled"]),e(H,{modelValue:d.value,"onUpdate:modelValue":L[2]||(L[2]=W=>d.value=W),title:"參數",class:"args-modal",onClose:L[3]||(L[3]=W=>d.value=!1),onHide:L[4]||(L[4]=Ue(()=>{},["prevent"]))},{footer:t(()=>[x("div",mt,[x("div",pt,[r.value?(v(),R(J,{key:0})):Y("",!0)]),x("div",_t,[e(G,{variant:"primary",size:"sm",onClick:g,disabled:r.value},{default:t(()=>[u("打包")]),_:1},8,["disabled"]),e(G,{variant:"primary",size:"sm",onClick:h,disabled:r.value||!$.value,class:"ml-2"},{default:t(()=>[u("匯出")]),_:1},8,["disabled"])])])]),default:t(()=>[e(E,{modelValue:f.value,"onUpdate:modelValue":L[0]||(L[0]=W=>f.value=W),options:a.value,stacked:""},null,8,["modelValue","options"]),S.value?(v(),z("div",rt,[x("div",ct,[e(Z,{modelValue:b.value,"onUpdate:modelValue":L[1]||(L[1]=W=>b.value=W),id:"dsc-file",accept:"text/csv",multiple:""},null,8,["modelValue"]),k.value.size>0&&!T.value?(v(),R(G,{key:0,variant:"outline-primary",size:"sm",class:"remove ms-1",onClick:O},{default:t(()=>[e(q)]),_:1})):Y("",!0),T.value?(v(),R(J,{key:1,variant:"primary",class:"ms-1"})):Y("",!0)]),y.value?(v(),z("small",dt,"已讀取 "+C(y.value)+" 檔案, "+C(k.value.size)+" 筆記錄",1)):Y("",!0)])):Y("",!0)]),_:1},8,["modelValue"])])}}}),vt={class:"export-sms-file"},ht=x("span",null,"門號 (客服)",-1),gt=Q({__name:"ExportCustomServiceFile",props:{disabled:{type:Boolean}},setup(U){const s=U,n=K(),d=()=>{const f=re(new Date,"yyyyMMdd"),b=n.smsGroupList.filter(c=>c.smsPhoneNumberFilted.length>0),p=[];let y=0,k=0;for(let c=0;c<b.length;c++){const r=b[c];for(let l=0;l<r.smsSendInfoList.length;l++){k++;const a=r.smsSendInfoList[l],S=`用戶分群: ${r.name}\r
簡訊內容: ${a.text}\r
發送數量: ${a.phoneNumberList.length}\r
`,N=`${n.campaignName}_客服_${f}_${k}_發送資訊.txt`;p.push({fileName:N,data:S});const T=[];a.phoneNumberList.forEach(o=>T.push([o])),y+=a.phoneNumberList.length;const P=n.partition(T,5e4);for(let o=0;o<P.length;o++){const m=P[o],h=te.unparse(m),$=P.length===1?"":`_${o+1}`,g=`${n.campaignName}_客服_${f}_${k}_門號${$}_${m.length}.txt`;p.push({fileName:g,data:h})}}}const _=`${n.campaignName}_客服_${f}_${k}群_${y}人.zip`;n.downloadZip(_,p)};return(f,b)=>{const p=me,y=D;return v(),z("div",vt,[e(y,{variant:"outline-primary",size:"sm",class:"mt-1",onClick:d,disabled:s.disabled},{default:t(()=>[e(p),ht]),_:1},8,["disabled"])])}}}),bt={class:"export-fb-device-id"},St=x("span",null,"FB 自訂受眾",-1),Lt=Q({__name:"ExportFbAudience",props:{disabled:{type:Boolean}},setup(U){const s=U,n=K(),d=async()=>{const f=new Set;n.smsGroupList.forEach(y=>{y.smsPhoneNumberFilted.forEach(k=>{const _=n.phoneNumberUserMap.get(k);_&&_.deviceId&&f.add(_.deviceId)})});const b=`madid
`+Array.from(f).join(`
`),p=new File([b],"fb-device-id.csv",{type:"text/csv"});await window.showSaveFilePicker({id:"market-fb-audience-export",suggestedName:`${n.campaignName}_FB 自訂受眾_${Ge().format("YYYYMMDD")}_${f.size}筆.csv`,types:[{accept:{"text/csv":[".csv"]}}]}).then(async y=>{const k=await y.createWritable();await k.write(p),await k.close()})};return(f,b)=>{const p=me,y=D;return v(),z("div",bt,[e(y,{variant:"outline-primary",size:"sm",onClick:d,disabled:s.disabled},{default:t(()=>[e(p),St]),_:1},8,["disabled"])])}}}),Ct={class:"icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},$t=x("path",{fill:"currentColor",d:"M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h10V4zm0 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"},null,-1),xt=[$t];function wt(U,s){return v(),z("svg",Ct,[...xt])}const Ie={name:"mdi-calculator",render:wt},It={key:0,class:"sms-send"},yt=x("h6",{class:"title"},"分群測試",-1),Nt={class:"section"},kt=x("h6",{class:"title"},"簡訊內容",-1),Gt={class:"sms-item section"},Tt={class:"sms-header"},Bt=["for"],Ft={class:"count"},zt={class:"sms-footer"},Mt=Q({__name:"SmsSendModal",props:{smsGroup:{}},setup(U){const s=He(),n=K(),d=U,f=F(!1),b=F(1),p=F(["","",""]),y=a=>{const S=d.smsGroup.smsPhoneNumberFilted;if(S.length===0)return[];const N=Math.ceil(S.length/b.value);return n.partition(S,N)[a]},k=()=>{b.value=Math.max(d.smsGroup.smsSendInfoList.length,1),console.log(`[SmsSendModal] smsTestGroupCount: ${b.value}`),p.value.length=0,d.smsGroup.smsSendInfoList.forEach(a=>{p.value.push(a.text)}),f.value=!0},_=()=>{if(!d.smsGroup)return;const a=p.value.splice(0,b.value);n.fillSmsSendInfo(d.smsGroup,a),s.setSmsText(d.smsGroup.name,a)},c=a=>a?a.length:0,r=a=>{const S=c(p.value[a]);return S===0?null:S<=70},l=(a,S)=>{if(S.phoneNumber){const N=n.sms(p.value[a],S.phoneNumber);console.log(`[SmsSend] URL: ${N}`),window.open(N,"_blank")}};return(a,S)=>{const N=D,T=Oe,P=Ye,o=Ze,m=We,h=qe,$=he;return d.smsGroup?(v(),z("div",It,[e(N,{variant:"outline-primary",size:"sm",onClick:k,disabled:d.smsGroup.smsPhoneNumberFilted.length===0},{default:t(()=>[x("span",null,"編輯 ("+C(d.smsGroup.smsSendInfoList.length)+")",1)]),_:1},8,["disabled"]),e($,{modelValue:f.value,"onUpdate:modelValue":S[1]||(S[1]=g=>f.value=g),size:"lg","ok-title":"確定","cancel-title":"取消","cancel-variant":"outline-secondary",onOk:_,class:"sms-send-modal"},{default:t(()=>[x("section",null,[yt,x("div",Nt,[e(P,{modelValue:b.value,"onUpdate:modelValue":S[0]||(S[0]=g=>b.value=g),name:"sms-test-group"},{default:t(()=>[e(T,{value:1},{default:t(()=>[u("不測試")]),_:1}),e(T,{value:2},{default:t(()=>[u("2 群")]),_:1}),e(T,{value:3},{default:t(()=>[u("3 群")]),_:1}),e(T,{value:4},{default:t(()=>[u("4 群")]),_:1}),e(T,{value:5},{default:t(()=>[u("5 群")]),_:1}),e(T,{value:6},{default:t(()=>[u("6 群")]),_:1})]),_:1},8,["modelValue"])])]),x("section",null,[kt,(v(!0),z(oe,null,le(b.value,g=>(v(),z("div",Gt,[x("div",Tt,[x("label",{for:`sms-text-${g}`},"簡訊 "+C(g),9,Bt),x("span",Ft,C(y(g-1).length)+" 人",1)]),e(o,{type:"text",size:"sm",id:`sms-text-${g}`,rows:"2",state:r(g-1),placeholder:"簡訊文案",modelValue:p.value[g-1],"onUpdate:modelValue":w=>p.value[g-1]=w},null,8,["id","state","modelValue","onUpdate:modelValue"]),x("div",zt,[e(h,{right:"",variant:"outline-primary",size:"sm",text:"測試"},{default:t(()=>[(v(!0),z(oe,null,le(A(n).userInfoListTest,w=>(v(),R(m,{onClick:i=>l(g-1,w),key:w.twmId},{default:t(()=>[u(C(w.params.name),1)]),_:2},1032,["onClick"]))),128))]),_:2},1024),x("span",{class:Te(["sms-text",{warn:c(p.value[g-1])>70}])},C(c(p.value[g-1]))+" 個字 ",3)])]))),256))])]),_:1},8,["modelValue"])])):Y("",!0)}}}),Et={key:0,class:"ta-group-list-modal number"},Vt={key:0,class:""},Dt={class:"summary"},ue=100,Me=Q({__name:"TaGroupListModal",props:{twmIdList:{},phoneNumberList:{}},setup(U){const s=K(),n=U,d=F(!1),f=F(1),b=()=>{d.value=!0},p=j(()=>{var l,a;return((l=n.twmIdList)==null?void 0:l.length)||((a=n.phoneNumberList)==null?void 0:a.length)||0}),y=j(()=>{const l=[];if(!d.value)return l;const a=(f.value-1)*ue;return _.value.slice(a,a+ue)}),k=l=>ue*(f.value-1)+l+1,_=j(()=>{const l=[];return d.value&&(console.time("[TaGroupListModal] allUserList"),n.twmIdList&&n.twmIdList.length>0?n.twmIdList.forEach(a=>{const S=s.twmIdUserMap.get(a);S&&l.push(S)}):n.phoneNumberList&&n.phoneNumberList.length>0&&n.phoneNumberList.forEach(a=>{const S=s.phoneNumberUserMap.get(a);S&&l.push(S)}),console.timeEnd("[TaGroupListModal] allUserList")),l}),c=j(()=>d.value?_.value.filter(l=>!!l.phoneNumber).length:0),r=j(()=>d.value?_.value.filter(l=>!!l.couponCode).length:0);return(l,a)=>{const S=D,N=ge,T=be,P=Se,o=Le,m=Ce,h=$e,$=Je,g=he;return n.twmIdList||n.phoneNumberList?(v(),z("div",Et,[p.value===0?(v(),z("span",Vt,"0")):(v(),R(S,{key:1,variant:"link",onClick:b,class:""},{default:t(()=>[u(C(p.value),1)]),_:1})),e(g,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=w=>d.value=w),scrollable:"",size:"lg",title:"使用者詳情",class:"ta-list-modal"},{default:t(()=>[x("div",Dt,[u(" 總數："),x("span",null,C(p.value)+"，有門號："+C(c.value)+" (少 "+C(c.value-p.value)+")，有優惠券："+C(r.value)+" (少 "+C(r.value-p.value)+")",1)]),e(h,{hover:"",small:"",bordered:""},{default:t(()=>[e(P,null,{default:t(()=>[e(T,null,{default:t(()=>[e(N,{class:"text-center align-middle"},{default:t(()=>[u("No")]),_:1}),e(N,{class:"text-center align-middle"},{default:t(()=>[u("台灣大會員編號")]),_:1}),e(N,{class:"text-center align-middle"},{default:t(()=>[u("SubId")]),_:1}),e(N,{class:"text-center align-middle"},{default:t(()=>[u("門號")]),_:1}),e(N,{class:"text-center align-middle"},{default:t(()=>[u("資費")]),_:1}),e(N,{class:"text-center align-middle"},{default:t(()=>[u("優惠券序號")]),_:1})]),_:1})]),_:1}),e(m,null,{default:t(()=>[(v(!0),z(oe,null,le(y.value,(w,i)=>(v(),R(T,{key:w.twmId},{default:t(()=>[e(o,{class:"text-center align-middle"},{default:t(()=>[u(C(k(i)),1)]),_:2},1024),e(o,{class:"text-center align-middle number"},{default:t(()=>[u(C(w.twmId),1)]),_:2},1024),e(o,{class:"text-center align-middle number"},{default:t(()=>[u(C(w.subId),1)]),_:2},1024),e(o,{class:"text-center align-middle number"},{default:t(()=>[u(C(w.phoneNumber),1)]),_:2},1024),e(o,{class:"text-center align-middle number"},{default:t(()=>[u(C(w.params["目前方案專案V+D+V資費"]),1)]),_:2},1024),e(o,{class:"text-center align-middle number"},{default:t(()=>[u(C(w.couponCode),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e($,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=w=>f.value=w),size:"sm","total-rows":p.value,"per-page":ue},null,8,["modelValue","total-rows"])]),_:1},8,["modelValue"])])):Y("",!0)}}}),Ut={class:"calc-button"},Pt={key:1,class:"number"},At=Q({__name:"CalcButton",setup(U){const s=K(),n=()=>{s.refresh()};return(d,f)=>{const b=Ie,p=D,y=xe;return v(),z("div",Ut,[A(s).needReCalc?ce((v(),R(p,{key:0,variant:"outline-success",size:"sm",onClick:n},{default:t(()=>[e(b)]),_:1})),[[y,"重新計算"]]):(v(),z("div",Pt,[Qe(d.$slots,"default")]))])}}}),Rt={class:"d-flex flex-column justify-content-end"},jt=x("br",null,null,-1),Ht=x("span",{class:"hint"},"(商務簡訊)",-1),Ot={class:"text-nowrap"},Yt={key:1},Zt={class:"text-nowrap"},Wt={class:"d-flex flex-column"},qt=x("span",null,"SubId (DSC)",-1),Jt={class:"d-flex flex-column"},Qt=x("span",null,"SubId (DSC)",-1),Kt=x("span",null,"名單總表",-1),ps=Q({__name:"SmsGroupList",setup(U){const s=K(),n=F(!0),d=F(0),f=()=>{if(!s.smsGroupList)return n.value=!1,0;console.time("[SmsGroupList] TotalSubIdCount");const o=new Set;for(let m=0;m<s.smsGroupList.length;m++){const $=s.smsGroupList[m].twmIdList;for(let g=0;g<$.length;g++){const w=$[g];o.add(w)}}console.timeEnd("[SmsGroupList] TotalSubIdCount"),n.value=!1,d.value=o.size},b=j(()=>{let o=0;return s.smsGroupList.forEach(m=>o+=m.smsTwmIdListFilted.length),o}),p=j(()=>{let o=0;return s.smsGroupList.forEach(m=>o+=m.smsPhoneNumberFilted.length),o}),y=j(()=>{let o=0;return s.smsGroupList.forEach(m=>o+=m.tamiDeviceIdCount),o}),k=(o,m)=>{const h=o.smsReadyTwmIdList;if(m>=100)o.smsTwmIdList=h.slice(0);else{const $=new Set;o.smsTwmIdList.forEach(i=>$.add(i));const g=h.length*m/100,w=c(h).slice(0,g);w.forEach(i=>$.add(i)),o.smsTwmIdList=Array.from($),console.log(`[GroupList] addSmsList: ${g}: ${w.length}`)}s.refreshFilted()},_=o=>{for(let m=0;m<s.smsGroupList.length;m++){const h=s.smsGroupList[m];k(h,o)}},c=o=>{const m=o.slice(0);for(let h=m.length-1;h>0;h--){let $=Math.floor(Math.random()*(h+1));[m[h],m[$]]=[m[$],m[h]]}return m},r=o=>{const m=s.smsGroupList.findIndex($=>$.name===o.name);m>=0&&s.smsGroupList.splice(m,1);const h=new Be(o.name,o.twmIdList);s.groupList.push(h),s.refreshFilted(),n.value=!0},l=()=>{S(o=>o.twmIdList)},a=()=>{S(o=>o.smsTwmIdListFilted)},S=o=>{if(!s.smsGroupList)return;const m=[],h=new Set;for(let M=0;M<s.smsGroupList.length;M++){const O=s.smsGroupList[M],I=o(O);for(let L=0;L<I.length;L++){const V=I[L],G=s.twmIdUserMap.get(V);!G||!G.subId||G.phoneNumber&&G.phoneNumber.length>0||h.has(G.subId)||(h.add(G.subId),m.push({SUBSCR_ID:G.subId}))}}console.log(`[SmsGroupList] export ${m.length} subId`);const $=re(new Date,"yyyyMMdd"),g=[],w=s.partition(m,1e5);for(let M=0;M<w.length;M++){const O=w[M],I=`${s.campaignName}_DSC_SubId_${$}_${w.length}-${M+1}_${O.length}.csv`,L=te.unparse(O);g.push({fileName:I,data:L})}const i=`${s.campaignName}_DSC_SubId_${$}_${w.length}份_共${m.length}筆.zip`;s.downloadZip(i,g)},N=()=>{if(!s.smsGroupList)return;const o=[];for(let g=0;g<s.smsGroupList.length;g++){const w=s.smsGroupList[g],i=w.smsPhoneNumberFilted;for(let M=0;M<i.length;M++){const O=i[M],I=s.phoneNumberUserMap.get(O);I&&o.push({Sms:w.name,TwmId:I.twmId,SubId:I.subId,門號:I.phoneNumber,優惠券:I.couponCode})}}console.log(`[SmsGroupList] export ${o.length} All Sms CSV`);const m=re(new Date,"yyyyMMdd"),h=`${s.campaignName}_發送名單資訊_${m}_${o.length}.csv`,$=te.unparse(o);s.downloadFile($,h)},T=o=>o.smsReadyTwmIdList.length<=o.smsTwmIdList.length,P=()=>{for(let o=0;o<s.smsGroupList.length;o++){const m=s.smsGroupList[o];if(!T(m))return!1}return!0};return(o,m)=>{const h=ge,$=be,g=Se,w=st,i=Le,M=At,O=Me,I=Mt,L=Ce,V=Ie,G=me,E=Lt,Z=gt,q=ft,J=Fe,H=$e,W=xe;return v(),z("div",Rt,[e(H,{hover:"",small:"",bordered:""},{default:t(()=>[e(g,{"head-variant":"dark"},{default:t(()=>[e($,null,{default:t(()=>[e(h,{class:"text-center align-middle"},{default:t(()=>[u("刪除")]),_:1}),e(h,{class:"text-center align-middle"},{default:t(()=>[u("分群")]),_:1}),e(h,{class:"text-center align-middle"},{default:t(()=>[u("原數量")]),_:1}),e(h,{class:"text-center align-middle"},{default:t(()=>[u("已發送數")]),_:1}),e(h,{class:"text-center align-middle"},{default:t(()=>[u("可發送數")]),_:1}),e(h,{class:"text-center align-middle"},{default:t(()=>[u("發送")]),_:1}),e(h,{class:"text-center align-middle"},{default:t(()=>[u("欲發送數")]),_:1}),e(h,{class:"text-center align-middle"},{default:t(()=>[u("發送數")]),_:1}),e(h,{class:"text-center align-middle"},{default:t(()=>[u("門號數"),jt,Ht]),_:1}),e(h,{class:"text-center align-middle"},{default:t(()=>[u("Device ID 數")]),_:1}),e(h,{class:"text-center align-middle"},{default:t(()=>[u("簡訊內容")]),_:1})]),_:1})]),_:1}),e(L,null,{default:t(()=>[(v(!0),z(oe,null,le(A(s).smsGroupList,B=>(v(),R($,{key:B.name},{default:t(()=>[e(i,{class:"text-center align-middle"},{default:t(()=>[e(A(D),{variant:"outline-danger",size:"sm",onClick:ee=>r(B)},{default:t(()=>[e(w)]),_:2},1032,["onClick"])]),_:2},1024),e(h,{class:"align-middle"},{default:t(()=>[u(C(B.name),1)]),_:2},1024),e(i,{class:"text-end align-middle number"},{default:t(()=>{var ee;return[u(C((ee=B.twmIdList)==null?void 0:ee.length),1)]}),_:2},1024),e(i,{class:"text-center align-middle"},{default:t(()=>[e(M,null,{default:t(()=>[u(C(B.sentCount),1)]),_:2},1024)]),_:2},1024),e(i,{class:"text-center align-middle"},{default:t(()=>[e(M,null,{default:t(()=>[e(O,{"twm-id-list":B.smsReadyTwmIdList},null,8,["twm-id-list"])]),_:2},1024)]),_:2},1024),e(i,{class:"text-center align-middle"},{default:t(()=>[x("div",Ot,[e(A(D),{variant:"outline-primary",size:"sm",onClick:ee=>k(B,10),disabled:T(B)},{default:t(()=>[u("+10%")]),_:2},1032,["onClick","disabled"]),e(A(D),{variant:"outline-primary",size:"sm",onClick:ee=>k(B,100),class:"ms-1",disabled:T(B)},{default:t(()=>[u("All")]),_:2},1032,["onClick","disabled"])])]),_:2},1024),e(i,{class:"text-center align-middle"},{default:t(()=>[e(O,{"twm-id-list":B.smsTwmIdList},null,8,["twm-id-list"])]),_:2},1024),e(i,{class:"text-center align-middle"},{default:t(()=>[e(M,null,{default:t(()=>[e(O,{"twm-id-list":B.smsTwmIdListFilted},null,8,["twm-id-list"])]),_:2},1024)]),_:2},1024),e(i,{class:"text-center align-middle"},{default:t(()=>[e(M,null,{default:t(()=>[e(O,{"phone-number-list":B.smsPhoneNumberFilted},null,8,["phone-number-list"])]),_:2},1024)]),_:2},1024),e(i,{class:"text-center align-middle"},{default:t(()=>[e(M,null,{default:t(()=>[u(C(B.tamiDeviceIdCount),1)]),_:2},1024)]),_:2},1024),e(i,{class:"text-center align-middle"},{default:t(()=>[e(I,{"sms-group":B},null,8,["sms-group"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(J,null,{default:t(()=>[e($,null,{default:t(()=>[e(i),e(i,null,{default:t(()=>[u("共 "+C(A(s).smsGroupList.length)+" 群",1)]),_:1}),e(i,{class:Te({"text-center":n.value,number:!n.value})},{default:t(()=>[n.value?ce((v(),R(A(D),{key:0,variant:"outline-success",size:"sm",onClick:f},{default:t(()=>[e(V)]),_:1})),[[W,"重新計算"]]):(v(),z("span",Yt,C(d.value),1))]),_:1},8,["class"]),e(i),e(i),e(i,null,{default:t(()=>[x("div",Zt,[e(A(D),{variant:"outline-primary",size:"sm",onClick:m[0]||(m[0]=B=>_(10)),disabled:P()},{default:t(()=>[u("+10%")]),_:1},8,["disabled"]),e(A(D),{variant:"outline-primary",size:"sm",onClick:m[1]||(m[1]=B=>_(100)),class:"ms-1",disabled:P()},{default:t(()=>[u("All")]),_:1},8,["disabled"])])]),_:1}),e(i),e(i,{class:"text-center number"},{default:t(()=>[e(M,null,{default:t(()=>[u(C(b.value),1)]),_:1})]),_:1}),e(i,{class:"text-center number"},{default:t(()=>[e(M,null,{default:t(()=>[u(C(p.value),1)]),_:1})]),_:1}),e(i,{class:"text-center number"},{default:t(()=>[e(M,null,{default:t(()=>[u(C(y.value),1)]),_:1})]),_:1}),e(i)]),_:1}),e($,null,{default:t(()=>[e(i),e(i),e(i,{class:"text-center"},{default:t(()=>[x("div",Wt,[e(A(D),{variant:"outline-primary",size:"sm",onClick:l},{default:t(()=>[e(G),qt]),_:1})])]),_:1}),e(i),e(i),e(i),e(i),e(i,{class:"text-center"},{default:t(()=>[x("div",Jt,[ce((v(),R(A(D),{variant:"outline-primary",size:"sm",onClick:a,disabled:b.value<=0},{default:t(()=>[e(G),Qt]),_:1},8,["disabled"])),[[W,`匯出 ${b.value-p.value} 筆沒有電話號碼的 SubID (DSC 用)`,void 0,{hover:!0,top:!0}]])])]),_:1}),e(i,{class:"text-center align-middle"}),e(i,null,{default:t(()=>[e(E,{disabled:y.value===0},null,8,["disabled"])]),_:1}),e(i,{class:"text-center align-middle"},{default:t(()=>[e(Z,{disabled:p.value<=0},null,8,["disabled"]),e(q,{class:"mt-1",disabled:p.value<=0},null,8,["disabled"])]),_:1})]),_:1}),e($,null,{default:t(()=>[e(i),e(i),e(i),e(i),e(i),e(i),e(i),e(i,{colspan:"2",class:"text-center align-middle"},{default:t(()=>[e(A(D),{variant:"outline-primary",size:"sm",class:"mt-1",onClick:N,disabled:b.value<=0},{default:t(()=>[e(G),Kt]),_:1},8,["disabled"])]),_:1}),e(i),e(i)]),_:1})]),_:1})]),_:1})])}}}),Xt={key:1,class:"number"},_s=Q({__name:"TaGroupList",setup(U){const s=K(),n=F(!0),d=F(0),f=j(()=>s.groupList?s.groupList.sort((_,c)=>_.name.localeCompare(c.name)):[]),b=()=>{if(!s.groupList)return n.value=!1,0;console.time("[TaGroupList] TotalSubIdCount");const _=new Set;for(let c=0;c<s.groupList.length;c++){const l=s.groupList[c].twmIdList;for(let a=0;a<l.length;a++){const S=l[a];_.add(S)}}console.timeEnd("[TaGroupList] TotalSubIdCount"),d.value=_.size,n.value=!1},p=_=>{const c=s.groupList.findIndex(l=>l.name===_.name);c>=0&&s.groupList.splice(c,1),console.time("[TaGroupList] addSmsList");const r=new Ke(_.name,_.twmIdList);console.timeEnd("[TaGroupList] addSmsList"),s.smsGroupList.push(r),s.refreshFilted()},y=()=>{[...s.groupList].forEach(c=>p(c))},k=async()=>{const[_]=await window.showOpenFilePicker({multiple:!1,types:[{accept:{"text/csv":[".csv"]}}]}),c=await _.getFile(),r=await c.text();te.parse(r,{header:!1,skipEmptyLines:!0,complete:l=>{if(l.errors.length>0){alert("Parse Error");return}console.log(`[TaGroupList] add ${l.data.length} Users begin`);const a=[];for(let N=0;N<l.data.length;N++){const T=l.data[N],P=s.phoneNumberUserMap.get(T[2]);P&&a.push(P.twmId)}console.log(`[TaGroupList] add ${l.data.length} Users Complete`);const S=new Be(c.name,a);s.groupList.push(S),console.log(`[TaGroupList] complete ${s.groupList.length} TaGroup`)}})};return(_,c)=>{const r=ge,l=be,a=Se,S=Me,N=Le,T=D,P=Ce,o=Ie,m=Fe,h=$e,$=xe;return v(),z("div",null,[e(h,{hover:"",small:"",bordered:""},{default:t(()=>[e(a,{"head-variant":"dark"},{default:t(()=>[e(l,null,{default:t(()=>[e(r,{class:"text-center align-middle"},{default:t(()=>[u("分群")]),_:1}),e(r,{class:"text-center align-middle"},{default:t(()=>[u("數量")]),_:1}),e(r,{class:"text-center align-middle"},{default:t(()=>[u("加入發送")]),_:1})]),_:1})]),_:1}),e(P,null,{default:t(()=>[(v(!0),z(oe,null,le(f.value,g=>(v(),R(l,{key:g.name},{default:t(()=>[e(r,{class:"align-middle"},{default:t(()=>[u(C(g.name),1)]),_:2},1024),e(N,{class:"text-center align-middle"},{default:t(()=>[e(S,{"twm-id-list":g.twmIdList},null,8,["twm-id-list"])]),_:2},1024),e(r,{class:"text-center"},{default:t(()=>[e(T,{variant:"outline-primary",size:"sm",onClick:w=>p(g)},{default:t(()=>[u("加入")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(m,null,{default:t(()=>[e(l,null,{default:t(()=>[e(N,null,{default:t(()=>[u("共 "+C(f.value.length)+" 群",1)]),_:1}),e(N,{class:"text-center"},{default:t(()=>[n.value?ce((v(),R(T,{key:0,variant:"outline-success",size:"sm",onClick:b},{default:t(()=>[e(o)]),_:1})),[[$,"重新計算"]]):(v(),z("span",Xt,C(d.value),1))]),_:1}),e(N,{class:"text-center"},{default:t(()=>[e(T,{variant:"outline-primary",size:"sm",onClick:c[0]||(c[0]=g=>y())},{default:t(()=>[u("加入")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(T,{variant:"outline-primary",size:"sm",onClick:k},{default:t(()=>[u("匯入 91App 受眾")]),_:1})])}}}),es={class:"sms-file-wrapper"},ts=x("label",{for:"sms-file"},"已發送簡訊 (多選)",-1),ss={class:"d-flex mt-2 align-items-center w-100"},ns={key:0,class:"hint"},fs=Q({__name:"ImportSmsSent",setup(U){const s=K(),n=F(0),d=F(0),f=F(0);de(n,(_,c)=>{_===0&&c>0&&s.refreshFilted()});const b=j(()=>n.value>0),p=async()=>{const _=await window.showOpenFilePicker({id:"market-sms-sent-"+s.hashCode(s.campaignName),multiple:!0,types:[{accept:{"text/plain":[".txt"]}}]});n.value=_.length,_.forEach(async c=>{const l=await(await c.getFile()).text();y(l)})},y=_=>{const c=_==null?void 0:_.split(`
`),r=s.phoneNumberSentSet.size;f.value+=c.length,c.forEach(a=>{const N=a.split("	")[0];s.phoneNumberSentSet.add(N)});const l=s.phoneNumberSentSet.size;console.log(`[SmsFile] load ${l-r} Sent Phone Numbers, Total: ${s.phoneNumberSentSet.size}`),n.value--,d.value++},k=()=>{d.value=0,f.value=0,s.phoneNumberSentSet.clear(),s.refreshFilted()};return(_,c)=>{const r=D,l=we,a=ve;return v(),z("div",es,[ts,x("div",ss,[e(r,{variant:"outline-primary",size:"sm",onClick:p},{default:t(()=>[u("匯入")]),_:1}),f.value>0&&!b.value?(v(),R(r,{key:0,variant:"outline-primary",size:"sm",class:"remove ms-1",onClick:k},{default:t(()=>[e(l)]),_:1})):Y("",!0),b.value?(v(),R(a,{key:1,variant:"primary",class:"ms-1"})):Y("",!0)]),d.value>0?(v(),z("small",ns,C(d.value)+" 檔案, "+C(f.value)+" 筆記錄, 重複 "+C(f.value-A(s).phoneNumberSentSet.size)+" 門號, "+C(A(s).phoneNumberSentSet.size)+" 門號",1)):Y("",!0)])}}}),os={class:"import-dsc-wrapper"},ls=x("label",{for:"dsc-file"},"門號 (DSC 轉出 csv)",-1),as={class:"d-flex mt-2 align-items-center w-100"},is={key:0,class:"hint"},vs=Q({__name:"ImportDSC",setup(U){const s=K(),n=F(0),d=F(0),f=F(0);ze(async()=>{}),de(n,(c,r)=>{c===0&&r>0&&s.refreshFilted()});const b=j(()=>n.value>0),p=async()=>{const c=await window.showOpenFilePicker({id:"market-dsc",multiple:!0,types:[{accept:{"text/csv":[".csv"]}}]});n.value=c.length,c.forEach(async r=>{const a=await(await r.getFile()).arrayBuffer(),S=Xe.decode(et.Buffer.from(a),"big5");y(S)})},y=c=>{te.parse(c,{header:!0,skipEmptyLines:!0,transformHeader:(r,l)=>(console.log(`Header: ${l}`,r),r==="門號"?"phoneNumber":r==="SUBSCR_ID"?"subId":r),complete:r=>{if(r.errors.length>0){alert("Parse Error"),n.value--,d.value++;return}const l=r.data;k(l),n.value--,d.value++}})},k=c=>{f.value+=c.length,c.forEach(r=>{const l=s.subIdUserMap.get(r.subId);l&&(l.phoneNumber=r.phoneNumber,s.phoneNumberUserMap.set(r.phoneNumber,l))}),console.log(`[PhoneNumberFile] read ${c.length} subid <> phone number`)},_=()=>{d.value=0,f.value=0,s.phoneNumberUserMap.clear(),s.refreshFilted()};return(c,r)=>{const l=D,a=we,S=ve;return v(),z("div",os,[ls,x("div",as,[e(l,{variant:"outline-primary",size:"sm",onClick:p,disabled:A(s).isUserEmpty},{default:t(()=>[u("匯入")]),_:1},8,["disabled"]),f.value>0&&!b.value?(v(),R(l,{key:0,variant:"outline-primary",size:"sm",class:"remove ms-1",onClick:_},{default:t(()=>[e(a)]),_:1})):Y("",!0),b.value?(v(),R(S,{key:1,variant:"primary",class:"ms-1"})):Y("",!0)]),d.value?(v(),z("small",is,"已讀取 "+C(d.value)+" 檔案, "+C(f.value)+" 筆記錄",1)):Y("",!0)])}}}),us={class:"title-wrapper"},rs=x("label",{for:"compaign-name"},"活動名稱",-1),hs=Q({__name:"CampaignName",setup(U){const s=K(),n=F("");return ze(()=>{const d=localStorage.getItem("campaign-name");d&&(n.value=d)}),de(n,d=>{localStorage.setItem("campaign-name",d),s.campaignName=d}),(d,f)=>{const b=tt;return v(),z("div",us,[rs,e(b,{modelValue:n.value,"onUpdate:modelValue":f[0]||(f[0]=p=>n.value=p),type:"text",id:"compaign-name",class:"ms-2"},null,8,["modelValue"])])}}});export{we as _,hs as a,vs as b,fs as c,_s as d,ps as e};
