import{W as m,r as c,j as e,Y as d,a as p}from"./app-D4w2LTYd.js";import"./TextInput-D0LzptFl.js";import{N as h}from"./Navbar-BUZCUVSp.js";import"./index-DiT7gi1a.js";function v({status:o,canResetPassword:u}){const{data:a,setData:r,post:l,processing:t,errors:x,reset:i}=m({email:"",password:"",remember:!1});c.useEffect(()=>()=>{i("password")},[]);const n=s=>{s.preventDefault(),l(route("login"))};return e.jsxs(e.Fragment,{children:[e.jsx(h,{}),e.jsxs("div",{class:"row no-gutters container",children:[e.jsx("div",{class:"col-lg-4"}),e.jsx("div",{class:"col-lg-7",children:e.jsx("div",{class:"padding_eight_all",children:e.jsx("div",{className:"tab-content",children:e.jsxs("div",{className:"tab-pane fade show active",id:"login",role:"tabpanel",children:[e.jsx("div",{className:"heading_s1 mb-3",children:e.jsx("h4",{children:"Login"})}),e.jsx(d,{title:"Log in"}),o&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:o}),e.jsxs("form",{onSubmit:n,className:"login",children:[e.jsx("div",{className:"form-group mb-3",children:e.jsx("input",{id:"email",type:"email",name:"email",value:a.email,className:"form-control",placeholder:"Enter Email",autoComplete:"username",isFocused:!0,onChange:s=>r("email",s.target.value)})}),e.jsx("div",{className:"form-group mb-3",children:e.jsx("input",{className:"form-control",id:"password",type:"password",name:"password",value:a.password,placeholder:"Enter Your Password",autoComplete:"current-password",onChange:s=>r("password",s.target.value)})}),e.jsxs("div",{className:"login_footer form-group",children:[e.jsx(p,{href:route("password.request"),children:"Lost your password?"}),e.jsx("div",{className:"chek-form mb-3",children:e.jsxs("div",{className:"custome-checkbox",children:[e.jsx("input",{className:"form-check-input",name:"remember",checked:a.remember,onChange:s=>r("remember",s.target.checked)}),e.jsx("label",{className:"form-check-label",htmlFor:"exampleCheckbox3",children:"Remember me"})]})})]}),e.jsx("div",{className:"form-group",children:e.jsx("button",{type:"submit",className:"btn-default btn-block",name:"login",disabled:t,children:"Log in"})})]})]})})})})]})]})}export{v as default};