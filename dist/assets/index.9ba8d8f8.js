import{d as O,n as c,q as d,c as y,a as t,e as I,v as w,s as m,u as n,F as E,x as T,B as A,z as p,O as v,C as L,D as N,o as _,E as D,G as P,m as R,A as q}from"./index.6de31075.js";import{_ as M}from"./add-white.12ccfe2d.js";import{g as V}from"./api.e0235cb2.js";const B={class:"w-full"},S={class:"flex justify-between items-center mb-30"},F=t("p",{class:"text-black-primary text-xl font-bold"},"Kompaniyalar",-1),G={class:"flex gap-15 items-center"},Q=t("img",{class:"w-24 h-24",src:M,alt:""},null,-1),j=t("p",{class:"text-sm text-white-primary font-medium leading-21 hidden md:block"},"Yangi kompaniya qo\u2018shish",-1),z=[Q,j],K={class:"bg-white-primary flex items-center gap-5 p-5 px-10 rounded",role:"button"},U=t("img",{src:A,class:"w-18 h-18",alt:""},null,-1),Y={class:"w-full p-15 rounded-15 bg-white-primary"},H={class:"rounded text-sm text-black-primary font-medium my-15 gap-10"},$=O({__name:"index",setup(J){const l=R(),h=q(),b=c(()=>p(()=>import("./CompanyModal.47e81d53.js"),["assets/CompanyModal.47e81d53.js","assets/index.6de31075.js","assets/index.b3b81775.css","assets/add-black.feba104f.js","assets/index.84c91ae4.js"])),g=c(()=>p(()=>import("./TableTitle.23bfbfeb.js"),["assets/TableTitle.23bfbfeb.js","assets/index.6de31075.js","assets/index.b3b81775.css"])),x=c(()=>p(()=>import("./TableItem.cdbdec30.js"),["assets/TableItem.cdbdec30.js","assets/16.68a2b36e.js","assets/arrow-right-s.de4946e2.js","assets/index.6de31075.js","assets/index.b3b81775.css"])),a=d({isLoading:!1,count:0,list:[]});async function C(s){const o={...l.query};o[s.key]=String(s.value),await h.replace({query:o}),r()}const f=d(),u=d("");async function r(){const{offset:s=0}=l.query;v();const[o,i]=await V(u.value,Number(s));L(),a.value.count=i.count,a.value.list=i.list}function k(s){f.value.open(s)}return r(),(s,o)=>{const i=N("base-pagination");return _(),y("div",B,[t("div",S,[F,t("div",G,[t("button",{class:"bg-blue-primary flex items-center px-30 py-15 gap-5 rounded",role:"button",onClick:k},z),t("div",K,[U,I(t("input",{type:"search",name:"search","onUpdate:modelValue":o[0]||(o[0]=e=>u.value=e),onInput:r,placeholder:"Qidiruv",class:"placeholder:text-gray-primary text-black-primary focus:outline-none py-10 text-sm"},null,544),[[w,u.value]])])])]),t("div",Y,[m(n(g)),t("div",H,[(_(!0),y(E,null,T(a.value.list,e=>(_(),D(n(x),{key:e.id,id:e.id,username:e.username,inn:e.inn,contractCount:e.contractCount,partnerCount:e.partnerCount},null,8,["id","username","inn","contractCount","partnerCount"]))),128))])]),m(i,{active:Math.trunc(Number(n(l).query.offset)/6)+1||1,perPage:6,items:a.value.count,onChange:o[1]||(o[1]=e=>C({key:"offset",value:(e-1)*6}))},null,8,["active","items"]),m(n(b),{ref_key:"modalRef",ref:f,onSubmit:n(v),onToast:o[2]||(o[2]=e=>n(P)({text:e,callback:r}))},null,8,["onSubmit"])])}}});export{$ as default};
