(this["webpackJsonpmy-homework"]=this["webpackJsonpmy-homework"]||[]).push([[0],{19:function(e,t,n){e.exports={emptyPage:"pages_emptyPage__19Rji",error:"pages_error__3aA0b",number404:"pages_number404__bsPm7",prejuniorPage:"pages_prejuniorPage__1SZkg",junior:"pages_junior__1Ff6I"}},20:function(e,t,n){e.exports={affairs:"Affairs_affairs__OSx8c",affair:"Affairs_affair__2hyBG",deleteBtn:"Affairs_deleteBtn__hb8cs",filterBtn:"Affairs_filterBtn__3hAIE",activeBtn:"Affairs_activeBtn__2VDtG",priority:"Affairs_priority__L4Wzc",low:"Affairs_low__2MLgR",middle:"Affairs_middle__1FpVk",high:"Affairs_high__3fpll"}},23:function(e,t,n){e.exports={messageWrapper:"Message_messageWrapper__1_FxZ",message:"Message_message__1kb7-",angle:"Message_angle__2LJ6b",name:"Message_name__1YRRT",time:"Message_time__ZTZVT"}},27:function(e,t,n){e.exports={rangeBox:"SuperRange_rangeBox__23ydF",range:"SuperRange_range__gGYMK"}},29:function(e,t,n){e.exports={headerWrapper:"Header_headerWrapper__3ud4K",slidein:"Header_slidein__32Hqa",activeLink:"Header_activeLink__3jMkN"}},30:function(e,t,n){e.exports={inputBorder:"Greeting_inputBorder__V5Fou",error:"Greeting_error__xWNYB",errorMessage:"Greeting_errorMessage__3tWYh",addBtn:"Greeting_addBtn__2XEa_"}},34:function(e,t,n){e.exports={editSpanWrapper:"HW6_editSpanWrapper__2I4UT",editSpan:"HW6_editSpan__22lnR"}},35:function(e,t,n){e.exports={lRadio:"HW7_lRadio__NUEMP",select:"HW7_select__3KjXw"}},38:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__10856",errorInput:"SuperInputText_errorInput__3Ztss",error:"SuperInputText_error__3lKE3"}},39:function(e,t,n){e.exports={buttonStyles:"SuperButton_buttonStyles__H8tyb",blink:"SuperButton_blink__1Y0oF",red:"SuperButton_red__2MZ1A",default:"SuperButton_default__19bEG"}},45:function(e,t,n){e.exports={blue:"HW4_blue__3UkW1",column:"HW4_column__3J_hI",testSpanError:"HW4_testSpanError__3oqzf"}},46:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__QTgd4",spanClassName:"SuperCheckbox_spanClassName__23AMt"}},50:function(e,t,n){e.exports={App:"App_App__YN3tf"}},69:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(32),s=n.n(c),i=n(28),o=(n(69),n(50)),j=n.n(o),l=n(22),u=n(29),d=n.n(u),b=n(0),h="/pre-junior",O="/junior",x="/junior-plus";var p=function(){return Object(b.jsxs)("div",{className:d.a.headerWrapper,children:[Object(b.jsx)(l.b,{to:h,activeClassName:d.a.activeLink,children:"Pre-Junior"}),Object(b.jsx)(l.b,{to:O,activeClassName:d.a.activeLink,children:"Junior"}),Object(b.jsx)(l.b,{to:x,activeClassName:d.a.activeLink,children:"Junior+"})]})},f=n(8),m=n(23),v=n.n(m),_=function(e){var t=e.avatar,n=e.name,r=e.message,a=e.time;return Object(b.jsxs)("div",{className:v.a.messageWrapper,children:[Object(b.jsx)("img",{src:t,alt:"avatar"}),Object(b.jsx)("div",{className:v.a.angle}),Object(b.jsxs)("div",{className:v.a.message,children:[Object(b.jsx)("div",{className:v.a.name,children:n}),Object(b.jsx)("div",{className:v.a.text,children:r}),Object(b.jsx)("div",{className:v.a.time,children:a})]})]})},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",C="Artem",k="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",N="20:00";var y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"homework#1"}),Object(b.jsx)(_,{avatar:g,name:C,message:k,time:N}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},S=n(5),w=n(20),B=n.n(w);var A=function(e){var t=B.a.priority+" "+B.a[e.affair.priority];return Object(b.jsxs)("div",{className:B.a.affairs,children:[Object(b.jsx)("div",{className:B.a.affair,children:e.affair.name}),Object(b.jsxs)("div",{className:t,children:["[",e.affair.priority,"]"]}),Object(b.jsx)("button",{className:B.a.deleteBtn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var W=function(e){var t=e.data.map((function(t){return Object(b.jsx)(A,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return e.setFilter(t)},r=function(t){return B.a.filterBtn+(e.filter===t?" "+B.a.activeBtn:"")};return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{className:r("all"),onClick:function(){return n("all")},children:"All"}),Object(b.jsx)("button",{className:r("high"),onClick:function(){return n("high")},children:"High"}),Object(b.jsx)("button",{className:r("middle"),onClick:function(){return n("middle")},children:"Middle"}),Object(b.jsx)("button",{className:r("low"),onClick:function(){return n("low")},children:"Low"})]})},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(r.useState)(T),t=Object(S.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(S.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"homework#2"}),Object(b.jsx)(W,{data:j,setFilter:function(e){o(e)},deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return t!==e._id}))}(n,e))},filter:i}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},I=n(9),L=n(30),M=n.n(L),P=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.addUserWithEnter,i=a?M.a.error:M.a.inputBorder;return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:n,className:i,onKeyDown:s,onBlur:n}),Object(b.jsx)("button",{disabled:!t,className:M.a.addBtn,onClick:r,children:"add"}),Object(b.jsx)("div",{className:M.a.errorMessage,children:a&&"Enter your name"}),Object(b.jsxs)("div",{children:["Total count of users: ",c]})]})},H=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(S.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(!1),j=Object(S.a)(o,2),l=j[0],u=j[1],d=function(){n(s),alert("Hello ".concat(s,"!")),i("")},h=t.length;return Object(b.jsx)(P,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),l&&u(!1)):(s&&i(""),u(!0))},addUser:d,error:l,addUserWithEnter:function(e){"Enter"===e.key&&d()},totalUsers:h})},R=n(92);var F=function(){var e=Object(r.useState)([]),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"homework#3"}),Object(b.jsx)(H,{users:n,addUserCallback:function(e){var t={_id:Object(R.a)(),name:e};a([].concat(Object(I.a)(n),[t]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},D=n(10),G=n(14),U=n(38),J=n.n(U),K=function(e){var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(G.a)(e,["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(J.a.error," ").concat(i||""),l="".concat(s," ").concat(c?J.a.errorInput:J.a.superInput);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(D.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(b.jsx)("span",{className:j,children:c})]})},Y=n(45),Z=n.n(Y),V=n(39),X=n.n(V),q=function(e){var t=e.red,n=(e.className,Object(G.a)(e,["red","className"])),r="".concat(X.a.buttonStyles," ").concat(t?X.a.red:X.a.default," ");return Object(b.jsx)("button",Object(D.a)({className:r},n))},z=n(46),Q=n.n(z),$=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(G.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(D.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(b.jsx)("span",{className:Q.a.spanClassName,children:a})]})};var ee=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(S.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"homework#4"}),Object(b.jsxs)("div",{className:Z.a.column,children:[Object(b.jsx)(K,{value:n,onChangeText:a,onEnter:s,error:c}),Object(b.jsx)(K,{className:Z.a.blue}),Object(b.jsx)(q,{children:"default"}),Object(b.jsx)(q,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(q,{disabled:!0,children:"disabled"}),Object(b.jsx)($,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)($,{checked:j,onChange:function(e){return l(e.currentTarget.checked)},children:"Let's be nice"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},te=n(19),ne=n.n(te),re=n(54),ae=n(34),ce=n.n(ae),se=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(G.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(S.a)(s,2),o=i[0],j=i[1],l=a||{},u=l.children,d=l.onDoubleClick,h=l.className,O=Object(G.a)(l,["children","onDoubleClick","className"]),x=function(){j(!1),n&&n()},p="".concat(ce.a.editSpan," ").concat(h);return Object(b.jsx)("div",{children:o?Object(b.jsx)(K,Object(D.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){return x}},c)):Object(b.jsxs)("span",Object(D.a)(Object(D.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:p},O),{},{children:[u||c.value,Object(b.jsx)(re.a,{})]}))})};function ie(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function oe(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}ie("test",{x:"A",y:1});oe("test",{x:"",y:0});var je=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"homework#6"}),Object(b.jsxs)("div",{className:ce.a.editSpanWrapper,children:[Object(b.jsx)("div",{children:Object(b.jsx)(se,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(q,{onClick:function(){ie("editable-span-value",n)},children:"save"}),Object(b.jsx)(q,{onClick:function(){a(oe("editable-span-value",n))},children:"restore"})]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var le=function(){return Object(b.jsxs)("div",{className:ne.a.prejuniorPage,children:[Object(b.jsx)(y,{}),Object(b.jsx)(E,{}),Object(b.jsx)(F,{}),Object(b.jsx)(ee,{}),Object(b.jsx)(je,{})]})};var ue=function(){return Object(b.jsxs)("div",{className:ne.a.error,children:[Object(b.jsx)("div",{className:ne.a.number404,children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},de=n(35),be=n.n(de),he=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,a=Object(G.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(b.jsx)("div",{className:be.a.select,children:Object(b.jsx)("select",Object(D.a)(Object(D.a)({onChange:function(e){return r?r(e.currentTarget.value):n}},a),{},{children:c}))})},Oe=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=e.onChange,c=e.onChangeOption,s=(Object(G.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){return c?c(e.currentTarget.value):a}),i=n?n.map((function(e,n){return Object(b.jsxs)("label",{className:be.a.lRadio,children:[Object(b.jsx)("input",{type:"radio",value:e,name:t,tabIndex:n+1,checked:e===r,onChange:s})," ",Object(b.jsx)("span",{children:e})]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:i})},xe=["x","y","z"];var pe=function(){var e=Object(r.useState)(xe[1]),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"homeworks#7"}),Object(b.jsx)("div",{children:Object(b.jsx)(he,{options:xe,value:n,onChangeOption:a})}),Object(b.jsx)("div",{children:Object(b.jsx)(Oe,{name:"radio",options:xe,value:n,onChangeOption:a})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},fe=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(I.a)(e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}))):Object(I.a)(e.sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0})));case"check":return e.filter((function(e){return e.age>t.payload}));default:return e}},me=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ve=function(){var e=Object(r.useState)(me),t=Object(S.a)(e,2),n=t[0],a=t[1],c=n.map((function(e){return Object(b.jsxs)("div",{children:[e.name,", ",e.age]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"homework#8"}),c,Object(b.jsx)("div",{children:Object(b.jsx)(q,{onClick:function(){return a(fe(me,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(b.jsx)("div",{children:Object(b.jsx)(q,{onClick:function(){return a(fe(me,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(b.jsx)("div",{children:Object(b.jsx)(q,{onClick:function(){return a(fe(me,{type:"check",payload:18}))},children:"check 18"})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var _e=function(){var e=Object(r.useState)(0),t=Object(S.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(new Date),s=Object(S.a)(c,2),i=s[0],o=s[1],j=Object(r.useState)(!1),l=Object(S.a)(j,2),u=l[0],d=l[1],h=function(){clearInterval(n)},O=i.toTimeString().slice(0,9),x=i.toLocaleDateString("ru");return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:O}),Object(b.jsx)("div",{style:{height:"50px"},children:u&&Object(b.jsx)("div",{children:x})}),Object(b.jsx)(q,{onClick:function(){h();var e=window.setInterval((function(){o(new Date)}),1e3);a(e)},children:"start"}),Object(b.jsx)(q,{onClick:h,children:"stop"})]})};var ge=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"homework#9"}),Object(b.jsx)(_e,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Ce=n.p+"static/media/Gear.fa60a40e.gif",ke={isLoading:!1},Ne=function(e){return{type:"SET-LOADING",isLoading:e}};var ye=function(){var e=Object(i.c)((function(e){return e.loading})),t=Object(i.b)(),n=e.isLoading;return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"homework#10"}),n?Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:Ce,alt:"preloader"})}):Object(b.jsx)("div",{children:Object(b.jsx)(q,{onClick:function(){t(Ne(!0)),setTimeout((function(){t(Ne(!1))}),2e3)},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Se=n(27),we=n.n(Se),Be=function(e){e.type;var t=e.onChange,n=e.onChangeRange,r=e.value,a=e.className,c=Object(G.a)(e,["type","onChange","onChangeRange","value","className"]),s="".concat(we.a.range," ").concat(a||"");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(D.a)({type:"range",value:r,onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:s},c))})},Ae=n(91),We=n(94),Te=function(e){var t=e.onChangeRange,n=e.value;return Object(b.jsx)(We.a,{sx:{width:300},children:Object(b.jsx)(Ae.a,{getAriaLabel:function(){return"Double range slider"},value:n,onChange:function(e,n,r){if(t){if(!Array.isArray(n))return;if(n[1]-n[0]<10)if(0===r){var a=Math.min(n[0],90);t([a,a+10])}else{var c=Math.max(n[1],10);t([c-10,c])}else t(n)}},valueLabelDisplay:"auto",disableSwap:!0})})};var Ee=function(){var e=Object(r.useState)(0),t=Object(S.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(100),s=Object(S.a)(c,2),i=s[0],o=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 11",Object(b.jsxs)("div",{className:we.a.rangeBox,children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(Be,{onChangeRange:a,value:n})]}),Object(b.jsxs)("div",{className:we.a.rangeBox,children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(Te,{onChangeRange:function(e){a(e[0]),o(e[1])},value:[n,i]}),Object(b.jsx)("span",{children:i})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Ie=function(){return Object(b.jsxs)("div",{className:ne.a.junior,children:[Object(b.jsx)(pe,{}),Object(b.jsx)(ve,{}),Object(b.jsx)(ge,{}),Object(b.jsx)(ye,{}),Object(b.jsx)(Ee,{})]})},Le=function(){return Object(b.jsx)("div",{className:ne.a.emptyPage,children:"Hey, I'm june+ now, that's awesome:)"})},Me="/pre-junior",Pe="/junior",He="/junior-plus";var Re=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(f.d,{children:[Object(b.jsx)(f.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(f.a,{to:Me})}}),Object(b.jsx)(f.b,{path:Me,render:function(){return Object(b.jsx)(le,{})}}),Object(b.jsx)(f.b,{path:Pe,render:function(){return Object(b.jsx)(Ie,{})}}),Object(b.jsx)(f.b,{path:He,render:function(){return Object(b.jsx)(Le,{})}}),Object(b.jsx)(f.b,{render:function(){return Object(b.jsx)(ue,{})}})]})})};var Fe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(p,{}),Object(b.jsx)(Re,{})]})})};var De=function(){return Object(b.jsx)("div",{className:j.a.App,children:Object(b.jsx)(Fe,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=n(47),Ue=Object(Ge.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOADING":return Object(D.a)(Object(D.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),Je=Object(Ge.b)(Ue),Ke=Je;window.store=Je,s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(i.a,{store:Ke,children:Object(b.jsx)(De,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.18b8b593.chunk.js.map