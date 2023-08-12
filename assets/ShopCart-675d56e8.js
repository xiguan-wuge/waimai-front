import{c as l,B as M,r as E,d as N,o as u,a as d,C as S,D as g,b as s,n as x,E as L,t as p,_ as I,w as R,g as z,e as y,v as V,T as F,F as J,f as Z,u as w,p as q,h as W}from"./index-5c713276.js";const v="selectedCount";let c;function $(e,t){c==null||c.changeCount(e,t)}function G(){c.clearCartLsit()}l(()=>{let e=0;return c&&c.cartList.forEach(t=>{t[v]&&(e+=t[v])}),e});const xe=l(()=>{let e=0;return c&&c.cartList.forEach(t=>{e+=t.price*(t[v]||0)}),e});function ye(e,t){e[v]=t}function Q(){c=X();const e=l(()=>c.cartList),t=l(()=>c.currentFoodKey),a=l(()=>c.currentFoodCount);return{store:c,cartList:e,currentFoodKey:t,currentFoodCount:a,handleStepper:$,clearCart:G}}const X=M("Cart",{state:()=>({cartList:[],currentFoodKey:"",currentFoodCount:0}),actions:{refreshCurKey(){this.currentFoodKey=""},setCartList(e){this.currentFoodKey="all",this.cartList=e},clearCartLsit(){this.cartList=[]},changeCount(e,t){this.currentFoodKey=e.key,this.currentFoodCount=t;const a=this.cartList.findIndex(h=>h.key===e.key);a>-1?t?this.cartList[a][v]=t:this.cartList.splice(a,1):this.cartList.push({...e,[v]:t})}}}),P={0:"待选择",1:"去下单",2:"确定下单",3:"已下单",4:"已付款"};let m=E(0);function K(e){m.value=e}function ee(e){return[1,2,4].indexOf(e)>-1}const te={class:"stepper flex-center"},ae=N({__name:"Stepper",props:{modelValue:{type:Number,default:0},max:{type:Number,default:0},min:{type:Number,defult:0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=e,h=l(()=>!!(a.max&&a.modelValue===a.max)),A=l(()=>a.modelValue===a.min);function _(n){if(n&&h.value||!n&&A.value)return;const r=n?a.max&&a.modelValue===a.max?a.max:a.modelValue+1:a.modelValue===a.min?a.min:a.modelValue-1;t("change",r)}return(n,r)=>(u(),d("div",te,[S(s("div",{class:x(["sub flex-center",{dis:A.value}]),onClick:r[0]||(r[0]=L(k=>_(!1),["stop"]))}," - ",2),[[g,e.modelValue]]),S(s("div",{class:"num"},p(e.modelValue),513),[[g,e.modelValue]]),s("div",{class:x(["add flex-center",{dis:h.value}]),onClick:r[1]||(r[1]=L(k=>_(!0),["stop"]))}," + ",2)]))}});const se=I(ae,[["__scopeId","data-v-39aecfab"]]),ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAANVJREFUSA3tVtsKwjAMtbY/5oMvCv5Fof2iXn5DVFDwz9pKHgYh23qbyJANxpKTnGQ5bdnYrnBZa28ppVMujTF2V0qdczn7XBBipSa1OaLUaIhrrdlg46cxJmF/zi5ONEdsxZn3/hlCOLYSW/I55y+YaFKSlkLNuaB3rea54lN1frZG62jknHvDjWWqxTAH7Ow5ijEeKKEWo7x1SEffaom/TdSt3iZdt3TZAyuEuNLKtdiIRwHsSykv2Ae7FqO8/9sMk2v0jY9fSboHTej14V+vl7uI9wFERUgvIKaf/QAAAABJRU5ErkJggg==",B=e=>(q("data-v-9b7b149b"),e=e(),W(),e),oe={class:"shopcart"},ce={class:"cart-content"},le={class:"price"},re={key:0,class:"price-count"},ie={key:1,class:"price-nor"},ue={key:1,class:"multi"},de={class:"cart-list"},ve={class:"cart-title"},pe={class:"cart-title-name"},he=B(()=>s("img",{src:ne,alt:""},null,-1)),_e=B(()=>s("span",null,"清空",-1)),me=[he,_e],fe={class:"list"},Ce={class:"name"},Se={class:"price"},ge={class:"food-handle"},Ae=N({__name:"ShopCart",emits:["handle","edit","revoke"],setup(e,{emit:t}){const{cartList:a,handleStepper:h,clearCart:A}=Q(),_=l(()=>a.value),n=l(()=>{let o=0;return _.value.forEach(i=>{o+=i[v]||0}),o}),r=l(()=>{let o=0;return _.value.forEach(i=>{o+=(i[v]||0)*i.price}),o}),k=l(()=>{let o=!1;return console.log("curOrderStatus",m.value),o=ee(m.value),o}),O=l(()=>P[m.value+""]);R(n,(o,i)=>{console.log("cart-count-val",o,i),o>=1&&i===0?K(1):i>=1&&o===0&&K(0),console.log("status",m.value)});const f=E(!1);function b(){f.value=!f.value}function T(){f.value=!1,A()}function D(){t("revoke")}function j(){t("edit")}function U(){t("handle",m.value)}return(o,i)=>(u(),d("div",oe,[s("div",ce,[s("div",{class:"cart",onClick:b},[s("div",{class:x(["icon",{"icon-nor":!n.value}])},[S(s("span",{class:"count"},p(n.value),513),[[g,n.value]])],2),s("p",le,[r.value?(u(),d("span",re,"￥"+p(r.value),1)):(u(),d("span",ie,"购物车是空的"))])]),n.value?(u(),d("div",{key:0,class:x(["handle",{"handle-multi":!k.value}])},[k.value?(u(),d("div",{key:0,class:"single flex-center",onClick:U},p(O.value),1)):(u(),d("div",ue,[s("div",{class:"multi-item flex-center",onClick:D},"撤销"),s("div",{class:"multi-item flex-center multi-edit",onClick:j},"编辑")]))],2)):z("",!0)]),y(F,{name:"up"},{default:V(()=>[S(s("div",de,[s("p",ve,[s("span",pe,"已选商品"+p(n.value)+"件",1),s("span",{class:"cart-title-handle",onClick:T},me)]),s("div",fe,[(u(!0),d(J,null,Z(_.value,(C,Y)=>(u(),d("div",{class:"list-item van-hairline--bottom",key:Y},[s("div",Ce,p(C.name),1),s("div",Se,"￥"+p(C.price),1),s("div",ge,[y(se,{"model-value":C[w(v)],max:C.count,onChange:H=>w(h)(C,H)},null,8,["model-value","max","onChange"])])]))),128))])],512),[[g,f.value&&n.value]])]),_:1}),y(F,{name:"fade"},{default:V(()=>[S(s("div",{class:"mask",onClick:b},null,512),[[g,f.value&&n.value]])]),_:1})]))}});const be=I(Ae,[["__scopeId","data-v-9b7b149b"]]);export{be as S,se as a,ye as b,K as c,Q as d,m as e,v as s,xe as t,X as u};
