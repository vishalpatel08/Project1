(this["webpackJsonpreact-login"]=this["webpackJsonpreact-login"]||[]).push([[0],{22:function(e,t,c){},32:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(33),r=c.n(s),i=(c(39),c(40),c(12)),l=c(11),o=c(7),j=(c(22),c(10)),u=c.n(j),d=c(5),b=c(0),h=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(o.a)(e,2),c=t[0],a=t[1],s=c.name,r=c.email,j=c.password,h=function(e){a(Object(l.a)(Object(l.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{className:"outer-div",children:Object(b.jsxs)("div",{className:"inner-div",children:[Object(b.jsx)("h1",{children:" Registration "}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"c-label",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:s,className:"c-input",onChange:function(e){h(e)}})]}),Object(b.jsxs)("div",{className:"c-label",children:[Object(b.jsx)("label",{children:"G-mail"}),Object(b.jsx)("input",{type:"text",name:"email",placeholder:"gmail",value:r,className:"c-input",onChange:function(e){h(e)}})]}),Object(b.jsxs)("div",{className:"c-label",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"on",value:j,className:"c-input",onChange:function(e){h(e)}})]}),Object(b.jsx)("button",{className:"cbtn",onClick:function(e){!function(e){e.preventDefault(),u.a.post("http://localhost:3002/register",{username:s,email:r,password:j}).then((function(e){})),a({name:"",email:"",password:""})}(e)},children:" Submit "})]}),Object(b.jsxs)("p",{children:[" Already user ",Object(b.jsx)(d.b,{to:"/",children:"click "})," for Login"]})]})})},m=c(3),O=c(8),p=c.n(O),x=c(13),f=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),r=Object(o.a)(s,2),i=r[0],l=r[1];Object(n.useEffect)((function(){h()}),[]);var j=Object(m.f)().id,h=function(){var e=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.a.post("http://localhost:3002/data",{id:j}).then((function(e){e.data.msg?a(e.data.msg):e.data?a(e.data):a("NO DATA!")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(x.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u.a.post("http://localhost:3002/dataupdate",{user:c[n-1],id:j}).then((function(e){})),h(),f();case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),f=function(){var e=0;c.map((function(t,c){return e+=Number((t.Amount*t.fat*6.5).toFixed(1))})),l(e)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(d.b,{to:"/userlist",children:Object(b.jsx)("div",{className:"backbutton"})}),Object(b.jsx)("div",{className:"ud-out",children:Object(b.jsxs)("div",{className:"ud-container",children:[Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"ud-list",children:[Object(b.jsx)("th",{scope:"col",children:"Date"}),Object(b.jsx)("th",{scope:"col",children:"Amount"}),Object(b.jsx)("th",{scope:"col",children:"F"}),Object(b.jsx)("th",{scope:"col",children:"Total"}),Object(b.jsx)("th",{scope:"col",children:"Action"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{scope:"row",children:e.Date}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"number",placeholder:e.Amount,name:"amount",style:{color:"red",border:"none"},onChange:function(e){return function(e,t){c[t].Amount=e.target.value}(e,t)}})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"number",placeholder:e.fat,name:"fat",style:{color:"red",border:"none"},onChange:function(e){return function(e,t){c[t].fat=e.target.value}(e,t)}})}),Object(b.jsx)("td",{children:(e.Amount*e.fat*6.5).toFixed(1)}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(t){return O(t,e.Date)},children:" Submit "})})]})}))})]}),Object(b.jsxs)("div",{className:"ud-total",children:[" ",i]})]})})]})},v=(c(66),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){s()}),[]);var s=function(){var e=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.a.post("http://localhost:3002/list").then((function(e){e.data.msg?a(e.data.msg):a(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(x.a)(p.a.mark((function e(t,c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u.a.post("http://localhost:3002/delete",{idd:c}).then((function(e){})),s();case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"ul-out",children:[Object(b.jsx)(d.b,{to:"/",children:Object(b.jsx)("div",{className:"backbutton"})}),Object(b.jsx)("div",{className:"ul-container",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{className:"ul-head",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Serial"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Action"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{scope:"row",children:t+1}),Object(b.jsx)("td",{children:Object(b.jsxs)(d.b,{to:"/userdata/".concat(e.Id),children:[" ",e.Name]})}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(t){return r(t,e.Id)},children:" Delete "})})]})}))})]})})]})}),N=(c(32),function(){var e=Object(n.useState)({name:"",shift:""}),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(o.a)(s,2),j=r[0],d=r[1],h=c.name,m=c.shift,O=function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u.a.post("http://localhost:3002/newuser",{username:h,shift:m}).then((function(e){e.data.msg?d(e.data.msg):(d(" Succesfully Registered "+e.data),console.log(e))})),a({name:""});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"new-u-out",children:Object(b.jsxs)("div",{className:"new-u-in",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{className:"Newuser",children:" New User"})}),Object(b.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(b.jsxs)("div",{className:"row mb-3",children:[Object(b.jsx)("label",{htmlFor:"name",className:"A-Label",children:"Name"}),Object(b.jsx)("div",{className:"i-adduser",children:Object(b.jsx)("input",{type:"text",className:"form-control",name:"name",value:h,onChange:function(e){return function(e){a(Object(l.a)(Object(l.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))}(e)}})})]}),Object(b.jsx)("button",{type:"submit",className:"btn-s",children:"Submit"})]}),Object(b.jsx)("h1",{children:j})]})})}),g=function(){return Object(b.jsx)("div",{className:"f-div1",children:Object(b.jsxs)("div",{className:"f-div",children:[Object(b.jsx)("div",{className:"flink1",children:Object(b.jsxs)(d.b,{to:"/userlist",children:[" ",Object(b.jsx)("button",{id:"p-button",children:" User List "})," "]})}),Object(b.jsx)("div",{className:"flink2",children:Object(b.jsx)(d.b,{to:"/adduser",children:Object(b.jsx)("button",{id:"p-button",children:" Add New User "})})})]})})};var w=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(d.a,{basename:window.location.pathname||"",children:[Object(b.jsx)(m.a,{exact:!0,path:"/",component:g}),Object(b.jsx)(m.a,{exact:!0,path:"/reg",component:h}),Object(b.jsx)(m.a,{exact:!0,path:"/adduser",component:N}),Object(b.jsx)(m.a,{exact:!0,path:"/userdata/:id",component:f}),Object(b.jsx)(m.a,{exact:!0,path:"/userlist",component:v})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),y()}},[[67,1,2]]]);
//# sourceMappingURL=main.aeafd9ff.chunk.js.map