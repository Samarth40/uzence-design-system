let e;const t=new Uint8Array(16);function n(){if(!e&&(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(t)}const o=[];for(let f=0;f<256;++f)o.push((f+256).toString(16).slice(1));const r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function i(e,t,i){if(r.randomUUID&&!e)return r.randomUUID();const a=(e=e||{}).random||(e.rng||n)();return a[6]=15&a[6]|64,a[8]=63&a[8]|128,function(e,t=0){return o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]}(a)}const{addons:a}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:s}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:c}=__STORYBOOK_MODULE_GLOBAL__;var l={depth:10,clearOnStoryChange:!0,limit:50},p=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:p(n,t)},d=e=>{if("object"==typeof(t=e)&&t&&p(t,(e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name)))&&"function"==typeof t.persist){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),o=null==n?void 0:n.value;return"object"==typeof o&&"Window"===(null==o?void 0:o.constructor.name)&&Object.defineProperty(t,"view",{...n,value:Object.create(o.constructor.prototype)}),t}var t;return e};function u(e,t={}){let n={...l,...t},o=function(...o){var r,l;if(t.implicit){let t=null==(r="__STORYBOOK_PREVIEW__"in c?c.__STORYBOOK_PREVIEW__:void 0)?void 0:r.storyRenders.find((e=>"playing"===e.phase||"rendering"===e.phase));if(t){let n=!(null==(l=null==globalThis?void 0:globalThis.FEATURES)?void 0:l.disallowImplicitActionsInRenderV8),o=new s({phase:t.phase,name:e,deprecated:n});if(!n)throw o}}let p=a.getChannel(),u="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?i():Date.now().toString(36)+Math.random().toString(36).substring(2),_=o.map(d),O=o.length>1?_:_[0],g={id:u,count:0,data:{name:e,args:O},options:{...n,maxDepth:5+(n.depth||3),allowFunction:n.allowFunction||!1}};p.emit("storybook/actions/action-event",g)};return o.isAction=!0,o.implicit=t.implicit,o}var _=(e,t)=>typeof t[e]>"u"&&!(e in t),O=[e=>{let{initialArgs:t,argTypes:n,parameters:{actions:o}}=e;return(null==o?void 0:o.disable)||!n?{}:Object.entries(n).filter((([e,t])=>!!t.action)).reduce(((e,[n,o])=>(_(n,t)&&(e[n]=u("string"==typeof o.action?o.action:n)),e)),{})},e=>{let{initialArgs:t,argTypes:n,id:o,parameters:{actions:r}}=e;if(!r||r.disable||!r.argTypesRegex||!n)return{};let i=new RegExp(r.argTypesRegex);return Object.entries(n).filter((([e])=>!!i.test(e))).reduce(((e,[n,r])=>(_(n,t)&&(e[n]=u(n,{implicit:!0,id:o})),e)),{})}],g=!1,y=[e=>{let{parameters:{actions:t}}=e;if(!(null==t?void 0:t.disable)&&!g&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in c&&"function"==typeof c.__STORYBOOK_TEST_ON_MOCK_CALL__){(0,c.__STORYBOOK_TEST_ON_MOCK_CALL__)(((e,t)=>{let n=e.getMockName();"spy"!==n&&(!/^next\/.*::/.test(n)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some((e=>n.startsWith(e))))&&u(n)(t)})),g=!0}}];export{O as argsEnhancers,y as loaders};
