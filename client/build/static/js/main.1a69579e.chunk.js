(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,t,a){e.exports=a(364)},195:function(e,t,a){},246:function(e,t,a){},269:function(e,t,a){},342:function(e,t,a){},343:function(e,t,a){},354:function(e,t,a){},358:function(e,t,a){},359:function(e,t,a){},360:function(e,t,a){},364:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),l=a.n(r),s=(a(195),a(25)),c=a(26),i=a(29),u=a(27),m=a(30),p=a(133),h=a(82),d=a.n(h),g=a(110),f=a(85),E=a(56),b=a(377),y=a(170),v=a(366),k=a(375),O=a(34),S=a.n(O),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!0,user:{},connections:0,view:0,postCount:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),S.a.get("/api/users/".concat(localStorage.getItem("userId"))).then(function(t){e.setState({user:t.data,loading:!1,postCount:t.data.posts.length})}).catch(function(e){console.log("Problem getting user on the profile card component: ",e)})}},{key:"render",value:function(){var e=this.state.loading;return o.a.createElement(b.a,{bordered:!0,loading:e},o.a.createElement(f.a,{justify:"center",style:{textAlign:"center"}},o.a.createElement(E.a,{span:24},!e&&o.a.createElement(y.a,{size:125,src:this.state.user.avatar}),!e&&o.a.createElement("h2",{style:{marginTop:"5px",marginBottom:"0px"}},this.state.user.name),!e&&o.a.createElement("small",null,this.state.user.github.bio))),o.a.createElement(v.a,null),o.a.createElement(f.a,{gutter:16,justify:"center"},o.a.createElement(E.a,{span:8,style:{textAlign:"center",borderRight:"1px solid #303030"}},!e&&o.a.createElement(k.a,{title:"Posts",value:this.props.totalPosts})),o.a.createElement(E.a,{span:8,style:{textAlign:"center",borderRight:"1px solid #303030"}},!e&&o.a.createElement(k.a,{title:"Connections",value:this.state.connections})),o.a.createElement(E.a,{span:8,style:{textAlign:"center"}},!e&&o.a.createElement(k.a,{title:"Views",value:this.state.views}))),o.a.createElement(v.a,null),o.a.createElement(f.a,{gutter:16,justify:"center"},o.a.createElement(E.a,null,o.a.createElement("a",{href:"/profile/:id"},"VIEW MY PROFILE"))))}}]),t}(n.Component),w=a(138),C=a(86),I=(a(246),a(367)),x=a(139),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,options:[]},a.onSearch=function(e){a.setState({loading:!0}),S.a.get("/api/users/search/".concat(e)).then(function(e){var t=e.data.map(function(e){return{value:[o.a.createElement(y.a,{src:e.avatar,style:{marginRight:"4px"}}),e.name,o.a.createElement("span",{style:{fontStyle:"italic",fontWeight:"bold"}}," [ @",e.github.login," ] ")]}});console.log("New Connections:",t),a.setState({options:t,loading:!1})}).catch(function(e){console.log(e)})},a.onSelect=function(e){},a.onChange=function(e){},a.setupOptions=function(e){},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(v.a,null,"Search For Others"),o.a.createElement(I.a,{style:{width:"100%"},options:this.state.options,onSelect:this.onSelect,onSearch:this.onSearch,placeholder:"input here"}),o.a.createElement(v.a,null,"Connect With Others Around You"),o.a.createElement(x.b,{grid:{gutter:16,column:3},loading:this.state.loading,itemLayout:"horizontal",dataSource:[{name:"John Doe",bio:"Short Bio about the person."},{name:"Jane Doe",bio:"Short Bio about the person."},{name:"Joe Rogan",bio:"Short Bio about the person."},{name:"John Doe",bio:"Short Bio about the person."},{name:"Jane Doe",bio:"Short Bio about the person."},{name:"Joe Rogan",bio:"Short Bio about the person."}],renderItem:function(e){return o.a.createElement(x.b.Item,null,o.a.createElement(x.b.Item.Meta,{avatar:o.a.createElement(y.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:o.a.createElement("a",{href:"https://ant.design"},e.name),description:e.bio}))}}))}}]),t}(n.Component),P=a(371),A=a(372),L=a(125),N=a(378),T=a(373),M=a(368),B=a(55),R=(a(269),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={content:"",postLiked:!1,postDisliked:!1,postLikeCount:0,postDislikeCount:0},a.userFromMention=function(e,t,a){var n=e.substring(1,e.length).toLowerCase();return'<a href="/profile/'.concat(n.trim(),'">').concat(e,"</a>")},a.onLikeClick=function(e){e.preventDefault(),console.log(a.props.post),S.a.post("/api/posts/".concat(a.props.post._id,"/like"),{userId:localStorage.getItem("userId")}).then(function(e){console.log(e.data),a.setState({postLiked:!0,postLikeCount:e.data.likes.length,postDislikeCount:e.data.dislikes.length,postDisliked:!1})}).catch(function(e){})},a.onDislikeClick=function(e){e.preventDefault(),S.a.post("/api/posts/".concat(a.props.post._id,"/dislike"),{userId:localStorage.getItem("userId")}).then(function(e){a.setState({postLiked:!1,postDisliked:!0,postLikeCount:e.data.likes.length,postDislikeCount:e.data.dislikes.length})}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.post,t=e.likes.indexOf(localStorage.getItem("userId")),a=e.dislikes.indexOf(localStorage.getItem("userId"));t>=0?this.setState({postLiked:!0}):this.setState({postLiked:!1}),a>=0?this.setState({postDisliked:!0}):this.setState({postDisliked:!1}),this.setState({postLikeCount:e.likes.length,postDislikeCount:e.dislikes.length})}},{key:"render",value:function(){var e=this.props.post;return o.a.createElement("div",null,o.a.createElement(b.a,{bodyStyle:{padding:0},style:{marginBottom:"20px"},title:[o.a.createElement(y.a,{size:"large",src:e.author.avatar,style:{marginRight:"10px"}}),e.author.name],extra:o.a.createElement(N.a,{overlay:o.a.createElement(T.a,null,e.author._id===localStorage.getItem("userId")?o.a.createElement(T.a.Item,{key:"0"},o.a.createElement("a",{href:"#"},"Delete Post")):o.a.createElement(T.a.Item,{key:"1"},o.a.createElement("a",{href:"#"},"Hide Post"))),trigger:["click"]},o.a.createElement("a",{className:"ant-dropdown-link",style:{color:"#ffffff"},onClick:function(e){return e.preventDefault()}},o.a.createElement(B.a,null)))},o.a.createElement(f.a,null,o.a.createElement(E.a,{span:24,style:{padding:"30px"}},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content.replace(/\B@([\w\-]+)/gim,this.userFromMention)}}))),o.a.createElement(f.a,null,o.a.createElement(E.a,{span:24},o.a.createElement("div",{className:"card-footer",style:{marginBottom:"10px",borderTop:"1px solid #303030",padding:"15px",paddingBottom:0}},o.a.createElement(M.a,null,this.state.postLiked?o.a.createElement(B.h,{style:{cursor:"pointer"}}):o.a.createElement(B.f,{onClick:this.onLikeClick,style:{cursor:"pointer"}})," ",o.a.createElement("span",null,this.state.postLikeCount),o.a.createElement(v.a,{type:"vertical"}),this.state.postDisliked?o.a.createElement(B.g,{style:{cursor:"pointer"}}):o.a.createElement(B.e,{onClick:this.onDislikeClick,style:{cursor:"pointer"}})," ",o.a.createElement("span",null,this.state.postDislikeCount),o.a.createElement(v.a,{type:"vertical"}),o.a.createElement(B.d,{style:{cursor:"pointer"}})," ",o.a.createElement("span",null,"0")))))))}}]),t}(n.Component)),V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",loading:!1,users:[],showPostButton:!1,updateText:"",posts:[]},a.onChange=function(e){e.length>0?a.setState({updateText:e,showPostButton:!0}):a.setState({updateText:e,showPostButton:!1})},a.onSubmit=Object(g.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/api/users/".concat(localStorage.getItem("userId")));case 2:t=e.sent,a.setState({loading:!0}),S.a.post("/api/posts",{author:t.data,content:a.state.updateText,visibleTo:"public"}).then(function(e){a.loadPosts(),a.updatePostCount(),a.setState({loading:!1,updateText:""})}).catch(function(e){console.log("Error posting new update: ",e)});case 5:case"end":return e.stop()}},e)})),a.updatePostCount=function(){a.props.updatePostCount()},a.onSearch=function(e){a.setState({search:e,loading:!!e,users:[]}),console.log("Search: ",e),a.loadUsers(e)},a.loadUsers=function(e){e?S.a.get("/api/users/search/".concat(e)).then(function(t){a.state.search===e&&(console.log("users",t.data),a.setState({users:t.data,loading:!1}))}).catch(function(e){console.log(e)}):a.setState({users:[]})},a.loadPosts=function(){S.a.get("/api/posts").then(function(e){console.log("posts: ",e.data),a.setState({posts:e.data})}).catch(function(e){console.log("Error retrieving posts: ",e)})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadPosts()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(P.a,null,o.a.createElement(f.a,null,o.a.createElement(A.a,{rows:"3",autoSize:!0,style:{width:"100%",border:0},onChange:this.onChange,onSearch:this.onSearch,placeholder:"Whats on your mind? Use @ to mention someone.",value:this.state.updateText},this.state.users.length>0?this.state.users.map(function(e,t){return o.a.createElement("option",{key:t,value:e.login},o.a.createElement(y.a,{src:e.avatar,style:{marginRight:"4px"}}),e.name," ",o.a.createElement("span",{style:{fontStyle:"italic"}},"[ @",e.login," ]"))}):null)),this.state.showPostButton&&o.a.createElement(f.a,{style:{marginTop:"10px"}},o.a.createElement(E.a,{span:24,style:{textAlign:"right"}},o.a.createElement(L.a,{type:"primary",htmlType:"submit",onClick:this.onSubmit},"Post Update")))),this.state.posts.length>0?this.state.posts.map(function(e,t){return o.a.createElement(R,{key:t,post:e})}):o.a.createElement(C.a,null))}}]),t}(n.Component),F=(a(342),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!0,article:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{class:"qna-body field"},o.a.createElement("textarea",{id:"qna-text",rows:"5",type:"text",placeholder:"Ask you question here..."})),o.a.createElement("div",{class:"qna-button"},o.a.createElement("button",{type:"submit",class:"qna-submit"},"Submit question")))}}]),t}(n.Component)),J=w.a.TabPane,W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={users:[]},a.componentDidMount=function(){S.a.get("/api/users/").then(function(e){console.log("users",e.data),a.setState({users:e.data})}).catch(function(e){console.log(e)})},a.updatePostCount=function(){a.props.updatePostCount()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"what-to-do",className:"card-container",style:{}},o.a.createElement(w.a,{type:"card"},o.a.createElement(J,{tab:"SHARE AN UPDATE",key:"1"},o.a.createElement(V,{updatePostCount:this.updatePostCount,profileDrawerVisible:this.props.profileDrawerVisible})),o.a.createElement(J,{tab:"Q & A",key:"2"},o.a.createElement(F,null)),o.a.createElement(J,{tab:"NEW CONNECTIONS",key:"3"},o.a.createElement(D,null)),o.a.createElement(J,{tab:"FIND A JOB",key:"4"},o.a.createElement(C.a,null))))}}]),t}(n.Component),z=a(374),U=a(369),q=(a(343),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={articles:{},loading:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&category=Technology&rapidapi-key=6d36da78a6msha238c0ff02538fdp165a31jsn530d7e5b5c6e").then(function(t){e.setState({articles:t.data.value,loading:!1})}).catch(function(e){console.log("Error getting news article: ",e)})}},{key:"render",value:function(){var e=this.state.loading;return console.log("articles",this.state.articles),o.a.createElement(b.a,{id:"techcard"},o.a.createElement(z.a,{loading:this.state.loading,active:!0,avatar:!0},o.a.createElement("h2",{id:"techtitle"},"Latest Tech News"),o.a.createElement(U.a,{autoplay:!0,autoplaySpeed:15e3,dots:!1},!e&&this.state.articles.map(function(t,a){return o.a.createElement(x.b.Item,{key:a},o.a.createElement(x.b.Item.Meta,{title:!e&&o.a.createElement("a",{href:t.url},t.name),avatar:!e&&o.a.createElement(y.a,{size:120,shape:"square",src:t.image.thumbnail.contentUrl}),description:!e&&t.description}))}))))}}]),t}(n.Component)),H=a(376),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({visible:this.props.profileDrawerVisible})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(H.a,{width:640,placement:"right",closable:!1,onClose:this.onClose,visible:this.state.visible},o.a.createElement("h1",null,"Welcome Home")))}}]),t}(n.Component),Y=(a(354),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={user:{},totalPosts:0,profileDrawerVisible:!1},a.loadUser=function(){S.a.get("/api/users/".concat(localStorage.getItem("userId"))).then(function(e){a.setState({user:e.data,totalPosts:e.data.posts.length})}).catch(function(e){console.log(e)})},a.loadTotalPosts=Object(g.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.loadUser());case 1:case"end":return e.stop()}},e)})),a.profileDrawerVisible=function(e){a.setState({profileDrawerVisible:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadTotalPosts()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{gutter:{xs:8,sm:16,md:24,lg:32}},o.a.createElement(E.a,{span:0,md:{span:6}},o.a.createElement(j,{totalPosts:this.state.totalPosts})),o.a.createElement(E.a,{span:24,md:{span:12}},o.a.createElement(W,{updatePostCount:this.loadUser,profileDrawerVisible:this.profileDrawerVisible})),o.a.createElement(E.a,{span:0,md:{span:6}},o.a.createElement(q,null))),o.a.createElement(_,{profileDrawerVisible:this.state.profileDrawerVisible}))}}]),t}(n.Component)),X=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!0,user:{},posts:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("/api/users/find-by-login/"+this.props.match.params.id).then(function(t){e.setState({user:t.data,loading:!1})}).catch(function(e){console.log("Error getting users profile.",e)}),S.a.get("/api/posts/").then(function(t){e.setState({posts:t.data,loading:!1})}).catch(function(e){console.log("Error getting users profile.",e)})}},{key:"render",value:function(){var e=this.state;e.user,e.loading;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{gutter:{xs:8,sm:16,md:24,lg:32}},o.a.createElement(E.a,{span:24,md:{span:8}},o.a.createElement("h1",null,"My Profile"),o.a.createElement(j,{totalPosts:this.state.posts.length})),o.a.createElement(E.a,{span:24,md:{span:16}},o.a.createElement("h1",null,"My Posts"),this.state.posts.length>0?this.state.posts.map(function(e){return o.a.createElement(R,{post:e})}):null)))}}]),t}(n.Component),G=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(L.a,{type:"primary",href:"http://localhost:3001/api/auth/github"},"Login With Github"))}}]),t}(n.Component),K=a(124),Q=a(33),$=function(e){var t=e.component,a=e.layout,n=e.user,r=Object(K.a)(e,["component","layout","user"]),l=localStorage.getItem("loggedIn");return(l=!1!==JSON.parse(l)&&null!==l)?o.a.createElement(Q.b,Object.assign({},r,{render:function(e){return o.a.createElement(a,{user:n},o.a.createElement(t,Object.assign({user:n},e)))}})):o.a.createElement(Q.a,{to:"/"})},Z=function(e){var t=e.component,a=e.layout,n=(e.user,Object(K.a)(e,["component","layout","user"])),r=localStorage.getItem("loggedIn");return r=!1!==JSON.parse(r)&&null!==r,o.a.createElement(Q.b,Object.assign({},n,{render:function(e){return r?o.a.createElement(Q.a,{to:"/news-feed"}):o.a.createElement(a,null,o.a.createElement(t,e))}}))},ee=a(370),te=(a(358),a(100)),ae=a(189),ne=(a(359),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={current:"home"},a.logout=function(){localStorage.removeItem("loggedIn"),localStorage.removeItem("userId"),S.a.get("/api/auth/logout").then(function(e){e.data.success&&window.location.reload()}).catch(function(e){console.log(e)})},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.current;return o.a.createElement(o.a.Fragment,null,o.a.createElement(T.a,{theme:"dark",onClick:this.handleClick,selectedKeys:[e],mode:"horizontal",style:{textAlign:"right"}},o.a.createElement(T.a.Item,{key:"home"},o.a.createElement("a",{href:"/"},o.a.createElement(B.c,{style:{marginRight:"0",fontSize:"22px"}}))),o.a.createElement(te.a,{icon:o.a.createElement(ae.a,{count:1,style:{fontSize:"10px"}},o.a.createElement(B.i,{style:{marginRight:"0",fontSize:"22px"}}))},o.a.createElement(T.a.Item,{key:"setting:1"},"Option 1"),o.a.createElement(T.a.Item,{key:"setting:2"},"Option 2"),o.a.createElement(T.a.Item,{key:"setting:3"},"Option 3"),o.a.createElement(T.a.Item,{key:"setting:4"},"Option 4")),o.a.createElement(te.a,{icon:o.a.createElement(B.b,{style:{marginRight:"0",fontSize:"22px"}})},o.a.createElement(T.a.Item,{key:"setting:1"},"Profile"),o.a.createElement(T.a.Item,{key:"setting:2"},"Settings"),o.a.createElement(T.a.Item,{key:"setting:3",onClick:this.logout},"Logout"))))}}]),t}(n.Component)),oe=Object(Q.f)(ne),re=ee.a.Header,le=ee.a.Content,se=ee.a.Footer,ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={navigate:!1,theme:"dark"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(ee.a,{theme:this.state.theme,style:{minHeight:"100vh"}},o.a.createElement(re,{theme:"dark"},o.a.createElement("div",{className:"logo"},o.a.createElement("h3",null,"DevSpot")),o.a.createElement(oe,null)),o.a.createElement(le,{className:"site-layout",style:{marginTop:40,padding:"0 40px",minHeight:280}},this.props.children),o.a.createElement(se,{style:{textAlign:"center"}},"Designed and Developed by WolffsRockstars. T Freaking M"))}}]),t}(n.Component);var ie=function(e){var t=e.children;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h1",null,"Connect with Bootcampers around the world.")),o.a.createElement("div",{className:"col"},o.a.createElement("h1",null,"Sign up "),t)))},ue=(a(360),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={loggedIn:!1,user:{}},a.componentDidMount=function(){var e=localStorage.getItem("loggedIn"),t=localStorage.getItem("userId");!1===JSON.parse(e)||null===e||null===t?a.checkLoginStatus():S.a.get("/api/users/".concat(t)).then(function(e){a.setState({loggedIn:!0,user:e})}).catch(function(e){console.log("Failed to get users details. ",e)})},a.checkLoginStatus=function(){S.a.get("/api/auth/login/success",{withCredentials:!0}).then(function(e){e.data.success?(console.log("Check Login Status: ",e.data.success),localStorage.setItem("loggedIn","true"),localStorage.setItem("userId",e.data.user._id),a.setState({loggedIn:!0,user:e.data.user})):(localStorage.removeItem("loggedIn"),localStorage.removeItem("userId"),a.setState({loggedIn:!1}))}).catch(function(e){console.log("Check Login Status Error: ",e)})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement(Z,{exact:!0,path:"/",component:G,layout:ie}),o.a.createElement($,{exact:!0,path:"/news-feed",component:Y,layout:ce}),o.a.createElement($,{exact:!0,path:"/profile/:id",component:X,layout:ce}))}}]),t}(a(0).Component)),me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(361),l.a.render(o.a.createElement(ue,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");me?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):pe(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):pe(e)})}}()}},[[190,1,2]]]);
//# sourceMappingURL=main.1a69579e.chunk.js.map