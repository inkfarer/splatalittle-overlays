(()=>{"use strict";var e,n={6997:(e,n)=>{n.DF={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"]},n.SZ=n.DF},765:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(2609),o=t.n(i)()((function(e){return e[1]}));o.push([e.id,".intermission-wrapper{width:100%;height:100%;position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.intermission-main-content{border-radius:4px;z-index:100;padding:15px 25px;display:flex;flex-direction:column;align-items:center;justify-content:center}.intermission-main-content>.tournament-logo{width:500px;filter:drop-shadow(0 0 55px rgba(213, 185, 24, 0.25))}.intermission-main-content>.intermission-slides{height:350px;padding:0 25px;margin-top:20px;width:750px;display:flex;align-items:center;justify-content:center;position:relative}",""]);const a=o},3352:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(2609),o=t.n(i)()((function(e){return e[1]}));o.push([e.id,'.intermission-main{width:100%;display:flex;flex-direction:column;align-items:center}.intermission-main .flavor-text-wrapper{width:1400px;height:220px;display:flex;justify-content:center;align-items:center;text-align:center;margin-bottom:10px}.intermission-main .flavor-text{font-family:"Gota";font-weight:400;font-size:110px;max-height:220px;overflow:hidden;color:#d5c025;overflow-wrap:anywhere}.intermission-main span.minutes{font-weight:800}.intermission-main .info-rows{height:100px;width:100%;display:flex;flex-direction:column;align-items:center}',""]);const a=o},6187:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(2609),o=t.n(i)()((function(e){return e[1]}));o.push([e.id,".info-row{display:flex;align-items:center;height:50px;font-weight:250}.info-row .icon{font-size:36px;margin-right:16px;color:#d5c025}.info-row .info-row-text{font-size:32px}.info-row-leave-active{transition:height 500ms ease 100ms,opacity 500ms ease}.info-row-enter-active{transition:height 500ms ease,opacity 500ms ease 100ms}.info-row-enter-from,.info-row-leave-to{height:0;opacity:0}",""]);const a=o},4737:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(2609),o=t.n(i)()((function(e){return e[1]}));o.push([e.id,'.intermission-next-up{width:100%;display:flex;flex-direction:column;align-items:center;text-align:center;margin-top:-10px}.intermission-next-up .title{font-family:"Gota";font-weight:400;font-size:92px;color:#d5c025}.intermission-next-up .next-team-names{margin:5px 0;font-size:40px}.intermission-next-up .next-team-names .team-name-content-wrapper{display:flex;align-items:center;height:86px}.intermission-next-up .next-team-names .team-name-container{text-align:center}.intermission-next-up .next-team-names .team-name{font-size:42px}.intermission-next-up .next-team-names .secondary-name{font-size:24px;margin-bottom:-10px}.intermission-next-up .next-team-names .versus{margin:0 15px;color:#d5c025;font-weight:700}.intermission-next-up .round-type{font-size:28px;font-style:italic}',""]);const a=o},9968:(e,n,t)=>{t.d(n,{L:()=>c,T:()=>l});var i=t(2763),o=t(579);let a,r,s;function l(e,n){function t(){const e=Math.ceil(a.diffNow(["minutes"]).toObject().minutes);r!==e&&(r=e,n(e))}const o=i.Z.fromISO(e);o.toMillis()!==(null==a?void 0:a.toMillis())&&(a=o,clearInterval(s),t(),s=window.setInterval(t,1e3))}function c(e){return o.ZP.fromObject({seconds:e}).toFormat("m:ss")}t(1244),t(3856),t(8348),t(8748),t(3894),t(3628),t(8720),t(407)},4959:(e,n,t)=>{t(212);var i=t(4825),o=t(7875);const a={class:"intermission-wrapper"},r={class:"intermission-main-content"},s=["src"],l={class:"intermission-slides"};var c=t(349);const m={class:"intermission-main"},u={class:"flavor-text-wrapper"},d={class:"info-rows"},p={key:0},f=(0,o.Uk)(" Resuming in "),v={class:"minutes"},w=(0,o.Uk)(" minutes... "),x={key:1},g=(0,o.Uk)(" Resuming in "),h={class:"minutes"},y=(0,o.Uk)(" minute... "),b={key:2};var S=t(8751),Z=t(2209),T=t(641);const _={key:0,class:"info-row"};var k=t(1901),R=t(2846),I=t(7372);const F=(0,o.aZ)({name:"IntermissionMainInfoRow",components:{FontAwesomeIcon:k.GN,OpacitySwapTransition:R.Z,FittedContent:I.Z},props:{value:{type:String,default:""},icon:{type:String,required:!0},visible:{type:Boolean,default:!0}}});var O=t(6062),P=t.n(O),j=t(4036),z=t.n(j),A=t(6793),C=t.n(A),D=t(7892),B=t.n(D),E=t(1173),L=t.n(E),M=t(2464),N=t.n(M),W=t(6187),U={};U.styleTagTransform=N(),U.setAttributes=B(),U.insert=C().bind(null,"head"),U.domAPI=z(),U.insertStyleElement=L(),P()(W.Z,U),W.Z&&W.Z.locals&&W.Z.locals;var $=t(4407);const V=(0,$.Z)(F,[["render",function(e,n,t,a,r,s){const l=(0,o.up)("font-awesome-icon"),m=(0,o.up)("opacity-swap-transition"),u=(0,o.up)("fitted-content");return(0,o.wg)(),(0,o.j4)(i.uT,{name:"info-row"},{default:(0,o.w5)((()=>[e.visible?((0,o.wg)(),(0,o.iD)("div",_,[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(l,{key:e.value,icon:e.icon,class:"icon"},null,8,["icon"]))])),_:1}),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(u,{key:e.value,"max-width":900,class:"info-row-text"},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},(()=>[(0,o.Uk)((0,c.zw)(e.value),1)]))])),_:3}))])),_:3})])):(0,o.kq)("",!0)])),_:3})}]]);var G=t(9968),H=t(6997),q=t(2165),Y=t(9060),J=t(882),Q=t(3498),X=t(3222);const K=nodecg.Replicant("mainFlavorText",Q.h7),ee=nodecg.Replicant("nextRoundStartTime",Q.h7),ne=nodecg.Replicant("activeBreakScene",Q.h7),te=(0,J.Q_)("breakScreen",{state:()=>({mainFlavorText:null,nextRoundStartTime:{startTime:null,isVisible:null},activeBreakScene:null})}),ie=(0,X.H)([K,ee,ne],te);S.vI.add(Z.Xi,H.SZ);const oe=(0,o.aZ)({name:"IntermissionMain",components:{OpacitySwapTransition:R.Z,IntermissionMainInfoRow:V},setup(){const e=(0,Y.J)(),n=te(),t=(0,T.iH)(0);return(0,o.YP)((()=>n.nextRoundStartTime.startTime),(e=>{(0,G.T)(e,(e=>t.value=e))}),{immediate:!0}),{nowPlaying:(0,o.Fl)((()=>(0,q.D)(e.nowPlaying))),musicShown:(0,o.Fl)((()=>e.musicShown)),nextRoundStartDiffNow:t,nextRoundTimeVisible:(0,o.Fl)((()=>n.nextRoundStartTime.isVisible)),mainFlavorText:(0,o.Fl)((()=>n.mainFlavorText))}}});var ae=t(3352),re={};re.styleTagTransform=N(),re.setAttributes=B(),re.insert=C().bind(null,"head"),re.domAPI=z(),re.insertStyleElement=L(),P()(ae.Z,re),ae.Z&&ae.Z.locals&&ae.Z.locals;const se=(0,$.Z)(oe,[["render",function(e,n,t,i,a,r){const s=(0,o.up)("opacity-swap-transition"),l=(0,o.up)("intermission-main-info-row");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",u,[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)("div",{key:e.mainFlavorText,class:"flavor-text"},(0,c.zw)(e.mainFlavorText),1))])),_:1})]),(0,o._)("div",d,[(0,o.Wm)(l,{value:e.nowPlaying,visible:e.musicShown,icon:"music"},null,8,["value","visible"]),(0,o.Wm)(l,{visible:e.nextRoundTimeVisible,icon:"clock"},{default:(0,o.w5)((()=>[e.nextRoundStartDiffNow>1?((0,o.wg)(),(0,o.iD)("span",p,[f,(0,o._)("span",v,"~"+(0,c.zw)(e.nextRoundStartDiffNow),1),w])):1===e.nextRoundStartDiffNow?((0,o.wg)(),(0,o.iD)("span",x,[g,(0,o._)("span",h,"~"+(0,c.zw)(e.nextRoundStartDiffNow),1),y])):((0,o.wg)(),(0,o.iD)("span",b," The stream will resume soon! "))])),_:1},8,["visible"])])])}]]),le={class:"intermission-next-up"},ce=(0,o._)("div",{class:"title"},"Next up",-1),me={class:"team-name-content-wrapper"},ue={class:"team-name"},de=(0,o._)("span",{class:"versus"},"vs",-1),pe={class:"team-name"},fe={class:"round-type"};var ve=t(3115);const we=(0,o.aZ)({name:"IntermissionNextUp",components:{OpacitySwapTransition:R.Z,FittedContent:I.Z},setup(){const e=(0,ve.o)();return{teamA:(0,o.Fl)((()=>e.nextRound.teamA)),teamB:(0,o.Fl)((()=>e.nextRound.teamB)),roundType:(0,o.Fl)((()=>{const n=e.nextRound.games.length;return"PLAY_ALL"===e.nextRound.round.type?`Play all ${n}`:`Best of ${n}`}))}}});var xe=t(4737),ge={};ge.styleTagTransform=N(),ge.setAttributes=B(),ge.insert=C().bind(null,"head"),ge.domAPI=z(),ge.insertStyleElement=L(),P()(xe.Z,ge),xe.Z&&xe.Z.locals&&xe.Z.locals;const he=(0,$.Z)(we,[["render",function(e,n,t,i,a,r){const s=(0,o.up)("fitted-content"),l=(0,o.up)("opacity-swap-transition");return(0,o.wg)(),(0,o.iD)("div",le,[ce,(0,o.Wm)(l,null,{default:(0,o.w5)((()=>{var n,t;return[((0,o.wg)(),(0,o.j4)(s,{key:`${null===(n=e.teamA)||void 0===n?void 0:n.name}_${null===(t=e.teamB)||void 0===t?void 0:t.name}`,"max-width":900,class:"next-team-names"},{default:(0,o.w5)((()=>{var n,t;return[(0,o._)("div",me,[(0,o._)("div",ue,(0,c.zw)(null===(n=e.teamA)||void 0===n?void 0:n.name),1),de,(0,o._)("div",pe,(0,c.zw)(null===(t=e.teamB)||void 0===t?void 0:t.name),1)])]})),_:1}))]})),_:1}),(0,o._)("span",fe,(0,c.zw)(e.roundType),1)])}]]);var ye=t(3144),be=t(1213);const Se=(0,o.aZ)({name:"Intermission",components:{OpacitySwapTransition:R.Z,IntermissionMain:se,IntermissionNextUp:he},setup(){const e=(0,ve.o)();return{activeBreakSlide:(0,be.r)([{component:"IntermissionMain"},{component:"IntermissionNextUp",enabled:(0,o.Fl)((()=>e.nextRound.showOnStream))}]).activeComponent,slideLeave(e,n){ye.ZP.to(e,{y:15,opacity:0,ease:"power2.in",duration:.5,onComplete:n})},beforeSlideEnter(e){ye.ZP.set(e,{y:-15,opacity:0})},slideEnter(e,n){ye.ZP.to(e,{y:0,opacity:1,ease:"power2.out",duration:.5,onComplete:n})}}}});var Ze=t(765),Te={};Te.styleTagTransform=N(),Te.setAttributes=B(),Te.insert=C().bind(null,"head"),Te.domAPI=z(),Te.insertStyleElement=L(),P()(Ze.Z,Te),Ze.Z&&Ze.Z.locals&&Ze.Z.locals;const _e=(0,$.Z)(Se,[["render",function(e,n,c,m,u,d){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",r,[(0,o._)("img",{class:"tournament-logo",src:t(5194)},null,8,s),(0,o._)("div",l,[(0,o.Wm)(i.uT,{mode:"out-in",onLeave:e.slideLeave,onEnter:e.slideEnter,onBeforeEnter:e.beforeSlideEnter},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.activeBreakSlide)))])),_:1},8,["onLeave","onEnter","onBeforeEnter"])])])])}]]);var ke,Re,Ie=t(4332);Re=function*(){const e=(0,i.ri)(_e);(0,Ie.H)(e),e.use((0,J.WB)()),yield ie(),yield(0,Y.B)(),yield(0,ve.I)(),e.mount("#app")},new((ke=void 0)||(ke=Promise))((function(e,n){function t(e){try{o(Re.next(e))}catch(e){n(e)}}function i(e){try{o(Re.throw(e))}catch(e){n(e)}}function o(n){var o;n.done?e(n.value):(o=n.value,o instanceof ke?o:new ke((function(e){e(o)}))).then(t,i)}o((Re=Re.apply(void 0,[])).next())}))},5194:(e,n,t)=>{e.exports=t.p+"0d10beebf1f2f618c5d7.png"}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return n[e](a,a.exports,i),a.loaded=!0,a.exports}i.m=n,e=[],i.O=(n,t,o,a)=>{if(!t){var r=1/0;for(m=0;m<e.length;m++){for(var[t,o,a]=e[m],s=!0,l=0;l<t.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every((e=>i.O[e](t[l])))?t.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(m--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[t,o,a]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"})(),(()=>{var e={908:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var o,a,[r,s,l]=t,c=0;if(r.some((n=>0!==e[n]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var m=l(i)}for(n&&n(t);c<r.length;c++)a=r[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(m)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=i.O(void 0,[453,171,293,324],(()=>i(4959)));o=i.O(o)})();