(this.webpackJsonpfirst_project=this.webpackJsonpfirst_project||[]).push([[3],{302:function(e,t,a){e.exports={content:"ProfileInfo_content__91aon",content_profile:"ProfileInfo_content_profile__14f5s",avatar:"ProfileInfo_avatar__8UV5Q",description:"ProfileInfo_description__3KhUc",description_name:"ProfileInfo_description_name__1k2Zm",description_title:"ProfileInfo_description_title__1E-4K",description_elem:"ProfileInfo_description_elem__3P-sH",description_button:"ProfileInfo_description_button__c9ro6",status:"ProfileInfo_status__10Ol5",contacts_title:"ProfileInfo_contacts_title__2sw2e",editProfile_button_save:"ProfileInfo_editProfile_button_save__1VoFV",addUserPhoto:"ProfileInfo_addUserPhoto__Rew2t"}},304:function(e,t,a){e.exports={profile:"Profile_profile__2EmaV",profile_bunner:"Profile_profile_bunner__zgfG8",user_post:"Profile_user_post__20Ecx",user_post__title:"Profile_user_post__title__2fW1G",user_post__button:"Profile_user_post__button__2Gddd",income:"Profile_income__2-w-w",message:"Profile_message__24k01",message__img:"Profile_message__img__W_T8b"}},305:function(e,t,a){e.exports={user:"UserPost_user__psMHz",user_post:"UserPost_user_post__2da2T",user_post_form:"UserPost_user_post_form__10CMq",error:"UserPost_error__2G13S",user_post_button:"UserPost_user_post_button__nnRFj",user_title:"UserPost_user_title__2jjNe",user_post__button:"UserPost_user_post__button__2pQLk"}},306:function(e,t,a){e.exports={wrap:"Post_wrap__24aiL",message:"Post_message__1L_I-",message__img:"Post_message__img__25UAQ",message__text:"Post_message__text__3aJY_",like:"Post_like__3spqo"}},308:function(e,t,a){"use strict";a.r(t);var r=a(38),s=a(39),n=a(41),o=a(40),l=a(0),i=a.n(l),c=a(304),u=a.n(c),m=a(93),_=a(302),p=a.n(_),f=a(115),d=a.n(f),E=a(49),b=a(126),v=a(127),P=a(34),h=a.n(P),g=Object(v.a)({form:"profileEditForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,e.error&&i.a.createElement("div",{className:h.a.errorSummary}," ",e.error," ")),i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement("b",null,"Full Name: ")),i.a.createElement(b.a,{component:E.a,name:"fullName",placeholder:"Full Name",validate:[]})),i.a.createElement("div",null,i.a.createElement("b",null,"Prof. skills: "),i.a.createElement(b.a,{component:E.b,name:"lookingForAJobDescription",placeholder:"Description...",validate:[]})),i.a.createElement("div",null,i.a.createElement("b",null,"About Me:"),i.a.createElement(b.a,{component:E.b,name:"aboutMe",placeholder:"About me...",validate:[]})),i.a.createElement("br",null),i.a.createElement("div",null,Object.keys(e.profile.contacts).map((function(e){return i.a.createElement("div",{key:e},i.a.createElement("b",null,e,": "),i.a.createElement(b.a,{component:E.a,name:"contacts."+e,placeholder:e,validate:[]}))}))),i.a.createElement("div",{className:p.a.editProfile_button_save},i.a.createElement("button",{onClick:e.enableEditMode},"Save")))})),N=function(e){var t=Object(l.useState)(!1),a=Object(m.a)(t,2),r=a[0],s=a[1],n=Object(l.useState)(e.status),o=Object(m.a)(n,2),c=o[0],u=o[1];Object(l.useEffect)((function(){u(e.status)}),[e.status]);return i.a.createElement("div",{className:p.a.status},!r&&i.a.createElement("div",{onClick:function(){s(!0)}},i.a.createElement("span",null,e.status||"No status")),r&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateUserStatus(c)},onChange:function(e){u(e.target.value)},value:c})))},U=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",null,i.a.createElement("span",{className:p.a.contacts_title},t,": "),a)},k=function(e){return i.a.createElement("div",{className:p.a.description},i.a.createElement("div",{className:p.a.description_name},e.profile.fullName),i.a.createElement("div",{className:p.a.description_elem},i.a.createElement(N,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus})),i.a.createElement("div",{className:p.a.description_elem},i.a.createElement("div",{className:p.a.description_title},"Skills: "),e.profile.lookingForAJobDescription),i.a.createElement("div",{className:p.a.description_elem},i.a.createElement("div",{className:p.a.description_title},"About Me"),e.profile.aboutMe||"--"),i.a.createElement("div",null,i.a.createElement("div",{className:p.a.description_name},"Contacts"),Object.keys(e.profile.contacts).map((function(t){return i.a.createElement(U,{key:t,contactTitle:t,contactValue:e.profile.contacts[t]})}))),i.a.createElement("div",{className:p.a.description_button},e.isOwner&&i.a.createElement("button",{onClick:e.enableEditMode},"Settings")))},O=function(e){var t=Object(l.useState)(!1),a=Object(m.a)(t,2),r=a[0],s=a[1];return i.a.createElement("div",{className:p.a.content},i.a.createElement("div",{className:p.a.content_profile},i.a.createElement("div",null,i.a.createElement("div",{className:p.a.avatar},i.a.createElement("img",{src:e.profile.photos.small||d.a,alt:e.profile.contacts.fullName}))),i.a.createElement("div",null,r?i.a.createElement("div",null,i.a.createElement("div",{className:p.a.addUserPhoto},e.isOwner&&i.a.createElement("label",null,"Upload new photo",i.a.createElement("input",{id:"file_upload",type:"file",onChange:function(t){t.target.files.length&&e.addPhoto(t.target.files[0])}}))),i.a.createElement(g,{initialValues:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){s(!1)}))},profile:e.profile})):i.a.createElement(k,{profile:e.profile,status:e.status,isOwner:e.isOwner,updateUserStatus:e.updateUserStatus,enableEditMode:function(){return s(!0)}}))))},S=a(92),j=a(305),I=a.n(j),w=a(306),x=a.n(w),y=function(e){return i.a.createElement("div",{className:x.a.wrap},i.a.createElement("div",{className:x.a.message},i.a.createElement("div",{className:x.a.message__img},i.a.createElement("img",{src:"https://pbs.twimg.com/profile_images/1186282378714472449/1FFdpXMC_bigger.jpg",alt:""})),i.a.createElement("div",{className:x.a.message__text},e.text)),i.a.createElement("div",{className:x.a.like},e.likeCount))},C=a(67),M=Object(C.a)(30),F=Object(v.a)({form:"profileAddUserPost"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement(b.a,{component:E.b,name:"postItemText",placeholder:"Type a comment",validate:[C.b,M]}),i.a.createElement("div",{className:I.a.user_post_button},i.a.createElement("button",null,"Send")))})),A=function(e){var t=e.postData.map((function(e){return i.a.createElement(y,{text:e.post,likeCount:"likes "+e.likesCount,key:e.id})}));return i.a.createElement("div",{className:I.a.user},i.a.createElement("div",{className:I.a.messagesContainer},t),i.a.createElement("div",{className:I.a.user_post},i.a.createElement(F,{onSubmit:function(t){e.addUserPost(t.postItemText)}})))},T=a(13),D=Object(T.b)((function(e){return{newPostText:e.profilePage.newPostText,postData:e.profilePage.postsData}}),(function(e){return{addUserPost:function(t){e(Object(S.g)(t))}}}))(A),V=a(32),J=function(e){if(!e.profile)return i.a.createElement(V.a,null);var t=e.isOwner,a=e.saveProfile;return i.a.createElement("div",{className:u.a.profile},i.a.createElement(O,{saveProfile:a,isOwner:t,profile:e.profile,status:e.status,addPhoto:e.addPhoto,updateUserStatus:e.updateUserStatus}),i.a.createElement(D,null))},z=a(9),G=a(8),L=function(e){Object(n.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(J,{saveProfile:this.props.saveProfile,isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,addPhoto:this.props.addPhoto,updateUserStatus:this.props.updateUserStatus})}}]),a}(i.a.Component);t.default=Object(G.d)(Object(T.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,idAuth:e.auth.isAuth}}),{getUserProfile:S.c,getUserStatus:S.d,updateUserStatus:S.f,addPhoto:S.a,saveProfile:S.e}),z.f)(L)}}]);
//# sourceMappingURL=3.75e7c261.chunk.js.map