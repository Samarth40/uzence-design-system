import{r as e}from"./index-D0A7G-Z-.js";import{r}from"./index-DMYBf6WL.js";import"./_commonjsHelpers-lGe4XDVY.js";var t,o=r;t=o.createRoot,o.hydrateRoot;var s=new Map;var l=({callback:r,children:t})=>{let o=e.useRef();return e.useLayoutEffect((()=>{o.current!==r&&(o.current=r,r())}),[r]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,r=null;return{promise:new Promise(((t,o)=>{e=t,r=o})),resolve:e,reject:r}});var n=async(r,t,o)=>{let s=await i(t,o);if(globalThis.IS_REACT_ACT_ENVIRONMENT)return void s.render(r);let{promise:n,resolve:a}=Promise.withResolvers();return s.render(e.createElement(l,{callback:a},r)),n},a=(e,r)=>{let t=s.get(e);t&&(t.unmount(),s.delete(e))},i=async(e,r)=>{let o=s.get(e);return o||(o=t(e,r),s.set(e,o)),o};export{n as renderElement,a as unmountElement};
