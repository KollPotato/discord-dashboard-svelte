import{S as P,i as z,s as C,C as W,k as R,l as T,m as O,h,n as v,b,D as X,E as Y,F as Z,f as p,t as g,w as L,a as V,x as E,c as q,y as I,G as w,g as j,d as y,z as B,H as ee,I as te,J as se,K as le,B as x,q as D,r as N,u as F}from"../../chunks/index-e8ce05bb.js";import{p as ne}from"../../chunks/stores-cff3d914.js";import{u as J,B as re,a as ae,b as oe}from"../../chunks/store-c06ff3d7.js";import{L as A}from"../../chunks/Link-b437056b.js";function fe(r){let e,s;const t=r[1].default,l=W(t,r,r[0],null);return{c(){e=R("li"),l&&l.c(),this.h()},l(n){e=T(n,"LI",{class:!0});var o=O(e);l&&l.l(o),o.forEach(h),this.h()},h(){v(e,"class","h-fit")},m(n,o){b(n,e,o),l&&l.m(e,null),s=!0},p(n,[o]){l&&l.p&&(!s||o&1)&&X(l,t,n,n[0],s?Z(t,n[0],o,null):Y(n[0]),null)},i(n){s||(p(l,n),s=!0)},o(n){g(l,n),s=!1},d(n){n&&h(e),l&&l.d(n)}}}function ue(r,e,s){let{$$slots:t={},$$scope:l}=e;return r.$$set=n=>{"$$scope"in n&&s(0,l=n.$$scope)},[l,t]}class G extends P{constructor(e){super(),z(this,e,ue,fe,C,{})}}function K(r,e,s){const t=r.slice();return t[4]=e[s],t}function ce(r){let e,s;return{c(){e=R("img"),this.h()},l(t){e=T(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","w-24"),le(e.src,s="/assets/logo.svg")||v(e,"src",s),v(e,"alt","walty logo")},m(t,l){b(t,e,l)},p:x,d(t){t&&h(e)}}}function ie(r){let e=r[4].text+"",s;return{c(){s=D(e)},l(t){s=N(t,e)},m(t,l){b(t,s,l)},p:x,d(t){t&&h(s)}}}function $e(r){let e,s;return e=new A({props:{pointer:!0,underline:!0,active:r[1].url.pathname==r[4].href,href:r[4].href,$$slots:{default:[ie]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,l){const n={};l&2&&(n.active=t[1].url.pathname==t[4].href),l&128&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){B(e,t)}}}function Q(r){let e,s;return e=new G({props:{$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,l){const n={};l&130&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){B(e,t)}}}function _e(r){let e,s=r[0].username+"",t,l,n=r[0].discriminator+"",o,u,c,i;return c=new G({props:{$$slots:{default:[he]},$$scope:{ctx:r}}}),{c(){e=R("p"),t=D(s),l=D("#"),o=D(n),u=V(),L(c.$$.fragment),this.h()},l(a){e=T(a,"P",{class:!0});var _=O(e);t=N(_,s),l=N(_,"#"),o=N(_,n),_.forEach(h),u=q(a),E(c.$$.fragment,a),this.h()},h(){v(e,"class","select-none")},m(a,_){b(a,e,_),w(e,t),w(e,l),w(e,o),b(a,u,_),I(c,a,_),i=!0},p(a,_){(!i||_&1)&&s!==(s=a[0].username+"")&&F(t,s),(!i||_&1)&&n!==(n=a[0].discriminator+"")&&F(o,n);const S={};_&128&&(S.$$scope={dirty:_,ctx:a}),c.$set(S)},i(a){i||(p(c.$$.fragment,a),i=!0)},o(a){g(c.$$.fragment,a),i=!1},d(a){a&&h(e),a&&h(u),B(c,a)}}}function me(r){let e,s;return e=new G({props:{$$slots:{default:[de]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,l){const n={};l&128&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){B(e,t)}}}function pe(r){let e;return{c(){e=D("Log out")},l(s){e=N(s,"Log out")},m(s,t){b(s,e,t)},d(s){s&&h(e)}}}function he(r){let e,s;return e=new A({props:{pointer:!0,underline:!0,href:"/logout",$$slots:{default:[pe]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,l){const n={};l&128&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){B(e,t)}}}function ge(r){let e;return{c(){e=D("Login")},l(s){e=N(s,"Login")},m(s,t){b(s,e,t)},d(s){s&&h(e)}}}function de(r){let e,s;return e=new A({props:{pointer:!0,underline:!0,href:oe,$$slots:{default:[ge]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,l){const n={};l&128&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){B(e,t)}}}function ve(r){let e,s,t,l,n,o,u,c;s=new A({props:{pointer:!0,href:"/",$$slots:{default:[ce]},$$scope:{ctx:r}}});let i=r[2],a=[];for(let f=0;f<i.length;f+=1)a[f]=Q(K(r,i,f));const _=f=>g(a[f],1,1,()=>{a[f]=null}),S=[me,_e],k=[];function H(f,$){return f[0]==null?0:1}return o=H(r),u=k[o]=S[o](r),{c(){e=R("nav"),L(s.$$.fragment),t=V(),l=R("ul");for(let f=0;f<a.length;f+=1)a[f].c();n=V(),u.c(),this.h()},l(f){e=T(f,"NAV",{class:!0});var $=O(e);E(s.$$.fragment,$),t=q($),l=T($,"UL",{class:!0});var d=O(l);for(let U=0;U<a.length;U+=1)a[U].l(d);n=q(d),u.l(d),d.forEach(h),$.forEach(h),this.h()},h(){v(l,"class","flex flex-row gap-4 h-fit"),v(e,"class","z-10 flex w-screen text-white flex-row justify-between h-fit items-center p-6 pt-5")},m(f,$){b(f,e,$),I(s,e,null),w(e,t),w(e,l);for(let d=0;d<a.length;d+=1)a[d].m(l,null);w(l,n),k[o].m(l,null),c=!0},p(f,[$]){const d={};if($&128&&(d.$$scope={dirty:$,ctx:f}),s.$set(d),$&6){i=f[2];let m;for(m=0;m<i.length;m+=1){const M=K(f,i,m);a[m]?(a[m].p(M,$),p(a[m],1)):(a[m]=Q(M),a[m].c(),p(a[m],1),a[m].m(l,n))}for(j(),m=i.length;m<a.length;m+=1)_(m);y()}let U=o;o=H(f),o===U?k[o].p(f,$):(j(),g(k[U],1,1,()=>{k[U]=null}),y(),u=k[o],u?u.p(f,$):(u=k[o]=S[o](f),u.c()),p(u,1),u.m(l,null))},i(f){if(!c){p(s.$$.fragment,f);for(let $=0;$<i.length;$+=1)p(a[$]);p(u),c=!0}},o(f){g(s.$$.fragment,f),a=a.filter(Boolean);for(let $=0;$<a.length;$+=1)g(a[$]);g(u),c=!1},d(f){f&&h(e),B(s),ee(a,f),k[o].d()}}}function be(r,e,s){let t,l;te(r,ne,o=>s(1,l=o));const n=[{text:"Dashboard",href:"/dashboard"},{text:"Docs",href:"/docs"},{text:"Discord",href:re},{text:"Invite",href:ae}];return J.subscribe(o=>{s(0,t=o)}),s(0,t=se(J)),[t,l,n]}class ke extends P{constructor(e){super(),z(this,e,be,ve,C,{})}}function we(r){let e,s,t,l,n;s=new ke({});const o=r[1].default,u=W(o,r,r[0],null);return{c(){e=R("div"),L(s.$$.fragment),t=V(),l=R("main"),u&&u.c(),this.h()},l(c){e=T(c,"DIV",{class:!0});var i=O(e);E(s.$$.fragment,i),t=q(i),l=T(i,"MAIN",{class:!0});var a=O(l);u&&u.l(a),a.forEach(h),i.forEach(h),this.h()},h(){v(l,"class","body w-full p-4 svelte-rv2fpx"),v(e,"class","app flex flex-col w-full h-full")},m(c,i){b(c,e,i),I(s,e,null),w(e,t),w(e,l),u&&u.m(l,null),n=!0},p(c,[i]){u&&u.p&&(!n||i&1)&&X(u,o,c,c[0],n?Z(o,c[0],i,null):Y(c[0]),null)},i(c){n||(p(s.$$.fragment,c),p(u,c),n=!0)},o(c){g(s.$$.fragment,c),g(u,c),n=!1},d(c){c&&h(e),B(s),u&&u.d(c)}}}function Le(r,e,s){let{$$slots:t={},$$scope:l}=e;return r.$$set=n=>{"$$scope"in n&&s(0,l=n.$$scope)},[l,t]}class Re extends P{constructor(e){super(),z(this,e,Le,we,C,{})}}export{Re as default};
