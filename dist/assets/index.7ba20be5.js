import{d as O,n as c,q as d,c as v,a as t,e as I,v as E,s as p,u as n,F as T,x as w,B as A,z as _,O as h,C as L,D as N,o as m,E as D,G as P,m as R,A as q}from"./index.6de31075.js";import{g as M}from"./api.ff5fb33b.js";const V={class:"w-full"},B={class:"flex justify-between items-center mb-30"},F=t("p",{class:"text-black-primary text-xl font-bold"},"Foydalanuvchilar",-1),S={class:"flex gap-15 items-center"},G=t("i",{class:"icon-plus"},null,-1),Q=t("p",{class:"text-sm text-white-primary font-medium leading-21 hidden md:block"},"Yangi foydalanuvchi qo\u2018shish",-1),U=[G,Q],j={class:"bg-white-primary flex items-center gap-5 p-5 px-10 rounded",role:"button"},z=t("img",{src:A,class:"w-18 h-18",alt:""},null,-1),Y={class:"w-full p-15 rounded-15 bg-white-primary"},H={class:"rounded text-sm text-black-primary font-medium my-15 gap-10"},X=O({__name:"index",setup(J){const i=R(),y=q(),b=c(()=>_(()=>import("./TheModal.be606fdf.js"),["assets/TheModal.be606fdf.js","assets/index.6de31075.js","assets/index.b3b81775.css","assets/add-black.feba104f.js"])),g=c(()=>_(()=>import("./TableTitle.12905eb5.js"),["assets/TableTitle.12905eb5.js","assets/9.faae7829.js","assets/index.6de31075.js","assets/index.b3b81775.css"])),x=c(()=>_(()=>import("./TableItem.22f5036e.js"),["assets/TableItem.22f5036e.js","assets/9.faae7829.js","assets/arrow-right-s.de4946e2.js","assets/index.6de31075.js","assets/index.b3b81775.css"])),a=d({isLoading:!1,count:0,list:[]});async function C(o){const s={...i.query};s[o.key]=String(o.value),await y.replace({query:s}),r()}const f=d(),u=d("");async function r(){const{offset:o=0}=i.query;h();const[s,l]=await M(u.value,Number(o));L(),a.value.count=l.count,a.value.list=l.list}function k(o){f.value.open(o)}return r(),(o,s)=>{const l=N("base-pagination");return m(),v("div",V,[t("div",B,[F,t("div",S,[t("button",{class:"bg-blue-primary flex items-center px-30 py-15 gap-5 rounded",role:"button",onClick:k},U),t("div",j,[z,I(t("input",{type:"search",name:"search","onUpdate:modelValue":s[0]||(s[0]=e=>u.value=e),onInput:r,placeholder:"Qidiruv",class:"placeholder:text-gray-primary text-black-primary focus:outline-none py-10 text-sm"},null,544),[[E,u.value]])])])]),t("div",Y,[p(n(g)),t("div",H,[(m(!0),v(T,null,w(a.value.list,e=>(m(),D(n(x),{key:e.id,id:e.id,username:e.username,phone:e.phone,passport:e.passport,contractCount:e.contractCount,partnerCount:e.partnerCount},null,8,["id","username","phone","passport","contractCount","partnerCount"]))),128))])]),p(l,{active:Math.trunc(Number(n(i).query.offset)/6)+1||1,perPage:6,items:a.value.count,onChange:s[1]||(s[1]=e=>C({key:"offset",value:(e-1)*6}))},null,8,["active","items"]),p(n(b),{ref_key:"modalRef",ref:f,onSubmit:n(h),onToast:s[2]||(s[2]=e=>n(P)({text:e,callback:r}))},null,8,["onSubmit"])])}}});export{X as default};