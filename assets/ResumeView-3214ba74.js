import{_ as r,o as i,c as n,k as f,a as t,l as y,B as L,r as l,i as x,w as p,F as _,d as b,p as $,j as w,b as E,t as h}from"./index-4079f161.js";const I={name:"TimeLine"},k={class:"timeline"};function T(e,s,a,u,o,d){return i(),n("div",k,[f(e.$slots,"default",{},void 0,!0)])}const q=r(I,[["render",T],["__scopeId","data-v-7cd3eeee"]]);const z={props:["side"],name:"timeLineElement"},B={class:"content"};function R(e,s,a,u,o,d){return i(),n("div",{class:y(a.side+" container")},[t("div",B,[f(e.$slots,"default",{},void 0,!0)])],2)}const S=r(z,[["render",R],["__scopeId","data-v-8b11faba"]]);const V={name:"ResumeView",components:{TimeLineElement:S,TimeLine:q},setup(){L({title:"Resume"})},data(){return{timeline:[{title:"2022",content:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",side:"left"},{title:"2021",content:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",side:"right"},{title:"2020",content:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",side:"left"},{title:"2019",content:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",side:"right"},{title:"2018",content:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",side:"left"}]}},mounted(){let e=100;for(let s of document.getElementsByClassName("opacity-animate"))setTimeout(()=>{s.style.opacity="1"},e),e+=250}},c=e=>($("data-v-eb00a77c"),e=e(),w(),e),C=c(()=>t("h1",null,"Resume",-1)),N=c(()=>t("p",null," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",-1)),F=c(()=>t("h2",null,"TimeLine",-1));function j(e,s,a,u,o,d){const v=l("TimeLineElement"),g=l("TimeLine");return i(),n(_,null,[C,N,F,x(g,{style:{"margin-top":"2rem"}},{default:p(()=>[(i(!0),n(_,null,b(o.timeline,m=>(i(),E(v,{side:m.side,class:"opacity-animate"},{default:p(()=>[t("h2",null,h(m.title),1),t("p",null,h(m.content),1)]),_:2},1032,["side"]))),256))]),_:1})],64)}const D=r(V,[["render",j],["__scopeId","data-v-eb00a77c"]]);export{D as default};