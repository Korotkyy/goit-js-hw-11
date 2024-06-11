var b=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var c=(r,e,t)=>(b(r,e,"read from private field"),t?t.call(r):e.get(r)),u=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},p=(r,e,t,i)=>(b(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t);import{i as m,S as v}from"./assets/vendor-acbca2f4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();function S(r){return r.map(({tags:e,webformatURL:t,largeImageURL:i,likes:o,views:s,comments:a,downloads:P})=>`
            <a href='${i}' class="card-link js-card-link">
            <div class="photo-card">
              <img class="photo" src="${t}" alt="${e}" loading="lazy" />
              <div class="info">
                <div class="info-item info-item-likes">
                  <div class="box-likes"><b>Likes</b>
                  <span id="value">${o}</span>
                  </div>
                  
                </div>
                <p class="info-item">
                  <b>Views</b>
                  ${s}
                </p>
                <p class="info-item">
                  <b>Comments</b>
                  ${a}
                </p>
                <p class="info-item">
                  <b>Downloads</b>
                  ${P}
                </p>
              </div>
            </div>
            </a>`).join("")}const $="https://pixabay.com/api/",q="40619454-a69b8dffcc7de025c5c5357dd";var l,g,d,h;class j{constructor(){u(this,l,1);u(this,g,40);u(this,d,"");u(this,h,0)}async getPhotos(){const e={q:c(this,d),page:c(this,l),per_page:c(this,g),image_type:"photo",orientation:"horizontal",safesearch:!0},t=`${$}?key=${q}`,i=this.objectToQueryString(e);return await(await fetch(`${t}&${i}`)).json()}get query(){return c(this,d)}set query(e){p(this,d,e)}incrementPage(){p(this,l,c(this,l)+1)}resetPage(){p(this,l,1)}setTotal(e){p(this,h,e)}objectToQueryString(e){return Object.keys(e).map(t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t])).join("&")}}l=new WeakMap,g=new WeakMap,d=new WeakMap,h=new WeakMap;const n={form:document.querySelector(".search-form"),searchInput:document.querySelector(".search-form-input"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),spinner:document.querySelector(".js-spinner")};w();window.addEventListener("load",()=>{console.log("All resources finished loading!"),L()});const f=new j,I=async r=>{r.preventDefault();const t=r.target.elements.searchQuery.value.trim().toLowerCase();if(!t){y(),m.error({color:"red",position:"topRight",message:"Enter data to search!"}),n.searchInput.placeholder="What`re we looking for?";return}if(t===f.query){m.warning({color:"yellow",position:"topRight",message:`We already found images for "${t.toUpperCase()}. Please, enter another phrase`});return}f.query=t,y();try{w();const{hits:i,totalHits:o}=await f.getPhotos();if(i.length===0){m.error({color:"red",position:"topRight",message:`Sorry, there are no images matching your ${t}. Please try again.`});return}const s=S(i);n.gallery.insertAdjacentHTML("beforeend",s),f.setTotal(o),new v(".gallery a",{captionDelay:250}).refresh(),m.show({color:"blue",position:"topRight",message:`Hooray! We found ${o} images.`})}catch(i){m.error({color:"red",position:"topRight",message:`${i.message}, 'Something went wrong!'`}),y()}finally{L()}};n.form.addEventListener("submit",I);function y(){f.resetPage(),n.gallery.innerHTML=""}function w(){n.body.classList.add("loading")}function L(){window.setTimeout(function(){n.body.classList.remove("loading"),n.body.classList.add("loaded")},1500)}
//# sourceMappingURL=commonHelpers.js.map
