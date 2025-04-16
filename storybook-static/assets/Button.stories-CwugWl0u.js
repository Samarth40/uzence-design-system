var o,n,e,r,t,s,a,i,l,c,d,u,p,m,g,v,h,b,f,y,B,x,S,w,k,j,P,U,A,D,L,I,M,C,H,W;import{j as z}from"./jsx-runtime-D5LNt7Nr.js";import{B as O}from"./Button-D97DgPaP.js";import"./index-D0A7G-Z-.js";import"./_commonjsHelpers-lGe4XDVY.js";const F=()=>z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"})}),N=()=>z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"})}),R={title:"Forms/Button",component:O,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost","danger"],description:"Visual style of the button."},size:{control:{type:"radio"},options:["sm","md","lg"],description:"Size of the button."},children:{control:"text",description:"Button label text or node."},disabled:{control:"boolean",description:"Disables button interaction."},loading:{control:"boolean",description:"Shows a loading spinner and disables interaction."},fullWidth:{control:"boolean",description:"Makes the button span the full width of its container."},icon:{control:!1,description:"Optional icon element."},iconPosition:{control:{type:"radio"},options:["left","right"],description:"Position of the icon relative to the children.",if:{arg:"icon"}},onClick:{action:"clicked",description:"Click event handler."}},parameters:{docs:{description:{component:"\n## Button\n\nA standard button component for triggering actions. Supports multiple visual styles, sizes, icons, loading, and disabled states.\n\n### Use Cases\n- **Primary Actions**: Use primary variant for the main call-to-action in a view\n- **Secondary Actions**: Use secondary variant for supporting actions\n- **Dangerous Actions**: Use danger variant for destructive actions (delete, remove)\n- **Subtle Actions**: Use ghost variant for less prominent actions\n- **Navigation**: Use outline variant for navigation-style buttons\n\n### Anatomy\n```\n<Button>\n  [Icon] (optional)\n  [Label]\n  [Icon] (optional)\n</Button>\n```\n\n### Interaction Behavior\n- **Hover**: Visual feedback with color/shadow changes\n- **Focus**: Visible focus ring for keyboard navigation\n- **Active**: Pressed state styling\n- **Disabled**: Reduced opacity and no interaction\n- **Loading**: Spinner animation and disabled state\n\n### Accessibility Checklist\n- [x] Uses semantic `<button>` element\n- [x] Includes visible focus states\n- [x] Supports keyboard navigation\n- [x] Provides loading state feedback\n- [x] Handles disabled state properly\n- [x] Includes ARIA attributes when needed\n- [x] Maintains sufficient color contrast\n- [x] Supports screen readers\n\n### Theming\nThe button supports the following theme variables:\n- `--color-primary`: Primary button background\n- `--color-primary-hover`: Primary button hover state\n- `--color-secondary`: Secondary button background\n- `--color-text`: Button text color\n- `--color-border`: Outline button border color\n\n### Do's and Don'ts\n✅ **Do:**\n- Use clear, action-oriented labels\n- Maintain consistent button hierarchy\n- Use appropriate variants for different actions\n- Include loading states for async actions\n- Ensure sufficient contrast ratios\n\n❌ **Don't:**\n- Use buttons for navigation (use links instead)\n- Overload buttons with too much text\n- Mix different button styles without clear hierarchy\n- Use disabled buttons as the only way to prevent actions\n- Hide important actions behind ghost buttons\n\n### Examples\nSee the stories below for different button configurations and states.\n        "}}}},T=o=>z.jsx(O,{...o}),V=T.bind({});V.args={variant:"primary",children:"Primary Button"};const E=T.bind({});E.args={variant:"secondary",children:"Secondary Button"};const G=T.bind({});G.args={variant:"outline",children:"Outline Button"};const Z=T.bind({});Z.args={variant:"ghost",children:"Ghost Button"};const _=T.bind({});_.args={variant:"danger",children:"Danger Button"};const q=T.bind({});q.args={size:"sm",children:"Small Button"};const J=T.bind({});J.args={size:"lg",children:"Large Button"};const K=T.bind({});K.args={children:"Settings",icon:z.jsx(N,{}),iconPosition:"left"};const Q=T.bind({});Q.args={children:"User Profile",icon:z.jsx(F,{}),iconPosition:"right",variant:"secondary"};const X=T.bind({});X.args={children:"Disabled Button",disabled:!0};const Y=T.bind({});Y.args={children:"Saving...",loading:!0};const $=T.bind({});$.args={children:"Full Width Button",fullWidth:!0},V.parameters={...V.parameters,docs:{...null==(o=V.parameters)?void 0:o.docs,source:{originalSource:"args => <Button {...args} />",...null==(e=null==(n=V.parameters)?void 0:n.docs)?void 0:e.source}}},E.parameters={...E.parameters,docs:{...null==(r=E.parameters)?void 0:r.docs,source:{originalSource:"args => <Button {...args} />",...null==(s=null==(t=E.parameters)?void 0:t.docs)?void 0:s.source}}},G.parameters={...G.parameters,docs:{...null==(a=G.parameters)?void 0:a.docs,source:{originalSource:"args => <Button {...args} />",...null==(l=null==(i=G.parameters)?void 0:i.docs)?void 0:l.source}}},Z.parameters={...Z.parameters,docs:{...null==(c=Z.parameters)?void 0:c.docs,source:{originalSource:"args => <Button {...args} />",...null==(u=null==(d=Z.parameters)?void 0:d.docs)?void 0:u.source}}},_.parameters={..._.parameters,docs:{...null==(p=_.parameters)?void 0:p.docs,source:{originalSource:"args => <Button {...args} />",...null==(g=null==(m=_.parameters)?void 0:m.docs)?void 0:g.source}}},q.parameters={...q.parameters,docs:{...null==(v=q.parameters)?void 0:v.docs,source:{originalSource:"args => <Button {...args} />",...null==(b=null==(h=q.parameters)?void 0:h.docs)?void 0:b.source}}},J.parameters={...J.parameters,docs:{...null==(f=J.parameters)?void 0:f.docs,source:{originalSource:"args => <Button {...args} />",...null==(B=null==(y=J.parameters)?void 0:y.docs)?void 0:B.source}}},K.parameters={...K.parameters,docs:{...null==(x=K.parameters)?void 0:x.docs,source:{originalSource:"args => <Button {...args} />",...null==(w=null==(S=K.parameters)?void 0:S.docs)?void 0:w.source}}},Q.parameters={...Q.parameters,docs:{...null==(k=Q.parameters)?void 0:k.docs,source:{originalSource:"args => <Button {...args} />",...null==(P=null==(j=Q.parameters)?void 0:j.docs)?void 0:P.source}}},X.parameters={...X.parameters,docs:{...null==(U=X.parameters)?void 0:U.docs,source:{originalSource:"args => <Button {...args} />",...null==(D=null==(A=X.parameters)?void 0:A.docs)?void 0:D.source}}},Y.parameters={...Y.parameters,docs:{...null==(L=Y.parameters)?void 0:L.docs,source:{originalSource:"args => <Button {...args} />",...null==(M=null==(I=Y.parameters)?void 0:I.docs)?void 0:M.source}}},$.parameters={...$.parameters,docs:{...null==(C=$.parameters)?void 0:C.docs,source:{originalSource:"args => <Button {...args} />",...null==(W=null==(H=$.parameters)?void 0:H.docs)?void 0:W.source}}};const oo=["Primary","Secondary","Outline","Ghost","Danger","Small","Large","IconLeft","IconRight","Disabled","Loading","FullWidth"];export{_ as Danger,X as Disabled,$ as FullWidth,Z as Ghost,K as IconLeft,Q as IconRight,J as Large,Y as Loading,G as Outline,V as Primary,E as Secondary,q as Small,oo as __namedExportsOrder,R as default};
