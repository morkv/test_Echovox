(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(61)},34:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=(n(34),n(10)),l=n(1),s=n(2),m=n(5),u=n(3),p=n(4),b=(n(35),n(7)),h=n(27),d=n.n(h),f=function(){return{type:"ITEMS_LOADING"}},g=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.document,t=e.name,n=e.desc;return r.a.createElement("li",{className:"list-group-item bg-light"},r.a.createElement("a",{href:"#"},t),r.a.createElement("p",null,n))}}]),t}(a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"list-group-item bg-light",role:"alert"},r.a.createElement("h5",{className:"alert alert-dark text-center mb-0"},"Enter correct ",r.a.createElement("br",null),"document name"))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).itemsRenderMethod=function(e,t){return t.length>0&&e?t.map(function(t){if(e)return r.a.createElement(g,{document:t,key:t._id})}):t.length<=0&&e?r.a.createElement(O,null):void 0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){var e=this.props.item.items,t=this.props.state,n=t.toggle,a=t.filteredArr;return console.log("DB: ",e),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("ul",{className:"list-group w-100 pb-5"},this.itemsRenderMethod(n,a))))}}]),t}(a.Component),j=Object(b.b)(function(e){return{item:e.item}},{getItems:function(){return function(e){e(f()),d.a.get("/api/items").then(function(t){return e({type:"GET_ITEMS",payload:t.data})})}}})(v),E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("nav",{className:"navbar navbar-light p-0"},r.a.createElement("form",{onSubmit:this.props.onSubmit,className:"form-inline"},r.a.createElement("div",{className:"form-group m-0"},r.a.createElement("input",{type:"text",name:"name",id:"item",className:"form-control",placeholder:"Search...",autoComplete:"off",pattern:"^[a-zA-Z0-9_]{1,}(\\s+[a-zA-Z0-9_])*$",required:!0,onChange:this.props.onChange})),r.a.createElement("button",{className:"btn btn-dark ml-2"},"Search")))))}}]),t}(a.Component),y=Object(b.b)(function(e){return{item:e.item}})(E),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},n.toggle=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Test"))))}}]),t}(a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"pt-3 pb-3 mt-auto bg-light"},r.a.createElement("div",{className:"bd-footer text-muted"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Footer"))))}}]),t}(a.Component),k=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",toggle:!1,filteredArr:[]},n.toggle=function(){n.setState({toggle:!n.state.toggle})},n.onSubmit=function(e){if(e.preventDefault(),""!==n.state.name&&!n.state.toggle){n.toggle();var t;t=n.props.item.items.filter(function(e){return-1!==e.name.toLowerCase().search(n.state.name.trim().toLowerCase())}),n.setState({filteredArr:t})}},n.onChange=function(e){var t;n.setState((t={},Object(i.a)(t,e.target.name,e.target.value),Object(i.a)(t,"toggle",!1),t))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App h-100 d-flex flex-column"},r.a.createElement(w,null),r.a.createElement(y,{onSubmit:this.onSubmit,onChange:this.onChange,toggle:this.toggle}),r.a.createElement(j,{state:this.state}),r.a.createElement(N,null))}}]),t}(a.Component),S=Object(b.b)(function(e){return{item:e.item}})(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(8),A=n(28),T=n(17),x={items:[],loading:!1},I=Object(C.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(T.a)({},e,{items:t.payload,loading:!1});case"ITEMS_LOADING":return Object(T.a)({},e,{loading:!0});default:return e}}}),_=[A.a],M=Object(C.e)(I,{},Object(C.d)(C.a.apply(void 0,_),window.devToolsExtension?window.devToolsExtension({name:"MyApp",actionsBlacklist:["REDUX_STORAGE_SAVE"]}):function(e){return e}));o.a.render(r.a.createElement(b.a,{store:M},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.f611e8e5.chunk.js.map