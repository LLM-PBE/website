(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{4558:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/insights",function(){return n(3298)}])},3298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var i=n(5893),a=n(7294),o=n(2191),r=n(8590),l=n(8565);function c(e,t){return n=>{if("string"!=typeof n||0===n.trim().length)throw Error(t);return`${e}-${n}`}}var s=n(9429),d=n(3637),h=n(987),m=n(9581),u=n(8952);function v({style:e,size:t=16,...n}){return a.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,l.h)(t),height:(0,l.h)(t),display:"block"},...n},a.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}v.displayName="@mantine/core/AccordionChevron";var g=n(9535),p=n(679);let[f,y]=(0,p.R)("Accordion component was not found in the tree"),[b,x]=(0,p.R)("Accordion.Item component was not found in the tree");var j={root:"m-9bdbb667",panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"};let k={},w=(0,g.d)((e,t)=>{let{classNames:n,className:i,style:o,styles:r,vars:l,value:c,...s}=(0,h.w)("AccordionItem",k,e),d=y();return a.createElement(b,{value:{value:c}},a.createElement(u.x,{ref:t,mod:{active:d.isItemActive(c)},...d.getStyles("item",{className:i,classNames:n,styles:r,style:o,variant:d.variant}),...s}))});w.displayName="@mantine/core/AccordionItem",w.classes=j;var _=n(8554),T=n(5984),C=n(3935),E=n(700),A=n(6645);function M(e){return e?.current?e.current.scrollHeight:"auto"}let S="undefined"!=typeof window&&window.requestAnimationFrame,I={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},$=(0,g.d)((e,t)=>{let{children:n,in:i,transitionDuration:o,transitionTimingFunction:r,style:l,onTransitionEnd:c,animateOpacity:s,...d}=(0,h.w)("Collapse",I,e),m=(0,T.rZ)(),v=(0,_.J)(),g=m.respectReducedMotion&&v?0:o,p=function({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:n=()=>{},opened:i}){let o=(0,a.useRef)(null),r={display:"none",height:0,overflow:"hidden"},[l,c]=(0,a.useState)(i?{}:r),s=e=>{(0,C.flushSync)(()=>c(e))},d=e=>{s(t=>({...t,...e}))};function h(n){let i=e||function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(n);return{transition:`height ${i}ms ${t}`}}(0,E.l)(()=>{"function"==typeof S&&(i?S(()=>{d({willChange:"height",display:"block",overflow:"hidden"}),S(()=>{let e=M(o);d({...h(e),height:e})})}):S(()=>{let e=M(o);d({...h(e),willChange:"height",height:e}),S(()=>d({height:0,overflow:"hidden"}))}))},[i]);let m=e=>{if(e.target===o.current&&"height"===e.propertyName){if(i){let e=M(o);e===l.height?s({}):d({height:e}),n()}else 0===l.height&&(s(r),n())}};return function({style:e={},refKey:t="ref",...n}={}){let a=n[t];return{"aria-hidden":!i,...n,[t]:(0,A.lq)(o,a),onTransitionEnd:m,style:{boxSizing:"border-box",...e,...l}}}}({opened:i,transitionDuration:g,transitionTimingFunction:r,onTransitionEnd:c});return 0===g?i?a.createElement(u.x,{...d},n):null:a.createElement(u.x,{...p({style:function e(t,n){return Array.isArray(t)?[...t].reduce((t,i)=>({...t,...e(i,n)}),{}):"function"==typeof t?t(n):null==t?{}:t}(l,m),ref:t,...d})},a.createElement("div",{style:{opacity:i||!s?1:0,transition:s?`opacity ${g}ms ${r}`:"none"}},n))});$.displayName="@mantine/core/Collapse";let N={},P=(0,g.d)((e,t)=>{let{classNames:n,className:i,style:o,styles:r,vars:l,children:c,...s}=(0,h.w)("AccordionPanel",N,e),{value:d}=x(),m=y();return a.createElement($,{ref:t,...m.getStyles("panel",{className:i,classNames:n,style:o,styles:r}),...s,in:m.isItemActive(d),transitionDuration:m.transitionDuration??200,role:"region",id:m.getRegionId(d),"aria-labelledby":m.getControlId(d)},a.createElement("div",{...m.getStyles("content",{classNames:n,styles:r})},c))});P.displayName="@mantine/core/AccordionPanel",P.classes=j;var R=n(3552),z=n(1166);let D={},L=(0,g.d)((e,t)=>{let{classNames:n,className:i,style:o,styles:r,vars:l,chevron:c,icon:s,onClick:d,onKeyDown:m,children:v,disabled:g,...p}=(0,h.w)("AccordionControl",D,e),{value:f}=x(),b=y(),j=b.isItemActive(f),k="number"==typeof b.order,w=`h${b.order}`,_=a.createElement(z.k,{...p,...b.getStyles("control",{className:i,classNames:n,style:o,styles:r,variant:b.variant}),unstyled:b.unstyled,mod:["accordion-control",{active:j,"chevron-position":b.chevronPosition,disabled:g}],ref:t,onClick:e=>{d?.(e),b.onChange(f)},type:"button",disabled:g,"aria-expanded":j,"aria-controls":b.getRegionId(f),id:b.getControlId(f),onKeyDown:(0,R.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:b.loop,orientation:"vertical",onKeyDown:m})},a.createElement(u.x,{component:"span",mod:{rotate:!b.disableChevronRotation&&j,position:b.chevronPosition},...b.getStyles("chevron",{classNames:n,styles:r})},c||b.chevron),a.createElement("span",{...b.getStyles("label",{classNames:n,styles:r})},v),s&&a.createElement(u.x,{component:"span",mod:{"chevron-position":b.chevronPosition},...b.getStyles("icon",{classNames:n,styles:r})},s));return k?a.createElement(w,{...b.getStyles("itemTitle",{classNames:n,styles:r})},_):_});L.displayName="@mantine/core/AccordionControl",L.classes=j;let Z={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:a.createElement(v,null)},F=(0,d.Z)((e,{transitionDuration:t,chevronSize:n,radius:i})=>({root:{"--accordion-transition-duration":void 0===t?void 0:`${t}ms`,"--accordion-chevron-size":void 0===n?void 0:(0,l.h)(n),"--accordion-radius":void 0===i?void 0:(0,s.H5)(i)}}));function H(e){let t=(0,h.w)("Accordion",Z,e),{classNames:n,className:i,style:l,styles:s,unstyled:d,vars:v,children:g,multiple:p,value:y,defaultValue:b,onChange:x,id:k,loop:w,transitionDuration:_,disableChevronRotation:T,chevronPosition:C,chevronSize:E,order:A,chevron:M,variant:S,radius:I,...$}=t,N=(0,o.M)(k),[P,R]=(0,r.C)({value:y,defaultValue:b,finalValue:p?[]:null,onChange:x}),z=(0,m.y)({name:"Accordion",classes:j,props:t,className:i,style:l,classNames:n,styles:s,unstyled:d,vars:v,varsResolver:F});return a.createElement(f,{value:{isItemActive:e=>Array.isArray(P)?P.includes(e):e===P,onChange:e=>{R(Array.isArray(P)?P.includes(e)?P.filter(t=>t!==e):[...P,e]:e===P?null:e)},getControlId:c(`${N}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:c(`${N}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:_,disableChevronRotation:T,chevronPosition:C,order:A,chevron:M,loop:w,getStyles:z,variant:S,unstyled:d}},a.createElement(u.x,{...z("root"),id:N,...$,variant:S,"data-accordion":!0},g))}H.extend=e=>e,H.classes=j,H.displayName="@mantine/core/Accordion",H.Item=w,H.Panel=P,H.Control=L,H.Chevron=v;var O=n(3078),q=n(8008),W=n(8207),B=n(2290),K=n.n(B),V=n(853),G=(0,V.Z)("ghost","IconGhost",[["path",{d:"M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7",key:"svg-0"}],["path",{d:"M10 10l.01 0",key:"svg-1"}],["path",{d:"M14 10l.01 0",key:"svg-2"}],["path",{d:"M10 14a3.5 3.5 0 0 0 4 0",key:"svg-3"}]]),X=(0,V.Z)("scale","IconScale",[["path",{d:"M7 20l10 0",key:"svg-0"}],["path",{d:"M6 6l6 -1l6 1",key:"svg-1"}],["path",{d:"M12 3l0 17",key:"svg-2"}],["path",{d:"M9 12l-3 -6l-3 6a3 3 0 0 0 6 0",key:"svg-3"}],["path",{d:"M21 12l-3 -6l-3 6a3 3 0 0 0 6 0",key:"svg-4"}]]),J=(0,V.Z)("shield-half-filled","IconShieldHalfFilled",[["path",{d:"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3",key:"svg-0"}],["path",{d:"M12 3v18",key:"svg-1"}],["path",{d:"M12 11h8.9",key:"svg-2"}],["path",{d:"M12 8h8.9",key:"svg-3"}],["path",{d:"M12 5h3.1",key:"svg-4"}],["path",{d:"M12 17h6.2",key:"svg-5"}],["path",{d:"M12 14h8",key:"svg-6"}]]),Q=(0,V.Z)("lock-square","IconLockSquare",[["path",{d:"M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z",key:"svg-0"}],["path",{d:"M10 11v-2a2 2 0 1 1 4 0v2",key:"svg-1"}],["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-2"}]]),U=n(1329);let Y=[{emoji:(0,i.jsx)(G,{}),value:"Effect of Model Size",description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U.default,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Takeaways:"}),(0,i.jsx)("p",{children:"As the size of LLMs increases, there is a decrease in their susceptibility to jailbreaking, likely due to more rigorous policy-related instruction tuning. Concurrently, these larger models exhibit an enhanced capability for data extraction, as a result of their advanced memorization capacities."})]})]})},{emoji:(0,i.jsx)(X,{}),value:"Effect of Data Characteristics",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Takeaways:"}),(0,i.jsx)("p",{})]})})},{emoji:(0,i.jsx)(J,{}),value:"Privacy Risks over Time",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Takeaways:"}),(0,i.jsx)("p",{})]})})},{emoji:(0,i.jsx)(Q,{}),value:"Practicality of PETs",description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Takeaways:"}),(0,i.jsx)("p",{})]})})}];function ee(){let e=Y.map(e=>(0,i.jsxs)(H.Item,{value:e.value,children:[(0,i.jsx)(H.Control,{icon:e.emoji,children:e.value}),(0,i.jsx)(H.Panel,{children:e.description})]},e.value));return(0,i.jsxs)(O.W,{children:[(0,i.jsx)(q.D,{order:1,className:K().pagetitle,children:"Insights"}),(0,i.jsx)(W.K,{bg:"var(--mantine-color-body)",gap:"sm",children:(0,i.jsx)(H,{variant:"contained",radius:"md",defaultValue:"Apples",children:e})})]})}},1329:function(e,t,n){"use strict";n.r(t);var i=n(5893);n(7294);var a=n(5503);t.default=()=>{let e=[{model:"llama-2-70b-chat",correct:(0,i.jsx)("b",{children:"4.59"}),local:"13.68",domain:"14.25",average:"10.84"},{model:"llama-2-13b-chat",correct:"3.72",local:"12.42",domain:"13.77",average:"9.97"},{model:"llama-2-7b-chat",correct:"3.54",local:"12.24",domain:"12.75",average:"9.51"},{model:"vicuna-13b-v1.5",correct:(0,i.jsx)("b",{children:"4.02"}),local:"13.41",domain:"15.03",average:"10.82"},{model:"vicuna-7b-v1.5",correct:"3.54",local:"11.49",domain:"14.82",average:"9.95"},{model:"falcon-40b-instruct",correct:(0,i.jsx)("b",{children:"3.99"}),local:"12.00",domain:"13.38",average:"9.79"},{model:"falcon-7b-instruct",correct:"2.28",local:"9.06",domain:"11.07",average:"7.47"}].map(e=>(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Td,{children:e.model}),(0,i.jsx)(a.i.Td,{children:e.correct}),(0,i.jsx)(a.i.Td,{children:e.local}),(0,i.jsx)(a.i.Td,{children:e.domain}),(0,i.jsx)(a.i.Td,{children:e.average})]},e.model));return(0,i.jsxs)(a.i,{striped:!0,highlightOnHover:!0,withTableBorder:!0,captionSide:"bottom",children:[(0,i.jsx)(a.i.Caption,{children:"Table 1. Table 1. The data extraction accuracy on Enron. “correct”, “local”, and ”domain” measures the extraction accuracy of the whole email address, the local part, and the domain part, respectively."}),(0,i.jsx)(a.i.Thead,{children:(0,i.jsxs)(a.i.Tr,{children:[(0,i.jsx)(a.i.Th,{children:"Model"}),(0,i.jsx)(a.i.Th,{children:"Correct"}),(0,i.jsx)(a.i.Th,{children:"Local"}),(0,i.jsx)(a.i.Th,{children:"Domain"}),(0,i.jsx)(a.i.Th,{children:"Average"})]})}),(0,i.jsx)(a.i.Tbody,{children:e})]})}},2290:function(e){e.exports={pagetitle:"common_pagetitle__4xBA6",block_orange:"common_block_orange__1r4bT",block_red:"common_block_red__sfVw_",block_green:"common_block_green__4w83L",block_blue:"common_block_blue__Ru_Ps",bibtext:"common_bibtext__b6Cmh"}},8207:function(e,t,n){"use strict";n.d(t,{K:function(){return u}});var i=n(7294),a=n(9429),o=n(3637),r=n(987),l=n(9581),c=n(8952),s=n(9535),d={root:"m-6d731127"};let h={gap:"md",align:"stretch",justify:"flex-start"},m=(0,o.Z)((e,{gap:t,align:n,justify:i})=>({root:{"--stack-gap":(0,a.bG)(t),"--stack-align":n,"--stack-justify":i}})),u=(0,s.d)((e,t)=>{let n=(0,r.w)("Stack",h,e),{classNames:a,className:o,style:s,styles:u,unstyled:v,vars:g,align:p,justify:f,gap:y,variant:b,...x}=n,j=(0,l.y)({name:"Stack",props:n,classes:d,className:o,style:s,classNames:a,styles:u,unstyled:v,vars:g,varsResolver:m});return i.createElement(c.x,{ref:t,...j("root"),variant:b,...x})});u.classes=d,u.displayName="@mantine/core/Stack"},8008:function(e,t,n){"use strict";n.d(t,{D:function(){return v}});var i=n(7294),a=n(3637),o=n(987),r=n(9581),l=n(8952),c=n(9535),s=n(8565);let d=["h1","h2","h3","h4","h5","h6"];var h={root:"m-8a5d1357"};let m={order:1},u=(0,a.Z)((e,{order:t,size:n,lineClamp:i})=>{let a=function(e,t){let n=void 0!==t?t:`h${e}`;return d.includes(n)?{fontSize:`var(--mantine-${n}-font-size)`,fontWeight:`var(--mantine-${n}-font-weight)`,lineHeight:`var(--mantine-${n}-line-height)`}:{fontSize:(0,s.h)(n),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,n);return{root:{"--title-fw":a.fontWeight,"--title-lh":a.lineHeight,"--title-fz":a.fontSize,"--title-line-clamp":"number"==typeof i?i.toString():void 0}}}),v=(0,c.d)((e,t)=>{let n=(0,o.w)("Title",m,e),{classNames:a,className:c,style:s,styles:d,unstyled:v,order:g,vars:p,size:f,variant:y,lineClamp:b,...x}=n,j=(0,r.y)({name:"Title",props:n,classes:h,className:c,style:s,classNames:a,styles:d,unstyled:v,vars:p,varsResolver:u});return[1,2,3,4,5,6].includes(g)?i.createElement(l.x,{...j("root"),component:`h${g}`,variant:y,ref:t,mod:{order:g,"data-line-clamp":"number"==typeof b},size:f,...x}):null});v.classes=h,v.displayName="@mantine/core/Title"}},function(e){e.O(0,[503,774,888,179],function(){return e(e.s=4558)}),_N_E=e.O()}]);