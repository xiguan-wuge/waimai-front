import{e as l,d as _,c as H,m as F,q as ce,w as x,r as T,T as V,C as q,D as G,s as ie,k as Y,l as re,J as ue,K as de,F as fe,z as $,L as ve,M as me,j as ye,H as he}from"./index-5c713276.js";import{K as Ce,E as ke,c as D,k as w,L as ge,n as k,q as g,D as we,h as M,t as b,C as A,M as Oe,N as Se,p as Z,e as J,O as Ie,s as N,P as be,H as xe,r as Pe,Q as pe,J as ze,R as Te}from"./userRouterHook-d892abf0.js";import{u as Be,a as Q}from"./use-touch-854fcecf.js";import{I as W}from"./Header-6db2049e.js";function Le(e,{args:t=[],done:n,canceled:s}){if(e){const o=e.apply(null,t);Ce(o)?o.then(a=>{a?n():s&&s()}).catch(ke):o?n():s&&s()}else n()}let Ae=2e3;const _e=()=>++Ae,[De,z]=D("loading"),Ee=Array(12).fill(null).map((e,t)=>l("i",{class:z("line",String(t+1))},null)),$e=l("svg",{class:z("circular"),viewBox:"25 25 50 50"},[l("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Me={size:k,type:g("circular"),color:String,vertical:Boolean,textSize:k,textColor:String};var Ne=_({name:De,props:Me,setup(e,{slots:t}){const n=H(()=>w({color:e.color},ge(e.size))),s=()=>{const a=e.type==="spinner"?Ee:$e;return l("span",{class:z("spinner",e.type),style:n.value},[t.icon?t.icon():a])},o=()=>{var a;if(t.default)return l("span",{class:z("text"),style:{fontSize:we(e.textSize),color:(a=e.textColor)!=null?a:e.color}},[t.default()])};return()=>{const{type:a,vertical:c}=e;return l("div",{class:z([a,{vertical:c}]),"aria-live":"polite","aria-busy":!0},[s(),o()])}}});const Re=M(Ne),X={show:Boolean,zIndex:k,overlay:b,duration:k,teleport:[String,Object],lockScroll:b,lazyRender:b,beforeClose:Function,overlayStyle:Object,overlayClass:A,transitionAppear:Boolean,closeOnClickOverlay:b},mt=Object.keys(X);let P=0;const j="van-overflow-hidden";function je(e,t){const n=Be(),s="01",o="10",a=f=>{n.move(f);const r=n.deltaY.value>0?o:s,d=Se(f.target,e.value),{scrollHeight:h,offsetHeight:O,scrollTop:S}=d;let m="11";S===0?m=O>=h?"00":"01":S+O>=h&&(m="10"),m!=="11"&&n.isVertical()&&!(parseInt(m,2)&parseInt(r,2))&&Z(f,!0)},c=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",a,{passive:!1}),P||document.body.classList.add(j),P++},u=()=>{P&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",a),P--,P||document.body.classList.remove(j))},y=()=>t()&&c(),v=()=>t()&&u();Oe(y),F(v),ce(v),x(t,f=>{f?c():u()})}function ee(e){const t=T(!1);return x(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const[Ke,Ue]=D("overlay"),He={show:Boolean,zIndex:k,duration:k,className:A,lockScroll:b,lazyRender:b,customStyle:Object};var Fe=_({name:Ke,props:He,setup(e,{slots:t}){const n=T(),s=ee(()=>e.show||!e.lazyRender),o=c=>{e.lockScroll&&Z(c,!0)},a=s(()=>{var c;const u=w(Ie(e.zIndex),e.customStyle);return N(e.duration)&&(u.animationDuration=`${e.duration}s`),q(l("div",{ref:n,style:u,class:[Ue(),e.className]},[(c=t.default)==null?void 0:c.call(t)]),[[G,e.show]])});return J("touchmove",o,{target:n}),()=>l(V,{name:"van-fade",appear:!0},{default:a})}});const Ve=M(Fe),qe=w({},X,{round:Boolean,position:g("center"),closeIcon:g("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:g("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Ge,K]=D("popup");var Ye=_({name:Ge,inheritAttrs:!1,props:qe,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:s}){let o,a;const c=T(),u=T(),y=ee(()=>e.show||!e.lazyRender),v=H(()=>{const i={zIndex:c.value};if(N(e.duration)){const C=e.position==="center"?"animationDuration":"transitionDuration";i[C]=`${e.duration}s`}return i}),f=()=>{o||(o=!0,c.value=e.zIndex!==void 0?+e.zIndex:_e(),t("open"))},r=()=>{o&&Le(e.beforeClose,{done(){o=!1,t("close"),t("update:show",!1)}})},d=i=>{t("clickOverlay",i),e.closeOnClickOverlay&&r()},h=()=>{if(e.overlay)return l(Ve,{show:e.show,class:e.overlayClass,zIndex:c.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:d},{default:s["overlay-content"]})},O=i=>{t("clickCloseIcon",i),r()},S=()=>{if(e.closeable)return l(W,{role:"button",tabindex:0,name:e.closeIcon,class:[K("close-icon",e.closeIconPosition),xe],classPrefix:e.iconPrefix,onClick:O},null)};let m;const ne=()=>{m&&clearTimeout(m),m=setTimeout(()=>{t("opened")})},oe=()=>t("closed"),ae=i=>t("keydown",i),se=y(()=>{var i;const{round:C,position:B,safeAreaInsetTop:E,safeAreaInsetBottom:le}=e;return q(l("div",$({ref:u,style:v.value,role:"dialog",tabindex:0,class:[K({round:C,[B]:B}),{"van-safe-area-top":E,"van-safe-area-bottom":le}],onKeydown:ae},n),[(i=s.default)==null?void 0:i.call(s),S()]),[[G,e.show]])}),R=()=>{const{position:i,transition:C,transitionAppear:B}=e,E=i==="center"?"van-fade":`van-popup-slide-${i}`;return l(V,{name:C||E,appear:B,onAfterEnter:ne,onAfterLeave:oe},{default:se})};return x(()=>e.show,i=>{i&&!o&&(f(),n.tabindex===0&&ie(()=>{var C;(C=u.value)==null||C.focus()})),!i&&o&&(o=!1,t("close"))}),Q({popupRef:u}),je(u,()=>e.show&&e.lockScroll),J("popstate",()=>{e.closeOnPopstate&&(r(),a=!1)}),Y(()=>{e.show&&f()}),re(()=>{a&&(t("update:show",!0),a=!1)}),F(()=>{e.show&&e.teleport&&(r(),a=!0)}),ue(be,()=>e.show),()=>e.teleport?l(de,{to:e.teleport},{default:()=>[h(),R()]}):l(fe,null,[h(),R()])}});const Ze=M(Ye);let p=0;function Je(e){e?(p||document.body.classList.add("van-toast--unclickable"),p++):p&&(p--,p||document.body.classList.remove("van-toast--unclickable"))}const[Qe,I]=D("toast"),We=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],Xe={icon:String,show:Boolean,type:g("text"),overlay:Boolean,message:k,iconSize:k,duration:pe(2e3),position:g("middle"),teleport:[String,Object],wordBreak:String,className:A,iconPrefix:String,transition:g("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:A,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var et=_({name:Qe,props:Xe,emits:["update:show"],setup(e,{emit:t,slots:n}){let s,o=!1;const a=()=>{const r=e.show&&e.forbidClick;o!==r&&(o=r,Je(o))},c=r=>t("update:show",r),u=()=>{e.closeOnClick&&c(!1)},y=()=>clearTimeout(s),v=()=>{const{icon:r,type:d,iconSize:h,iconPrefix:O,loadingType:S}=e;if(r||d==="success"||d==="fail")return l(W,{name:r||d,size:h,class:I("icon"),classPrefix:O},null);if(d==="loading")return l(Re,{class:I("loading"),size:h,type:S},null)},f=()=>{const{type:r,message:d}=e;if(n.message)return l("div",{class:I("text")},[n.message()]);if(N(d)&&d!=="")return r==="html"?l("div",{key:0,class:I("text"),innerHTML:String(d)},null):l("div",{class:I("text")},[d])};return x(()=>[e.show,e.forbidClick],a),x(()=>[e.show,e.type,e.message,e.duration],()=>{y(),e.show&&e.duration>0&&(s=setTimeout(()=>{c(!1)},e.duration))}),Y(a),ve(a),()=>l(Ze,$({class:[I([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:u,onClosed:y,"onUpdate:show":c},Pe(e,We)),{default:()=>[v(),f()]})}});function tt(){const e=ye({show:!1}),t=o=>{e.show=o},n=o=>{w(e,o,{transitionAppear:!0}),t(!0)},s=()=>t(!1);return Q({open:n,close:s,toggle:t}),{open:n,close:s,state:e,toggle:t}}function nt(e){const t=me(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const ot={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let L=[],at=!1,U=w({},ot);const st=new Map;function te(e){return Te(e)?e:{message:e}}function lt(){const{instance:e,unmount:t}=nt({setup(){const n=T(""),{open:s,state:o,close:a,toggle:c}=tt(),u=()=>{},y=()=>l(et,$(o,{onClosed:u,"onUpdate:show":c}),null);return x(n,v=>{o.message=v}),he().render=y,{open:s,close:a,message:n}}});return e}function ct(){if(!L.length||at){const e=lt();L.push(e)}return L[L.length-1]}function it(e={}){if(!ze)return{};const t=ct(),n=te(e);return t.open(w({},U,st.get(n.type||U.type),n)),t}const rt=e=>t=>it(w({type:e},te(t))),yt=rt("success");export{Re as L,Ze as P,mt as a,it as b,Le as c,et as d,nt as m,X as p,yt as s,tt as u};