import{W as a,j as e}from"./app-D4w2LTYd.js";const c=()=>{const{data:r,setData:s,post:n,processing:l,errors:i}=a({title:"",description:""}),o=t=>{t.preventDefault(),n(route("your.route.name"))};return e.jsxs("div",{children:[e.jsx("h1",{children:"Create New Item"}),e.jsxs("form",{onSubmit:o,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsx("input",{type:"text",id:"title",value:r.title,onChange:t=>s("title",t.target.value)}),i.title&&e.jsx("span",{children:i.title})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx("textarea",{id:"description",value:r.description,onChange:t=>s("description",t.target.value)}),i.description&&e.jsx("span",{children:i.description})]}),e.jsx("button",{type:"submit",disabled:l,children:"Create"})]})]})};export{c as default};
