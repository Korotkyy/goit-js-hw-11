import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './js/render-function.js';
import { PixabayAPI } from './js/pixabay.js';
import SimpleLightbox from 'simplelightbox';

const refs = {
  form: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-form-input'),
  gallery: document.querySelector('.gallery'),
  preloader: document.querySelector('.preloader'),
};

const pixaby = new PixabayAPI();
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

window.addEventListener('load', () => {
  console.log('Все ресурсы загружены!');
});

const onSubmitClick = async (event) => {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery;
  const search_query = searchQuery.value.trim().toLowerCase();

  if (!search_query) {
    clearPage();
    iziToast.error({
      color: 'red',
      position: 'topRight',
      message: 'Введите данные для поиска!',
    });
    refs.searchInput.placeholder = 'Что ищем?';
    return;
  }

  if (search_query === pixaby.query) {
    iziToast.warning({
      color: 'yellow',
      position: 'topRight',
      message: `Мы уже нашли изображения для "${search_query.toUpperCase()}". Пожалуйста, введите другую фразу.`,
    });
    return;
  }

  pixaby.query = search_query;
  clearPage();

  try {
    showPreloader();
    const { hits, totalHits } = await pixaby.getPhotos();

    if (hits.length === 0) {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Извините, нет изображений, соответствующих вашему запросу ${search_query}. Пожалуйста, попробуйте снова.`,
      });
      return;
    }

    const markup = createMarkup(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    pixaby.setTotal(totalHits);

    lightbox.refresh();

    iziToast.show({
      color: 'blue',
      position: 'topRight',
      message: `Ура! Мы нашли ${totalHits} изображений.`,
    });
  } catch (error) {
    iziToast.error({
      color: 'red',
      position: 'topRight',
      message: `${error.message}. Что-то пошло не так!`,
    });

    clearPage();
  } finally {
    hidePreloader();
  }
};

refs.form.addEventListener('submit', onSubmitClick);

function clearPage() {
  pixaby.resetPage();
  refs.gallery.innerHTML = '';
}

function showPreloader() {
  refs.preloader.classList.remove('is-hidden');
}

function hidePreloader() {
  refs.preloader.classList.add('is-hidden');
}
