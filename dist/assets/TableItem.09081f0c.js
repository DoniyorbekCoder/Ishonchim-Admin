import{_ as u}from"./9.faae7829.js";import{_ as a}from"./arrow-right-s.de4946e2.js";import{d as c,o as d,A as l,E as p,a as e,t as s,u as m,z as _}from"./index.e72e54c2.js";function y(t){t.slice(0,4);const r=t.slice(4,6),n=t.slice(6,9),o=t.slice(9,11),i=t.slice(11,13);return`(${r}) ${n}-${o}-${i}`}const f={class:"w-115 flex items-center gap-15"},g=e("div",{class:"max-w-50 max-h-50 overflow-hidden rounded-5 border border-white-secondary shrink-0"},[e("img",{class:"w-full h-full object-cover",src:u,alt:""})],-1),b={class:"w-150"},w={class:"w-200"},h={class:"w-115"},q=e("p",{class:"w-115"},"15ta",-1),S=e("div",{class:"w-175 flex justify-between items-center"},[e("p",null,"10ta"),e("div",{class:"w-40 h-40 rounded-full bg-white-secondary flex items-center justify-center"},[e("img",{src:a,class:"w-20 h-20",alt:""})])],-1),N=c({__name:"TableItem",props:{id:{type:Number,required:!0},username:{type:String,required:!0},password:{type:String,required:!0},firstName:{type:String,required:!0},lastName:{type:String,required:!0},birthday:{type:String,required:!0},isMan:{type:Boolean,required:!0},bio:{type:String,required:!0},balance:{type:Number,required:!0},phone:{type:String,required:!0},jobs:{type:String,required:!0},token:{type:String,required:!0},type:{type:String,required:!0},image:{type:String,required:!0},passport:{type:Object,required:!0}},setup(t){const r=t;return(n,o)=>{const i=_("router-link");return d(),l(i,{to:{path:"/user",query:{id:JSON.stringify(r.id)}},role:"button",class:"flex w-full items-center justify-between px-15 leading-21 text-sm text-black-primary font-medium gap-15 mb-15"},{default:p(()=>[e("div",f,[g,e("p",null,s(r.id),1)]),e("p",b,s(r.username),1),e("p",w,s(m(y)("+998978965566")),1),e("p",h,s(r.passport.number),1),q,S]),_:1},8,["to"])}}});export{N as default};
