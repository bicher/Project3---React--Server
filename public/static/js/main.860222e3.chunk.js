(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),c=a.n(s),o=(a(69),a(5)),i=a(6),l=a(8),m=a(7),u=a(9),d=a(11),p=a(4),h=a.n(p),f=a(15),v=function(e){return function(){var t=Object(f.a)(h.a.mark(function t(a){var n,r;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/signin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a({type:"LOGIN",data:r});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(f.a)(h.a.mark(function t(a){var n,r;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a({type:"REGISTER",data:r});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(){return function(){var e=Object(f.a)(h.a.mark(function e(t){var a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/vacations");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t({type:"VACATIONS_CHANGE",data:n});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},E=(a(76),a(77),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"credits ml-auto"},r.a.createElement("span",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"/"}," Made by Israel Bicher."))))))}}]),t}(n.Component)),N=a(21),O=a(19),y=a(16),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={firstname:"",lastname:"",username:"",password:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"Register"),r.a.createElement("div",{className:"md-form"},r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"firstname",type:"text",placeholder:"First Name",className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"md-form"},r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"lastname",type:"password",placeholder:"Last Name",className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"md-form"},r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"username",type:"text",placeholder:"Username",className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"md-form"},r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"password",type:"password",placeholder:"Password",className:"form-control"})),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.register.bind(this)},"Sign up"),r.a.createElement("hr",null),"Already have an account?",r.a.createElement(y.b,{to:"/login",id:"linkB"}," Sign in")))))}},{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"register",value:function(){var e=Object(f.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:""===(t=this.state).firstname?alert("First Name required!"):""===t.lastname?alert("Last Name required!"):""===t.username?alert("Username required!"):""===t.password?alert("Password required!"):(this.props.registerRequest(g(this.state)),alert("Register Successful"),this.props.history.push("/login"));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),C=Object(d.b)(function(e){return{msg:e.msg}},function(e){return{registerRequest:function(t){return e(t)}}})(j),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"Login"),r.a.createElement("div",{className:"md-form"},r.a.createElement("i",{className:"fa fa-user prefix"}),r.a.createElement("input",{autoFocus:!0,onChange:this.handleChange.bind(this),name:"username",type:"text",placeholder:"Username",className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"md-form"},r.a.createElement("i",{className:"fa fa-lock prefix"}),r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"password",type:"password",placeholder:"password",className:"form-control"})),r.a.createElement("div",{className:"md-form"},this.props.msg),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.login.bind(this)},"Login"),r.a.createElement("hr",null),"Don't have an account?",r.a.createElement(y.b,{to:"/register",id:"linkB"}," Sign up!")))))}},{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"login",value:function(){var e=Object(f.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.state.username?this.state.password?this.props.loginRequest(v(this.state)):alert("password required!"):alert("Username required!");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),w=Object(d.b)(function(e){return{isLogged:e.isLogged,role:e.role,msg:e.msg}},function(e){return{loginRequest:function(t){return e(t)}}})(k),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Trip Tours"),r.a.createElement("h4",{className:"description"},"Your Vacation Starts Here...")),r.a.createElement("div",{className:"row"},r.a.createElement(N.a,{exact:!0,path:"/",component:w}),r.a.createElement(N.a,{path:"/login",component:w}),r.a.createElement(N.a,{path:"/register",component:C}))))}}]),t}(n.Component),L=a(128),S=a(124),A=a(125),V=a(126),T=a(127),D=a(20),R=a.n(D),F=R()("http://localhost:8888"),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={modal:e.initialModalState,id:a.props.forModal.id,destination:"",startdate:"",enddate:"",price:"",details:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.on("vacationsChange",function(t){e.props.editVacation(b())})}},{key:"render",value:function(){return r.a.createElement("div",{className:"modalEdit"},r.a.createElement("span",{className:"fa fa-edit top-right",onClick:this.toggle.bind(this)},"Edit"),r.a.createElement(L.a,{isOpen:this.state.modal,toggle:this.toggle.bind(this),className:this.props.className},r.a.createElement(S.a,{toggle:this.toggle.bind(this)},"Edit This Vacation"),r.a.createElement(A.a,null,r.a.createElement("div",{className:"vacations"},r.a.createElement("div",{className:"card card-image",style:{backgroundImage:"url(".concat(this.props.forModal.image,")")}},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"col-3 text-white pt-3 pb-3 px-4"},r.a.createElement("div",{style:{width:"16rem",height:"20rem"}},"Destination:",r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"destination",className:"card-title pt-1 text-center",placeholder:this.props.forModal.destination}),"Start Date:",r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"startdate",className:"text-center",placeholder:this.props.forModal.startdate}),r.a.createElement("br",null),"End Date:",r.a.createElement("input",{className:"text-center",onChange:this.handleChange.bind(this),name:"enddate",placeholder:this.props.forModal.enddate}),"Details:",r.a.createElement("input",{className:"text-left",onChange:this.handleChange.bind(this),name:"details",placeholder:this.props.forModal.details}),"Price:",r.a.createElement("input",{className:"text-center",onChange:this.handleChange.bind(this),name:"price",type:"number",placeholder:this.props.forModal.price}),r.a.createElement("i",{className:"fa fa-usd"}))))))),r.a.createElement(V.a,null,r.a.createElement(T.a,{color:"primary",onClick:this.saveVacation.bind(this)},"Save")," ",r.a.createElement(T.a,{color:"secondary",onClick:this.toggle.bind(this)},"Cancel"))))}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"saveVacation",value:function(){var e;this.props.editVacation((e=this.state,function(){var t=Object(f.a)(h.a.mark(function t(a){var n,r;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/edit",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a({type:"EDIT",data:r});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())),this.toggle()}}]),t}(n.Component),I=Object(d.b)(null,function(e){return{editVacation:function(t){e(t)}}})(M),U=R()("http://localhost:8888"),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={buttonClick:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;U.on("vacationsChange",function(t){e.props.dispatchVacaion(b())})}},{key:"render",value:function(){return"Admin"===this.props.role?r.a.createElement("div",{className:"vacations"},r.a.createElement("div",{className:"card card-image",style:{backgroundImage:"url(".concat(this.props.v.image,")")}},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",null,r.a.createElement("span",{className:"fa fa-times top-right",onClick:this.deleteVacation.bind(this)}),r.a.createElement("br",null),r.a.createElement(I,{forModal:this.props.v})),r.a.createElement("div",{className:"text-white pt-3 pb-3 px-4"},r.a.createElement("div",null,r.a.createElement("h3",{className:"card-title pt-1 text-center"},r.a.createElement("strong",null,this.props.v.destination)),r.a.createElement("p",{className:"text-center"},this.props.v.startdate,r.a.createElement("br",null),this.props.v.enddate),r.a.createElement("p",{className:"text-left"},this.props.v.details),r.a.createElement("p",{className:"price text-center"},this.props.v.price,r.a.createElement("i",{className:"fa fa-usd"})),r.a.createElement("p",null,this.props.v.followers," ",r.a.createElement("i",{className:"fa fa-eye"}))))))):r.a.createElement("div",{className:"vacations"},r.a.createElement("div",{className:"card card-image",style:{backgroundImage:"url(".concat(this.props.v.image,")")}},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"text-white pt-3 pb-3 px-4"},r.a.createElement("h3",{className:"card-title pt-1 text-center"},r.a.createElement("strong",null,this.props.v.destination)),r.a.createElement("p",{className:"text-center"},this.props.v.startdate,r.a.createElement("br",null),this.props.v.enddate),r.a.createElement("p",{className:"text-left"},this.props.v.details),r.a.createElement("p",{className:"price text-center"},this.props.v.price,r.a.createElement("i",{className:"fa fa-usd"})),r.a.createElement("button",{className:"btn btn-success",id:"followBtn",onClick:this.follow.bind(this)},this.state.buttonClick?"Unfollow":"Follow")))))}},{key:"follow",value:function(){var e;this.setState(function(e){return{buttonClick:!e.buttonClick}}),this.state.buttonClick?this.props.dispatchVacaion(function(e){return function(){var t=Object(f.a)(h.a.mark(function t(a){var n,r;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/unfollow",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({val:e})});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a({type:"UNFOLLOW",data:r});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(this.props.v.id)):this.props.dispatchVacaion((e=this.props.v.id,function(){var t=Object(f.a)(h.a.mark(function t(a){var n,r;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/follow",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({val:e})});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a({type:"FOLLOW",data:r});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()))}},{key:"deleteVacation",value:function(){var e;this.props.dispatchVacaion((e=this.props.v.id,function(){var t=Object(f.a)(h.a.mark(function t(a){var n,r;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/delete?id=+".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a({type:"DELETE",data:r});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()))}}]),t}(n.Component),q=Object(d.b)(function(e){return{msg:e.msg}},function(e){return{dispatchVacaion:function(t){e(t)}}})(P),B=a(10),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(B.a)(Object(B.a)(a))),a.state={collapsed:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",a=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return"Admin"===this.props.role?r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-absolute fixed-top navbar-light"},r.a.createElement("div",{className:"container"},r.a.createElement("button",{onClick:this.toggleNavbar,className:"".concat(a),type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("span",{class:"navbar-brand",href:"#"},"Hello ",this.props.name),r.a.createElement("div",{className:"".concat(t),id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav mr-auto smooth-scroll"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/",className:"nav-link"},"Vacations")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/add",className:"nav-link"},"Add New Vacation")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/graph",className:"nav-link"},"Reports")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,null,r.a.createElement("span",{className:"nav-link",onClick:this.logoutBtn.bind(this)},r.a.createElement("i",{className:"fa fa-power-off"})," Logout"))))))):r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-absolute fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{class:"navbar-brand",href:"#"},"Hello ",this.props.name),r.a.createElement("ul",{className:"navbar-nav mr-auto smooth-scroll"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,null,r.a.createElement("span",{className:"nav-link",onClick:this.logoutBtn.bind(this)},r.a.createElement("i",{className:"fa fa-power-off"})," Logout"))))))}},{key:"logoutBtn",value:function(){this.props.logOut()}}]),t}(n.Component),J=Object(d.b)(function(e){return{isLogged:e.isLogged}},function(e){return{logOut:function(){e(function(){var e=Object(f.a)(h.a.mark(function e(t){var a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/logout");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t({type:"LOGOUT",data:n});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(G),W=R()("http://localhost:8888"),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={followers:"",favorite:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;W.on("vacationsChange",function(t){e.props.loadVacations(b())})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{name:this.props.firstname,role:this.props.role}),r.a.createElement("div",{className:"UserInterface"},r.a.createElement("div",{className:"col-xl-8 col-lg-11 col-md-11 col-sm-1 mx-auto mt-lg-5"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",{className:"mt-3"},"New Vacations")),this.props.vacations.map(function(e){return r.a.createElement(q,{key:e.id,v:e})}))),r.a.createElement(E,null))}}]),t}(n.Component),Y=Object(d.b)(function(e){return{vacations:e.vacations,firstname:e.firstname,role:e.role}},function(e){return{loadVacations:function(t){return e(t)}}})(H),_=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.vacations.map(function(t){return r.a.createElement(q,{key:t.id,v:t,role:e.props.role})}))}}]),t}(n.Component),$=Object(d.b)(function(e){return{vacations:e.vacations,role:e.role}},function(e){return{loadVacations:function(){return e()}}})(_),z=R()("http://localhost:8888"),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={details:"",destination:"",image:"",startdate:"",enddate:"",price:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;z.on("vacationChange",function(t){e.props.loadVacations(b())})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Add"},r.a.createElement("div",{className:"md-form"},r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"details",placeholder:"Description",className:"form-control adding"})),r.a.createElement("div",{className:"md-form"},r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"destination",placeholder:"destination",className:"form-control adding"})),r.a.createElement("div",{className:"md-form"},r.a.createElement("input",{type:"file",onChange:this.handleChange.bind(this),name:"image",className:"form-control adding"})),r.a.createElement("div",{className:"md-form"},r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"startdate",type:"date",className:"form-control adding"})),r.a.createElement("div",{className:"md-form"},r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"enddate",type:"date",className:"form-control adding"})),r.a.createElement("div",{className:"md-form"},r.a.createElement("input",{onChange:this.handleChange.bind(this),name:"price",type:"number",placeholder:"Price in USD",className:"form-control adding"})),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.add.bind(this)},"Add Vacation")))}},{key:"handleChange",value:function(e){var t=this;if("image"==e.target.name){var a=e.target.files[0],n=new FileReader;n.readAsDataURL(a),n.onload=function(){console.log(n.result),t.setState({image:n.result})}}this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"add",value:function(){this.props.addVacation(this.state)}}]),t}(n.Component),Q=Object(d.b)(null,function(e){return{addVacation:function(t){return e((a=t,function(){var e=Object(f.a)(h.a.mark(function e(t){var n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/addvacation",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,t({type:"ADD",data:r});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));var a}}})(K),X=a(118),Z=R()("http://localhost:8888"),ee=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.createChart(),Z.on("vacationsChange",function(t){e.props.loadVacations(b())})}},{key:"createChart",value:function(){for(var e=this.props.vacations.filter(function(e){return 0!==e.followers}),t=[],a=[],n=0;n<e.length;n++)t.push("".concat(e[n].destination)),a.push(e[n].followers);var r=document.getElementById("myChart").getContext("2d");new X(r,{type:"bar",data:{labels:t,datasets:[{label:"Followers",data:a,backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{id:"myChart"}))}}]),t}(n.Component),te=Object(d.b)(function(e){return{vacations:e.vacations}},function(e){return{loadVacations:function(t){return e(t)}}})(ee),ae=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{name:this.props.firstname,role:this.props.role}),r.a.createElement("div",{className:"admin"},r.a.createElement("div",{className:"col-xl-8 col-lg-11 col-md-11 col-sm-1 mx-auto mt-lg-5"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",{className:"mt-3"},"Admin Panel")),r.a.createElement(N.a,{exact:!0,path:"/",component:$}),r.a.createElement(N.a,{path:"/add",component:Q}),r.a.createElement(N.a,{path:"/graph",component:te}))),r.a.createElement(E,null))}}]),t}(n.Component),ne=Object(d.b)(function(e){return{vacations:e.vacations,firstname:e.firstname,role:e.role}},function(e){return{loadVacations:function(){return e()}}})(ae),re=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(v())}},{key:"render",value:function(){return!0===this.props.isLogged&&"User"===this.props.role?r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null)):!0===this.props.isLogged&&"Admin"===this.props.role?r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null)):r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(E,null))}}]),t}(n.Component),se=Object(d.b)(function(e){return{isLogged:e.isLogged,role:e.role,msg:e.msg}},function(e){return{dispatch:function(t){e(t)}}})(re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(121);var ce=a(28),oe={vacations:[],isLogged:!1,username:"",firstname:"",role:"",msg:""},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,a={};switch(t.type){case"LOGIN":return(a=Object.assign({},e)).vacations=t.data.allVacations,a.isLogged=t.data.isLogged,a.username=t.data.username,a.firstname=t.data.firstname,a.role=t.data.role,a.msg=t.data.msg,a;case"LOGOUT":return(a=Object.assign({},e)).isLogged=!1,a;case"REGISTER":return(a=Object.assign({},e)).msg=t.data.msg,a;case"ADD":case"EDIT":case"DELETE":case"FOLLOW":case"UNFOLLOW":return(a=Object.assign({},e)).msg=t.data.msg,a.vacations=t.data.allVacations,a;case"CHART":return(a=Object.assign({},e)).vacations=t.data.allVacations,a;case"VACATIONS_CHANGE":return(a=Object.assign({},e)).vacations=t.data,a;default:return e}},le=a(63),me=Object(ce.c)(ie,Object(ce.a)(le.a));c.a.render(r.a.createElement(d.a,{store:me},r.a.createElement(y.a,null,r.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){e.exports=a(122)},69:function(e,t,a){},76:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.860222e3.chunk.js.map