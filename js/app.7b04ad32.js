(function(e){function t(t){for(var s,r,o=t[0],b=t[1],l=t[2],d=0,j=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&j.push(a[r][0]),a[r]=0;for(s in b)Object.prototype.hasOwnProperty.call(b,s)&&(e[s]=b[s]);i&&i(t);while(j.length)j.shift()();return n.push.apply(n,l||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],s=!0,o=1;o<c.length;o++){var b=c[o];0!==a[b]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=c[0]))}return e}var s={},a={app:0},n=[];function r(t){if(s[t])return s[t].exports;var c=s[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=s,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(c,s,function(t){return e[t]}.bind(null,s));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],b=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var i=b;n.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},4678:function(e,t,c){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return c(t)}function n(e){if(!c.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id="4678"},"64ee":function(e,t,c){},cd49:function(e,t,c){"use strict";c.r(t);var s=c("7a23");const a={id:"app",class:"d-flex flex-column h-100"},n={class:"container flex-grow-1"},r={class:"mt-5"};function o(e,t,c,o,b,l){const i=Object(s["x"])("nav-bar"),d=Object(s["x"])("error"),j=Object(s["x"])("router-view");return Object(s["r"])(),Object(s["e"])("div",a,[Object(s["h"])(i),Object(s["f"])("div",n,[Object(s["h"])(d),Object(s["f"])("div",r,[Object(s["h"])(j)])])])}const b={class:"nav-container mb-3"},l={class:"navbar navbar-expand-md navbar-light bg-light"},i={class:"container"},d=Object(s["f"])("div",{class:"navbar-brand logo"},null,-1),j=Object(s["f"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(s["f"])("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav mr-auto"},p={class:"nav-item"},h=Object(s["g"])("Home"),O={class:"navbar-nav d-none d-md-block"},m={key:0,class:"nav-item"},v={key:1,class:"nav-item dropdown"},g={class:"nav-link dropdown-toggle",href:"#",id:"profileDropDown","data-toggle":"dropdown"},k=["src"],y={class:"dropdown-menu dropdown-menu-right"},w={class:"dropdown-header"},z=Object(s["g"])("Profile "),x=Object(s["g"])("Log out "),A={key:0,class:"navbar-nav d-md-none"},L={key:1,id:"mobileAuthNavBar",class:"navbar-nav d-md-none d-flex"},B={class:"nav-item"},C={class:"user-info"},D=["src"],_={class:"d-inline-block"},E=Object(s["g"])("Profile");function M(e,t,c,a,n,r){const o=Object(s["x"])("router-link"),M=Object(s["x"])("font-awesome-icon");return Object(s["r"])(),Object(s["e"])("div",b,[Object(s["f"])("nav",l,[Object(s["f"])("div",i,[d,j,Object(s["f"])("div",f,[Object(s["f"])("ul",u,[Object(s["f"])("li",p,[Object(s["h"])(o,{to:"/",class:"nav-link"},{default:Object(s["D"])(()=>[h]),_:1})])]),Object(s["f"])("ul",O,[a.isAuthenticated||a.isLoading?Object(s["d"])("",!0):(Object(s["r"])(),Object(s["e"])("li",m,[Object(s["f"])("button",{id:"qsLoginBtn",class:"btn btn-primary btn-margin",onClick:t[0]||(t[0]=Object(s["E"])((...e)=>a.login&&a.login(...e),["prevent"]))},"Login")])),a.isAuthenticated?(Object(s["r"])(),Object(s["e"])("li",v,[Object(s["f"])("a",g,[Object(s["f"])("img",{src:a.user.picture,alt:"User's profile picture",class:"nav-user-profile rounded-circle",width:"50"},null,8,k)]),Object(s["f"])("div",y,[Object(s["f"])("div",w,Object(s["z"])(a.user.name),1),Object(s["h"])(o,{to:"/profile",class:"dropdown-item dropdown-profile"},{default:Object(s["D"])(()=>[Object(s["h"])(M,{class:"mr-3",icon:"user"}),z]),_:1}),Object(s["f"])("a",{id:"qsLogoutBtn",href:"#",class:"dropdown-item",onClick:t[1]||(t[1]=Object(s["E"])((...e)=>a.logout&&a.logout(...e),["prevent"]))},[Object(s["h"])(M,{class:"mr-3",icon:"power-off"}),x])])])):Object(s["d"])("",!0)]),a.isAuthenticated||a.isLoading?Object(s["d"])("",!0):(Object(s["r"])(),Object(s["e"])("ul",A,[Object(s["f"])("button",{id:"qsLoginBtn",class:"btn btn-primary btn-block",onClick:t[2]||(t[2]=(...e)=>a.login&&a.login(...e))},"Log in")])),a.isAuthenticated?(Object(s["r"])(),Object(s["e"])("ul",L,[Object(s["f"])("li",B,[Object(s["f"])("span",C,[Object(s["f"])("img",{src:a.user.picture,alt:"User's profile picture",class:"nav-user-profile d-inline-block rounded-circle mr-3",width:"50"},null,8,D),Object(s["f"])("h6",_,Object(s["z"])(a.user.name),1)])]),Object(s["f"])("li",null,[Object(s["h"])(M,{icon:"user",class:"mr-3"}),Object(s["h"])(o,{to:"/profile"},{default:Object(s["D"])(()=>[E]),_:1})]),Object(s["f"])("li",null,[Object(s["h"])(M,{icon:"power-off",class:"mr-3"}),Object(s["f"])("a",{id:"qsLogoutBtn",href:"#",class:"",onClick:t[3]||(t[3]=Object(s["E"])((...e)=>a.logout&&a.logout(...e),["prevent"]))},"Log out")])])):Object(s["d"])("",!0)])])])])}var N=c("f24d"),P={name:"NavBar",setup(){const e=Object(N["c"])();return{isAuthenticated:e.isAuthenticated,isLoading:e.isLoading,user:e.user,login(){e.loginWithRedirect()},logout(){e.logout({returnTo:window.location.origin})}}}},q=(c("eda7"),c("6b0d")),S=c.n(q);const T=S()(P,[["render",M]]);var U=T;const H={key:0,class:"alert alert-danger alert-dismissible"},I=Object(s["f"])("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},[Object(s["f"])("span",{"aria-hidden":"true"},"×")],-1);function W(e,t,c,a,n,r){return r.msg?(Object(s["r"])(),Object(s["e"])("div",H,[Object(s["g"])(Object(s["z"])(r.msg)+" ",1),I])):Object(s["d"])("",!0)}var J={name:"Error",computed:{msg(){return this.$auth0.error.value}}};const R=S()(J,[["render",W]]);var F=R,K={components:{NavBar:U,Error:F}};const X=S()(K,[["render",o]]);var $=X,G=c("6605");const Q={class:"d-flex justify-content-center"},V={class:"row"},Y={class:"d-flex justify-content-center"},Z=Object(s["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left-circle",viewBox:"0 0 16 16"},[Object(s["f"])("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})],-1),ee=[Z],te={class:"table table-striped table-bordered"},ce=Object(s["f"])("th",null,null,-1),se={key:0},ae={key:0},ne={key:0},re=["disabled","onClick"],oe=Object(s["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-right-circle",viewBox:"0 0 16 16"},[Object(s["f"])("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})],-1),be=[oe],le={class:"container d-flex justify-content-center"};function ie(e,t,c,a,n,r){return Object(s["r"])(),Object(s["e"])("div",Q,[Object(s["f"])("div",V,[Object(s["f"])("div",Y,[Object(s["f"])("button",{type:"button",class:"btn btn-light",onClick:t[0]||(t[0]=e=>n.week=n.week-1)},ee),Object(s["f"])("table",te,[Object(s["f"])("thead",null,[ce,(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(Object.entries(r.header(n.turni)),([e,t])=>(Object(s["r"])(),Object(s["e"])(s["a"],{key:t},[parseInt(""+t.weekyear)===parseInt(""+n.week)?(Object(s["r"])(),Object(s["e"])("th",se,Object(s["z"])(e),1)):Object(s["d"])("",!0)],64))),128))]),Object(s["f"])("tbody",null,[(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(n.piv,e=>(Object(s["r"])(),Object(s["e"])("tr",{key:e.id},[(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(e,e=>(Object(s["r"])(),Object(s["e"])(s["a"],{key:e},[parseInt(""+e.weekyear)===parseInt(""+n.week)?(Object(s["r"])(),Object(s["e"])("td",ae,["undefined"===typeof e.checked?(Object(s["r"])(),Object(s["e"])("div",ne,Object(s["z"])(e.id),1)):Object(s["d"])("",!0),"undefined"!==typeof e.checked?(Object(s["r"])(),Object(s["e"])("button",{key:1,type:"button",class:Object(s["n"])(["btn",{"btn-danger":"false"===e.checked||!1===e.checked,"btn-success":"true"===e.checked||!0===e.checked}]),disabled:a.user.name!==e.id,onClick:t=>{e.modified=!0,e.checked=r.toggle(e.checked)}},Object(s["z"])("true"===e.checked||!0===e.checked?"✓":"-"),11,re)):Object(s["d"])("",!0)])):Object(s["d"])("",!0)],64))),128))]))),128))])]),Object(s["f"])("button",{type:"button",class:"btn btn-light",onClick:t[1]||(t[1]=e=>n.week=n.week+1)},be)]),Object(s["f"])("div",le,[Object(s["f"])("button",{type:"button",class:"btn btn-primary",style:{align:"center"},onClick:t[2]||(t[2]=e=>r.update())}," Save ")])])])}var de=c("c1df"),je=c.n(de),fe=c("bc3a"),ue=c.n(fe),pe=c("ed18"),he=c.n(pe);he.a.config();var Oe={modified:!1,name:"profile",setup(){const e=Object(N["c"])();return{user:e.user}},methods:{print(e){return!0},pivot:function(e){let t={};return e.forEach((function(e){t[e.id+" "+e.weekyear]=(t[e.id+" "+e.weekyear]?t[e.id+" "+e.weekyear]:[{id:e.id,weekyear:e.weekyear}]).concat([{slotdate:e.slotdate,slotbin:e.slotbin,slotwhere:e.slotwhere,checked:e.checked,weekyear:e.weekyear,modified:!1,id:e.id}])})),t},update(e){let t=[];for(let s in this.piv)for(let e in this.piv[s]){let c=this.piv[s][e];c.modified&&t.push({id:c["id"],slotdate:c["slotdate"],slotbin:c["slotbin"],slotwhere:c["slotwhere"],checked:c["checked"]})}let c=JSON.stringify(t).replaceAll("@","%40").replaceAll("[","%5B").replaceAll("]","%5D").replaceAll("{","%7B").replaceAll("}","%7D");ue.a.post("https://mydoodle.herokuapp.com/MyDoodle?cmd=update&turni="+c).then(t=>{e&&e()})},toggle(e){return!0!==e&&"true"!==e},addUser(e){ue.a.post("https://mydoodle.herokuapp.com/MyDoodle?cmd=adduser&id="+this.user.name+"&firstname=foo&lastname=bar").then(t=>{e&&e()})},getTurni(){ue.a.get("https://mydoodle.herokuapp.com/MyDoodle").then(e=>{this.turni=e["data"],this.piv=this.pivot(this.turni)})},header:function(e){let t={};return e.forEach((function(e){t[e.slotdate+" "+e.slotwhere+" "+e.slotbin]={weekyear:e.weekyear}})),t}},data(){return{popupattivo:!1,week:je()().week(),turni:[],piv:[]}},mounted(){this.addUser(this.getTurni)}};const me=S()(Oe,[["render",ie]]);var ve=me;function ge(e){return Object(G["a"])({routes:[{path:"/",name:"home",component:ve,beforeEnter:Object(N["b"])(e)},{path:"/profile",name:"profile",component:ve,beforeEnter:Object(N["b"])(e)}],history:Object(G["b"])()})}var ke=c("85bd"),ye=(c("2c43"),c("ecee")),we=c("c074"),ze=c("ad3d");he.a.config();const xe="dev-2hg961hp.eu.auth0.com",Ae="3ibWWkxAkgDoXu7jqlaBWtigKNH9BmaR",Le=Object(s["c"])($);ye["c"].add(we["a"],we["c"],we["b"]),Le.use(ke["a"]).use(ge(Le)).use(Object(N["a"])({domain:xe,client_id:Ae,redirect_uri:window.location.origin})).component("font-awesome-icon",ze["a"]).mount("#app")},eda7:function(e,t,c){"use strict";c("64ee")}});
//# sourceMappingURL=app.7b04ad32.js.map