var y=Object.defineProperty;var f=(r,e,s)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var u=(r,e,s)=>(f(r,typeof e!="symbol"?e+"":e,s),s);import{S as h,a as g,i as v}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const x=document.querySelector(".gallery"),S=document.querySelector(".loader");function p(r){S.setAttribute("hidden","");const e=r.map(a=>`<li class="gallery-item">
		   <a class="gallery-link" href=${a.largeImageURL}>
			   <img class="gallery-image" src=${a.webformatURL} alt="${a.tags}" />
		   </a>
		   <div class="container">
			   <div class="container-text"><h3 class="titel-text">Likes</h3><p class="text">${a.likes}</p></div>
			   <div class="container-text"><h3 class="titel-text">Views</h3><p class="text">${a.views}</p></div>
			   <div class="container-text"><h3 class="titel-text">Comments</h3><p class="text">${a.comments}</p></div>
			   <div class="container-text"><h3 class="titel-text">Dowloads</h3><p class="text">${a.downloads}</p></div>
		   </div>
	   </li>`).join("");x.insertAdjacentHTML("beforeend",e),new h(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const i=class i{constructor(){this.BASE_URL="https://pixabay.com/api/",this.query=null,this.page=1,this.totalResult=0}async getInfoArticles(){const e={key:"42169950-0e8cca4ed1d3fcef898dec13a",q:this.query,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i.PAGE_SIZE,page:this.page};return await g.get(`${this.BASE_URL}`,{params:e}).then(s=>{try{return s.data}catch{console.log(Error.message)}})}};u(i,"PAGE_SIZE",15);let c=i;const d=document.querySelector(".js-form");document.querySelector(".js-input");document.querySelector(".js-button");const L=document.querySelector(".gallery"),w=document.querySelector(".loader"),m=document.querySelector(".js-load-more"),n=new c;d.addEventListener("submit",q);m.addEventListener("click",b);async function q(r){r.preventDefault();const e=d.elements.text.value.trim();if(d.elements.text.value="",w.removeAttribute("hidden"),L.innerHTML="",e){n.query=e;const s=await n.getInfoArticles(e);p(s.hits),m.classList.remove("visually-hidden")}else v.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}async function b(){{n.page+=1;const r=await n.getInfoArticles();p(r.hits)}}
//# sourceMappingURL=commonHelpers.js.map
