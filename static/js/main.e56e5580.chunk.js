(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),i=r(6),u=r.n(i),s=r(2),a=(r(12),r(0)),c=function(e){var t=e.setsigrdze,r=e.setsigane,n=e.setmiyolebit,i=e.setDisplay,u=e.display,s=e.sigrdze,c=e.sigane,o=e.miyolebit;return Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh",backgroundColor:"#C5CACE"},children:[Object(a.jsx)("h1",{style:{marginBottom:"30px"},children:"Tic Tac Toe"}),Object(a.jsx)("div",{children:"Choose Rows"}),Object(a.jsx)("input",{type:"number",min:"3",max:"40",onChange:function(e){return t(e.target.value)},style:{display:"block",width:"200px",fontSize:"15px",padding:"5px",marginTop:"5px"},placeholder:" Rows"}),Object(a.jsx)("div",{style:{marginTop:"15px"},children:"Choose Columns"}),Object(a.jsx)("input",{type:"number",min:"3",max:"40",onChange:function(e){return r(e.target.value)},style:{display:"block",width:"200px",fontSize:"15px",padding:"5px",marginTop:"5px"},placeholder:" Columns"}),Object(a.jsx)("div",{style:{marginTop:"15px"},children:"Winning Streak"}),Object(a.jsx)("input",{type:"number",min:"3",onChange:function(e){return n(e.target.value)},style:{display:"block",width:"200px",fontSize:"15px",padding:"5px",marginTop:"5px"},placeholder:" Winning Streak"}),Object(a.jsx)("button",{onClick:function(){i(!u)},style:{marginTop:"10px",cursor:"pointer",fontSize:"15px",padding:"5px"},disabled:0===s||0===c||0===o,children:"Start Game"})]})},o=r(7),b=(r(14),function(e){var t=e.game,r=e.sigrdze,i=e.setgame,u=e.miyolebit,c=e.sigane,b=e.setDisplay,m=e.display,l=e.setsigrdze,p=e.setsigane,d=e.setmiyolebit,j=100/r,g=Object(o.a)(t),x=[],h=Object(n.useState)(!0),N=Object(s.a)(h,2),f=N[0],y=N[1],O=Object(n.useState)(!1),v=Object(s.a)(O,2),S=v[0],z=v[1],C=Object(n.useState)(""),T=Object(s.a)(C,2),w=T[0],k=T[1],D=Object(n.useState)(!1),A=Object(s.a)(D,2),X=A[0],W=A[1],B=function(e){return e%r===0?1:0},E=function(e){return(Number(e)+1)%r===0?1:0},G=function(e){return Number(e)<r?1:0},I=function(e){return e<r*c&&e>=r*c-r?1:0},J=function(e){for(var t=1,r=f?"X":"0",n=[],i=1;i<=u&&1!==E(Number(e)+i-1)&&g[Number(e)+i]===r;i++)t++,n.push(Number(e)+i);for(var s=1;s<=u&&1!==B(Number(e)-s+1)&&g[Number(e)-s]===r;s++)t++,n.push(Number(e)-s);t>=u&&(n.push(Number(e)),z(!0),k(r),x=n)},L=function(e){for(var t=1,n=f?"X":"0",i=[],s=1,a=Number(r);s<=u&&1!==I(Number(e)+a-Number(r))&&g[Number(e)+a]===n;s++,a+=Number(r))t++,i.push(Number(e)+a);for(var c=1,o=Number(r);c<=u&&1!==G(Number(e)-o+Number(r))&&g[Number(e)-o]===n;c++,o+=Number(r))t++,i.push(Number(e)-o);t>=u&&(i.push(Number(e)),z(!0),k(n),x=i)},R=function(e){for(var t=1,n=f?"X":"0",i=[],s=1,a=Number(r)+1;s<=u&&(1!==I(Number(e)+a-Number(r)-1)&&1!==E(Number(e)+a-Number(r)-1))&&g[Number(e)+a]===n;s++,a+=Number(r)+1)t++,i.push(Number(e)+a);for(var c=1,o=Number(r)+1;c<=u&&(1!==G(Number(e)-o+Number(r)+1)&&1!==B(Number(e)-o+Number(r)+1))&&g[Number(e)-o]===n;c++,o+=Number(r)+1)t++,i.push(Number(e)-o);t>=u&&(i.push(Number(e)),z(!0),k(n),x=i)},q=function(e){for(var t=1,n=f?"X":"0",i=[],s=1,a=Number(r)-1;s<=u&&(1!==I(Number(e)+a-Number(r)+1)&&1!==B(Number(e)+a-Number(r)+1))&&g[Number(e)+a]===n;s++,a+=Number(r)-1)t++,i.push(Number(e)+a);for(var c=1,o=Number(r)-1;c<=u&&(1!==G(Number(e)-o+Number(r)-1)&&1!==E(Number(e)-o+Number(r)-1))&&g[Number(e)-o]===n;c++,o+=Number(r)-1)t++,i.push(Number(e)-o);t>=u&&(i.push(Number(e)),z(!0),k(n),x=i)},F=function(e){var t;f?""===g[e.target.value]&&(g[e.target.value]="X",y(!f)):""===g[e.target.value]&&(g[e.target.value]="0",y(!f)),i(g),t=e.target.value,L(t),J(t),R(t),q(t),0===g.filter((function(e){return""===e})).length&&W(!0);for(var r=0;r<x.length;r++)document.querySelector(".gameth".concat(x[r])).classList.add("win")};return Object(a.jsxs)("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(a.jsx)("h1",{style:{fontSize:"35px",marginBottom:"10px",marginTop:"15px"},children:"Tic Tac Toe"}),Object(a.jsx)("div",{style:{width:"90%",display:"flex",flexWrap:"wrap"},children:t.map((function(e,t){return Object(a.jsx)("button",{disabled:!!S,className:"gameth".concat(t),style:{width:"".concat(j,"%"),height:"".concat(4*j,"px"),border:"2px solid black",fontSize:"".concat(2*j,"px"),cursor:"pointer"},value:t,onClick:F,children:e})}))}),X?Object(a.jsx)("div",{style:{fontSize:"35px"},children:"Draw"}):Object(a.jsx)(a.Fragment,{children:S?Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsxs)("div",{style:{marginTop:"10px",fontSize:"35px"},children:["Win Goes too ",w]}),Object(a.jsx)("button",{style:{marginTop:"5px",cursor:"pointer",fontSize:"15px",padding:"5px"},onClick:function(){b(!m),l(0),p(0),d(0),W(!1)},children:"Play Again"})]}):Object(a.jsx)("div",{style:{textAlign:"center",marginTop:"10px",fontSize:"35px"},children:"Good Luck"})})]})}),m=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),r=t[0],i=t[1],u=Object(n.useState)(0),o=Object(s.a)(u,2),m=o[0],l=o[1],p=Object(n.useState)(0),d=Object(s.a)(p,2),j=d[0],g=d[1],x=Object(n.useState)(!0),h=Object(s.a)(x,2),N=h[0],f=h[1],y=Object(n.useState)([]),O=Object(s.a)(y,2),v=O[0],S=O[1],z=new Array(r*m);return Object(n.useEffect)((function(){z.fill(""),S([].concat(z))}),[r,m]),N?Object(a.jsx)(c,{setsigane:l,sigrdze:r,sigane:m,miyolebit:j,setsigrdze:i,setmiyolebit:g,setDisplay:f,display:N}):Object(a.jsx)(b,{game:v,sigrdze:r,sigane:m,setgame:S,miyolebit:j,setDisplay:f,display:N,setsigane:l,setsigrdze:i,setmiyolebit:g})};u.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e56e5580.chunk.js.map