function t(t,e){if(!t)throw new Error("Invariant failed")}const{useEffect:e}=__STORYBOOK_MODULE_PREVIEW_API__,{global:o}=__STORYBOOK_MODULE_GLOBAL__;var i="measureEnabled";function n(){let t=o.document.documentElement,e=Math.max(t.scrollHeight,t.offsetHeight);return{width:Math.max(t.scrollWidth,t.offsetWidth),height:e}}function r(t,e,{width:i,height:n}){t.style.width=`${i}px`,t.style.height=`${n}px`;let r=o.window.devicePixelRatio;t.width=Math.floor(i*r),t.height=Math.floor(n*r),e.scale(r,r)}var l={};function h(){l.canvas||(l=function(){let e=o.document.createElement("canvas");e.id="storybook-addon-measure";let i=e.getContext("2d");t(null!=i);let{width:l,height:h}=n();return r(e,i,{width:l,height:h}),e.style.position="absolute",e.style.left="0",e.style.top="0",e.style.zIndex="2147483647",e.style.pointerEvents="none",o.document.body.appendChild(e),{canvas:e,context:i,width:l,height:h}}())}function f(){l.context&&l.context.clearRect(0,0,l.width??0,l.height??0)}var d={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"};function a(t,{x:e,y:o,w:i,h:n,r:r}){e-=i/2,o-=n/2,i<2*r&&(r=i/2),n<2*r&&(r=n/2),t.beginPath(),t.moveTo(e+r,o),t.arcTo(e+i,o,e+i,o+n,r),t.arcTo(e+i,o+n,e,o+n,r),t.arcTo(e,o+n,e,o,r),t.arcTo(e,o,e+i,o,r),t.closePath()}function p(t,e,{x:o,y:i,w:n,h:r},l){return a(t,{x:o,y:i,w:n,h:r,r:3}),t.fillStyle=`${d[e]}dd`,t.fill(),t.strokeStyle=d[e],t.stroke(),t.fillStyle=d.text,t.fillText(l,o,i),a(t,{x:o,y:i,w:n,h:r,r:3}),t.fillStyle=`${d[e]}dd`,t.fill(),t.strokeStyle=d[e],t.stroke(),t.fillStyle=d.text,t.fillText(l,o,i),{x:o,y:i,w:n,h:r}}function c(t,e){t.font="600 12px monospace",t.textBaseline="middle",t.textAlign="center";let o=t.measureText(e),i=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent;return{w:o.width+12,h:i+12}}function g(t,e,{type:o,position:i="center",text:n},r,l=!1){let{x:h,y:f}=function(t,{padding:e,border:o,width:i,height:n,top:r,left:l}){let h=i-o.left-o.right-e.left-e.right,f=n-e.top-e.bottom-o.top-o.bottom,d=l+o.left+e.left,a=r+o.top+e.top;return"top"===t?d+=h/2:"right"===t?(d+=h,a+=f/2):"bottom"===t?(d+=h/2,a+=f):"left"===t?a+=f/2:"center"===t&&(d+=h/2,a+=f/2),{x:d,y:a}}(i,e),{offsetX:d,offsetY:a}=function(t,e,{margin:o,border:i,padding:n},r,l){let h=t=>0,f=0,d=0,a=l?1:.5,p=l?2*r:0;return"padding"===t?h=t=>n[t]*a+p:"border"===t?h=t=>n[t]+i[t]*a+p:"margin"===t&&(h=t=>n[t]+i[t]+o[t]*a+p),"top"===e?d=-h("top"):"right"===e?f=h("right"):"bottom"===e?d=h("bottom"):"left"===e&&(f=-h("left")),{offsetX:f,offsetY:d}}(o,i,e,7,l);h+=d,f+=a;let{w:g,h:s}=c(t,n);if(r&&(m={x:h,y:f,w:g,h:s},u=r,Math.abs(m.x-u.x)<Math.abs(m.w+u.w)/2&&Math.abs(m.y-u.y)<Math.abs(m.h+u.h)/2)){let t=function(t,e,o){return"top"===t?e.y=o.y-o.h-6:"right"===t?e.x=o.x+o.w/2+6+e.w/2:"bottom"===t?e.y=o.y+o.h+6:"left"===t&&(e.x=o.x-o.w/2-6-e.w/2),{x:e.x,y:e.y}}(i,{x:h,y:f,w:g},r);h=t.x,f=t.y}var m,u;return p(t,o,{x:h,y:f,w:g,h:s},n)}function s(t,e,o,i){let n=[];o.forEach(((o,r)=>{let l=i&&"center"===o.position?function(t,e,{type:o,text:i}){let{floatingAlignment:n,extremities:r}=e,l=r[n.x],h=r[n.y],{w:f,h:d}=c(t,i),{offsetX:a,offsetY:g}=function(t,{w:e,h:o}){let i=.5*e+6,n=.5*o+6;return{offsetX:("left"===t.x?-1:1)*i,offsetY:("top"===t.y?-1:1)*n}}(n,{w:f,h:d});return l+=a,h+=g,p(t,o,{x:l,y:h,w:f,h:d},i)}(t,e,o):g(t,e,o,n[r-1],i);n[r]=l}))}var m="#f6b26ba8",u="#ffe599a8",w="#93c47d8c",b="#6fa8dca8";function x(t){return parseInt(t.replace("px",""),10)}function y(t){return Number.isInteger(t)?t:t.toFixed(2)}function v(t){return t.filter((t=>0!==t.text&&"0"!==t.text))}function R(t){let e=o.window.scrollY,i=o.window.scrollY+o.window.innerHeight,n=o.window.scrollX,r=o.window.scrollX+o.window.innerWidth,l=Math.abs(e-t.top),h=Math.abs(i-t.bottom);return{x:Math.abs(n-t.left)>Math.abs(r-t.right)?"left":"right",y:l>h?"top":"bottom"}}function E(t){return e=>{if(t&&e){let i=function(t){let e=o.getComputedStyle(t),{top:i,left:n,right:r,bottom:l,width:h,height:f}=t.getBoundingClientRect(),{marginTop:d,marginBottom:a,marginLeft:p,marginRight:c,paddingTop:g,paddingBottom:s,paddingLeft:m,paddingRight:u,borderBottomWidth:w,borderTopWidth:b,borderLeftWidth:y,borderRightWidth:v}=e;i+=o.window.scrollY,n+=o.window.scrollX,l+=o.window.scrollY,r+=o.window.scrollX;let E={top:x(d),bottom:x(a),left:x(p),right:x(c)},M={top:x(g),bottom:x(s),left:x(m),right:x(u)},S={top:x(b),bottom:x(w),left:x(y),right:x(v)},T={top:i-E.top,bottom:l+E.bottom,left:n-E.left,right:r+E.right};return{margin:E,padding:M,border:S,top:i,left:n,bottom:l,right:r,width:h,height:f,extremities:T,floatingAlignment:R(T)}}(t),n=function(t,{margin:e,width:o,height:i,top:n,left:r,bottom:l,right:h}){let f=i+e.bottom+e.top;return t.fillStyle=m,t.fillRect(r,n-e.top,o,e.top),t.fillRect(h,n-e.top,e.right,f),t.fillRect(r,l,o,e.bottom),t.fillRect(r-e.left,n-e.top,e.left,f),v([{type:"margin",text:y(e.top),position:"top"},{type:"margin",text:y(e.right),position:"right"},{type:"margin",text:y(e.bottom),position:"bottom"},{type:"margin",text:y(e.left),position:"left"}])}(e,i),r=function(t,{padding:e,border:o,width:i,height:n,top:r,left:l,bottom:h,right:f}){let d=i-o.left-o.right,a=n-e.top-e.bottom-o.top-o.bottom;return t.fillStyle=w,t.fillRect(l+o.left,r+o.top,d,e.top),t.fillRect(f-e.right-o.right,r+e.top+o.top,e.right,a),t.fillRect(l+o.left,h-e.bottom-o.bottom,d,e.bottom),t.fillRect(l+o.left,r+e.top+o.top,e.left,a),v([{type:"padding",text:e.top,position:"top"},{type:"padding",text:e.right,position:"right"},{type:"padding",text:e.bottom,position:"bottom"},{type:"padding",text:e.left,position:"left"}])}(e,i),l=function(t,{border:e,width:o,height:i,top:n,left:r,bottom:l,right:h}){let f=i-e.top-e.bottom;return t.fillStyle=u,t.fillRect(r,n,o,e.top),t.fillRect(r,l-e.bottom,o,e.bottom),t.fillRect(r,n+e.top,e.left,f),t.fillRect(h-e.right,n+e.top,e.right,f),v([{type:"border",text:e.top,position:"top"},{type:"border",text:e.right,position:"right"},{type:"border",text:e.bottom,position:"bottom"},{type:"border",text:e.left,position:"left"}])}(e,i),h=function(t,{padding:e,border:o,width:i,height:n,top:r,left:l}){let h=i-o.left-o.right-e.left-e.right,f=n-e.top-e.bottom-o.top-o.bottom;return t.fillStyle=b,t.fillRect(l+o.left+e.left,r+o.top+e.top,h,f),[{type:"content",position:"center",text:`${y(h)} x ${y(f)}`}]}(e,i);!function(t,e,o,i){let n=o.reduce(((t,e)=>{var o;return Object.prototype.hasOwnProperty.call(t,e.position)||(t[e.position]=[]),null==(o=t[e.position])||o.push(e),t}),{});n.top&&s(t,e,n.top,i),n.right&&s(t,e,n.right,i),n.bottom&&s(t,e,n.bottom,i),n.left&&s(t,e,n.left,i),n.center&&s(t,e,n.center,i)}(e,i,[...h,...r,...l,...n],i.width<=90||i.height<=30)}}}function M(t){var e;e=E(t),f(),e(l.context)}var S,T={x:0,y:0};function _(t,e){S=((t,e)=>{let i=o.document.elementFromPoint(t,e),n=o=>{if(o&&o.shadowRoot){let i=o.shadowRoot.elementFromPoint(t,e);return o.isEqualNode(i)?o:i.shadowRoot?n(i):i}return o};return n(i)||i})(t,e),M(S)}var B=[(o,i)=>{let{measureEnabled:d}=i.globals;return e((()=>{let t=t=>{window.requestAnimationFrame((()=>{t.stopPropagation(),T.x=t.clientX,T.y=t.clientY}))};return document.addEventListener("pointermove",t),()=>{document.removeEventListener("pointermove",t)}}),[]),e((()=>{let e=()=>{window.requestAnimationFrame((()=>{!function(){t(l.canvas),t(l.context),r(l.canvas,l.context,{width:0,height:0});let{width:e,height:o}=n();r(l.canvas,l.context,{width:e,height:o}),l.width=e,l.height=o}()}))};return"story"===i.viewMode&&d&&(document.addEventListener("pointerover",(t=>{window.requestAnimationFrame((()=>{t.stopPropagation(),_(t.clientX,t.clientY)}))})),h(),window.addEventListener("resize",e),_(T.x,T.y)),()=>{var t;window.removeEventListener("resize",e),l.canvas&&(f(),null==(t=l.canvas.parentNode)||t.removeChild(l.canvas),l={})}}),[d,i.viewMode]),o()}],L={[i]:!1};export{B as decorators,L as initialGlobals};
