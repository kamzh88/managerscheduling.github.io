(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){e.exports=a(146)},113:function(e,t,a){},122:function(e,t,a){},140:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(13),l=a.n(i),o=(a(113),a(21)),s=a(18),c=a(24),u=a(25),m=a(26),h=a(29),d=a(44),p=a(173),f=a(176),E=a(178),g=a(179),y=a(180),v=a(91),b=a.n(v),S=(a(116),b.a.initializeApp({apiKey:"AIzaSyD6I6N_AnmWHADafJU8x75L6Ura9hXxFV8",authDomain:"authentication-dc973.firebaseapp.com",projectId:"authentication-dc973"}).auth()),w=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),C=function(){var e=w();return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(g.a,{variant:"h6",className:e.title},"Manager Scheduling Application"),r.a.createElement(y.a,{color:"inherit",component:h.b,to:{pathname:"/AllEmployees"}},"View Employees"),r.a.createElement(y.a,{color:"inherit",component:h.b,to:{pathname:"/Home"}},"Home"),r.a.createElement(y.a,{color:"inherit",component:h.b,to:"/",onClick:function(){return S.signOut()}},"Logout"))))},O=function(){var e=w();return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(g.a,{variant:"h6",className:e.title},"Manager Scheduling Application"),r.a.createElement(y.a,{color:"inherit",component:h.b,to:"/"},"Home"),r.a.createElement(y.a,{color:"inherit",component:h.b,to:"/SignUp"},"SignUp"),r.a.createElement(y.a,{color:"inherit",component:h.b,to:"/SignIn"},"Login"))))},j=function(e){var t=e.authUser;return r.a.createElement("div",null,t?r.a.createElement(C,{authUser:t}):r.a.createElement(O,null))},T=(a(122),function(){return r.a.createElement("div",null,"Front page before signing in")}),k=a(20),N=a(185);var U=function(e){return r.a.createElement("div",{style:{maxWidth:400,padding:16,margin:"auto"}}," ",e.children)},D=a(38),I=a.n(D),x=function(e){return I.a.post("/api/employee/",e)},B=function(e){return I.a.post("/api/user",e)},A=function(e){return I.a.post("/api/shift",e)},P=function(e){return I.a.get("/api/shift/"+e)},q=function(e){return I.a.get("/api/shift/all/"+e)},M=function(e){return I.a.delete("/api/shift/"+e)},F=function(e,t){return I.a.put("/api/shift/"+t.shiftID,e)},W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",passwordOne:"",passwordTwo:"",error:null,userName:""},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.passwordOne,i=t.userName;return S.createUserWithEmailAndPassword(n,r).then((function(){a.setState({email:"",passwordOne:"",passwordTwo:""}),S.onAuthStateChanged((function(e){B({userName:i,uid:e.uid,email:e.email,userCreated:e.metadata.creationTime})})),a.props.history.push("/home")})).catch((function(e){a.setState({error:e})}))},a.handleChange=function(e){return function(t){a.setState(Object(k.a)({},e,t.target.value))}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.passwordOne,n=e.passwordTwo,i=e.error,l=e.userName,o=a!==n;return r.a.createElement(U,null,r.a.createElement(g.a,{variant:"h5",style:{marginTop:24,marginBottom:24}},"Sign Up Form"),r.a.createElement("form",{style:{display:"flex",flexDirection:"column"},onSubmit:this.onSubmit},r.a.createElement(N.a,{style:{marginBottom:24},variant:"outlined",required:!0,type:"text",label:"Username",value:l,onChange:this.handleChange("userName")}),r.a.createElement(N.a,{style:{marginBottom:24},variant:"outlined",required:!0,type:"email",label:"Email",value:t,onChange:this.handleChange("email")}),r.a.createElement(N.a,{style:{marginBottom:24},variant:"outlined",required:!0,type:"password",label:"Password",value:a,onChange:this.handleChange("passwordOne")}),r.a.createElement(N.a,{style:{marginBottom:24},variant:"outlined",required:!0,type:"password",label:"Confirm Password",value:n,onChange:this.handleChange("passwordTwo")}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:o},"Submit"),i&&r.a.createElement("p",null,i.message)))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",error:null},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;return S.signInWithEmailAndPassword(n,r).then((function(){a.setState({email:"",password:""}),a.props.history.push("/home")})).catch((function(e){a.setState({error:e})}))},a.handleChange=function(e){return function(t){a.setState(Object(k.a)({},e,t.target.value))}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error;return r.a.createElement(U,null,r.a.createElement(g.a,{variant:"h5",style:{marginTop:24,marginBottom:24}},"Sign In Form"),r.a.createElement("form",{style:{display:"flex",flexDirection:"column"},onSubmit:this.onSubmit},r.a.createElement(N.a,{style:{marginBottom:24},variant:"outlined",required:!0,type:"email",label:"Email",value:t,onChange:this.handleChange("email")}),r.a.createElement(N.a,{style:{marginBottom:24},variant:"outlined",required:!0,type:"password",label:"Password",value:a,onChange:this.handleChange("password")}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Submit"),n&&r.a.createElement("p",null,n.message)))}}]),t}(n.Component),L=a(187),H=a(184),Y=a(181),V=a(182),z=a(37),J=a(186),R=a(189),G=(a(140),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={employees:[],id:"",date:"",shiftStart:"",shiftEnd:"",shifts:[]},a.handleChange=function(e){return function(t){a.setState(Object(k.a)({},e,t.target.value))}},a.loadEmployees=function(){P(a.props.authUser.uid).then((function(e){return a.setState({employees:e.data})})).catch((function(e){return console.log(e)}))},a.loadShifts=function(){q(a.props.authUser.uid).then((function(e){return a.setState({shifts:e.data})})).catch((function(e){return console.log(e)}))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.id,r=t.date,i=t.shiftStart,l=t.shiftEnd,o="".concat(r,"T").concat(i,":00.000-5:00"),s="".concat(r,"T").concat(l,":00.000-5:00");A({StartTime:o,EndTime:s,id:n,uid:a.props.authUser.uid}).then((function(e){a.setState({id:"",date:"",shiftStart:"",shiftEnd:""}),a.loadShifts()})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadEmployees(),this.loadShifts()}},{key:"render",value:function(){var e=this.state,t=e.employees,a=e.id,i=e.date,l=e.shiftStart,o=e.shiftEnd,s=e.shifts;return r.a.createElement(n.Fragment,null,r.a.createElement(U,null,r.a.createElement("form",{style:{display:"flex",flexDirection:"column"},onSubmit:this.onSubmit},r.a.createElement(N.a,{required:!0,style:{marginBottom:20},select:!0,label:"Select",value:a,onChange:this.handleChange("id"),helperText:"Select an employee"},t.map((function(e){return r.a.createElement(L.a,{key:e._id,value:e._id},e.firstName," ",e.lastName)}))),r.a.createElement(N.a,{required:!0,style:{marginBottom:20},id:"date",label:"Select Date",type:"date",value:i||"2020-02-24",onChange:this.handleChange("date"),InputLabelProps:{shrink:!0}}),r.a.createElement(N.a,{required:!0,style:{marginBottom:20},id:"shiftStart",label:"Start Time",type:"time",value:l||"11:00",onChange:this.handleChange("shiftStart"),InputLabelProps:{shrink:!0},inputProps:{step:1800}}),r.a.createElement(N.a,{required:!0,style:{marginBottom:20},id:"shiftEnd",label:"End Time",type:"time",value:o||"23:00",onChange:this.handleChange("shiftEnd"),InputLabelProps:{shrink:!0},inputProps:{step:1800}}),r.a.createElement(y.a,{style:{marginBottom:20},type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Submit"))),r.a.createElement("div",{className:"schedule-control-section"},r.a.createElement("div",{className:"col-lg-12 control-section"},r.a.createElement("div",{className:"control-wrapper"},r.a.createElement(H.a,{cssClass:"timeline-resource",height:"650px",width:"100%",startHour:"11:00",endHour:"24:00",workHours:{start:"11:00",end:"23:59"},workDays:[0,1,2,3,4,5,6],currentView:"TimelineWeek",timeScale:{interval:60,slotCount:1},eventSettings:{dataSource:s},group:{enableCompactView:!1,resources:["MeetingRoom"]}},r.a.createElement(Y.b,null,r.a.createElement(Y.a,{field:"id",name:"MeetingRoom",dataSource:t,textField:"firstName",idField:"_id"})),r.a.createElement(V.b,null,r.a.createElement(V.a,{option:"TimelineDay"}),r.a.createElement(V.a,{option:"TimelineWeek"})),r.a.createElement(z.c,{services:[J.a,R.a]}))))))}}]),t}(n.Component)),K=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,{authUser:this.props.authUser}))}}]),t}(n.Component),X=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center",marginTop:50}},"Please ",r.a.createElement(h.b,{to:"/SignIn"},"Sign In ")))},$=function(e){var t=e.authUser;return r.a.createElement("div",null,t?r.a.createElement(K,{authUser:t}):r.a.createElement(X,{authUser:t}))},Q=a(183),Z=a(65),ee=a.n(Z),te=(a(142),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,this.props.data.map((function(t,a){return r.a.createElement("button",{starttime:t.StartTime,key:a,onClick:function(){return e.props.showModal({_id:t._id,StartTime:t.StartTime,EndTime:t.EndTime})}},r.a.createElement("p",null," Date: ",r.a.createElement(ee.a,{format:"MM/DD/YYYY",tz:"America/New_York"},t.StartTime)),r.a.createElement("p",null," Start Shift: ",r.a.createElement(ee.a,{format:"h:mm:ss a",tz:"America/New_York"},t.StartTime)),r.a.createElement("p",null," Shift End: ",r.a.createElement(ee.a,{format:"h:mm:ss a",tz:"America/New_York"},t.EndTime)),r.a.createElement("br",null),e.props.children.map((function(e,t){return r.a.createElement("p",{key:t},e.StartTime)})))})))}}]),t}(n.Component)),ae=a(99),ne=a(62),re=a(63),ie=a(64),le=a(98),oe=a.n(le),se=a(97),ce=a.n(se),ue={Card:{marginTop:30,height:540,overflowY:"scroll"}},me=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",position:"",employees:[],shifts:[],isOpen:!1,setIsOpen:!1,results:[],date:"",shiftStart:"",shiftEnd:"",shiftID:""},a.loadShifts=function(){q(a.props.authUser.uid).then((function(e){return a.setState({shifts:e.data})})).catch((function(e){return console.log(e)}))},a.loadEmployees=function(){P(a.props.authUser.uid).then((function(e){a.setState({employees:e.data,shifts:a.state.shifts})})).catch((function(e){return console.log(e)}))},a.showModal=function(e){a.setState({isOpen:!0,setIsOpen:!0,results:e,shiftID:e._id})},a.hideModal=function(){a.setState({isOpen:!1,setIsOpen:!1})},a.deleteShift=function(e){e.preventDefault();var t=a.state.shiftID;M(t).then((function(e){a.setState({isOpen:!1,setIsOpen:!1}),a.loadShifts()}))},a.onSubmit=function(e){e.preventDefault();var t=a.props.authUser,n=a.state,r=n.firstName,i=n.lastName,l=n.email,o=n.position;x({firstName:r,lastName:i,email:l,position:o,uid:t.uid}).then((function(e){return a.loadEmployees()})).catch((function(e){return console.log(e)}))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.shiftEnd,r=t.shiftStart,i=t.date,l=t.shiftID,o="".concat(i,"T").concat(r,":00.000"),s="".concat(i,"T").concat(n,":00.000");F({StartTime:o,EndTime:s},{shiftID:l}).then((function(e){a.setState({isOpen:!1,setIsOpen:!1}),a.loadShifts()})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){return function(t){a.setState(Object(k.a)({},e,t.target.value))}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadEmployees(),this.loadShifts()}},{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,i=t.lastName,l=t.email,o=t.position,s=t.employees,c=this.state,u=c.date,m=c.shiftStart,h=c.shiftEnd;return r.a.createElement(n.Fragment,null,r.a.createElement(U,null,r.a.createElement(g.a,{variant:"h5",style:{marginTop:24,marginBottom:24}},"Add Employees Form"),r.a.createElement("form",{style:{display:"flex",flexDirection:"column"},onSubmit:this.onSubmit},r.a.createElement(N.a,{style:{marginBottom:24},variant:"outlined",required:!0,type:"text",label:"First Name",value:a,onChange:this.handleChange("firstName")}),r.a.createElement(N.a,{style:{marginBottom:24},variant:"outlined",required:!0,type:"text",label:"Last Name",value:i,onChange:this.handleChange("lastName")}),r.a.createElement(N.a,{style:{marginBottom:24},variant:"outlined",required:!0,type:"email",label:"Email",value:l,onChange:this.handleChange("email")}),r.a.createElement(N.a,{style:{marginBottom:24},variant:"outlined",required:!0,type:"text",label:"Position Name",value:o,onChange:this.handleChange("position")}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Submit"))),r.a.createElement("div",{style:ue.Card},r.a.createElement("h1",null,"Employee List"),s.map((function(t,a){return r.a.createElement(Q.a,{key:a,variant:"outlined",style:{width:"auto",margin:20}},r.a.createElement("div",{style:{overflow:"auto",padding:10}},r.a.createElement("p",null,"Name: ",t.firstName," ",t.lastName),r.a.createElement("p",null,"Position: ",t.position),r.a.createElement("p",null,"Email: ",t.email),r.a.createElement("p",null,"Shifts:"),r.a.createElement(te,{data:e.state.shifts.filter((function(e){return e.id===t._id})),showModal:e.showModal},e.state.shifts.filter((function(e){return e.id===t._id})))))}))),r.a.createElement(ae.a,{show:this.state.isOpen,size:"md",onHide:this.hideModal,style:{opacity:1,paddingTop:"20%"}},r.a.createElement(re.a,null,r.a.createElement(ie.a,null,"Edit Shifts")),r.a.createElement(ne.a,null,r.a.createElement("form",{style:{display:"flex",flexDirection:"column"},onSubmit:this.handleFormSubmit},r.a.createElement(N.a,{required:!0,style:{marginBottom:20},id:"date",label:"Select Date",type:"date",defaultValue:u||"2020-02-24",onChange:this.handleChange("date"),InputLabelProps:{shrink:!0}}),r.a.createElement(N.a,{required:!0,style:{marginBottom:20},id:"shiftStart",label:"Start Time",type:"time",defaultValue:m||"11:00",onChange:this.handleChange("shiftStart"),InputLabelProps:{shrink:!0},inputProps:{step:1800}}),r.a.createElement(N.a,{required:!0,style:{marginBottom:20},id:"shiftEnd",label:"End Time",type:"time",defaultValue:h||"23:00",onChange:this.handleChange("shiftEnd"),InputLabelProps:{shrink:!0},inputProps:{step:1800}}),r.a.createElement(y.a,{style:{marginBottom:20},type:"submit",fullWidth:!0,variant:"contained",color:"primary",startIcon:r.a.createElement(ce.a,null)},"Save"),r.a.createElement(y.a,{style:{marginBottom:20},fullWidth:!0,variant:"contained",color:"secondary",startIcon:r.a.createElement(oe.a,null),onClick:this.deleteShift},"Delete"),r.a.createElement(y.a,{variant:"contained",onClick:this.hideModal},"Close")))))}}]),t}(n.Component),he=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center",marginTop:50}},"Please ",r.a.createElement(h.b,{to:"/SignIn"},"Sign In")))},de=function(e){var t=e.authUser;return r.a.createElement("div",null,t?r.a.createElement(me,{authUser:t}):r.a.createElement(he,null))},pe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authUser:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(j,{authUser:this.state.authUser}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:T}),r.a.createElement(d.a,{exact:!0,path:"/SignUp",component:W}),r.a.createElement(d.a,{exact:!0,path:"/SignIn",component:_}),r.a.createElement(d.a,{exact:!0,path:"/Home",render:function(t){return r.a.createElement($,Object.assign({authUser:e.state.authUser},t))}}),r.a.createElement(d.a,{exact:!0,path:"/AllEmployees",render:function(t){return r.a.createElement(de,Object.assign({authUser:e.state.authUser},t))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[108,1,2]]]);
//# sourceMappingURL=main.ada80d14.chunk.js.map