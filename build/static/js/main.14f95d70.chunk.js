(this["webpackJsonpcontact-form"]=this["webpackJsonpcontact-form"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"id":1,"firstName":"Karan","lastName":"Thakkar","phoneNo":8828088551},{"id":"f0fb5ea0-55d6-11eb-bd6f-1da9118ad66f","firstName":"Heads","lastName":"Trait","phoneNo":"28282828"}]')},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),u=n(16),i=n.n(u),o=(n(24),n(5)),s=n(3),j=(n(25),n(17)),b=n(46),l=n(18),O=n.n(l);var d=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useState)(j),u=Object(s.a)(r,2),i=u[0],l=u[1],d=Object(a.useState)(),f=Object(s.a)(d,2),h=f[0],p=f[1],v=Object(a.useState)(),x=Object(s.a)(v,2),m=x[0],N=x[1],g=Object(a.useState)(),C=Object(s.a)(g,2),S=C[0],E=C[1],k=Object(a.useState)(),F=Object(s.a)(k,2),w=F[0],L=F[1],T=Object(a.useState)(),A=Object(s.a)(T,2),J=A[0],R=A[1],B=Object(a.useState)(),D=Object(s.a)(B,2),I=D[0],P=D[1],U=Object(a.useState)(),y=Object(s.a)(U,2),H=y[0],K=y[1];Object(a.useEffect)((function(){e.current.value="",t.current.value="",n.current.value=""}),[i]);var M=function(e){O.a.post("http://localhost:5000/write",e).then((function(e){}))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Add new contact"}),Object(c.jsx)("input",{placeholder:"Enter First Name",onChange:function(e){return p(e.target.value)},value:h||"",ref:e}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"Enter Last Name",onChange:function(e){return N(e.target.value)},value:m||"",ref:t}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"Enter phone number",onChange:function(e){return E(e.target.value)},value:S||"",ref:n}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){if(h&&m&&S){var e={id:Object(b.a)(),firstName:h,lastName:m,phoneNo:S},t=[].concat(Object(o.a)(i),[e]);l(t),p(),N(),E(),M(t)}},children:"Add Contact"})]}),J||I||H?Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Update contact"}),Object(c.jsx)("input",{placeholder:"Enter First Name",onChange:function(e){return R(e.target.value)},value:J||""}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"Enter Last Name",onChange:function(e){return P(e.target.value)},value:I||""}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"Enter phone number",onChange:function(e){return K(e.target.value)},value:H||""}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){var e={id:w,firstName:J,lastName:I,phoneNo:H},t=Object(o.a)(i).filter((function(e){return e.id!==w})),n=[].concat(Object(o.a)(t),[e]);l(n),L(),R(),P(),K(),M(n)},children:"Update Contact"})]}):null,Object(c.jsx)("div",{className:"contacts",children:i?i.map((function(e){return Object(c.jsxs)("div",{className:"contact",children:[Object(c.jsxs)("h3",{children:[e.firstName," ",e.lastName]}),Object(c.jsx)("p",{children:e.phoneNo}),Object(c.jsx)("button",{onClick:function(){return function(e,t,n,c){L(e),R(t),P(n),K(c)}(e.id,e.firstName,e.lastName,e.phoneNo)},children:"Edit"}),Object(c.jsx)("button",{onClick:function(){return function(e){var t=Object(o.a)(i).filter((function(t){return t.id!==e}));l(t),M(t)}(e.id)},children:"Delete"})]},e.id)})):null})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),c(e),a(e),r(e),u(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),f()}},[[44,1,2]]]);
//# sourceMappingURL=main.14f95d70.chunk.js.map