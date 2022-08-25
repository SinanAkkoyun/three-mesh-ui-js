(()=>{"use strict";var e,t={"./examples/api__border.js":(e,t,n)=>{var r=n("./node_modules/three/build/three.module.js"),o=n("./node_modules/three/examples/jsm/webxr/VRButton.js"),i=n("./node_modules/three/examples/jsm/controls/OrbitControls.js"),a=n("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),d=n("./src/three-mesh-ui.js"),s=n("./examples/assets/fonts/msdf/roboto/regular.json");const l=n.p+"5a41f46a5020bc8f41ff554d0d890ad3.png",c=window.innerWidth,u=window.innerHeight;let p,h,w,b,m;function f(){m.set({borderRadius:[0,.5*Math.sin(Date.now()/500),0,0],borderWidth:.05-.06*Math.sin(Date.now()/500),borderColor:new r.Ilk(.5+.5*Math.sin(Date.now()/500),.5,1),borderOpacity:1,width:2+Math.sin(Date.now()/500)}),d.ZP.update(),b.update(),w.render(p,h)}window.addEventListener("load",(function(){p=new r.xsS,p.background=new r.Ilk(5263440),h=new r.cPb(60,c/u,.1,100),w=new r.CP7({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(c,u),w.xr.enabled=!0,document.body.appendChild(o.N.createButton(w)),document.body.appendChild(w.domElement),b=new i.z(h,w.domElement),h.position.set(0,1.6,0),b.target=new r.Pa4(0,1,-1.8),b.update();const e=new r.ejS(new a.d(6,6,6,10,10,10).translate(0,3,0),new r.nls({color:8421504}));p.add(e),m=new d.ZP.Block({width:3,height:.8,fontSize:.055,justifyContent:"center",textAlign:"center",fontFamily:s,fontTexture:l}),m.position.set(0,1,-1.8),m.rotation.x=-.55,p.add(m),m.add(new d.ZP.Text({content:"Block.borderRadius\n\nBlock.borderWidth\n\nBlock.borderColor\n\nBlock.borderOpacity"})),w.setAnimationLoop(f)})),window.addEventListener("resize",(function(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,i]=e[c],d=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(d=!1,i<a&&(a=i));if(d){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j="api__border",(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={api__border:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,d,s]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in d)r.o(d,o)&&(r.m[o]=d[o]);if(s)var c=s(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,["chunk_imported-assets","chunk_three-mesh-ui","chunk_vendors"],(()=>r("./examples/api__border.js")));o=r.O(o)})();