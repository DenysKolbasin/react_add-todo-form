(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(7),s=a(10),o=a(2),l=a(1),d=(a(15),a(9)),u=a.n(d),m=a(0),j=function(e){var t=e.user;return t?Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name}):Object(m.jsx)("span",{className:"UserInfo",children:"Unknown User"})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function h(e){return b.find((function(t){return t.id===e}))||null}var O=function(e){var t=e.todos;return Object(m.jsx)("div",{children:t.map((function(e){var t=h(Number(e.userId));return Object(m.jsxs)("article",{"data-id":e.id,className:u()("TodoInfo",{"TodoInfo--completed":e.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:e.title}),t&&Object(m.jsx)(j,{user:t})]},e.id)}))})},f=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:Object(m.jsx)(O,{todos:t})})},p=b.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}));function x(e){return Math.max.apply(Math,Object(r.a)(e.map((function(e){return e.id}))))+1}var v=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],S=function(e){var t=e.onSubmit,a=Object(l.useState)(""),n=Object(o.a)(a,2),i=n[0],r=n[1],c=Object(l.useState)(!1),s=Object(o.a)(c,2),d=s[0],u=s[1],j=Object(l.useState)(0),b=Object(o.a)(j,2),O=b[0],f=b[1],S=Object(l.useState)(!1),y=Object(o.a)(S,2),N=y[0],I=y[1];return Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){var a;e.preventDefault(),u(!i),I(!O),i&&O&&(t({id:x(v),title:i,userId:null===(a=h(O))||void 0===a?void 0:a.id,completed:!1}),r(""),f(0))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",htmlFor:"todo-title",children:"Title: "}),Object(m.jsx)("input",{id:"todo-title",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:i,onChange:function(e){var t=e.target.value.replace(/[^a-zA-Za-\u044f\u0410-\u042f0-9\s]/g,"");r(t),u(!1)}}),d&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",htmlFor:"todo-user",children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",id:"todo-user",value:O,onChange:function(e){f(+e.target.value),I(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),p]}),N&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},y=["id"],N=b.map((function(e){return{id:e.id,title:e.name,userId:e.id,completed:!1}})),I=function(){var e=Object(l.useState)(N),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsx)(S,{onSubmit:function(e){e.id;var t=Object(s.a)(e,y),i=Object(c.a)(Object(c.a)({},t),{},{id:x(a)});n((function(e){return[].concat(Object(r.a)(e),[i])}))}}),Object(m.jsx)(f,{todos:a})]})};i.a.render(Object(m.jsx)(I,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6a659bd5.chunk.js.map