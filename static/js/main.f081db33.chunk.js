(this.webpackJsonpfirst_project=this.webpackJsonpfirst_project||[]).push([[0],{104:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(44),r=n(5),o={messagesData:[{id:1,message:"Text massage 1"},{id:2,message:"Text massage 2"},{id:3,message:"Text massage 3"},{id:4,message:"Text massage 4"},{id:5,message:"Text massage 5"},{id:6,message:"Text massage 6"}],dialogsData:[{id:1,name:"Person 1"},{id:2,name:"Person 2"},{id:3,name:"Person 3"},{id:4,name:"Person 4"},{id:5,name:"Person 5"},{id:6,name:"Person 6"}]},c=function(e){return{type:"ADD-MESSAGE",message:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:7,message:t.message}])});default:return e}}},11:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s}));var a=n(131),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9a6d66d9-fafb-4981-af16-47b8a13fbbc3"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Use profileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},u={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},s={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},117:function(e,t,n){e.exports=n.p+"static/media/img-user.247889bf.png"},135:function(e,t,n){e.exports={newsWrap:"News_newsWrap__1cCW9"}},136:function(e,t,n){e.exports={musicWrap:"Music_musicWrap__1zx9I"}},137:function(e,t,n){e.exports={settingsWrap:"Settings_settingsWrap__3b-la"}},139:function(e,t,n){e.exports={preloader:"Preloader_preloader__ywX_c"}},140:function(e,t,n){e.exports=n.p+"static/media/preloader.f2f4374a.svg"},168:function(e,t,n){e.exports=n(302)},169:function(e,t,n){},24:function(e,t,n){e.exports={navbarWrap:"Navbar_navbarWrap__2VJ8m",nav:"Navbar_nav__OTTmQ",active:"Navbar_active__2HfI9",nav_profile:"Navbar_nav_profile__p_-Hm",nav_users:"Navbar_nav_users__8Lja2",nav_dialogs:"Navbar_nav_dialogs__2Y3XK",friendsTitle:"Navbar_friendsTitle__WuqMj",friends:"Navbar_friends__-7cj_",friendsItem__img:"Navbar_friendsItem__img__OD1Gm",friendsItem__name:"Navbar_friendsItem__name__zBvGr"}},253:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);var a=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,308)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},r=(n(169),n(8)),o=n(94),c=n(104),u=n(10),s=n.n(u),i=n(20),l=n(44),m=n(5),f=n(11),p=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(m.a)(Object(m.a)({},e),a):e}))},d={users:[],pageSize:10,totalUserCount:21,currentPage:1,isFetching:!1,followingInProgress:[]},g=function(e){return{type:"FOLLOW",userID:e}},h=function(e){return{type:"UNFOLLOW",userID:e}},E=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},_=function(e){return{type:"TOGGLE-IS-FETCHING",toggleIsFetching:e}},b=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",followingInProgress:e,userId:t}},v=function(){var e=Object(i.a)(s.a.mark((function e(t,n,a,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:p(e.users,t.userID,"id",{followed:!0})});case"UNFOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:p(e.users,t.userID,"id",{followed:!1})});case"SET-USERS":return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(m.a)(Object(m.a)({},e),{},{totalUserCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.toggleIsFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(l.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},S=n(34),w={userId:20620,email:"grour@inbox.ru",login:3490019,isAuth:!0,captchaUrl:null},j=function(e,t,n,a){return{type:"SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},C=function(e){return{type:"GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}},P=function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.email,o=a.id,c=a.login,t(j(o,r,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.c.getCaptchaUrl();case 2:n=e.sent,t(C(n.data.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":case"GET-CAPTCHA-URL-SUCCESS":return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},x=n(133),I=n(130),N={init:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(m.a)(Object(m.a)({},e),{},{init:!0});default:return e}},k=Object(r.c)({profilePage:o.b,dialogPage:c.a,usersPage:O,auth:T,form:I.a,app:U}),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,L=Object(r.e)(k,A(Object(r.a)(x.a)));window.store=L;var D=L,F=n(0),R=n.n(F),G=n(67),W=n.n(G),M=n(36),z=n(37),H=n(39),B=n(38),X=(n(253),n(24)),V=n.n(X),J=n(17),Y=function(){return R.a.createElement("div",{className:V.a.navbarWrap},R.a.createElement("nav",{className:V.a.nav},R.a.createElement("ul",null,R.a.createElement("li",null,R.a.createElement(J.b,{to:"/profile",className:V.a.nav_profile,activeClassName:V.a.active},"Profile")),R.a.createElement("li",null,R.a.createElement(J.b,{to:"/dialogs",className:V.a.nav_dialogs,activeClassName:V.a.active},"Dialogs")),R.a.createElement("li",null,R.a.createElement(J.b,{to:"/users",className:V.a.nav_users,activeClassName:V.a.active},"Users")))))},Z=(n(135),n(136),n(137),n(9)),K=n(13),q=n(95),Q=n(72),$=n.n(Q),ee=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.amountItemsPerPage,c=void 0===o?10:o,u=Math.ceil(t/n),s=[],i=1;i<=u;i++)s.push(i);var l=Math.ceil(t/c),m=Object(F.useState)(1),f=Object(q.a)(m,2),p=f[0],d=f[1],g=(p-1)*c+1,h=p*c;return R.a.createElement("div",{className:$.a.pagination},R.a.createElement("button",{disabled:p>1?"":"true",onClick:function(){return d(p-1)}}," \xab "),s.filter((function(e){return e>=g&&e<=h})).map((function(e,t){return R.a.createElement("span",{className:a===e?$.a.selected:$.a.item,key:t,onClick:function(t){return r(e)}},e)})),R.a.createElement("button",{disabled:l>p?"":"true",onClick:function(){return d(p+1)}}," \xbb "))},te=n(56),ne=n.n(te),ae=n(117),re=n.n(ae),oe=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,r=e.unfollow;return R.a.createElement("div",{className:ne.a.userElem},R.a.createElement(J.b,{to:"/Profile/"+t.id},R.a.createElement("div",{className:ne.a.userElem_image},R.a.createElement("img",{src:null!=t.photos.small?t.photos.small:re.a,alt:t.name})),R.a.createElement("div",{className:ne.a.userElem_name},t.name),R.a.createElement("div",{className:ne.a.userElem_status},t.status)),t.followed?R.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"unfollow"):R.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"follow"))},ce=n(91),ue=n.n(ce),se=function(e){return R.a.createElement("div",{className:ue.a.users},R.a.createElement(ee,{totalItemsCount:e.totalUserCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),R.a.createElement("div",{className:ue.a.content},e.users.map((function(t){return R.a.createElement(oe,{user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow})}))))},ie=n(31),le=n(142),me=Object(le.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),fe=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUserCount},de=function(e){return e.usersPage.currentPage},ge=function(e){return e.usersPage.isFetching},he=function(e){return e.usersPage.followingInProgress},Ee=function(e){Object(H.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(z.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return R.a.createElement("div",null,this.props.isFetching?R.a.createElement(ie.a,null):null,R.a.createElement(se,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(R.a.Component),_e=Object(K.b)((function(e){return{pageSize:fe(e),totalUserCount:pe(e),currentPage:de(e),isFetching:ge(e),users:me(e),followingInProgress:he(e)}}),{follow:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,f.d.follow.bind(f.d),g);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,f.d.unfollow.bind(f.d),h);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:E,toggleFollowing:b,getUsers:function(e,t){return function(){var n=Object(i.a)(s.a.mark((function n(a){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(_(!0)),n.next=3,f.d.getUsers(e,t);case 3:r=n.sent,a(_(!1)),a({type:"SET-USERS",users:r.items}),a({type:"SET-TOTAL-USERS-COUNT",totalCount:r.totalCount}),a(E(e));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Ee),be=n(33),ve=n.n(be),Oe=function(e){return R.a.createElement("header",{className:ve.a.header},R.a.createElement("div",{className:ve.a.logo},R.a.createElement(J.b,{to:"/profile"},R.a.createElement("img",{src:"https://i.ya-webdesign.com/images/png-background-creator-8.png",alt:"logo"}))),R.a.createElement("div",{className:ve.a.user},e.isAuth?R.a.createElement("div",null,R.a.createElement("div",{className:ve.a.user_email}," ",e.email," "),R.a.createElement("button",{className:ve.a.user_button,onClick:e.logout},"Log out")):R.a.createElement(J.b,{className:ve.a.user_button,to:"/login"},"Login")))},Se=function(e){Object(H.a)(n,e);var t=Object(B.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"render",value:function(){return R.a.createElement(Oe,this.props)}}]),n}(R.a.Component),we=Object(K.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,email:e.auth.email}}),{logout:function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.logout();case 2:0===e.sent.data.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Se),je=n(128),Ce=n(129),Pe=n(49),ye=n(68),Te=n(40),xe=n.n(Te),Ie=n(45),Ne=n.n(Ie),Ue=Object(Ce.a)({form:"login"})((function(e){return R.a.createElement("div",{className:Ne.a.form},R.a.createElement("form",{onSubmit:e.handleSubmit},R.a.createElement("div",{className:Ne.a.formEmail},R.a.createElement(je.a,{placeholder:"Email",name:"email",type:"text",component:Pe.a,validate:[ye.b]})),R.a.createElement("div",{className:Ne.a.formLogin},R.a.createElement(je.a,{placeholder:"Password",name:"password",type:"password",component:Pe.a,validate:[ye.b]})),R.a.createElement("div",{className:Ne.a.formCheckBox},R.a.createElement(je.a,{type:"checkbox",name:"rememberMe",component:Pe.a})),R.a.createElement("span",null,"Remember me")," ",R.a.createElement("br",null),e.error&&R.a.createElement("div",{className:xe.a.errorSummary}," ",e.error," "),R.a.createElement("div",{className:Ne.a.common_button},R.a.createElement("button",null,"Login")),R.a.createElement("div",{className:xe.a.captcha},e.captchaUrl&&R.a.createElement("img",{src:e.captchaUrl,alt:""})),R.a.createElement("div",null,e.captchaUrl&&R.a.createElement(je.a,{placeholder:"Symbols from image",name:"captcha",component:Pe.a,validate:[ye.b]}))))})),ke=Object(K.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(i.a)(s.a.mark((function r(o){var c,u;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.a.login(e,t,n,a);case 2:0===(c=r.sent).data.resultCode?o(P()):(10===c.data.resultCode&&o(y()),u=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(S.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t={content:{height:"calc(100vh - 95px)"},formBox:{width:"230px",height:"230px",margin:"auto",marginTop:"20%"}};return e.isAuth?R.a.createElement(Z.a,{to:"/profile"}):R.a.createElement("div",{style:t.content},R.a.createElement("div",{style:t.formBox},R.a.createElement("h1",null,"Login"),R.a.createElement(Ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})))})),Ae=Object(F.lazy)((function(){return n.e(4).then(n.bind(null,310))})),Le=Object(F.lazy)((function(){return n.e(3).then(n.bind(null,309))})),De=function(e){Object(H.a)(n,e);var t=Object(B.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){return this.props.init?R.a.createElement("div",{className:"app-wrapper"},R.a.createElement(we,null),R.a.createElement(Y,null),R.a.createElement("div",{className:"app-content"},R.a.createElement("div",{className:"content-box"},R.a.createElement(Z.d,null,R.a.createElement(Z.b,{exact:!0,path:"/",render:function(){return R.a.createElement(Z.a,{to:"/profile"})}}),R.a.createElement(Z.b,{path:"/profile/:userId?",render:(e=Le,function(t){return R.a.createElement(F.Suspense,{fallback:R.a.createElement(ie.a,null)},R.a.createElement(e,t))})}),R.a.createElement(Z.b,{path:"/dialogs",render:function(){return R.a.createElement(F.Suspense,{fallback:R.a.createElement(ie.a,null)},R.a.createElement(Ae,null))}}),R.a.createElement(Z.b,{path:"/users",render:function(){return R.a.createElement(_e,null)}}),R.a.createElement(Z.b,{path:"/login",render:function(){return R.a.createElement(ke,null)}}))),R.a.createElement("div",{className:"footer"},R.a.createElement("p",null,"Copyright \xa9 2021")))):R.a.createElement(ie.a,null);var e}}]),n}(R.a.Component),Fe=Object(r.d)(Z.g,Object(K.b)((function(e){return{init:e.app.init}}),{initApp:function(){return function(e){var t=e(P());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(De);W.a.render(R.a.createElement(J.a,null,R.a.createElement(K.a,{store:D},R.a.createElement(Fe,null))),document.getElementById("root")),a()},31:function(e,t,n){"use strict";var a=n(139),r=n.n(a),o=n(140),c=n.n(o),u=n(0),s=n.n(u);t.a=function(){return s.a.createElement("div",{className:r.a.preloader},s.a.createElement("img",{src:c.a,alt:"preloader"}))}},33:function(e,t,n){e.exports={header:"Header_header__3yPlg",logo:"Header_logo__15-rM",user:"Header_user__3n5E0",common_button:"Header_common_button__2HXO9",user_email:"Header_user_email__3-KbV"}},40:function(e,t,n){e.exports={formControl:"FormControls_formControl__18R7o",error:"FormControls_error__1_W_d",errorSummary:"FormControls_errorSummary__nSsXZ",d_inlineBlock:"FormControls_d_inlineBlock__XrI4l",captcha:"FormControls_captcha__1chiI"}},45:function(e,t,n){e.exports={common_button:"Login_common_button__30gTO",form:"Login_form__25jFl",formCheckBox:"Login_formCheckBox__VryFw"}},49:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));var a=n(74),r=n(0),o=n.n(r),c=n(40),u=n.n(c),s=["input","meta","child"],i=["input","meta","child"],l=["input","meta","child"],m=function(e){e.input;var t=e.meta,n=t.error,r=t.touched,c=(e.child,Object(a.a)(e,s)),i=n&&r;return o.a.createElement("div",{className:u.a.formControl+" "+(i&&u.a.error)},o.a.createElement("div",null,c.children),i&&o.a.createElement("span",null,n))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,i));return o.a.createElement(m,e,o.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return o.a.createElement(m,e,o.a.createElement("input",Object.assign({},t,n)))}},56:function(e,t,n){e.exports={userElem:"User_userElem__2Bec4",userElem_image:"User_userElem_image__38Csw",userElem_nameAndStatus:"User_userElem_nameAndStatus__2okI4",userElem_name:"User_userElem_name__223P1",userElem_status:"User_userElem_status__15JlM",userElem_location:"User_userElem_location__3ACNT",userElem_country:"User_userElem_country__gdQnG"}},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Fiels is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},72:function(e,t,n){e.exports={pagination:"Paginator_pagination__2Y52C",selected:"Paginator_selected__31wv9"}},91:function(e,t,n){e.exports={users:"Users_users__3NLCE",content:"Users_content__3ZtCY"}},94:function(e,t,n){"use strict";n.d(t,"g",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return g})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return E}));var a=n(10),r=n.n(a),o=n(20),c=n(44),u=n(5),s=n(11),i=n(34),l={postsData:[{id:1,post:"With our simple and useful tool you can generate a standard text which you can place in your web design to look more realistic. Would you like to get new text generated for your next project?",likesCount:3},{id:2,post:"Use the following options to generate a new lorem ipsum text for your next project",likesCount:12},{id:3,post:"When you construct a web design you are most likely to not have any content in the beginning. ",likesCount:5}],profile:null},m=function(e){return{type:"ADD-POST",postItemText:e}},f=function(e){return{type:"SET-USER-STATUS",status:e}},p=function(e){return function(t){s.d.getProfile(e).then((function(e){t({type:"SET-USER-PROFILE",profileData:e.data})}))}},d=function(e){return function(t){s.b.getStatus(e).then((function(e){t(f(e.data))}))}},g=function(e){return function(t){s.b.updateStatus(e).then((function(n){0===n.data.resultCode&&t(f(e))}))}},h=function(e){return function(t){s.b.savePhoto(e).then((function(e){0===e.data.resultCode&&t({type:"SAVE-PHOTO-SUCCESS",photos:e.data.data.photos})}))}},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n,a){var o,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userId,t.next=3,s.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(p(o)),t.next=10;break;case 8:return n(Object(i.a)("profileEditForm",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(u.a)(Object(u.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[{post:t.postItemText,id:4,likesCount:0}])});case"SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profileData});case"SET-USER-STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"SAVE-PHOTO-SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[168,1,2]]]);
//# sourceMappingURL=main.f081db33.chunk.js.map