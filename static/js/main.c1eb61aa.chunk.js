(this.webpackJsonpunmatchedmatchuppicker=this.webpackJsonpunmatchedmatchuppicker||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(19),s=n.n(c),l=(n(32),n(3)),r=n.p+"static/media/logo.75067140.png",i=(n(33),n(6)),g=Object(a.createContext)({}),m=Object(a.createContext)({}),h=(n(35),n(2));var b=function(e){var t=e.character,n=1==e.card?"card1":"card2",o=Object(a.useState)(!0),c=Object(l.a)(o,2),s=c[0],r=c[1],m=Object(a.useContext)(g),b=Object(a.useContext)(g),f=Object(a.useContext)(g),j=function(){window.innerWidth<=800?r(!1):r(!0)};return Object(a.useEffect)((function(){j()}),[]),window.addEventListener("resize",j),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(i.animated.div,{style:m?b:f,className:n+" character-card",children:[Object(h.jsx)("img",{src:t.characterImg,alt:"character image",className:"characterimage"}),Object(h.jsxs)("div",{className:"character-info",children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)("u",{children:t.name})," "]}),s&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:t.CombatRange,alt:"character range",className:"mainrangelogo"}),Object(h.jsxs)("h5",{children:["Sidekick: ",t.minion,Object(h.jsx)("br",{}),Object(h.jsx)("img",{src:"/Unmatched-Matchup-Picker"+t.minionRange,className:"rangelogo"})]}),Object(h.jsxs)("p",{children:["Movement -> ",t.move]})]})]})]})})};n(37);var f=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),s=Object(l.a)(c,2),r=s[0],b=s[1],f=Object(a.useState)(!1),j=Object(l.a)(f,2),u=j[0],O=j[1],p=Object(a.useState)(!1),d=Object(l.a)(p,2),S=d[0],R=d[1],x=Object(a.useState)(!1),C=Object(l.a)(x,2),v=C[0],I=C[1],B=Object(a.useState)(!1),N=Object(l.a)(B,2),k=N[0],E=N[1],L=Object(a.useState)(!1),V=Object(l.a)(L,2),y=V[0],A=V[1],M=Object(a.useState)(!1),H=Object(l.a)(M,2),F=H[0],T=H[1],w=Object(a.useState)(!1),P=Object(l.a)(w,2),U=P[0],D=P[1],W=Object(a.useState)(!1),G=Object(l.a)(W,2),K=G[0],J=G[1],Y=Object(a.useState)(!1),z=Object(l.a)(Y,2),Q=z[0],X=z[1],q=Object(a.useState)(!1),Z=Object(l.a)(q,2),$=Z[0],_=Z[1],ee=Object(a.useState)(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],oe=Object(a.useState)(!1),ce=Object(l.a)(oe,2),se=ce[0],le=ce[1],re=Object(a.useState)(!1),ie=Object(l.a)(re,2),ge=ie[0],me=ie[1],he=Object(a.useState)(!1),be=Object(l.a)(he,2),fe=be[0],je=be[1],ue=Object(a.useContext)(g).setResult,Oe=Object(a.useContext)(m).AvailableCharacters,pe=Object(a.useContext)(m).Characters,de=Object(a.useContext)(m).AvailableMaps,Se=Object(a.useContext)(m).Maps,Re=Object(a.useContext)(m).setChosenCharacter1,xe=Object(a.useContext)(m).setChosenCharacter2,Ce=Object(a.useContext)(m).setChosenMap,ve=Object(a.useContext)(g).titletransition,Ie=Object(a.useContext)(g).springup;function Be(e,t){return Math.floor(Math.random()*(t-e+1))+e}return Object(a.useEffect)((function(){if(u){for(var e=0;e<Oe.length;e++)"Cobble of Fog"==Oe[e].Set&&J(!0);if(!K){for(e=0;e<pe.length;e++)"Cobble of Fog"==pe[e].Set&&Oe.push(pe[e]);for(e=0;e<Se.length;e++)"Cobble of Fog"==Se[e].Set&&de.push(Se[e]);J(!0)}}else if(K){for(e=Oe.length-1;e>=0;e--)"Cobble of Fog"==Oe[e].Set&&(console.log(Oe[e]),Oe.splice(e,1));for(e=de.length-1;e>=0;e--)"Cobble of Fog"==de[e].Set&&(console.log(de[e]),de.splice(e,1));J(!1)}console.log(Oe.length)}),[u]),Object(a.useEffect)((function(){if(S){for(var e=0;e<Oe.length;e++)"Battle of Legends Vol. One"==Oe[e].Set&&X(!0);if(!Q){for(e=0;e<pe.length;e++)"Battle of Legends Vol. One"==pe[e].Set&&Oe.push(pe[e]);for(e=0;e<Se.length;e++)"Battle of Legends Vol. One"==Se[e].Set&&de.push(Se[e]);X(!0)}}else if(Q){for(e=Oe.length-1;e>=0;e--)"Battle of Legends Vol. One"==Oe[e].Set&&(console.log(Oe[e]),Oe.splice(e,1));for(e=de.length-1;e>=0;e--)"Battle of Legends Vol. One"==de[e].Set&&(console.log(de[e]),de.splice(e,1));X(!1)}console.log(Oe.length)}),[S]),Object(a.useEffect)((function(){if(v){for(var e=0;e<Oe.length;e++)"Buffy"==Oe[e].Set&&_(!0);if(!$){for(e=0;e<pe.length;e++)"Buffy"==pe[e].Set&&Oe.push(pe[e]);for(e=0;e<Se.length;e++)"Buffy"==Se[e].Set&&de.push(Se[e]);_(!0)}}else if($){for(e=Oe.length-1;e>=0;e--)"Buffy"==Oe[e].Set&&(console.log(Oe[e]),Oe.splice(e,1));for(e=de.length-1;e>=0;e--)"Buffy"==de[e].Set&&(console.log(de[e]),de.splice(e,1));_(!1)}console.log(Oe.length)}),[v]),Object(a.useEffect)((function(){if(k){for(var e=0;e<Oe.length;e++)"Ingen VS. Raptors"==Oe[e].Set&&ae(!0);if(!ne){for(e=0;e<pe.length;e++)"Ingen VS. Raptors"==pe[e].Set&&Oe.push(pe[e]);for(e=0;e<Se.length;e++)"Ingen VS. Raptors"==Se[e].Set&&de.push(Se[e]);ae(!0)}}else if(ne){for(e=Oe.length-1;e>=0;e--)"Ingen VS. Raptors"==Oe[e].Set&&(console.log(Oe[e]),Oe.splice(e,1));for(e=de.length-1;e>=0;e--)"Ingen VS. Raptors"==de[e].Set&&(console.log(de[e]),de.splice(e,1));ae(!1)}console.log(Oe.length)}),[k]),Object(a.useEffect)((function(){if(y){for(var e=0;e<Oe.length;e++)"Robin Hood VS. Bigfoot"==Oe[e].Set&&le(!0);if(!se){for(e=0;e<pe.length;e++)"Robin Hood VS. Bigfoot"==pe[e].Set&&Oe.push(pe[e]);for(e=0;e<Se.length;e++)"Robin Hood VS. Bigfoot"==Se[e].Set&&de.push(Se[e]);le(!0)}}else if(se){for(e=Oe.length-1;e>=0;e--)"Robin Hood VS. Bigfoot"==Oe[e].Set&&(console.log(Oe[e]),Oe.splice(e,1));for(e=de.length-1;e>=0;e--)"Robin Hood VS. Bigfoot"==de[e].Set&&(console.log(de[e]),de.splice(e,1));le(!1)}console.log(Oe.length)}),[y]),Object(a.useEffect)((function(){if(F){for(var e=0;e<Oe.length;e++)"Red VS. Beowulf"==Oe[e].Set&&me(!0);if(!ge){for(e=0;e<pe.length;e++)"Red VS. Beowulf"==pe[e].Set&&Oe.push(pe[e]);for(e=0;e<Se.length;e++)"Red VS. Beowulf"==Se[e].Set&&de.push(Se[e]);me(!0)}}else if(ge){for(e=Oe.length-1;e>=0;e--)"Red VS. Beowulf"==Oe[e].Set&&(console.log(Oe[e]),Oe.splice(e,1));for(e=de.length-1;e>=0;e--)"Red VS. Beowulf"==de[e].Set&&(console.log(de[e]),de.splice(e,1));me(!1)}console.log(Oe.length)}),[F]),Object(a.useEffect)((function(){if(U){for(var e=0;e<Oe.length;e++)"Bruce Lee"==Oe[e].Set&&je(!0);if(!fe){for(e=0;e<pe.length;e++)"Bruce Lee"==pe[e].Set&&Oe.push(pe[e]);je(!0)}}else if(fe){for(e=Oe.length-1;e>=0;e--)"Bruce Lee"==Oe[e].Set&&(console.log(Oe[e]),Oe.splice(e,1));je(!1)}console.log(Oe.length)}),[U]),Object(h.jsxs)(h.Fragment,{children:[!n&&Object(h.jsx)(i.animated.div,{className:"options",style:Ie,onClick:function(){return o(!n)},children:"Options"}),n&&Object(h.jsxs)("div",{className:"optionmenu",children:[Object(h.jsx)(i.animated.div,{className:"back",style:ve,onClick:function(){return o(!n)},children:" Back "}),Object(h.jsxs)(i.animated.form,{style:ve,className:"input-section",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h4",{className:"optiontitle",children:"OPTIONS"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("label",{className:"form-label",children:["POSSIBLE MIRROR MATCHES?",Object(h.jsx)("input",{name:"MirrorMatch",type:"checkbox",className:"checkbox",defaultChecked:r,onChange:function(){return b(!r)}})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("h5",{className:"optiontitle",children:["PACKS ",Object(h.jsx)("p",{className:"warningmessage",children:"(Leave empty to select all)"})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("label",{className:"form-label",children:["Cobble of Fog",Object(h.jsx)("input",{name:"Cobble",type:"checkbox",className:"checkbox",defaultChecked:u,onChange:function(){return O(!u)}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{className:"form-label",children:["Battle of Legends Vol. One",Object(h.jsx)("input",{name:"Legends",type:"checkbox",className:"checkbox",defaultChecked:S,onChange:function(){return R(!S)}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{className:"form-label",children:["Buffy: The Vampire Slayer",Object(h.jsx)("input",{name:"Buffy",type:"checkbox",className:"checkbox",defaultChecked:v,onChange:function(){return I(!v)}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{className:"form-label",children:["InGen VS. The Raptors",Object(h.jsx)("input",{name:"JurassicPark",type:"checkbox",className:"checkbox",defaultChecked:k,onChange:function(){return E(!k)}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{className:"form-label",children:["Robin Hood VS. Bigfoot",Object(h.jsx)("input",{name:"Hood",type:"checkbox",className:"checkbox",defaultChecked:y,onChange:function(){return A(!y)}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{className:"form-label",children:["Red VS. Beowulf",Object(h.jsx)("input",{name:"Red",type:"checkbox",className:"checkbox",defaultChecked:F,onChange:function(){return T(!F)}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{className:"form-label",children:["Bruce Lee",Object(h.jsx)("input",{name:"Bruce",type:"checkbox",className:"checkbox",defaultChecked:U,onChange:function(){return D(!U)}})]})]})]}),Object(h.jsx)(i.animated.div,{style:Ie,className:"start-button front unselectable",onClick:function(){var e,t,n;if(Oe.length>1){if(r)e=Be(0,Oe.length-1),t=Be(0,Oe.length-1);else for(console.log("hi");e==t;)e=Be(0,Oe.length-1),t=Be(0,Oe.length-1);n=Be(0,de.length-1)}else{if(r)e=Be(0,pe.length-1),t=Be(0,pe.length-1);else for(;e==t;)e=Be(0,pe.length-1),t=Be(0,pe.length-1);n=Be(0,Se.length-1)}u||S||v||k||F||y?(Re(Oe[e]),xe(Oe[t]),Ce(de[n])):(Re(pe[e]),xe(pe[t]),Ce(Se[n])),ue(!0)},children:"GIVE ME MY MATCHUP"})]})},j=[{name:"MEDUSA",CombatRange:"/ranged.svg",minion:"HARPIES (3)",minionRange:"/melee.svg",health:"16",move:"3",characterImg:"/medusa.png",Set:"Battle of Legends Vol. One"},{name:"SINBAD",CombatRange:"/melee.svg",minion:"THE PORTER",minionRange:"/melee.svg",health:"16",move:"2",characterImg:"/sinbad.png",Set:"Battle of Legends Vol. One"},{name:"ALICE",CombatRange:"/melee.svg",minion:"JABBERWOCK",minionRange:"/melee.svg",health:"13",move:"2",characterImg:"/alice.png",Set:"Battle of Legends Vol. One"},{name:"KING AUTHUR",CombatRange:"/melee.svg",minion:"MERLIN",minionRange:"/ranged.svg",health:"16",move:"2",characterImg:"/authur.png",Set:"Battle of Legends Vol. One"},{name:"SHERLOCK HOLMES",CombatRange:"/melee.svg",minion:"DR. WATSON",minionRange:"/ranged.svg",health:"16",move:"2",characterImg:"/sherlock.png",Set:"Cobble of Fog"},{name:"JEKYLL & HYDE",CombatRange:"/melee.svg",minion:"None",minionRange:"",health:"16",move:"2",characterImg:"/jekyll.png",Set:"Cobble of Fog"},{name:"INVISIBLE MAN",CombatRange:"/melee.svg",minion:"None",minionRange:"",health:"15",move:"2",characterImg:"/invisibleman.png",Set:"Cobble of Fog"},{name:"DRACULA",CombatRange:"/melee.svg",minion:"SISTERS (3)",minionRange:"/melee.svg",health:"13",move:"2",characterImg:"/dracula.png",Set:"Cobble of Fog"},{name:"BUFFY",CombatRange:"/melee.svg",minion:"XANDER OR GILES",minionRange:"/melee.svg",health:"14",move:"3",characterImg:"/buffy.png",Set:"Buffy"},{name:"SPIKE",CombatRange:"/melee.svg",minion:"DRUSILLA",minionRange:"/melee.svg",health:"15",move:"2",characterImg:"/spike.png",Set:"Buffy"},{name:"WILLOW",CombatRange:"/ranged.svg",minion:"TARA",minionRange:"/ranged.svg",health:"14",move:"2",characterImg:"/willow.png",Set:"Buffy"},{name:"ANGEL",CombatRange:"/melee.svg",minion:"FAITH",minionRange:"/melee.svg",health:"16",move:"2",characterImg:"/angel.png",Set:"Buffy"},{name:"Muldoon",CombatRange:"/ranged.svg",minion:"INGEN WORKERS (3)",minionRange:"/ranged.svg",health:"14",move:"3",characterImg:"/ingen.png",Set:"Ingen VS. Raptors"},{name:"The Raptors",CombatRange:"/melee.svg",minion:"None",minionRange:"",health:"7 (3)",move:"3",characterImg:"/raptors.png",Set:"Ingen VS. Raptors"},{name:"ROBIN HOOD",CombatRange:"/ranged.svg",minion:"OUTLAWS (4)",minionRange:"/melee.svg",health:"13",move:"2",characterImg:"/robinhood.png",Set:"Robin Hood VS. Bigfoot"},{name:"BIGFOOT",CombatRange:"/melee.svg",minion:"JACKALOPE",minionRange:"/melee.svg",health:"16",move:"3",characterImg:"/bigfoot.png",Set:"Robin Hood VS. Bigfoot"},{name:"LITTLE RED",CombatRange:"/melee.svg",minion:"HUNTSMAN",minionRange:"/ranged.svg",health:"14",move:"2",characterImg:"/littlered.png",Set:"Red VS. Beowulf"},{name:"BEOWULF",CombatRange:"/melee.svg",minion:"WIGLAF",minionRange:"/melee.svg",health:"17",move:"2",characterImg:"/beowulf.png",Set:"Red VS. Beowulf"},{name:"BRUCE LEE",CombatRange:"/melee.svg",minion:"None",minionRange:"",health:"14",move:"3",characterImg:"/brucelee.png",Set:"Bruce Lee"}],u=[{map:"Marmoreal",mapImg:"/marmoreal.jpg",Set:"Battle of Legends Vol. One"},{map:"Sarpedon",mapImg:"/sarpedon.jpg",Set:"Battle of Legends Vol. One"},{map:"SoHo",mapImg:"/soho.jpg",Set:"Cobble of Fog"},{map:"Baskerville Manor",mapImg:"/baskerville-manor.jpg",Set:"Cobble of Fog"},{map:"Sunnydale High",mapImg:"/sunnydale-high.jpg",Set:"Buffy"},{map:"The Bronze",mapImg:"/the-bronze.jpg",Set:"Buffy"},{map:"Yukon",mapImg:"/yukon.jpg",Set:"Robin Hood VS. Bigfoot"},{map:"Sherwood Forest",mapImg:"/sherwood-forest.jpg",Set:"Robin Hood VS. Bigfoot"},{map:"Raptor Paddock",mapImg:"/raptor-paddock.jpg",Set:"Ingen VS. Raptors"},{map:"Heorot",mapImg:"/heorot.jpg",Set:"Red VS. Beowulf"}],O=[],p=[];var d=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),s=Object(l.a)(c,2),d=(s[0],s[1],Object(a.useState)({name:"",CombatRange:"",minion:"",minionRange:"",health:"",move:"",characterImg:"",Set:""})),S=Object(l.a)(d,2),R=S[0],x=S[1],C=Object(a.useState)({name:"",CombatRange:"",minion:"",minionRange:"",health:"",move:"",characterImg:"",Set:""}),v=Object(l.a)(C,2),I=v[0],B=v[1],N=Object(a.useState)({map:"",mapImg:"",Set:""}),k=Object(l.a)(N,2),E=k[0],L=k[1],V=Object(i.useSpringRef)(),y=Object(i.useSpring)({ref:V,to:{opacity:1,y:0},from:{opacity:0,y:-200},config:i.config.stiff}),A=Object(i.useSpringRef)(),M=Object(i.useSpring)({ref:A,to:{y:380},from:{y:700},config:i.config.default});return Object(i.useChain)([V,A],[0,0]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(g.Provider,{value:{springup:M,titletransition:y,Result:n,setResult:o},children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(i.animated.img,{src:r,style:y,className:"App-logo front",alt:"logo"}),Object(h.jsxs)(i.animated.p,{style:y,className:"front slogan",children:["IN BATTLE, THERE ARE ",Object(h.jsx)("b",{children:"NO EQUALS."})]}),Object(h.jsx)(m.Provider,{value:{setChosenCharacter1:x,setChosenCharacter2:B,setChosenMap:L,AvailableCharacters:O,Characters:j,AvailableMaps:p,Maps:u},children:Object(h.jsx)(f,{})}),n&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{character:R,card:1}),Object(h.jsx)("img",{src:"/Unmatched-Matchup-Picker"+E.mapImg,className:"map",alt:"chosen map"}),Object(h.jsxs)("h5",{className:"map-title",children:["Map: ",E.map]}),Object(h.jsx)("h1",{className:"middle",children:"VS."}),Object(h.jsx)(b,{character:I,card:2})]})]})})})};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c1eb61aa.chunk.js.map