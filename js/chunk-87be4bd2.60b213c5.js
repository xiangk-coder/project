(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87be4bd2"],{"50f9":function(t,e,l){"use strict";l.r(e);var i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-container",{staticClass:"global-height"},["default"===t.layout?l("view-aside"):t._e(),"horizontal"===t.layout?l("el-header",[t._v(" header ")]):t._e(),"horizontal"===t.layout?l("el-main",[t._v(" main ")]):t._e(),"mixing"===t.layout?l("el-header",[t._v(" header ")]):t._e(),"mixing"===t.layout?l("el-container",[l("el-aside",[t._v(" aside ")]),l("el-main",[t._v(" main ")])],1):t._e(),"mini"===t.layout?l("mini-menu",{attrs:{layout:t.layout}}):t._e(),"mini"===t.layout?l("el-main"):t._e()],1)},s=[],n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-container",{staticClass:"global-height"},[l("el-aside",{staticClass:"el-asider-width",style:t.asideStyle},[l("view-logo",{style:t.logoStyle,attrs:{collapse:t.isCollapse}}),l("el-menu",{staticClass:"el-menu-vertical-border",attrs:{"default-active":"1-4-1",collapse:t.isCollapse,"background-color":"#303133","text-color":"#fff","active-text-color":"#f6ca9d"},on:{open:t.handleOpen,close:t.handleClose}},[l("el-submenu",{attrs:{index:"1"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-location"}),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航一")])]),l("el-menu-item-group",[l("span",{attrs:{slot:"title"},slot:"title"},[t._v("分组一")]),l("el-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),l("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],1),l("el-menu-item-group",{attrs:{title:"分组2"}},[l("el-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),l("el-submenu",{attrs:{index:"1-4"}},[l("span",{attrs:{slot:"title"},slot:"title"},[t._v("选项4")]),l("el-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],1)],2),l("el-menu-item",{attrs:{index:"2"}},[l("i",{staticClass:"el-icon-menu"}),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),l("el-menu-item",{attrs:{index:"3",disabled:""}},[l("i",{staticClass:"el-icon-document"}),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),l("el-menu-item",{attrs:{index:"4"}},[l("i",{staticClass:"el-icon-setting"}),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])]),l("el-menu-item",{attrs:{index:"5"}},[l("i",{staticClass:"el-icon-setting"}),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航五")])]),l("el-menu-item",{attrs:{index:"6"}},[l("i",{staticClass:"el-icon-setting"}),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航六")])]),l("el-menu-item",{attrs:{index:"7"}},[l("i",{staticClass:"el-icon-setting"}),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航七")])])],1)],1),l("el-container",[l("el-header",{staticClass:"el-header-component"},[l("el-link",{staticClass:"el-link-collapse",on:{click:function(e){t.isCollapse=!t.isCollapse}}},[l("i",{class:t.iconClass})]),l("view-nav"),l("view-setting")],1),l("el-main",{staticClass:"el-main-component"},[t._v("main")])],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"header-logo"},[l("el-tooltip",{attrs:{disabled:!t.collapse,effect:"dark",content:"系统管理平台",placement:"right"}},[l("div",{staticClass:"header-logo-icon"},[l("i",{staticClass:"el-icon-menu"})])]),t.collapse?t._e():l("span",[t._v("系统管理平台")])],1)},c=[],r={props:{collapse:{type:Boolean,default:!1}}},u=r,d=(l("6e22"),l("2877")),m=Object(d["a"])(u,o,c,!1,null,"aa9d4ef4",null),p=m.exports,f=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),l("el-breadcrumb-item",[l("a",{attrs:{href:"/"}},[t._v("活动管理")])]),l("el-breadcrumb-item",[t._v("活动列表")]),l("el-breadcrumb-item",[t._v("活动详情")])],1)},h=[],v={},_=v,C=Object(d["a"])(_,f,h,!1,null,"ad69c0a4",null),w=C.exports,g=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"c-view-setting"},[l("el-dropdown",{staticClass:"c-view-setting-user"},[l("span",{staticClass:"el-dropdown-link"},[l("i",{staticClass:"el-icon-user-solid el-icon--left"}),t._v(t._s(t.userName)),l("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),l("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[l("el-dropdown-item",{attrs:{icon:"el-icon-edit-outline"}},[t._v("个人信息")]),l("el-dropdown-item",{attrs:{icon:"el-icon-switch-button"}},[t._v("退出登录")])],1)],1)],1)},b=[],x={data:function(){return{userName:"管理员"}}},y=x,k=(l("7112"),Object(d["a"])(y,g,b,!1,null,"5e8b2926",null)),j=k.exports,O={components:{ViewLogo:p,ViewNav:w,ViewSetting:j},data:function(){return{isCollapse:!1}},computed:{asideStyle:function(){return this.isCollapse?{width:"auto",maxWidth:"300px",height:"100%",overflow:"hidden"}:{width:"auto",minWidth:"200px",maxWidth:"300px",height:"100%",overflow:"hidden"}},logoStyle:function(){return this.isCollapse?{width:"64px",justifyContent:"center"}:{justifyContent:"flex-start"}},iconClass:function(){return this.isCollapse?"el-icon-s-unfold el-icon--right el-icon-collapse":"el-icon-s-fold el-icon--right el-icon-collapse"}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},$=O,E=(l("7d22"),Object(d["a"])($,n,a,!1,null,"8e2f87d8",null)),S=E.exports,V={components:{ViewAside:S},computed:{layout:function(){return this.$store.state.layout}},watch:{layout:function(t,e){this.layout=t}}},N=V,W=Object(d["a"])(N,i,s,!1,null,"1346cba5",null);e["default"]=W.exports},5354:function(t,e,l){},"5c6f":function(t,e,l){},"6e22":function(t,e,l){"use strict";var i=l("5c6f"),s=l.n(i);s.a},7112:function(t,e,l){"use strict";var i=l("5354"),s=l.n(i);s.a},"7d22":function(t,e,l){"use strict";var i=l("7ff7"),s=l.n(i);s.a},"7ff7":function(t,e,l){}}]);
//# sourceMappingURL=chunk-87be4bd2.60b213c5.js.map