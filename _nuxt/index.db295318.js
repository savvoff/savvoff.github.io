import{r as w,a as f,o as s,b as i,e,t as o,u as _,f as M,h as x,i as B,j as L,k as S,F as p,l as m,m as T,p as g}from"./entry.e3e81a33.js";const A={class:"content__title"},C={class:"content__title-line content__title-line--1","data-splitting":""},D={class:"content__title-line content__title-line--2","data-splitting":""},I={__name:"BgTitle",setup(k){const d=w("Ihor Savvov"),c=f(()=>d.value.split(" "));return(h,a)=>(s(),i("h1",A,[e("span",C,o(_(c)[0]),1),e("span",D,o(_(c)[1]),1)]))}},N={class:"content"},z=["href","data-title"],E={class:"preview"},F=["id"],H=e("button",{class:"preview__item-back unbutton"},[e("span",null,"Back")],-1),O={class:"preview__item-imgwrap"},V={"data-splitting":"",class:"preview__item-title"},R={class:"preview__item-content"},U={class:"preview__item-meta"},q={class:"preview__item-description"},G={class:"preview__item-info"},J=e("p",{class:"preview__item-meta"},"Used technologies:",-1),K=["href"],W={__name:"index",setup(k,{expose:d}){const{$grid:c,$event:h}=M(),{public:{projects:a}}=x(),v=w(null),u=["#684ee3","#c0ec59","#0053d4","#2187f1","#54c4db","#9a4fd8","#f4c466"],b=f(()=>{let r=[],l=0;if(a.length>u.length)do r.push(...u),l++;while(l<Math.ceil(a.length/u.length));return r});return B(()=>{L(".preview .preview__item-img",{background:!0},()=>{h("imgs:loaded");const r=c(v.value);r.on("mouseEnterItem",l=>window.cursor.DOM.text.innerHTML=l),r.on("mouseLeaveItem",l=>window.cursor.DOM.text.innerHTML=""),window.cursor.renderedStyles.scaleTrail.current=1})}),d({projects:a}),(r,l)=>(s(),i("div",N,[S(I),e("div",{class:"grid",ref_key:"grid",ref:v},[(s(!0),i(p,null,m(_(a),(t,n)=>(s(),i("a",{key:n,class:T(`grid__item pos-${n+1}`),href:`#preview-${n+1}`,"data-title":t.title},[e("div",{class:"grid__item-img",style:g(`background: ${_(b)[n]}`)},null,4)],10,z))),128))],512),e("div",E,[(s(!0),i(p,null,m(_(a),(t,n)=>(s(),i("div",{key:n,id:`preview-${n+1}`,class:"preview__item"},[H,e("div",O,[e("div",{class:"preview__item-img",style:g(`background-image:url(${t.image});`)},null,4)]),e("h2",V,o(t.title),1),e("div",R,[e("div",U,[e("span",null,o(t.category),1),e("span",null,o(t.date),1)]),e("p",q,o(t.desc),1),e("div",G,[J,(s(!0),i(p,null,m(t.stack,($,y)=>(s(),i("span",{key:y},o($),1))),128))]),e("a",{class:"preview__item-button",href:t.link,target:"_blank"},"See site",8,K)])],8,F))),128))])]))}};export{W as default};
