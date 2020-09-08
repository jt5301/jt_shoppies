(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(88),n(162)),s=n(68),l=n(23),m=n(71),u=Object(m.a)({typography:{fontFamily:'"Roboto"',fontSize:12,h1:{}},palette:{primary:{main:"#96bf48"}}}),d=n(13),f=n(157),p=n(159),b=n(150),g=Object(a.createContext)(),h=function(e){var t=e.children,n=Object(a.useState)(""),r=Object(d.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)({}),l=Object(d.a)(s,2),m=l[0],u=l[1],f=Object(a.useState)(!1),p=Object(d.a)(f,2),b=p[0],h=p[1];return o.a.createElement(g.Provider,{value:{searchTerm:c,setSearchTerm:i,nominees:m,setNominee:u,atLimit:b,setLimit:h}},t)},v=n(33),j=n(43),O=n(152),E=n(164),y=n(154),x=n(158),w=n(156),C=n(155),k=n(166),N=Object(b.a)(function(e){return{root:{display:"flex",justifyContent:"center"},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8),height:"600px",overflow:"scroll"},card:{height:"100%",display:"flex",flexDirection:"column",marginRight:"10px",marginLeft:"10px"},cardMedia:{paddingTop:"100%"},cardContent:{flexGrow:1},added:{display:"flex",justifyContent:"center",paddingBottom:"10px"},imdbLink:{textDecoration:"none",color:e.palette.primary.main},buttonContainer:{display:"flex",justifyContent:"center"}}}),S=function(e){var t=N(),n=e.movie,r=Object(a.useState)(!1),c=Object(d.a)(r,2),i=c[0],s=c[1],l=Object(a.useContext)(g),m=Object(a.useState)(!1),u=Object(d.a)(m,2),p=u[0],b=u[1],h=function(){"Remove"===e.buttonMsg&&l.setNominee(Object(j.a)({},l.nominees,Object(v.a)({},n.imdbID,void 0))),l.atLimit?b(!0):"Add Movie"===e.buttonMsg&&l.setNominee(Object(j.a)({},l.nominees,Object(v.a)({},n.imdbID,n)))};return Object(a.useEffect)(function(){l.nominees[n.imdbID]?s(!0):s(!1),localStorage.setItem("storedNominees",JSON.stringify(l.nominees))},[l.nominees]),o.a.createElement(O.a,{item:!0,key:n.imdbID,xs:3},o.a.createElement(y.a,{className:t.card},o.a.createElement(C.a,{className:t.cardMedia,image:n.Poster,title:n.Title}),o.a.createElement(w.a,{className:t.cardContent},o.a.createElement(f.a,null,n.Title),o.a.createElement(f.a,null,n.Year)),e.inNominee?o.a.createElement(x.a,{onClick:function(e){return h()},classes:{root:t.root}},o.a.createElement(E.a,{size:"small",color:"primary"},e.buttonMsg)):i?o.a.createElement("div",{className:t.added},"Added!"):o.a.createElement("div",{className:t.buttonContainer},o.a.createElement(x.a,{onClick:function(e){return h()},classes:{root:t.root}},o.a.createElement(E.a,{size:"small",color:"primary"},e.buttonMsg)),o.a.createElement(E.a,{size:"small",color:"primary"},o.a.createElement("a",{className:t.imdbLink,href:"https://www.imdb.com/title/".concat(n.imdbID,"/")}," IMDB Page")))),o.a.createElement(k.a,{open:p,autoHideDuration:4e3,onClose:function(){b(!1)},message:"You can only nominate five. Remove a nominated movie first before adding another"}))},T=Object(b.a)(function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},root:{display:"flex"},cardGrid:{paddingTop:e.spacing(6),paddingBottom:e.spacing(2),display:"flex",justifyContent:"space-evenly"}}}),I=function(){var e=Object(a.useContext)(g),t=T(),n=Object(a.useState)(!0),r=Object(d.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)(function(){var t=JSON.parse(localStorage.getItem("storedNominees"))||"";e.setNominee(t),console.log(typeof t,t);var n=JSON.stringify(t);console.log(n),localStorage.setItem("storedNominees",n)},[]),Object(a.useEffect)(function(){var t=!0;Object.keys(e.nominees).forEach(function(n){e.nominees[n]&&(t=!1)}),i(!!t)},[e.nominees]),o.a.createElement("heroContent",null,o.a.createElement(p.a,{className:t.cardGrid,maxwidth:"xl",classes:{root:t.root},maxWidth:"sm"},c?o.a.createElement(f.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Your nominee list is empty! Use the search bar above to find and add up to five films that you think should be up for nomination. They'll be displayed here."):Object.keys(e.nominees).map(function(t){return e.nominees[t]?o.a.createElement(S,{key:t,movie:e.nominees[t],inNominee:!0,buttonMsg:"Remove"}):""})))},D=n(161),M=n(160),L=n(163),B=Object(b.a)(function(e){return{navContainer:{display:"flex",justifyContent:"space-between"},root:{border:"1px solid #e2e2e1",borderRadius:4,backgroundColor:"#fcfcfb"},logo:{marginTop:"18px"}}}),G=function(){var e=B(),t=Object(a.useContext)(g),n=Object(a.useState)(""),r=Object(d.a)(n,2),c=r[0],i=r[1];return o.a.createElement(M.a,{position:"relative"},o.a.createElement(D.a,{className:e.navContainer},o.a.createElement(f.a,{className:e.logo,component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"The Shoppies"),o.a.createElement(f.a,{variant:"h6",color:"inherit",noWrap:!0},o.a.createElement("form",{onSubmit:function(e){!function(e){e.preventDefault(),t.setSearchTerm(c)}(e)}},o.a.createElement(L.a,{InputProps:{classes:e,disableUnderline:!0},id:"standard-full-width",placeholder:"Title Keywords",fullWidth:!0,InputLabelProps:{shrink:!0},onChange:function(e){return i(e.target.value)}})))))},P=n(34),R=n.n(P),W=n(49),J=n(45),z=n(46),A=n.n(z),F=Object(b.a)(function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8),height:"750px",overflow:"scroll"}}}),Y=function(){var e=F(),t=Object(a.useContext)(g),n=Object(a.useState)([]),r=Object(d.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),m=l[0],u=l[1];Object(a.useEffect)(function(){for(var e=0,n=0,a=Object.keys(t.nominees);n<a.length;n++){var o=a[n];if(t.nominees[o]&&(e+=1),5===e){t.setLimit(!0),u(!0);break}t.setLimit(!1)}},[t.nominees]);return Object(a.useEffect)(function(){!function(){var e=Object(J.a)(R.a.mark(function e(){var t;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("/movies/search/avengers");case 3:t=e.sent,i(Object(W.a)(t.data.Search)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}()()},[]),Object(a.useEffect)(function(){for(var e="",n=0;n<t.searchTerm.length;n++)" "===t.searchTerm[n]?e+="+":e+=t.searchTerm[n];!function(){var t=Object(J.a)(R.a.mark(function t(){var n;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.a.get("/movies/search/".concat(e));case 3:n=t.sent,i(Object(W.a)(n.data.Search)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(){return t.apply(this,arguments)}}()()},[t.searchTerm]),o.a.createElement(p.a,{className:e.cardGrid,maxWidth:"xl"},o.a.createElement(O.a,{container:!0,spacing:5},c.map(function(e){return o.a.createElement(S,{key:e.imdbID,movie:e,buttonMsg:"Add Movie"})})),o.a.createElement(k.a,{open:m,autoHideDuration:4e3,onClose:function(){u(!1)},message:"Nomination Complete! Feel free to change your choices by removing a nominee to add a different one."}))};function H(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null,o.a.createElement(G,null),o.a.createElement(I,null),o.a.createElement(Y,null)))}n(110);var U=function(){return o.a.createElement(i.a,{theme:u},o.a.createElement(s.a,null,o.a.createElement(l.a,{path:"/",component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,n){e.exports=n(112)},88:function(e,t,n){}},[[83,1,2]]]);
//# sourceMappingURL=main.f7a65b58.chunk.js.map