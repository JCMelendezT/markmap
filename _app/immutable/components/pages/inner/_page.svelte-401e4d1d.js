import{S,i as T,s as D,F as d,N as c,w as C,a as E,x as M,c as O,y as L,b as R,O as b,f as F,t as H,z as P,h as q,o as z}from"../../../chunks/index-90fe3501.js";import{T as N}from"../../../chunks/toolbar-146086e3.js";import{M as U}from"../../../chunks/markmap-ce07e57d.js";function V(o){let t,s,u,i,m,l,a,r;function v(n){o[6](n)}function g(n){o[7](n)}function k(n){o[8](n)}function $(n){o[9](n)}let p={class:"w-screen h-screen",fit:o[4],content:o[3],onReload:B,onOpenLink:G};return o[0]!==void 0&&(p.mm=o[0]),o[1]!==void 0&&(p.el=o[1]),o[5]!==void 0&&(p.setCursor=o[5]),o[2]!==void 0&&(p.transformer=o[2]),t=new U({props:p}),d.push(()=>c(t,"mm",v,o[0])),d.push(()=>c(t,"el",g,o[1])),d.push(()=>c(t,"setCursor",k,o[5])),d.push(()=>c(t,"transformer",$,o[2])),a=new N({props:{class:"absolute right-0 bottom-0 mr-2 mb-2",mm:o[0],onFullPageView:A}}),{c(){C(t.$$.fragment),l=E(),C(a.$$.fragment)},l(n){M(t.$$.fragment,n),l=O(n),M(a.$$.fragment,n)},m(n,e){L(t,n,e),R(n,l,e),L(a,n,e),r=!0},p(n,[e]){const f={};e&16&&(f.fit=n[4]),e&8&&(f.content=n[3]),!s&&e&1&&(s=!0,f.mm=n[0],b(()=>s=!1)),!u&&e&2&&(u=!0,f.el=n[1],b(()=>u=!1)),!i&&e&32&&(i=!0,f.setCursor=n[5],b(()=>i=!1)),!m&&e&4&&(m=!0,f.transformer=n[2],b(()=>m=!1)),t.$set(f);const w={};e&1&&(w.mm=n[0]),a.$set(w)},i(n){r||(F(t.$$.fragment,n),F(a.$$.fragment,n),r=!0)},o(n){H(t.$$.fragment,n),H(a.$$.fragment,n),r=!1},d(n){P(t,n),n&&q(l),P(a,n)}}}function _(o,t){parent.postMessage({type:o,data:t},window.location.origin)}function j(){_("getData")}function A(){_("goToFullPage")}function B(){window.location.reload()}function G(o){const t=new URL(o,window.top.location.href);return t.origin===window.location.origin?_("navigate",o):window.open(t,"_blank"),!1}function I(o,t,s){let u,i,m,l="",a=!0,r;const v={setData(e){s(3,l=e)},setCursor(e){r==null||r(e)},setFit(e){s(4,a=e)},downloadSvg(){if(!i)return;const e=i.outerHTML.replace(/<br>/g,"<br/>");_("downloadSvg",e)},downloadHtml(){if(!m)return;const e=m.transform(l);_("downloadHtml",{result:e})}};function g(e){const{type:f,data:w}=e.data,h=v[f];h==null||h(w)}z(()=>(window.addEventListener("message",g),j(),()=>{window.removeEventListener("message",g)}));function k(e){u=e,s(0,u)}function $(e){i=e,s(1,i)}function p(e){r=e,s(5,r)}function n(e){m=e,s(2,m)}return[u,i,m,l,a,r,k,$,p,n]}class W extends S{constructor(t){super(),T(this,t,I,V,D,{})}}export{W as default};
