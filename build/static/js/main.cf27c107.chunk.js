(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(13),u=t.n(l),o=t(2),c=function(e){var n=e.persons,t=e.newFilter,a=e.deleteName;return r.a.createElement(r.a.Fragment,null,n.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())})).map((function(e){return r.a.createElement("p",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return a(e.id,e.name)}},"delete"))})))},i=function(e){return r.a.createElement("form",{onSubmit:e.addName},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){return r.a.createElement("p",null,"filter shown with ",r.a.createElement("input",{value:e.newFilter,onChange:e.handleFilterChange}))},d=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}},n)},s=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}},n)},f=t(3),p=t.n(f),b="/api/persons",h=function(){return p.a.get(b)},g=function(e){return p.a.post(b,e)},E=function(e){p.a.delete(b+"/"+e)},v=function(e,n){return p.a.put(b+"/"+e,n)},w=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],l=n[1],u=Object(a.useState)(""),f=Object(o.a)(u,2),p=f[0],b=f[1],w=Object(a.useState)(""),O=Object(o.a)(w,2),j=O[0],C=O[1],N=Object(a.useState)(""),y=Object(o.a)(N,2),S=y[0],k=y[1],x=Object(a.useState)(null),F=Object(o.a)(x,2),U=F[0],B=F[1],I=Object(a.useState)(null),J=Object(o.a)(I,2),P=J[0],z=J[1];Object(a.useEffect)((function(){h().then((function(e){l(e.data)}))}),[]),Object(a.useEffect)((function(){setTimeout((function(){B(null),z(null)}),5e3)}),[U,P]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(d,{message:U}),r.a.createElement(s,{message:P}),r.a.createElement(m,{newFilter:S,handleFilterChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(i,{addName:function(e){if(e.preventDefault(),""===p||""===j)alert("input name and number");else{for(var n,a={name:p,number:j},r=!1,u=0;u<t.length;u++)if(t[u].name.toUpperCase()===p.toUpperCase()){r=!0,n=t[u].id;break}!0===r&&window.confirm("".concat(p," is already added to phonebook, replace the old number with a new one?"))&&v(n,a).then((function(e){l(t.map((function(t){return t.id!==n?t:e.data}))),z("Information of '".concat(p,"' was modified"))})).catch((function(e){B("Information of '".concat(p,"' has already been removed from server")),l(t.filter((function(e){return e.id!==n})))})),!1===r&&g(a).then((function(e){l(t.concat(e.data)),z("Added '".concat(p,"'"))})).catch((function(e){B("Person validation failed: ".concat(JSON.stringify(e.response.data)))})),b(""),C("")}},newName:p,handleNameChange:function(e){b(e.target.value)},newNumber:j,handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(c,{persons:t,newFilter:S,deleteName:function(e,n){window.confirm("Delete "+n+" ?")&&(E(e),l(t.filter((function(n){return n.id!==e}))),z("Person '".concat(n,"' was deleted")))}}))};u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cf27c107.chunk.js.map