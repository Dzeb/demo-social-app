(this.webpackJsonpfirst_project=this.webpackJsonpfirst_project||[]).push([[0],{102:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a=n(45),r=n(5),o={messagesData:[{id:1,message:"Text massage 1"},{id:2,message:"Text massage 2"},{id:3,message:"Text massage 3"},{id:4,message:"Text massage 4"},{id:5,message:"Text massage 5"},{id:6,message:"Text massage 6"}],dialogsData:[{id:1,name:"Person 1"},{id:2,name:"Person 2"},{id:3,name:"Person 3"},{id:4,name:"Person 4"},{id:5,name:"Person 5"},{id:6,name:"Person 6"}]},u=function(e){return{type:"ADD-MESSAGE",message:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:7,message:t.message}])});default:return e}}},11:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c}));var a=n(129),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9a6d66d9-fafb-4981-af16-47b8a13fbbc3"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Use profileAPI object"),u.getProfile(e)}},u={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},s={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},c={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},115:function(e,t,n){e.exports=n.p+"static/media/img-user.247889bf.png"},133:function(e,t,n){e.exports={newsWrap:"News_newsWrap__1cCW9"}},134:function(e,t,n){e.exports={musicWrap:"Music_musicWrap__1zx9I"}},135:function(e,t,n){e.exports={settingsWrap:"Settings_settingsWrap__3b-la"}},137:function(e,t,n){e.exports={users:"Users_users__3NLCE"}},138:function(e,t,n){e.exports={preloader:"Preloader_preloader__ywX_c"}},139:function(e,t,n){e.exports=n.p+"static/media/preloader.f2f4374a.svg"},167:function(e,t,n){e.exports=n(301)},168:function(e,t,n){},24:function(e,t,n){e.exports={navbarWrap:"Navbar_navbarWrap__2VJ8m",nav:"Navbar_nav__OTTmQ",active:"Navbar_active__2HfI9",nav_profile:"Navbar_nav_profile__p_-Hm",nav_users:"Navbar_nav_users__8Lja2",nav_dialogs:"Navbar_nav_dialogs__2Y3XK",friendsTitle:"Navbar_friendsTitle__WuqMj",friends:"Navbar_friends__-7cj_",friendsItem__img:"Navbar_friendsItem__img__OD1Gm",friendsItem__name:"Navbar_friendsItem__name__zBvGr"}},252:function(e,t,n){},29:function(e,t,n){e.exports={userElem:"User_userElem__2Bec4",userElem_imageBlock:"User_userElem_imageBlock__2idE1",userElem_image:"User_userElem_image__38Csw",userElem_info:"User_userElem_info__1C4Q0",userElem_nameAndStatus:"User_userElem_nameAndStatus__2okI4",userElem_name:"User_userElem_name__223P1",userElem_status:"User_userElem_status__15JlM",userElem_location:"User_userElem_location__3ACNT",userElem_country:"User_userElem_country__gdQnG"}},301:function(e,t,n){"use strict";n.r(t);var a=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,307)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),a(e),r(e),o(e),u(e)}))},r=(n(168),n(8)),o=n(92),u=n(102),s=n(10),c=n.n(s),i=n(20),l=n(45),m=n(5),f=n(11),p=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(m.a)(Object(m.a)({},e),a):e}))},d={users:[],pageSize:10,totalUserCount:21,currentPage:1,isFetching:!1,followingInProgress:[]},g=function(e){return{type:"FOLLOW",userID:e}},E=function(e){return{type:"UNFOLLOW",userID:e}},_=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},h=function(e){return{type:"TOGGLE-IS-FETCHING",toggleIsFetching:e}},b=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",followingInProgress:e,userId:t}},v=function(){var e=Object(i.a)(c.a.mark((function e(t,n,a,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:p(e.users,t.userID,"id",{followed:!0})});case"UNFOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:p(e.users,t.userID,"id",{followed:!1})});case"SET-USERS":return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(m.a)(Object(m.a)({},e),{},{totalUserCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.toggleIsFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(l.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},S=n(36),w={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},j=function(e,t,n,a){return{type:"SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},C=function(e){return{type:"GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}},P=function(){return function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a,r,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.email,o=a.id,u=a.login,t(j(o,r,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.c.getCaptchaUrl();case 2:n=e.sent,t(C(n.data.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":case"GET-CAPTCHA-URL-SUCCESS":return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},T=n(131),U=n(128),N={init:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(m.a)(Object(m.a)({},e),{},{init:!0});default:return e}},k=Object(r.c)({profilePage:o.b,dialogPage:u.a,usersPage:O,auth:I,form:U.a,app:x}),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,L=Object(r.e)(k,A(Object(r.a)(T.a)));window.store=L;var D=L,F=n(0),R=n.n(F),G=n(66),W=n.n(G),M=n(38),z=n(39),H=n(41),B=n(40),X=(n(252),n(24)),V=n.n(X),J=n(17),K=function(){return R.a.createElement("div",{className:V.a.navbarWrap},R.a.createElement("nav",{className:V.a.nav},R.a.createElement("ul",null,R.a.createElement("li",null,R.a.createElement(J.b,{to:"/profile",className:V.a.nav_profile,activeClassName:V.a.active},"Profile")),R.a.createElement("li",null,R.a.createElement(J.b,{to:"/dialogs",className:V.a.nav_dialogs,activeClassName:V.a.active},"Dialogs")),R.a.createElement("li",null,R.a.createElement(J.b,{to:"/users",className:V.a.nav_users,activeClassName:V.a.active},"Users")))))},Q=(n(133),n(134),n(135),n(9)),Y=n(13),Z=n(93),q=n(71),$=n.n(q),ee=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.amountItemsPerPage,u=void 0===o?10:o,s=Math.ceil(t/n),c=[],i=1;i<=s;i++)c.push(i);var l=Math.ceil(t/u),m=Object(F.useState)(1),f=Object(Z.a)(m,2),p=f[0],d=f[1],g=(p-1)*u+1,E=p*u;return R.a.createElement("div",{className:$.a.pagination},R.a.createElement("button",{disabled:p>1?"":"true",onClick:function(){return d(p-1)}}," \xab "),c.filter((function(e){return e>=g&&e<=E})).map((function(e,t){return R.a.createElement("span",{className:a===e?$.a.selected:$.a.item,key:t,onClick:function(t){return r(e)}},e)})),R.a.createElement("button",{disabled:l>p?"":"true",onClick:function(){return d(p+1)}}," \xbb "))},te=n(29),ne=n.n(te),ae=n(115),re=n.n(ae),oe=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,r=e.unfollow;return R.a.createElement("div",{className:ne.a.userElem},R.a.createElement("div",{className:ne.a.userElem_imageBlock},R.a.createElement("div",{className:ne.a.userElem_image},R.a.createElement(J.b,{to:"/Profile/"+t.id},R.a.createElement("img",{src:null!=t.photos.small?t.photos.small:re.a,alt:t.name}))),t.followed?R.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"unfollow"):R.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"follow")),R.a.createElement("div",{className:ne.a.userElem_info},R.a.createElement("div",{className:ne.a.userElem_nameAndStatus},R.a.createElement("div",{className:ne.a.userElem_name},t.name),R.a.createElement("div",{className:ne.a.userElem_status},t.status))))},ue=n(137),se=n.n(ue),ce=function(e){return R.a.createElement("div",{className:se.a.users},R.a.createElement("div",null,e.users.map((function(t){return R.a.createElement(oe,{user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow})}))),R.a.createElement(ee,{totalItemsCount:e.totalUserCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}))},ie=n(32),le=n(141),me=Object(le.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),fe=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUserCount},de=function(e){return e.usersPage.currentPage},ge=function(e){return e.usersPage.isFetching},Ee=function(e){return e.usersPage.followingInProgress},_e=function(e){Object(H.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(z.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return R.a.createElement("div",null,this.props.isFetching?R.a.createElement(ie.a,null):null,R.a.createElement(ce,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(R.a.Component),he=Object(Y.b)((function(e){return{pageSize:fe(e),totalUserCount:pe(e),currentPage:de(e),isFetching:ge(e),users:me(e),followingInProgress:Ee(e)}}),{follow:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,f.d.follow.bind(f.d),g);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,f.d.unfollow.bind(f.d),E);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:_,toggleFollowing:b,getUsers:function(e,t){return function(){var n=Object(i.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(h(!0)),n.next=3,f.d.getUsers(e,t);case 3:r=n.sent,a(h(!1)),a({type:"SET-USERS",users:r.items}),a({type:"SET-TOTAL-USERS-COUNT",totalCount:r.totalCount}),a(_(e));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(_e),be=n(35),ve=n.n(be),Oe=function(e){return R.a.createElement("header",{className:ve.a.header},R.a.createElement("div",{className:ve.a.logo},R.a.createElement(J.b,{to:"/profile"},R.a.createElement("img",{src:"https://i.ya-webdesign.com/images/png-background-creator-8.png",alt:"logo"}))),R.a.createElement("div",{className:ve.a.user},e.isAuth?R.a.createElement("div",null,R.a.createElement("div",{className:ve.a.user_email}," ",e.email," "),R.a.createElement("button",{className:ve.a.user_button,onClick:e.logout},"Log out")):R.a.createElement(J.b,{className:ve.a.user_button,to:"/login"},"Login")))},Se=function(e){Object(H.a)(n,e);var t=Object(B.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"render",value:function(){return R.a.createElement(Oe,this.props)}}]),n}(R.a.Component),we=Object(Y.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,email:e.auth.email}}),{logout:function(){return function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.logout();case 2:0===e.sent.data.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Se),je=n(126),Ce=n(127),Pe=n(49),ye=n(67),Ie=n(34),Te=n.n(Ie),Ue=Object(Ce.a)({form:"login"})((function(e){return R.a.createElement("div",null,R.a.createElement("form",{onSubmit:e.handleSubmit},R.a.createElement("div",null,R.a.createElement(je.a,{placeholder:"Email",name:"email",component:Pe.a,validate:[ye.b]})),R.a.createElement("div",null,R.a.createElement(je.a,{placeholder:"Password",name:"password",type:"password",component:Pe.a,validate:[ye.b]})),R.a.createElement("div",{className:Te.a.d_inlineBlock},R.a.createElement(je.a,{type:"checkbox",name:"rememberMe",component:Pe.a})),R.a.createElement("span",null,"Remember me")," ",R.a.createElement("br",null),e.error&&R.a.createElement("div",{className:Te.a.errorSummary}," ",e.error," "),R.a.createElement("div",null,R.a.createElement("button",null,"Login")),R.a.createElement("div",{className:Te.a.captcha},e.captchaUrl&&R.a.createElement("img",{src:e.captchaUrl,alt:""})),R.a.createElement("div",null,e.captchaUrl&&R.a.createElement(je.a,{placeholder:"Symbols from image",name:"captcha",component:Pe.a,validate:[ye.b]}))))})),Ne=Object(Y.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(i.a)(c.a.mark((function r(o){var u,s;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.a.login(e,t,n,a);case 2:0===(u=r.sent).data.resultCode?o(P()):(10===u.data.resultCode&&o(y()),s=u.data.messages.length>0?u.data.messages[0]:"Some error",o(Object(S.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?R.a.createElement(Q.a,{to:"/profile"}):R.a.createElement("div",null,R.a.createElement("h1",null,"Login"),R.a.createElement(Ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),xe=Object(F.lazy)((function(){return n.e(4).then(n.bind(null,309))})),ke=Object(F.lazy)((function(){return n.e(3).then(n.bind(null,308))})),Ae=function(e){Object(H.a)(n,e);var t=Object(B.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){return this.props.init?R.a.createElement("div",{className:"app-wrapper"},R.a.createElement(we,null),R.a.createElement(K,null),R.a.createElement("div",{className:"app-content"},R.a.createElement("div",{className:"content-box"},R.a.createElement(Q.d,null,R.a.createElement(Q.b,{exact:!0,path:"/",render:function(){return R.a.createElement(Q.a,{to:"/profile"})}}),R.a.createElement(Q.b,{path:"/profile/:userId?",render:(e=ke,function(t){return R.a.createElement(F.Suspense,{fallback:R.a.createElement(ie.a,null)},R.a.createElement(e,t))})}),R.a.createElement(Q.b,{path:"/dialogs",render:function(){return R.a.createElement(F.Suspense,{fallback:R.a.createElement(ie.a,null)},R.a.createElement(xe,null))}}),R.a.createElement(Q.b,{path:"/users",render:function(){return R.a.createElement(he,null)}}),R.a.createElement(Q.b,{path:"/login",render:function(){return R.a.createElement(Ne,null)}}))),R.a.createElement("div",{className:"footer"},R.a.createElement("p",null,"Copyright \xa9 2021")))):R.a.createElement(ie.a,null);var e}}]),n}(R.a.Component),Le=Object(r.d)(Q.g,Object(Y.b)((function(e){return{init:e.app.init}}),{initApp:function(){return function(e){var t=e(P());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(Ae);W.a.render(R.a.createElement(J.a,null,R.a.createElement(Y.a,{store:D},R.a.createElement(Le,null))),document.getElementById("root")),a()},32:function(e,t,n){"use strict";var a=n(138),r=n.n(a),o=n(139),u=n.n(o),s=n(0),c=n.n(s);t.a=function(){return c.a.createElement("div",{className:r.a.preloader},c.a.createElement("img",{src:u.a,alt:"preloader"}))}},34:function(e,t,n){e.exports={formControl:"FormControls_formControl__18R7o",error:"FormControls_error__1_W_d",errorSummary:"FormControls_errorSummary__nSsXZ",d_inlineBlock:"FormControls_d_inlineBlock__XrI4l",captcha:"FormControls_captcha__1chiI"}},35:function(e,t,n){e.exports={header:"Header_header__3yPlg",logo:"Header_logo__15-rM",user:"Header_user__3n5E0",user_button:"Header_user_button__3eAFS",user_email:"Header_user_email__3-KbV"}},49:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));var a=n(73),r=n(0),o=n.n(r),u=n(34),s=n.n(u),c=["input","meta","child"],i=["input","meta","child"],l=["input","meta","child"],m=function(e){e.input;var t=e.meta,n=t.error,r=t.touched,u=(e.child,Object(a.a)(e,c)),i=n&&r;return o.a.createElement("div",{className:s.a.formControl+" "+(i&&s.a.error)},o.a.createElement("div",null,u.children),i&&o.a.createElement("span",null,n))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,i));return o.a.createElement(m,e,o.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return o.a.createElement(m,e,o.a.createElement("input",Object.assign({},t,n)))}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Fiels is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},71:function(e,t,n){e.exports={pagination:"Paginator_pagination__2Y52C",selected:"Paginator_selected__31wv9"}},92:function(e,t,n){"use strict";n.d(t,"g",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return g})),n.d(t,"a",(function(){return E})),n.d(t,"e",(function(){return _}));var a=n(10),r=n.n(a),o=n(20),u=n(45),s=n(5),c=n(11),i=n(36),l={postsData:[{id:1,post:"With our simple and useful tool you can generate a standard text which you can place in your web design to look more realistic. Would you like to get new text generated for your next project?",likesCount:3},{id:2,post:"Use the following options to generate a new lorem ipsum text for your next project",likesCount:12},{id:3,post:"When you construct a web design you are most likely to not have any content in the beginning. ",likesCount:5}],profile:null},m=function(e){return{type:"ADD-POST",postItemText:e}},f=function(e){return{type:"SET-USER-STATUS",status:e}},p=function(e){return function(t){c.d.getProfile(e).then((function(e){t({type:"SET-USER-PROFILE",profileData:e.data})}))}},d=function(e){return function(t){c.b.getStatus(e).then((function(e){t(f(e.data))}))}},g=function(e){return function(t){c.b.updateStatus(e).then((function(n){0===n.data.resultCode&&t(f(e))}))}},E=function(e){return function(t){c.b.savePhoto(e).then((function(e){0===e.data.resultCode&&t({type:"SAVE-PHOTO-SUCCESS",photos:e.data.data.photos})}))}},_=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n,a){var o,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userId,t.next=3,c.b.saveProfile(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(p(o)),t.next=10;break;case 8:return n(Object(i.a)("profileEditForm",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(s.a)(Object(s.a)({},e),{},{postsData:[].concat(Object(u.a)(e.postsData),[{post:t.postItemText,id:4,likesCount:0}])});case"SET-USER-PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profileData});case"SET-USER-STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SAVE-PHOTO-SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[167,1,2]]]);
//# sourceMappingURL=main.e952a2a1.chunk.js.map