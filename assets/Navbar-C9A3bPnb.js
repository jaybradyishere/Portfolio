import{r as a,j as e}from"./index-DqXmemhf.js";function f(){const[n,i]=a.useState(!1);function s(t){const o=document.getElementById(t);if(o){const l=document.querySelector("header").offsetHeight,c=o.offsetTop-l;window.scrollTo({top:c,behavior:"smooth"})}}function r(){i(!n)}return e.jsx("header",{children:e.jsxs("nav",{className:"nav-bar",children:[e.jsx("div",{className:"title",children:e.jsx("h1",{children:e.jsx("a",{href:"#home",onClick:t=>{t.preventDefault(),s("home")},children:"Jay Brady"})})}),e.jsxs("div",{className:"hamburger-menu",onClick:r,children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsxs("ul",{className:`list-items nav-items ${n?"active":""}`,children:[e.jsx("li",{children:e.jsx("a",{href:"#home",onClick:t=>{t.preventDefault(),s("home")},children:"Home"})}),e.jsx("li",{children:e.jsx("a",{href:"#projects",onClick:t=>{t.preventDefault(),s("projects")},children:"Projects"})}),e.jsx("li",{children:e.jsx("a",{href:"#about",onClick:t=>{t.preventDefault(),s("about")},children:"About"})})]})]})})}export{f as default};
