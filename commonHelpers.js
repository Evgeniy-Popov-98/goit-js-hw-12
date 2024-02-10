import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const a=document.querySelector(".js-form");document.querySelector(".js-input");document.querySelector(".js-button");const d=document.querySelector(".gallery"),c=document.querySelector(".loader");a.addEventListener("submit",m);function m(e){e.preventDefault();const r=a.elements.text.value.trim();a.elements.text.value="",c.removeAttribute("hidden"),f(),r?y(r):l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function f(){const e=document.querySelectorAll(".gallery-item");for(let r=0;r<e.length;r++)e[r].remove()}function y(e){const r=`https://pixabay.com/api/?key=42169950-0e8cca4ed1d3fcef898dec13a&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(o.ok)return o.json();throw new Error(`${o.status}`)}).then(o=>{o.hits.length!==0?p(o.hits):l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(o=>console.log(o.message))}function h(e){return`
			 <li class="gallery-item">
				<a class="gallery-link" href=${e.largeImageURL}>
					<img class="gallery-image" src=${e.webformatURL} alt="${e.tags}" />
				</a>
				<div class="container">
					<div class="container-text"><h3 class="titel-text">Likes</h3><p class="text">${e.likes}</p></div>
					<div class="container-text"><h3 class="titel-text">Views</h3><p class="text">${e.views}</p></div>
					<div class="container-text"><h3 class="titel-text">Comments</h3><p class="text">${e.comments}</p></div>
					<div class="container-text"><h3 class="titel-text">Dowloads</h3><p class="text">${e.downloads}</p></div>
				</div>
			</li>
			`}function p(e){c.setAttribute("hidden","");const r=e.map(h).join("");d.innerHTML=r,new u(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
