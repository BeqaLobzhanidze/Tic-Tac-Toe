(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),i=r(6),u=r.n(i),s=r(2),a=(r(12),r(0)),c=function(e){var t=e.setsigrdze,r=e.setsigane,n=e.setmiyolebit,i=e.setDisplay,u=e.display,s=e.sigrdze,c=e.sigane,b=e.miyolebit;return Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh",backgroundColor:"#C5CACE"},children:[Object(a.jsx)("h1",{style:{marginBottom:"30px"},children:"Tic Tac Toe"}),Object(a.jsx)("div",{children:"Choose Rows"}),Object(a.jsx)("input",{type:"number",min:"3",max:"40",onChange:function(e){return t(e.target.value)},style:{display:"block"},placeholder:"Rows"}),Object(a.jsx)("div",{style:{marginTop:"15px"},children:"Choose Columns"}),Object(a.jsx)("input",{type:"number",min:"3",max:"40",onChange:function(e){return r(e.target.value)},style:{display:"block"},placeholder:"Columns"}),Object(a.jsx)("div",{style:{marginTop:"15px"},children:"Winning Streak"}),Object(a.jsx)("input",{type:"number",min:"3",onChange:function(e){return n(e.target.value)},style:{display:"block"},placeholder:"Winning Streak"}),Object(a.jsx)("button",{onClick:function(){i(!u)},style:{marginTop:"10px",cursor:"pointer",fontSize:"15px",padding:"5px"},disabled:0===s||0===c||0===b,children:"Start Game"})]})},b=r(7),o=(r(14),function(e){var t=e.game,r=e.sigrdze,i=e.setgame,u=e.miyolebit,c=e.sigane,o=e.setDisplay,l=e.display,m=e.setsigrdze,p=e.setsigane,d=e.setmiyolebit,j=100/r,g=Object(b.a)(t),N=[],h=Object(n.useState)(!0),x=Object(s.a)(h,2),f=x[0],y=x[1],O=Object(n.useState)(!1),v=Object(s.a)(O,2),S=v[0],C=v[1],z=Object(n.useState)(""),k=Object(s.a)(z,2),T=k[0],w=k[1],D=Object(n.useState)(!1),A=Object(s.a)(D,2),X=A[0],W=A[1],B=function(e){return e%r===0?1:0},E=function(e){return(Number(e)+1)%r===0?1:0},G=function(e){return Number(e)<r?1:0},I=function(e){return e<r*c&&e>=r*c-r?1:0},J=function(e){for(var t=1,r=f?"X":"0",n=[],i=1;i<=u&&1!==E(Number(e)+i-1)&&g[Number(e)+i]===r;i++)t++,n.push(Number(e)+i);for(var s=1;s<=u&&1!==B(Number(e)-s+1)&&g[Number(e)-s]===r;s++)t++,n.push(Number(e)-s);t>=u&&(n.push(Number(e)),C(!0),w(r),N=n)},L=function(e){for(var t=1,n=f?"X":"0",i=[],s=1,a=Number(r);s<=u&&1!==I(Number(e)+a-Number(r))&&g[Number(e)+a]===n;s++,a+=Number(r))t++,i.push(Number(e)+a);for(var c=1,b=Number(r);c<=u&&1!==G(Number(e)-b+Number(r))&&g[Number(e)-b]===n;c++,b+=Number(r))t++,i.push(Number(e)-b);t>=u&&(i.push(Number(e)),C(!0),w(n),N=i)},R=function(e){for(var t=1,n=f?"X":"0",i=[],s=1,a=Number(r)+1;s<=u&&(1!==I(Number(e)+a-Number(r)-1)&&1!==E(Number(e)+a-Number(r)-1))&&g[Number(e)+a]===n;s++,a+=Number(r)+1)t++,i.push(Number(e)+a);for(var c=1,b=Number(r)+1;c<=u&&(1!==G(Number(e)-b+Number(r)+1)&&1!==B(Number(e)-b+Number(r)+1))&&g[Number(e)-b]===n;c++,b+=Number(r)+1)t++,i.push(Number(e)-b);t>=u&&(i.push(Number(e)),C(!0),w(n),N=i)},q=function(e){for(var t=1,n=f?"X":"0",i=[],s=1,a=Number(r)-1;s<=u&&(1!==I(Number(e)+a-Number(r)+1)&&1!==B(Number(e)+a-Number(r)+1))&&g[Number(e)+a]===n;s++,a+=Number(r)-1)t++,i.push(Number(e)+a);for(var c=1,b=Number(r)-1;c<=u&&(1!==G(Number(e)-b+Number(r)-1)&&1!==E(Number(e)-b+Number(r)-1))&&g[Number(e)-b]===n;c++,b+=Number(r)-1)t++,i.push(Number(e)-b);t>=u&&(i.push(Number(e)),C(!0),w(n),N=i)},F=function(e){var t;f?""===g[e.target.value]&&(g[e.target.value]="X",y(!f)):""===g[e.target.value]&&(g[e.target.value]="0",y(!f)),i(g),t=e.target.value,L(t),J(t),R(t),q(t),0===g.filter((function(e){return""===e})).length&&W(!0);for(var r=0;r<N.length;r++)document.querySelector(".gameth".concat(N[r])).classList.add("win")};return Object(a.jsxs)("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(a.jsx)("h1",{style:{fontSize:"35px",marginBottom:"10px",marginTop:"15px"},children:"Tic Tac Toe"}),Object(a.jsx)("div",{style:{width:"90%",display:"flex",flexWrap:"wrap"},children:t.map((function(e,t){return Object(a.jsx)("button",{disabled:!!S,className:"gameth".concat(t),style:{width:"".concat(j,"%"),height:"".concat(4*j,"px"),border:"2px solid black",fontSize:"".concat(2*j,"px"),cursor:"pointer"},value:t,onClick:F,children:e})}))}),X?Object(a.jsx)("div",{style:{fontSize:"35px"},children:"Draw"}):Object(a.jsx)(a.Fragment,{children:S?Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsxs)("div",{style:{marginTop:"10px",fontSize:"35px"},children:["Win Goes too ",T]}),Object(a.jsx)("button",{style:{marginTop:"5px",cursor:"pointer",fontSize:"15px",padding:"5px"},onClick:function(){o(!l),m(0),p(0),d(0),W(!1)},children:"Play Again"})]}):Object(a.jsx)("div",{style:{textAlign:"center",marginTop:"10px",fontSize:"35px"},children:"Good Luck"})})]})}),l=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),r=t[0],i=t[1],u=Object(n.useState)(0),b=Object(s.a)(u,2),l=b[0],m=b[1],p=Object(n.useState)(0),d=Object(s.a)(p,2),j=d[0],g=d[1],N=Object(n.useState)(!0),h=Object(s.a)(N,2),x=h[0],f=h[1],y=Object(n.useState)([]),O=Object(s.a)(y,2),v=O[0],S=O[1],C=new Array(r*l);return Object(n.useEffect)((function(){C.fill(""),S([].concat(C))}),[r,l]),x?Object(a.jsx)(c,{setsigane:m,sigrdze:r,sigane:l,miyolebit:j,setsigrdze:i,setmiyolebit:g,setDisplay:f,display:x}):Object(a.jsx)(o,{game:v,sigrdze:r,sigane:l,setgame:S,miyolebit:j,setDisplay:f,display:x,setsigane:m,setsigrdze:i,setmiyolebit:g})};u.a.render(Object(a.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5934f083.chunk.js.map