import{i as K}from"./index.U3IA9L3b.js";document.addEventListener("astro:page-load",()=>{let t=0;const e=document.getElementById("scroll-to-top"),n={BLOCK:"block",NONE:"none"};function o(){const u=(document.body.scrollTop||document.documentElement.scrollTop)>20?n.BLOCK:n.NONE;e&&(e.closest("#button-up")?.classList.toggle("opacity-0",u===n.NONE),e.classList.toggle("cursor-default",u===n.NONE))}function r(){t||(t=requestAnimationFrame(()=>{o(),t=0}))}window.addEventListener("scroll",r),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});const T=(t,e=document)=>e.querySelector(t),W=(t,e=document)=>e.querySelectorAll(t);function S(t,e){e?.classList.toggle("open"),t?.classList.toggle("open"),document.body.classList.toggle("overflow-hidden"),document.body.classList.toggle("lg:overflow-auto")}document.addEventListener("astro:page-load",()=>{const t=T("nav"),e=T("#menuButton"),n=T("#innerMenuButton"),o=T("#menuMobileContent");e?.addEventListener("hamburgerButtonClicked",()=>S(t,o)),n?.addEventListener("hamburgerButtonClicked",()=>S(t,o)),o?.classList.contains("open")&&S(t,o)});const h={options:{maxToasts:3,toastLife:3e3,currentToasts:0,stackedToasts:!0},toast({title:t,message:e,type:n,location:o,icon:r,theme:l,dismissible:u}){let i=document.getElementById("toaster");if(i==null){if(i=document.createElement("div"),i.id="toaster",o==null?i.className="toaster top-right":i.className=`toaster ${o}`,document.body.appendChild(i),document.getElementById("butterupRack")==null){const s=document.createElement("ol");s.id="butterupRack",s.className="rack",i.appendChild(s)}}else i.classList.forEach(s=>{(s.includes("top-right")||s.includes("top-center")||s.includes("top-left")||s.includes("bottom-right")||s.includes("bottom-center")||s.includes("bottom-left"))&&i?.classList.remove(s)}),o==null?i.className="toaster top-right":i.className=`toaster ${o}`;if(h.options.currentToasts>=h.options.maxToasts){const s=document.getElementById("butterupRack")?.firstChild;s&&document.getElementById("butterupRack")?.removeChild(s),h.options.currentToasts--}const a=document.createElement("li");if(h.options.currentToasts++,a.className="butteruptoast",(i.className.includes("top-right")||i.className.includes("top-center")||i.className.includes("top-left"))&&(a.className+=" toastDown"),(i.className.includes("bottom-right")||i.className.includes("bottom-center")||i.className.includes("bottom-left"))&&(a.className+=" toastUp"),a.id=`butterupToast-${h.options.currentToasts}`,n!=null&&(a.className+=` ${n}`),l!=null&&(a.className+=` ${l}`),document.getElementById("butterupRack")?.appendChild(a),r!=null&&r===!0){const s=document.createElement("div");s.className="icon",a.appendChild(s),n!=null&&(a.className+=` ${n}`,n==="success"&&(s.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clip-rule='evenodd' /></svg>"),n==="error"&&(s.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z' clip-rule='evenodd' /></svg>"),n==="warning"&&(s.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z' clip-rule='evenodd' /></svg>"),n==="info"&&(s.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z' clip-rule='evenodd' /></svg>"))}const d=document.createElement("div");d.className="notif",a.appendChild(d);const c=document.createElement("div");if(c.className="desc",d.appendChild(c),t!=null){const s=document.createElement("div");s.className="title",s.innerHTML=t,c.appendChild(s)}if(e!=null){const s=document.createElement("div");s.className="message",s.innerHTML=e,c.appendChild(s)}u!=null&&u===!0&&(a.className+=" dismissible",a.addEventListener("click",()=>{h.despawnToast(a.id)})),setTimeout(()=>{a.className=a.className.replace(" toastDown",""),a.className=a.className.replace(" toastUp","")},500),setTimeout(()=>{h.despawnToast(a.id)},h.options.toastLife)},despawnToast(t){const e=document.getElementById(t);e!=null&&(e.className+=" fadeOutToast",setTimeout(()=>{try{e.style.opacity="0",e.parentNode?.removeChild(e),h.options.currentToasts--}catch{}if(h.options.currentToasts===0){const n=document.getElementById("toaster");n&&n.parentNode?.removeChild(n)}},500))}};window.toast=h.toast;const y="data-astro-transition-persist";function V(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function j(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function G(t){for(const e of Array.from(document.head.children)){const n=Z(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function J(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${y}]`)){const o=n.getAttribute(y),r=t.querySelector(`[${y}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&tt(n)&&!et(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const Q=()=>{const t=document.activeElement;if(t?.closest(`[${y}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>k({activeElement:t,start:e,end:n})}return()=>k({activeElement:t})}else return()=>k({activeElement:null})},k=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},Z=(t,e)=>{const n=t.getAttribute(y),o=n&&e.head.querySelector(`[${y}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},tt=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},et=(t,e)=>t.getAttribute("props")===e.getAttribute("props"),nt=t=>{V(t),j(t),G(t);const e=Q();J(t.body,document.body),e()},ot="astro:before-preparation",st="astro:after-preparation",rt="astro:before-swap",it="astro:after-swap",at=t=>document.dispatchEvent(new Event(t));class F extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,l,u,i,a,d,c){super(e,n),this.from=o,this.to=r,this.direction=l,this.navigationType=u,this.sourceElement=i,this.info=a,this.newDocument=d,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class lt extends F{formData;loader;constructor(e,n,o,r,l,u,i,a,d,c){super(ot,{cancelable:!0},e,n,o,r,l,u,i,a),this.formData=d,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ct extends F{direction;viewTransition;swap;constructor(e,n){super(rt,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>nt(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ut(t,e,n,o,r,l,u,i,a){const d=new lt(t,e,n,o,r,l,window.document,u,i,a);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(at(st),d.navigationType!=="traverse"&&x({scrollX,scrollY}))),d}function dt(t,e){const n=new ct(t,e);return document.dispatchEvent(n),n.swap(),n}const mt=history.pushState.bind(history),A=history.replaceState.bind(history),x=t=>{history.state&&(history.scrollRestoration="manual",A({...history.state,...t},""))},M=!!document.startViewTransition,C=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Y=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let m,w,L;const q=t=>document.dispatchEvent(new Event(t)),X=()=>q("astro:page-load"),ft=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},D="data-astro-transition-persist",I="data-astro-transition",R="data-astro-transition-fallback";let B,E=0;history.state?(E=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):C()&&(A({index:E,scrollX,scrollY},""),history.scrollRestoration="manual");async function ht(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function _(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function pt(){let t=Promise.resolve();for(const e of document.getElementsByTagName("script")){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const l=new Promise(u=>{o.onload=o.onerror=u});t=t.then(()=>l)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const U=(t,e,n,o,r)=>{const l=Y(e,t),u=document.title;document.title=o;let i=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const a=history.state;A({...n.state,index:a.index,scrollX:a.scrollX,scrollY:a.scrollY},"",t.href)}else mt({...n.state,index:++E,scrollX:0,scrollY:0},"",t.href);if(document.title=u,L=t,l||(scrollTo({left:0,top:0,behavior:"instant"}),i=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const a=history.state;location.href=t.href,history.state||(A(a,""),l&&window.dispatchEvent(new PopStateEvent("popstate")))}else i||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function gt(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${D}="${n.getAttribute(D)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(l=>o.addEventListener(l,r)),document.head.append(o)}))}return e}async function P(t,e,n,o,r){async function l(a){function d(p){const f=p.effect;return!f||!(f instanceof KeyframeEffect)||!f.target?!1:window.getComputedStyle(f.target,f.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(R,a);const g=document.getAnimations().filter(p=>!c.includes(p)&&!d(p));return Promise.allSettled(g.map(p=>p.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await l("old")}catch{}const u=document.title,i=dt(t,n.viewTransition);U(i.to,i.from,e,u,o),q(it),r==="animate"&&(!n.transitionSkipped&&!i.signal.aborted?l("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function bt(){return m?.controller.abort(),m={controller:new AbortController}}async function z(t,e,n,o,r){const l=bt();if(!C()||location.origin!==n.origin){l===m&&(m=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&x({scrollX,scrollY}),Y(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){U(n,e,o,document.title,r),l===m&&(m=void 0);return}const i=await ut(e,n,t,u,o.sourceElement,o.info,l.controller.signal,o.formData,a);if(i.defaultPrevented||i.signal.aborted){l===m&&(m=void 0),i.signal.aborted||(location.href=n.href);return}async function a(s){const g=s.to.href,p={signal:s.signal};if(s.formData){p.method="POST";const v=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");p.body=v?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const f=await ht(g,p);if(f===null){s.preventDefault();return}if(f.redirected){const v=new URL(f.redirected);if(v.origin!==s.to.origin){s.preventDefault();return}s.to=v}if(B??=new DOMParser,s.newDocument=B.parseFromString(f.html,f.mediaType),s.newDocument.querySelectorAll("noscript").forEach(v=>v.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const N=gt(s.newDocument);N.length&&!s.signal.aborted&&await Promise.all(N)}async function d(){if(w&&w.viewTransition){try{w.viewTransition.skipTransition()}catch{}try{await w.viewTransition.updateCallbackDone}catch{}}return w={transitionSkipped:!1}}const c=await d();if(i.signal.aborted){l===m&&(m=void 0);return}if(document.documentElement.setAttribute(I,i.direction),M)c.viewTransition=document.startViewTransition(async()=>await P(i,o,c,r));else{const s=(async()=>{await Promise.resolve(),await P(i,o,c,r,_())})();c.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(g=>c.viewTransitionFinished=g),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(R)}}}c.viewTransition?.updateCallbackDone.finally(async()=>{await pt(),X(),ft()}),c.viewTransition?.finished.finally(()=>{c.viewTransition=void 0,c===w&&(w=void 0),l===m&&(m=void 0),document.documentElement.removeAttribute(I),document.documentElement.removeAttribute(R)});try{await c.viewTransition?.updateCallbackDone}catch(s){const g=s;console.log("[astro]",g.name,g.message,g.stack)}}async function H(t,e){await z("forward",L,new URL(t,location.href),e??{})}function wt(t){if(!C()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>E?"forward":"back";E=n,z(o,L,new URL(location.href),{},e)}const O=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&x({scrollX,scrollY})};{if(M||_()!=="none")if(L=new URL(location.href),addEventListener("popstate",wt),addEventListener("load",X),"onscrollend"in window)addEventListener("scrollend",O);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,O();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.getElementsByTagName("script"))t.dataset.astroExec=""}function vt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function $(t){return t.dataset.astroReload!==void 0}(M||vt()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;$(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),H(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||$(e))return;const n=e,o=t.submitter,r=new FormData(n,o),l=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let i=o?.getAttribute("formaction")??l??location.pathname;const a=o?.getAttribute("formmethod")??u??"get";if(a==="dialog"||location.origin!==new URL(i,location.href).origin)return;const d={sourceElement:o??n};if(a==="get"){const c=new URLSearchParams(r),s=new URL(i);s.search=c.toString(),i=s.toString()}else d.formData=r;t.preventDefault(),H(i,d)}),K({prefetchAll:!0}));const b={hamburgerMenuClass:".hamburgerButton",open:"open",hamburgerButtonClicked:"hamburgerButtonClicked"};document.addEventListener("astro:page-load",()=>{const t=T(b.hamburgerMenuClass);W(b.hamburgerMenuClass).forEach(e=>{e.addEventListener("click",()=>{const n=T(b.hamburgerMenuClass);n.classList.toggle(b.open);const o=n.classList.contains(b.open);n.setAttribute("aria-expanded",String(o)),n.setAttribute("aria-label",o?"Cerrar menú de navegación":"Abrir menú de navegación");const r=new CustomEvent(b.hamburgerButtonClicked);n.dispatchEvent(r)})}),t?.classList?.contains(b.open)&&t?.classList?.remove(b.open)});
