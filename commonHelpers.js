var b=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var a=(o,e,t)=>(b(o,e,"read from private field"),t?t.call(o):e.get(o)),u=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)},p=(o,e,t,i)=>(b(o,e,"write to private field"),i?i.call(o,t):e.set(o,t),t);import{S as v,i as h}from"./assets/vendor-acbca2f4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function w(o){return o.map(({tags:e,webformatURL:t,largeImageURL:i,likes:r,views:s,comments:d,downloads:P})=>`
            <a href='${i}' class="card-link js-card-link">
            <div class="photo-card">
              <img class="photo" src="${t}" alt="${e}" loading="lazy" />
              <div class="info">
                <div class="info-item info-item-likes">
                  <div class="box-likes"><b>Likes</b>
                  <span id="value">${r}</span>
                  </div>
                  
                </div>
                <p class="info-item">
                  <b>Views</b>
                  ${s}
                </p>
                <p class="info-item">
                  <b>Comments</b>
                  ${d}
                </p>
                <p class="info-item">
                  <b>Downloads</b>
                  ${P}
                </p>
              </div>
            </div>
            </a>`).join("")}const L="https://pixabay.com/api/",$="40619454-a69b8dffcc7de025c5c5357dd";var n,m,c,g;class q{constructor(){u(this,n,1);u(this,m,40);u(this,c,"");u(this,g,0)}async getPhotos(){const e={q:a(this,c),page:a(this,n),per_page:a(this,m),image_type:"photo",orientation:"horizontal",safesearch:!0},t=`${L}?key=${$}`,i=this.objectToQueryString(e);return await(await fetch(`${t}&${i}`)).json()}get query(){return a(this,c)}set query(e){p(this,c,e)}incrementPage(){p(this,n,a(this,n)+1)}resetPage(){p(this,n,1)}setTotal(e){p(this,g,e)}objectToQueryString(e){return Object.keys(e).map(t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t])).join("&")}}n=new WeakMap,m=new WeakMap,c=new WeakMap,g=new WeakMap;const l={form:document.querySelector(".search-form"),searchInput:document.querySelector(".search-form-input"),gallery:document.querySelector(".gallery"),preloader:document.querySelector(".preloader")},f=new q,S=new v(".gallery a",{captionDelay:250});window.addEventListener("load",()=>{console.log("Все ресурсы загружены!")});const I=async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim().toLowerCase();if(!t){y(),h.error({color:"red",position:"topRight",message:"Введите данные для поиска!"}),l.searchInput.placeholder="Что ищем?";return}if(t===f.query){h.warning({color:"yellow",position:"topRight",message:`Мы уже нашли изображения для "${t.toUpperCase()}". Пожалуйста, введите другую фразу.`});return}f.query=t,y();try{R();const{hits:i,totalHits:r}=await f.getPhotos();if(i.length===0){h.error({color:"red",position:"topRight",message:`Извините, нет изображений, соответствующих вашему запросу ${t}. Пожалуйста, попробуйте снова.`});return}const s=w(i);l.gallery.insertAdjacentHTML("beforeend",s),f.setTotal(r),S.refresh(),h.show({color:"blue",position:"topRight",message:`Ура! Мы нашли ${r} изображений.`})}catch(i){h.error({color:"red",position:"topRight",message:`${i.message}. Что-то пошло не так!`}),y()}finally{j()}};l.form.addEventListener("submit",I);function y(){f.resetPage(),l.gallery.innerHTML=""}function R(){l.preloader.classList.remove("is-hidden")}function j(){l.preloader.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
