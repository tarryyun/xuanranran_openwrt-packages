import{d as u,r as e,o as r,e as s,w as i,b as c,P as t}from"./index.js?v=bc5d78ec";const _=u({__name:"index",setup(l){const a=[{name:"disk",title:"\u6211\u7684\u78C1\u76D8",path:"/router/disk"},{name:"disk-raid",title:"\u78C1\u76D8\u9635\u5217",fn:()=>{t({full:!0,title:"\u78C1\u76D8\u9635\u5217",src:"/cgi-bin/luci/admin/nas/raid"})}},{name:"disk-smart",title:"S.M.A.R.T",fn:()=>{t({full:!0,title:"S.M.A.R.T",src:"/cgi-bin/luci/admin/nas/smart"})}}];return(m,d)=>{const n=e("router-loading"),o=e("layout-page");return r(),s(o,{menus:a},{default:i(()=>[c(n)]),_:1})}}});export{_ as default};
