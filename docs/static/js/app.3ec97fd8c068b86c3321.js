webpackJsonp([1],{0:function(t,e){},FpsR:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("ul",[e("li",[e("router-link",{attrs:{to:"/vue-blog/",exact:""}},[this._v("Home")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/vue-blog/add",exact:""}},[this._v("Add Blog")])],1)])])},staticRenderFns:[]};var i={name:"App",components:{"blog-navigation":o("VU/8")({name:"Navigation",data:function(){return{}}},s,!1,function(t){o("c7/h")},"data-v-76ece49b",null).exports}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("blog-navigation"),this._v(" "),e("div",{staticClass:"pageContent"},[e("router-view")],1)],1)},staticRenderFns:[]};var r=o("VU/8")(i,a,!1,function(t){o("z/ym")},null,null).exports,l=o("/ocq"),c=o("Dd8w"),u=o.n(c),d=o("NYxO"),v={name:"SingleBlog",props:["blog","preview"],methods:u()({},Object(d.b)({deletepost:"deletePost"}))},p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"singleItem"},[t.preview?t._e():o("button",{staticClass:"deleteButton",on:{click:function(e){t.deletepost(t.blog.id)}}},[t._v("Delete")]),t._v(" "),o("div",{staticClass:"bannerImg"},[t.blog.banner?o("img",{attrs:{src:t.blog.banner,alt:"Banner Image"}}):t._e()]),t._v(" "),o("div",{staticClass:"blogContent"},[o("h3",{staticClass:"title"},[t._v(t._s(t.blog.title))]),t._v(" "),o("p",{staticClass:"content"},[t._v(t._s(t.blog.content))])])])])},staticRenderFns:[]};var g=o("VU/8")(v,p,!1,function(t){o("uaBF")},"data-v-10546b49",null).exports,b={name:"AddBlog",components:{"single-blog-item":g},data:function(){return{blog:{title:"",content:"",banner:""},blogPost:!1,preview:!0}},methods:{processFile:function(t){var e=this,o=t.target.files[0],n=new FileReader;n.onload=function(t){e.blog.banner=t.target.result},n.readAsDataURL(o)},addBlog:function(){this.$http.post("https://vujs-blog.firebaseio.com/posts.json",this.blog).then(function(t){this.blog={title:"",content:"",banner:""},this.blogPost=!0}).then(function(){var t=this;setTimeout(function(){t.blogPost=!1},3e3)})}}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"addBlog"},[t.blogPost?o("div",{staticClass:"successMsg"},[o("p",[t._v("Blog posted Successfully")])]):t._e(),t._v(" "),o("h2",[t._v("Add Blog")]),t._v(" "),o("label",[t._v("Title:")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.title,expression:"blog.title"}],attrs:{type:"text",placeholder:"Type Blog Title"},domProps:{value:t.blog.title},on:{input:function(e){e.target.composing||t.$set(t.blog,"title",e.target.value)}}}),t._v(" "),o("br"),t._v(" "),o("label",[t._v("Body:")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blog.content,expression:"blog.content"}],attrs:{placeholder:"Type Blog Body",rows:"5"},domProps:{value:t.blog.content},on:{input:function(e){e.target.composing||t.$set(t.blog,"content",e.target.value)}}}),t._v(" "),o("br"),t._v(" "),o("label",[t._v("Banner:")]),t._v(" "),o("input",{attrs:{type:"file",accept:"image/*",placeholder:"Type Blog title"},on:{change:t.processFile}}),t._v(" "),o("button",{on:{click:function(e){return e.preventDefault(),t.addBlog(e)}}},[t._v("Add Blog")])]),t._v(" "),o("single-blog-item",{attrs:{blog:t.blog,preview:t.preview}})],1)},staticRenderFns:[]};var h=o("VU/8")(b,f,!1,function(t){o("aoGL")},"data-v-7d468f92",null).exports,m={name:"Home",components:{"single-blog-item":g},computed:{posts:function(){return this.$store.state.posts}},methods:u()({},Object(d.b)({fetchPosts:"fetchPosts"})),created:function(){this.fetchPosts()}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return this.$store.state.error||this.$store.state.loading?this.$store.state.loading?e("p",[this._v("Loading.........")]):this.$store.state.error?e("p",{staticClass:"error"},[this._v("An Error Occured")]):this._e():e("div",this._l(this.posts,function(t){return e("single-blog-item",{key:t.id,attrs:{blog:t}})}))},staticRenderFns:[]};var B=o("VU/8")(m,_,!1,function(t){o("FpsR")},"data-v-79126ca3",null).exports;n.a.use(l.a);var y=new l.a({routes:[{path:"/vue-blog/",name:"Home",component:B},{path:"/vue-blog/add",name:"AddBlog",component:h}],mode:"history"}),w={fetchPosts:function(t,e){t.loading=!1;var o=[];for(var n in e.body.posts)e.body.posts[n].id=n,o.push(e.body.posts[n]);t.posts=o},handleError:function(t){t.loading=!1,t.error=!0},deleteBlog:function(t,e){t.posts.map(function(o,n){o.id===e&&t.posts.splice(n,1)})}},P=o("8+8L");n.a.use(P.a);var $=n.a.http,x={fetchPosts:function(t){var e=t.commit;$.get("https://vujs-blog.firebaseio.com/.json").then(function(t){e("fetchPosts",t)},function(t){e("handleError")})},deletePost:function(t,e){var o=t.commit;$.delete("https://vujs-blog.firebaseio.com/posts/"+e+".json").then(function(t){o("deleteBlog",e)})}};n.a.use(d.a);var C=new d.a.Store({state:{loading:!0,error:!1,posts:{}},mutations:w,actions:x});n.a.config.productionTip=!0,new n.a({el:"#app",router:y,store:C,components:{App:r},template:"<App/>"})},aoGL:function(t,e){},"c7/h":function(t,e){},uaBF:function(t,e){},"z/ym":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3ec97fd8c068b86c3321.js.map