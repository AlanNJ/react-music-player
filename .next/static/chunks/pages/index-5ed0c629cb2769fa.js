(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1559)}])},1559:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x},index:function(){return h}});var r=t(5893),i=t(7294),o=t(5666),c=t.n(o),a=(t(8137),t(8193)),u=t(3990),s=t(9669),l=t.n(s);function f(e,n,t,r,i,o,c){try{var a=e[o](c),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,i)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function c(e){f(o,r,i,c,a,"next",e)}function a(e){f(o,r,i,c,a,"throw",e)}c(void 0)}))}}function m(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=function(e){var n=e.isPlaying,t=e.toPrevTrack,i=e.toNextTrack,o=e.setIsPlaying,s=e.setOpenModal,f=(e.openModal,d(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.target.files[0],console.log(t),(r=new FormData).append("file",t),console.log(m(r)),e.next=8,l().post("http://localhost:8000/api/upload-music",{formData:r});case 8:e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))));d(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().post("http://localhost:8000/api/upload-music",{x:n});case 2:t=e.sent,console.log(t.data);case 4:case"end":return e.stop()}}),e)})));return(0,r.jsxs)("div",{className:"button-container",children:[(0,r.jsx)(a.OzW,{onClick:function(e){document.querySelector(".add-song").click()}}),(0,r.jsx)("input",{type:"file",className:"add-song",accept:"audio/*",onChange:function(e){return f(e)}}),(0,r.jsx)(a.FtK,{onClick:t}),n?(0,r.jsx)(a.civ,{onClick:function(){return o(!1)}}):(0,r.jsx)(u.aHz,{onClick:function(){return o(!0)}}),(0,r.jsx)(a.rYR,{onClick:i}),(0,r.jsx)(a.oNu,{className:"love",onClick:function(){return s(!0)}})]})},g=(t(6982),function(e){var n=e.tracks,t=e.setTrackId,o=e.setOpenModal,c=e.openModal;console.log(n);return(0,i.useEffect)((function(){}),[c]),(0,r.jsx)("div",{className:"songs-container",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("ul",{children:n&&n.map((function(e){return(0,r.jsx)("li",{onClick:function(n){return function(e,n){t(n-1),c&&o(!1),e.target.className+="red"}(n,e.id)},children:e.title},e.id)}))})})})}),v=function(){var e=(0,i.useState)(0),n=e[0],t=e[1],o=(0,i.useState)(),c=o[0],a=o[1],u=(0,i.useState)(!1),s=u[0],l=u[1],f=(0,i.useState)(),d=(f[0],f[1],(0,i.useState)(!1)),m=d[0],v=d[1],h=(0,i.useState)(),x=h[0],y=h[1],j=(0,i.useState)(!1),k=(j[0],j[1],[{id:1,title:"y2mate.com - Eminem  Higher Official Video Explicit.mp3",artist:"string",audioSrc:"/y2mate.com - Eminem  Higher Official Video Explicit.mp3",image:"string",color:"string"},{id:2,title:"y2mate.com - Eminem  Higher Official Video Explicit.mp3",artist:"string",audioSrc:"/food_G1U6tlb.mp3",image:"string",color:"string"},{id:2,title:"y2mate.com - Eminem  Higher Official Video Explicit.mp3",artist:"string",audioSrc:"/food_G1U6tlb.mp3",image:"string",color:"string"},{id:2,title:"y2mate.com - Eminem  Higher Official Video Explicit.mp3",artist:"string",audioSrc:"/food_G1U6tlb.mp3",image:"string",color:"string"}]),E=k[n],w=E.title,N=(E.artist,E.color,E.image,E.audioSrc);if("undefined"!==typeof Audio){var S=(0,i.useRef)(new Audio(N)),T=(0,i.useRef)(),_=(0,i.useRef)(!1);y(S.current.duration)}(0,i.useEffect)((function(){return function(){S.current.pause(),clearInterval(T.current)}}),[]);var O=function(){t(n<k.length-1?n+1:0),console.log(n)};(0,i.useEffect)((function(){s?(S.current.play(),b(),console.log(S.current.currentTime),a(S.current.currentTime)):S.current.pause()}),[s]);var b=function(){clearInterval(T.current),T.current=setInterval((function(){S.current.ended?setTimeout((function(){O()}),[3e3]):a(S.current.currentTime)}),[1e3])};(0,i.useEffect)((function(){S.current.pause(),S.current=new Audio(N),console.log(S.current),a(S.current.currentTime),console.log(_.current),_.current?(S.current.play(),l(!0),b()):_.current=!0}),[n]),console.log(c);var C=function(){s||l(!0),b()};return(0,r.jsxs)("div",{className:"main-container",children:[(0,r.jsx)("div",{className:"circle"}),(0,r.jsx)("h1",{children:w}),(0,r.jsx)("input",{type:"range",value:c,step:"1",min:"0",max:x,className:"loader",onChange:function(e){return n=e.target.value,clearInterval(T.current),S.current.currentTime=n,a(S.current.currentTime),void b();var n},onMouseUp:C,onKeyUp:C}),(0,r.jsx)(p,{toNextTrack:O,toPrevTrack:function(){t(n-1<0?k.length-1:n-1),console.log(n)},isPlaying:s,setIsPlaying:l,setOpenModal:v}),m&&(0,r.jsx)(g,{tracks:k,setTrackId:t,setOpenModal:v,openModal:m})]})},h=function(){var e=(0,i.useState)("");e[0],e[1];return(0,r.jsx)("div",{className:"container",children:(0,r.jsx)(v,{})})},x=h}},function(e){e.O(0,[609,617,351,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);