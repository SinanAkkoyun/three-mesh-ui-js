(()=>{"use strict";var e,t={"./examples/tut__preloaded_font_7xx.js":(e,t,n)=>{var o=n("./node_modules/three/build/three.module.js"),a=n("./node_modules/three/examples/jsm/webxr/VRButton.js"),r=n("./node_modules/three/examples/jsm/controls/OrbitControls.js"),i=n("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),s=n("./src/three-mesh-ui.js");const l={h:{yoffset:2},k:{yoffset:2},l:{yoffset:2},j:{yoffset:4.5},b:{yoffset:2},d:{yoffset:2}};class d extends o.RSm{static get mediation(){return s.tx.mediation}constructor(e={}){s.tx.ensureMaterialOptions(e),super(e),s.tx.ensureDefines(this),s.tx.ensureUserData(this,e),this.onBeforeCompile=e=>{s.tx.bindUniformsWithUserData(e,this),s.tx.injectVertexShaderChunks(e),e.fragmentShader=e.fragmentShader.replace("#include <normalmap_pars_fragment>",`#include <normalmap_pars_fragment>\nvec4 diffuseColor;\nuniform float alphaTest;\n${s.sV.msdf_alphaglyph_pars_fragment}`),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>\ndiffuseColor = vec4( packNormalToRGB( normal ), opacity );\n${s.sV.msdf_alphaglyph_fragment}`),e.fragmentShader=e.fragmentShader.replace("gl_FragColor = vec4( packNormalToRGB( normal ), opacity );","if( diffuseColor.a < alphaTest ) discard;\n                gl_FragColor = diffuseColor;")}}}var f=n("./src/utils/font/FontWeight.js"),c=n("./src/utils/font/FontStyle.js"),m=n("./src/elements/basic/BlockElement.js");s.zV.prepare(s.zV.addFontFamily("Roboto").addVariant(f.NORMAL,c.NORMAL,"./assets/fonts/msdf/roboto/regular.json","./assets/fonts/msdf/roboto/regular.png").addVariant(f.BOLD,c.ITALIC,"./assets/fonts/msdf/roboto/bold-italic.json","./assets/fonts/msdf/roboto/bold-italic.png").addVariant(f.BOLD,c.NORMAL,"./assets/fonts/msdf/roboto/bold.json","./assets/fonts/msdf/roboto/bold.png").addVariant(f.NORMAL,c.ITALIC,"./assets/fonts/msdf/roboto/italic.json","./assets/fonts/msdf/roboto/italic.png")).then((()=>{const e=s.zV.getFontFamily("Roboto");e.getVariant("400","normal").adjustTypographicGlyphs({h:{yoffset:2}}),e.getVariant("700","normal").fontMaterial=d,e.getVariant("700","normal").adjustTypographicGlyphs(l),e.getVariant("700","italic").adjustTypographicGlyphs(l),e.getVariant("400","italic").adjustTypographicGlyphs(l),function(){u=new o.xsS,u.background=new o.Ilk(5263440),g=new o.cPb(60,p/h,.1,100),w=new o.CP7({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(p,h),w.xr.enabled=!0,document.body.appendChild(a.N.createButton(w)),document.body.appendChild(w.domElement),b=new r.z(g,w.domElement),g.position.set(0,1,0),b.target=new o.Pa4(0,1,-1.8),b.update();const e=new o.ejS(new i.d(6,6,6,10,10,10).translate(0,3,0),new o.nls({color:8421504}));u.add(e),function(){const e=s.zV.getFontFamily("Roboto"),t=new m.Z;t.set({name:"rootBlock",width:1.75,height:1,padding:.05,color:16777215,flexDirection:"column",justifyContent:"center",borderRadius:.05,textAlign:"left",fontFamily:e}),t.position.set(0,1,-1.8),u.add(t),window.rootBlock=t;const n=new s.ZP.Text({name:"titleBlock",boxSizing:"border-box",content:"Managing fonts in three-mesh-ui.",fontWeight:"700",fontSize:.1,borderRadius:"0.05 0.2 0 0.2",invertAlpha:!0,letterSpacing:.02});window.titleBlock=n,t.add(n,new s.ZP.Text({content:'In this examples, 4 variants of the "Roboto" font are registered :'}),new s.ZP.Text({margin:"0.01 0",width:"100%",lineHeight:2,alignItems:"center"}).add(new s.ZP.Inline({textContent:"Regular "}),new s.ZP.Inline({textContent:"Bold ",fontWeight:"700",margin:.05}),new s.ZP.Inline({textContent:"Italic ",fontStyle:"italic"}),new s.ZP.Inline({textContent:"Bold+Italic",fontWeight:"700",fontStyle:"italic"})),new s.ZP.Text({content:"The registered bold variant in this example, will automatically set the material of a Text to use "}).add(new s.ZP.Inline({content:"MSDFNormalMaterial.",fontWeight:"700"})),new s.ZP.Text({content:"\n\n* Managing and preloading fonts can display Text with no additional delays.",fontStyle:"italic",fontSize:.035})),window.update=s.ZP.update,s.ZP.update()}(),w.setAnimationLoop(x),window.addEventListener("resize",y)}()}));const p=window.innerWidth,h=window.innerHeight;let u,g,w,b;function x(){b.update(),w.render(u,g)}function y(){g.aspect=window.innerWidth/window.innerHeight,g.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)}}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,a,r)=>{if(!n){var i=1/0;for(f=0;f<e.length;f++){for(var[n,a,r]=e[f],s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(f--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var f=e.length;f>0&&e[f-1][2]>r;f--)e[f]=e[f-1];e[f]=[n,a,r]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j="tut__preloaded_font_7xx",(()=>{var e={tut__preloaded_font_7xx:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[i,s,l]=n,d=0;if(i.some((t=>0!==e[t]))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var f=l(o)}for(t&&t(n);d<i.length;d++)r=i[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(f)},n=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,["chunk_three-mesh-ui","chunk_vendors"],(()=>o("./examples/tut__preloaded_font_7xx.js")));a=o.O(a)})();