(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(7),c=a(10),s=a(2),o=a(6),l=a(1),d=(a(15),a(9)),u=a.n(d),m=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],j=a(0),b=function(e){var t=e.user;return t?Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name}):Object(j.jsx)("span",{className:"UserInfo",children:"Unknown User"})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function O(e){return h.find((function(t){return t.id===e}))||null}var f=function(){return Object(j.jsx)("div",{children:m.map((function(e){var t=O(e.userId);return Object(j.jsxs)("article",{"data-id":e.id,className:u()("TodoInfo",{"TodoInfo--completed":e.completed}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:e.title}),Object(j.jsx)(b,{user:null!==t?t:void 0})]},e.id)}))})},p=function(){return Object(j.jsx)("section",{className:"TodoList",children:Object(j.jsx)(f,{})})},x=h.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)})),v=function(e){var t=e.onSubmit,a=Object(l.useState)(""),n=Object(s.a)(a,2),i=n[0],r=n[1],c=Object(l.useState)(!1),o=Object(s.a)(c,2),d=o[0],u=o[1],m=Object(l.useState)(0),b=Object(s.a)(m,2),h=b[0],f=b[1],p=Object(l.useState)(!1),v=Object(s.a)(p,2),S=v[0],y=v[1];return Object(j.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){var a;e.preventDefault(),u(!i),y(!h),i&&h&&(t({id:0,title:i,userId:null===(a=O(h))||void 0===a?void 0:a.id,completed:!1}),r(""),f(0))},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",htmlFor:"todo-title",children:"Title: "}),Object(j.jsx)("input",{id:"todo-title",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:i,onChange:function(e){var t=e.target.value.replace(/[^a-zA-Za-\u044f\u0410-\u042f0-9\s]/g,"");r(t),u(!1)}}),d&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",htmlFor:"todo-user",children:"User: "}),Object(j.jsxs)("select",{"data-cy":"userSelect",id:"todo-user",value:h,onChange:function(e){f(+e.target.value),y(!1)},children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),x]}),S&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},S=["id"],y=h.map((function(e){return{id:e.id,title:e.name,userId:e.id,completed:!1}}));function N(e){return Math.max.apply(Math,Object(o.a)(e.map((function(e){return e.id}))))+1}var I=function(){var e=Object(l.useState)(y),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsx)(v,{onSubmit:function(e){e.id;var t=Object(c.a)(e,S),i=Object(r.a)(Object(r.a)({},t),{},{id:N(a)});n((function(e){return[].concat(Object(o.a)(e),[i])}))}}),Object(j.jsx)(p,{todos:a})]})};i.a.render(Object(j.jsx)(I,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.04a6025d.chunk.js.map