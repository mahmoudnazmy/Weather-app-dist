(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ln(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ze={},xs=[],Gt=()=>{},oo=()=>!1,Wr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),of=t=>t.startsWith("onUpdate:"),Qe=Object.assign,af=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},m0=Object.prototype.hasOwnProperty,rt=(t,e)=>m0.call(t,e),ye=Array.isArray,Es=t=>zs(t)==="[object Map]",Xr=t=>zs(t)==="[object Set]",_d=t=>zs(t)==="[object Date]",g0=t=>zs(t)==="[object RegExp]",Ie=t=>typeof t=="function",Ve=t=>typeof t=="string",xn=t=>typeof t=="symbol",lt=t=>t!==null&&typeof t=="object",lf=t=>(lt(t)||Ie(t))&&Ie(t.then)&&Ie(t.catch),am=Object.prototype.toString,zs=t=>am.call(t),_0=t=>zs(t).slice(8,-1),Nl=t=>zs(t)==="[object Object]",cf=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ji=Ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),v0=Ln("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Il=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},S0=/-(\w)/g,mt=Il(t=>t.replace(S0,(e,n)=>n?n.toUpperCase():"")),y0=/\B([A-Z])/g,_n=Il(t=>t.replace(y0,"-$1").toLowerCase()),qr=Il(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ms=Il(t=>t?`on${qr(t)}`:""),ln=(t,e)=>!Object.is(t,e),bs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},lm=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Za=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Qa=t=>{const e=Ve(t)?Number(t):NaN;return isNaN(e)?t:e};let vd;const Ul=()=>vd||(vd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function x0(t,e){return t+JSON.stringify(e,(n,i)=>typeof i=="function"?i.toString():i)}const E0="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",M0=Ln(E0);function ko(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ve(i)?cm(i):ko(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ve(t)||lt(t))return t}const b0=/;(?![^(]*\))/g,T0=/:([^]+)/,A0=/\/\*[^]*?\*\//g;function cm(t){const e={};return t.replace(A0,"").split(b0).forEach(n=>{if(n){const i=n.split(T0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function $r(t){let e="";if(Ve(t))e=t;else if(ye(t))for(let n=0;n<t.length;n++){const i=$r(t[n]);i&&(e+=i+" ")}else if(lt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function w0(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ve(e)&&(t.class=$r(e)),n&&(t.style=ko(n)),t}const C0="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",R0="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",P0="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",L0="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",D0=Ln(C0),N0=Ln(R0),I0=Ln(P0),U0=Ln(L0),O0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F0=Ln(O0);function um(t){return!!t||t===""}function B0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ir(t[i],e[i]);return n}function ir(t,e){if(t===e)return!0;let n=_d(t),i=_d(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=xn(t),i=xn(e),n||i)return t===e;if(n=ye(t),i=ye(e),n||i)return n&&i?B0(t,e):!1;if(n=lt(t),i=lt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ir(t[o],e[o]))return!1}}return String(t)===String(e)}function Ol(t,e){return t.findIndex(n=>ir(n,e))}const fm=t=>!!(t&&t.__v_isRef===!0),Bt=t=>Ve(t)?t:t==null?"":ye(t)||lt(t)&&(t.toString===am||!Ie(t.toString))?fm(t)?Bt(t.value):JSON.stringify(t,dm,2):String(t),dm=(t,e)=>fm(e)?dm(t,e.value):Es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Sc(i,s)+" =>"]=r,n),{})}:Xr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Sc(n))}:xn(e)?Sc(e):lt(e)&&!ye(e)&&!Nl(e)?String(e):e,Sc=(t,e="")=>{var n;return xn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class uf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function hm(t){return new uf(t)}function pm(){return on}function H0(t,e=!1){on&&on.cleanups.push(t)}let ht;const yc=new WeakSet;class yo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yc.has(this)&&(yc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sd(this),_m(this);const e=ht,n=Zn;ht=this,Zn=!0;try{return this.fn()}finally{vm(this),ht=e,Zn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hf(e);this.deps=this.depsTail=void 0,Sd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mu(this)&&this.run()}get dirty(){return mu(this)}}let mm=0,uo,fo;function gm(t,e=!1){if(t.flags|=8,e){t.next=fo,fo=t;return}t.next=uo,uo=t}function ff(){mm++}function df(){if(--mm>0)return;if(fo){let e=fo;for(fo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;uo;){let e=uo;for(uo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function _m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vm(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),hf(i),k0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function mu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xo))return;t.globalVersion=xo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!mu(t)){t.flags&=-3;return}const n=ht,i=Zn;ht=t,Zn=!0;try{_m(t);const r=t.fn(t._value);(e.version===0||ln(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=n,Zn=i,vm(t),t.flags&=-3}}function hf(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)hf(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function k0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}function V0(t,e){t.effect instanceof yo&&(t=t.effect.fn);const n=new yo(t);e&&Qe(n,e);try{n.run()}catch(r){throw n.stop(),r}const i=n.run.bind(n);return i.effect=n,i}function z0(t){t.effect.stop()}let Zn=!0;const ym=[];function ar(){ym.push(Zn),Zn=!1}function lr(){const t=ym.pop();Zn=t===void 0?!0:t}function Sd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ht;ht=void 0;try{e()}finally{ht=n}}}let xo=0;class G0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ht||!Zn||ht===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ht)n=this.activeLink=new G0(ht,this),ht.deps?(n.prevDep=ht.depsTail,ht.depsTail.nextDep=n,ht.depsTail=n):ht.deps=ht.depsTail=n,xm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ht.depsTail,n.nextDep=void 0,ht.depsTail.nextDep=n,ht.depsTail=n,ht.deps===n&&(ht.deps=i)}return n}trigger(e){this.version++,xo++,this.notify(e)}notify(e){ff();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{df()}}}function xm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)xm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const el=new WeakMap,wr=Symbol(""),gu=Symbol(""),Eo=Symbol("");function Kt(t,e,n){if(Zn&&ht){let i=el.get(t);i||el.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Fl),r.map=i,r.key=n),r.track()}}function Ei(t,e,n,i,r,s){const o=el.get(t);if(!o){xo++;return}const a=l=>{l&&l.trigger()};if(ff(),e==="clear")o.forEach(a);else{const l=ye(t),c=l&&cf(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Eo||!xn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Eo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(wr)),Es(t)&&a(o.get(gu)));break;case"delete":l||(a(o.get(wr)),Es(t)&&a(o.get(gu)));break;case"set":Es(t)&&a(o.get(wr));break}}df()}function W0(t,e){const n=el.get(t);return n&&n.get(e)}function Kr(t){const e=tt(t);return e===t?e:(Kt(e,"iterate",Eo),wn(t)?e:e.map(Jt))}function Bl(t){return Kt(t=tt(t),"iterate",Eo),t}const X0={__proto__:null,[Symbol.iterator](){return xc(this,Symbol.iterator,Jt)},concat(...t){return Kr(this).concat(...t.map(e=>ye(e)?Kr(e):e))},entries(){return xc(this,"entries",t=>(t[1]=Jt(t[1]),t))},every(t,e){return di(this,"every",t,e,void 0,arguments)},filter(t,e){return di(this,"filter",t,e,n=>n.map(Jt),arguments)},find(t,e){return di(this,"find",t,e,Jt,arguments)},findIndex(t,e){return di(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return di(this,"findLast",t,e,Jt,arguments)},findLastIndex(t,e){return di(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return di(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ec(this,"includes",t)},indexOf(...t){return Ec(this,"indexOf",t)},join(t){return Kr(this).join(t)},lastIndexOf(...t){return Ec(this,"lastIndexOf",t)},map(t,e){return di(this,"map",t,e,void 0,arguments)},pop(){return js(this,"pop")},push(...t){return js(this,"push",t)},reduce(t,...e){return yd(this,"reduce",t,e)},reduceRight(t,...e){return yd(this,"reduceRight",t,e)},shift(){return js(this,"shift")},some(t,e){return di(this,"some",t,e,void 0,arguments)},splice(...t){return js(this,"splice",t)},toReversed(){return Kr(this).toReversed()},toSorted(t){return Kr(this).toSorted(t)},toSpliced(...t){return Kr(this).toSpliced(...t)},unshift(...t){return js(this,"unshift",t)},values(){return xc(this,"values",Jt)}};function xc(t,e,n){const i=Bl(t),r=i[e]();return i!==t&&!wn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const q0=Array.prototype;function di(t,e,n,i,r,s){const o=Bl(t),a=o!==t&&!wn(t),l=o[e];if(l!==q0[e]){const f=l.apply(t,s);return a?Jt(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Jt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function yd(t,e,n,i){const r=Bl(t);let s=n;return r!==t&&(wn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Jt(a),l,t)}),r[e](s,...i)}function Ec(t,e,n){const i=tt(t);Kt(i,"iterate",Eo);const r=i[e](...n);return(r===-1||r===!1)&&zl(n[0])?(n[0]=tt(n[0]),i[e](...n)):r}function js(t,e,n=[]){ar(),ff();const i=tt(t)[e].apply(t,n);return df(),lr(),i}const $0=Ln("__proto__,__v_isRef,__isVue"),Em=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xn));function Y0(t){xn(t)||(t=String(t));const e=tt(this);return Kt(e,"has",t),e.hasOwnProperty(t)}class Mm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Rm:Cm:s?wm:Am).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ye(e);if(!r){let l;if(o&&(l=X0[n]))return l;if(n==="hasOwnProperty")return Y0}const a=Reflect.get(e,n,Dt(e)?e:i);return(xn(n)?Em.has(n):$0(n))||(r||Kt(e,"get",n),s)?a:Dt(a)?o&&cf(n)?a:a.value:lt(a)?r?pf(a):kl(a):a}}class bm extends Mm{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=rr(s);if(!wn(i)&&!rr(i)&&(s=tt(s),i=tt(i)),!ye(e)&&Dt(s)&&!Dt(i))return l?!1:(s.value=i,!0)}const o=ye(e)&&cf(n)?Number(n)<e.length:rt(e,n),a=Reflect.set(e,n,i,Dt(e)?e:r);return e===tt(r)&&(o?ln(i,s)&&Ei(e,"set",n,i):Ei(e,"add",n,i)),a}deleteProperty(e,n){const i=rt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Ei(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!xn(n)||!Em.has(n))&&Kt(e,"has",n),i}ownKeys(e){return Kt(e,"iterate",ye(e)?"length":wr),Reflect.ownKeys(e)}}class Tm extends Mm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const j0=new bm,K0=new Tm,J0=new bm(!0),Z0=new Tm(!0),_u=t=>t,ra=t=>Reflect.getPrototypeOf(t);function Q0(t,e,n){return function(...i){const r=this.__v_raw,s=tt(r),o=Es(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?_u:e?vu:Jt;return!e&&Kt(s,"iterate",l?gu:wr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function sa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function eS(t,e){const n={get(r){const s=this.__v_raw,o=tt(s),a=tt(r);t||(ln(r,a)&&Kt(o,"get",r),Kt(o,"get",a));const{has:l}=ra(o),c=e?_u:t?vu:Jt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Kt(tt(r),"iterate",wr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=tt(s),a=tt(r);return t||(ln(r,a)&&Kt(o,"has",r),Kt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=tt(a),c=e?_u:t?vu:Jt;return!t&&Kt(l,"iterate",wr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Qe(n,t?{add:sa("add"),set:sa("set"),delete:sa("delete"),clear:sa("clear")}:{add(r){!e&&!wn(r)&&!rr(r)&&(r=tt(r));const s=tt(this);return ra(s).has.call(s,r)||(s.add(r),Ei(s,"add",r,r)),this},set(r,s){!e&&!wn(s)&&!rr(s)&&(s=tt(s));const o=tt(this),{has:a,get:l}=ra(o);let c=a.call(o,r);c||(r=tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ln(s,u)&&Ei(o,"set",r,s):Ei(o,"add",r,s),this},delete(r){const s=tt(this),{has:o,get:a}=ra(s);let l=o.call(s,r);l||(r=tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Ei(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,o=r.clear();return s&&Ei(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Q0(r,t,e)}),n}function Hl(t,e){const n=eS(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(rt(n,r)&&r in i?n:i,r,s)}const tS={get:Hl(!1,!1)},nS={get:Hl(!1,!0)},iS={get:Hl(!0,!1)},rS={get:Hl(!0,!0)},Am=new WeakMap,wm=new WeakMap,Cm=new WeakMap,Rm=new WeakMap;function sS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oS(t){return t.__v_skip||!Object.isExtensible(t)?0:sS(_0(t))}function kl(t){return rr(t)?t:Vl(t,!1,j0,tS,Am)}function Pm(t){return Vl(t,!1,J0,nS,wm)}function pf(t){return Vl(t,!0,K0,iS,Cm)}function aS(t){return Vl(t,!0,Z0,rS,Rm)}function Vl(t,e,n,i,r){if(!lt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=oS(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Ki(t){return rr(t)?Ki(t.__v_raw):!!(t&&t.__v_isReactive)}function rr(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function zl(t){return t?!!t.__v_raw:!1}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function mf(t){return!rt(t,"__v_skip")&&Object.isExtensible(t)&&lm(t,"__v_skip",!0),t}const Jt=t=>lt(t)?kl(t):t,vu=t=>lt(t)?pf(t):t;function Dt(t){return t?t.__v_isRef===!0:!1}function un(t){return Dm(t,!1)}function Lm(t){return Dm(t,!0)}function Dm(t,e){return Dt(t)?t:new lS(t,e)}class lS{constructor(e,n){this.dep=new Fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:tt(e),this._value=n?e:Jt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||wn(e)||rr(e);e=i?e:tt(e),ln(e,n)&&(this._rawValue=e,this._value=i?e:Jt(e),this.dep.trigger())}}function cS(t){t.dep&&t.dep.trigger()}function Gl(t){return Dt(t)?t.value:t}function uS(t){return Ie(t)?t():Gl(t)}const fS={get:(t,e,n)=>e==="__v_raw"?t:Gl(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Dt(r)&&!Dt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function gf(t){return Ki(t)?t:new Proxy(t,fS)}class dS{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Fl,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Nm(t){return new dS(t)}function hS(t){const e=ye(t)?new Array(t.length):{};for(const n in t)e[n]=Im(t,n);return e}class pS{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return W0(tt(this._object),this._key)}}class mS{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function gS(t,e,n){return Dt(t)?t:Ie(t)?new mS(t):lt(t)&&arguments.length>1?Im(t,e,n):un(t)}function Im(t,e,n){const i=t[e];return Dt(i)?i:new pS(t,e,n)}class _S{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return gm(this,!0),!0}get value(){const e=this.dep.track();return Sm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vS(t,e,n=!1){let i,r;return Ie(t)?i=t:(i=t.get,r=t.set),new _S(i,r,n)}const SS={GET:"get",HAS:"has",ITERATE:"iterate"},yS={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},oa={},tl=new WeakMap;let zi;function xS(){return zi}function Um(t,e=!1,n=zi){if(n){let i=tl.get(n);i||tl.set(n,i=[]),i.push(t)}}function ES(t,e,n=Ze){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=y=>r?y:wn(y)||r===!1||r===0?Mi(y,1):Mi(y);let u,f,d,p,_=!1,g=!1;if(Dt(t)?(f=()=>t.value,_=wn(t)):Ki(t)?(f=()=>c(t),_=!0):ye(t)?(g=!0,_=t.some(y=>Ki(y)||wn(y)),f=()=>t.map(y=>{if(Dt(y))return y.value;if(Ki(y))return c(y);if(Ie(y))return l?l(y,2):y()})):Ie(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){ar();try{d()}finally{lr()}}const y=zi;zi=u;try{return l?l(t,3,[p]):t(p)}finally{zi=y}}:f=Gt,e&&r){const y=f,E=r===!0?1/0:r;f=()=>Mi(y(),E)}const m=pm(),h=()=>{u.stop(),m&&m.active&&af(m.effects,u)};if(s&&e){const y=e;e=(...E)=>{y(...E),h()}}let M=g?new Array(t.length).fill(oa):oa;const v=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const E=u.run();if(r||_||(g?E.some((A,C)=>ln(A,M[C])):ln(E,M))){d&&d();const A=zi;zi=u;try{const C=[E,M===oa?void 0:g&&M[0]===oa?[]:M,p];l?l(e,3,C):e(...C),M=E}finally{zi=A}}}else u.run()};return a&&a(v),u=new yo(f),u.scheduler=o?()=>o(v,!1):v,p=y=>Um(y,!1,u),d=u.onStop=()=>{const y=tl.get(u);if(y){if(l)l(y,4);else for(const E of y)E();tl.delete(u)}},e?i?v(!0):M=u.run():o?o(v.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Mi(t,e=1/0,n){if(e<=0||!lt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Dt(t))Mi(t.value,e,n);else if(ye(t))for(let i=0;i<t.length;i++)Mi(t[i],e,n);else if(Xr(t)||Es(t))t.forEach(i=>{Mi(i,e,n)});else if(Nl(t)){for(const i in t)Mi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Mi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Om=[];function MS(t){Om.push(t)}function bS(){Om.pop()}function TS(t,e){}const AS={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},wS={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function Gs(t,e,n,i){try{return i?t(...i):t()}catch(r){Yr(r,e,n)}}function Gn(t,e,n,i){if(Ie(t)){const r=Gs(t,e,n,i);return r&&lf(r)&&r.catch(s=>{Yr(s,e,n)}),r}if(ye(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Gn(t[s],e,n,i));return r}}function Yr(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ze;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){ar(),Gs(s,null,10,[t,l,c]),lr();return}}CS(t,n,r,i,o)}function CS(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const cn=[];let ri=-1;const Ts=[];let Gi=null,gs=0;const Fm=Promise.resolve();let nl=null;function Wl(t){const e=nl||Fm;return t?e.then(this?t.bind(this):t):e}function RS(t){let e=ri+1,n=cn.length;for(;e<n;){const i=e+n>>>1,r=cn[i],s=bo(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function _f(t){if(!(t.flags&1)){const e=bo(t),n=cn[cn.length-1];!n||!(t.flags&2)&&e>=bo(n)?cn.push(t):cn.splice(RS(e),0,t),t.flags|=1,Bm()}}function Bm(){nl||(nl=Fm.then(Hm))}function Mo(t){ye(t)?Ts.push(...t):Gi&&t.id===-1?Gi.splice(gs+1,0,t):t.flags&1||(Ts.push(t),t.flags|=1),Bm()}function xd(t,e,n=ri+1){for(;n<cn.length;n++){const i=cn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;cn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function il(t){if(Ts.length){const e=[...new Set(Ts)].sort((n,i)=>bo(n)-bo(i));if(Ts.length=0,Gi){Gi.push(...e);return}for(Gi=e,gs=0;gs<Gi.length;gs++){const n=Gi[gs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gi=null,gs=0}}const bo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hm(t){try{for(ri=0;ri<cn.length;ri++){const e=cn[ri];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ri<cn.length;ri++){const e=cn[ri];e&&(e.flags&=-2)}ri=-1,cn.length=0,il(),nl=null,(cn.length||Ts.length)&&Hm()}}let _s,aa=[];function km(t,e){var n,i;_s=t,_s?(_s.enabled=!0,aa.forEach(({event:r,args:s})=>_s.emit(r,...s)),aa=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{km(s,e)}),setTimeout(()=>{_s||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,aa=[])},3e3)):aa=[]}let Lt=null,Xl=null;function To(t){const e=Lt;return Lt=t,Xl=t&&t.type.__scopeId||null,e}function PS(t){Xl=t}function LS(){Xl=null}const DS=t=>vf;function vf(t,e=Lt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Au(-1);const s=To(e);let o;try{o=t(...r)}finally{To(s),i._d&&Au(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Vm(t,e){if(Lt===null)return t;const n=qo(Lt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Ze]=e[r];s&&(Ie(s)&&(s={mounted:s,updated:s}),s.deep&&Mi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function si(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ar(),Gn(l,n,8,[t.el,a,t,e]),lr())}}const zm=Symbol("_vte"),Gm=t=>t.__isTeleport,ho=t=>t&&(t.disabled||t.disabled===""),Ed=t=>t&&(t.defer||t.defer===""),Md=t=>typeof SVGElement<"u"&&t instanceof SVGElement,bd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Su=(t,e)=>{const n=t&&t.to;return Ve(n)?e?e(n):null:n},Wm={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:p,querySelector:_,createText:g,createComment:m}}=c,h=ho(e.props);let{shapeFlag:M,children:v,dynamicChildren:y}=e;if(t==null){const E=e.el=g(""),A=e.anchor=g("");p(E,n,i),p(A,n,i);const C=(S,b)=>{M&16&&(r&&r.isCE&&(r.ce._teleportTarget=S),u(v,S,b,r,s,o,a,l))},N=()=>{const S=e.target=Su(e.props,_),b=Xm(S,e,g,p);S&&(o!=="svg"&&Md(S)?o="svg":o!=="mathml"&&bd(S)&&(o="mathml"),h||(C(S,b),ka(e,!1)))};h&&(C(n,A),ka(e,!0)),Ed(e.props)?wt(()=>{N(),e.el.__isMounted=!0},s):N()}else{if(Ed(e.props)&&!t.el.__isMounted){wt(()=>{Wm.process(t,e,n,i,r,s,o,a,l,c),delete t.el.__isMounted},s);return}e.el=t.el,e.targetStart=t.targetStart;const E=e.anchor=t.anchor,A=e.target=t.target,C=e.targetAnchor=t.targetAnchor,N=ho(t.props),S=N?n:A,b=N?E:C;if(o==="svg"||Md(A)?o="svg":(o==="mathml"||bd(A))&&(o="mathml"),y?(d(t.dynamicChildren,y,S,r,s,o,a),Rf(t,e,!0)):l||f(t,e,S,b,r,s,o,a,!1),h)N?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):la(e,n,E,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const I=e.target=Su(e.props,_);I&&la(e,I,null,c,0)}else N&&la(e,A,C,c,1);ka(e,h)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=t;if(f&&(r(c),r(u)),s&&r(l),o&16){const p=s||!ho(d);for(let _=0;_<a.length;_++){const g=a[_];i(g,e,n,p,!!g.dynamicChildren)}}},move:la,hydrate:NS};function la(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(o,e,n),(!f||ho(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);f&&i(a,e,n)}function NS(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){const d=e.target=Su(e.props,l);if(d){const p=ho(e.props),_=d._lpa||d.firstChild;if(e.shapeFlag&16)if(p)e.anchor=f(o(t),e,a(t),n,i,r,s),e.targetStart=_,e.targetAnchor=_&&o(_);else{e.anchor=o(t);let g=_;for(;g;){if(g&&g.nodeType===8){if(g.data==="teleport start anchor")e.targetStart=g;else if(g.data==="teleport anchor"){e.targetAnchor=g,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}}g=o(g)}e.targetAnchor||Xm(d,e,u,c),f(_&&o(_),e,d,n,i,r,s)}ka(e,p)}return e.anchor&&o(e.anchor)}const IS=Wm;function ka(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Xm(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[zm]=s,t&&(i(r,t),i(s,t)),s}const Wi=Symbol("_leaveCb"),ca=Symbol("_enterCb");function Sf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jr(()=>{t.isMounted=!0}),zo(()=>{t.isUnmounting=!0}),t}const In=[Function,Array],yf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:In,onEnter:In,onAfterEnter:In,onEnterCancelled:In,onBeforeLeave:In,onLeave:In,onAfterLeave:In,onLeaveCancelled:In,onBeforeAppear:In,onAppear:In,onAfterAppear:In,onAppearCancelled:In},qm=t=>{const e=t.subTree;return e.component?qm(e.component):e},US={name:"BaseTransition",props:yf,setup(t,{slots:e}){const n=Wn(),i=Sf();return()=>{const r=e.default&&ql(e.default(),!0);if(!r||!r.length)return;const s=$m(r),o=tt(t),{mode:a}=o;if(i.isLeaving)return Mc(s);const l=Td(s);if(!l)return Mc(s);let c=Ps(l,o,i,n,f=>c=f);l.type!==At&&Ri(l,c);let u=n.subTree&&Td(n.subTree);if(u&&u.type!==At&&!jn(l,u)&&qm(n).type!==At){let f=Ps(u,o,i,n);if(Ri(u,f),a==="out-in"&&l.type!==At)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Mc(s);a==="in-out"&&l.type!==At?f.delayLeave=(d,p,_)=>{const g=jm(i,u);g[String(u.key)]=u,d[Wi]=()=>{p(),d[Wi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function $m(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==At){e=n;break}}return e}const Ym=US;function jm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ps(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:h,onAfterAppear:M,onAppearCancelled:v}=e,y=String(t.key),E=jm(n,t),A=(S,b)=>{S&&Gn(S,i,9,b)},C=(S,b)=>{const I=b[1];A(S,b),ye(S)?S.every(R=>R.length<=1)&&I():S.length<=1&&I()},N={mode:o,persisted:a,beforeEnter(S){let b=l;if(!n.isMounted)if(s)b=m||l;else return;S[Wi]&&S[Wi](!0);const I=E[y];I&&jn(t,I)&&I.el[Wi]&&I.el[Wi](),A(b,[S])},enter(S){let b=c,I=u,R=f;if(!n.isMounted)if(s)b=h||c,I=M||u,R=v||f;else return;let F=!1;const D=S[ca]=H=>{F||(F=!0,H?A(R,[S]):A(I,[S]),N.delayedLeave&&N.delayedLeave(),S[ca]=void 0)};b?C(b,[S,D]):D()},leave(S,b){const I=String(t.key);if(S[ca]&&S[ca](!0),n.isUnmounting)return b();A(d,[S]);let R=!1;const F=S[Wi]=D=>{R||(R=!0,b(),D?A(g,[S]):A(_,[S]),S[Wi]=void 0,E[I]===t&&delete E[I])};E[I]=t,p?C(p,[S,F]):F()},clone(S){const b=Ps(S,e,n,i,r);return r&&r(b),b}};return N}function Mc(t){if(Vo(t))return t=ci(t),t.children=null,t}function Td(t){if(!Vo(t))return Gm(t.type)&&t.children?$m(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ie(n.default))return n.default()}}function Ri(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ri(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ql(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ct?(o.patchFlag&128&&r++,i=i.concat(ql(o.children,e,a))):(e||o.type!==At)&&i.push(a!=null?ci(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function xf(t,e){return Ie(t)?Qe({name:t.name},e,{setup:t}):t}function OS(){const t=Wn();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Ef(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function FS(t){const e=Wn(),n=Lm(null);if(e){const r=e.refs===Ze?e.refs={}:e.refs;Object.defineProperty(r,t,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}function Ao(t,e,n,i,r=!1){if(ye(t)){t.forEach((_,g)=>Ao(_,e&&(ye(e)?e[g]:e),n,i,r));return}if(Ji(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ao(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?qo(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ze?a.refs={}:a.refs,f=a.setupState,d=tt(f),p=f===Ze?()=>!1:_=>rt(d,_);if(c!=null&&c!==l&&(Ve(c)?(u[c]=null,p(c)&&(f[c]=null)):Dt(c)&&(c.value=null)),Ie(l))Gs(l,a,12,[o,u]);else{const _=Ve(l),g=Dt(l);if(_||g){const m=()=>{if(t.f){const h=_?p(l)?f[l]:u[l]:l.value;r?ye(h)&&af(h,s):ye(h)?h.includes(s)||h.push(s):_?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,p(l)&&(f[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,wt(m,n)):m()}}}let Ad=!1;const Jr=()=>{Ad||(console.error("Hydration completed but contains mismatches."),Ad=!0)},BS=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",HS=t=>t.namespaceURI.includes("MathML"),ua=t=>{if(t.nodeType===1){if(BS(t))return"svg";if(HS(t))return"mathml"}},Ss=t=>t.nodeType===8;function kS(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,y)=>{if(!y.hasChildNodes()){n(null,v,y),il(),y._vnode=v;return}f(y.firstChild,v,null,null,null),il(),y._vnode=v},f=(v,y,E,A,C,N=!1)=>{N=N||!!y.dynamicChildren;const S=Ss(v)&&v.data==="[",b=()=>g(v,y,E,A,C,S),{type:I,ref:R,shapeFlag:F,patchFlag:D}=y;let H=v.nodeType;y.el=v,D===-2&&(N=!1,y.dynamicChildren=null);let B=null;switch(I){case Zi:H!==3?y.children===""?(l(y.el=r(""),o(v),v),B=v):B=b():(v.data!==y.children&&(Jr(),v.data=y.children),B=s(v));break;case At:M(v)?(B=s(v),h(y.el=v.content.firstChild,v,E)):H!==8||S?B=b():B=s(v);break;case Rr:if(S&&(v=s(v),H=v.nodeType),H===1||H===3){B=v;const z=!y.children.length;for(let W=0;W<y.staticCount;W++)z&&(y.children+=B.nodeType===1?B.outerHTML:B.data),W===y.staticCount-1&&(y.anchor=B),B=s(B);return S?s(B):B}else b();break;case Ct:S?B=_(v,y,E,A,C,N):B=b();break;default:if(F&1)(H!==1||y.type.toLowerCase()!==v.tagName.toLowerCase())&&!M(v)?B=b():B=d(v,y,E,A,C,N);else if(F&6){y.slotScopeIds=C;const z=o(v);if(S?B=m(v):Ss(v)&&v.data==="teleport start"?B=m(v,v.data,"teleport end"):B=s(v),e(y,z,null,E,A,ua(z),N),Ji(y)&&!y.type.__asyncResolved){let W;S?(W=at(Ct),W.anchor=B?B.previousSibling:z.lastChild):W=v.nodeType===3?Xo(""):at("div"),W.el=v,y.component.subTree=W}}else F&64?H!==8?B=b():B=y.type.hydrate(v,y,E,A,C,N,t,p):F&128&&(B=y.type.hydrate(v,y,E,A,ua(o(v)),C,N,t,f))}return R!=null&&Ao(R,null,A,y),B},d=(v,y,E,A,C,N)=>{N=N||!!y.dynamicChildren;const{type:S,props:b,patchFlag:I,shapeFlag:R,dirs:F,transition:D}=y,H=S==="input"||S==="option";if(H||I!==-1){F&&si(y,null,E,"created");let B=!1;if(M(v)){B=Eg(null,D)&&E&&E.vnode.props&&E.vnode.props.appear;const W=v.content.firstChild;B&&D.beforeEnter(W),h(W,v,E),y.el=v=W}if(R&16&&!(b&&(b.innerHTML||b.textContent))){let W=p(v.firstChild,y,v,E,A,C,N);for(;W;){fa(v,1)||Jr();const ie=W;W=W.nextSibling,a(ie)}}else if(R&8){let W=y.children;W[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(W=W.slice(1)),v.textContent!==W&&(fa(v,0)||Jr(),v.textContent=y.children)}if(b){if(H||!N||I&48){const W=v.tagName.includes("-");for(const ie in b)(H&&(ie.endsWith("value")||ie==="indeterminate")||Wr(ie)&&!ji(ie)||ie[0]==="."||W)&&i(v,ie,null,b[ie],void 0,E)}else if(b.onClick)i(v,"onClick",null,b.onClick,void 0,E);else if(I&4&&Ki(b.style))for(const W in b.style)b.style[W]}let z;(z=b&&b.onVnodeBeforeMount)&&pn(z,E,y),F&&si(y,null,E,"beforeMount"),((z=b&&b.onVnodeMounted)||F||B)&&Lg(()=>{z&&pn(z,E,y),B&&D.enter(v),F&&si(y,null,E,"mounted")},A)}return v.nextSibling},p=(v,y,E,A,C,N,S)=>{S=S||!!y.dynamicChildren;const b=y.children,I=b.length;for(let R=0;R<I;R++){const F=S?b[R]:b[R]=mn(b[R]),D=F.type===Zi;v?(D&&!S&&R+1<I&&mn(b[R+1]).type===Zi&&(l(r(v.data.slice(F.children.length)),E,s(v)),v.data=F.children),v=f(v,F,A,C,N,S)):D&&!F.children?l(F.el=r(""),E):(fa(E,1)||Jr(),n(null,F,E,null,A,C,ua(E),N))}return v},_=(v,y,E,A,C,N)=>{const{slotScopeIds:S}=y;S&&(C=C?C.concat(S):S);const b=o(v),I=p(s(v),y,b,E,A,C,N);return I&&Ss(I)&&I.data==="]"?s(y.anchor=I):(Jr(),l(y.anchor=c("]"),b,I),I)},g=(v,y,E,A,C,N)=>{if(fa(v.parentElement,1)||Jr(),y.el=null,N){const I=m(v);for(;;){const R=s(v);if(R&&R!==I)a(R);else break}}const S=s(v),b=o(v);return a(v),n(null,y,b,S,E,A,ua(b),C),E&&(E.vnode.el=y.el,Kl(E,y.el)),S},m=(v,y="[",E="]")=>{let A=0;for(;v;)if(v=s(v),v&&Ss(v)&&(v.data===y&&A++,v.data===E)){if(A===0)return s(v);A--}return v},h=(v,y,E)=>{const A=y.parentNode;A&&A.replaceChild(v,y);let C=E;for(;C;)C.vnode.el===y&&(C.vnode.el=C.subTree.el=v),C=C.parent},M=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[u,f]}const wd="data-allow-mismatch",VS={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function fa(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(wd);)t=t.parentElement;const n=t&&t.getAttribute(wd);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:n.split(",").includes(VS[e])}}const zS=Ul().requestIdleCallback||(t=>setTimeout(t,1)),GS=Ul().cancelIdleCallback||(t=>clearTimeout(t)),WS=(t=1e4)=>e=>{const n=zS(e,{timeout:t});return()=>GS(n)};function XS(t){const{top:e,left:n,bottom:i,right:r}=t.getBoundingClientRect(),{innerHeight:s,innerWidth:o}=window;return(e>0&&e<s||i>0&&i<s)&&(n>0&&n<o||r>0&&r<o)}const qS=t=>(e,n)=>{const i=new IntersectionObserver(r=>{for(const s of r)if(s.isIntersecting){i.disconnect(),e();break}},t);return n(r=>{if(r instanceof Element){if(XS(r))return e(),i.disconnect(),!1;i.observe(r)}}),()=>i.disconnect()},$S=t=>e=>{if(t){const n=matchMedia(t);if(n.matches)e();else return n.addEventListener("change",e,{once:!0}),()=>n.removeEventListener("change",e)}},YS=(t=[])=>(e,n)=>{Ve(t)&&(t=[t]);let i=!1;const r=o=>{i||(i=!0,s(),e(),o.target.dispatchEvent(new o.constructor(o.type,o)))},s=()=>{n(o=>{for(const a of t)o.removeEventListener(a,r)})};return n(o=>{for(const a of t)o.addEventListener(a,r,{once:!0})}),s};function jS(t,e){if(Ss(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Ss(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const Ji=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function KS(t){Ie(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t;let c=null,u,f=0;const d=()=>(f++,c=null,p()),p=()=>{let _;return c||(_=c=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),l)return new Promise((m,h)=>{l(g,()=>m(d()),()=>h(g),f+1)});throw g}).then(g=>_!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),u=g,g)))};return xf({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(_,g,m){const h=s?()=>{const M=s(m,v=>jS(_,v));M&&(g.bum||(g.bum=[])).push(M)}:m;u?h():p().then(()=>!g.isUnmounted&&h())},get __asyncResolved(){return u},setup(){const _=Pt;if(Ef(_),u)return()=>bc(u,_);const g=v=>{c=null,Yr(v,_,13,!i)};if(a&&_.suspense||Ls)return p().then(v=>()=>bc(v,_)).catch(v=>(g(v),()=>i?at(i,{error:v}):null));const m=un(!1),h=un(),M=un(!!r);return r&&setTimeout(()=>{M.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!h.value){const v=new Error(`Async component timed out after ${o}ms.`);g(v),h.value=v}},o),p().then(()=>{m.value=!0,_.parent&&Vo(_.parent.vnode)&&_.parent.update()}).catch(v=>{g(v),h.value=v}),()=>{if(m.value&&u)return bc(u,_);if(h.value&&i)return at(i,{error:h.value});if(n&&!M.value)return at(n)}}})}function bc(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=at(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Vo=t=>t.type.__isKeepAlive,JS={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Wn(),i=n.ctx;if(!i.renderer)return()=>{const M=e.default&&e.default();return M&&M.length===1?M[0]:M};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,d=f("div");i.activate=(M,v,y,E,A)=>{const C=M.component;c(M,v,y,0,a),l(C.vnode,M,v,y,C,a,E,M.slotScopeIds,A),wt(()=>{C.isDeactivated=!1,C.a&&bs(C.a);const N=M.props&&M.props.onVnodeMounted;N&&pn(N,C.parent,M)},a)},i.deactivate=M=>{const v=M.component;sl(v.m),sl(v.a),c(M,d,null,1,a),wt(()=>{v.da&&bs(v.da);const y=M.props&&M.props.onVnodeUnmounted;y&&pn(y,v.parent,M),v.isDeactivated=!0},a)};function p(M){Tc(M),u(M,n,a,!0)}function _(M){r.forEach((v,y)=>{const E=Lu(v.type);E&&!M(E)&&g(y)})}function g(M){const v=r.get(M);v&&(!o||!jn(v,o))?p(v):o&&Tc(o),r.delete(M),s.delete(M)}As(()=>[t.include,t.exclude],([M,v])=>{M&&_(y=>ao(M,y)),v&&_(y=>!ao(v,y))},{flush:"post",deep:!0});let m=null;const h=()=>{m!=null&&(ol(n.subTree.type)?wt(()=>{r.set(m,da(n.subTree))},n.subTree.suspense):r.set(m,da(n.subTree)))};return jr(h),Yl(h),zo(()=>{r.forEach(M=>{const{subTree:v,suspense:y}=n,E=da(v);if(M.type===E.type&&M.key===E.key){Tc(E);const A=E.component.da;A&&wt(A,y);return}p(M)})}),()=>{if(m=null,!e.default)return o=null;const M=e.default(),v=M[0];if(M.length>1)return o=null,M;if(!Pi(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let y=da(v);if(y.type===At)return o=null,y;const E=y.type,A=Lu(Ji(y)?y.type.__asyncResolved||{}:E),{include:C,exclude:N,max:S}=t;if(C&&(!A||!ao(C,A))||N&&A&&ao(N,A))return y.shapeFlag&=-257,o=y,v;const b=y.key==null?E:y.key,I=r.get(b);return y.el&&(y=ci(y),v.shapeFlag&128&&(v.ssContent=y)),m=b,I?(y.el=I.el,y.component=I.component,y.transition&&Ri(y,y.transition),y.shapeFlag|=512,s.delete(b),s.add(b)):(s.add(b),S&&s.size>parseInt(S,10)&&g(s.values().next().value)),y.shapeFlag|=256,o=y,ol(v.type)?v:y}}},ZS=JS;function ao(t,e){return ye(t)?t.some(n=>ao(n,e)):Ve(t)?t.split(",").includes(e):g0(t)?(t.lastIndex=0,t.test(e)):!1}function Km(t,e){Zm(t,"a",e)}function Jm(t,e){Zm(t,"da",e)}function Zm(t,e,n=Pt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($l(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Vo(r.parent.vnode)&&QS(i,e,n,r),r=r.parent}}function QS(t,e,n,i){const r=$l(e,t,i,!0);Go(()=>{af(i[e],r)},n)}function Tc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function da(t){return t.shapeFlag&128?t.ssContent:t}function $l(t,e,n=Pt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{ar();const a=Fr(n),l=Gn(e,n,t,o);return a(),lr(),l});return i?r.unshift(s):r.push(s),s}}const Di=t=>(e,n=Pt)=>{(!Ls||t==="sp")&&$l(t,(...i)=>e(...i),n)},Qm=Di("bm"),jr=Di("m"),Mf=Di("bu"),Yl=Di("u"),zo=Di("bum"),Go=Di("um"),eg=Di("sp"),tg=Di("rtg"),ng=Di("rtc");function ig(t,e=Pt){$l("ec",t,e)}const bf="components",ey="directives";function ty(t,e){return Tf(bf,t,!0,e)||t}const rg=Symbol.for("v-ndc");function ny(t){return Ve(t)?Tf(bf,t,!1)||t:t||rg}function iy(t){return Tf(ey,t)}function Tf(t,e,n=!0,i=!1){const r=Lt||Pt;if(r){const s=r.type;if(t===bf){const a=Lu(s,!1);if(a&&(a===e||a===mt(e)||a===qr(mt(e))))return s}const o=Cd(r[t]||s[t],e)||Cd(r.appContext[t],e);return!o&&i?s:o}}function Cd(t,e){return t&&(t[e]||t[mt(e)]||t[qr(mt(e))])}function sg(t,e,n,i){let r;const s=n&&n[i],o=ye(t);if(o||Ve(t)){const a=o&&Ki(t);let l=!1;a&&(l=!wn(t),t=Bl(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?Jt(t[c]):t[c],c,void 0,s&&s[c])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(lt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s&&s[l]));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s&&s[l])}}else r=[];return n&&(n[i]=r),r}function ry(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(ye(i))for(let r=0;r<i.length;r++)t[i[r].name]=i[r].fn;else i&&(t[i.name]=i.key?(...r)=>{const s=i.fn(...r);return s&&(s.key=i.key),s}:i.fn)}return t}function sy(t,e,n={},i,r){if(Lt.ce||Lt.parent&&Ji(Lt.parent)&&Lt.parent.ce)return e!=="default"&&(n.name=e),Vt(),Ro(Ct,null,[at("slot",n,i&&i())],64);let s=t[e];s&&s._c&&(s._d=!1),Vt();const o=s&&Af(s(n)),a=n.key||o&&o.key,l=Ro(Ct,{key:(a&&!xn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&t._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Af(t){return t.some(e=>Pi(e)?!(e.type===At||e.type===Ct&&!Af(e.children)):!0)?t:null}function oy(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:Ms(i)]=t[i];return n}const yu=t=>t?Bg(t)?qo(t):yu(t.parent):null,po=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yu(t.parent),$root:t=>yu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wf(t),$forceUpdate:t=>t.f||(t.f=()=>{_f(t.update)}),$nextTick:t=>t.n||(t.n=Wl.bind(t.proxy)),$watch:t=>By.bind(t)}),Ac=(t,e)=>t!==Ze&&!t.__isScriptSetup&&rt(t,e),xu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ac(i,e))return o[e]=1,i[e];if(r!==Ze&&rt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(n!==Ze&&rt(n,e))return o[e]=4,n[e];Eu&&(o[e]=0)}}const u=po[e];let f,d;if(u)return e==="$attrs"&&Kt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Ze&&rt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,rt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ac(r,e)?(r[e]=n,!0):i!==Ze&&rt(i,e)?(i[e]=n,!0):rt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Ze&&rt(t,o)||Ac(e,o)||(a=s[0])&&rt(a,o)||rt(i,o)||rt(po,o)||rt(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:rt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},ay=Qe({},xu,{get(t,e){if(e!==Symbol.unscopables)return xu.get(t,e,t)},has(t,e){return e[0]!=="_"&&!M0(e)}});function ly(){return null}function cy(){return null}function uy(t){}function fy(t){}function dy(){return null}function hy(){}function py(t,e){return null}function my(){return og().slots}function gy(){return og().attrs}function og(){const t=Wn();return t.setupContext||(t.setupContext=zg(t))}function wo(t){return ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function _y(t,e){const n=wo(t);for(const i in e){if(i.startsWith("__skip"))continue;let r=n[i];r?ye(r)||Ie(r)?r=n[i]={type:r,default:e[i]}:r.default=e[i]:r===null&&(r=n[i]={default:e[i]}),r&&e[`__skip_${i}`]&&(r.skipFactory=!0)}return n}function vy(t,e){return!t||!e?t||e:ye(t)&&ye(e)?t.concat(e):Qe({},wo(t),wo(e))}function Sy(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function yy(t){const e=Wn();let n=t();return Cu(),lf(n)&&(n=n.catch(i=>{throw Fr(e),i})),[n,()=>Fr(e)]}let Eu=!0;function xy(t){const e=wf(t),n=t.proxy,i=t.ctx;Eu=!1,e.beforeCreate&&Rd(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:M,destroyed:v,unmounted:y,render:E,renderTracked:A,renderTriggered:C,errorCaptured:N,serverPrefetch:S,expose:b,inheritAttrs:I,components:R,directives:F,filters:D}=e;if(c&&Ey(c,i,null),o)for(const z in o){const W=o[z];Ie(W)&&(i[z]=W.bind(n))}if(r){const z=r.call(n,n);lt(z)&&(t.data=kl(z))}if(Eu=!0,s)for(const z in s){const W=s[z],ie=Ie(W)?W.bind(n,n):Ie(W.get)?W.get.bind(n,n):Gt,ae=!Ie(W)&&Ie(W.set)?W.set.bind(n):Gt,he=Br({get:ie,set:ae});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>he.value,set:me=>he.value=me})}if(a)for(const z in a)ag(a[z],i,n,z);if(l){const z=Ie(l)?l.call(n):l;Reflect.ownKeys(z).forEach(W=>{cg(W,z[W])})}u&&Rd(u,t,"c");function B(z,W){ye(W)?W.forEach(ie=>z(ie.bind(n))):W&&z(W.bind(n))}if(B(Qm,f),B(jr,d),B(Mf,p),B(Yl,_),B(Km,g),B(Jm,m),B(ig,N),B(ng,A),B(tg,C),B(zo,M),B(Go,y),B(eg,S),ye(b))if(b.length){const z=t.exposed||(t.exposed={});b.forEach(W=>{Object.defineProperty(z,W,{get:()=>n[W],set:ie=>n[W]=ie})})}else t.exposed||(t.exposed={});E&&t.render===Gt&&(t.render=E),I!=null&&(t.inheritAttrs=I),R&&(t.components=R),F&&(t.directives=F),S&&Ef(t)}function Ey(t,e,n=Gt){ye(t)&&(t=Mu(t));for(const i in t){const r=t[i];let s;lt(r)?"default"in r?s=mo(r.from||i,r.default,!0):s=mo(r.from||i):s=mo(r),Dt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Rd(t,e,n){Gn(ye(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function ag(t,e,n,i){let r=i.includes(".")?wg(n,i):()=>n[i];if(Ve(t)){const s=e[t];Ie(s)&&As(r,s)}else if(Ie(t))As(r,t.bind(n));else if(lt(t))if(ye(t))t.forEach(s=>ag(s,e,n,i));else{const s=Ie(t.handler)?t.handler.bind(n):e[t.handler];Ie(s)&&As(r,s,t)}}function wf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>rl(l,c,o,!0)),rl(l,e,o)),lt(e)&&s.set(e,l),l}function rl(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&rl(t,s,n,!0),r&&r.forEach(o=>rl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=My[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const My={data:Pd,props:Ld,emits:Ld,methods:lo,computed:lo,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:lo,directives:lo,watch:Ty,provide:Pd,inject:by};function Pd(t,e){return e?t?function(){return Qe(Ie(t)?t.call(this,this):t,Ie(e)?e.call(this,this):e)}:e:t}function by(t,e){return lo(Mu(t),Mu(e))}function Mu(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rn(t,e){return t?[...new Set([].concat(t,e))]:e}function lo(t,e){return t?Qe(Object.create(null),t,e):e}function Ld(t,e){return t?ye(t)&&ye(e)?[...new Set([...t,...e])]:Qe(Object.create(null),wo(t),wo(e??{})):e}function Ty(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const i in e)n[i]=rn(t[i],e[i]);return n}function lg(){return{app:null,config:{isNativeTag:oo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ay=0;function wy(t,e){return function(i,r=null){Ie(i)||(i=Qe({},i)),r!=null&&!lt(r)&&(r=null);const s=lg(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Ay++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Xg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ie(u.install)?(o.add(u),u.install(c,...f)):Ie(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||at(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(p,u):t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,qo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Gn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Cr;Cr=c;try{return u()}finally{Cr=f}}};return c}}let Cr=null;function cg(t,e){if(Pt){let n=Pt.provides;const i=Pt.parent&&Pt.parent.provides;i===n&&(n=Pt.provides=Object.create(i)),n[t]=e}}function mo(t,e,n=!1){const i=Pt||Lt;if(i||Cr){const r=Cr?Cr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ie(e)?e.call(i&&i.proxy):e}}function Cy(){return!!(Pt||Lt||Cr)}const ug={},fg=()=>Object.create(ug),dg=t=>Object.getPrototypeOf(t)===ug;function Ry(t,e,n,i=!1){const r={},s=fg();t.propsDefaults=Object.create(null),hg(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Pm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Py(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=tt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(jl(t.emitsOptions,d))continue;const p=e[d];if(l)if(rt(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const _=mt(d);r[_]=bu(l,a,_,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{hg(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=_n(f))===f||!rt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=bu(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&Ei(t.attrs,"set","")}function hg(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ji(l))continue;const c=e[l];let u;r&&rt(r,u=mt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:jl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(n),c=a||Ze;for(let u=0;u<s.length;u++){const f=s[u];n[f]=bu(r,l,f,c[f],t,!rt(c,f))}}return o}function bu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ie(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Fr(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===_n(n))&&(i=!0))}return i}const Ly=new WeakMap;function pg(t,e,n=!1){const i=n?Ly:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ie(t)){const u=f=>{l=!0;const[d,p]=pg(f,e,!0);Qe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return lt(t)&&i.set(t,xs),xs;if(ye(s))for(let u=0;u<s.length;u++){const f=mt(s[u]);Dd(f)&&(o[f]=Ze)}else if(s)for(const u in s){const f=mt(u);if(Dd(f)){const d=s[u],p=o[f]=ye(d)||Ie(d)?{type:d}:Qe({},d),_=p.type;let g=!1,m=!0;if(ye(_))for(let h=0;h<_.length;++h){const M=_[h],v=Ie(M)&&M.name;if(v==="Boolean"){g=!0;break}else v==="String"&&(m=!1)}else g=Ie(_)&&_.name==="Boolean";p[0]=g,p[1]=m,(g||rt(p,"default"))&&a.push(f)}}const c=[o,a];return lt(t)&&i.set(t,c),c}function Dd(t){return t[0]!=="$"&&!ji(t)}const mg=t=>t[0]==="_"||t==="$stable",Cf=t=>ye(t)?t.map(mn):[mn(t)],Dy=(t,e,n)=>{if(e._n)return e;const i=vf((...r)=>Cf(e(...r)),n);return i._c=!1,i},gg=(t,e,n)=>{const i=t._ctx;for(const r in t){if(mg(r))continue;const s=t[r];if(Ie(s))e[r]=Dy(r,s,i);else if(s!=null){const o=Cf(s);e[r]=()=>o}}},_g=(t,e)=>{const n=Cf(e);t.slots.default=()=>n},vg=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Ny=(t,e,n)=>{const i=t.slots=fg();if(t.vnode.shapeFlag&32){const r=e._;r?(vg(i,e,n),n&&lm(i,"_",r,!0)):gg(e,i)}else e&&_g(t,e)},Iy=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Ze;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:vg(r,e,n):(s=!e.$stable,gg(e,r)),o=e}else e&&(_g(t,e),o={default:1});if(s)for(const a in r)!mg(a)&&o[a]==null&&delete r[a]},wt=Lg;function Sg(t){return xg(t)}function yg(t){return xg(t,kS)}function xg(t,e){const n=Ul();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Gt,insertStaticContent:_}=t,g=(L,P,k,Y=null,ee=null,j=null,re=void 0,le=null,ue=!!P.dynamicChildren)=>{if(L===P)return;L&&!jn(L,P)&&(Y=we(L),me(L,ee,j,!0),L=null),P.patchFlag===-2&&(ue=!1,P.dynamicChildren=null);const{type:oe,ref:T,shapeFlag:x}=P;switch(oe){case Zi:m(L,P,k,Y);break;case At:h(L,P,k,Y);break;case Rr:L==null&&M(P,k,Y,re);break;case Ct:R(L,P,k,Y,ee,j,re,le,ue);break;default:x&1?E(L,P,k,Y,ee,j,re,le,ue):x&6?F(L,P,k,Y,ee,j,re,le,ue):(x&64||x&128)&&oe.process(L,P,k,Y,ee,j,re,le,ue,Ne)}T!=null&&ee&&Ao(T,L&&L.ref,j,P||L,!P)},m=(L,P,k,Y)=>{if(L==null)i(P.el=a(P.children),k,Y);else{const ee=P.el=L.el;P.children!==L.children&&c(ee,P.children)}},h=(L,P,k,Y)=>{L==null?i(P.el=l(P.children||""),k,Y):P.el=L.el},M=(L,P,k,Y)=>{[L.el,L.anchor]=_(L.children,P,k,Y,L.el,L.anchor)},v=({el:L,anchor:P},k,Y)=>{let ee;for(;L&&L!==P;)ee=d(L),i(L,k,Y),L=ee;i(P,k,Y)},y=({el:L,anchor:P})=>{let k;for(;L&&L!==P;)k=d(L),r(L),L=k;r(P)},E=(L,P,k,Y,ee,j,re,le,ue)=>{P.type==="svg"?re="svg":P.type==="math"&&(re="mathml"),L==null?A(P,k,Y,ee,j,re,le,ue):S(L,P,ee,j,re,le,ue)},A=(L,P,k,Y,ee,j,re,le)=>{let ue,oe;const{props:T,shapeFlag:x,transition:U,dirs:Z}=L;if(ue=L.el=o(L.type,j,T&&T.is,T),x&8?u(ue,L.children):x&16&&N(L.children,ue,null,Y,ee,wc(L,j),re,le),Z&&si(L,null,Y,"created"),C(ue,L,L.scopeId,re,Y),T){for(const se in T)se!=="value"&&!ji(se)&&s(ue,se,null,T[se],j,Y);"value"in T&&s(ue,"value",null,T.value,j),(oe=T.onVnodeBeforeMount)&&pn(oe,Y,L)}Z&&si(L,null,Y,"beforeMount");const Q=Eg(ee,U);Q&&U.beforeEnter(ue),i(ue,P,k),((oe=T&&T.onVnodeMounted)||Q||Z)&&wt(()=>{oe&&pn(oe,Y,L),Q&&U.enter(ue),Z&&si(L,null,Y,"mounted")},ee)},C=(L,P,k,Y,ee)=>{if(k&&p(L,k),Y)for(let j=0;j<Y.length;j++)p(L,Y[j]);if(ee){let j=ee.subTree;if(P===j||ol(j.type)&&(j.ssContent===P||j.ssFallback===P)){const re=ee.vnode;C(L,re,re.scopeId,re.slotScopeIds,ee.parent)}}},N=(L,P,k,Y,ee,j,re,le,ue=0)=>{for(let oe=ue;oe<L.length;oe++){const T=L[oe]=le?Xi(L[oe]):mn(L[oe]);g(null,T,P,k,Y,ee,j,re,le)}},S=(L,P,k,Y,ee,j,re)=>{const le=P.el=L.el;let{patchFlag:ue,dynamicChildren:oe,dirs:T}=P;ue|=L.patchFlag&16;const x=L.props||Ze,U=P.props||Ze;let Z;if(k&&dr(k,!1),(Z=U.onVnodeBeforeUpdate)&&pn(Z,k,P,L),T&&si(P,L,k,"beforeUpdate"),k&&dr(k,!0),(x.innerHTML&&U.innerHTML==null||x.textContent&&U.textContent==null)&&u(le,""),oe?b(L.dynamicChildren,oe,le,k,Y,wc(P,ee),j):re||W(L,P,le,null,k,Y,wc(P,ee),j,!1),ue>0){if(ue&16)I(le,x,U,k,ee);else if(ue&2&&x.class!==U.class&&s(le,"class",null,U.class,ee),ue&4&&s(le,"style",x.style,U.style,ee),ue&8){const Q=P.dynamicProps;for(let se=0;se<Q.length;se++){const ge=Q[se],fe=x[ge],_e=U[ge];(_e!==fe||ge==="value")&&s(le,ge,fe,_e,ee,k)}}ue&1&&L.children!==P.children&&u(le,P.children)}else!re&&oe==null&&I(le,x,U,k,ee);((Z=U.onVnodeUpdated)||T)&&wt(()=>{Z&&pn(Z,k,P,L),T&&si(P,L,k,"updated")},Y)},b=(L,P,k,Y,ee,j,re)=>{for(let le=0;le<P.length;le++){const ue=L[le],oe=P[le],T=ue.el&&(ue.type===Ct||!jn(ue,oe)||ue.shapeFlag&70)?f(ue.el):k;g(ue,oe,T,null,Y,ee,j,re,!0)}},I=(L,P,k,Y,ee)=>{if(P!==k){if(P!==Ze)for(const j in P)!ji(j)&&!(j in k)&&s(L,j,P[j],null,ee,Y);for(const j in k){if(ji(j))continue;const re=k[j],le=P[j];re!==le&&j!=="value"&&s(L,j,le,re,ee,Y)}"value"in k&&s(L,"value",P.value,k.value,ee)}},R=(L,P,k,Y,ee,j,re,le,ue)=>{const oe=P.el=L?L.el:a(""),T=P.anchor=L?L.anchor:a("");let{patchFlag:x,dynamicChildren:U,slotScopeIds:Z}=P;Z&&(le=le?le.concat(Z):Z),L==null?(i(oe,k,Y),i(T,k,Y),N(P.children||[],k,T,ee,j,re,le,ue)):x>0&&x&64&&U&&L.dynamicChildren?(b(L.dynamicChildren,U,k,ee,j,re,le),(P.key!=null||ee&&P===ee.subTree)&&Rf(L,P,!0)):W(L,P,k,T,ee,j,re,le,ue)},F=(L,P,k,Y,ee,j,re,le,ue)=>{P.slotScopeIds=le,L==null?P.shapeFlag&512?ee.ctx.activate(P,k,Y,re,ue):D(P,k,Y,ee,j,re,ue):H(L,P,ue)},D=(L,P,k,Y,ee,j,re)=>{const le=L.component=Fg(L,Y,ee);if(Vo(L)&&(le.ctx.renderer=Ne),Hg(le,!1,re),le.asyncDep){if(ee&&ee.registerDep(le,B,re),!L.el){const ue=le.subTree=at(At);h(null,ue,P,k)}}else B(le,L,P,k,ee,j,re)},H=(L,P,k)=>{const Y=P.component=L.component;if(Wy(L,P,k))if(Y.asyncDep&&!Y.asyncResolved){z(Y,P,k);return}else Y.next=P,Y.update();else P.el=L.el,Y.vnode=P},B=(L,P,k,Y,ee,j,re)=>{const le=()=>{if(L.isMounted){let{next:x,bu:U,u:Z,parent:Q,vnode:se}=L;{const Be=Mg(L);if(Be){x&&(x.el=se.el,z(L,x,re)),Be.asyncDep.then(()=>{L.isUnmounted||le()});return}}let ge=x,fe;dr(L,!1),x?(x.el=se.el,z(L,x,re)):x=se,U&&bs(U),(fe=x.props&&x.props.onVnodeBeforeUpdate)&&pn(fe,Q,x,se),dr(L,!0);const _e=Va(L),Ce=L.subTree;L.subTree=_e,g(Ce,_e,f(Ce.el),we(Ce),L,ee,j),x.el=_e.el,ge===null&&Kl(L,_e.el),Z&&wt(Z,ee),(fe=x.props&&x.props.onVnodeUpdated)&&wt(()=>pn(fe,Q,x,se),ee)}else{let x;const{el:U,props:Z}=P,{bm:Q,m:se,parent:ge,root:fe,type:_e}=L,Ce=Ji(P);if(dr(L,!1),Q&&bs(Q),!Ce&&(x=Z&&Z.onVnodeBeforeMount)&&pn(x,ge,P),dr(L,!0),U&&G){const Be=()=>{L.subTree=Va(L),G(U,L.subTree,L,ee,null)};Ce&&_e.__asyncHydrate?_e.__asyncHydrate(U,L,Be):Be()}else{fe.ce&&fe.ce._injectChildStyle(_e);const Be=L.subTree=Va(L);g(null,Be,k,Y,L,ee,j),P.el=Be.el}if(se&&wt(se,ee),!Ce&&(x=Z&&Z.onVnodeMounted)){const Be=P;wt(()=>pn(x,ge,Be),ee)}(P.shapeFlag&256||ge&&Ji(ge.vnode)&&ge.vnode.shapeFlag&256)&&L.a&&wt(L.a,ee),L.isMounted=!0,P=k=Y=null}};L.scope.on();const ue=L.effect=new yo(le);L.scope.off();const oe=L.update=ue.run.bind(ue),T=L.job=ue.runIfDirty.bind(ue);T.i=L,T.id=L.uid,ue.scheduler=()=>_f(T),dr(L,!0),oe()},z=(L,P,k)=>{P.component=L;const Y=L.vnode.props;L.vnode=P,L.next=null,Py(L,P.props,Y,k),Iy(L,P.children,k),ar(),xd(L),lr()},W=(L,P,k,Y,ee,j,re,le,ue=!1)=>{const oe=L&&L.children,T=L?L.shapeFlag:0,x=P.children,{patchFlag:U,shapeFlag:Z}=P;if(U>0){if(U&128){ae(oe,x,k,Y,ee,j,re,le,ue);return}else if(U&256){ie(oe,x,k,Y,ee,j,re,le,ue);return}}Z&8?(T&16&&Ae(oe,ee,j),x!==oe&&u(k,x)):T&16?Z&16?ae(oe,x,k,Y,ee,j,re,le,ue):Ae(oe,ee,j,!0):(T&8&&u(k,""),Z&16&&N(x,k,Y,ee,j,re,le,ue))},ie=(L,P,k,Y,ee,j,re,le,ue)=>{L=L||xs,P=P||xs;const oe=L.length,T=P.length,x=Math.min(oe,T);let U;for(U=0;U<x;U++){const Z=P[U]=ue?Xi(P[U]):mn(P[U]);g(L[U],Z,k,null,ee,j,re,le,ue)}oe>T?Ae(L,ee,j,!0,!1,x):N(P,k,Y,ee,j,re,le,ue,x)},ae=(L,P,k,Y,ee,j,re,le,ue)=>{let oe=0;const T=P.length;let x=L.length-1,U=T-1;for(;oe<=x&&oe<=U;){const Z=L[oe],Q=P[oe]=ue?Xi(P[oe]):mn(P[oe]);if(jn(Z,Q))g(Z,Q,k,null,ee,j,re,le,ue);else break;oe++}for(;oe<=x&&oe<=U;){const Z=L[x],Q=P[U]=ue?Xi(P[U]):mn(P[U]);if(jn(Z,Q))g(Z,Q,k,null,ee,j,re,le,ue);else break;x--,U--}if(oe>x){if(oe<=U){const Z=U+1,Q=Z<T?P[Z].el:Y;for(;oe<=U;)g(null,P[oe]=ue?Xi(P[oe]):mn(P[oe]),k,Q,ee,j,re,le,ue),oe++}}else if(oe>U)for(;oe<=x;)me(L[oe],ee,j,!0),oe++;else{const Z=oe,Q=oe,se=new Map;for(oe=Q;oe<=U;oe++){const Re=P[oe]=ue?Xi(P[oe]):mn(P[oe]);Re.key!=null&&se.set(Re.key,oe)}let ge,fe=0;const _e=U-Q+1;let Ce=!1,Be=0;const de=new Array(_e);for(oe=0;oe<_e;oe++)de[oe]=0;for(oe=Z;oe<=x;oe++){const Re=L[oe];if(fe>=_e){me(Re,ee,j,!0);continue}let Pe;if(Re.key!=null)Pe=se.get(Re.key);else for(ge=Q;ge<=U;ge++)if(de[ge-Q]===0&&jn(Re,P[ge])){Pe=ge;break}Pe===void 0?me(Re,ee,j,!0):(de[Pe-Q]=oe+1,Pe>=Be?Be=Pe:Ce=!0,g(Re,P[Pe],k,null,ee,j,re,le,ue),fe++)}const it=Ce?Uy(de):xs;for(ge=it.length-1,oe=_e-1;oe>=0;oe--){const Re=Q+oe,Pe=P[Re],De=Re+1<T?P[Re+1].el:Y;de[oe]===0?g(null,Pe,k,De,ee,j,re,le,ue):Ce&&(ge<0||oe!==it[ge]?he(Pe,k,De,2):ge--)}}},he=(L,P,k,Y,ee=null)=>{const{el:j,type:re,transition:le,children:ue,shapeFlag:oe}=L;if(oe&6){he(L.component.subTree,P,k,Y);return}if(oe&128){L.suspense.move(P,k,Y);return}if(oe&64){re.move(L,P,k,Ne);return}if(re===Ct){i(j,P,k);for(let x=0;x<ue.length;x++)he(ue[x],P,k,Y);i(L.anchor,P,k);return}if(re===Rr){v(L,P,k);return}if(Y!==2&&oe&1&&le)if(Y===0)le.beforeEnter(j),i(j,P,k),wt(()=>le.enter(j),ee);else{const{leave:x,delayLeave:U,afterLeave:Z}=le,Q=()=>i(j,P,k),se=()=>{x(j,()=>{Q(),Z&&Z()})};U?U(j,Q,se):se()}else i(j,P,k)},me=(L,P,k,Y=!1,ee=!1)=>{const{type:j,props:re,ref:le,children:ue,dynamicChildren:oe,shapeFlag:T,patchFlag:x,dirs:U,cacheIndex:Z}=L;if(x===-2&&(ee=!1),le!=null&&Ao(le,null,k,L,!0),Z!=null&&(P.renderCache[Z]=void 0),T&256){P.ctx.deactivate(L);return}const Q=T&1&&U,se=!Ji(L);let ge;if(se&&(ge=re&&re.onVnodeBeforeUnmount)&&pn(ge,P,L),T&6)xe(L.component,k,Y);else{if(T&128){L.suspense.unmount(k,Y);return}Q&&si(L,null,P,"beforeUnmount"),T&64?L.type.remove(L,P,k,Ne,Y):oe&&!oe.hasOnce&&(j!==Ct||x>0&&x&64)?Ae(oe,P,k,!1,!0):(j===Ct&&x&384||!ee&&T&16)&&Ae(ue,P,k),Y&&te(L)}(se&&(ge=re&&re.onVnodeUnmounted)||Q)&&wt(()=>{ge&&pn(ge,P,L),Q&&si(L,null,P,"unmounted")},k)},te=L=>{const{type:P,el:k,anchor:Y,transition:ee}=L;if(P===Ct){ce(k,Y);return}if(P===Rr){y(L);return}const j=()=>{r(k),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(L.shapeFlag&1&&ee&&!ee.persisted){const{leave:re,delayLeave:le}=ee,ue=()=>re(k,j);le?le(L.el,j,ue):ue()}else j()},ce=(L,P)=>{let k;for(;L!==P;)k=d(L),r(L),L=k;r(P)},xe=(L,P,k)=>{const{bum:Y,scope:ee,job:j,subTree:re,um:le,m:ue,a:oe}=L;sl(ue),sl(oe),Y&&bs(Y),ee.stop(),j&&(j.flags|=8,me(re,L,P,k)),le&&wt(le,P),wt(()=>{L.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Ae=(L,P,k,Y=!1,ee=!1,j=0)=>{for(let re=j;re<L.length;re++)me(L[re],P,k,Y,ee)},we=L=>{if(L.shapeFlag&6)return we(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const P=d(L.anchor||L.el),k=P&&P[zm];return k?d(k):P};let ke=!1;const Fe=(L,P,k)=>{L==null?P._vnode&&me(P._vnode,null,null,!0):g(P._vnode||null,L,P,null,null,null,k),P._vnode=L,ke||(ke=!0,xd(),il(),ke=!1)},Ne={p:g,um:me,m:he,r:te,mt:D,mc:N,pc:W,pbc:b,n:we,o:t};let ze,G;return e&&([ze,G]=e(Ne)),{render:Fe,hydrate:ze,createApp:wy(Fe,ze)}}function wc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function dr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Eg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rf(t,e,n=!1){const i=t.children,r=e.children;if(ye(i)&&ye(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Xi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Rf(o,a)),a.type===Zi&&(a.el=o.el)}}function Uy(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Mg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mg(e)}function sl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const bg=Symbol.for("v-scx"),Tg=()=>mo(bg);function Oy(t,e){return Wo(t,null,e)}function Fy(t,e){return Wo(t,null,{flush:"post"})}function Ag(t,e){return Wo(t,null,{flush:"sync"})}function As(t,e,n){return Wo(t,e,n)}function Wo(t,e,n=Ze){const{immediate:i,deep:r,flush:s,once:o}=n,a=Qe({},n),l=e&&i||!e&&s!=="post";let c;if(Ls){if(s==="sync"){const p=Tg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Gt,p.resume=Gt,p.pause=Gt,p}}const u=Pt;a.call=(p,_,g)=>Gn(p,u,_,g);let f=!1;s==="post"?a.scheduler=p=>{wt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():_f(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=ES(t,e,a);return Ls&&(c?c.push(d):l&&d()),d}function By(t,e,n){const i=this.proxy,r=Ve(t)?t.includes(".")?wg(i,t):()=>i[t]:t.bind(i,i);let s;Ie(e)?s=e:(s=e.handler,n=e);const o=Fr(this),a=Wo(r,s.bind(i),n);return o(),a}function wg(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Hy(t,e,n=Ze){const i=Wn(),r=mt(e),s=_n(e),o=Cg(t,r),a=Nm((l,c)=>{let u,f=Ze,d;return Ag(()=>{const p=t[r];ln(u,p)&&(u=p,c())}),{get(){return l(),n.get?n.get(u):u},set(p){const _=n.set?n.set(p):p;if(!ln(_,u)&&!(f!==Ze&&ln(p,f)))return;const g=i.vnode.props;g&&(e in g||r in g||s in g)&&(`onUpdate:${e}`in g||`onUpdate:${r}`in g||`onUpdate:${s}`in g)||(u=p,c()),i.emit(`update:${e}`,_),ln(p,_)&&ln(p,f)&&!ln(_,d)&&c(),f=p,d=_}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||Ze:a,done:!1}:{done:!0}}}},a}const Cg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mt(e)}Modifiers`]||t[`${_n(e)}Modifiers`];function ky(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ze;let r=n;const s=e.startsWith("update:"),o=s&&Cg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Ve(u)?u.trim():u)),o.number&&(r=n.map(Za)));let a,l=i[a=Ms(e)]||i[a=Ms(mt(e))];!l&&s&&(l=i[a=Ms(_n(e))]),l&&Gn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Gn(c,t,6,r)}}function Rg(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ie(t)){const l=c=>{const u=Rg(c,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(lt(t)&&i.set(t,null),null):(ye(s)?s.forEach(l=>o[l]=null):Qe(o,s),lt(t)&&i.set(t,o),o)}function jl(t,e){return!t||!Wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(t,e[0].toLowerCase()+e.slice(1))||rt(t,_n(e))||rt(t,e))}function Va(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:_,inheritAttrs:g}=t,m=To(t);let h,M;try{if(n.shapeFlag&4){const y=r||i,E=y;h=mn(c.call(E,y,u,f,p,d,_)),M=a}else{const y=e;h=mn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),M=e.props?a:zy(a)}}catch(y){go.length=0,Yr(y,t,1),h=at(At)}let v=h;if(M&&g!==!1){const y=Object.keys(M),{shapeFlag:E}=v;y.length&&E&7&&(s&&y.some(of)&&(M=Gy(M,s)),v=ci(v,M,!1,!0))}return n.dirs&&(v=ci(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Ri(v,n.transition),h=v,To(m),h}function Vy(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(Pi(r)){if(r.type!==At||r.children==="v-if"){if(n)return;n=r}}else return}return n}const zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wr(n))&&((e||(e={}))[n]=t[n]);return e},Gy=(t,e)=>{const n={};for(const i in t)(!of(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Wy(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Nd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!jl(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nd(i,o,c):!0:!!o;return!1}function Nd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!jl(n,s))return!0}return!1}function Kl({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const ol=t=>t.__isSuspense;let Tu=0;const Xy={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){if(t==null)$y(e,n,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Yy(t,e,n,i,r,o,a,l,c)}},hydrate:jy,normalize:Ky},qy=Xy;function Co(t,e){const n=t.props&&t.props[e];Ie(n)&&n()}function $y(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=t.suspense=Pg(t,r,i,e,f,n,s,o,a,l);c(null,d.pendingBranch=t.ssContent,f,null,i,d,s,o),d.deps>0?(Co(t,"onPending"),Co(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),ws(d,t.ssFallback)):d.resolve(!1,!0)}function Yy(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:_,pendingBranch:g,isInFallback:m,isHydrating:h}=f;if(g)f.pendingBranch=d,jn(d,g)?(l(g,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(h||(l(_,p,n,i,r,null,s,o,a),ws(f,p)))):(f.pendingId=Tu++,h?(f.isHydrating=!1,f.activeBranch=g):c(g,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(_,p,n,i,r,null,s,o,a),ws(f,p))):_&&jn(d,_)?(l(_,d,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(_&&jn(d,_))l(_,d,n,i,r,f,s,o,a),ws(f,d);else if(Co(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Tu++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:M,pendingId:v}=f;M>0?setTimeout(()=>{f.pendingId===v&&f.fallback(p)},M):M===0&&f.fallback(p)}}function Pg(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:d,um:p,n:_,o:{parentNode:g,remove:m}}=c;let h;const M=Jy(t);M&&e&&e.pendingBranch&&(h=e.pendingId,e.deps++);const v=t.props?Qa(t.props.timeout):void 0,y=s,E={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Tu++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(A=!1,C=!1){const{vnode:N,activeBranch:S,pendingBranch:b,pendingId:I,effects:R,parentComponent:F,container:D}=E;let H=!1;E.isHydrating?E.isHydrating=!1:A||(H=S&&b.transition&&b.transition.mode==="out-in",H&&(S.transition.afterLeave=()=>{I===E.pendingId&&(d(b,D,s===y?_(S):s,0),Mo(R))}),S&&(g(S.el)===D&&(s=_(S)),p(S,F,E,!0)),H||d(b,D,s,0)),ws(E,b),E.pendingBranch=null,E.isInFallback=!1;let B=E.parent,z=!1;for(;B;){if(B.pendingBranch){B.effects.push(...R),z=!0;break}B=B.parent}!z&&!H&&Mo(R),E.effects=[],M&&e&&e.pendingBranch&&h===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),Co(N,"onResolve")},fallback(A){if(!E.pendingBranch)return;const{vnode:C,activeBranch:N,parentComponent:S,container:b,namespace:I}=E;Co(C,"onFallback");const R=_(N),F=()=>{E.isInFallback&&(f(null,A,b,R,S,null,I,a,l),ws(E,A))},D=A.transition&&A.transition.mode==="out-in";D&&(N.transition.afterLeave=F),E.isInFallback=!0,p(N,S,null,!0),D||F()},move(A,C,N){E.activeBranch&&d(E.activeBranch,A,C,N),E.container=A},next(){return E.activeBranch&&_(E.activeBranch)},registerDep(A,C,N){const S=!!E.pendingBranch;S&&E.deps++;const b=A.vnode.el;A.asyncDep.catch(I=>{Yr(I,A,0)}).then(I=>{if(A.isUnmounted||E.isUnmounted||E.pendingId!==A.suspenseId)return;A.asyncResolved=!0;const{vnode:R}=A;Ru(A,I,!1),b&&(R.el=b);const F=!b&&A.subTree.el;C(A,R,g(b||A.subTree.el),b?null:_(A.subTree),E,o,N),F&&m(F),Kl(A,R.el),S&&--E.deps===0&&E.resolve()})},unmount(A,C){E.isUnmounted=!0,E.activeBranch&&p(E.activeBranch,n,A,C),E.pendingBranch&&p(E.pendingBranch,n,A,C)}};return E}function jy(t,e,n,i,r,s,o,a,l){const c=e.suspense=Pg(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function Ky(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Id(i?n.default:n),t.ssFallback=i?Id(n.fallback):at(At)}function Id(t){let e;if(Ie(t)){const n=Or&&t._c;n&&(t._d=!1,Vt()),t=t(),n&&(t._d=!0,e=Qt,Dg())}return ye(t)&&(t=Vy(t)),t=mn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Lg(t,e){e&&e.pendingBranch?ye(t)?e.effects.push(...t):e.effects.push(t):Mo(t)}function ws(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,Kl(i,r))}function Jy(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ct=Symbol.for("v-fgt"),Zi=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),Rr=Symbol.for("v-stc"),go=[];let Qt=null;function Vt(t=!1){go.push(Qt=t?null:[])}function Dg(){go.pop(),Qt=go[go.length-1]||null}let Or=1;function Au(t,e=!1){Or+=t,t<0&&Qt&&e&&(Qt.hasOnce=!0)}function Ng(t){return t.dynamicChildren=Or>0?Qt||xs:null,Dg(),Or>0&&Qt&&Qt.push(t),t}function kn(t,e,n,i,r,s){return Ng(Te(t,e,n,i,r,s,!0))}function Ro(t,e,n,i,r){return Ng(at(t,e,n,i,r,!0))}function Pi(t){return t?t.__v_isVNode===!0:!1}function jn(t,e){return t.type===e.type&&t.key===e.key}function Zy(t){}const Ig=({key:t})=>t??null,za=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||Dt(t)||Ie(t)?{i:Lt,r:t,k:e,f:!!n}:t:null);function Te(t,e=null,n=null,i=0,r=null,s=t===Ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ig(e),ref:e&&za(e),scopeId:Xl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Lt};return a?(Pf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ve(n)?8:16),Or>0&&!o&&Qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qt.push(l),l}const at=Qy;function Qy(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===rg)&&(t=At),Pi(t)){const a=ci(t,e,!0);return n&&Pf(a,n),Or>0&&!s&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(t)]=a:Qt.push(a)),a.patchFlag=-2,a}if(ox(t)&&(t=t.__vccOpts),e){e=Ug(e);let{class:a,style:l}=e;a&&!Ve(a)&&(e.class=$r(a)),lt(l)&&(zl(l)&&!ye(l)&&(l=Qe({},l)),e.style=ko(l))}const o=Ve(t)?1:ol(t)?128:Gm(t)?64:lt(t)?4:Ie(t)?2:0;return Te(t,e,n,i,r,o,s,!0)}function Ug(t){return t?zl(t)||dg(t)?Qe({},t):t:null}function ci(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Og(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ig(c),ref:e&&e.ref?n&&s?ye(s)?s.concat(za(e)):[s,za(e)]:za(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ci(t.ssContent),ssFallback:t.ssFallback&&ci(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ri(u,l.clone(u)),u}function Xo(t=" ",e=0){return at(Zi,null,t,e)}function ex(t,e){const n=at(Rr,null,t);return n.staticCount=e,n}function al(t="",e=!1){return e?(Vt(),Ro(At,null,t)):at(At,null,t)}function mn(t){return t==null||typeof t=="boolean"?at(At):ye(t)?at(Ct,null,t.slice()):Pi(t)?Xi(t):at(Zi,null,String(t))}function Xi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ci(t)}function Pf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ye(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Pf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!dg(e)?e._ctx=Lt:r===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),i&64?(n=16,e=[Xo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Og(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=$r([e.class,i.class]));else if(r==="style")e.style=ko([e.style,i.style]);else if(Wr(r)){const s=e[r],o=i[r];o&&s!==o&&!(ye(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function pn(t,e,n,i=null){Gn(t,e,7,[n,i])}const tx=lg();let nx=0;function Fg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||tx,s={uid:nx++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new uf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pg(i,r),emitsOptions:Rg(i,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ky.bind(null,s),t.ce&&t.ce(s),s}let Pt=null;const Wn=()=>Pt||Lt;let ll,wu;{const t=Ul(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ll=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),wu=e("__VUE_SSR_SETTERS__",n=>Ls=n)}const Fr=t=>{const e=Pt;return ll(t),t.scope.on(),()=>{t.scope.off(),ll(e)}},Cu=()=>{Pt&&Pt.scope.off(),ll(null)};function Bg(t){return t.vnode.shapeFlag&4}let Ls=!1;function Hg(t,e=!1,n=!1){e&&wu(e);const{props:i,children:r}=t.vnode,s=Bg(t);Ry(t,i,s,e),Ny(t,r,n);const o=s?ix(t,e):void 0;return e&&wu(!1),o}function ix(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,xu);const{setup:i}=n;if(i){ar();const r=t.setupContext=i.length>1?zg(t):null,s=Fr(t),o=Gs(i,t,0,[t.props,r]),a=lf(o);if(lr(),s(),(a||t.sp)&&!Ji(t)&&Ef(t),a){if(o.then(Cu,Cu),e)return o.then(l=>{Ru(t,l,e)}).catch(l=>{Yr(l,t,0)});t.asyncDep=o}else Ru(t,o,e)}else Vg(t,e)}function Ru(t,e,n){Ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:lt(e)&&(t.setupState=gf(e)),Vg(t,n)}let cl,Pu;function kg(t){cl=t,Pu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,ay))}}const rx=()=>!cl;function Vg(t,e,n){const i=t.type;if(!t.render){if(!e&&cl&&!i.render){const r=i.template||wf(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Qe(Qe({isCustomElement:s,delimiters:a},o),l);i.render=cl(r,c)}}t.render=i.render||Gt,Pu&&Pu(t)}{const r=Fr(t);ar();try{xy(t)}finally{lr(),r()}}}const sx={get(t,e){return Kt(t,"get",""),t[e]}};function zg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sx),slots:t.slots,emit:t.emit,expose:e}}function qo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gf(mf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in po)return po[n](t)},has(e,n){return n in e||n in po}})):t.proxy}function Lu(t,e=!0){return Ie(t)?t.displayName||t.name:t.name||e&&t.__name}function ox(t){return Ie(t)&&"__vccOpts"in t}const Br=(t,e)=>vS(t,e,Ls);function Gg(t,e,n){const i=arguments.length;return i===2?lt(e)&&!ye(e)?Pi(e)?at(t,null,[e]):at(t,e):at(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Pi(n)&&(n=[n]),at(t,e,n))}function ax(){}function lx(t,e,n,i){const r=n[i];if(r&&Wg(r,t))return r;const s=e();return s.memo=t.slice(),s.cacheIndex=i,n[i]=s}function Wg(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(ln(n[i],e[i]))return!1;return Or>0&&Qt&&Qt.push(t),!0}const Xg="3.5.13",cx=Gt,ux=wS,fx=_s,dx=km,hx={createComponentInstance:Fg,setupComponent:Hg,renderComponentRoot:Va,setCurrentRenderingInstance:To,isVNode:Pi,normalizeVNode:mn,getComponentPublicInstance:qo,ensureValidVNode:Af,pushWarningContext:MS,popWarningContext:bS},px=hx,mx=null,gx=null,_x=null;/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Du;const Ud=typeof window<"u"&&window.trustedTypes;if(Ud)try{Du=Ud.createPolicy("vue",{createHTML:t=>t})}catch{}const qg=Du?t=>Du.createHTML(t):t=>t,vx="http://www.w3.org/2000/svg",Sx="http://www.w3.org/1998/Math/MathML",xi=typeof document<"u"?document:null,Od=xi&&xi.createElement("template"),yx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?xi.createElementNS(vx,t):e==="mathml"?xi.createElementNS(Sx,t):n?xi.createElement(t,{is:n}):xi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>xi.createTextNode(t),createComment:t=>xi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Od.innerHTML=qg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Od.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ni="transition",Ks="animation",Ds=Symbol("_vtc"),$g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Yg=Qe({},yf,$g),xx=t=>(t.displayName="Transition",t.props=Yg,t),Ex=xx((t,{slots:e})=>Gg(Ym,jg(t),e)),hr=(t,e=[])=>{ye(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fd=t=>t?ye(t)?t.some(e=>e.length>1):t.length>1:!1;function jg(t){const e={};for(const R in t)R in $g||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=Mx(r),g=_&&_[0],m=_&&_[1],{onBeforeEnter:h,onEnter:M,onEnterCancelled:v,onLeave:y,onLeaveCancelled:E,onBeforeAppear:A=h,onAppear:C=M,onAppearCancelled:N=v}=e,S=(R,F,D,H)=>{R._enterCancelled=H,Vi(R,F?u:a),Vi(R,F?c:o),D&&D()},b=(R,F)=>{R._isLeaving=!1,Vi(R,f),Vi(R,p),Vi(R,d),F&&F()},I=R=>(F,D)=>{const H=R?C:M,B=()=>S(F,R,D);hr(H,[F,B]),Bd(()=>{Vi(F,R?l:s),ii(F,R?u:a),Fd(H)||Hd(F,i,g,B)})};return Qe(e,{onBeforeEnter(R){hr(h,[R]),ii(R,s),ii(R,o)},onBeforeAppear(R){hr(A,[R]),ii(R,l),ii(R,c)},onEnter:I(!1),onAppear:I(!0),onLeave(R,F){R._isLeaving=!0;const D=()=>b(R,F);ii(R,f),R._enterCancelled?(ii(R,d),Nu()):(Nu(),ii(R,d)),Bd(()=>{R._isLeaving&&(Vi(R,f),ii(R,p),Fd(y)||Hd(R,i,m,D))}),hr(y,[R,D])},onEnterCancelled(R){S(R,!1,void 0,!0),hr(v,[R])},onAppearCancelled(R){S(R,!0,void 0,!0),hr(N,[R])},onLeaveCancelled(R){b(R),hr(E,[R])}})}function Mx(t){if(t==null)return null;if(lt(t))return[Cc(t.enter),Cc(t.leave)];{const e=Cc(t);return[e,e]}}function Cc(t){return Qa(t)}function ii(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ds]||(t[Ds]=new Set)).add(e)}function Vi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Ds];n&&(n.delete(e),n.size||(t[Ds]=void 0))}function Bd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let bx=0;function Hd(t,e,n,i){const r=t._endId=++bx,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Kg(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function Kg(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(`${Ni}Delay`),s=i(`${Ni}Duration`),o=kd(r,s),a=i(`${Ks}Delay`),l=i(`${Ks}Duration`),c=kd(a,l);let u=null,f=0,d=0;e===Ni?o>0&&(u=Ni,f=o,d=s.length):e===Ks?c>0&&(u=Ks,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Ni:Ks:null,d=u?u===Ni?s.length:l.length:0);const p=u===Ni&&/\b(transform|all)(,|$)/.test(i(`${Ni}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function kd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Vd(n)+Vd(t[i])))}function Vd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Nu(){return document.body.offsetHeight}function Tx(t,e,n){const i=t[Ds];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ul=Symbol("_vod"),Jg=Symbol("_vsh"),Zg={beforeMount(t,{value:e},{transition:n}){t[ul]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Js(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Js(t,!0),i.enter(t)):i.leave(t,()=>{Js(t,!1)}):Js(t,e))},beforeUnmount(t,{value:e}){Js(t,e)}};function Js(t,e){t.style.display=e?t[ul]:"none",t[Jg]=!e}function Ax(){Zg.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Qg=Symbol("");function wx(t){const e=Wn();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>fl(s,r))},i=()=>{const r=t(e.proxy);e.ce?fl(e.ce,r):Iu(e.subTree,r),n(r)};Mf(()=>{Mo(i)}),jr(()=>{As(i,Gt,{flush:"post"});const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Go(()=>r.disconnect())})}function Iu(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Iu(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)fl(t.el,e);else if(t.type===Ct)t.children.forEach(n=>Iu(n,e));else if(t.type===Rr){let{el:n,anchor:i}=t;for(;n&&(fl(n,e),n!==i);)n=n.nextSibling}}function fl(t,e){if(t.nodeType===1){const n=t.style;let i="";for(const r in e)n.setProperty(`--${r}`,e[r]),i+=`--${r}: ${e[r]};`;n[Qg]=i}}const Cx=/(^|;)\s*display\s*:/;function Rx(t,e,n){const i=t.style,r=Ve(n);let s=!1;if(n&&!r){if(e)if(Ve(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ga(i,a,"")}else for(const o in e)n[o]==null&&Ga(i,o,"");for(const o in n)o==="display"&&(s=!0),Ga(i,o,n[o])}else if(r){if(e!==n){const o=i[Qg];o&&(n+=";"+o),i.cssText=n,s=Cx.test(n)}}else e&&t.removeAttribute("style");ul in t&&(t[ul]=s?i.display:"",t[Jg]&&(i.display="none"))}const zd=/\s*!important$/;function Ga(t,e,n){if(ye(n))n.forEach(i=>Ga(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Px(t,e);zd.test(n)?t.setProperty(_n(i),n.replace(zd,""),"important"):t[i]=n}}const Gd=["Webkit","Moz","ms"],Rc={};function Px(t,e){const n=Rc[e];if(n)return n;let i=mt(e);if(i!=="filter"&&i in t)return Rc[e]=i;i=qr(i);for(let r=0;r<Gd.length;r++){const s=Gd[r]+i;if(s in t)return Rc[e]=s}return e}const Wd="http://www.w3.org/1999/xlink";function Xd(t,e,n,i,r,s=F0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wd,e.slice(6,e.length)):t.setAttributeNS(Wd,e,n):n==null||s&&!um(n)?t.removeAttribute(e):t.setAttribute(e,s?"":xn(n)?String(n):n)}function qd(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?qg(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=um(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function bi(t,e,n,i){t.addEventListener(e,n,i)}function Lx(t,e,n,i){t.removeEventListener(e,n,i)}const $d=Symbol("_vei");function Dx(t,e,n,i,r=null){const s=t[$d]||(t[$d]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Nx(e);if(i){const c=s[e]=Ox(i,r);bi(t,a,c,l)}else o&&(Lx(t,a,o,l),s[e]=void 0)}}const Yd=/(?:Once|Passive|Capture)$/;function Nx(t){let e;if(Yd.test(t)){e={};let i;for(;i=t.match(Yd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_n(t.slice(2)),e]}let Pc=0;const Ix=Promise.resolve(),Ux=()=>Pc||(Ix.then(()=>Pc=0),Pc=Date.now());function Ox(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Gn(Fx(i,n.value),e,5,[i])};return n.value=t,n.attached=Ux(),n}function Fx(t,e){if(ye(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const jd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Bx=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Tx(t,i,o):e==="style"?Rx(t,n,i):Wr(e)?of(e)||Dx(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hx(t,e,i,o))?(qd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xd(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ve(i))?qd(t,mt(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Xd(t,e,i,o))};function Hx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&jd(e)&&Ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return jd(e)&&Ve(n)?!1:e in t}const Kd={};/*! #__NO_SIDE_EFFECTS__ */function e_(t,e,n){const i=xf(t,e);Nl(i)&&Qe(i,e);class r extends Jl{constructor(o){super(i,o,n)}}return r.def=i,r}/*! #__NO_SIDE_EFFECTS__ */const kx=(t,e)=>e_(t,e,h_),Vx=typeof HTMLElement<"u"?HTMLElement:class{};class Jl extends Vx{constructor(e,n={},i=hl){super(),this._def=e,this._props=n,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&i!==hl?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def)}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof Jl){this._parent=e;break}this._instance||(this._resolved?(this._setParent(),this._update()):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._instance.provides=e._instance.provides)}disconnectedCallback(){this._connected=!1,Wl(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const r of i)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,r=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:s,styles:o}=i;let a;if(s&&!ye(s))for(const l in s){const c=s[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=Qa(this._props[l])),(a||(a=Object.create(null)))[mt(l)]=!0)}this._numberProps=a,r&&this._resolveProps(i),this.shadowRoot&&this._applyStyles(o),this._mount(i)},n=this._def.__asyncLoader;n?this._pendingResolve=n().then(i=>e(this._def=i,!0)):e(this._def)}_mount(e){this._app=this._createApp(e),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const n=this._instance&&this._instance.exposed;if(n)for(const i in n)rt(this,i)||Object.defineProperty(this,i,{get:()=>Gl(n[i])})}_resolveProps(e){const{props:n}=e,i=ye(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&i.includes(r)&&this._setProp(r,this[r]);for(const r of i.map(mt))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(s){this._setProp(r,s,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const n=this.hasAttribute(e);let i=n?this.getAttribute(e):Kd;const r=mt(e);n&&this._numberProps&&this._numberProps[r]&&(i=Qa(i)),this._setProp(r,i,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,r=!1){if(n!==this._props[e]&&(n===Kd?delete this._props[e]:(this._props[e]=n,e==="key"&&this._app&&(this._app._ceVNode.key=n)),r&&this._instance&&this._update(),i)){const s=this._ob;s&&s.disconnect(),n===!0?this.setAttribute(_n(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(_n(e),n+""):n||this.removeAttribute(_n(e)),s&&s.observe(this,{attributes:!0})}}_update(){d_(this._createVNode(),this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const n=at(this._def,Qe(e,this._props));return this._instance||(n.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;const r=(s,o)=>{this.dispatchEvent(new CustomEvent(s,Nl(o[0])?Qe({detail:o},o[0]):{detail:o}))};i.emit=(s,...o)=>{r(s,o),_n(s)!==s&&r(_n(s),o)},this._setParent()}),n}_applyStyles(e,n){if(!e)return;if(n){if(n===this._def||this._styleChildren.has(n))return;this._styleChildren.add(n)}const i=this._nonce;for(let r=e.length-1;r>=0;r--){const s=document.createElement("style");i&&s.setAttribute("nonce",i),s.textContent=e[r],this.shadowRoot.prepend(s)}}_parseSlots(){const e=this._slots={};let n;for(;n=this.firstChild;){const i=n.nodeType===1&&n.getAttribute("slot")||"default";(e[i]||(e[i]=[])).push(n),this.removeChild(n)}}_renderSlots(){const e=(this._teleportTarget||this).querySelectorAll("slot"),n=this._instance.type.__scopeId;for(let i=0;i<e.length;i++){const r=e[i],s=r.getAttribute("name")||"default",o=this._slots[s],a=r.parentNode;if(o)for(const l of o){if(n&&l.nodeType===1){const c=n+"-s",u=document.createTreeWalker(l,1);l.setAttribute(c,"");let f;for(;f=u.nextNode();)f.setAttribute(c,"")}a.insertBefore(l,r)}else for(;r.firstChild;)a.insertBefore(r.firstChild,r);a.removeChild(r)}}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}}function t_(t){const e=Wn(),n=e&&e.ce;return n||null}function zx(){const t=t_();return t&&t.shadowRoot}function Gx(t="$style"){{const e=Wn();if(!e)return Ze;const n=e.type.__cssModules;if(!n)return Ze;const i=n[t];return i||Ze}}const n_=new WeakMap,i_=new WeakMap,dl=Symbol("_moveCb"),Jd=Symbol("_enterCb"),Wx=t=>(delete t.props.mode,t),Xx=Wx({name:"TransitionGroup",props:Qe({},Yg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Wn(),i=Sf();let r,s;return Yl(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Kx(r[0].el,n.vnode.el,o))return;r.forEach($x),r.forEach(Yx);const a=r.filter(jx);Nu(),a.forEach(l=>{const c=l.el,u=c.style;ii(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[dl]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[dl]=null,Vi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=tt(t),a=jg(o);let l=o.tag||Ct;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),Ri(u,Ps(u,a,i,n)),n_.set(u,u.el.getBoundingClientRect()))}s=e.default?ql(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Ri(u,Ps(u,a,i,n))}return at(l,null,s)}}}),qx=Xx;function $x(t){const e=t.el;e[dl]&&e[dl](),e[Jd]&&e[Jd]()}function Yx(t){i_.set(t,t.el.getBoundingClientRect())}function jx(t){const e=n_.get(t),n=i_.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function Kx(t,e,n){const i=t.cloneNode(),r=t[Ds];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=Kg(i);return s.removeChild(i),o}const sr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ye(e)?n=>bs(e,n):e};function Jx(t){t.target.composing=!0}function Zd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zn=Symbol("_assign"),Po={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[zn]=sr(r);const s=i||r.props&&r.props.type==="number";bi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Za(a)),t[zn](a)}),n&&bi(t,"change",()=>{t.value=t.value.trim()}),e||(bi(t,"compositionstart",Jx),bi(t,"compositionend",Zd),bi(t,"change",Zd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[zn]=sr(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Za(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},Lf={deep:!0,created(t,e,n){t[zn]=sr(n),bi(t,"change",()=>{const i=t._modelValue,r=Ns(t),s=t.checked,o=t[zn];if(ye(i)){const a=Ol(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Xr(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(s_(t,s))})},mounted:Qd,beforeUpdate(t,e,n){t[zn]=sr(n),Qd(t,e,n)}};function Qd(t,{value:e,oldValue:n},i){t._modelValue=e;let r;if(ye(e))r=Ol(e,i.props.value)>-1;else if(Xr(e))r=e.has(i.props.value);else{if(e===n)return;r=ir(e,s_(t,!0))}t.checked!==r&&(t.checked=r)}const Df={created(t,{value:e},n){t.checked=ir(e,n.props.value),t[zn]=sr(n),bi(t,"change",()=>{t[zn](Ns(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[zn]=sr(i),e!==n&&(t.checked=ir(e,i.props.value))}},r_={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=Xr(e);bi(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Za(Ns(o)):Ns(o));t[zn](t.multiple?r?new Set(s):s:s[0]),t._assigning=!0,Wl(()=>{t._assigning=!1})}),t[zn]=sr(i)},mounted(t,{value:e}){eh(t,e)},beforeUpdate(t,e,n){t[zn]=sr(n)},updated(t,{value:e}){t._assigning||eh(t,e)}};function eh(t,e){const n=t.multiple,i=ye(e);if(!(n&&!i&&!Xr(e))){for(let r=0,s=t.options.length;r<s;r++){const o=t.options[r],a=Ns(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Ol(e,a)>-1}else o.selected=e.has(a);else if(ir(Ns(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ns(t){return"_value"in t?t._value:t.value}function s_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const o_={created(t,e,n){ha(t,e,n,null,"created")},mounted(t,e,n){ha(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){ha(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){ha(t,e,n,i,"updated")}};function a_(t,e){switch(t){case"SELECT":return r_;case"TEXTAREA":return Po;default:switch(e){case"checkbox":return Lf;case"radio":return Df;default:return Po}}}function ha(t,e,n,i,r){const o=a_(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,i)}function Zx(){Po.getSSRProps=({value:t})=>({value:t}),Df.getSSRProps=({value:t},e)=>{if(e.props&&ir(e.props.value,t))return{checked:!0}},Lf.getSSRProps=({value:t},e)=>{if(ye(t)){if(e.props&&Ol(t,e.props.value)>-1)return{checked:!0}}else if(Xr(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},o_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=a_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const Qx=["ctrl","shift","alt","meta"],eE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qx.some(n=>t[`${n}Key`]&&!e.includes(n))},tE=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=eE[e[o]];if(a&&a(r,e))return}return t(r,...s)})},nE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},l_=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=r=>{if(!("key"in r))return;const s=_n(r.key);if(e.some(o=>o===s||nE[o]===s))return t(r)})},c_=Qe({patchProp:Bx},yx);let _o,th=!1;function u_(){return _o||(_o=Sg(c_))}function f_(){return _o=th?_o:yg(c_),th=!0,_o}const d_=(...t)=>{u_().render(...t)},iE=(...t)=>{f_().hydrate(...t)},hl=(...t)=>{const e=u_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=m_(i);if(!r)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,p_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},h_=(...t)=>{const e=f_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=m_(i);if(r)return n(r,!0,p_(r))},e};function p_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function m_(t){return Ve(t)?document.querySelector(t):t}let nh=!1;const rE=()=>{nh||(nh=!0,Zx(),Ax())},sE=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Ym,BaseTransitionPropsValidators:yf,Comment:At,DeprecationTypes:_x,EffectScope:uf,ErrorCodes:AS,ErrorTypeStrings:ux,Fragment:Ct,KeepAlive:ZS,ReactiveEffect:yo,Static:Rr,Suspense:qy,Teleport:IS,Text:Zi,TrackOpTypes:SS,Transition:Ex,TransitionGroup:qx,TriggerOpTypes:yS,VueElement:Jl,assertNumber:TS,callWithAsyncErrorHandling:Gn,callWithErrorHandling:Gs,camelize:mt,capitalize:qr,cloneVNode:ci,compatUtils:gx,computed:Br,createApp:hl,createBlock:Ro,createCommentVNode:al,createElementBlock:kn,createElementVNode:Te,createHydrationRenderer:yg,createPropsRestProxy:Sy,createRenderer:Sg,createSSRApp:h_,createSlots:ry,createStaticVNode:ex,createTextVNode:Xo,createVNode:at,customRef:Nm,defineAsyncComponent:KS,defineComponent:xf,defineCustomElement:e_,defineEmits:cy,defineExpose:uy,defineModel:hy,defineOptions:fy,defineProps:ly,defineSSRCustomElement:kx,defineSlots:dy,devtools:fx,effect:V0,effectScope:hm,getCurrentInstance:Wn,getCurrentScope:pm,getCurrentWatcher:xS,getTransitionRawChildren:ql,guardReactiveProps:Ug,h:Gg,handleError:Yr,hasInjectionContext:Cy,hydrate:iE,hydrateOnIdle:WS,hydrateOnInteraction:YS,hydrateOnMediaQuery:$S,hydrateOnVisible:qS,initCustomFormatter:ax,initDirectivesForSSR:rE,inject:mo,isMemoSame:Wg,isProxy:zl,isReactive:Ki,isReadonly:rr,isRef:Dt,isRuntimeOnly:rx,isShallow:wn,isVNode:Pi,markRaw:mf,mergeDefaults:_y,mergeModels:vy,mergeProps:Og,nextTick:Wl,normalizeClass:$r,normalizeProps:w0,normalizeStyle:ko,onActivated:Km,onBeforeMount:Qm,onBeforeUnmount:zo,onBeforeUpdate:Mf,onDeactivated:Jm,onErrorCaptured:ig,onMounted:jr,onRenderTracked:ng,onRenderTriggered:tg,onScopeDispose:H0,onServerPrefetch:eg,onUnmounted:Go,onUpdated:Yl,onWatcherCleanup:Um,openBlock:Vt,popScopeId:LS,provide:cg,proxyRefs:gf,pushScopeId:PS,queuePostFlushCb:Mo,reactive:kl,readonly:pf,ref:un,registerRuntimeCompiler:kg,render:d_,renderList:sg,renderSlot:sy,resolveComponent:ty,resolveDirective:iy,resolveDynamicComponent:ny,resolveFilter:mx,resolveTransitionHooks:Ps,setBlockTracking:Au,setDevtoolsHook:dx,setTransitionHooks:Ri,shallowReactive:Pm,shallowReadonly:aS,shallowRef:Lm,ssrContextKey:bg,ssrUtils:px,stop:z0,toDisplayString:Bt,toHandlerKey:Ms,toHandlers:oy,toRaw:tt,toRef:gS,toRefs:hS,toValue:uS,transformVNodeArgs:Zy,triggerRef:cS,unref:Gl,useAttrs:gy,useCssModule:Gx,useCssVars:wx,useHost:t_,useId:OS,useModel:Hy,useSSRContext:Tg,useShadowRoot:zx,useSlots:my,useTemplateRef:FS,useTransitionState:Sf,vModelCheckbox:Lf,vModelDynamic:o_,vModelRadio:Df,vModelSelect:r_,vModelText:Po,vShow:Zg,version:Xg,warn:cx,watch:As,watchEffect:Oy,watchPostEffect:Fy,watchSyncEffect:Ag,withAsyncContext:yy,withCtx:vf,withDefaults:py,withDirectives:Vm,withKeys:l_,withMemo:lx,withModifiers:tE,withScopeId:DS},Symbol.toStringTag,{value:"Module"}));/**
* @vue/compiler-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Lo=Symbol(""),vo=Symbol(""),Nf=Symbol(""),pl=Symbol(""),g_=Symbol(""),Hr=Symbol(""),__=Symbol(""),v_=Symbol(""),If=Symbol(""),Uf=Symbol(""),$o=Symbol(""),Of=Symbol(""),S_=Symbol(""),Ff=Symbol(""),Bf=Symbol(""),Hf=Symbol(""),kf=Symbol(""),Vf=Symbol(""),zf=Symbol(""),y_=Symbol(""),x_=Symbol(""),Zl=Symbol(""),ml=Symbol(""),Gf=Symbol(""),Wf=Symbol(""),Do=Symbol(""),Yo=Symbol(""),Xf=Symbol(""),Uu=Symbol(""),oE=Symbol(""),Ou=Symbol(""),gl=Symbol(""),aE=Symbol(""),lE=Symbol(""),qf=Symbol(""),cE=Symbol(""),uE=Symbol(""),$f=Symbol(""),E_=Symbol(""),Is={[Lo]:"Fragment",[vo]:"Teleport",[Nf]:"Suspense",[pl]:"KeepAlive",[g_]:"BaseTransition",[Hr]:"openBlock",[__]:"createBlock",[v_]:"createElementBlock",[If]:"createVNode",[Uf]:"createElementVNode",[$o]:"createCommentVNode",[Of]:"createTextVNode",[S_]:"createStaticVNode",[Ff]:"resolveComponent",[Bf]:"resolveDynamicComponent",[Hf]:"resolveDirective",[kf]:"resolveFilter",[Vf]:"withDirectives",[zf]:"renderList",[y_]:"renderSlot",[x_]:"createSlots",[Zl]:"toDisplayString",[ml]:"mergeProps",[Gf]:"normalizeClass",[Wf]:"normalizeStyle",[Do]:"normalizeProps",[Yo]:"guardReactiveProps",[Xf]:"toHandlers",[Uu]:"camelize",[oE]:"capitalize",[Ou]:"toHandlerKey",[gl]:"setBlockTracking",[aE]:"pushScopeId",[lE]:"popScopeId",[qf]:"withCtx",[cE]:"unref",[uE]:"isRef",[$f]:"withMemo",[E_]:"isMemoSame"};function fE(t){Object.getOwnPropertySymbols(t).forEach(e=>{Is[e]=t[e]})}const Dn={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function dE(t,e=""){return{type:0,source:e,children:t,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:Dn}}function No(t,e,n,i,r,s,o,a=!1,l=!1,c=!1,u=Dn){return t&&(a?(t.helper(Hr),t.helper(Fs(t.inSSR,c))):t.helper(Os(t.inSSR,c)),o&&t.helper(Vf)),{type:13,tag:e,props:n,children:i,patchFlag:r,dynamicProps:s,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function Pr(t,e=Dn){return{type:17,loc:e,elements:t}}function Vn(t,e=Dn){return{type:15,loc:e,properties:t}}function Mt(t,e){return{type:16,loc:Dn,key:Ve(t)?Xe(t,!0):t,value:e}}function Xe(t,e=!1,n=Dn,i=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:i}}function Qn(t,e=Dn){return{type:8,loc:e,children:t}}function Rt(t,e=[],n=Dn){return{type:14,loc:n,callee:t,arguments:e}}function Us(t,e=void 0,n=!1,i=!1,r=Dn){return{type:18,params:t,returns:e,newline:n,isSlot:i,loc:r}}function Fu(t,e,n,i=!0){return{type:19,test:t,consequent:e,alternate:n,newline:i,loc:Dn}}function hE(t,e,n=!1,i=!1){return{type:20,index:t,value:e,needPauseTracking:n,inVOnce:i,needArraySpread:!1,loc:Dn}}function pE(t){return{type:21,body:t,loc:Dn}}function Os(t,e){return t||e?If:Uf}function Fs(t,e){return t||e?__:v_}function Yf(t,{helper:e,removeHelper:n,inSSR:i}){t.isBlock||(t.isBlock=!0,n(Os(i,t.isComponent)),e(Hr),e(Fs(i,t.isComponent)))}const ih=new Uint8Array([123,123]),rh=new Uint8Array([125,125]);function sh(t){return t>=97&&t<=122||t>=65&&t<=90}function Tn(t){return t===32||t===10||t===9||t===12||t===13}function Ii(t){return t===47||t===62||Tn(t)}function _l(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const qt={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class mE{constructor(e,n){this.stack=e,this.cbs=n,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=ih,this.delimiterClose=rh,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=ih,this.delimiterClose=rh}getPos(e){let n=1,i=e+1;for(let r=this.newlines.length-1;r>=0;r--){const s=this.newlines[r];if(e>s){n=r+2,i=e-s;break}}return{column:i,line:n,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const n=this.index+1-this.delimiterOpen.length;n>this.sectionStart&&this.cbs.ontext(this.sectionStart,n),this.state=3,this.sectionStart=n}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){const n=this.sequenceIndex===this.currentSequence.length;if(!(n?Ii(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!n){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||Tn(e)){const n=this.index-this.currentSequence.length;if(this.sectionStart<n){const i=this.index;this.index=n,this.cbs.ontext(this.sectionStart,n),this.index=i}this.sectionStart=n+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===qt.TitleEnd||this.currentSequence===qt.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(e===60)}stateCDATASequence(e){e===qt.Cdata[this.sequenceIndex]?++this.sequenceIndex===qt.Cdata.length&&(this.state=28,this.currentSequence=qt.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);if(n===10&&this.newlines.push(this.index),n===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===qt.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,n){this.enterRCDATA(e,n),this.state=31}enterRCDATA(e,n){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=n}stateBeforeTagName(e){e===33?(this.state=22,this.sectionStart=this.index+1):e===63?(this.state=24,this.sectionStart=this.index+1):sh(e)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:e===116?this.state=30:this.state=e===115?29:6):e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){Ii(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(Ii(e)){const n=this.buffer.slice(this.sectionStart,this.index);n!=="template"&&this.enterRCDATA(_l("</"+n),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){Tn(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=sh(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||Tn(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):Tn(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):Tn(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||Ii(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||Ii(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||Ii(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||Ii(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||Ii(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):Tn(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):Tn(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,n){(e===n||this.fastForwardTo(n))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(n===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){Tn(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=qt.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){e===qt.ScriptEnd[3]?this.startSpecial(qt.ScriptEnd,4):e===qt.StyleEnd[3]?this.startSpecial(qt.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){e===qt.TitleEnd[3]?this.startSpecial(qt.TitleEnd,4):e===qt.TextareaEnd[3]?this.startSpecial(qt.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);switch(n===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(n);break}case 2:{this.stateInterpolationOpen(n);break}case 3:{this.stateInterpolation(n);break}case 4:{this.stateInterpolationClose(n);break}case 31:{this.stateSpecialStartSequence(n);break}case 32:{this.stateInRCDATA(n);break}case 26:{this.stateCDATASequence(n);break}case 19:{this.stateInAttrValueDoubleQuotes(n);break}case 12:{this.stateInAttrName(n);break}case 13:{this.stateInDirName(n);break}case 14:{this.stateInDirArg(n);break}case 15:{this.stateInDynamicDirArg(n);break}case 16:{this.stateInDirModifier(n);break}case 28:{this.stateInCommentLike(n);break}case 27:{this.stateInSpecialComment(n);break}case 11:{this.stateBeforeAttrName(n);break}case 6:{this.stateInTagName(n);break}case 34:{this.stateInSFCRootTagName(n);break}case 9:{this.stateInClosingTagName(n);break}case 5:{this.stateBeforeTagName(n);break}case 17:{this.stateAfterAttrName(n);break}case 20:{this.stateInAttrValueSingleQuotes(n);break}case 18:{this.stateBeforeAttrValue(n);break}case 8:{this.stateBeforeClosingTagName(n);break}case 10:{this.stateAfterClosingTagName(n);break}case 29:{this.stateBeforeSpecialS(n);break}case 30:{this.stateBeforeSpecialT(n);break}case 21:{this.stateInAttrValueNoQuotes(n);break}case 7:{this.stateInSelfClosingTag(n);break}case 23:{this.stateInDeclaration(n);break}case 22:{this.stateBeforeDeclaration(n);break}case 25:{this.stateBeforeComment(n);break}case 24:{this.stateInProcessingInstruction(n);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===qt.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,n){}}function oh(t,{compatConfig:e}){const n=e&&e[t];return t==="MODE"?n||3:n}function Lr(t,e){const n=oh("MODE",e),i=oh(t,e);return n===3?i===!0:i!==!1}function Io(t,e,n,...i){return Lr(t,e)}function jf(t){throw t}function M_(t){}function _t(t,e,n,i){const r=`https://vuejs.org/error-reference/#compiler-${t}`,s=new SyntaxError(String(r));return s.code=t,s.loc=e,s}const vn=t=>t.type===4&&t.isStatic;function b_(t){switch(t){case"Teleport":case"teleport":return vo;case"Suspense":case"suspense":return Nf;case"KeepAlive":case"keep-alive":return pl;case"BaseTransition":case"base-transition":return g_}}const gE=/^\d|[^\$\w\xA0-\uFFFF]/,Kf=t=>!gE.test(t),_E=/[A-Za-z_$\xA0-\uFFFF]/,vE=/[\.\?\w$\xA0-\uFFFF]/,SE=/\s+[.[]\s*|\s*[.[]\s+/g,T_=t=>t.type===4?t.content:t.loc.source,yE=t=>{const e=T_(t).trim().replace(SE,a=>a.trim());let n=0,i=[],r=0,s=0,o=null;for(let a=0;a<e.length;a++){const l=e.charAt(a);switch(n){case 0:if(l==="[")i.push(n),n=1,r++;else if(l==="(")i.push(n),n=2,s++;else if(!(a===0?_E:vE).test(l))return!1;break;case 1:l==="'"||l==='"'||l==="`"?(i.push(n),n=3,o=l):l==="["?r++:l==="]"&&(--r||(n=i.pop()));break;case 2:if(l==="'"||l==='"'||l==="`")i.push(n),n=3,o=l;else if(l==="(")s++;else if(l===")"){if(a===e.length-1)return!1;--s||(n=i.pop())}break;case 3:l===o&&(n=i.pop(),o=null);break}}return!r&&!s},A_=yE,xE=/^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,EE=t=>xE.test(T_(t)),ME=EE;function On(t,e,n=!1){for(let i=0;i<t.props.length;i++){const r=t.props[i];if(r.type===7&&(n||r.exp)&&(Ve(e)?r.name===e:e.test(r.name)))return r}}function Ql(t,e,n=!1,i=!1){for(let r=0;r<t.props.length;r++){const s=t.props[r];if(s.type===6){if(n)continue;if(s.name===e&&(s.value||i))return s}else if(s.name==="bind"&&(s.exp||i)&&br(s.arg,e))return s}}function br(t,e){return!!(t&&vn(t)&&t.content===e)}function bE(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function Lc(t){return t.type===5||t.type===2}function TE(t){return t.type===7&&t.name==="slot"}function vl(t){return t.type===1&&t.tagType===3}function Sl(t){return t.type===1&&t.tagType===2}const AE=new Set([Do,Yo]);function w_(t,e=[]){if(t&&!Ve(t)&&t.type===14){const n=t.callee;if(!Ve(n)&&AE.has(n))return w_(t.arguments[0],e.concat(t))}return[t,e]}function yl(t,e,n){let i,r=t.type===13?t.props:t.arguments[2],s=[],o;if(r&&!Ve(r)&&r.type===14){const a=w_(r);r=a[0],s=a[1],o=s[s.length-1]}if(r==null||Ve(r))i=Vn([e]);else if(r.type===14){const a=r.arguments[0];!Ve(a)&&a.type===15?ah(e,a)||a.properties.unshift(e):r.callee===Xf?i=Rt(n.helper(ml),[Vn([e]),r]):r.arguments.unshift(Vn([e])),!i&&(i=r)}else r.type===15?(ah(e,r)||r.properties.unshift(e),i=r):(i=Rt(n.helper(ml),[Vn([e]),r]),o&&o.callee===Yo&&(o=s[s.length-2]));t.type===13?o?o.arguments[0]=i:t.props=i:o?o.arguments[0]=i:t.arguments[2]=i}function ah(t,e){let n=!1;if(t.key.type===4){const i=t.key.content;n=e.properties.some(r=>r.key.type===4&&r.key.content===i)}return n}function Uo(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,i)=>n==="-"?"_":t.charCodeAt(i).toString())}`}function wE(t){return t.type===14&&t.callee===$f?t.arguments[1].returns:t}const CE=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,C_={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:oo,isPreTag:oo,isIgnoreNewlineTag:oo,isCustomElement:oo,onError:jf,onWarn:M_,comments:!1,prefixIdentifiers:!1};let st=C_,Oo=null,Ci="",jt=null,et=null,hn="",Si=-1,vr=-1,Jf=0,qi=!1,Bu=null;const gt=[],yt=new mE(gt,{onerr:hi,ontext(t,e){pa(Ht(t,e),t,e)},ontextentity(t,e,n){pa(t,e,n)},oninterpolation(t,e){if(qi)return pa(Ht(t,e),t,e);let n=t+yt.delimiterOpen.length,i=e-yt.delimiterClose.length;for(;Tn(Ci.charCodeAt(n));)n++;for(;Tn(Ci.charCodeAt(i-1));)i--;let r=Ht(n,i);r.includes("&")&&(r=st.decodeEntities(r,!1)),Hu({type:5,content:Xa(r,!1,Et(n,i)),loc:Et(t,e)})},onopentagname(t,e){const n=Ht(t,e);jt={type:1,tag:n,ns:st.getNamespace(n,gt[0],st.ns),tagType:0,props:[],children:[],loc:Et(t-1,e),codegenNode:void 0}},onopentagend(t){ch(t)},onclosetag(t,e){const n=Ht(t,e);if(!st.isVoidTag(n)){let i=!1;for(let r=0;r<gt.length;r++)if(gt[r].tag.toLowerCase()===n.toLowerCase()){i=!0,r>0&&hi(24,gt[0].loc.start.offset);for(let o=0;o<=r;o++){const a=gt.shift();Wa(a,e,o<r)}break}i||hi(23,R_(t,60))}},onselfclosingtag(t){const e=jt.tag;jt.isSelfClosing=!0,ch(t),gt[0]&&gt[0].tag===e&&Wa(gt.shift(),t)},onattribname(t,e){et={type:6,name:Ht(t,e),nameLoc:Et(t,e),value:void 0,loc:Et(t)}},ondirname(t,e){const n=Ht(t,e),i=n==="."||n===":"?"bind":n==="@"?"on":n==="#"?"slot":n.slice(2);if(!qi&&i===""&&hi(26,t),qi||i==="")et={type:6,name:n,nameLoc:Et(t,e),value:void 0,loc:Et(t)};else if(et={type:7,name:i,rawName:n,exp:void 0,arg:void 0,modifiers:n==="."?[Xe("prop")]:[],loc:Et(t)},i==="pre"){qi=yt.inVPre=!0,Bu=jt;const r=jt.props;for(let s=0;s<r.length;s++)r[s].type===7&&(r[s]=HE(r[s]))}},ondirarg(t,e){if(t===e)return;const n=Ht(t,e);if(qi)et.name+=n,Tr(et.nameLoc,e);else{const i=n[0]!=="[";et.arg=Xa(i?n:n.slice(1,-1),i,Et(t,e),i?3:0)}},ondirmodifier(t,e){const n=Ht(t,e);if(qi)et.name+="."+n,Tr(et.nameLoc,e);else if(et.name==="slot"){const i=et.arg;i&&(i.content+="."+n,Tr(i.loc,e))}else{const i=Xe(n,!0,Et(t,e));et.modifiers.push(i)}},onattribdata(t,e){hn+=Ht(t,e),Si<0&&(Si=t),vr=e},onattribentity(t,e,n){hn+=t,Si<0&&(Si=e),vr=n},onattribnameend(t){const e=et.loc.start.offset,n=Ht(e,t);et.type===7&&(et.rawName=n),jt.props.some(i=>(i.type===7?i.rawName:i.name)===n)&&hi(2,e)},onattribend(t,e){if(jt&&et){if(Tr(et.loc,e),t!==0)if(hn.includes("&")&&(hn=st.decodeEntities(hn,!0)),et.type===6)et.name==="class"&&(hn=L_(hn).trim()),t===1&&!hn&&hi(13,e),et.value={type:2,content:hn,loc:t===1?Et(Si,vr):Et(Si-1,vr+1)},yt.inSFCRoot&&jt.tag==="template"&&et.name==="lang"&&hn&&hn!=="html"&&yt.enterRCDATA(_l("</template"),0);else{let n=0;et.exp=Xa(hn,!1,Et(Si,vr),0,n),et.name==="for"&&(et.forParseResult=PE(et.exp));let i=-1;et.name==="bind"&&(i=et.modifiers.findIndex(r=>r.content==="sync"))>-1&&Io("COMPILER_V_BIND_SYNC",st,et.loc,et.rawName)&&(et.name="model",et.modifiers.splice(i,1))}(et.type!==7||et.name!=="pre")&&jt.props.push(et)}hn="",Si=vr=-1},oncomment(t,e){st.comments&&Hu({type:3,content:Ht(t,e),loc:Et(t-4,e+3)})},onend(){const t=Ci.length;for(let e=0;e<gt.length;e++)Wa(gt[e],t-1),hi(24,gt[e].loc.start.offset)},oncdata(t,e){gt[0].ns!==0?pa(Ht(t,e),t,e):hi(1,t-9)},onprocessinginstruction(t){(gt[0]?gt[0].ns:st.ns)===0&&hi(21,t-1)}}),lh=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,RE=/^\(|\)$/g;function PE(t){const e=t.loc,n=t.content,i=n.match(CE);if(!i)return;const[,r,s]=i,o=(f,d,p=!1)=>{const _=e.start.offset+d,g=_+f.length;return Xa(f,!1,Et(_,g),0,p?1:0)},a={source:o(s.trim(),n.indexOf(s,r.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=r.trim().replace(RE,"").trim();const c=r.indexOf(l),u=l.match(lh);if(u){l=l.replace(lh,"").trim();const f=u[1].trim();let d;if(f&&(d=n.indexOf(f,c+l.length),a.key=o(f,d,!0)),u[2]){const p=u[2].trim();p&&(a.index=o(p,n.indexOf(p,a.key?d+f.length:c+l.length),!0))}}return l&&(a.value=o(l,c,!0)),a}function Ht(t,e){return Ci.slice(t,e)}function ch(t){yt.inSFCRoot&&(jt.innerLoc=Et(t+1,t+1)),Hu(jt);const{tag:e,ns:n}=jt;n===0&&st.isPreTag(e)&&Jf++,st.isVoidTag(e)?Wa(jt,t):(gt.unshift(jt),(n===1||n===2)&&(yt.inXML=!0)),jt=null}function pa(t,e,n){{const s=gt[0]&&gt[0].tag;s!=="script"&&s!=="style"&&t.includes("&")&&(t=st.decodeEntities(t,!1))}const i=gt[0]||Oo,r=i.children[i.children.length-1];r&&r.type===2?(r.content+=t,Tr(r.loc,n)):i.children.push({type:2,content:t,loc:Et(e,n)})}function Wa(t,e,n=!1){n?Tr(t.loc,R_(e,60)):Tr(t.loc,LE(e,62)+1),yt.inSFCRoot&&(t.children.length?t.innerLoc.end=Qe({},t.children[t.children.length-1].loc.end):t.innerLoc.end=Qe({},t.innerLoc.start),t.innerLoc.source=Ht(t.innerLoc.start.offset,t.innerLoc.end.offset));const{tag:i,ns:r,children:s}=t;if(qi||(i==="slot"?t.tagType=2:uh(t)?t.tagType=3:NE(t)&&(t.tagType=1)),yt.inRCDATA||(t.children=P_(s)),r===0&&st.isIgnoreNewlineTag(i)){const o=s[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}r===0&&st.isPreTag(i)&&Jf--,Bu===t&&(qi=yt.inVPre=!1,Bu=null),yt.inXML&&(gt[0]?gt[0].ns:st.ns)===0&&(yt.inXML=!1);{const o=t.props;if(!yt.inSFCRoot&&Lr("COMPILER_NATIVE_TEMPLATE",st)&&t.tag==="template"&&!uh(t)){const l=gt[0]||Oo,c=l.children.indexOf(t);l.children.splice(c,1,...t.children)}const a=o.find(l=>l.type===6&&l.name==="inline-template");a&&Io("COMPILER_INLINE_TEMPLATE",st,a.loc)&&t.children.length&&(a.value={type:2,content:Ht(t.children[0].loc.start.offset,t.children[t.children.length-1].loc.end.offset),loc:a.loc})}}function LE(t,e){let n=t;for(;Ci.charCodeAt(n)!==e&&n<Ci.length-1;)n++;return n}function R_(t,e){let n=t;for(;Ci.charCodeAt(n)!==e&&n>=0;)n--;return n}const DE=new Set(["if","else","else-if","for","slot"]);function uh({tag:t,props:e}){if(t==="template"){for(let n=0;n<e.length;n++)if(e[n].type===7&&DE.has(e[n].name))return!0}return!1}function NE({tag:t,props:e}){if(st.isCustomElement(t))return!1;if(t==="component"||IE(t.charCodeAt(0))||b_(t)||st.isBuiltInComponent&&st.isBuiltInComponent(t)||st.isNativeTag&&!st.isNativeTag(t))return!0;for(let n=0;n<e.length;n++){const i=e[n];if(i.type===6){if(i.name==="is"&&i.value){if(i.value.content.startsWith("vue:"))return!0;if(Io("COMPILER_IS_ON_ELEMENT",st,i.loc))return!0}}else if(i.name==="bind"&&br(i.arg,"is")&&Io("COMPILER_IS_ON_ELEMENT",st,i.loc))return!0}return!1}function IE(t){return t>64&&t<91}const UE=/\r\n/g;function P_(t,e){const n=st.whitespace!=="preserve";let i=!1;for(let r=0;r<t.length;r++){const s=t[r];if(s.type===2)if(Jf)s.content=s.content.replace(UE,`
`);else if(OE(s.content)){const o=t[r-1]&&t[r-1].type,a=t[r+1]&&t[r+1].type;!o||!a||n&&(o===3&&(a===3||a===1)||o===1&&(a===3||a===1&&FE(s.content)))?(i=!0,t[r]=null):s.content=" "}else n&&(s.content=L_(s.content))}return i?t.filter(Boolean):t}function OE(t){for(let e=0;e<t.length;e++)if(!Tn(t.charCodeAt(e)))return!1;return!0}function FE(t){for(let e=0;e<t.length;e++){const n=t.charCodeAt(e);if(n===10||n===13)return!0}return!1}function L_(t){let e="",n=!1;for(let i=0;i<t.length;i++)Tn(t.charCodeAt(i))?n||(e+=" ",n=!0):(e+=t[i],n=!1);return e}function Hu(t){(gt[0]||Oo).children.push(t)}function Et(t,e){return{start:yt.getPos(t),end:e==null?e:yt.getPos(e),source:e==null?e:Ht(t,e)}}function BE(t){return Et(t.start.offset,t.end.offset)}function Tr(t,e){t.end=yt.getPos(e),t.source=Ht(t.start.offset,e)}function HE(t){const e={type:6,name:t.rawName,nameLoc:Et(t.loc.start.offset,t.loc.start.offset+t.rawName.length),value:void 0,loc:t.loc};if(t.exp){const n=t.exp.loc;n.end.offset<t.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),e.value={type:2,content:t.exp.content,loc:n}}return e}function Xa(t,e=!1,n,i=0,r=0){return Xe(t,e,n,i)}function hi(t,e,n){st.onError(_t(t,Et(e,e)))}function kE(){yt.reset(),jt=null,et=null,hn="",Si=-1,vr=-1,gt.length=0}function VE(t,e){if(kE(),Ci=t,st=Qe({},C_),e){let r;for(r in e)e[r]!=null&&(st[r]=e[r])}yt.mode=st.parseMode==="html"?1:st.parseMode==="sfc"?2:0,yt.inXML=st.ns===1||st.ns===2;const n=e&&e.delimiters;n&&(yt.delimiterOpen=_l(n[0]),yt.delimiterClose=_l(n[1]));const i=Oo=dE([],t);return yt.parse(Ci),i.loc=Et(0,t.length),i.children=P_(i.children),Oo=null,i}function zE(t,e){qa(t,void 0,e,D_(t,t.children[0]))}function D_(t,e){const{children:n}=t;return n.length===1&&e.type===1&&!Sl(e)}function qa(t,e,n,i=!1,r=!1){const{children:s}=t,o=[];for(let u=0;u<s.length;u++){const f=s[u];if(f.type===1&&f.tagType===0){const d=i?0:An(f,n);if(d>0){if(d>=2){f.codegenNode.patchFlag=-1,o.push(f);continue}}else{const p=f.codegenNode;if(p.type===13){const _=p.patchFlag;if((_===void 0||_===512||_===1)&&I_(f,n)>=2){const g=U_(f);g&&(p.props=n.hoist(g))}p.dynamicProps&&(p.dynamicProps=n.hoist(p.dynamicProps))}}}else if(f.type===12&&(i?0:An(f,n))>=2){o.push(f);continue}if(f.type===1){const d=f.tagType===1;d&&n.scopes.vSlot++,qa(f,t,n,!1,r),d&&n.scopes.vSlot--}else if(f.type===11)qa(f,t,n,f.children.length===1,!0);else if(f.type===9)for(let d=0;d<f.branches.length;d++)qa(f.branches[d],t,n,f.branches[d].children.length===1,r)}let a=!1;if(o.length===s.length&&t.type===1){if(t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&ye(t.codegenNode.children))t.codegenNode.children=l(Pr(t.codegenNode.children)),a=!0;else if(t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!ye(t.codegenNode.children)&&t.codegenNode.children.type===15){const u=c(t.codegenNode,"default");u&&(u.returns=l(Pr(u.returns)),a=!0)}else if(t.tagType===3&&e&&e.type===1&&e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!ye(e.codegenNode.children)&&e.codegenNode.children.type===15){const u=On(t,"slot",!0),f=u&&u.arg&&c(e.codegenNode,u.arg);f&&(f.returns=l(Pr(f.returns)),a=!0)}}if(!a)for(const u of o)u.codegenNode=n.cache(u.codegenNode);function l(u){const f=n.cache(u);return r&&n.hmr&&(f.needArraySpread=!0),f}function c(u,f){if(u.children&&!ye(u.children)&&u.children.type===15){const d=u.children.properties.find(p=>p.key===f||p.key.content===f);return d&&d.value}}o.length&&n.transformHoist&&n.transformHoist(s,n,t)}function An(t,e){const{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;const i=n.get(t);if(i!==void 0)return i;const r=t.codegenNode;if(r.type!==13||r.isBlock&&t.tag!=="svg"&&t.tag!=="foreignObject"&&t.tag!=="math")return 0;if(r.patchFlag===void 0){let o=3;const a=I_(t,e);if(a===0)return n.set(t,0),0;a<o&&(o=a);for(let l=0;l<t.children.length;l++){const c=An(t.children[l],e);if(c===0)return n.set(t,0),0;c<o&&(o=c)}if(o>1)for(let l=0;l<t.props.length;l++){const c=t.props[l];if(c.type===7&&c.name==="bind"&&c.exp){const u=An(c.exp,e);if(u===0)return n.set(t,0),0;u<o&&(o=u)}}if(r.isBlock){for(let l=0;l<t.props.length;l++)if(t.props[l].type===7)return n.set(t,0),0;e.removeHelper(Hr),e.removeHelper(Fs(e.inSSR,r.isComponent)),r.isBlock=!1,e.helper(Os(e.inSSR,r.isComponent))}return n.set(t,o),o}else return n.set(t,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return An(t.content,e);case 4:return t.constType;case 8:let s=3;for(let o=0;o<t.children.length;o++){const a=t.children[o];if(Ve(a)||xn(a))continue;const l=An(a,e);if(l===0)return 0;l<s&&(s=l)}return s;case 20:return 2;default:return 0}}const GE=new Set([Gf,Wf,Do,Yo]);function N_(t,e){if(t.type===14&&!Ve(t.callee)&&GE.has(t.callee)){const n=t.arguments[0];if(n.type===4)return An(n,e);if(n.type===14)return N_(n,e)}return 0}function I_(t,e){let n=3;const i=U_(t);if(i&&i.type===15){const{properties:r}=i;for(let s=0;s<r.length;s++){const{key:o,value:a}=r[s],l=An(o,e);if(l===0)return l;l<n&&(n=l);let c;if(a.type===4?c=An(a,e):a.type===14?c=N_(a,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function U_(t){const e=t.codegenNode;if(e.type===13)return e.props}function WE(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:r=!1,cacheHandlers:s=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:c=Gt,isCustomElement:u=Gt,expressionPlugins:f=[],scopeId:d=null,slotted:p=!0,ssr:_=!1,inSSR:g=!1,ssrCssVars:m="",bindingMetadata:h=Ze,inline:M=!1,isTS:v=!1,onError:y=jf,onWarn:E=M_,compatConfig:A}){const C=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),N={filename:e,selfName:C&&qr(mt(C[1])),prefixIdentifiers:n,hoistStatic:i,hmr:r,cacheHandlers:s,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:f,scopeId:d,slotted:p,ssr:_,inSSR:g,ssrCssVars:m,bindingMetadata:h,inline:M,isTS:v,onError:y,onWarn:E,compatConfig:A,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(S){const b=N.helpers.get(S)||0;return N.helpers.set(S,b+1),S},removeHelper(S){const b=N.helpers.get(S);if(b){const I=b-1;I?N.helpers.set(S,I):N.helpers.delete(S)}},helperString(S){return`_${Is[N.helper(S)]}`},replaceNode(S){N.parent.children[N.childIndex]=N.currentNode=S},removeNode(S){const b=N.parent.children,I=S?b.indexOf(S):N.currentNode?N.childIndex:-1;!S||S===N.currentNode?(N.currentNode=null,N.onNodeRemoved()):N.childIndex>I&&(N.childIndex--,N.onNodeRemoved()),N.parent.children.splice(I,1)},onNodeRemoved:Gt,addIdentifiers(S){},removeIdentifiers(S){},hoist(S){Ve(S)&&(S=Xe(S)),N.hoists.push(S);const b=Xe(`_hoisted_${N.hoists.length}`,!1,S.loc,2);return b.hoisted=S,b},cache(S,b=!1,I=!1){const R=hE(N.cached.length,S,b,I);return N.cached.push(R),R}};return N.filters=new Set,N}function XE(t,e){const n=WE(t,e);ec(t,n),e.hoistStatic&&zE(t,n),e.ssr||qE(t,n),t.helpers=new Set([...n.helpers.keys()]),t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.transformed=!0,t.filters=[...n.filters]}function qE(t,e){const{helper:n}=e,{children:i}=t;if(i.length===1){const r=i[0];if(D_(t,r)&&r.codegenNode){const s=r.codegenNode;s.type===13&&Yf(s,e),t.codegenNode=s}else t.codegenNode=r}else if(i.length>1){let r=64;t.codegenNode=No(e,n(Lo),void 0,t.children,r,void 0,void 0,!0,void 0,!1)}}function $E(t,e){let n=0;const i=()=>{n--};for(;n<t.children.length;n++){const r=t.children[n];Ve(r)||(e.grandParent=e.parent,e.parent=t,e.childIndex=n,e.onNodeRemoved=i,ec(r,e))}}function ec(t,e){e.currentNode=t;const{nodeTransforms:n}=e,i=[];for(let s=0;s<n.length;s++){const o=n[s](t,e);if(o&&(ye(o)?i.push(...o):i.push(o)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper($o);break;case 5:e.ssr||e.helper(Zl);break;case 9:for(let s=0;s<t.branches.length;s++)ec(t.branches[s],e);break;case 10:case 11:case 1:case 0:$E(t,e);break}e.currentNode=t;let r=i.length;for(;r--;)i[r]()}function O_(t,e){const n=Ve(t)?i=>i===t:i=>t.test(i);return(i,r)=>{if(i.type===1){const{props:s}=i;if(i.tagType===3&&s.some(TE))return;const o=[];for(let a=0;a<s.length;a++){const l=s[a];if(l.type===7&&n(l.name)){s.splice(a,1),a--;const c=e(i,l,r);c&&o.push(c)}}return o}}}const tc="/*@__PURE__*/",F_=t=>`${Is[t]}: _${Is[t]}`;function YE(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:i=!1,filename:r="template.vue.html",scopeId:s=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:f=!1,inSSR:d=!1}){const p={mode:e,prefixIdentifiers:n,sourceMap:i,filename:r,scopeId:s,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:f,inSSR:d,source:t.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(g){return`_${Is[g]}`},push(g,m=-2,h){p.code+=g},indent(){_(++p.indentLevel)},deindent(g=!1){g?--p.indentLevel:_(--p.indentLevel)},newline(){_(p.indentLevel)}};function _(g){p.push(`
`+"  ".repeat(g),0)}return p}function jE(t,e={}){const n=YE(t,e);e.onContextCreated&&e.onContextCreated(n);const{mode:i,push:r,prefixIdentifiers:s,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=n,f=Array.from(t.helpers),d=f.length>0,p=!s&&i!=="module";KE(t,n);const g=u?"ssrRender":"render",h=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(r(`function ${g}(${h}) {`),o(),p&&(r("with (_ctx) {"),o(),d&&(r(`const { ${f.map(F_).join(", ")} } = _Vue
`,-1),l())),t.components.length&&(Dc(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(Dc(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),Dc(t.filters,"filter",n),l()),t.temps>0){r("let ");for(let M=0;M<t.temps;M++)r(`${M>0?", ":""}_temp${M}`)}return(t.components.length||t.directives.length||t.temps)&&(r(`
`,0),l()),u||r("return "),t.codegenNode?en(t.codegenNode,n):r("null"),p&&(a(),r("}")),a(),r("}"),{ast:t,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function KE(t,e){const{ssr:n,prefixIdentifiers:i,push:r,newline:s,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=Array.from(t.helpers);if(u.length>0&&(r(`const _Vue = ${c}
`,-1),t.hoists.length)){const f=[If,Uf,$o,Of,S_].filter(d=>u.includes(d)).map(F_).join(", ");r(`const { ${f} } = _Vue
`,-1)}JE(t.hoists,e),s(),r("return ")}function Dc(t,e,{helper:n,push:i,newline:r,isTS:s}){const o=n(e==="filter"?kf:e==="component"?Ff:Hf);for(let a=0;a<t.length;a++){let l=t[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${Uo(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${s?"!":""}`),a<t.length-1&&r()}}function JE(t,e){if(!t.length)return;e.pure=!0;const{push:n,newline:i}=e;i();for(let r=0;r<t.length;r++){const s=t[r];s&&(n(`const _hoisted_${r+1} = `),en(s,e),i())}e.pure=!1}function Zf(t,e){const n=t.length>3||!1;e.push("["),n&&e.indent(),jo(t,e,n),n&&e.deindent(),e.push("]")}function jo(t,e,n=!1,i=!0){const{push:r,newline:s}=e;for(let o=0;o<t.length;o++){const a=t[o];Ve(a)?r(a,-3):ye(a)?Zf(a,e):en(a,e),o<t.length-1&&(n?(i&&r(","),s()):i&&r(", "))}}function en(t,e){if(Ve(t)){e.push(t,-3);return}if(xn(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:en(t.codegenNode,e);break;case 2:ZE(t,e);break;case 4:B_(t,e);break;case 5:QE(t,e);break;case 12:en(t.codegenNode,e);break;case 8:H_(t,e);break;case 3:tM(t,e);break;case 13:nM(t,e);break;case 14:rM(t,e);break;case 15:sM(t,e);break;case 17:oM(t,e);break;case 18:aM(t,e);break;case 19:lM(t,e);break;case 20:cM(t,e);break;case 21:jo(t.body,e,!0,!1);break}}function ZE(t,e){e.push(JSON.stringify(t.content),-3,t)}function B_(t,e){const{content:n,isStatic:i}=t;e.push(i?JSON.stringify(n):n,-3,t)}function QE(t,e){const{push:n,helper:i,pure:r}=e;r&&n(tc),n(`${i(Zl)}(`),en(t.content,e),n(")")}function H_(t,e){for(let n=0;n<t.children.length;n++){const i=t.children[n];Ve(i)?e.push(i,-3):en(i,e)}}function eM(t,e){const{push:n}=e;if(t.type===8)n("["),H_(t,e),n("]");else if(t.isStatic){const i=Kf(t.content)?t.content:JSON.stringify(t.content);n(i,-2,t)}else n(`[${t.content}]`,-3,t)}function tM(t,e){const{push:n,helper:i,pure:r}=e;r&&n(tc),n(`${i($o)}(${JSON.stringify(t.content)})`,-3,t)}function nM(t,e){const{push:n,helper:i,pure:r}=e,{tag:s,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:f,disableTracking:d,isComponent:p}=t;let _;l&&(_=String(l)),u&&n(i(Vf)+"("),f&&n(`(${i(Hr)}(${d?"true":""}), `),r&&n(tc);const g=f?Fs(e.inSSR,p):Os(e.inSSR,p);n(i(g)+"(",-2,t),jo(iM([s,o,a,_,c]),e),n(")"),f&&n(")"),u&&(n(", "),en(u,e),n(")"))}function iM(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function rM(t,e){const{push:n,helper:i,pure:r}=e,s=Ve(t.callee)?t.callee:i(t.callee);r&&n(tc),n(s+"(",-2,t),jo(t.arguments,e),n(")")}function sM(t,e){const{push:n,indent:i,deindent:r,newline:s}=e,{properties:o}=t;if(!o.length){n("{}",-2,t);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:c,value:u}=o[l];eM(c,e),n(": "),en(u,e),l<o.length-1&&(n(","),s())}a&&r(),n(a?"}":" }")}function oM(t,e){Zf(t.elements,e)}function aM(t,e){const{push:n,indent:i,deindent:r}=e,{params:s,returns:o,body:a,newline:l,isSlot:c}=t;c&&n(`_${Is[qf]}(`),n("(",-2,t),ye(s)?jo(s,e):s&&en(s,e),n(") => "),(l||a)&&(n("{"),i()),o?(l&&n("return "),ye(o)?Zf(o,e):en(o,e)):a&&en(a,e),(l||a)&&(r(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function lM(t,e){const{test:n,consequent:i,alternate:r,newline:s}=t,{push:o,indent:a,deindent:l,newline:c}=e;if(n.type===4){const f=!Kf(n.content);f&&o("("),B_(n,e),f&&o(")")}else o("("),en(n,e),o(")");s&&a(),e.indentLevel++,s||o(" "),o("? "),en(i,e),e.indentLevel--,s&&c(),s||o(" "),o(": ");const u=r.type===19;u||e.indentLevel++,en(r,e),u||e.indentLevel--,s&&l(!0)}function cM(t,e){const{push:n,helper:i,indent:r,deindent:s,newline:o}=e,{needPauseTracking:a,needArraySpread:l}=t;l&&n("[...("),n(`_cache[${t.index}] || (`),a&&(r(),n(`${i(gl)}(-1`),t.inVOnce&&n(", true"),n("),"),o(),n("(")),n(`_cache[${t.index}] = `),en(t.value,e),a&&(n(`).cacheIndex = ${t.index},`),o(),n(`${i(gl)}(1),`),o(),n(`_cache[${t.index}]`),s()),n(")"),l&&n(")]")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const uM=O_(/^(if|else|else-if)$/,(t,e,n)=>fM(t,e,n,(i,r,s)=>{const o=n.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(s)i.codegenNode=dh(r,l,n);else{const c=dM(i.codegenNode);c.alternate=dh(r,l+i.branches.length-1,n)}}}));function fM(t,e,n,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const r=e.exp?e.exp.loc:t.loc;n.onError(_t(28,e.loc)),e.exp=Xe("true",!1,r)}if(e.name==="if"){const r=fh(t,e),s={type:9,loc:BE(t.loc),branches:[r]};return n.replaceNode(s),i(s,r,!0)}else{const r=n.parent.children;let s=r.indexOf(t);for(;s-->=-1;){const o=r[s];if(o&&o.type===3){n.removeNode(o);continue}if(o&&o.type===2&&!o.content.trim().length){n.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&n.onError(_t(30,t.loc)),n.removeNode();const a=fh(t,e);o.branches.push(a);const l=i(o,a,!1);ec(a,n),l&&l(),n.currentNode=null}else n.onError(_t(30,t.loc));break}}}function fh(t,e){const n=t.tagType===3;return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:n&&!On(t,"for")?t.children:[t],userKey:Ql(t,"key"),isTemplateIf:n}}function dh(t,e,n){return t.condition?Fu(t.condition,hh(t,e,n),Rt(n.helper($o),['""',"true"])):hh(t,e,n)}function hh(t,e,n){const{helper:i}=n,r=Mt("key",Xe(`${e}`,!1,Dn,2)),{children:s}=t,o=s[0];if(s.length!==1||o.type!==1)if(s.length===1&&o.type===11){const l=o.codegenNode;return yl(l,r,n),l}else return No(n,i(Lo),Vn([r]),s,64,void 0,void 0,!0,!1,!1,t.loc);else{const l=o.codegenNode,c=wE(l);return c.type===13&&Yf(c,n),yl(c,r,n),l}}function dM(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}const hM=(t,e,n)=>{const{modifiers:i,loc:r}=t,s=t.arg;let{exp:o}=t;if(o&&o.type===4&&!o.content.trim()&&(o=void 0),!o){if(s.type!==4||!s.isStatic)return n.onError(_t(52,s.loc)),{props:[Mt(s,Xe("",!0,r))]};k_(t),o=t.exp}return s.type!==4?(s.children.unshift("("),s.children.push(') || ""')):s.isStatic||(s.content=`${s.content} || ""`),i.some(a=>a.content==="camel")&&(s.type===4?s.isStatic?s.content=mt(s.content):s.content=`${n.helperString(Uu)}(${s.content})`:(s.children.unshift(`${n.helperString(Uu)}(`),s.children.push(")"))),n.inSSR||(i.some(a=>a.content==="prop")&&ph(s,"."),i.some(a=>a.content==="attr")&&ph(s,"^")),{props:[Mt(s,o)]}},k_=(t,e)=>{const n=t.arg,i=mt(n.content);t.exp=Xe(i,!1,n.loc)},ph=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},pM=O_("for",(t,e,n)=>{const{helper:i,removeHelper:r}=n;return mM(t,e,n,s=>{const o=Rt(i(zf),[s.source]),a=vl(t),l=On(t,"memo"),c=Ql(t,"key",!1,!0);c&&c.type===7&&!c.exp&&k_(c);let f=c&&(c.type===6?c.value?Xe(c.value.content,!0):void 0:c.exp);const d=c&&f?Mt("key",f):null,p=s.source.type===4&&s.source.constType>0,_=p?64:c?128:256;return s.codegenNode=No(n,i(Lo),void 0,o,_,void 0,void 0,!0,!p,!1,t.loc),()=>{let g;const{children:m}=s,h=m.length!==1||m[0].type!==1,M=Sl(t)?t:a&&t.children.length===1&&Sl(t.children[0])?t.children[0]:null;if(M?(g=M.codegenNode,a&&d&&yl(g,d,n)):h?g=No(n,i(Lo),d?Vn([d]):void 0,t.children,64,void 0,void 0,!0,void 0,!1):(g=m[0].codegenNode,a&&d&&yl(g,d,n),g.isBlock!==!p&&(g.isBlock?(r(Hr),r(Fs(n.inSSR,g.isComponent))):r(Os(n.inSSR,g.isComponent))),g.isBlock=!p,g.isBlock?(i(Hr),i(Fs(n.inSSR,g.isComponent))):i(Os(n.inSSR,g.isComponent))),l){const v=Us(ku(s.parseResult,[Xe("_cached")]));v.body=pE([Qn(["const _memo = (",l.exp,")"]),Qn(["if (_cached",...f?[" && _cached.key === ",f]:[],` && ${n.helperString(E_)}(_cached, _memo)) return _cached`]),Qn(["const _item = ",g]),Xe("_item.memo = _memo"),Xe("return _item")]),o.arguments.push(v,Xe("_cache"),Xe(String(n.cached.length))),n.cached.push(null)}else o.arguments.push(Us(ku(s.parseResult),g,!0))}})});function mM(t,e,n,i){if(!e.exp){n.onError(_t(31,e.loc));return}const r=e.forParseResult;if(!r){n.onError(_t(32,e.loc));return}V_(r);const{addIdentifiers:s,removeIdentifiers:o,scopes:a}=n,{source:l,value:c,key:u,index:f}=r,d={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:f,parseResult:r,children:vl(t)?t.children:[t]};n.replaceNode(d),a.vFor++;const p=i(d);return()=>{a.vFor--,p&&p()}}function V_(t,e){t.finalized||(t.finalized=!0)}function ku({value:t,key:e,index:n},i=[]){return gM([t,e,n,...i])}function gM(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,i)=>n||Xe("_".repeat(i+1),!1))}const mh=Xe("undefined",!1),_M=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){const n=On(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},vM=(t,e,n,i)=>Us(t,n,!1,!0,n.length?n[0].loc:i);function SM(t,e,n=vM){e.helper(qf);const{children:i,loc:r}=t,s=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=On(t,"slot",!0);if(l){const{arg:m,exp:h}=l;m&&!vn(m)&&(a=!0),s.push(Mt(m||Xe("default",!0),n(h,void 0,i,r)))}let c=!1,u=!1;const f=[],d=new Set;let p=0;for(let m=0;m<i.length;m++){const h=i[m];let M;if(!vl(h)||!(M=On(h,"slot",!0))){h.type!==3&&f.push(h);continue}if(l){e.onError(_t(37,M.loc));break}c=!0;const{children:v,loc:y}=h,{arg:E=Xe("default",!0),exp:A,loc:C}=M;let N;vn(E)?N=E?E.content:"default":a=!0;const S=On(h,"for"),b=n(A,S,v,y);let I,R;if(I=On(h,"if"))a=!0,o.push(Fu(I.exp,ma(E,b,p++),mh));else if(R=On(h,/^else(-if)?$/,!0)){let F=m,D;for(;F--&&(D=i[F],D.type===3););if(D&&vl(D)&&On(D,/^(else-)?if$/)){let H=o[o.length-1];for(;H.alternate.type===19;)H=H.alternate;H.alternate=R.exp?Fu(R.exp,ma(E,b,p++),mh):ma(E,b,p++)}else e.onError(_t(30,R.loc))}else if(S){a=!0;const F=S.forParseResult;F?(V_(F),o.push(Rt(e.helper(zf),[F.source,Us(ku(F),ma(E,b),!0)]))):e.onError(_t(32,S.loc))}else{if(N){if(d.has(N)){e.onError(_t(38,C));continue}d.add(N),N==="default"&&(u=!0)}s.push(Mt(E,b))}}if(!l){const m=(h,M)=>{const v=n(h,void 0,M,r);return e.compatConfig&&(v.isNonScopedSlot=!0),Mt("default",v)};c?f.length&&f.some(h=>z_(h))&&(u?e.onError(_t(39,f[0].loc)):s.push(m(void 0,f))):s.push(m(void 0,i))}const _=a?2:$a(t.children)?3:1;let g=Vn(s.concat(Mt("_",Xe(_+"",!1))),r);return o.length&&(g=Rt(e.helper(x_),[g,Pr(o)])),{slots:g,hasDynamicSlots:a}}function ma(t,e,n){const i=[Mt("name",t),Mt("fn",e)];return n!=null&&i.push(Mt("key",Xe(String(n),!0))),Vn(i)}function $a(t){for(let e=0;e<t.length;e++){const n=t[e];switch(n.type){case 1:if(n.tagType===2||$a(n.children))return!0;break;case 9:if($a(n.branches))return!0;break;case 10:case 11:if($a(n.children))return!0;break}}return!1}function z_(t){return t.type!==2&&t.type!==12?!0:t.type===2?!!t.content.trim():z_(t.content)}const G_=new WeakMap,yM=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;const{tag:i,props:r}=t,s=t.tagType===1;let o=s?xM(t,e):`"${i}"`;const a=lt(o)&&o.callee===Bf;let l,c,u=0,f,d,p,_=a||o===vo||o===Nf||!s&&(i==="svg"||i==="foreignObject"||i==="math");if(r.length>0){const g=W_(t,e,void 0,s,a);l=g.props,u=g.patchFlag,d=g.dynamicPropNames;const m=g.directives;p=m&&m.length?Pr(m.map(h=>MM(h,e))):void 0,g.shouldUseBlock&&(_=!0)}if(t.children.length>0)if(o===pl&&(_=!0,u|=1024),s&&o!==vo&&o!==pl){const{slots:m,hasDynamicSlots:h}=SM(t,e);c=m,h&&(u|=1024)}else if(t.children.length===1&&o!==vo){const m=t.children[0],h=m.type,M=h===5||h===8;M&&An(m,e)===0&&(u|=1),M||h===2?c=m:c=t.children}else c=t.children;d&&d.length&&(f=bM(d)),t.codegenNode=No(e,o,l,c,u===0?void 0:u,f,p,!!_,!1,s,t.loc)};function xM(t,e,n=!1){let{tag:i}=t;const r=Vu(i),s=Ql(t,"is",!1,!0);if(s)if(r||Lr("COMPILER_IS_ON_ELEMENT",e)){let a;if(s.type===6?a=s.value&&Xe(s.value.content,!0):(a=s.exp,a||(a=Xe("is",!1,s.arg.loc))),a)return Rt(e.helper(Bf),[a])}else s.type===6&&s.value.content.startsWith("vue:")&&(i=s.value.content.slice(4));const o=b_(i)||e.isBuiltInComponent(i);return o?(n||e.helper(o),o):(e.helper(Ff),e.components.add(i),Uo(i,"component"))}function W_(t,e,n=t.props,i,r,s=!1){const{tag:o,loc:a,children:l}=t;let c=[];const u=[],f=[],d=l.length>0;let p=!1,_=0,g=!1,m=!1,h=!1,M=!1,v=!1,y=!1;const E=[],A=b=>{c.length&&(u.push(Vn(gh(c),a)),c=[]),b&&u.push(b)},C=()=>{e.scopes.vFor>0&&c.push(Mt(Xe("ref_for",!0),Xe("true")))},N=({key:b,value:I})=>{if(vn(b)){const R=b.content,F=Wr(R);if(F&&(!i||r)&&R.toLowerCase()!=="onclick"&&R!=="onUpdate:modelValue"&&!ji(R)&&(M=!0),F&&ji(R)&&(y=!0),F&&I.type===14&&(I=I.arguments[0]),I.type===20||(I.type===4||I.type===8)&&An(I,e)>0)return;R==="ref"?g=!0:R==="class"?m=!0:R==="style"?h=!0:R!=="key"&&!E.includes(R)&&E.push(R),i&&(R==="class"||R==="style")&&!E.includes(R)&&E.push(R)}else v=!0};for(let b=0;b<n.length;b++){const I=n[b];if(I.type===6){const{loc:R,name:F,nameLoc:D,value:H}=I;let B=!0;if(F==="ref"&&(g=!0,C()),F==="is"&&(Vu(o)||H&&H.content.startsWith("vue:")||Lr("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(Mt(Xe(F,!0,D),Xe(H?H.content:"",B,H?H.loc:R)))}else{const{name:R,arg:F,exp:D,loc:H,modifiers:B}=I,z=R==="bind",W=R==="on";if(R==="slot"){i||e.onError(_t(40,H));continue}if(R==="once"||R==="memo"||R==="is"||z&&br(F,"is")&&(Vu(o)||Lr("COMPILER_IS_ON_ELEMENT",e))||W&&s)continue;if((z&&br(F,"key")||W&&d&&br(F,"vue:before-update"))&&(p=!0),z&&br(F,"ref")&&C(),!F&&(z||W)){if(v=!0,D)if(z){if(C(),A(),Lr("COMPILER_V_BIND_OBJECT_ORDER",e)){u.unshift(D);continue}u.push(D)}else A({type:14,loc:H,callee:e.helper(Xf),arguments:i?[D]:[D,"true"]});else e.onError(_t(z?34:35,H));continue}z&&B.some(ae=>ae.content==="prop")&&(_|=32);const ie=e.directiveTransforms[R];if(ie){const{props:ae,needRuntime:he}=ie(I,t,e);!s&&ae.forEach(N),W&&F&&!vn(F)?A(Vn(ae,a)):c.push(...ae),he&&(f.push(I),xn(he)&&G_.set(I,he))}else v0(R)||(f.push(I),d&&(p=!0))}}let S;if(u.length?(A(),u.length>1?S=Rt(e.helper(ml),u,a):S=u[0]):c.length&&(S=Vn(gh(c),a)),v?_|=16:(m&&!i&&(_|=2),h&&!i&&(_|=4),E.length&&(_|=8),M&&(_|=32)),!p&&(_===0||_===32)&&(g||y||f.length>0)&&(_|=512),!e.inSSR&&S)switch(S.type){case 15:let b=-1,I=-1,R=!1;for(let H=0;H<S.properties.length;H++){const B=S.properties[H].key;vn(B)?B.content==="class"?b=H:B.content==="style"&&(I=H):B.isHandlerKey||(R=!0)}const F=S.properties[b],D=S.properties[I];R?S=Rt(e.helper(Do),[S]):(F&&!vn(F.value)&&(F.value=Rt(e.helper(Gf),[F.value])),D&&(h||D.value.type===4&&D.value.content.trim()[0]==="["||D.value.type===17)&&(D.value=Rt(e.helper(Wf),[D.value])));break;case 14:break;default:S=Rt(e.helper(Do),[Rt(e.helper(Yo),[S])]);break}return{props:S,directives:f,patchFlag:_,dynamicPropNames:E,shouldUseBlock:p}}function gh(t){const e=new Map,n=[];for(let i=0;i<t.length;i++){const r=t[i];if(r.key.type===8||!r.key.isStatic){n.push(r);continue}const s=r.key.content,o=e.get(s);o?(s==="style"||s==="class"||Wr(s))&&EM(o,r):(e.set(s,r),n.push(r))}return n}function EM(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=Pr([t.value,e.value],t.loc)}function MM(t,e){const n=[],i=G_.get(t);i?n.push(e.helperString(i)):(e.helper(Hf),e.directives.add(t.name),n.push(Uo(t.name,"directive")));const{loc:r}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));const s=Xe("true",!1,r);n.push(Vn(t.modifiers.map(o=>Mt(o,s)),r))}return Pr(n,t.loc)}function bM(t){let e="[";for(let n=0,i=t.length;n<i;n++)e+=JSON.stringify(t[n]),n<i-1&&(e+=", ");return e+"]"}function Vu(t){return t==="component"||t==="Component"}const TM=(t,e)=>{if(Sl(t)){const{children:n,loc:i}=t,{slotName:r,slotProps:s}=AM(t,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",r,"{}","undefined","true"];let a=2;s&&(o[2]=s,a=3),n.length&&(o[3]=Us([],n,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),t.codegenNode=Rt(e.helper(y_),o,i)}};function AM(t,e){let n='"default"',i;const r=[];for(let s=0;s<t.props.length;s++){const o=t.props[s];if(o.type===6)o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=mt(o.name),r.push(o)));else if(o.name==="bind"&&br(o.arg,"name")){if(o.exp)n=o.exp;else if(o.arg&&o.arg.type===4){const a=mt(o.arg.content);n=o.exp=Xe(a,!1,o.arg.loc)}}else o.name==="bind"&&o.arg&&vn(o.arg)&&(o.arg.content=mt(o.arg.content)),r.push(o)}if(r.length>0){const{props:s,directives:o}=W_(t,e,r,!1,!1);i=s,o.length&&e.onError(_t(36,o[0].loc))}return{slotName:n,slotProps:i}}const X_=(t,e,n,i)=>{const{loc:r,modifiers:s,arg:o}=t;!t.exp&&!s.length&&n.onError(_t(35,r));let a;if(o.type===4)if(o.isStatic){let f=o.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const d=e.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?Ms(mt(f)):`on:${f}`;a=Xe(d,!0,o.loc)}else a=Qn([`${n.helperString(Ou)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(Ou)}(`),a.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const f=A_(l),d=!(f||ME(l)),p=l.content.includes(";");(d||c&&f)&&(l=Qn([`${d?"$event":"(...args)"} => ${p?"{":"("}`,l,p?"}":")"]))}let u={props:[Mt(a,l||Xe("() => {}",!1,r))]};return i&&(u=i(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(f=>f.key.isHandlerKey=!0),u},wM=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{const n=t.children;let i,r=!1;for(let s=0;s<n.length;s++){const o=n[s];if(Lc(o)){r=!0;for(let a=s+1;a<n.length;a++){const l=n[a];if(Lc(l))i||(i=n[s]=Qn([o],o.loc)),i.children.push(" + ",l),n.splice(a,1),a--;else{i=void 0;break}}}}if(!(!r||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(s=>s.type===7&&!e.directiveTransforms[s.name])&&t.tag!=="template")))for(let s=0;s<n.length;s++){const o=n[s];if(Lc(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&An(o,e)===0&&a.push("1"),n[s]={type:12,content:o,loc:o.loc,codegenNode:Rt(e.helper(Of),a)}}}}},_h=new WeakSet,CM=(t,e)=>{if(t.type===1&&On(t,"once",!0))return _h.has(t)||e.inVOnce||e.inSSR?void 0:(_h.add(t),e.inVOnce=!0,e.helper(gl),()=>{e.inVOnce=!1;const n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0,!0))})},q_=(t,e,n)=>{const{exp:i,arg:r}=t;if(!i)return n.onError(_t(41,t.loc)),ga();const s=i.loc.source.trim(),o=i.type===4?i.content:s,a=n.bindingMetadata[s];if(a==="props"||a==="props-aliased")return n.onError(_t(44,i.loc)),ga();if(!o.trim()||!A_(i))return n.onError(_t(42,i.loc)),ga();const l=r||Xe("modelValue",!0),c=r?vn(r)?`onUpdate:${mt(r.content)}`:Qn(['"onUpdate:" + ',r]):"onUpdate:modelValue";let u;const f=n.isTS?"($event: any)":"$event";u=Qn([`${f} => ((`,i,") = $event)"]);const d=[Mt(l,t.exp),Mt(c,u)];if(t.modifiers.length&&e.tagType===1){const p=t.modifiers.map(g=>g.content).map(g=>(Kf(g)?g:JSON.stringify(g))+": true").join(", "),_=r?vn(r)?`${r.content}Modifiers`:Qn([r,' + "Modifiers"']):"modelModifiers";d.push(Mt(_,Xe(`{ ${p} }`,!1,t.loc,2)))}return ga(d)};function ga(t=[]){return{props:t}}const RM=/[\w).+\-_$\]]/,PM=(t,e)=>{Lr("COMPILER_FILTERS",e)&&(t.type===5?xl(t.content,e):t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&xl(n.exp,e)}))};function xl(t,e){if(t.type===4)vh(t,e);else for(let n=0;n<t.children.length;n++){const i=t.children[n];typeof i=="object"&&(i.type===4?vh(i,e):i.type===8?xl(t,e):i.type===5&&xl(i.content,e))}}function vh(t,e){const n=t.content;let i=!1,r=!1,s=!1,o=!1,a=0,l=0,c=0,u=0,f,d,p,_,g=[];for(p=0;p<n.length;p++)if(d=f,f=n.charCodeAt(p),i)f===39&&d!==92&&(i=!1);else if(r)f===34&&d!==92&&(r=!1);else if(s)f===96&&d!==92&&(s=!1);else if(o)f===47&&d!==92&&(o=!1);else if(f===124&&n.charCodeAt(p+1)!==124&&n.charCodeAt(p-1)!==124&&!a&&!l&&!c)_===void 0?(u=p+1,_=n.slice(0,p).trim()):m();else{switch(f){case 34:r=!0;break;case 39:i=!0;break;case 96:s=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(f===47){let h=p-1,M;for(;h>=0&&(M=n.charAt(h),M===" ");h--);(!M||!RM.test(M))&&(o=!0)}}_===void 0?_=n.slice(0,p).trim():u!==0&&m();function m(){g.push(n.slice(u,p).trim()),u=p+1}if(g.length){for(p=0;p<g.length;p++)_=LM(_,g[p],e);t.content=_,t.ast=void 0}}function LM(t,e,n){n.helper(kf);const i=e.indexOf("(");if(i<0)return n.filters.add(e),`${Uo(e,"filter")}(${t})`;{const r=e.slice(0,i),s=e.slice(i+1);return n.filters.add(r),`${Uo(r,"filter")}(${t}${s!==")"?","+s:s}`}}const Sh=new WeakSet,DM=(t,e)=>{if(t.type===1){const n=On(t,"memo");return!n||Sh.has(t)?void 0:(Sh.add(t),()=>{const i=t.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(t.tagType!==1&&Yf(i,e),t.codegenNode=Rt(e.helper($f),[n.exp,Us(void 0,i),"_cache",String(e.cached.length)]),e.cached.push(null))})}};function NM(t){return[[CM,uM,DM,pM,PM,TM,yM,_M,wM],{on:X_,bind:hM,model:q_}]}function IM(t,e={}){const n=e.onError||jf,i=e.mode==="module";e.prefixIdentifiers===!0?n(_t(47)):i&&n(_t(48));const r=!1;e.cacheHandlers&&n(_t(49)),e.scopeId&&!i&&n(_t(50));const s=Qe({},e,{prefixIdentifiers:r}),o=Ve(t)?VE(t,s):t,[a,l]=NM();return XE(o,Qe({},s,{nodeTransforms:[...a,...e.nodeTransforms||[]],directiveTransforms:Qe({},l,e.directiveTransforms||{})})),jE(o,s)}const UM=()=>({props:[]});/**
* @vue/compiler-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const $_=Symbol(""),Y_=Symbol(""),j_=Symbol(""),K_=Symbol(""),zu=Symbol(""),J_=Symbol(""),Z_=Symbol(""),Q_=Symbol(""),ev=Symbol(""),tv=Symbol("");fE({[$_]:"vModelRadio",[Y_]:"vModelCheckbox",[j_]:"vModelText",[K_]:"vModelSelect",[zu]:"vModelDynamic",[J_]:"withModifiers",[Z_]:"withKeys",[Q_]:"vShow",[ev]:"Transition",[tv]:"TransitionGroup"});let Zr;function OM(t,e=!1){return Zr||(Zr=document.createElement("div")),e?(Zr.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,Zr.children[0].getAttribute("foo")):(Zr.innerHTML=t,Zr.textContent)}const FM={parseMode:"html",isVoidTag:U0,isNativeTag:t=>D0(t)||N0(t)||I0(t),isPreTag:t=>t==="pre",isIgnoreNewlineTag:t=>t==="pre"||t==="textarea",decodeEntities:OM,isBuiltInComponent:t=>{if(t==="Transition"||t==="transition")return ev;if(t==="TransitionGroup"||t==="transition-group")return tv},getNamespace(t,e,n){let i=e?e.ns:n;if(e&&i===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(r=>r.type===6&&r.name==="encoding"&&r.value!=null&&(r.value.content==="text/html"||r.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(i=0);else e&&i===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(i=0);if(i===0){if(t==="svg")return 1;if(t==="math")return 2}return i}},BM=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:Xe("style",!0,e.loc),exp:HM(e.value.content,e.loc),modifiers:[],loc:e.loc})})},HM=(t,e)=>{const n=cm(t);return Xe(JSON.stringify(n),!1,e,3)};function Qi(t,e){return _t(t,e)}const kM=(t,e,n)=>{const{exp:i,loc:r}=t;return i||n.onError(Qi(53,r)),e.children.length&&(n.onError(Qi(54,r)),e.children.length=0),{props:[Mt(Xe("innerHTML",!0,r),i||Xe("",!0))]}},VM=(t,e,n)=>{const{exp:i,loc:r}=t;return i||n.onError(Qi(55,r)),e.children.length&&(n.onError(Qi(56,r)),e.children.length=0),{props:[Mt(Xe("textContent",!0),i?An(i,n)>0?i:Rt(n.helperString(Zl),[i],r):Xe("",!0))]}},zM=(t,e,n)=>{const i=q_(t,e,n);if(!i.props.length||e.tagType===1)return i;t.arg&&n.onError(Qi(58,t.arg.loc));const{tag:r}=e,s=n.isCustomElement(r);if(r==="input"||r==="textarea"||r==="select"||s){let o=j_,a=!1;if(r==="input"||s){const l=Ql(e,"type");if(l){if(l.type===7)o=zu;else if(l.value)switch(l.value.content){case"radio":o=$_;break;case"checkbox":o=Y_;break;case"file":a=!0,n.onError(Qi(59,t.loc));break}}else bE(e)&&(o=zu)}else r==="select"&&(o=K_);a||(i.needRuntime=n.helper(o))}else n.onError(Qi(57,t.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},GM=Ln("passive,once,capture"),WM=Ln("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),XM=Ln("left,right"),nv=Ln("onkeyup,onkeydown,onkeypress"),qM=(t,e,n,i)=>{const r=[],s=[],o=[];for(let a=0;a<e.length;a++){const l=e[a].content;l==="native"&&Io("COMPILER_V_ON_NATIVE",n)||GM(l)?o.push(l):XM(l)?vn(t)?nv(t.content.toLowerCase())?r.push(l):s.push(l):(r.push(l),s.push(l)):WM(l)?s.push(l):r.push(l)}return{keyModifiers:r,nonKeyModifiers:s,eventOptionModifiers:o}},yh=(t,e)=>vn(t)&&t.content.toLowerCase()==="onclick"?Xe(e,!0):t.type!==4?Qn(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,$M=(t,e,n)=>X_(t,e,n,i=>{const{modifiers:r}=t;if(!r.length)return i;let{key:s,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=qM(s,r,n,t.loc);if(l.includes("right")&&(s=yh(s,"onContextmenu")),l.includes("middle")&&(s=yh(s,"onMouseup")),l.length&&(o=Rt(n.helper(J_),[o,JSON.stringify(l)])),a.length&&(!vn(s)||nv(s.content.toLowerCase()))&&(o=Rt(n.helper(Z_),[o,JSON.stringify(a)])),c.length){const u=c.map(qr).join("");s=vn(s)?Xe(`${s.content}${u}`,!0):Qn(["(",s,`) + "${u}"`])}return{props:[Mt(s,o)]}}),YM=(t,e,n)=>{const{exp:i,loc:r}=t;return i||n.onError(Qi(61,r)),{props:[],needRuntime:n.helper(Q_)}},jM=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&e.removeNode()},KM=[BM],JM={cloak:UM,html:kM,text:VM,model:zM,on:$M,show:YM};function ZM(t,e={}){return IM(t,Qe({},FM,e,{nodeTransforms:[jM,...KM,...e.nodeTransforms||[]],directiveTransforms:Qe({},JM,e.directiveTransforms||{}),transformHoist:null}))}/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const xh=Object.create(null);function QM(t,e){if(!Ve(t))if(t.nodeType)t=t.innerHTML;else return Gt;const n=x0(t,e),i=xh[n];if(i)return i;if(t[0]==="#"){const a=document.querySelector(t);t=a?a.innerHTML:""}const r=Qe({hoistStatic:!0,onError:void 0,onWarn:Gt},e);!r.isCustomElement&&typeof customElements<"u"&&(r.isCustomElement=a=>!!customElements.get(a));const{code:s}=ZM(t,r),o=new Function("Vue",s)(sE);return o._rc=!0,xh[n]=o}kg(QM);function El(t){"@babel/helpers - typeof";return El=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},El(t)}function kr(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function fn(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function ui(t){fn(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||El(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function eb(t,e){fn(2,arguments);var n=ui(t).getTime(),i=kr(e);return new Date(n+i)}var tb={};function nc(){return tb}function nb(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function ib(t){return fn(1,arguments),t instanceof Date||El(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function rb(t){if(fn(1,arguments),!ib(t)&&typeof t!="number")return!1;var e=ui(t);return!isNaN(Number(e))}function sb(t,e){fn(2,arguments);var n=kr(e);return eb(t,-n)}var ob=864e5;function ab(t){fn(1,arguments);var e=ui(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),r=n-i;return Math.floor(r/ob)+1}function Ml(t){fn(1,arguments);var e=1,n=ui(t),i=n.getUTCDay(),r=(i<e?7:0)+i-e;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function iv(t){fn(1,arguments);var e=ui(t),n=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var r=Ml(i),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var o=Ml(s);return e.getTime()>=r.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function lb(t){fn(1,arguments);var e=iv(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var i=Ml(n);return i}var cb=6048e5;function ub(t){fn(1,arguments);var e=ui(t),n=Ml(e).getTime()-lb(e).getTime();return Math.round(n/cb)+1}function bl(t,e){var n,i,r,s,o,a,l,c;fn(1,arguments);var u=nc(),f=kr((n=(i=(r=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&r!==void 0?r:u.weekStartsOn)!==null&&i!==void 0?i:(l=u.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&n!==void 0?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=ui(t),p=d.getUTCDay(),_=(p<f?7:0)+p-f;return d.setUTCDate(d.getUTCDate()-_),d.setUTCHours(0,0,0,0),d}function rv(t,e){var n,i,r,s,o,a,l,c;fn(1,arguments);var u=ui(t),f=u.getUTCFullYear(),d=nc(),p=kr((n=(i=(r=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&r!==void 0?r:d.firstWeekContainsDate)!==null&&i!==void 0?i:(l=d.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var _=new Date(0);_.setUTCFullYear(f+1,0,p),_.setUTCHours(0,0,0,0);var g=bl(_,e),m=new Date(0);m.setUTCFullYear(f,0,p),m.setUTCHours(0,0,0,0);var h=bl(m,e);return u.getTime()>=g.getTime()?f+1:u.getTime()>=h.getTime()?f:f-1}function fb(t,e){var n,i,r,s,o,a,l,c;fn(1,arguments);var u=nc(),f=kr((n=(i=(r=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&r!==void 0?r:u.firstWeekContainsDate)!==null&&i!==void 0?i:(l=u.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&n!==void 0?n:1),d=rv(t,e),p=new Date(0);p.setUTCFullYear(d,0,f),p.setUTCHours(0,0,0,0);var _=bl(p,e);return _}var db=6048e5;function hb(t,e){fn(1,arguments);var n=ui(t),i=bl(n,e).getTime()-fb(n,e).getTime();return Math.round(i/db)+1}function ot(t,e){for(var n=t<0?"-":"",i=Math.abs(t).toString();i.length<e;)i="0"+i;return n+i}var Ui={y:function(e,n){var i=e.getUTCFullYear(),r=i>0?i:1-i;return ot(n==="yy"?r%100:r,n.length)},M:function(e,n){var i=e.getUTCMonth();return n==="M"?String(i+1):ot(i+1,2)},d:function(e,n){return ot(e.getUTCDate(),n.length)},a:function(e,n){var i=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return i.toUpperCase();case"aaa":return i;case"aaaaa":return i[0];case"aaaa":default:return i==="am"?"a.m.":"p.m."}},h:function(e,n){return ot(e.getUTCHours()%12||12,n.length)},H:function(e,n){return ot(e.getUTCHours(),n.length)},m:function(e,n){return ot(e.getUTCMinutes(),n.length)},s:function(e,n){return ot(e.getUTCSeconds(),n.length)},S:function(e,n){var i=n.length,r=e.getUTCMilliseconds(),s=Math.floor(r*Math.pow(10,i-3));return ot(s,n.length)}},Qr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},pb={G:function(e,n,i){var r=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return i.era(r,{width:"abbreviated"});case"GGGGG":return i.era(r,{width:"narrow"});case"GGGG":default:return i.era(r,{width:"wide"})}},y:function(e,n,i){if(n==="yo"){var r=e.getUTCFullYear(),s=r>0?r:1-r;return i.ordinalNumber(s,{unit:"year"})}return Ui.y(e,n)},Y:function(e,n,i,r){var s=rv(e,r),o=s>0?s:1-s;if(n==="YY"){var a=o%100;return ot(a,2)}return n==="Yo"?i.ordinalNumber(o,{unit:"year"}):ot(o,n.length)},R:function(e,n){var i=iv(e);return ot(i,n.length)},u:function(e,n){var i=e.getUTCFullYear();return ot(i,n.length)},Q:function(e,n,i){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return ot(r,2);case"Qo":return i.ordinalNumber(r,{unit:"quarter"});case"QQQ":return i.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return i.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,i){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return ot(r,2);case"qo":return i.ordinalNumber(r,{unit:"quarter"});case"qqq":return i.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return i.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,i){var r=e.getUTCMonth();switch(n){case"M":case"MM":return Ui.M(e,n);case"Mo":return i.ordinalNumber(r+1,{unit:"month"});case"MMM":return i.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return i.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,i){var r=e.getUTCMonth();switch(n){case"L":return String(r+1);case"LL":return ot(r+1,2);case"Lo":return i.ordinalNumber(r+1,{unit:"month"});case"LLL":return i.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return i.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,i,r){var s=hb(e,r);return n==="wo"?i.ordinalNumber(s,{unit:"week"}):ot(s,n.length)},I:function(e,n,i){var r=ub(e);return n==="Io"?i.ordinalNumber(r,{unit:"week"}):ot(r,n.length)},d:function(e,n,i){return n==="do"?i.ordinalNumber(e.getUTCDate(),{unit:"date"}):Ui.d(e,n)},D:function(e,n,i){var r=ab(e);return n==="Do"?i.ordinalNumber(r,{unit:"dayOfYear"}):ot(r,n.length)},E:function(e,n,i){var r=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return i.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return i.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(r,{width:"short",context:"formatting"});case"EEEE":default:return i.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,i,r){var s=e.getUTCDay(),o=(s-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return ot(o,2);case"eo":return i.ordinalNumber(o,{unit:"day"});case"eee":return i.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return i.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(s,{width:"short",context:"formatting"});case"eeee":default:return i.day(s,{width:"wide",context:"formatting"})}},c:function(e,n,i,r){var s=e.getUTCDay(),o=(s-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return ot(o,n.length);case"co":return i.ordinalNumber(o,{unit:"day"});case"ccc":return i.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return i.day(s,{width:"narrow",context:"standalone"});case"cccccc":return i.day(s,{width:"short",context:"standalone"});case"cccc":default:return i.day(s,{width:"wide",context:"standalone"})}},i:function(e,n,i){var r=e.getUTCDay(),s=r===0?7:r;switch(n){case"i":return String(s);case"ii":return ot(s,n.length);case"io":return i.ordinalNumber(s,{unit:"day"});case"iii":return i.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return i.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return i.day(r,{width:"short",context:"formatting"});case"iiii":default:return i.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,i){var r=e.getUTCHours(),s=r/12>=1?"pm":"am";switch(n){case"a":case"aa":return i.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return i.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return i.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,n,i){var r=e.getUTCHours(),s;switch(r===12?s=Qr.noon:r===0?s=Qr.midnight:s=r/12>=1?"pm":"am",n){case"b":case"bb":return i.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return i.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return i.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,n,i){var r=e.getUTCHours(),s;switch(r>=17?s=Qr.evening:r>=12?s=Qr.afternoon:r>=4?s=Qr.morning:s=Qr.night,n){case"B":case"BB":case"BBB":return i.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return i.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,n,i){if(n==="ho"){var r=e.getUTCHours()%12;return r===0&&(r=12),i.ordinalNumber(r,{unit:"hour"})}return Ui.h(e,n)},H:function(e,n,i){return n==="Ho"?i.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Ui.H(e,n)},K:function(e,n,i){var r=e.getUTCHours()%12;return n==="Ko"?i.ordinalNumber(r,{unit:"hour"}):ot(r,n.length)},k:function(e,n,i){var r=e.getUTCHours();return r===0&&(r=24),n==="ko"?i.ordinalNumber(r,{unit:"hour"}):ot(r,n.length)},m:function(e,n,i){return n==="mo"?i.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Ui.m(e,n)},s:function(e,n,i){return n==="so"?i.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Ui.s(e,n)},S:function(e,n){return Ui.S(e,n)},X:function(e,n,i,r){var s=r._originalDate||e,o=s.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return Mh(o);case"XXXX":case"XX":return Sr(o);case"XXXXX":case"XXX":default:return Sr(o,":")}},x:function(e,n,i,r){var s=r._originalDate||e,o=s.getTimezoneOffset();switch(n){case"x":return Mh(o);case"xxxx":case"xx":return Sr(o);case"xxxxx":case"xxx":default:return Sr(o,":")}},O:function(e,n,i,r){var s=r._originalDate||e,o=s.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Eh(o,":");case"OOOO":default:return"GMT"+Sr(o,":")}},z:function(e,n,i,r){var s=r._originalDate||e,o=s.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Eh(o,":");case"zzzz":default:return"GMT"+Sr(o,":")}},t:function(e,n,i,r){var s=r._originalDate||e,o=Math.floor(s.getTime()/1e3);return ot(o,n.length)},T:function(e,n,i,r){var s=r._originalDate||e,o=s.getTime();return ot(o,n.length)}};function Eh(t,e){var n=t>0?"-":"+",i=Math.abs(t),r=Math.floor(i/60),s=i%60;if(s===0)return n+String(r);var o=e;return n+String(r)+o+ot(s,2)}function Mh(t,e){if(t%60===0){var n=t>0?"-":"+";return n+ot(Math.abs(t)/60,2)}return Sr(t,e)}function Sr(t,e){var n=e||"",i=t>0?"-":"+",r=Math.abs(t),s=ot(Math.floor(r/60),2),o=ot(r%60,2);return i+s+n+o}var bh=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},sv=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},mb=function(e,n){var i=e.match(/(P+)(p+)?/)||[],r=i[1],s=i[2];if(!s)return bh(e,n);var o;switch(r){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;case"PPPP":default:o=n.dateTime({width:"full"});break}return o.replace("{{date}}",bh(r,n)).replace("{{time}}",sv(s,n))},gb={p:sv,P:mb},_b=["D","DD"],vb=["YY","YYYY"];function Sb(t){return _b.indexOf(t)!==-1}function yb(t){return vb.indexOf(t)!==-1}function Th(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var xb={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Eb=function(e,n,i){var r,s=xb[e];return typeof s=="string"?r=s:n===1?r=s.one:r=s.other.replace("{{count}}",n.toString()),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"in "+r:r+" ago":r};function Nc(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,i=t.formats[n]||t.formats[t.defaultWidth];return i}}var Mb={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},bb={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Tb={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ab={date:Nc({formats:Mb,defaultWidth:"full"}),time:Nc({formats:bb,defaultWidth:"full"}),dateTime:Nc({formats:Tb,defaultWidth:"full"})},wb={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Cb=function(e,n,i,r){return wb[e]};function Zs(t){return function(e,n){var i=n!=null&&n.context?String(n.context):"standalone",r;if(i==="formatting"&&t.formattingValues){var s=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):s;r=t.formattingValues[o]||t.formattingValues[s]}else{var a=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[l]||t.values[a]}var c=t.argumentCallback?t.argumentCallback(e):e;return r[c]}}var Rb={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Pb={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Lb={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Db={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Nb={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ib={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ub=function(e,n){var i=Number(e),r=i%100;if(r>20||r<10)switch(r%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},Ob={ordinalNumber:Ub,era:Zs({values:Rb,defaultWidth:"wide"}),quarter:Zs({values:Pb,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Zs({values:Lb,defaultWidth:"wide"}),day:Zs({values:Db,defaultWidth:"wide"}),dayPeriod:Zs({values:Nb,defaultWidth:"wide",formattingValues:Ib,defaultFormattingWidth:"wide"})};function Qs(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.width,r=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=e.match(r);if(!s)return null;var o=s[0],a=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?Bb(a,function(f){return f.test(o)}):Fb(a,function(f){return f.test(o)}),c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;var u=e.slice(o.length);return{value:c,rest:u}}}function Fb(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function Bb(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function Hb(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.match(t.matchPattern);if(!i)return null;var r=i[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(r.length);return{value:o,rest:a}}}var kb=/^(\d+)(th|st|nd|rd)?/i,Vb=/\d+/i,zb={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Gb={any:[/^b/i,/^(a|c)/i]},Wb={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Xb={any:[/1/i,/2/i,/3/i,/4/i]},qb={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$b={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Yb={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},jb={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Kb={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Jb={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Zb={ordinalNumber:Hb({matchPattern:kb,parsePattern:Vb,valueCallback:function(e){return parseInt(e,10)}}),era:Qs({matchPatterns:zb,defaultMatchWidth:"wide",parsePatterns:Gb,defaultParseWidth:"any"}),quarter:Qs({matchPatterns:Wb,defaultMatchWidth:"wide",parsePatterns:Xb,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Qs({matchPatterns:qb,defaultMatchWidth:"wide",parsePatterns:$b,defaultParseWidth:"any"}),day:Qs({matchPatterns:Yb,defaultMatchWidth:"wide",parsePatterns:jb,defaultParseWidth:"any"}),dayPeriod:Qs({matchPatterns:Kb,defaultMatchWidth:"any",parsePatterns:Jb,defaultParseWidth:"any"})},Qb={code:"en-US",formatDistance:Eb,formatLong:Ab,formatRelative:Cb,localize:Ob,match:Zb,options:{weekStartsOn:0,firstWeekContainsDate:1}},eT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nT=/^'([^]*?)'?$/,iT=/''/g,rT=/[a-zA-Z]/;function vs(t,e,n){var i,r,s,o,a,l,c,u,f,d,p,_,g,m;fn(2,arguments);var h=String(e),M=nc(),v=(i=(r=void 0)!==null&&r!==void 0?r:M.locale)!==null&&i!==void 0?i:Qb,y=kr((s=(o=(a=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&a!==void 0?a:M.firstWeekContainsDate)!==null&&o!==void 0?o:(c=M.locale)===null||c===void 0||(u=c.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=kr((f=(d=(p=(_=void 0)!==null&&_!==void 0?_:void 0)!==null&&p!==void 0?p:M.weekStartsOn)!==null&&d!==void 0?d:(g=M.locale)===null||g===void 0||(m=g.options)===null||m===void 0?void 0:m.weekStartsOn)!==null&&f!==void 0?f:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!v.localize)throw new RangeError("locale must contain localize property");if(!v.formatLong)throw new RangeError("locale must contain formatLong property");var A=ui(t);if(!rb(A))throw new RangeError("Invalid time value");var C=nb(A),N=sb(A,C),S={firstWeekContainsDate:y,weekStartsOn:E,locale:v,_originalDate:A},b=h.match(tT).map(function(I){var R=I[0];if(R==="p"||R==="P"){var F=gb[R];return F(I,v.formatLong)}return I}).join("").match(eT).map(function(I){if(I==="''")return"'";var R=I[0];if(R==="'")return sT(I);var F=pb[R];if(F)return yb(I)&&Th(I,e,String(t)),Sb(I)&&Th(I,e,String(t)),F(N,I,v.localize,S);if(R.match(rT))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return I}).join("");return b}function sT(t){var e=t.match(nT);return e?e[1].replace(iT,"'"):t}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qf="159",oT=0,Ah=1,aT=2,ov=1,lT=2,yi=3,or=0,Sn=1,Ti=2,er=0,Cs=1,wh=2,Ch=3,Rh=4,cT=5,Er=100,uT=101,fT=102,Ph=103,Lh=104,dT=200,hT=201,pT=202,mT=203,Gu=204,Wu=205,gT=206,_T=207,vT=208,ST=209,yT=210,xT=211,ET=212,MT=213,bT=214,TT=0,AT=1,wT=2,Tl=3,CT=4,RT=5,PT=6,LT=7,av=0,DT=1,NT=2,tr=0,IT=1,UT=2,OT=3,FT=4,BT=5,lv=300,Bs=301,Hs=302,Xu=303,qu=304,ic=306,$u=1e3,Kn=1001,Yu=1002,an=1003,Dh=1004,Ic=1005,Fn=1006,HT=1007,Fo=1008,nr=1009,kT=1010,VT=1011,ed=1012,cv=1013,$i=1014,Yi=1015,Bo=1016,uv=1017,fv=1018,Dr=1020,zT=1021,Jn=1023,GT=1024,WT=1025,Nr=1026,ks=1027,XT=1028,dv=1029,qT=1030,hv=1031,pv=1033,Uc=33776,Oc=33777,Fc=33778,Bc=33779,Nh=35840,Ih=35841,Uh=35842,Oh=35843,mv=36196,Fh=37492,Bh=37496,Hh=37808,kh=37809,Vh=37810,zh=37811,Gh=37812,Wh=37813,Xh=37814,qh=37815,$h=37816,Yh=37817,jh=37818,Kh=37819,Jh=37820,Zh=37821,Hc=36492,Qh=36494,ep=36495,$T=36283,tp=36284,np=36285,ip=36286,gv=3e3,Ir=3001,YT=3200,jT=3201,KT=0,JT=1,Hn="",kt="srgb",Li="srgb-linear",td="display-p3",rc="display-p3-linear",Al="linear",pt="srgb",wl="rec709",Cl="p3",es=7680,rp=519,ZT=512,QT=513,eA=514,_v=515,tA=516,nA=517,iA=518,rA=519,sp=35044,op="300 es",ju=1035,Ai=2e3,Rl=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,Ku=180/Math.PI;function Ko(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function gn(t,e,n){return Math.max(e,Math.min(n,t))}function sA(t,e){return(t%e+e)%e}function Vc(t,e,n){return(1-n)*t+n*e}function ap(t){return(t&t-1)===0&&t!==0}function Ju(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,n=0){ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,n,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],M=r[1],v=r[4],y=r[7],E=r[2],A=r[5],C=r[8];return s[0]=o*g+a*M+l*E,s[3]=o*m+a*v+l*A,s[6]=o*h+a*y+l*C,s[1]=c*g+u*M+f*E,s[4]=c*m+u*v+f*A,s[7]=c*h+u*y+f*C,s[2]=d*g+p*M+_*E,s[5]=d*m+p*v+_*A,s[8]=d*h+p*y+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(u*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=p*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zc.makeScale(e,n)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new Ke;function vv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oA(){const t=Pl("canvas");return t.style.display="block",t}const lp={};function So(t){t in lp||(lp[t]=!0,console.warn(t))}const cp=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),up=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_a={[Li]:{transfer:Al,primaries:wl,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:pt,primaries:wl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[rc]:{transfer:Al,primaries:Cl,toReference:t=>t.applyMatrix3(up),fromReference:t=>t.applyMatrix3(cp)},[td]:{transfer:pt,primaries:Cl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(up),fromReference:t=>t.applyMatrix3(cp).convertLinearToSRGB()}},aA=new Set([Li,rc]),ct={enabled:!0,_workingColorSpace:Li,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!aA.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=_a[e].toReference,r=_a[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return _a[t].primaries},getTransfer:function(t){return t===Hn?Al:_a[t].transfer}};function Rs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ts;class Sv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=Pl("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Rs(n[i]/255)*255):n[i]=Rs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lA=0;class yv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=Ko(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wc(r[o].image)):s.push(Wc(r[o]))}else s=Wc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Wc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Sv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cA=0;class Cn extends Ws{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,i=Kn,r=Kn,s=Fn,o=Fo,a=Jn,l=nr,c=Cn.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=Ko(),this.name="",this.source=new yv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ir?kt:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $u:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Yu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $u:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Yu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Ir:gv}set encoding(e){So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ir?kt:Hn}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=lv;Cn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,E=(h+1)/2,A=(u+d)/4,C=(f+g)/4,N=(_+m)/4;return v>y&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=C/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=N/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=N/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-g)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uA extends Ws{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(So("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ir?kt:Hn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new yv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends uA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xv extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fA extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=g;return}if(f!==g||l!==d||c!==p||u!==_){let m=1-a;const h=l*d+c*p+u*_+f*g,M=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,h*M);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const y=a*M;if(l=l*m+d*y,c=c*m+p*y,u=u*m+_*y,f=f*m+g*y,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-a*p,e[n+2]=c*_+u*p+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new $,fp=new Jo;class Zo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Sa.subVectors(this.max,to),ns.subVectors(e.a,to),is.subVectors(e.b,to),rs.subVectors(e.c,to),Oi.subVectors(is,ns),Fi.subVectors(rs,is),pr.subVectors(ns,rs);let n=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-pr.z,pr.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,pr.z,0,-pr.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-pr.y,pr.x,0];return!qc(n,ns,is,rs,Sa)||(n=[1,0,0,0,1,0,0,0,1],!qc(n,ns,is,rs,Sa))?!1:(ya.crossVectors(Oi,Fi),n=[ya.x,ya.y,ya.z],qc(n,ns,is,rs,Sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new $,new $,new $,new $,new $,new $,new $,new $],Xn=new $,va=new Zo,ns=new $,is=new $,rs=new $,Oi=new $,Fi=new $,pr=new $,to=new $,Sa=new $,ya=new $,mr=new $;function qc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){mr.fromArray(t,s);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),u=i.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dA=new Zo,no=new $,$c=new $;class nd{constructor(e=new $,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):dA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const n=no.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(no,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add($c)),this.expandByPoint(no.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new $,Yc=new $,xa=new $,Bi=new $,jc=new $,Ea=new $,Kc=new $;class hA{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Yc.copy(e).add(n).multiplyScalar(.5),xa.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(Yc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xa),a=Bi.dot(this.direction),l=-Bi.dot(xa),c=Bi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Yc).addScaledVector(xa,d),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){jc.subVectors(n,e),Ea.subVectors(i,e),Kc.crossVectors(jc,Ea);let o=this.direction.dot(Kc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(Ea.crossVectors(Bi,Ea));if(l<0)return null;const c=a*this.direction.dot(jc.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(Kc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,_,g,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,g,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,g=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-g*c,n[9]=-a*l,n[2]=g-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,g=c*f;n[0]=d+g*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=g+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,g=c*f;n[0]=d-g*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=g-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,g=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+g,n[1]=l*f,n[5]=g*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,g=a*c;n[0]=l*u,n[4]=g-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,g=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+g,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=g*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pA,e,mA)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Hi.crossVectors(i,Mn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Hi.crossVectors(i,Mn)),Hi.normalize(),Ma.crossVectors(Mn,Hi),r[0]=Hi.x,r[4]=Ma.x,r[8]=Mn.x,r[1]=Hi.y,r[5]=Ma.y,r[9]=Mn.y,r[2]=Hi.z,r[6]=Ma.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],M=i[3],v=i[7],y=i[11],E=i[15],A=r[0],C=r[4],N=r[8],S=r[12],b=r[1],I=r[5],R=r[9],F=r[13],D=r[2],H=r[6],B=r[10],z=r[14],W=r[3],ie=r[7],ae=r[11],he=r[15];return s[0]=o*A+a*b+l*D+c*W,s[4]=o*C+a*I+l*H+c*ie,s[8]=o*N+a*R+l*B+c*ae,s[12]=o*S+a*F+l*z+c*he,s[1]=u*A+f*b+d*D+p*W,s[5]=u*C+f*I+d*H+p*ie,s[9]=u*N+f*R+d*B+p*ae,s[13]=u*S+f*F+d*z+p*he,s[2]=_*A+g*b+m*D+h*W,s[6]=_*C+g*I+m*H+h*ie,s[10]=_*N+g*R+m*B+h*ae,s[14]=_*S+g*F+m*z+h*he,s[3]=M*A+v*b+y*D+E*W,s[7]=M*C+v*I+y*H+E*ie,s[11]=M*N+v*R+y*B+E*ae,s[15]=M*S+v*F+y*z+E*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+g*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],M=f*m*c-g*d*c+g*l*p-a*m*p-f*l*h+a*d*h,v=_*d*c-u*m*c-_*l*p+o*m*p+u*l*h-o*d*h,y=u*g*c-_*f*c+_*a*p-o*g*p-u*a*h+o*f*h,E=_*f*l-u*g*l-_*a*d+o*g*d+u*a*m-o*f*m,A=n*M+i*v+r*y+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=M*C,e[1]=(g*d*s-f*m*s-g*r*p+i*m*p+f*r*h-i*d*h)*C,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*h+i*l*h)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*C,e[4]=v*C,e[5]=(u*m*s-_*d*s+_*r*p-n*m*p-u*r*h+n*d*h)*C,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*h-n*l*h)*C,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*C,e[8]=y*C,e[9]=(_*f*s-u*g*s-_*i*p+n*g*p+u*i*h-n*f*h)*C,e[10]=(o*g*s-_*a*s+_*i*c-n*g*c-o*i*h+n*a*h)*C,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*C,e[12]=E*C,e[13]=(u*g*r-_*f*r+_*i*d-n*g*d-u*i*m+n*f*m)*C,e[14]=(_*a*r-o*g*r-_*i*l+n*g*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,_=s*f,g=o*u,m=o*f,h=a*f,M=l*c,v=l*u,y=l*f,E=i.x,A=i.y,C=i.z;return r[0]=(1-(g+h))*E,r[1]=(p+y)*E,r[2]=(_-v)*E,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(d+h))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(_+v)*C,r[9]=(m-M)*C,r[10]=(1-(d+g))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,u=1/o,f=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,n.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===Ai)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Rl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let _,g;if(a===Ai)_=(o+s)*f,g=-2*f;else if(a===Rl)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ss=new $,qn=new Wt,pA=new $(0,0,0),mA=new $(1,1,1),Hi=new $,Ma=new $,Mn=new $,dp=new Wt,hp=new Jo;class sc{constructor(e=0,n=0,i=0,r=sc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sc.DEFAULT_ORDER="XYZ";class Ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gA=0;const pp=new $,os=new Jo,gi=new Wt,ba=new $,io=new $,_A=new $,vA=new Jo,mp=new $(1,0,0),gp=new $(0,1,0),_p=new $(0,0,1),SA={type:"added"},yA={type:"removed"};class Rn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new $,n=new sc,i=new Jo,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Ke}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(mp,e)}rotateY(e){return this.rotateOnAxis(gp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,n){return pp.copy(e).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mp,e)}translateY(e){return this.translateOnAxis(gp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ba.copy(e):ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(io,ba,this.up):gi.lookAt(ba,io,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(gi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(SA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yA)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,_A),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,vA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new $(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new $,_i=new $,Jc=new $,vi=new $,as=new $,ls=new $,vp=new $,Zc=new $,Qc=new $,eu=new $;let Ta=!1;class Yn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),_i.subVectors(i,n),Jc.subVectors(e,n);const o=$n.dot($n),a=$n.dot(_i),l=$n.dot(Jc),c=_i.dot(_i),u=_i.dot(Jc),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi),vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ta=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi),l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),_i.subVectors(e,n),$n.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),$n.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ta=!0),Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;as.subVectors(r,i),ls.subVectors(s,i),Zc.subVectors(e,i);const l=as.dot(Zc),c=ls.dot(Zc);if(l<=0&&c<=0)return n.copy(i);Qc.subVectors(e,r);const u=as.dot(Qc),f=ls.dot(Qc);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(as,o);eu.subVectors(e,s);const p=as.dot(eu),_=ls.dot(eu);if(_>=0&&p<=_)return n.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ls,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return vp.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(vp,a);const h=1/(m+g+d);return o=g*h,a=d*h,n.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function tu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ut{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=sA(e,1),n=gn(n,0,1),i=gn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tu(o,s,e+1/3),this.g=tu(o,s,e),this.b=tu(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=Mv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ct.fromWorkingColorSpace(Yt.copy(this),e),Math.round(gn(Yt.r*255,0,255))*65536+Math.round(gn(Yt.g*255,0,255))*256+Math.round(gn(Yt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=kt){ct.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(Aa);const i=Vc(ki.h,Aa.h,n),r=Vc(ki.s,Aa.s,n),s=Vc(ki.l,Aa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ut;ut.NAMES=Mv;let xA=0;class oc extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=Cs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gu&&(i.blendSrc=this.blendSrc),this.blendDst!==Wu&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class id extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new $,wa=new ft;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wa.fromBufferAttribute(this,n),wa.applyMatrix3(e),this.setXY(n,wa.x,wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sp&&(e.usage=this.usage),e}}class bv extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Tv extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class li extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let EA=0;const Un=new Wt,nu=new Rn,cs=new $,bn=new Zo,ro=new Zo,Ft=new $;class cr extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vv(e)?Tv:bv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new li(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(bn.min,ro.min),bn.expandByPoint(Ft),Ft.addVectors(bn.max,ro.max),bn.expandByPoint(Ft)):(bn.expandByPoint(ro.min),bn.expandByPoint(ro.max))}bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Ft.add(cs)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new $,u[b]=new $;const f=new $,d=new $,p=new $,_=new ft,g=new ft,m=new ft,h=new $,M=new $;function v(b,I,R){f.fromArray(r,b*3),d.fromArray(r,I*3),p.fromArray(r,R*3),_.fromArray(o,b*2),g.fromArray(o,I*2),m.fromArray(o,R*2),d.sub(f),p.sub(f),g.sub(_),m.sub(_);const F=1/(g.x*m.y-m.x*g.y);isFinite(F)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(F),M.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(F),c[b].add(h),c[I].add(h),c[R].add(h),u[b].add(M),u[I].add(M),u[R].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let b=0,I=y.length;b<I;++b){const R=y[b],F=R.start,D=R.count;for(let H=F,B=F+D;H<B;H+=3)v(i[H+0],i[H+1],i[H+2])}const E=new $,A=new $,C=new $,N=new $;function S(b){C.fromArray(s,b*3),N.copy(C);const I=c[b];E.copy(I),E.sub(C.multiplyScalar(C.dot(I))).normalize(),A.crossVectors(N,I);const F=A.dot(u[b])<0?-1:1;l[b*4]=E.x,l[b*4+1]=E.y,l[b*4+2]=E.z,l[b*4+3]=F}for(let b=0,I=y.length;b<I;++b){const R=y[b],F=R.start,D=R.count;for(let H=F,B=F+D;H<B;H+=3)S(i[H+0]),S(i[H+1]),S(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new ai(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sp=new Wt,gr=new hA,Ca=new nd,yp=new $,us=new $,fs=new $,ds=new $,iu=new $,Ra=new $,Pa=new ft,La=new ft,Da=new ft,xp=new $,Ep=new $,Mp=new $,Na=new $,Ia=new $;class wi extends Rn{constructor(e=new cr,n=new id){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(iu.fromBufferAttribute(f,e),o?Ra.addScaledVector(iu,u):Ra.addScaledVector(iu.sub(n),u))}n.add(Ra)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Ca.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ca,yp)===null||gr.origin.distanceToSquared(yp)>(e.far-e.near)**2))&&(Sp.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Sp),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,E=v;y<E;y+=3){const A=a.getX(y),C=a.getX(y+1),N=a.getX(y+2);r=Ua(this,h,e,i,c,u,f,A,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const M=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Ua(this,o,e,i,c,u,f,M,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,E=v;y<E;y+=3){const A=y,C=y+1,N=y+2;r=Ua(this,h,e,i,c,u,f,A,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const M=m,v=m+1,y=m+2;r=Ua(this,o,e,i,c,u,f,M,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function MA(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===or,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ia);return c<n.near||c>n.far?null:{distance:c,point:Ia.clone(),object:t}}function Ua(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,us),t.getVertexPosition(l,fs),t.getVertexPosition(c,ds);const u=MA(t,e,n,i,us,fs,ds,Na);if(u){r&&(Pa.fromBufferAttribute(r,a),La.fromBufferAttribute(r,l),Da.fromBufferAttribute(r,c),u.uv=Yn.getInterpolation(Na,us,fs,ds,Pa,La,Da,new ft)),s&&(Pa.fromBufferAttribute(s,a),La.fromBufferAttribute(s,l),Da.fromBufferAttribute(s,c),u.uv1=Yn.getInterpolation(Na,us,fs,ds,Pa,La,Da,new ft),u.uv2=u.uv1),o&&(xp.fromBufferAttribute(o,a),Ep.fromBufferAttribute(o,l),Mp.fromBufferAttribute(o,c),u.normal=Yn.getInterpolation(Na,us,fs,ds,xp,Ep,Mp,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new $,materialIndex:0};Yn.getNormal(us,fs,ds,f.normal),u.face=f}return u}class Qo extends cr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new li(c,3)),this.setAttribute("normal",new li(u,3)),this.setAttribute("uv",new li(f,2));function _(g,m,h,M,v,y,E,A,C,N,S){const b=y/C,I=E/N,R=y/2,F=E/2,D=A/2,H=C+1,B=N+1;let z=0,W=0;const ie=new $;for(let ae=0;ae<B;ae++){const he=ae*I-F;for(let me=0;me<H;me++){const te=me*b-R;ie[g]=te*M,ie[m]=he*v,ie[h]=D,c.push(ie.x,ie.y,ie.z),ie[g]=0,ie[m]=0,ie[h]=A>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(me/C),f.push(1-ae/N),z+=1}}for(let ae=0;ae<N;ae++)for(let he=0;he<C;he++){const me=d+he+H*ae,te=d+he+H*(ae+1),ce=d+(he+1)+H*(ae+1),xe=d+(he+1)+H*ae;l.push(me,te,xe),l.push(te,ce,xe),W+=6}a.addGroup(p,W,S),p+=W,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const r in i)e[r]=i[r]}return e}function bA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Av(t){return t.getRenderTarget()===null?t.outputColorSpace:ct.workingColorSpace}const TA={clone:Vs,merge:sn};var AA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AA,this.fragmentShader=wA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=bA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class wv extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bn extends wv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ku*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ku*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const hs=-90,ps=1;class CA extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(hs,ps,e,n);r.layers=this.layers,this.add(r);const s=new Bn(hs,ps,e,n);s.layers=this.layers,this.add(s);const o=new Bn(hs,ps,e,n);o.layers=this.layers,this.add(o);const a=new Bn(hs,ps,e,n);a.layers=this.layers,this.add(a);const l=new Bn(hs,ps,e,n);l.layers=this.layers,this.add(l);const c=new Bn(hs,ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Cv extends Cn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RA extends Vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(So("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ir?kt:Hn),this.texture=new Cv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qo(5,5,5),s=new zr({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:er});s.uniforms.tEquirect.value=n;const o=new wi(r,s),a=n.minFilter;return n.minFilter===Fo&&(n.minFilter=Fn),new CA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ru=new $,PA=new $,LA=new Ke;class yr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ru.subVectors(i,n).cross(PA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ru),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||LA.getNormalMatrix(e),r=this.coplanarPoint(ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new nd,Oa=new $;class Rv{constructor(e=new yr,n=new yr,i=new yr,r=new yr,s=new yr,o=new yr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],M=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-p,y-h).normalize(),i[1].setComponents(l+s,d+c,m+p,y+h).normalize(),i[2].setComponents(l+o,d+u,m+_,y+M).normalize(),i[3].setComponents(l-o,d-u,m-_,y-M).normalize(),i[4].setComponents(l-a,d-f,m-g,y-v).normalize(),n===Ai)i[5].setComponents(l+a,d+f,m+g,y+v).normalize();else if(n===Rl)i[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oa.x=r.normal.x>0?e.max.x:e.min.x,Oa.y=r.normal.y>0?e.max.y:e.min.y,Oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function DA(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=f.byteLength,_=t.createBuffer();t.bindBuffer(u,_),t.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=t.SHORT;else if(f instanceof Uint32Array)g=t.UNSIGNED_INT;else if(f instanceof Int32Array)g=t.INT;else if(f instanceof Int8Array)g=t.BYTE;else if(f instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const d=u.array,p=u._updateRange,_=u.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&_.length===0&&t.bufferSubData(f,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){const h=_[g];n?t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class rd extends cr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],_=[],g=[],m=[];for(let h=0;h<u;h++){const M=h*d-o;for(let v=0;v<c;v++){const y=v*f-s;_.push(y,-M,0),g.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<a;M++){const v=M+c*h,y=M+c*(h+1),E=M+1+c*(h+1),A=M+1+c*h;p.push(v,y,A),p.push(y,E,A)}this.setIndex(p),this.setAttribute("position",new li(_,3)),this.setAttribute("normal",new li(g,3)),this.setAttribute("uv",new li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rd(e.width,e.height,e.widthSegments,e.heightSegments)}}var NA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FA=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VA=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,GA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$A=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,jA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,n1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,i1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,r1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c1="gl_FragColor = linearToOutputTexel( gl_FragColor );",u1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,A1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,w1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,D1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,k1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,j1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,K1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ew=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ow=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_w=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Aw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ww=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:NA,alphahash_pars_fragment:IA,alphamap_fragment:UA,alphamap_pars_fragment:OA,alphatest_fragment:FA,alphatest_pars_fragment:BA,aomap_fragment:HA,aomap_pars_fragment:kA,batching_pars_vertex:VA,batching_vertex:zA,begin_vertex:GA,beginnormal_vertex:WA,bsdfs:XA,iridescence_fragment:qA,bumpmap_pars_fragment:$A,clipping_planes_fragment:YA,clipping_planes_pars_fragment:jA,clipping_planes_pars_vertex:KA,clipping_planes_vertex:JA,color_fragment:ZA,color_pars_fragment:QA,color_pars_vertex:e1,color_vertex:t1,common:n1,cube_uv_reflection_fragment:i1,defaultnormal_vertex:r1,displacementmap_pars_vertex:s1,displacementmap_vertex:o1,emissivemap_fragment:a1,emissivemap_pars_fragment:l1,colorspace_fragment:c1,colorspace_pars_fragment:u1,envmap_fragment:f1,envmap_common_pars_fragment:d1,envmap_pars_fragment:h1,envmap_pars_vertex:p1,envmap_physical_pars_fragment:A1,envmap_vertex:m1,fog_vertex:g1,fog_pars_vertex:_1,fog_fragment:v1,fog_pars_fragment:S1,gradientmap_pars_fragment:y1,lightmap_fragment:x1,lightmap_pars_fragment:E1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:b1,lights_pars_begin:T1,lights_toon_fragment:w1,lights_toon_pars_fragment:C1,lights_phong_fragment:R1,lights_phong_pars_fragment:P1,lights_physical_fragment:L1,lights_physical_pars_fragment:D1,lights_fragment_begin:N1,lights_fragment_maps:I1,lights_fragment_end:U1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:F1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:H1,map_fragment:k1,map_pars_fragment:V1,map_particle_fragment:z1,map_particle_pars_fragment:G1,metalnessmap_fragment:W1,metalnessmap_pars_fragment:X1,morphcolor_vertex:q1,morphnormal_vertex:$1,morphtarget_pars_vertex:Y1,morphtarget_vertex:j1,normal_fragment_begin:K1,normal_fragment_maps:J1,normal_pars_fragment:Z1,normal_pars_vertex:Q1,normal_vertex:ew,normalmap_pars_fragment:tw,clearcoat_normal_fragment_begin:nw,clearcoat_normal_fragment_maps:iw,clearcoat_pars_fragment:rw,iridescence_pars_fragment:sw,opaque_fragment:ow,packing:aw,premultiplied_alpha_fragment:lw,project_vertex:cw,dithering_fragment:uw,dithering_pars_fragment:fw,roughnessmap_fragment:dw,roughnessmap_pars_fragment:hw,shadowmap_pars_fragment:pw,shadowmap_pars_vertex:mw,shadowmap_vertex:gw,shadowmask_pars_fragment:_w,skinbase_vertex:vw,skinning_pars_vertex:Sw,skinning_vertex:yw,skinnormal_vertex:xw,specularmap_fragment:Ew,specularmap_pars_fragment:Mw,tonemapping_fragment:bw,tonemapping_pars_fragment:Tw,transmission_fragment:Aw,transmission_pars_fragment:ww,uv_pars_fragment:Cw,uv_pars_vertex:Rw,uv_vertex:Pw,worldpos_vertex:Lw,background_vert:Dw,background_frag:Nw,backgroundCube_vert:Iw,backgroundCube_frag:Uw,cube_vert:Ow,cube_frag:Fw,depth_vert:Bw,depth_frag:Hw,distanceRGBA_vert:kw,distanceRGBA_frag:Vw,equirect_vert:zw,equirect_frag:Gw,linedashed_vert:Ww,linedashed_frag:Xw,meshbasic_vert:qw,meshbasic_frag:$w,meshlambert_vert:Yw,meshlambert_frag:jw,meshmatcap_vert:Kw,meshmatcap_frag:Jw,meshnormal_vert:Zw,meshnormal_frag:Qw,meshphong_vert:eC,meshphong_frag:tC,meshphysical_vert:nC,meshphysical_frag:iC,meshtoon_vert:rC,meshtoon_frag:sC,points_vert:oC,points_frag:aC,shadow_vert:lC,shadow_frag:cC,sprite_vert:uC,sprite_frag:fC},Se={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},oi={basic:{uniforms:sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:sn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:sn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:sn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:sn([Se.points,Se.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:sn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:sn([Se.common,Se.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:sn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:sn([Se.sprite,Se.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:sn([Se.common,Se.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:sn([Se.lights,Se.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};oi.physical={uniforms:sn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Fa={r:0,b:0,g:0};function dC(t,e,n,i,r,s,o){const a=new ut(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(m,h){let M=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?n:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),M=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ic)?(u===void 0&&(u=new wi(new Qo(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Vs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ct.getTransfer(v.colorSpace)!==pt,(f!==v||d!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new wi(new rd(2,2),new zr({name:"BackgroundMaterial",uniforms:Vs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ct.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,h){m.getRGB(Fa,Av(t)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function hC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(D,H,B,z,W){let ie=!1;if(o){const ae=g(z,B,H);c!==ae&&(c=ae,p(c.object)),ie=h(D,z,B,W),ie&&M(D,z,B,W)}else{const ae=H.wireframe===!0;(c.geometry!==z.id||c.program!==B.id||c.wireframe!==ae)&&(c.geometry=z.id,c.program=B.id,c.wireframe=ae,ie=!0)}W!==null&&n.update(W,t.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,N(D,H,B,z),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(W).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function g(D,H,B){const z=B.wireframe===!0;let W=a[D.id];W===void 0&&(W={},a[D.id]=W);let ie=W[H.id];ie===void 0&&(ie={},W[H.id]=ie);let ae=ie[z];return ae===void 0&&(ae=m(d()),ie[z]=ae),ae}function m(D){const H=[],B=[],z=[];for(let W=0;W<r;W++)H[W]=0,B[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:z,object:D,attributes:{},index:null}}function h(D,H,B,z){const W=c.attributes,ie=H.attributes;let ae=0;const he=B.getAttributes();for(const me in he)if(he[me].location>=0){const ce=W[me];let xe=ie[me];if(xe===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),ce===void 0||ce.attribute!==xe||xe&&ce.data!==xe.data)return!0;ae++}return c.attributesNum!==ae||c.index!==z}function M(D,H,B,z){const W={},ie=H.attributes;let ae=0;const he=B.getAttributes();for(const me in he)if(he[me].location>=0){let ce=ie[me];ce===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));const xe={};xe.attribute=ce,ce&&ce.data&&(xe.data=ce.data),W[me]=xe,ae++}c.attributes=W,c.attributesNum=ae,c.index=z}function v(){const D=c.newAttributes;for(let H=0,B=D.length;H<B;H++)D[H]=0}function y(D){E(D,0)}function E(D,H){const B=c.newAttributes,z=c.enabledAttributes,W=c.attributeDivisors;B[D]=1,z[D]===0&&(t.enableVertexAttribArray(D),z[D]=1),W[D]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),W[D]=H)}function A(){const D=c.newAttributes,H=c.enabledAttributes;for(let B=0,z=H.length;B<z;B++)H[B]!==D[B]&&(t.disableVertexAttribArray(B),H[B]=0)}function C(D,H,B,z,W,ie,ae){ae===!0?t.vertexAttribIPointer(D,H,B,W,ie):t.vertexAttribPointer(D,H,B,z,W,ie)}function N(D,H,B,z){if(i.isWebGL2===!1&&(D.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=z.attributes,ie=B.getAttributes(),ae=H.defaultAttributeValues;for(const he in ie){const me=ie[he];if(me.location>=0){let te=W[he];if(te===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){const ce=te.normalized,xe=te.itemSize,Ae=n.get(te);if(Ae===void 0)continue;const we=Ae.buffer,ke=Ae.type,Fe=Ae.bytesPerElement,Ne=i.isWebGL2===!0&&(ke===t.INT||ke===t.UNSIGNED_INT||te.gpuType===cv);if(te.isInterleavedBufferAttribute){const ze=te.data,G=ze.stride,L=te.offset;if(ze.isInstancedInterleavedBuffer){for(let P=0;P<me.locationSize;P++)E(me.location+P,ze.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let P=0;P<me.locationSize;P++)y(me.location+P);t.bindBuffer(t.ARRAY_BUFFER,we);for(let P=0;P<me.locationSize;P++)C(me.location+P,xe/me.locationSize,ke,ce,G*Fe,(L+xe/me.locationSize*P)*Fe,Ne)}else{if(te.isInstancedBufferAttribute){for(let ze=0;ze<me.locationSize;ze++)E(me.location+ze,te.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ze=0;ze<me.locationSize;ze++)y(me.location+ze);t.bindBuffer(t.ARRAY_BUFFER,we);for(let ze=0;ze<me.locationSize;ze++)C(me.location+ze,xe/me.locationSize,ke,ce,xe*Fe,xe/me.locationSize*ze*Fe,Ne)}}else if(ae!==void 0){const ce=ae[he];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(me.location,ce);break;case 3:t.vertexAttrib3fv(me.location,ce);break;case 4:t.vertexAttrib4fv(me.location,ce);break;default:t.vertexAttrib1fv(me.location,ce)}}}}A()}function S(){R();for(const D in a){const H=a[D];for(const B in H){const z=H[B];for(const W in z)_(z[W].object),delete z[W];delete H[B]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;const H=a[D.id];for(const B in H){const z=H[B];for(const W in z)_(z[W].object),delete z[W];delete H[B]}delete a[D.id]}function I(D){for(const H in a){const B=a[H];if(B[D.id]===void 0)continue;const z=B[D.id];for(const W in z)_(z[W].object),delete z[W];delete B[D.id]}}function R(){F(),u=!0,c!==l&&(c=l,p(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:R,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function pC(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,d){if(d===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,u,f,d),n.update(f,s,d)}function c(u,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(u[_],f[_]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function mC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),E=v&&y,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:A}}function gC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new yr,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,v=M*4;let y=h.clippingState||null;l.value=y,y=u(_,d,v,p);for(let E=0;E!==v;++E)y[E]=n[E];h.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,y=p;v!==g;++v,y+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function _C(t){let e=new WeakMap;function n(o,a){return a===Xu?o.mapping=Bs:a===qu&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xu||a===qu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new RA(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class vC extends wv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ys=4,bp=[.125,.215,.35,.446,.526,.582],Mr=20,su=new vC,Tp=new ut;let ou=null,au=0,lu=0;const xr=(1+Math.sqrt(5))/2,ms=1/xr,Ap=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,xr,ms),new $(0,xr,-ms),new $(ms,0,xr),new $(-ms,0,xr),new $(xr,ms,0),new $(-xr,ms,0)];class wp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,au,lu),e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Bo,format:Jn,colorSpace:Li,depthBuffer:!1},r=Cp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SC(s)),this._blurMaterial=yC(s,e,n)}return r}_compileMaterial(e){const n=new wi(this._lodPlanes[0],e);this._renderer.compile(n,su)}_sceneToCubeUV(e,n,i,r){const a=new Bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Tp),u.toneMapping=tr,u.autoClear=!1;const p=new id({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new wi(new Qo,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Tp),g=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):M===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;Ba(r,M*v,h>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ba(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,su)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ap[(r-1)%Ap.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wi(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Mr;m>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const h=[];let M=0;for(let C=0;C<Mr;++C){const N=C/g,S=Math.exp(-N*N/2);h.push(S),C===0?M+=S:C<m&&(M+=2*S)}for(let C=0;C<h.length;C++)h[C]=h[C]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const y=this._sizeLods[r],E=3*y*(r>v-ys?r-v+ys:0),A=4*(this._cubeSize-y);Ba(n,E,A,3*y,2*y),l.setRenderTarget(n),l.render(f,su)}}function SC(t){const e=[],n=[],i=[];let r=t;const s=t-ys+1+bp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ys?l=bp[o-t+ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,h=1,M=new Float32Array(g*_*p),v=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,N=A>2?0:-1,S=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];M.set(S,g*_*A),v.set(d,m*_*A);const b=[A,A,A,A,A,A];y.set(b,h*_*A)}const E=new cr;E.setAttribute("position",new ai(M,g)),E.setAttribute("uv",new ai(v,m)),E.setAttribute("faceIndex",new ai(y,h)),e.push(E),r>ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cp(t,e,n){const i=new Vr(t,e,n);return i.texture.mapping=ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yC(t,e,n){const i=new Float32Array(Mr),r=new $(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Rp(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Pp(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function sd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xu||l===qu,u=l===Bs||l===Hs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new wp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new wp(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function EC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MC(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let v=0,y=M.length;v<y;v+=3){const E=M[v+0],A=M[v+1],C=M[v+2];d.push(E,A,A,C,C,E)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const E=v+0,A=v+1,C=v+2;d.push(E,A,A,C,C,E)}}else return;const m=new(vv(d)?Tv:bv)(d,1);m.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function bC(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){t.drawElements(s,_,a,p*l),n.update(_,s,1)}function f(p,_,g){if(g===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,_,a,p*l,g),n.update(_,s,g)}function d(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<g;h++)this.render(p[h]/l,_[h]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let h=0;for(let M=0;M<g;M++)h+=_[M];n.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function TC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function AC(t,e){return t[0]-e[0]}function wC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function CC(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let H=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),E===!0&&(S=3);let b=u.attributes.position.count*S,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*I*4*g),F=new xv(R,b,I,g);F.type=Yi,F.needsUpdate=!0;const D=S*4;for(let B=0;B<g;B++){const z=A[B],W=C[B],ie=N[B],ae=b*I*4*B;for(let he=0;he<z.count;he++){const me=he*D;v===!0&&(o.fromBufferAttribute(z,he),R[ae+me+0]=o.x,R[ae+me+1]=o.y,R[ae+me+2]=o.z,R[ae+me+3]=0),y===!0&&(o.fromBufferAttribute(W,he),R[ae+me+4]=o.x,R[ae+me+5]=o.y,R[ae+me+6]=o.z,R[ae+me+7]=0),E===!0&&(o.fromBufferAttribute(ie,he),R[ae+me+8]=o.x,R[ae+me+9]=o.y,R[ae+me+10]=o.z,R[ae+me+11]=ie.itemSize===4?o.w:1)}}m={count:g,texture:F,size:new ft(b,I)},s.set(u,m),u.addEventListener("dispose",H)}let h=0;for(let v=0;v<d.length;v++)h+=d[v];const M=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",M),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<_;y++){const E=g[y];E[0]=y,E[1]=d[y]}g.sort(wC);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(AC);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const E=a[y],A=E[0],C=E[1];A!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+y)!==m[A]&&u.setAttribute("morphTarget"+y,m[A]),h&&u.getAttribute("morphNormal"+y)!==h[A]&&u.setAttribute("morphNormal"+y,h[A]),r[y]=C,M+=C):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),h&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function RC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Lv extends Cn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Nr,u!==Nr&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Nr&&(i=$i),i===void 0&&u===ks&&(i=Dr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Dv=new Cn,Nv=new Lv(1,1);Nv.compareFunction=_v;const Iv=new xv,Uv=new fA,Ov=new Cv,Lp=[],Dp=[],Np=new Float32Array(16),Ip=new Float32Array(9),Up=new Float32Array(4);function Xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lp[r];if(s===void 0&&(s=new Float32Array(r),Lp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ac(t,e){let n=Dp[e];n===void 0&&(n=new Int32Array(e),Dp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function DC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function IC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Up.set(i),t.uniformMatrix2fv(this.addr,!1,Up),It(n,i)}}function UC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Ip.set(i),t.uniformMatrix3fv(this.addr,!1,Ip),It(n,i)}}function OC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Np.set(i),t.uniformMatrix4fv(this.addr,!1,Np),It(n,i)}}function FC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function HC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function kC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function VC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function GC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function WC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function XC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Nv:Dv;n.setTexture2D(e||s,r)}function qC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Uv,r)}function $C(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ov,r)}function YC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Iv,r)}function jC(t){switch(t){case 5126:return PC;case 35664:return LC;case 35665:return DC;case 35666:return NC;case 35674:return IC;case 35675:return UC;case 35676:return OC;case 5124:case 35670:return FC;case 35667:case 35671:return BC;case 35668:case 35672:return HC;case 35669:case 35673:return kC;case 5125:return VC;case 36294:return zC;case 36295:return GC;case 36296:return WC;case 35678:case 36198:case 36298:case 36306:case 35682:return XC;case 35679:case 36299:case 36307:return qC;case 35680:case 36300:case 36308:case 36293:return $C;case 36289:case 36303:case 36311:case 36292:return YC}}function KC(t,e){t.uniform1fv(this.addr,e)}function JC(t,e){const n=Xs(e,this.size,2);t.uniform2fv(this.addr,n)}function ZC(t,e){const n=Xs(e,this.size,3);t.uniform3fv(this.addr,n)}function QC(t,e){const n=Xs(e,this.size,4);t.uniform4fv(this.addr,n)}function eR(t,e){const n=Xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tR(t,e){const n=Xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nR(t,e){const n=Xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iR(t,e){t.uniform1iv(this.addr,e)}function rR(t,e){t.uniform2iv(this.addr,e)}function sR(t,e){t.uniform3iv(this.addr,e)}function oR(t,e){t.uniform4iv(this.addr,e)}function aR(t,e){t.uniform1uiv(this.addr,e)}function lR(t,e){t.uniform2uiv(this.addr,e)}function cR(t,e){t.uniform3uiv(this.addr,e)}function uR(t,e){t.uniform4uiv(this.addr,e)}function fR(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Dv,s[o])}function dR(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Uv,s[o])}function hR(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ov,s[o])}function pR(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Iv,s[o])}function mR(t){switch(t){case 5126:return KC;case 35664:return JC;case 35665:return ZC;case 35666:return QC;case 35674:return eR;case 35675:return tR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return rR;case 35668:case 35672:return sR;case 35669:case 35673:return oR;case 5125:return aR;case 36294:return lR;case 36295:return cR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return dR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return pR}}class gR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jC(n.type)}}class _R{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mR(n.type)}}class vR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const cu=/(\w+)(\])?(\[|\.)?/g;function Op(t,e){t.seq.push(e),t.map[e.id]=e}function SR(t,e,n){const i=t.name,r=i.length;for(cu.lastIndex=0;;){const s=cu.exec(i),o=cu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Op(n,c===void 0?new gR(a,t,e):new _R(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new vR(a),Op(n,f)),n=f}}}class Ya{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);SR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Fp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yR=37297;let xR=0;function ER(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function MR(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===Cl&&n===wl?i="LinearDisplayP3ToLinearSRGB":e===wl&&n===Cl&&(i="LinearSRGBToLinearDisplayP3"),t){case Li:case rc:return[i,"LinearTransferOETF"];case kt:case td:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Bp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ER(t.getShaderSource(e),o)}else return r}function bR(t,e){const n=MR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function TR(t,e){let n;switch(e){case IT:n="Linear";break;case UT:n="Reinhard";break;case OT:n="OptimizedCineon";break;case FT:n="ACESFilmic";break;case BT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function AR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(co).join(`
`)}function wR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function co(t){return t!==""}function Hp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zu(t){return t.replace(RR,LR)}const PR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function LR(t,e){let n=$e[e];if(n===void 0){const i=PR.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zu(n)}const DR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(t){return t.replace(DR,NR)}function NR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ov?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===lT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function UR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function FR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case av:e="ENVMAP_BLENDING_MULTIPLY";break;case DT:e="ENVMAP_BLENDING_MIX";break;case NT:e="ENVMAP_BLENDING_ADD";break}return e}function BR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=IR(n),c=UR(n),u=OR(n),f=FR(n),d=BR(n),p=n.isWebGL2?"":AR(n),_=wR(s),g=r.createProgram();let m,h,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(co).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(co).join(`
`),h.length>0&&(h+=`
`)):(m=[zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),h=[p,zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?$e.tonemapping_pars_fragment:"",n.toneMapping!==tr?TR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,bR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(co).join(`
`)),o=Zu(o),o=Hp(o,n),o=kp(o,n),a=Zu(a),a=Hp(a,n),a=kp(a,n),o=Vp(o),a=Vp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=M+m+o,y=M+h+a,E=Fp(r,r.VERTEX_SHADER,v),A=Fp(r,r.FRAGMENT_SHADER,y);r.attachShader(g,E),r.attachShader(g,A),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(I){if(t.debug.checkShaderErrors){const R=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(E).trim(),D=r.getShaderInfoLog(A).trim();let H=!0,B=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,E,A);else{const z=Bp(r,E,"vertex"),W=Bp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+z+`
`+W)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(F===""||D==="")&&(B=!1);B&&(I.diagnostics={runnable:H,programLog:R,vertexShader:{log:F,prefix:m},fragmentShader:{log:D,prefix:h}})}r.deleteShader(E),r.deleteShader(A),N=new Ya(r,g),S=CR(r,g)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(g,yR)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let kR=0;class VR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zR(e),n.set(e,i)),i}}class zR{constructor(e){this.id=kR++,this.code=e,this.usedTimes=0}}function GR(t,e,n,i,r,s,o){const a=new Ev,l=new VR,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,b,I,R,F){const D=R.fog,H=F.geometry,B=S.isMeshStandardMaterial?R.environment:null,z=(S.isMeshStandardMaterial?n:e).get(S.envMap||B),W=z&&z.mapping===ic?z.image.height:null,ie=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=ae!==void 0?ae.length:0;let me=0;H.morphAttributes.position!==void 0&&(me=1),H.morphAttributes.normal!==void 0&&(me=2),H.morphAttributes.color!==void 0&&(me=3);let te,ce,xe,Ae;if(ie){const tn=oi[ie];te=tn.vertexShader,ce=tn.fragmentShader}else te=S.vertexShader,ce=S.fragmentShader,l.update(S),xe=l.getVertexShaderID(S),Ae=l.getFragmentShaderID(S);const we=t.getRenderTarget(),ke=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,Ne=!!S.map,ze=!!S.matcap,G=!!z,L=!!S.aoMap,P=!!S.lightMap,k=!!S.bumpMap,Y=!!S.normalMap,ee=!!S.displacementMap,j=!!S.emissiveMap,re=!!S.metalnessMap,le=!!S.roughnessMap,ue=S.anisotropy>0,oe=S.clearcoat>0,T=S.iridescence>0,x=S.sheen>0,U=S.transmission>0,Z=ue&&!!S.anisotropyMap,Q=oe&&!!S.clearcoatMap,se=oe&&!!S.clearcoatNormalMap,ge=oe&&!!S.clearcoatRoughnessMap,fe=T&&!!S.iridescenceMap,_e=T&&!!S.iridescenceThicknessMap,Ce=x&&!!S.sheenColorMap,Be=x&&!!S.sheenRoughnessMap,de=!!S.specularMap,it=!!S.specularColorMap,Re=!!S.specularIntensityMap,Pe=U&&!!S.transmissionMap,De=U&&!!S.thicknessMap,be=!!S.gradientMap,Je=!!S.alphaMap,O=S.alphaTest>0,Ee=!!S.alphaHash,pe=!!S.extensions,ne=!!H.attributes.uv1,ve=!!H.attributes.uv2,Oe=!!H.attributes.uv3;let nt=tr;return S.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(nt=t.toneMapping),{isWebGL2:u,shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:ce,defines:S.defines,customVertexShaderID:xe,customFragmentShaderID:Ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Fe,instancing:ke,instancingColor:ke&&F.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Li,map:Ne,matcap:ze,envMap:G,envMapMode:G&&z.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:P,bumpMap:k,normalMap:Y,displacementMap:d&&ee,emissiveMap:j,normalMapObjectSpace:Y&&S.normalMapType===JT,normalMapTangentSpace:Y&&S.normalMapType===KT,metalnessMap:re,roughnessMap:le,anisotropy:ue,anisotropyMap:Z,clearcoat:oe,clearcoatMap:Q,clearcoatNormalMap:se,clearcoatRoughnessMap:ge,iridescence:T,iridescenceMap:fe,iridescenceThicknessMap:_e,sheen:x,sheenColorMap:Ce,sheenRoughnessMap:Be,specularMap:de,specularColorMap:it,specularIntensityMap:Re,transmission:U,transmissionMap:Pe,thicknessMap:De,gradientMap:be,opaque:S.transparent===!1&&S.blending===Cs,alphaMap:Je,alphaTest:O,alphaHash:Ee,combine:S.combine,mapUv:Ne&&g(S.map.channel),aoMapUv:L&&g(S.aoMap.channel),lightMapUv:P&&g(S.lightMap.channel),bumpMapUv:k&&g(S.bumpMap.channel),normalMapUv:Y&&g(S.normalMap.channel),displacementMapUv:ee&&g(S.displacementMap.channel),emissiveMapUv:j&&g(S.emissiveMap.channel),metalnessMapUv:re&&g(S.metalnessMap.channel),roughnessMapUv:le&&g(S.roughnessMap.channel),anisotropyMapUv:Z&&g(S.anisotropyMap.channel),clearcoatMapUv:Q&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&g(S.sheenRoughnessMap.channel),specularMapUv:de&&g(S.specularMap.channel),specularColorMapUv:it&&g(S.specularColorMap.channel),specularIntensityMapUv:Re&&g(S.specularIntensityMap.channel),transmissionMapUv:Pe&&g(S.transmissionMap.channel),thicknessMapUv:De&&g(S.thicknessMap.channel),alphaMapUv:Je&&g(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Y||ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ne,vertexUv2s:ve,vertexUv3s:Oe,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Ne||Je),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:me,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ti,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:pe&&S.extensions.derivatives===!0,extensionFragDepth:pe&&S.extensions.fragDepth===!0,extensionDrawBuffers:pe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)b.push(I),b.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(M(b,S),v(b,S),b.push(t.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const b=_[S.type];let I;if(b){const R=oi[b];I=TA.clone(R.uniforms)}else I=S.uniforms;return I}function E(S,b){let I;for(let R=0,F=c.length;R<F;R++){const D=c[R];if(D.cacheKey===b){I=D,++I.usedTimes;break}}return I===void 0&&(I=new HR(t,b,S,s),c.push(I)),I}function A(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:N}}function WR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function XR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,g,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function a(f,d,p,_,g,m){const h=o(f,d,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,g,m){const h=o(f,d,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||XR),i.length>1&&i.sort(d||Gp),r.length>1&&r.sort(d||Gp)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function qR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Wp,t.set(i,[o])):r>=s.length?(o=new Wp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function $R(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new ut};break;case"SpotLight":n={position:new $,direction:new $,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":n={color:new ut,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function YR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jR=0;function KR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function JR(t,e){const n=new $R,i=YR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new $);const s=new $,o=new Wt,a=new Wt;function l(u,f){let d=0,p=0,_=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let g=0,m=0,h=0,M=0,v=0,y=0,E=0,A=0,C=0,N=0,S=0;u.sort(KR);const b=f===!0?Math.PI:1;for(let R=0,F=u.length;R<F;R++){const D=u[R],H=D.color,B=D.intensity,z=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=H.r*B*b,p+=H.g*B*b,_+=H.b*B*b;else if(D.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(D.sh.coefficients[ie],B);S++}else if(D.isDirectionalLight){const ie=n.get(D);if(ie.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const ae=D.shadow,he=i.get(D);he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,r.directionalShadow[g]=he,r.directionalShadowMap[g]=W,r.directionalShadowMatrix[g]=D.shadow.matrix,y++}r.directional[g]=ie,g++}else if(D.isSpotLight){const ie=n.get(D);ie.position.setFromMatrixPosition(D.matrixWorld),ie.color.copy(H).multiplyScalar(B*b),ie.distance=z,ie.coneCos=Math.cos(D.angle),ie.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ie.decay=D.decay,r.spot[h]=ie;const ae=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,ae.updateMatrices(D),D.castShadow&&N++),r.spotLightMatrix[h]=ae.matrix,D.castShadow){const he=i.get(D);he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,r.spotShadow[h]=he,r.spotShadowMap[h]=W,A++}h++}else if(D.isRectAreaLight){const ie=n.get(D);ie.color.copy(H).multiplyScalar(B),ie.halfWidth.set(D.width*.5,0,0),ie.halfHeight.set(0,D.height*.5,0),r.rectArea[M]=ie,M++}else if(D.isPointLight){const ie=n.get(D);if(ie.color.copy(D.color).multiplyScalar(D.intensity*b),ie.distance=D.distance,ie.decay=D.decay,D.castShadow){const ae=D.shadow,he=i.get(D);he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,he.shadowCameraNear=ae.camera.near,he.shadowCameraFar=ae.camera.far,r.pointShadow[m]=he,r.pointShadowMap[m]=W,r.pointShadowMatrix[m]=D.shadow.matrix,E++}r.point[m]=ie,m++}else if(D.isHemisphereLight){const ie=n.get(D);ie.skyColor.copy(D.color).multiplyScalar(B*b),ie.groundColor.copy(D.groundColor).multiplyScalar(B*b),r.hemi[v]=ie,v++}}M>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==g||I.pointLength!==m||I.spotLength!==h||I.rectAreaLength!==M||I.hemiLength!==v||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==A||I.numSpotMaps!==C||I.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=M,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+C-N,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=S,I.directionalLength=g,I.pointLength=m,I.spotLength=h,I.rectAreaLength=M,I.hemiLength=v,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=A,I.numSpotMaps=C,I.numLightProbes=S,r.version=jR++)}function c(u,f){let d=0,p=0,_=0,g=0,m=0;const h=f.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const y=u[M];if(y.isDirectionalLight){const E=r.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),d++}else if(y.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const E=r.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Xp(t,e){const n=new JR(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ZR(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Xp(t,e),n.set(s,[l])):o>=a.length?(l=new Xp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class QR extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eP extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iP(t,e,n){let i=new Rv;const r=new ft,s=new ft,o=new zt,a=new QR({depthPacking:jT}),l=new eP,c={},u=n.maxTextureSize,f={[or]:Sn,[Sn]:or,[Ti]:Ti},d=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:tP,fragmentShader:nP}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new cr;_.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new wi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ov;let h=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const N=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),I=t.state;I.setBlending(er),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const R=h!==yi&&this.type===yi,F=h===yi&&this.type!==yi;for(let D=0,H=E.length;D<H;D++){const B=E[D],z=B.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const W=z.getFrameExtents();if(r.multiply(W),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,z.mapSize.y=s.y)),z.map===null||R===!0||F===!0){const ae=this.type!==yi?{minFilter:an,magFilter:an}:{};z.map!==null&&z.map.dispose(),z.map=new Vr(r.x,r.y,ae),z.map.texture.name=B.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const ie=z.getViewportCount();for(let ae=0;ae<ie;ae++){const he=z.getViewport(ae);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),I.viewport(o),z.updateMatrices(B,ae),i=z.getFrustum(),y(A,C,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===yi&&M(z,C),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(N,S,b)};function M(E,A){const C=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vr(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(A,null,C,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(A,null,C,p,g,null)}function v(E,A,C,N){let S=null;const b=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)S=b;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=S.uuid,R=A.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let D=F[R];D===void 0&&(D=S.clone(),F[R]=D),S=D}if(S.visible=A.visible,S.wireframe=A.wireframe,N===yi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=t.properties.get(S);I.light=C}return S}function y(E,A,C,N,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===yi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const R=e.update(E),F=E.material;if(Array.isArray(F)){const D=R.groups;for(let H=0,B=D.length;H<B;H++){const z=D[H],W=F[z.materialIndex];if(W&&W.visible){const ie=v(E,W,N,S);E.onBeforeShadow(t,E,A,C,R,ie,z),t.renderBufferDirect(C,null,R,ie,E,z),E.onAfterShadow(t,E,A,C,R,ie,z)}}}else if(F.visible){const D=v(E,F,N,S);E.onBeforeShadow(t,E,A,C,R,D,null),t.renderBufferDirect(C,null,R,D,E,null),E.onAfterShadow(t,E,A,C,R,D,null)}}const I=E.children;for(let R=0,F=I.length;R<F;R++)y(I[R],A,C,N,S)}}function rP(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const Ee=new zt;let pe=null;const ne=new zt(0,0,0,0);return{setMask:function(ve){pe!==ve&&!O&&(t.colorMask(ve,ve,ve,ve),pe=ve)},setLocked:function(ve){O=ve},setClear:function(ve,Oe,nt,Ut,tn){tn===!0&&(ve*=Ut,Oe*=Ut,nt*=Ut),Ee.set(ve,Oe,nt,Ut),ne.equals(Ee)===!1&&(t.clearColor(ve,Oe,nt,Ut),ne.copy(Ee))},reset:function(){O=!1,pe=null,ne.set(-1,0,0,0)}}}function s(){let O=!1,Ee=null,pe=null,ne=null;return{setTest:function(ve){ve?Fe(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(ve){Ee!==ve&&!O&&(t.depthMask(ve),Ee=ve)},setFunc:function(ve){if(pe!==ve){switch(ve){case TT:t.depthFunc(t.NEVER);break;case AT:t.depthFunc(t.ALWAYS);break;case wT:t.depthFunc(t.LESS);break;case Tl:t.depthFunc(t.LEQUAL);break;case CT:t.depthFunc(t.EQUAL);break;case RT:t.depthFunc(t.GEQUAL);break;case PT:t.depthFunc(t.GREATER);break;case LT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=ve}},setLocked:function(ve){O=ve},setClear:function(ve){ne!==ve&&(t.clearDepth(ve),ne=ve)},reset:function(){O=!1,Ee=null,pe=null,ne=null}}}function o(){let O=!1,Ee=null,pe=null,ne=null,ve=null,Oe=null,nt=null,Ut=null,tn=null;return{setTest:function(dt){O||(dt?Fe(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(dt){Ee!==dt&&!O&&(t.stencilMask(dt),Ee=dt)},setFunc:function(dt,nn,ti){(pe!==dt||ne!==nn||ve!==ti)&&(t.stencilFunc(dt,nn,ti),pe=dt,ne=nn,ve=ti)},setOp:function(dt,nn,ti){(Oe!==dt||nt!==nn||Ut!==ti)&&(t.stencilOp(dt,nn,ti),Oe=dt,nt=nn,Ut=ti)},setLocked:function(dt){O=dt},setClear:function(dt){tn!==dt&&(t.clearStencil(dt),tn=dt)},reset:function(){O=!1,Ee=null,pe=null,ne=null,ve=null,Oe=null,nt=null,Ut=null,tn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,h=!1,M=null,v=null,y=null,E=null,A=null,C=null,N=null,S=new ut(0,0,0),b=0,I=!1,R=null,F=null,D=null,H=null,B=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const ae=t.getParameter(t.VERSION);ae.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),W=ie>=1):ae.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),W=ie>=2);let he=null,me={};const te=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),xe=new zt().fromArray(te),Ae=new zt().fromArray(ce);function we(O,Ee,pe,ne){const ve=new Uint8Array(4),Oe=t.createTexture();t.bindTexture(O,Oe),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<pe;nt++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(Ee,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(Ee+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Oe}const ke={};ke[t.TEXTURE_2D]=we(t.TEXTURE_2D,t.TEXTURE_2D,1),ke[t.TEXTURE_CUBE_MAP]=we(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ke[t.TEXTURE_2D_ARRAY]=we(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ke[t.TEXTURE_3D]=we(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(t.DEPTH_TEST),l.setFunc(Tl),j(!1),re(Ah),Fe(t.CULL_FACE),Y(er);function Fe(O){d[O]!==!0&&(t.enable(O),d[O]=!0)}function Ne(O){d[O]!==!1&&(t.disable(O),d[O]=!1)}function ze(O,Ee){return p[O]!==Ee?(t.bindFramebuffer(O,Ee),p[O]=Ee,i&&(O===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Ee),O===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function G(O,Ee){let pe=g,ne=!1;if(O)if(pe=_.get(Ee),pe===void 0&&(pe=[],_.set(Ee,pe)),O.isWebGLMultipleRenderTargets){const ve=O.texture;if(pe.length!==ve.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let Oe=0,nt=ve.length;Oe<nt;Oe++)pe[Oe]=t.COLOR_ATTACHMENT0+Oe;pe.length=ve.length,ne=!0}}else pe[0]!==t.COLOR_ATTACHMENT0&&(pe[0]=t.COLOR_ATTACHMENT0,ne=!0);else pe[0]!==t.BACK&&(pe[0]=t.BACK,ne=!0);ne&&(n.isWebGL2?t.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function L(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const P={[Er]:t.FUNC_ADD,[uT]:t.FUNC_SUBTRACT,[fT]:t.FUNC_REVERSE_SUBTRACT};if(i)P[Ph]=t.MIN,P[Lh]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(P[Ph]=O.MIN_EXT,P[Lh]=O.MAX_EXT)}const k={[dT]:t.ZERO,[hT]:t.ONE,[pT]:t.SRC_COLOR,[Gu]:t.SRC_ALPHA,[yT]:t.SRC_ALPHA_SATURATE,[vT]:t.DST_COLOR,[gT]:t.DST_ALPHA,[mT]:t.ONE_MINUS_SRC_COLOR,[Wu]:t.ONE_MINUS_SRC_ALPHA,[ST]:t.ONE_MINUS_DST_COLOR,[_T]:t.ONE_MINUS_DST_ALPHA,[xT]:t.CONSTANT_COLOR,[ET]:t.ONE_MINUS_CONSTANT_COLOR,[MT]:t.CONSTANT_ALPHA,[bT]:t.ONE_MINUS_CONSTANT_ALPHA};function Y(O,Ee,pe,ne,ve,Oe,nt,Ut,tn,dt){if(O===er){h===!0&&(Ne(t.BLEND),h=!1);return}if(h===!1&&(Fe(t.BLEND),h=!0),O!==cT){if(O!==M||dt!==I){if((v!==Er||A!==Er)&&(t.blendEquation(t.FUNC_ADD),v=Er,A=Er),dt)switch(O){case Cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wh:t.blendFunc(t.ONE,t.ONE);break;case Ch:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ch:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,E=null,C=null,N=null,S.set(0,0,0),b=0,M=O,I=dt}return}ve=ve||Ee,Oe=Oe||pe,nt=nt||ne,(Ee!==v||ve!==A)&&(t.blendEquationSeparate(P[Ee],P[ve]),v=Ee,A=ve),(pe!==y||ne!==E||Oe!==C||nt!==N)&&(t.blendFuncSeparate(k[pe],k[ne],k[Oe],k[nt]),y=pe,E=ne,C=Oe,N=nt),(Ut.equals(S)===!1||tn!==b)&&(t.blendColor(Ut.r,Ut.g,Ut.b,tn),S.copy(Ut),b=tn),M=O,I=!1}function ee(O,Ee){O.side===Ti?Ne(t.CULL_FACE):Fe(t.CULL_FACE);let pe=O.side===Sn;Ee&&(pe=!pe),j(pe),O.blending===Cs&&O.transparent===!1?Y(er):Y(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const ne=O.stencilWrite;c.setTest(ne),ne&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Fe(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function j(O){R!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),R=O)}function re(O){O!==oT?(Fe(t.CULL_FACE),O!==F&&(O===Ah?t.cullFace(t.BACK):O===aT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),F=O}function le(O){O!==D&&(W&&t.lineWidth(O),D=O)}function ue(O,Ee,pe){O?(Fe(t.POLYGON_OFFSET_FILL),(H!==Ee||B!==pe)&&(t.polygonOffset(Ee,pe),H=Ee,B=pe)):Ne(t.POLYGON_OFFSET_FILL)}function oe(O){O?Fe(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function T(O){O===void 0&&(O=t.TEXTURE0+z-1),he!==O&&(t.activeTexture(O),he=O)}function x(O,Ee,pe){pe===void 0&&(he===null?pe=t.TEXTURE0+z-1:pe=he);let ne=me[pe];ne===void 0&&(ne={type:void 0,texture:void 0},me[pe]=ne),(ne.type!==O||ne.texture!==Ee)&&(he!==pe&&(t.activeTexture(pe),he=pe),t.bindTexture(O,Ee||ke[O]),ne.type=O,ne.texture=Ee)}function U(){const O=me[he];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(O){xe.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),xe.copy(O))}function Pe(O){Ae.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Ae.copy(O))}function De(O,Ee){let pe=f.get(Ee);pe===void 0&&(pe=new WeakMap,f.set(Ee,pe));let ne=pe.get(O);ne===void 0&&(ne=t.getUniformBlockIndex(Ee,O.name),pe.set(O,ne))}function be(O,Ee){const ne=f.get(Ee).get(O);u.get(Ee)!==ne&&(t.uniformBlockBinding(Ee,ne,O.__bindingPointIndex),u.set(Ee,ne))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},he=null,me={},p={},_=new WeakMap,g=[],m=null,h=!1,M=null,v=null,y=null,E=null,A=null,C=null,N=null,S=new ut(0,0,0),b=0,I=!1,R=null,F=null,D=null,H=null,B=null,xe.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:Ne,bindFramebuffer:ze,drawBuffers:G,useProgram:L,setBlending:Y,setMaterial:ee,setFlipSided:j,setCullFace:re,setLineWidth:le,setPolygonOffset:ue,setScissorTest:oe,activeTexture:T,bindTexture:x,unbindTexture:U,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:de,texImage3D:it,updateUBOMapping:De,uniformBlockBinding:be,texStorage2D:Ce,texStorage3D:Be,texSubImage2D:se,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Re,viewport:Pe,reset:Je}}function sP(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,x){return h?new OffscreenCanvas(T,x):Pl("canvas")}function v(T,x,U,Z){let Q=1;if((T.width>Z||T.height>Z)&&(Q=Z/Math.max(T.width,T.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const se=x?Ju:Math.floor,ge=se(Q*T.width),fe=se(Q*T.height);g===void 0&&(g=M(ge,fe));const _e=U?M(ge,fe):g;return _e.width=ge,_e.height=fe,_e.getContext("2d").drawImage(T,0,0,ge,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ge+"x"+fe+")."),_e}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return ap(T.width)&&ap(T.height)}function E(T){return a?!1:T.wrapS!==Kn||T.wrapT!==Kn||T.minFilter!==an&&T.minFilter!==Fn}function A(T,x){return T.generateMipmaps&&x&&T.minFilter!==an&&T.minFilter!==Fn}function C(T){t.generateMipmap(T)}function N(T,x,U,Z,Q=!1){if(a===!1)return x;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=x;if(x===t.RED&&(U===t.FLOAT&&(se=t.R32F),U===t.HALF_FLOAT&&(se=t.R16F),U===t.UNSIGNED_BYTE&&(se=t.R8)),x===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(se=t.R8UI),U===t.UNSIGNED_SHORT&&(se=t.R16UI),U===t.UNSIGNED_INT&&(se=t.R32UI),U===t.BYTE&&(se=t.R8I),U===t.SHORT&&(se=t.R16I),U===t.INT&&(se=t.R32I)),x===t.RG&&(U===t.FLOAT&&(se=t.RG32F),U===t.HALF_FLOAT&&(se=t.RG16F),U===t.UNSIGNED_BYTE&&(se=t.RG8)),x===t.RGBA){const ge=Q?Al:ct.getTransfer(Z);U===t.FLOAT&&(se=t.RGBA32F),U===t.HALF_FLOAT&&(se=t.RGBA16F),U===t.UNSIGNED_BYTE&&(se=ge===pt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(T,x,U){return A(T,U)===!0||T.isFramebufferTexture&&T.minFilter!==an&&T.minFilter!==Fn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function b(T){return T===an||T===Dh||T===Ic?t.NEAREST:t.LINEAR}function I(T){const x=T.target;x.removeEventListener("dispose",I),F(x),x.isVideoTexture&&_.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),H(x)}function F(T){const x=i.get(T);if(x.__webglInit===void 0)return;const U=T.source,Z=m.get(U);if(Z){const Q=Z[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(T),Object.keys(Z).length===0&&m.delete(U)}i.remove(T)}function D(T){const x=i.get(T);t.deleteTexture(x.__webglTexture);const U=T.source,Z=m.get(U);delete Z[x.__cacheKey],o.memory.textures--}function H(T){const x=T.texture,U=i.get(T),Z=i.get(x);if(Z.__webglTexture!==void 0&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(U.__webglFramebuffer[Q]))for(let se=0;se<U.__webglFramebuffer[Q].length;se++)t.deleteFramebuffer(U.__webglFramebuffer[Q][se]);else t.deleteFramebuffer(U.__webglFramebuffer[Q]);U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer[Q])}else{if(Array.isArray(U.__webglFramebuffer))for(let Q=0;Q<U.__webglFramebuffer.length;Q++)t.deleteFramebuffer(U.__webglFramebuffer[Q]);else t.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&t.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&t.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Q=0,se=x.length;Q<se;Q++){const ge=i.get(x[Q]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(x[Q])}i.remove(x),i.remove(T)}let B=0;function z(){B=0}function W(){const T=B;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),B+=1,T}function ie(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ae(T,x){const U=i.get(T);if(T.isVideoTexture&&ue(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(U,T,x);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+x)}function he(T,x){const U=i.get(T);if(T.version>0&&U.__version!==T.version){Fe(U,T,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+x)}function me(T,x){const U=i.get(T);if(T.version>0&&U.__version!==T.version){Fe(U,T,x);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+x)}function te(T,x){const U=i.get(T);if(T.version>0&&U.__version!==T.version){Ne(U,T,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+x)}const ce={[$u]:t.REPEAT,[Kn]:t.CLAMP_TO_EDGE,[Yu]:t.MIRRORED_REPEAT},xe={[an]:t.NEAREST,[Dh]:t.NEAREST_MIPMAP_NEAREST,[Ic]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[HT]:t.LINEAR_MIPMAP_NEAREST,[Fo]:t.LINEAR_MIPMAP_LINEAR},Ae={[ZT]:t.NEVER,[rA]:t.ALWAYS,[QT]:t.LESS,[_v]:t.LEQUAL,[eA]:t.EQUAL,[iA]:t.GEQUAL,[tA]:t.GREATER,[nA]:t.NOTEQUAL};function we(T,x,U){if(U?(t.texParameteri(T,t.TEXTURE_WRAP_S,ce[x.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ce[x.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ce[x.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,xe[x.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,xe[x.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(x.wrapS!==Kn||x.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,b(x.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==an&&x.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===an||x.minFilter!==Ic&&x.minFilter!==Fo||x.type===Yi&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Bo&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(T,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ke(T,x){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",I));const Z=x.source;let Q=m.get(Z);Q===void 0&&(Q={},m.set(Z,Q));const se=ie(x);if(se!==T.__cacheKey){Q[se]===void 0&&(Q[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[se].usedTimes++;const ge=Q[T.__cacheKey];ge!==void 0&&(Q[T.__cacheKey].usedTimes--,ge.usedTimes===0&&D(x)),T.__cacheKey=se,T.__webglTexture=Q[se].texture}return U}function Fe(T,x,U){let Z=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=t.TEXTURE_3D);const Q=ke(T,x),se=x.source;n.bindTexture(Z,T.__webglTexture,t.TEXTURE0+U);const ge=i.get(se);if(se.version!==ge.__version||Q===!0){n.activeTexture(t.TEXTURE0+U);const fe=ct.getPrimaries(ct.workingColorSpace),_e=x.colorSpace===Hn?null:ct.getPrimaries(x.colorSpace),Ce=x.colorSpace===Hn||fe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Be=E(x)&&y(x.image)===!1;let de=v(x.image,Be,!1,u);de=oe(x,de);const it=y(de)||a,Re=s.convert(x.format,x.colorSpace);let Pe=s.convert(x.type),De=N(x.internalFormat,Re,Pe,x.colorSpace,x.isVideoTexture);we(Z,x,it);let be;const Je=x.mipmaps,O=a&&x.isVideoTexture!==!0&&De!==mv,Ee=ge.__version===void 0||Q===!0,pe=S(x,de,it);if(x.isDepthTexture)De=t.DEPTH_COMPONENT,a?x.type===Yi?De=t.DEPTH_COMPONENT32F:x.type===$i?De=t.DEPTH_COMPONENT24:x.type===Dr?De=t.DEPTH24_STENCIL8:De=t.DEPTH_COMPONENT16:x.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Nr&&De===t.DEPTH_COMPONENT&&x.type!==ed&&x.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=$i,Pe=s.convert(x.type)),x.format===ks&&De===t.DEPTH_COMPONENT&&(De=t.DEPTH_STENCIL,x.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Dr,Pe=s.convert(x.type))),Ee&&(O?n.texStorage2D(t.TEXTURE_2D,1,De,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,De,de.width,de.height,0,Re,Pe,null));else if(x.isDataTexture)if(Je.length>0&&it){O&&Ee&&n.texStorage2D(t.TEXTURE_2D,pe,De,Je[0].width,Je[0].height);for(let ne=0,ve=Je.length;ne<ve;ne++)be=Je[ne],O?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,be.width,be.height,Re,Pe,be.data):n.texImage2D(t.TEXTURE_2D,ne,De,be.width,be.height,0,Re,Pe,be.data);x.generateMipmaps=!1}else O?(Ee&&n.texStorage2D(t.TEXTURE_2D,pe,De,de.width,de.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,Re,Pe,de.data)):n.texImage2D(t.TEXTURE_2D,0,De,de.width,de.height,0,Re,Pe,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,De,Je[0].width,Je[0].height,de.depth);for(let ne=0,ve=Je.length;ne<ve;ne++)be=Je[ne],x.format!==Jn?Re!==null?O?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,be.width,be.height,de.depth,Re,be.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,De,be.width,be.height,de.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,be.width,be.height,de.depth,Re,Pe,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,De,be.width,be.height,de.depth,0,Re,Pe,be.data)}else{O&&Ee&&n.texStorage2D(t.TEXTURE_2D,pe,De,Je[0].width,Je[0].height);for(let ne=0,ve=Je.length;ne<ve;ne++)be=Je[ne],x.format!==Jn?Re!==null?O?n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,be.width,be.height,Re,be.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,be.width,be.height,Re,Pe,be.data):n.texImage2D(t.TEXTURE_2D,ne,De,be.width,be.height,0,Re,Pe,be.data)}else if(x.isDataArrayTexture)O?(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,De,de.width,de.height,de.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Re,Pe,de.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,de.width,de.height,de.depth,0,Re,Pe,de.data);else if(x.isData3DTexture)O?(Ee&&n.texStorage3D(t.TEXTURE_3D,pe,De,de.width,de.height,de.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Re,Pe,de.data)):n.texImage3D(t.TEXTURE_3D,0,De,de.width,de.height,de.depth,0,Re,Pe,de.data);else if(x.isFramebufferTexture){if(Ee)if(O)n.texStorage2D(t.TEXTURE_2D,pe,De,de.width,de.height);else{let ne=de.width,ve=de.height;for(let Oe=0;Oe<pe;Oe++)n.texImage2D(t.TEXTURE_2D,Oe,De,ne,ve,0,Re,Pe,null),ne>>=1,ve>>=1}}else if(Je.length>0&&it){O&&Ee&&n.texStorage2D(t.TEXTURE_2D,pe,De,Je[0].width,Je[0].height);for(let ne=0,ve=Je.length;ne<ve;ne++)be=Je[ne],O?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Re,Pe,be):n.texImage2D(t.TEXTURE_2D,ne,De,Re,Pe,be);x.generateMipmaps=!1}else O?(Ee&&n.texStorage2D(t.TEXTURE_2D,pe,De,de.width,de.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Pe,de)):n.texImage2D(t.TEXTURE_2D,0,De,Re,Pe,de);A(x,it)&&C(Z),ge.__version=se.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ne(T,x,U){if(x.image.length!==6)return;const Z=ke(T,x),Q=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+U);const se=i.get(Q);if(Q.version!==se.__version||Z===!0){n.activeTexture(t.TEXTURE0+U);const ge=ct.getPrimaries(ct.workingColorSpace),fe=x.colorSpace===Hn?null:ct.getPrimaries(x.colorSpace),_e=x.colorSpace===Hn||ge===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Be=x.image[0]&&x.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!Ce&&!Be?de[ne]=v(x.image[ne],!1,!0,c):de[ne]=Be?x.image[ne].image:x.image[ne],de[ne]=oe(x,de[ne]);const it=de[0],Re=y(it)||a,Pe=s.convert(x.format,x.colorSpace),De=s.convert(x.type),be=N(x.internalFormat,Pe,De,x.colorSpace),Je=a&&x.isVideoTexture!==!0,O=se.__version===void 0||Z===!0;let Ee=S(x,it,Re);we(t.TEXTURE_CUBE_MAP,x,Re);let pe;if(Ce){Je&&O&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,be,it.width,it.height);for(let ne=0;ne<6;ne++){pe=de[ne].mipmaps;for(let ve=0;ve<pe.length;ve++){const Oe=pe[ve];x.format!==Jn?Pe!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Oe.width,Oe.height,Pe,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,be,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Oe.width,Oe.height,Pe,De,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,be,Oe.width,Oe.height,0,Pe,De,Oe.data)}}}else{pe=x.mipmaps,Je&&O&&(pe.length>0&&Ee++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,be,de[0].width,de[0].height));for(let ne=0;ne<6;ne++)if(Be){Je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,Pe,De,de[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,be,de[ne].width,de[ne].height,0,Pe,De,de[ne].data);for(let ve=0;ve<pe.length;ve++){const nt=pe[ve].image[ne].image;Je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,nt.width,nt.height,Pe,De,nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,be,nt.width,nt.height,0,Pe,De,nt.data)}}else{Je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Pe,De,de[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,be,Pe,De,de[ne]);for(let ve=0;ve<pe.length;ve++){const Oe=pe[ve];Je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Pe,De,Oe.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,be,Pe,De,Oe.image[ne])}}}A(x,Re)&&C(t.TEXTURE_CUBE_MAP),se.__version=Q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ze(T,x,U,Z,Q,se){const ge=s.convert(U.format,U.colorSpace),fe=s.convert(U.type),_e=N(U.internalFormat,ge,fe,U.colorSpace);if(!i.get(x).__hasExternalTextures){const Be=Math.max(1,x.width>>se),de=Math.max(1,x.height>>se);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,se,_e,Be,de,x.depth,0,ge,fe,null):n.texImage2D(Q,se,_e,Be,de,0,ge,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),le(x)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,Q,i.get(U).__webglTexture,0,re(x)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,Q,i.get(U).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(T,x,U){if(t.bindRenderbuffer(t.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let Z=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(U||le(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Yi?Z=t.DEPTH_COMPONENT32F:Q.type===$i&&(Z=t.DEPTH_COMPONENT24));const se=re(x);le(x)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,Z,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,Z,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const Z=re(x);U&&le(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,x.width,x.height):le(x)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const Z=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Q=0;Q<Z.length;Q++){const se=Z[Q],ge=s.convert(se.format,se.colorSpace),fe=s.convert(se.type),_e=N(se.internalFormat,ge,fe,se.colorSpace),Ce=re(x);U&&le(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,_e,x.width,x.height):le(x)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,_e,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,_e,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function L(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);const Z=i.get(x.depthTexture).__webglTexture,Q=re(x);if(x.depthTexture.format===Nr)le(x)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(x.depthTexture.format===ks)le(x)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function P(T){const x=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");L(x.__webglFramebuffer,T)}else if(U){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]=t.createRenderbuffer(),G(x.__webglDepthbuffer[Z],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),G(x.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(T,x,U){const Z=i.get(T);x!==void 0&&ze(Z.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&P(T)}function Y(T){const x=T.texture,U=i.get(T),Z=i.get(x);T.addEventListener("dispose",R),T.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=x.version,o.memory.textures++);const Q=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,ge=y(T)||a;if(Q){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let _e=0;_e<x.mipmaps.length;_e++)U.__webglFramebuffer[fe][_e]=t.createFramebuffer()}else U.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)U.__webglFramebuffer[fe]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const fe=T.texture;for(let _e=0,Ce=fe.length;_e<Ce;_e++){const Be=i.get(fe[_e]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&le(T)===!1){const fe=se?x:[x];U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){const Ce=fe[_e];U.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[_e]);const Be=s.convert(Ce.format,Ce.colorSpace),de=s.convert(Ce.type),it=N(Ce.internalFormat,Be,de,Ce.colorSpace,T.isXRRenderTarget===!0),Re=re(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,it,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,U.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),G(U.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),we(t.TEXTURE_CUBE_MAP,x,ge);for(let fe=0;fe<6;fe++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)ze(U.__webglFramebuffer[fe][_e],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else ze(U.__webglFramebuffer[fe],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);A(x,ge)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const fe=T.texture;for(let _e=0,Ce=fe.length;_e<Ce;_e++){const Be=fe[_e],de=i.get(Be);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),we(t.TEXTURE_2D,Be,ge),ze(U.__webglFramebuffer,T,Be,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),A(Be,ge)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?fe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,Z.__webglTexture),we(fe,x,ge),a&&x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)ze(U.__webglFramebuffer[_e],T,x,t.COLOR_ATTACHMENT0,fe,_e);else ze(U.__webglFramebuffer,T,x,t.COLOR_ATTACHMENT0,fe,0);A(x,ge)&&C(fe),n.unbindTexture()}T.depthBuffer&&P(T)}function ee(T){const x=y(T)||a,U=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Z=0,Q=U.length;Z<Q;Z++){const se=U[Z];if(A(se,x)){const ge=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(se).__webglTexture;n.bindTexture(ge,fe),C(ge),n.unbindTexture()}}}function j(T){if(a&&T.samples>0&&le(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],U=T.width,Z=T.height;let Q=t.COLOR_BUFFER_BIT;const se=[],ge=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(T),_e=T.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ce=0;Ce<x.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){se.push(t.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&se.push(ge);const Be=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Be===!1&&(T.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),_e&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),_e){const de=i.get(x[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,U,Z,0,0,U,Z,Q,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<x.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]);const Be=i.get(x[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function re(T){return Math.min(f,T.samples)}function le(T){const x=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ue(T){const x=o.render.frame;_.get(T)!==x&&(_.set(T,x),T.update())}function oe(T,x){const U=T.colorSpace,Z=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ju||U!==Li&&U!==Hn&&(ct.getTransfer(U)===pt?a===!1?e.has("EXT_sRGB")===!0&&Z===Jn?(T.format=ju,T.minFilter=Fn,T.generateMipmaps=!1):x=Sv.sRGBToLinear(x):(Z!==Jn||Q!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.setTexture2D=ae,this.setTexture2DArray=he,this.setTexture3D=me,this.setTextureCube=te,this.rebindTextures=k,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=le}function oP(t,e,n){const i=n.isWebGL2;function r(s,o=Hn){let a;const l=ct.getTransfer(o);if(s===nr)return t.UNSIGNED_BYTE;if(s===uv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===fv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===kT)return t.BYTE;if(s===VT)return t.SHORT;if(s===ed)return t.UNSIGNED_SHORT;if(s===cv)return t.INT;if(s===$i)return t.UNSIGNED_INT;if(s===Yi)return t.FLOAT;if(s===Bo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zT)return t.ALPHA;if(s===Jn)return t.RGBA;if(s===GT)return t.LUMINANCE;if(s===WT)return t.LUMINANCE_ALPHA;if(s===Nr)return t.DEPTH_COMPONENT;if(s===ks)return t.DEPTH_STENCIL;if(s===ju)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===XT)return t.RED;if(s===dv)return t.RED_INTEGER;if(s===qT)return t.RG;if(s===hv)return t.RG_INTEGER;if(s===pv)return t.RGBA_INTEGER;if(s===Uc||s===Oc||s===Fc||s===Bc)if(l===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nh||s===Ih||s===Uh||s===Oh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Nh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ih)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Uh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Oh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fh||s===Bh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Fh)return l===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Bh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hh||s===kh||s===Vh||s===zh||s===Gh||s===Wh||s===Xh||s===qh||s===$h||s===Yh||s===jh||s===Kh||s===Jh||s===Zh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$h)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zh)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hc||s===Qh||s===ep)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Hc)return l===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ep)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$T||s===tp||s===np||s===ip)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Hc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===tp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===np)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ip)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class aP extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ha extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lP={type:"move"};class uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ha;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class cP extends Ws{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const g=n.getContextAttributes();let m=null,h=null;const M=[],v=[],y=new ft;let E=null;const A=new Bn;A.layers.enable(1),A.viewport=new zt;const C=new Bn;C.layers.enable(2),C.viewport=new zt;const N=[A,C],S=new aP;S.layers.enable(1),S.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=M[te];return ce===void 0&&(ce=new uu,M[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=M[te];return ce===void 0&&(ce=new uu,M[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=M[te];return ce===void 0&&(ce=new uu,M[te]=ce),ce.getHandSpace()};function R(te){const ce=v.indexOf(te.inputSource);if(ce===-1)return;const xe=M[ce];xe!==void 0&&(xe.update(te.inputSource,te.frame,c||o),xe.dispatchEvent({type:te.type,data:te.inputSource}))}function F(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",D);for(let te=0;te<M.length;te++){const ce=v[te];ce!==null&&(v[te]=null,M[te].disconnect(ce))}b=null,I=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",F),r.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Vr(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,xe=null,Ae=null;g.depth&&(Ae=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=g.stencil?ks:Nr,xe=g.stencil?Dr:$i);const we={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new Vr(d.textureWidth,d.textureHeight,{format:Jn,type:nr,depthTexture:new Lv(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ke=e.properties.get(h);ke.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(te){for(let ce=0;ce<te.removed.length;ce++){const xe=te.removed[ce],Ae=v.indexOf(xe);Ae>=0&&(v[Ae]=null,M[Ae].disconnect(xe))}for(let ce=0;ce<te.added.length;ce++){const xe=te.added[ce];let Ae=v.indexOf(xe);if(Ae===-1){for(let ke=0;ke<M.length;ke++)if(ke>=v.length){v.push(xe),Ae=ke;break}else if(v[ke]===null){v[ke]=xe,Ae=ke;break}if(Ae===-1)break}const we=M[Ae];we&&we.connect(xe)}}const H=new $,B=new $;function z(te,ce,xe){H.setFromMatrixPosition(ce.matrixWorld),B.setFromMatrixPosition(xe.matrixWorld);const Ae=H.distanceTo(B),we=ce.projectionMatrix.elements,ke=xe.projectionMatrix.elements,Fe=we[14]/(we[10]-1),Ne=we[14]/(we[10]+1),ze=(we[9]+1)/we[5],G=(we[9]-1)/we[5],L=(we[8]-1)/we[0],P=(ke[8]+1)/ke[0],k=Fe*L,Y=Fe*P,ee=Ae/(-L+P),j=ee*-L;ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(j),te.translateZ(ee),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const re=Fe+ee,le=Ne+ee,ue=k-j,oe=Y+(Ae-j),T=ze*Ne/le*re,x=G*Ne/le*re;te.projectionMatrix.makePerspective(ue,oe,T,x,re,le),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function W(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;S.near=C.near=A.near=te.near,S.far=C.far=A.far=te.far,(b!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,I=S.far);const ce=te.parent,xe=S.cameras;W(S,ce);for(let Ae=0;Ae<xe.length;Ae++)W(xe[Ae],ce);xe.length===2?z(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),ie(te,S,ce)};function ie(te,ce,xe){xe===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(xe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ku*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)};let ae=null;function he(te,ce){if(u=ce.getViewerPose(c||o),_=ce,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let Ae=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,Ae=!0);for(let we=0;we<xe.length;we++){const ke=xe[we];let Fe=null;if(p!==null)Fe=p.getViewport(ke);else{const ze=f.getViewSubImage(d,ke);Fe=ze.viewport,we===0&&(e.setRenderTargetTextures(h,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(h))}let Ne=N[we];Ne===void 0&&(Ne=new Bn,Ne.layers.enable(we),Ne.viewport=new zt,N[we]=Ne),Ne.matrix.fromArray(ke.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ke.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),we===0&&(S.matrix.copy(Ne.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ae===!0&&S.cameras.push(Ne)}}for(let xe=0;xe<M.length;xe++){const Ae=v[xe],we=M[xe];Ae!==null&&we!==void 0&&we.update(Ae,ce,c||o)}ae&&ae(te,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const me=new Pv;me.setAnimationLoop(he),this.setAnimationLoop=function(te){ae=te},this.dispose=function(){}}}function uP(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Av(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,M,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,M,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const M=e.get(h).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*v,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,M,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*M,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,M){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const M=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fP(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const y=v.program;i.uniformBlockBinding(M,y)}function c(M,v){let y=r[M.id];y===void 0&&(_(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",m));const E=v.program;i.updateUBOMapping(M,E);const A=e.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function u(M){const v=f();M.__bindingPointIndex=v;const y=t.createBuffer(),E=M.__size,A=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=r[M.id],y=M.uniforms,E=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,C=y.length;A<C;A++){const N=y[A];if(p(N,A,E)===!0){const S=N.__offset,b=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let R=0;R<b.length;R++){const F=b[R],D=g(F);typeof F=="number"?(N.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,S+I,N.__data)):F.isMatrix3?(N.__data[0]=F.elements[0],N.__data[1]=F.elements[1],N.__data[2]=F.elements[2],N.__data[3]=F.elements[0],N.__data[4]=F.elements[3],N.__data[5]=F.elements[4],N.__data[6]=F.elements[5],N.__data[7]=F.elements[0],N.__data[8]=F.elements[6],N.__data[9]=F.elements[7],N.__data[10]=F.elements[8],N.__data[11]=F.elements[0]):(F.toArray(N.__data,I),I+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,N.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,v,y){const E=M.value;if(y[v]===void 0){if(typeof E=="number")y[v]=E;else{const A=Array.isArray(E)?E:[E],C=[];for(let N=0;N<A.length;N++)C.push(A[N].clone());y[v]=C}return!0}else if(typeof E=="number"){if(y[v]!==E)return y[v]=E,!0}else{const A=Array.isArray(y[v])?y[v]:[y[v]],C=Array.isArray(E)?E:[E];for(let N=0;N<A.length;N++){const S=A[N];if(S.equals(C[N])===!1)return S.copy(C[N]),!0}}return!1}function _(M){const v=M.uniforms;let y=0;const E=16;let A=0;for(let C=0,N=v.length;C<N;C++){const S=v[C],b={boundary:0,storage:0},I=Array.isArray(S.value)?S.value:[S.value];for(let R=0,F=I.length;R<F;R++){const D=I[R],H=g(D);b.boundary+=H.boundary,b.storage+=H.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,C>0){A=y%E;const R=E-A;A!==0&&R-b.boundary<0&&(y+=E-A,S.__offset=y)}y+=b.storage}return A=y%E,A>0&&(y+=E-A),M.__size=y,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Fv{constructor(e={}){const{canvas:n=oA(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const v=this;let y=!1,E=0,A=0,C=null,N=-1,S=null;const b=new zt,I=new zt;let R=null;const F=new ut(0);let D=0,H=n.width,B=n.height,z=1,W=null,ie=null;const ae=new zt(0,0,H,B),he=new zt(0,0,H,B);let me=!1;const te=new Rv;let ce=!1,xe=!1,Ae=null;const we=new Wt,ke=new ft,Fe=new $,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return C===null?z:1}let G=i;function L(w,V){for(let q=0;q<w.length;q++){const K=w[q],X=n.getContext(K,V);if(X!==null)return X}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qf}`),n.addEventListener("webglcontextlost",Je,!1),n.addEventListener("webglcontextrestored",O,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),G===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),G=L(V,w),G===null)throw L(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let P,k,Y,ee,j,re,le,ue,oe,T,x,U,Z,Q,se,ge,fe,_e,Ce,Be,de,it,Re,Pe;function De(){P=new EC(G),k=new mC(G,P,e),P.init(k),it=new oP(G,P,k),Y=new rP(G,P,k),ee=new TC(G),j=new WR,re=new sP(G,P,Y,j,k,it,ee),le=new _C(v),ue=new xC(v),oe=new DA(G,k),Re=new hC(G,P,oe,k),T=new MC(G,oe,ee,Re),x=new RC(G,T,oe,ee),Ce=new CC(G,k,re),ge=new gC(j),U=new GR(v,le,ue,P,k,Re,ge),Z=new uP(v,j),Q=new qR,se=new ZR(P,k),_e=new dC(v,le,ue,Y,x,d,l),fe=new iP(v,x,k),Pe=new fP(G,ee,k,Y),Be=new pC(G,P,ee,k),de=new bC(G,P,ee,k),ee.programs=U.programs,v.capabilities=k,v.extensions=P,v.properties=j,v.renderLists=Q,v.shadowMap=fe,v.state=Y,v.info=ee}De();const be=new cP(v,G);this.xr=be,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=P.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=P.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(H,B,!1))},this.getSize=function(w){return w.set(H,B)},this.setSize=function(w,V,q=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,B=V,n.width=Math.floor(w*z),n.height=Math.floor(V*z),q===!0&&(n.style.width=w+"px",n.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(H*z,B*z).floor()},this.setDrawingBufferSize=function(w,V,q){H=w,B=V,z=q,n.width=Math.floor(w*q),n.height=Math.floor(V*q),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,V,q,K){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,V,q,K),Y.viewport(b.copy(ae).multiplyScalar(z).floor())},this.getScissor=function(w){return w.copy(he)},this.setScissor=function(w,V,q,K){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,V,q,K),Y.scissor(I.copy(he).multiplyScalar(z).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(w){Y.setScissorTest(me=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(w=!0,V=!0,q=!0){let K=0;if(w){let X=!1;if(C!==null){const Me=C.texture.format;X=Me===pv||Me===hv||Me===dv}if(X){const Me=C.texture.type,Le=Me===nr||Me===$i||Me===ed||Me===Dr||Me===uv||Me===fv,Ue=_e.getClearColor(),He=_e.getClearAlpha(),Ye=Ue.r,Ge=Ue.g,qe=Ue.b;Le?(p[0]=Ye,p[1]=Ge,p[2]=qe,p[3]=He,G.clearBufferuiv(G.COLOR,0,p)):(_[0]=Ye,_[1]=Ge,_[2]=qe,_[3]=He,G.clearBufferiv(G.COLOR,0,_))}else K|=G.COLOR_BUFFER_BIT}V&&(K|=G.DEPTH_BUFFER_BIT),q&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Je,!1),n.removeEventListener("webglcontextrestored",O,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Q.dispose(),se.dispose(),j.dispose(),le.dispose(),ue.dispose(),x.dispose(),Re.dispose(),Pe.dispose(),U.dispose(),be.dispose(),be.removeEventListener("sessionstart",tn),be.removeEventListener("sessionend",dt),Ae&&(Ae.dispose(),Ae=null),nn.stop()};function Je(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ee.autoReset,V=fe.enabled,q=fe.autoUpdate,K=fe.needsUpdate,X=fe.type;De(),ee.autoReset=w,fe.enabled=V,fe.autoUpdate=q,fe.needsUpdate=K,fe.type=X}function Ee(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pe(w){const V=w.target;V.removeEventListener("dispose",pe),ne(V)}function ne(w){ve(w),j.remove(w)}function ve(w){const V=j.get(w).programs;V!==void 0&&(V.forEach(function(q){U.releaseProgram(q)}),w.isShaderMaterial&&U.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,q,K,X,Me){V===null&&(V=Ne);const Le=X.isMesh&&X.matrixWorld.determinant()<0,Ue=f0(w,V,q,K,X);Y.setMaterial(K,Le);let He=q.index,Ye=1;if(K.wireframe===!0){if(He=T.getWireframeAttribute(q),He===void 0)return;Ye=2}const Ge=q.drawRange,qe=q.attributes.position;let xt=Ge.start*Ye,En=(Ge.start+Ge.count)*Ye;Me!==null&&(xt=Math.max(xt,Me.start*Ye),En=Math.min(En,(Me.start+Me.count)*Ye)),He!==null?(xt=Math.max(xt,0),En=Math.min(En,He.count)):qe!=null&&(xt=Math.max(xt,0),En=Math.min(En,qe.count));const Ot=En-xt;if(Ot<0||Ot===1/0)return;Re.setup(X,K,Ue,q,He);let fi,vt=Be;if(He!==null&&(fi=oe.get(He),vt=de,vt.setIndex(fi)),X.isMesh)K.wireframe===!0?(Y.setLineWidth(K.wireframeLinewidth*ze()),vt.setMode(G.LINES)):vt.setMode(G.TRIANGLES);else if(X.isLine){let je=K.linewidth;je===void 0&&(je=1),Y.setLineWidth(je*ze()),X.isLineSegments?vt.setMode(G.LINES):X.isLineLoop?vt.setMode(G.LINE_LOOP):vt.setMode(G.LINE_STRIP)}else X.isPoints?vt.setMode(G.POINTS):X.isSprite&&vt.setMode(G.TRIANGLES);if(X.isBatchedMesh)vt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)vt.renderInstances(xt,Ot,X.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,mc=Math.min(q.instanceCount,je);vt.renderInstances(xt,Ot,mc)}else vt.render(xt,Ot)};function Oe(w,V,q){w.transparent===!0&&w.side===Ti&&w.forceSinglePass===!1?(w.side=Sn,w.needsUpdate=!0,ia(w,V,q),w.side=or,w.needsUpdate=!0,ia(w,V,q),w.side=Ti):ia(w,V,q)}this.compile=function(w,V,q=null){q===null&&(q=w),m=se.get(q),m.init(),M.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),w!==q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(v._useLegacyLights);const K=new Set;return w.traverse(function(X){const Me=X.material;if(Me)if(Array.isArray(Me))for(let Le=0;Le<Me.length;Le++){const Ue=Me[Le];Oe(Ue,q,X),K.add(Ue)}else Oe(Me,q,X),K.add(Me)}),M.pop(),m=null,K},this.compileAsync=function(w,V,q=null){const K=this.compile(w,V,q);return new Promise(X=>{function Me(){if(K.forEach(function(Le){j.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){X(w);return}setTimeout(Me,10)}P.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let nt=null;function Ut(w){nt&&nt(w)}function tn(){nn.stop()}function dt(){nn.start()}const nn=new Pv;nn.setAnimationLoop(Ut),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(w){nt=w,be.setAnimationLoop(w),w===null?nn.stop():nn.start()},be.addEventListener("sessionstart",tn),be.addEventListener("sessionend",dt),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(V),V=be.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,V,C),m=se.get(w,M.length),m.init(),M.push(m),we.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(we),xe=this.localClippingEnabled,ce=ge.init(this.clippingPlanes,xe),g=Q.get(w,h.length),g.init(),h.push(g),ti(w,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,ie),this.info.render.frame++,ce===!0&&ge.beginShadows();const q=m.state.shadowsArray;if(fe.render(q,w,V),ce===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(g,w),m.setupLights(v._useLegacyLights),V.isArrayCamera){const K=V.cameras;for(let X=0,Me=K.length;X<Me;X++){const Le=K[X];fd(g,w,Le,Le.viewport)}}else fd(g,w,V);C!==null&&(re.updateMultisampleRenderTarget(C),re.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,V),Re.resetDefaultState(),N=-1,S=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function ti(w,V,q,K){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){K&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const Le=x.update(w),Ue=w.material;Ue.visible&&g.push(w,Le,Ue,q,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||te.intersectsObject(w))){const Le=x.update(w),Ue=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Fe.copy(Le.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Ue)){const He=Le.groups;for(let Ye=0,Ge=He.length;Ye<Ge;Ye++){const qe=He[Ye],xt=Ue[qe.materialIndex];xt&&xt.visible&&g.push(w,Le,xt,q,Fe.z,qe)}}else Ue.visible&&g.push(w,Le,Ue,q,Fe.z,null)}}const Me=w.children;for(let Le=0,Ue=Me.length;Le<Ue;Le++)ti(Me[Le],V,q,K)}function fd(w,V,q,K){const X=w.opaque,Me=w.transmissive,Le=w.transparent;m.setupLightsView(q),ce===!0&&ge.setGlobalState(v.clippingPlanes,q),Me.length>0&&u0(X,Me,V,q),K&&Y.viewport(b.copy(K)),X.length>0&&na(X,V,q),Me.length>0&&na(Me,V,q),Le.length>0&&na(Le,V,q),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function u0(w,V,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Me=k.isWebGL2;Ae===null&&(Ae=new Vr(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?Bo:nr,minFilter:Fo,samples:Me?4:0})),v.getDrawingBufferSize(ke),Me?Ae.setSize(ke.x,ke.y):Ae.setSize(Ju(ke.x),Ju(ke.y));const Le=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(F),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ue=v.toneMapping;v.toneMapping=tr,na(w,q,K),re.updateMultisampleRenderTarget(Ae),re.updateRenderTargetMipmap(Ae);let He=!1;for(let Ye=0,Ge=V.length;Ye<Ge;Ye++){const qe=V[Ye],xt=qe.object,En=qe.geometry,Ot=qe.material,fi=qe.group;if(Ot.side===Ti&&xt.layers.test(K.layers)){const vt=Ot.side;Ot.side=Sn,Ot.needsUpdate=!0,dd(xt,q,K,En,Ot,fi),Ot.side=vt,Ot.needsUpdate=!0,He=!0}}He===!0&&(re.updateMultisampleRenderTarget(Ae),re.updateRenderTargetMipmap(Ae)),v.setRenderTarget(Le),v.setClearColor(F,D),v.toneMapping=Ue}function na(w,V,q){const K=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Me=w.length;X<Me;X++){const Le=w[X],Ue=Le.object,He=Le.geometry,Ye=K===null?Le.material:K,Ge=Le.group;Ue.layers.test(q.layers)&&dd(Ue,V,q,He,Ye,Ge)}}function dd(w,V,q,K,X,Me){w.onBeforeRender(v,V,q,K,X,Me),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(v,V,q,K,w,Me),X.transparent===!0&&X.side===Ti&&X.forceSinglePass===!1?(X.side=Sn,X.needsUpdate=!0,v.renderBufferDirect(q,V,K,X,w,Me),X.side=or,X.needsUpdate=!0,v.renderBufferDirect(q,V,K,X,w,Me),X.side=Ti):v.renderBufferDirect(q,V,K,X,w,Me),w.onAfterRender(v,V,q,K,X,Me)}function ia(w,V,q){V.isScene!==!0&&(V=Ne);const K=j.get(w),X=m.state.lights,Me=m.state.shadowsArray,Le=X.state.version,Ue=U.getParameters(w,X.state,Me,V,q),He=U.getProgramCacheKey(Ue);let Ye=K.programs;K.environment=w.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(w.isMeshStandardMaterial?ue:le).get(w.envMap||K.environment),Ye===void 0&&(w.addEventListener("dispose",pe),Ye=new Map,K.programs=Ye);let Ge=Ye.get(He);if(Ge!==void 0){if(K.currentProgram===Ge&&K.lightsStateVersion===Le)return pd(w,Ue),Ge}else Ue.uniforms=U.getUniforms(w),w.onBuild(q,Ue,v),w.onBeforeCompile(Ue,v),Ge=U.acquireProgram(Ue,He),Ye.set(He,Ge),K.uniforms=Ue.uniforms;const qe=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=ge.uniform),pd(w,Ue),K.needsLights=h0(w),K.lightsStateVersion=Le,K.needsLights&&(qe.ambientLightColor.value=X.state.ambient,qe.lightProbe.value=X.state.probe,qe.directionalLights.value=X.state.directional,qe.directionalLightShadows.value=X.state.directionalShadow,qe.spotLights.value=X.state.spot,qe.spotLightShadows.value=X.state.spotShadow,qe.rectAreaLights.value=X.state.rectArea,qe.ltc_1.value=X.state.rectAreaLTC1,qe.ltc_2.value=X.state.rectAreaLTC2,qe.pointLights.value=X.state.point,qe.pointLightShadows.value=X.state.pointShadow,qe.hemisphereLights.value=X.state.hemi,qe.directionalShadowMap.value=X.state.directionalShadowMap,qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qe.spotShadowMap.value=X.state.spotShadowMap,qe.spotLightMatrix.value=X.state.spotLightMatrix,qe.spotLightMap.value=X.state.spotLightMap,qe.pointShadowMap.value=X.state.pointShadowMap,qe.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Ge,K.uniformsList=null,Ge}function hd(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Ya.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function pd(w,V){const q=j.get(w);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function f0(w,V,q,K,X){V.isScene!==!0&&(V=Ne),re.resetTextureUnits();const Me=V.fog,Le=K.isMeshStandardMaterial?V.environment:null,Ue=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Li,He=(K.isMeshStandardMaterial?ue:le).get(K.envMap||Le),Ye=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qe=!!q.morphAttributes.position,xt=!!q.morphAttributes.normal,En=!!q.morphAttributes.color;let Ot=tr;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ot=v.toneMapping);const fi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=fi!==void 0?fi.length:0,je=j.get(K),mc=m.state.lights;if(ce===!0&&(xe===!0||w!==S)){const Nn=w===S&&K.id===N;ge.setState(K,w,Nn)}let St=!1;K.version===je.__version?(je.needsLights&&je.lightsStateVersion!==mc.state.version||je.outputColorSpace!==Ue||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||je.envMap!==He||K.fog===!0&&je.fog!==Me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ge.numPlanes||je.numIntersection!==ge.numIntersection)||je.vertexAlphas!==Ye||je.vertexTangents!==Ge||je.morphTargets!==qe||je.morphNormals!==xt||je.morphColors!==En||je.toneMapping!==Ot||k.isWebGL2===!0&&je.morphTargetsCount!==vt)&&(St=!0):(St=!0,je.__version=K.version);let ur=je.currentProgram;St===!0&&(ur=ia(K,V,X));let md=!1,Ys=!1,gc=!1;const Xt=ur.getUniforms(),fr=je.uniforms;if(Y.useProgram(ur.program)&&(md=!0,Ys=!0,gc=!0),K.id!==N&&(N=K.id,Ys=!0),md||S!==w){Xt.setValue(G,"projectionMatrix",w.projectionMatrix),Xt.setValue(G,"viewMatrix",w.matrixWorldInverse);const Nn=Xt.map.cameraPosition;Nn!==void 0&&Nn.setValue(G,Fe.setFromMatrixPosition(w.matrixWorld)),k.logarithmicDepthBuffer&&Xt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Xt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Ys=!0,gc=!0)}if(X.isSkinnedMesh){Xt.setOptional(G,X,"bindMatrix"),Xt.setOptional(G,X,"bindMatrixInverse");const Nn=X.skeleton;Nn&&(k.floatVertexTextures?(Nn.boneTexture===null&&Nn.computeBoneTexture(),Xt.setValue(G,"boneTexture",Nn.boneTexture,re)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Xt.setOptional(G,X,"batchingTexture"),Xt.setValue(G,"batchingTexture",X._matricesTexture,re));const _c=q.morphAttributes;if((_c.position!==void 0||_c.normal!==void 0||_c.color!==void 0&&k.isWebGL2===!0)&&Ce.update(X,q,ur),(Ys||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,Xt.setValue(G,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(fr.envMap.value=He,fr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Ys&&(Xt.setValue(G,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&d0(fr,gc),Me&&K.fog===!0&&Z.refreshFogUniforms(fr,Me),Z.refreshMaterialUniforms(fr,K,z,B,Ae),Ya.upload(G,hd(je),fr,re)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ya.upload(G,hd(je),fr,re),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Xt.setValue(G,"center",X.center),Xt.setValue(G,"modelViewMatrix",X.modelViewMatrix),Xt.setValue(G,"normalMatrix",X.normalMatrix),Xt.setValue(G,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Nn=K.uniformsGroups;for(let vc=0,p0=Nn.length;vc<p0;vc++)if(k.isWebGL2){const gd=Nn[vc];Pe.update(gd,ur),Pe.bind(gd,ur)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ur}function d0(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function h0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,V,q){j.get(w.texture).__webglTexture=V,j.get(w.depthTexture).__webglTexture=q;const K=j.get(w);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,V){const q=j.get(w);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,q=0){C=w,E=V,A=q;let K=!0,X=null,Me=!1,Le=!1;if(w){const He=j.get(w);He.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(G.FRAMEBUFFER,null),K=!1):He.__webglFramebuffer===void 0?re.setupRenderTarget(w):He.__hasExternalTextures&&re.rebindTextures(w,j.get(w.texture).__webglTexture,j.get(w.depthTexture).__webglTexture);const Ye=w.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Le=!0);const Ge=j.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?X=Ge[V][q]:X=Ge[V],Me=!0):k.isWebGL2&&w.samples>0&&re.useMultisampledRTT(w)===!1?X=j.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?X=Ge[q]:X=Ge,b.copy(w.viewport),I.copy(w.scissor),R=w.scissorTest}else b.copy(ae).multiplyScalar(z).floor(),I.copy(he).multiplyScalar(z).floor(),R=me;if(Y.bindFramebuffer(G.FRAMEBUFFER,X)&&k.drawBuffers&&K&&Y.drawBuffers(w,X),Y.viewport(b),Y.scissor(I),Y.setScissorTest(R),Me){const He=j.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,He.__webglTexture,q)}else if(Le){const He=j.get(w.texture),Ye=V||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,He.__webglTexture,q||0,Ye)}N=-1},this.readRenderTargetPixels=function(w,V,q,K,X,Me,Le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){Y.bindFramebuffer(G.FRAMEBUFFER,Ue);try{const He=w.texture,Ye=He.format,Ge=He.type;if(Ye!==Jn&&it.convert(Ye)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Ge===Bo&&(P.has("EXT_color_buffer_half_float")||k.isWebGL2&&P.has("EXT_color_buffer_float"));if(Ge!==nr&&it.convert(Ge)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Yi&&(k.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-K&&q>=0&&q<=w.height-X&&G.readPixels(V,q,K,X,it.convert(Ye),it.convert(Ge),Me)}finally{const He=C!==null?j.get(C).__webglFramebuffer:null;Y.bindFramebuffer(G.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(w,V,q=0){const K=Math.pow(2,-q),X=Math.floor(V.image.width*K),Me=Math.floor(V.image.height*K);re.setTexture2D(V,0),G.copyTexSubImage2D(G.TEXTURE_2D,q,0,0,w.x,w.y,X,Me),Y.unbindTexture()},this.copyTextureToTexture=function(w,V,q,K=0){const X=V.image.width,Me=V.image.height,Le=it.convert(q.format),Ue=it.convert(q.type);re.setTexture2D(q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,K,w.x,w.y,X,Me,Le,Ue,V.image.data):V.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,K,w.x,w.y,V.mipmaps[0].width,V.mipmaps[0].height,Le,V.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,K,w.x,w.y,Le,Ue,V.image),K===0&&q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(w,V,q,K,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=w.max.x-w.min.x+1,Le=w.max.y-w.min.y+1,Ue=w.max.z-w.min.z+1,He=it.convert(K.format),Ye=it.convert(K.type);let Ge;if(K.isData3DTexture)re.setTexture3D(K,0),Ge=G.TEXTURE_3D;else if(K.isDataArrayTexture)re.setTexture2DArray(K,0),Ge=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const qe=G.getParameter(G.UNPACK_ROW_LENGTH),xt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),En=G.getParameter(G.UNPACK_SKIP_PIXELS),Ot=G.getParameter(G.UNPACK_SKIP_ROWS),fi=G.getParameter(G.UNPACK_SKIP_IMAGES),vt=q.isCompressedTexture?q.mipmaps[0]:q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,vt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,w.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,w.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,w.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(Ge,X,V.x,V.y,V.z,Me,Le,Ue,He,Ye,vt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ge,X,V.x,V.y,V.z,Me,Le,Ue,He,vt.data)):G.texSubImage3D(Ge,X,V.x,V.y,V.z,Me,Le,Ue,He,Ye,vt),G.pixelStorei(G.UNPACK_ROW_LENGTH,qe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,En),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ot),G.pixelStorei(G.UNPACK_SKIP_IMAGES,fi),X===0&&K.generateMipmaps&&G.generateMipmap(Ge),Y.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?re.setTextureCube(w,0):w.isData3DTexture?re.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?re.setTexture2DArray(w,0):re.setTexture2D(w,0),Y.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,Y.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===td?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===rc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Ir:gv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ir?kt:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dP extends Fv{}dP.prototype.isWebGL1Renderer=!0;class hP extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class od extends cr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new $,d=new $,p=[],_=[],g=[],m=[];for(let h=0;h<=i;h++){const M=[],v=h/i;let y=0;h===0&&o===0?y=.5/n:h===i&&l===Math.PI&&(y=-.5/n);for(let E=0;E<=n;E++){const A=E/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),m.push(A+y,1-v),M.push(c++)}u.push(M)}for(let h=0;h<i;h++)for(let M=0;M<n;M++){const v=u[h][M+1],y=u[h][M],E=u[h+1][M],A=u[h+1][M+1];(h!==0||o>0)&&p.push(v,y,A),(h!==i-1||l<Math.PI)&&p.push(y,E,A)}this.setIndex(p),this.setAttribute("position",new li(_,3)),this.setAttribute("normal",new li(g,3)),this.setAttribute("uv",new li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);const lc=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},pP={__name:"WeatherBackground",setup(t){const e=un(null);let n,i,r,s=[];const o=()=>{n=new hP,i=new Bn(75,window.innerWidth/window.innerHeight,.1,1e3),r=new Fv({antialias:!0,alpha:!0}),r.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(r.domElement),i.position.z=30;const a=new od(.1,32,32),l=new id({color:16777215,transparent:!0,opacity:.8});for(let f=0;f<1e3;f++){const d=new wi(a,l);d.position.x=Math.random()*100-50,d.position.y=Math.random()*100-50,d.position.z=Math.random()*100-50,s.push(d),n.add(d)}const c=()=>{requestAnimationFrame(c),s.forEach(f=>{f.position.y-=.05,f.position.y<-50&&(f.position.y=50)}),r.render(n,i)};c();const u=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",u)};return jr(()=>{o()}),zo(()=>{r&&r.dispose()}),(a,l)=>(Vt(),kn("div",{class:"weather-background",ref_key:"container",ref:e},null,512))}},mP=lc(pP,[["__scopeId","data-v-e561bd7b"]]),gP=["innerHTML"],_P={__name:"WeatherIcon",props:{code:{type:Number,required:!0,default:0}},setup(t){const e=t,n=Br(()=>{const r=e.code;return r===0?"weather-clear":r<=3?"weather-partly-cloudy":r<=48?"weather-foggy":r<=67?"weather-rainy":r<=77?"weather-snowy":r>=95?"weather-thunder":"weather-cloudy"}),i=Br(()=>{const r=e.code,s={clear:`<svg viewBox="0 0 24 24" class="icon">
      <circle cx="12" cy="12" r="4" fill="currentColor"/>
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M6 6l-1.4-1.4M19.4 19.4L18 18M6 18l-1.4 1.4M19.4 4.6L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,cloudy:`<svg viewBox="0 0 24 24" class="icon">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" fill="currentColor"/>
    </svg>`,rain:`<svg viewBox="0 0 24 24" class="icon">
      <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25" fill="currentColor"/>
      <path d="M8 16v4M12 16v4M16 16v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,snow:`<svg viewBox="0 0 24 24" class="icon">
      <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25" fill="currentColor"/>
      <path d="M8 16h.01M12 16h.01M16 16h.01M8 19h.01M12 19h.01M16 19h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,thunder:`<svg viewBox="0 0 24 24" class="icon">
      <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" fill="currentColor"/>
      <path d="M13 11l-4 6h6l-4 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,fog:`<svg viewBox="0 0 24 24" class="icon">
      <path d="M3 15h18M3 12h18M3 9h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`};return r===0?s.clear:r<=3?s.cloudy:r<=48?s.fog:r<=67?s.rain:r<=77?s.snow:r>=95?s.thunder:s.cloudy});return(r,s)=>(Vt(),kn("div",{class:$r(["weather-icon",n.value])},[Te("div",{class:"icon-container",innerHTML:i.value},null,8,gP)],2))}},Bv=lc(_P,[["__scopeId","data-v-dd6bc940"]]),vP={class:"weather-card__content"},SP={class:"weather-card__header"},yP={class:"weather-card__location"},xP={class:"weather-card__city"},EP={class:"weather-card__date"},MP={class:"weather-card__time"},bP={class:"weather-card__main"},TP={class:"weather-card__temperature"},AP={class:"weather-card__temp-value"},wP={class:"weather-card__icon"},CP={class:"weather-card__details"},RP={class:"weather-card__detail-item"},PP={class:"weather-card__detail-value"},LP={class:"weather-card__detail-item"},DP={class:"weather-card__detail-value"},NP={class:"weather-card__detail-item"},IP={class:"weather-card__detail-value"},UP={class:"weather-card__description"},OP={class:"weather-card__footer"},FP={class:"weather-card__update"},BP={__name:"WeatherCard",props:{city:{type:String,required:!0},temperature:{type:Number,required:!0},weatherCode:{type:Number,required:!0},humidity:{type:Number,required:!0},windSpeed:{type:Number,required:!0},uvIndex:{type:Number,default:0}},setup(t){const e=t,n=un(vs(new Date,"HH:mm")),i=un(vs(new Date,"EEEE, MMMM do")),r=un(vs(new Date,"HH:mm:ss")),s=Br(()=>{const l=e.temperature;return l>30?"weather-gradient-hot":l>20?"weather-gradient-warm":l>10?"weather-gradient-mild":"weather-gradient-cold"}),o=Br(()=>{const l=e.weatherCode;return{0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Foggy",48:"Depositing rime fog",51:"Light drizzle",53:"Moderate drizzle",55:"Dense drizzle",61:"Slight rain",63:"Moderate rain",65:"Heavy rain",71:"Slight snow fall",73:"Moderate snow fall",75:"Heavy snow fall",95:"Thunderstorm"}[l]||"Unknown weather condition"}),a=()=>new Date().getHours();return setInterval(()=>{n.value=vs(new Date,"HH:mm"),r.value=vs(new Date,"HH:mm:ss")},1e3),(l,c)=>(Vt(),kn("div",{class:$r(["weather-card glass fade-in",[s.value]])},[Te("div",vP,[Te("div",SP,[Te("div",yP,[Te("h2",xP,Bt(t.city),1),Te("p",EP,Bt(i.value),1)]),Te("div",MP,Bt(n.value),1)]),Te("div",bP,[Te("div",TP,[Te("span",AP,Bt(Math.round(t.temperature)),1),c[0]||(c[0]=Te("span",{class:"weather-card__temp-unit"},"°C",-1))]),Te("div",wP,[at(Bv,{code:t.weatherCode,time:a(),class:"weather-icon"},null,8,["code","time"])])]),Te("div",CP,[Te("div",RP,[c[1]||(c[1]=Te("svg",{class:"weather-card__detail-icon",viewBox:"0 0 24 24"},[Te("path",{d:"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z"})],-1)),Te("span",PP,Bt(t.humidity)+"%",1),c[2]||(c[2]=Te("span",{class:"weather-card__detail-label"},"Humidity",-1))]),Te("div",LP,[c[3]||(c[3]=Te("svg",{class:"weather-card__detail-icon",viewBox:"0 0 24 24"},[Te("path",{d:"M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z"})],-1)),Te("span",DP,Bt(Math.round(t.windSpeed)),1),c[4]||(c[4]=Te("span",{class:"weather-card__detail-label"},"km/h",-1))]),Te("div",NP,[c[5]||(c[5]=Te("svg",{class:"weather-card__detail-icon",viewBox:"0 0 24 24"},[Te("path",{d:"M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"})],-1)),Te("span",IP,Bt(t.uvIndex),1),c[6]||(c[6]=Te("span",{class:"weather-card__detail-label"},"UV Index",-1))])]),Te("div",UP,[Te("p",null,Bt(o.value),1)]),Te("div",OP,[Te("span",FP,"Last updated: "+Bt(r.value),1)])])],2))}},HP=lc(BP,[["__scopeId","data-v-3e4aa44f"]]),kP={class:"forecast glass"},VP={class:"forecast-grid"},zP={class:"day-name"},GP={class:"date"},WP={class:"temps"},XP={class:"temp-max"},qP={class:"temp-min"},$P={key:0,class:"precipitation"},YP={__name:"WeatherForecast",props:{forecast:{type:Object,required:!0}},setup(t){const e=t,n=Br(()=>!e.forecast||!e.forecast.time?[]:e.forecast.time.slice(1,7).map((s,o)=>{var a;return{dayName:i(s),date:r(s),weather_code:e.forecast.weather_code[o+1],temperature_2m_max:e.forecast.temperature_2m_max[o+1],temperature_2m_min:e.forecast.temperature_2m_min[o+1],precipitation_probability_mean:(a=e.forecast.precipitation_probability_mean)==null?void 0:a[o+1]}})),i=s=>{const o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=new Date(s);return o[a.getDay()]},r=s=>{const o=new Date(s),a=String(o.getMonth()+1).padStart(2,"0"),l=String(o.getDate()).padStart(2,"0");return`${o.getFullYear()}-${a}-${l}`};return(s,o)=>(Vt(),kn("div",kP,[o[1]||(o[1]=Te("h2",{class:"title"},"6-Day Forecast",-1)),Te("div",VP,[(Vt(!0),kn(Ct,null,sg(n.value,(a,l)=>(Vt(),kn("div",{key:l,class:"forecast-day"},[Te("div",zP,Bt(a.dayName),1),Te("div",GP,Bt(a.date),1),at(Bv,{code:a.weather_code,class:"day-icon"},null,8,["code"]),Te("div",WP,[Te("span",XP,Bt(Math.round(a.temperature_2m_max))+"°",1),Te("span",qP,Bt(Math.round(a.temperature_2m_min))+"°",1)]),a.precipitation_probability_mean?(Vt(),kn("div",$P,[o[0]||(o[0]=Te("svg",{class:"rain-icon",viewBox:"0 0 24 24"},[Te("path",{d:"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M12,17A3,3 0 0,1 9,14C9,12.4 10.97,9.42 12,7.62C13.03,9.42 15,12.4 15,14A3,3 0 0,1 12,17Z"})],-1)),Xo(" "+Bt(a.precipitation_probability_mean)+"% ",1)])):al("",!0)]))),128))])]))}},jP=lc(YP,[["__scopeId","data-v-14940088"]]);function Hv(t,e){return function(){return t.apply(e,arguments)}}const{toString:KP}=Object.prototype,{getPrototypeOf:ad}=Object,cc=(t=>e=>{const n=KP.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ei=t=>(t=t.toLowerCase(),e=>cc(e)===t),uc=t=>e=>typeof e===t,{isArray:qs}=Array,Ho=uc("undefined");function JP(t){return t!==null&&!Ho(t)&&t.constructor!==null&&!Ho(t.constructor)&&Pn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const kv=ei("ArrayBuffer");function ZP(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&kv(t.buffer),e}const QP=uc("string"),Pn=uc("function"),Vv=uc("number"),fc=t=>t!==null&&typeof t=="object",eL=t=>t===!0||t===!1,ja=t=>{if(cc(t)!=="object")return!1;const e=ad(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},tL=ei("Date"),nL=ei("File"),iL=ei("Blob"),rL=ei("FileList"),sL=t=>fc(t)&&Pn(t.pipe),oL=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Pn(t.append)&&((e=cc(t))==="formdata"||e==="object"&&Pn(t.toString)&&t.toString()==="[object FormData]"))},aL=ei("URLSearchParams"),[lL,cL,uL,fL]=["ReadableStream","Request","Response","Headers"].map(ei),dL=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ea(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),qs(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function zv(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Gv=t=>!Ho(t)&&t!==Ar;function Qu(){const{caseless:t}=Gv(this)&&this||{},e={},n=(i,r)=>{const s=t&&zv(e,r)||r;ja(e[s])&&ja(i)?e[s]=Qu(e[s],i):ja(i)?e[s]=Qu({},i):qs(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&ea(arguments[i],n);return e}const hL=(t,e,n,{allOwnKeys:i}={})=>(ea(e,(r,s)=>{n&&Pn(r)?t[s]=Hv(r,n):t[s]=r},{allOwnKeys:i}),t),pL=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),mL=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},gL=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&ad(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},_L=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},vL=t=>{if(!t)return null;if(qs(t))return t;let e=t.length;if(!Vv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},SL=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ad(Uint8Array)),yL=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},xL=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},EL=ei("HTMLFormElement"),ML=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),qp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),bL=ei("RegExp"),Wv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};ea(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},TL=t=>{Wv(t,(e,n)=>{if(Pn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Pn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},AL=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return qs(t)?i(t):i(String(t).split(e)),n},wL=()=>{},CL=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,fu="abcdefghijklmnopqrstuvwxyz",$p="0123456789",Xv={DIGIT:$p,ALPHA:fu,ALPHA_DIGIT:fu+fu.toUpperCase()+$p},RL=(t=16,e=Xv.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function PL(t){return!!(t&&Pn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const LL=t=>{const e=new Array(10),n=(i,r)=>{if(fc(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=qs(i)?[]:{};return ea(i,(o,a)=>{const l=n(o,r+1);!Ho(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},DL=ei("AsyncFunction"),NL=t=>t&&(fc(t)||Pn(t))&&Pn(t.then)&&Pn(t.catch),qv=((t,e)=>t?setImmediate:e?((n,i)=>(Ar.addEventListener("message",({source:r,data:s})=>{r===Ar&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Ar.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Pn(Ar.postMessage)),IL=typeof queueMicrotask<"u"?queueMicrotask.bind(Ar):typeof process<"u"&&process.nextTick||qv,J={isArray:qs,isArrayBuffer:kv,isBuffer:JP,isFormData:oL,isArrayBufferView:ZP,isString:QP,isNumber:Vv,isBoolean:eL,isObject:fc,isPlainObject:ja,isReadableStream:lL,isRequest:cL,isResponse:uL,isHeaders:fL,isUndefined:Ho,isDate:tL,isFile:nL,isBlob:iL,isRegExp:bL,isFunction:Pn,isStream:sL,isURLSearchParams:aL,isTypedArray:SL,isFileList:rL,forEach:ea,merge:Qu,extend:hL,trim:dL,stripBOM:pL,inherits:mL,toFlatObject:gL,kindOf:cc,kindOfTest:ei,endsWith:_L,toArray:vL,forEachEntry:yL,matchAll:xL,isHTMLForm:EL,hasOwnProperty:qp,hasOwnProp:qp,reduceDescriptors:Wv,freezeMethods:TL,toObjectSet:AL,toCamelCase:ML,noop:wL,toFiniteNumber:CL,findKey:zv,global:Ar,isContextDefined:Gv,ALPHABET:Xv,generateString:RL,isSpecCompliantForm:PL,toJSONObject:LL,isAsyncFn:DL,isThenable:NL,setImmediate:qv,asap:IL};function We(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}J.inherits(We,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}});const $v=We.prototype,Yv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Yv[t]={value:t}});Object.defineProperties(We,Yv);Object.defineProperty($v,"isAxiosError",{value:!0});We.from=(t,e,n,i,r,s)=>{const o=Object.create($v);return J.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),We.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const UL=null;function ef(t){return J.isPlainObject(t)||J.isArray(t)}function jv(t){return J.endsWith(t,"[]")?t.slice(0,-2):t}function Yp(t,e,n){return t?t.concat(e).map(function(r,s){return r=jv(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function OL(t){return J.isArray(t)&&!t.some(ef)}const FL=J.toFlatObject(J,{},null,function(e){return/^is[A-Z]/.test(e)});function dc(t,e,n){if(!J.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=J.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,m){return!J.isUndefined(m[g])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(e);if(!J.isFunction(r))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(J.isDate(_))return _.toISOString();if(!l&&J.isBlob(_))throw new We("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(_)||J.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,g,m){let h=_;if(_&&!m&&typeof _=="object"){if(J.endsWith(g,"{}"))g=i?g:g.slice(0,-2),_=JSON.stringify(_);else if(J.isArray(_)&&OL(_)||(J.isFileList(_)||J.endsWith(g,"[]"))&&(h=J.toArray(_)))return g=jv(g),h.forEach(function(v,y){!(J.isUndefined(v)||v===null)&&e.append(o===!0?Yp([g],y,s):o===null?g:g+"[]",c(v))}),!1}return ef(_)?!0:(e.append(Yp(m,g,s),c(_)),!1)}const f=[],d=Object.assign(FL,{defaultVisitor:u,convertValue:c,isVisitable:ef});function p(_,g){if(!J.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+g.join("."));f.push(_),J.forEach(_,function(h,M){(!(J.isUndefined(h)||h===null)&&r.call(e,h,J.isString(M)?M.trim():M,g,d))===!0&&p(h,g?g.concat(M):[M])}),f.pop()}}if(!J.isObject(t))throw new TypeError("data must be an object");return p(t),e}function jp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function ld(t,e){this._pairs=[],t&&dc(t,this,e)}const Kv=ld.prototype;Kv.append=function(e,n){this._pairs.push([e,n])};Kv.toString=function(e){const n=e?function(i){return e.call(this,i,jp)}:jp;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function BL(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Jv(t,e,n){if(!e)return t;const i=n&&n.encode||BL;J.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=J.isURLSearchParams(e)?e.toString():new ld(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Kp{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){J.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Zv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},HL=typeof URLSearchParams<"u"?URLSearchParams:ld,kL=typeof FormData<"u"?FormData:null,VL=typeof Blob<"u"?Blob:null,zL={isBrowser:!0,classes:{URLSearchParams:HL,FormData:kL,Blob:VL},protocols:["http","https","file","blob","url","data"]},cd=typeof window<"u"&&typeof document<"u",tf=typeof navigator=="object"&&navigator||void 0,GL=cd&&(!tf||["ReactNative","NativeScript","NS"].indexOf(tf.product)<0),WL=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",XL=cd&&window.location.href||"http://localhost",qL=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:cd,hasStandardBrowserEnv:GL,hasStandardBrowserWebWorkerEnv:WL,navigator:tf,origin:XL},Symbol.toStringTag,{value:"Module"})),Zt={...qL,...zL};function $L(t,e){return dc(t,new Zt.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Zt.isNode&&J.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function YL(t){return J.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function jL(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Qv(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&J.isArray(r)?r.length:o,l?(J.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!J.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&J.isArray(r[o])&&(r[o]=jL(r[o])),!a)}if(J.isFormData(t)&&J.isFunction(t.entries)){const n={};return J.forEachEntry(t,(i,r)=>{e(YL(i),r,n,0)}),n}return null}function KL(t,e,n){if(J.isString(t))try{return(e||JSON.parse)(t),J.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(0,JSON.stringify)(t)}const ta={transitional:Zv,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=J.isObject(e);if(s&&J.isHTMLForm(e)&&(e=new FormData(e)),J.isFormData(e))return r?JSON.stringify(Qv(e)):e;if(J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)||J.isReadableStream(e))return e;if(J.isArrayBufferView(e))return e.buffer;if(J.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return $L(e,this.formSerializer).toString();if((a=J.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return dc(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),KL(e)):e}],transformResponse:[function(e){const n=this.transitional||ta.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(J.isResponse(e)||J.isReadableStream(e))return e;if(e&&J.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?We.from(a,We.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zt.classes.FormData,Blob:Zt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],t=>{ta.headers[t]={}});const JL=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ZL=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&JL[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Jp=Symbol("internals");function so(t){return t&&String(t).trim().toLowerCase()}function Ka(t){return t===!1||t==null?t:J.isArray(t)?t.map(Ka):String(t)}function QL(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const eD=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function du(t,e,n,i,r){if(J.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!J.isString(e)){if(J.isString(i))return e.indexOf(i)!==-1;if(J.isRegExp(i))return i.test(e)}}function tD(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function nD(t,e){const n=J.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class yn{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=so(l);if(!u)throw new Error("header name must be a non-empty string");const f=J.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Ka(a))}const o=(a,l)=>J.forEach(a,(c,u)=>s(c,u,l));if(J.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(J.isString(e)&&(e=e.trim())&&!eD(e))o(ZL(e),n);else if(J.isHeaders(e))for(const[a,l]of e.entries())s(l,a,i);else e!=null&&s(n,e,i);return this}get(e,n){if(e=so(e),e){const i=J.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return QL(r);if(J.isFunction(n))return n.call(this,r,i);if(J.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=so(e),e){const i=J.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||du(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=so(o),o){const a=J.findKey(i,o);a&&(!n||du(i,i[a],a,n))&&(delete i[a],r=!0)}}return J.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||du(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return J.forEach(this,(r,s)=>{const o=J.findKey(i,s);if(o){n[o]=Ka(r),delete n[s];return}const a=e?tD(s):String(s).trim();a!==s&&delete n[s],n[a]=Ka(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return J.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&J.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Jp]=this[Jp]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=so(o);i[a]||(nD(r,o),i[a]=!0)}return J.isArray(e)?e.forEach(s):s(e),this}}yn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(yn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});J.freezeMethods(yn);function hu(t,e){const n=this||ta,i=e||n,r=yn.from(i.headers);let s=i.data;return J.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function e0(t){return!!(t&&t.__CANCEL__)}function $s(t,e,n){We.call(this,t??"canceled",We.ERR_CANCELED,e,n),this.name="CanceledError"}J.inherits($s,We,{__CANCEL__:!0});function t0(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new We("Request failed with status code "+n.status,[We.ERR_BAD_REQUEST,We.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function iD(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function rD(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function sD(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Ll=(t,e,n=3)=>{let i=0;const r=rD(50,250);return sD(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Zp=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Qp=t=>(...e)=>J.asap(()=>t(...e)),oD=Zt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Zt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Zt.origin),Zt.navigator&&/(msie|trident)/i.test(Zt.navigator.userAgent)):()=>!0,aD=Zt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];J.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),J.isString(i)&&o.push("path="+i),J.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function lD(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function cD(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function n0(t,e){return t&&!lD(e)?cD(t,e):e}const em=t=>t instanceof yn?{...t}:t;function Gr(t,e){e=e||{};const n={};function i(c,u,f,d){return J.isPlainObject(c)&&J.isPlainObject(u)?J.merge.call({caseless:d},c,u):J.isPlainObject(u)?J.merge({},u):J.isArray(u)?u.slice():u}function r(c,u,f,d){if(J.isUndefined(u)){if(!J.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!J.isUndefined(u))return i(void 0,u)}function o(c,u){if(J.isUndefined(u)){if(!J.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(em(c),em(u),f,!0)};return J.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,d=f(t[u],e[u],u);J.isUndefined(d)&&f!==a||(n[u]=d)}),n}const i0=t=>{const e=Gr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=yn.from(o),e.url=Jv(n0(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(J.isFormData(n)){if(Zt.hasStandardBrowserEnv||Zt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Zt.hasStandardBrowserEnv&&(i&&J.isFunction(i)&&(i=i(e)),i||i!==!1&&oD(e.url))){const c=r&&s&&aD.read(s);c&&o.set(r,c)}return e},uD=typeof XMLHttpRequest<"u",fD=uD&&function(t){return new Promise(function(n,i){const r=i0(t);let s=r.data;const o=yn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,p,_;function g(){p&&p(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function h(){if(!m)return;const v=yn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:v,config:t,request:m};t0(function(C){n(C),g()},function(C){i(C),g()},E),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(h)},m.onabort=function(){m&&(i(new We("Request aborted",We.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new We("Network Error",We.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const E=r.transitional||Zv;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),i(new We(y,E.clarifyTimeoutError?We.ETIMEDOUT:We.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&J.forEach(o.toJSON(),function(y,E){m.setRequestHeader(E,y)}),J.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,_]=Ll(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,p]=Ll(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=v=>{m&&(i(!v||v.type?new $s(null,t,m):v),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const M=iD(r.url);if(M&&Zt.protocols.indexOf(M)===-1){i(new We("Unsupported protocol "+M+":",We.ERR_BAD_REQUEST,t));return}m.send(s||null)})},dD=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof We?u:new $s(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new We(`timeout ${e} of ms exceeded`,We.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>J.asap(a),l}},hD=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},pD=async function*(t,e){for await(const n of mD(t))yield*hD(n,e)},mD=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},tm=(t,e,n,i)=>{const r=pD(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},hc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",r0=hc&&typeof ReadableStream=="function",gD=hc&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),s0=(t,...e)=>{try{return!!t(...e)}catch{return!1}},_D=r0&&s0(()=>{let t=!1;const e=new Request(Zt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),nm=64*1024,nf=r0&&s0(()=>J.isReadableStream(new Response("").body)),Dl={stream:nf&&(t=>t.body)};hc&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Dl[e]&&(Dl[e]=J.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new We(`Response type '${e}' is not supported`,We.ERR_NOT_SUPPORT,i)})})})(new Response);const vD=async t=>{if(t==null)return 0;if(J.isBlob(t))return t.size;if(J.isSpecCompliantForm(t))return(await new Request(Zt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(J.isArrayBufferView(t)||J.isArrayBuffer(t))return t.byteLength;if(J.isURLSearchParams(t)&&(t=t+""),J.isString(t))return(await gD(t)).byteLength},SD=async(t,e)=>{const n=J.toFiniteNumber(t.getContentLength());return n??vD(e)},yD=hc&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=i0(t);c=c?(c+"").toLowerCase():"text";let p=dD([r,s&&s.toAbortSignal()],o),_;const g=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let m;try{if(l&&_D&&n!=="get"&&n!=="head"&&(m=await SD(u,i))!==0){let E=new Request(e,{method:"POST",body:i,duplex:"half"}),A;if(J.isFormData(i)&&(A=E.headers.get("content-type"))&&u.setContentType(A),E.body){const[C,N]=Zp(m,Ll(Qp(l)));i=tm(E.body,nm,C,N)}}J.isString(f)||(f=f?"include":"omit");const h="credentials"in Request.prototype;_=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:h?f:void 0});let M=await fetch(_);const v=nf&&(c==="stream"||c==="response");if(nf&&(a||v&&g)){const E={};["status","statusText","headers"].forEach(S=>{E[S]=M[S]});const A=J.toFiniteNumber(M.headers.get("content-length")),[C,N]=a&&Zp(A,Ll(Qp(a),!0))||[];M=new Response(tm(M.body,nm,C,()=>{N&&N(),g&&g()}),E)}c=c||"text";let y=await Dl[J.findKey(Dl,c)||"text"](M,t);return!v&&g&&g(),await new Promise((E,A)=>{t0(E,A,{data:y,headers:yn.from(M.headers),status:M.status,statusText:M.statusText,config:t,request:_})})}catch(h){throw g&&g(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new We("Network Error",We.ERR_NETWORK,t,_),{cause:h.cause||h}):We.from(h,h&&h.code,t,_)}}),rf={http:UL,xhr:fD,fetch:yD};J.forEach(rf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const im=t=>`- ${t}`,xD=t=>J.isFunction(t)||t===null||t===!1,o0={getAdapter:t=>{t=J.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!xD(n)&&(i=rf[(o=String(n)).toLowerCase()],i===void 0))throw new We(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(im).join(`
`):" "+im(s[0]):"as no adapter specified";throw new We("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:rf};function pu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new $s(null,t)}function rm(t){return pu(t),t.headers=yn.from(t.headers),t.data=hu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),o0.getAdapter(t.adapter||ta.adapter)(t).then(function(i){return pu(t),i.data=hu.call(t,t.transformResponse,i),i.headers=yn.from(i.headers),i},function(i){return e0(i)||(pu(t),i&&i.response&&(i.response.data=hu.call(t,t.transformResponse,i.response),i.response.headers=yn.from(i.response.headers))),Promise.reject(i)})}const a0="1.7.9",pc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{pc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const sm={};pc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+a0+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new We(r(o," has been removed"+(n?" in "+n:"")),We.ERR_DEPRECATED);return n&&!sm[o]&&(sm[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};pc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function ED(t,e,n){if(typeof t!="object")throw new We("options must be an object",We.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new We("option "+s+" must be "+l,We.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new We("Unknown option "+s,We.ERR_BAD_OPTION)}}const Ja={assertOptions:ED,validators:pc},ni=Ja.validators;class Ur{constructor(e){this.defaults=e,this.interceptors={request:new Kp,response:new Kp}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Gr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Ja.assertOptions(i,{silentJSONParsing:ni.transitional(ni.boolean),forcedJSONParsing:ni.transitional(ni.boolean),clarifyTimeoutError:ni.transitional(ni.boolean)},!1),r!=null&&(J.isFunction(r)?n.paramsSerializer={serialize:r}:Ja.assertOptions(r,{encode:ni.function,serialize:ni.function},!0)),Ja.assertOptions(n,{baseUrl:ni.spelling("baseURL"),withXsrfToken:ni.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&J.merge(s.common,s[n.method]);s&&J.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=yn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const c=[];this.interceptors.response.forEach(function(g){c.push(g.fulfilled,g.rejected)});let u,f=0,d;if(!l){const _=[rm.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),d=_.length,u=Promise.resolve(n);f<d;)u=u.then(_[f++],_[f++]);return u}d=a.length;let p=n;for(f=0;f<d;){const _=a[f++],g=a[f++];try{p=_(p)}catch(m){g.call(this,m);break}}try{u=rm.call(this,p)}catch(_){return Promise.reject(_)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Gr(this.defaults,e);const n=n0(e.baseURL,e.url);return Jv(n,e.params,e.paramsSerializer)}}J.forEach(["delete","get","head","options"],function(e){Ur.prototype[e]=function(n,i){return this.request(Gr(i||{},{method:e,url:n,data:(i||{}).data}))}});J.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Gr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ur.prototype[e]=n(),Ur.prototype[e+"Form"]=n(!0)});class ud{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new $s(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new ud(function(r){e=r}),cancel:e}}}function MD(t){return function(n){return t.apply(null,n)}}function bD(t){return J.isObject(t)&&t.isAxiosError===!0}const sf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sf).forEach(([t,e])=>{sf[e]=t});function l0(t){const e=new Ur(t),n=Hv(Ur.prototype.request,e);return J.extend(n,Ur.prototype,e,{allOwnKeys:!0}),J.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return l0(Gr(t,r))},n}const bt=l0(ta);bt.Axios=Ur;bt.CanceledError=$s;bt.CancelToken=ud;bt.isCancel=e0;bt.VERSION=a0;bt.toFormData=dc;bt.AxiosError=We;bt.Cancel=bt.CanceledError;bt.all=function(e){return Promise.all(e)};bt.spread=MD;bt.isAxiosError=bD;bt.mergeConfig=Gr;bt.AxiosHeaders=yn;bt.formToJSON=t=>Qv(J.isHTMLForm(t)?new FormData(t):t);bt.getAdapter=o0.getAdapter;bt.HttpStatusCode=sf;bt.default=bt;const TD={async getWeatherData(t){var e;try{const n=await bt.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(t)}&count=1&language=en&format=json`);if(!((e=n.data.results)!=null&&e[0]))throw new Error("City not found");const i=n.data.results[0];return{...(await bt.get(`https://api.open-meteo.com/v1/forecast?latitude=${i.latitude}&longitude=${i.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_mean&timezone=UTC`)).data,city:i.name}}catch(n){throw console.error("Error fetching weather data:",n),n}}},AD={class:"app"},wD={class:"main-container"},CD={class:"search-section glass"},RD={class:"search-container"},PD={class:"weather-content"},LD={key:0,class:"loader glass"},DD={key:1,class:"error-message glass"},ND={key:2,class:"weather-display fade-in"},ID="Mahmoud Nazmy",UD={__name:"App",setup(t){const e=un(""),n=un(null),i=un(!1),r=un(null),s=un("2025-01-25 19:05:15"),o=()=>{const c=new Date;s.value=vs(c,"yyyy-MM-dd HH:mm:ss")},a=async()=>{if(e.value.trim()){i.value=!0,r.value=null;try{n.value=await TD.getWeatherData(e.value)}catch(c){r.value=c.message||"Failed to fetch weather data"}finally{i.value=!1}}};let l;return jr(()=>{o(),l=setInterval(o,1e3)}),Go(()=>{l&&clearInterval(l)}),(c,u)=>(Vt(),kn("div",AD,[at(mP),Te("main",wD,[u[4]||(u[4]=Te("header",{class:"header glass"},[Te("div",{class:"header__brand"},[Te("h1",{class:"header__title"},"Weather Sphere")])],-1)),Te("section",CD,[Te("div",RD,[Vm(Te("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>e.value=f),onKeyup:l_(a,["enter"]),type:"text",class:"search-input",placeholder:"Enter city name..."},null,544),[[Po,e.value]]),Te("button",{onClick:a,class:"search-button"},u[1]||(u[1]=[Te("svg",{class:"search-icon",viewBox:"0 0 24 24"},[Te("path",{d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"})],-1),Xo(" Search ")]))])]),Te("section",PD,[i.value?(Vt(),kn("div",LD,u[2]||(u[2]=[Te("div",{class:"loader__spinner"},null,-1),Te("p",null,"Fetching weather data...",-1)]))):r.value?(Vt(),kn("div",DD,[u[3]||(u[3]=Te("svg",{class:"error-icon",viewBox:"0 0 24 24"},[Te("path",{d:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})],-1)),Te("p",null,Bt(r.value),1)])):n.value?(Vt(),kn("div",ND,[at(HP,{city:n.value.city,temperature:n.value.current.temperature_2m,"weather-code":n.value.current.weather_code,humidity:n.value.current.relative_humidity_2m,"wind-speed":n.value.current.wind_speed_10m},null,8,["city","temperature","weather-code","humidity","wind-speed"]),n.value.daily?(Vt(),Ro(jP,{key:0,forecast:n.value.daily,class:"forecast-section"},null,8,["forecast"])):al("",!0)])):al("",!0)]),Te("footer",{class:"footer glass"},[Te("p",{class:"footer__copyright"}," Created by "+Bt(ID)+" | WeatherSphere © 2024 ")])])]))}};/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const OD=Symbol();var om;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(om||(om={}));function FD(){const t=hm(!0),e=t.run(()=>un({}));let n=[],i=[];const r=mf({install(s){r._a=s,s.provide(OD,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const c0=hl(UD),BD=FD();c0.use(BD);c0.mount("#app");
