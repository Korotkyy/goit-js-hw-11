var b=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var a=(o,e,t)=>(b(o,e,"read from private field"),t?t.call(o):e.get(o)),h=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)},f=(o,e,t,i)=>(b(o,e,"write to private field"),i?i.call(o,t):e.set(o,t),t);import{S as M,i as c}from"./assets/vendor-acbca2f4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function L(o){return o.map(({tags:e,webformatURL:t,largeImageURL:i,likes:r,views:s,comments:p,downloads:q})=>`
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
                  ${p}
                </p>
                <p class="info-item">
                  <b>Downloads</b>
                  ${q}
                </p>
              </div>
            </div>
            </a>`).join("")}const S="https://pixabay.com/api/",R="40619454-a69b8dffcc7de025c5c5357dd";var d,m,u,g;class I{constructor(){h(this,d,1);h(this,m,40);h(this,u,"");h(this,g,0)}async getPhotos(){const e={q:a(this,u),page:a(this,d),per_page:a(this,m),image_type:"photo",orientation:"horizontal",safesearch:!0},t=`${S}?key=${R}`,i=this.objectToQueryString(e);return await(await fetch(`${t}&${i}`)).json()}get query(){return a(this,u)}set query(e){f(this,u,e)}incrementPage(){f(this,d,a(this,d)+1)}resetPage(){f(this,d,1)}setTotal(e){f(this,g,e)}objectToQueryString(e){return Object.keys(e).map(t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t])).join("&")}}d=new WeakMap,m=new WeakMap,u=new WeakMap,g=new WeakMap;const n={form:document.querySelector(".search-form"),searchInput:document.querySelector(".search-form-input"),gallery:document.querySelector(".gallery"),preloader:document.querySelector(".preloader"),loadMoreBtn:document.querySelector(".load-more-btn")},l=new I,P=new M(".gallery a",{captionDelay:250});window.addEventListener("load",()=>{console.log("Все ресурсы загружены!")});const T=async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim().toLowerCase();if(!t){y(),c.error({color:"red",position:"topRight",message:"Введите данные для поиска!"}),n.searchInput.placeholder="Что ищем?";return}if(t===l.query){c.warning({color:"yellow",position:"topRight",message:`Мы уже нашли изображения для "${t.toUpperCase()}". Пожалуйста, введите другую фразу.`});return}l.query=t,y();try{v();const{hits:i,totalHits:r}=await l.getPhotos();if(i.length===0){c.error({color:"red",position:"topRight",message:`Извините, нет изображений, соответствующих вашему запросу ${t}. Пожалуйста, попробуйте снова.`});return}const s=L(i);n.gallery.innerHTML=s,l.setTotal(r),P.refresh(),i.length<r?k():$(),c.show({color:"blue",position:"topRight",message:`Ура! Мы нашли ${r} изображений.`})}catch(i){c.error({color:"red",position:"topRight",message:`${i.message}. Что-то пошло не так!`}),y()}finally{w()}};n.form.addEventListener("submit",T);n.loadMoreBtn.addEventListener("click",C);function y(){l.resetPage(),n.gallery.innerHTML="",$()}function v(){n.preloader.classList.remove("is-hidden")}function w(){n.preloader.classList.add("is-hidden")}function k(){n.loadMoreBtn.classList.remove("is-hidden")}function $(){n.loadMoreBtn.classList.add("is-hidden")}async function C(){try{v();const{hits:o}=await l.getPhotos(),e=L(o);n.gallery.innerHTML+=e,P.refresh()}catch(o){c.error({color:"red",position:"topRight",message:`${o.message}. Не удалось загрузить больше изображений.`})}finally{w()}}
//# sourceMappingURL=commonHelpers.js.map
