(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var a,r,c,o,i,s,l,d,b,p=e(1),u=e.n(p),x=e(10),h=e.n(x),f=(e(18),e(12)),j=e(4),m=e(5),g=e(6),O=e(8),v=e(7),C=e(25),y=function(n,t){localStorage.setItem(n,JSON.stringify(t))},w=function(n){var t=localStorage.getItem("".concat(n));return JSON.parse(t)},S=e(2),k=e(3),z=k.a.form(a||(a=Object(S.a)(["\n  padding: 14px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: 0.03em;\n  border: 1px solid #2c2a2a;\n"]))),A=k.a.label(r||(r=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),D=k.a.input(c||(c=Object(S.a)(["\n  margin-bottom: 24px;\n  padding: 4px 0px 4px 10px;\n  /* width: 80%; */\n  border: 1px solid #89888ba6;\n  outline: none;\n\n  &:focus {\n    border: 1px solid #2f8cb8b2;\n    box-shadow: 0px 0px 4px 2px #2f8cb8b2;\n  }\n"]))),J=k.a.span(o||(o=Object(S.a)(["\n  margin-bottom: 8px;\n"]))),Z=k.a.button(i||(i=Object(S.a)(["\n  margin-top: 10px;\n  padding: 2px 8px;\n  background-color: #fff;\n  border: 1px solid #615e5e;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #98b0e4;\n  }\n"]))),M=e(0),N=function(n){Object(O.a)(e,n);var t=Object(v.a)(e);function e(){var n;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.handleChange=function(t){var e=t.target.name,a=t.target.value;n.setState(Object(j.a)({},e,a))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,r=e.number;n.props.handleSubmit(a,r),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(g.a)(e,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return Object(M.jsxs)(z,{onSubmit:this.handleSubmit,children:[Object(M.jsxs)(A,{children:[Object(M.jsx)(J,{children:"Name"}),Object(M.jsx)(D,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(M.jsxs)(A,{children:[Object(M.jsx)(J,{children:"Number"}),Object(M.jsx)(D,{type:"tel",name:"number",value:e,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(M.jsx)(Z,{type:"submit",children:"Add contact"})]})}}]),e}(p.Component),q=k.a.li(s||(s=Object(S.a)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0.03em;\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),B=k.a.span(l||(l=Object(S.a)(["\n  margin-right: 10px;\n"]))),I=k.a.button(d||(d=Object(S.a)(["\n  padding: 2px 4px;\n  border: 1px solid #615e5e;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.03em;\n\n  &:hover {\n    background-color: #eb1212;\n  }\n"])));function L(n){var t=n.onDeleteContact,e=n.contact,a=e.name,r=e.number,c=e.id;return Object(M.jsxs)(q,{children:[Object(M.jsxs)(B,{children:[a,": ",r]}),Object(M.jsx)(I,{type:"button",onClick:function(){return t(c)},children:"Delete"})]})}var V,$,E=k.a.ul(b||(b=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 40px;\n  padding-bottom: 20px;\n"])));function F(n){var t=n.contacts,e=n.onDeleteContact;return Object(M.jsx)(E,{children:t.map((function(n){return Object(M.jsx)(L,{contact:n,onDeleteContact:e},n.id)}))})}var P,U,G,H=k.a.h3(V||(V=Object(S.a)(["\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: 0.03em;\n"]))),K=k.a.input($||($=Object(S.a)(["\n  margin-bottom: 24px;\n  padding: 4px 0px 4px 10px;\n  width: 80%;\n  border: 1px solid ",";\n  outline: none;\n  ","\n\n  &:focus {\n    border: 1px solid #2f8cb8b2;\n    box-shadow: 0px 0px 4px 2px #2f8cb8b2;\n  }\n"])),(function(n){return n.filter?"#2f8cb8b2":"#89888ba6"}),(function(n){return n.filter?"box-shadow: 0px 0px 4px 2px #2f8cb8b2;":null}));function Q(n){var t=n.filter,e=n.handleChange;return Object(M.jsxs)("div",{children:[Object(M.jsx)(H,{children:"Find contacts by name"}),Object(M.jsx)(K,{filter:t,type:"text",name:"filter",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:e})]})}var R=k.a.div(P||(P=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 400px;\n"]))),T=k.a.div(U||(U=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  width: 400px;\n"]))),W=k.a.h1(G||(G=Object(S.a)(["\n  margin-bottom: 20px;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 0.03em;\n"]))),X=function(n){Object(O.a)(e,n);var t=Object(v.a)(e);function e(){var n;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},n.handleChange=function(t){var e=t.target.name,a=t.target.value;n.setState(Object(j.a)({},e,a))},n.handleSubmit=function(t,e){if(n.nameVerification(t))alert("".concat(t," is already in contacts"));else{var a={id:Object(C.a)(),name:t,number:e};n.setState({contacts:[].concat(Object(f.a)(n.state.contacts),[a])})}},n.nameVerification=function(t){return n.state.contacts.find((function(n){return t===n.name}))},n.deleteContact=function(t){var e=n.state.contacts.filter((function(n){return n.id!==t}));n.setState({contacts:e})},n}return Object(g.a)(e,[{key:"componentDidMount",value:function(){var n=w("contacts");n&&this.setState({contacts:n})}},{key:"componentDidUpdate",value:function(n,t){var e=this.state.contacts;e!==t.contacts&&y("contacts",e)}},{key:"render",value:function(){var n=this.state,t=n.filter,e=n.contacts.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return Object(M.jsxs)(R,{children:[Object(M.jsxs)(T,{children:[Object(M.jsx)(W,{children:"Phonebook"}),Object(M.jsx)(N,{handleSubmit:this.handleSubmit})]}),Object(M.jsxs)(T,{children:[Object(M.jsx)(W,{children:"Contacts"}),Object(M.jsx)(Q,{filter:t,handleChange:this.handleChange}),Object(M.jsx)(F,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),e}(p.Component);h.a.render(Object(M.jsx)(u.a.StrictMode,{children:Object(M.jsx)(X,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.fd85d45b.chunk.js.map