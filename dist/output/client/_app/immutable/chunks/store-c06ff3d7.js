import{w as r}from"./index-b9bbb9a2.js";const n="http://127.0.0.1:5173",i="https://discord.com",l=9,_=`${i}/api/v${l}`,t={permissions:"8",scope:encodeURIComponent("bot")},o={scope:encodeURIComponent("identify guilds"),response_type:"code",redirect_uri:encodeURIComponent(`${n}/login`)},c="979022384155742248",d=`https://discord.com/api/oauth2/authorize?client_id=${c}&permissions=${t.permissions}&scope=${t.scope}`,I=`https://discord.com/api/oauth2/authorize?client_id=${c}&redirect_uri=${o.redirect_uri}&response_type=${o.response_type}&scope=${o.scope}`,S="https://discord.gg/Nq49k4kY6z",a=r(null,e=>{const s=localStorage.getItem("user");if(s==null){e(null);return}e(JSON.parse(s))});a.subscribe(e=>{if(e==null){localStorage.removeItem("user");return}localStorage.setItem("user",JSON.stringify(e))});const p=r(null,e=>{const s=localStorage.getItem("guilds");if(s==null){e(null);return}e(JSON.parse(s))});p.subscribe(e=>{if(e==null){localStorage.removeItem("guilds");return}localStorage.setItem("guilds",JSON.stringify(e))});export{S as B,_ as D,d as a,I as b,n as c,p as g,a as u};
