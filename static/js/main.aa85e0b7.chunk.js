(this["webpackJsonpmy-homework"]=this["webpackJsonpmy-homework"]||[]).push([[0],[,,,,,,,,function(e,t,r){e.exports={emptyPage:"pages_emptyPage__19Rji",error:"pages_error__3aA0b",number404:"pages_number404__bsPm7",prejuniorPage:"pages_prejuniorPage__1SZkg"}},function(e,t,r){e.exports={affairs:"Affairs_affairs__OSx8c",affair:"Affairs_affair__2hyBG",deleteBtn:"Affairs_deleteBtn__hb8cs",filterBtn:"Affairs_filterBtn__3hAIE",activeBtn:"Affairs_activeBtn__2VDtG",priority:"Affairs_priority__L4Wzc",low:"Affairs_low__2MLgR",middle:"Affairs_middle__1FpVk",high:"Affairs_high__3fpll"}},,,function(e,t,r){e.exports={messageWrapper:"Message_messageWrapper__1_FxZ",message:"Message_message__1kb7-",angle:"Message_angle__2LJ6b",name:"Message_name__1YRRT",time:"Message_time__ZTZVT"}},,,,,function(e,t,r){e.exports={headerWrapper:"Header_headerWrapper__3ud4K",slidein:"Header_slidein__32Hqa",activeLink:"Header_activeLink__3jMkN"}},function(e,t,r){e.exports={inputBorder:"Greeting_inputBorder__V5Fou",error:"Greeting_error__xWNYB",errorMessage:"Greeting_errorMessage__3tWYh",addBtn:"Greeting_addBtn__2XEa_"}},,function(e,t,r){e.exports={superInput:"SuperInputText_superInput__10856",errorInput:"SuperInputText_errorInput__3Ztss",error:"SuperInputText_error__3lKE3"}},function(e,t,r){e.exports={buttonStyles:"SuperButton_buttonStyles__H8tyb",blink:"SuperButton_blink__1Y0oF",red:"SuperButton_red__2MZ1A",default:"SuperButton_default__19bEG"}},,,,function(e,t,r){e.exports={blue:"HW4_blue__3UkW1",column:"HW4_column__3J_hI",testSpanError:"HW4_testSpanError__3oqzf"}},function(e,t,r){e.exports={checkbox:"SuperCheckbox_checkbox__QTgd4",spanClassName:"SuperCheckbox_spanClassName__23AMt"}},,,function(e,t,r){e.exports={App:"App_App__YN3tf"}},,,,,,,,function(e,t,r){},,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(28),s=r.n(c),i=(r(37),r(29)),o=r.n(i),j=r(10),l=r(17),u=r.n(l),d=r(0),b="/pre-junior",h="/junior",f="/junior-plus";var _=function(){return Object(d.jsxs)("div",{className:u.a.headerWrapper,children:[Object(d.jsx)(j.b,{to:b,activeClassName:u.a.activeLink,children:"Pre-Junior"}),Object(d.jsx)(j.b,{to:h,activeClassName:u.a.activeLink,children:"Junior"}),Object(d.jsx)(j.b,{to:f,activeClassName:u.a.activeLink,children:"Junior+"})]})},m=r(2),x=r(12),O=r.n(x),p=function(e){var t=e.avatar,r=e.name,n=e.message,a=e.time;return Object(d.jsxs)("div",{className:O.a.messageWrapper,children:[Object(d.jsx)("img",{src:t,alt:"avatar"}),Object(d.jsx)("div",{className:O.a.angle}),Object(d.jsxs)("div",{className:O.a.message,children:[Object(d.jsx)("div",{className:O.a.name,children:r}),Object(d.jsx)("div",{className:O.a.text,children:n}),Object(d.jsx)("div",{className:O.a.time,children:a})]})]})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Artem",k="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",N="20:00";var C=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"homework#1"}),Object(d.jsx)(p,{avatar:v,name:g,message:k,time:N}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},y=r(7),S=r(9),w=r.n(S);var A=function(e){var t=w.a.priority+" "+w.a[e.affair.priority];return Object(d.jsxs)("div",{className:w.a.affairs,children:[Object(d.jsx)("div",{className:w.a.affair,children:e.affair.name}),Object(d.jsxs)("div",{className:t,children:["[",e.affair.priority,"]"]}),Object(d.jsx)("button",{className:w.a.deleteBtn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var B=function(e){var t=e.data.map((function(t){return Object(d.jsx)(A,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),r=function(t){return e.setFilter(t)},n=function(t){return w.a.filterBtn+(e.filter===t?" "+w.a.activeBtn:"")};return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{className:n("all"),onClick:function(){return r("all")},children:"All"}),Object(d.jsx)("button",{className:n("high"),onClick:function(){return r("high")},children:"High"}),Object(d.jsx)("button",{className:n("middle"),onClick:function(){return r("middle")},children:"Middle"}),Object(d.jsx)("button",{className:n("low"),onClick:function(){return r("low")},children:"Low"})]})},W=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(n.useState)(W),t=Object(y.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)("all"),s=Object(y.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(r,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homework#2"}),Object(d.jsx)(B,{data:j,setFilter:function(e){o(e)},deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return t!==e._id}))}(r,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},T=r(32),I=r(18),M=r.n(I),P=function(e){var t=e.name,r=e.setNameCallback,n=e.addUser,a=e.error,c=e.totalUsers,s=e.addUserWithEnter,i=a?M.a.error:M.a.inputBorder;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:r,className:i,onKeyDown:s,onBlur:r}),Object(d.jsx)("button",{disabled:!t,className:M.a.addBtn,onClick:n,children:"add"}),Object(d.jsx)("div",{className:M.a.errorMessage,children:a&&"Enter your name"}),Object(d.jsxs)("div",{children:["Total count of users: ",c]})]})},H=function(e){var t=e.users,r=e.addUserCallback,a=Object(n.useState)(""),c=Object(y.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(!1),j=Object(y.a)(o,2),l=j[0],u=j[1],b=function(){r(s),alert("Hello ".concat(s,"!")),i("")},h=t.length;return Object(d.jsx)(P,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),l&&u(!1)):(s&&i(""),u(!0))},addUser:b,error:l,addUserWithEnter:function(e){"Enter"===e.key&&b()},totalUsers:h})},L=r(46);var U=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),r=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homework#3"}),Object(d.jsx)(H,{users:r,addUserCallback:function(e){var t={_id:Object(L.a)(),name:e};a([].concat(Object(T.a)(r),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},F=r(13),G=r(14),J=r(20),Z=r.n(J),K=function(e){var t=e.onChange,r=e.onChangeText,n=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(G.a)(e,["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(Z.a.error," ").concat(i||""),l="".concat(s," ").concat(c?Z.a.errorInput:Z.a.superInput);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(d.jsx)("span",{className:j,children:c})]})},Y=r(25),R=r.n(Y),V=r(21),q=r.n(V),X=function(e){var t=e.red,r=(e.className,Object(G.a)(e,["red","className"])),n="".concat(q.a.buttonStyles," ").concat(t?q.a.red:q.a.default," ");return Object(d.jsx)("button",Object(F.a)({className:n},r))},z=r(26),D=r.n(z),Q=function(e){e.type;var t=e.onChange,r=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),c=Object(G.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),r&&r(e.currentTarget.checked)},className:s},c)),a&&Object(d.jsx)("span",{className:D.a.spanClassName,children:a})]})};var $=function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),r=t[0],a=t[1],c=r?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(r)},i=Object(n.useState)(!1),o=Object(y.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homework#4"}),Object(d.jsxs)("div",{className:R.a.column,children:[Object(d.jsx)(K,{value:r,onChangeText:a,onEnter:s,error:c}),Object(d.jsx)(K,{className:R.a.blue}),Object(d.jsx)(X,{children:"default"}),Object(d.jsx)(X,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(X,{disabled:!0,children:"disabled"}),Object(d.jsx)(Q,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(Q,{checked:j,onChange:function(e){return l(e.currentTarget.checked)},children:"Let's be nice"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},ee=r(8),te=r.n(ee);var re=function(){return Object(d.jsxs)("div",{className:te.a.prejuniorPage,children:[Object(d.jsx)(C,{}),Object(d.jsx)(E,{}),Object(d.jsx)(U,{}),Object(d.jsx)($,{})]})};var ne=function(){return Object(d.jsxs)("div",{className:te.a.error,children:[Object(d.jsx)("div",{className:te.a.number404,children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ae=function(){return Object(d.jsx)("div",{className:te.a.emptyPage,children:"I'm june, but I'm okay with it:)"})},ce=function(){return Object(d.jsx)("div",{className:te.a.emptyPage,children:"Hey, I'm june+ now, that's awesome:)"})},se="/pre-junior",ie="/junior",oe="/junior-plus";var je=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(m.d,{children:[Object(d.jsx)(m.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(m.a,{to:se})}}),Object(d.jsx)(m.b,{path:se,render:function(){return Object(d.jsx)(re,{})}}),Object(d.jsx)(m.b,{path:ie,render:function(){return Object(d.jsx)(ae,{})}}),Object(d.jsx)(m.b,{path:oe,render:function(){return Object(d.jsx)(ce,{})}}),Object(d.jsx)(m.b,{render:function(){return Object(d.jsx)(ne,{})}})]})})};var le=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(_,{}),Object(d.jsx)(je,{})]})})};var ue=function(){return Object(d.jsx)("div",{className:o.a.App,children:Object(d.jsx)(le,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ue,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.aa85e0b7.chunk.js.map