import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './js/render-function.js';
import { PixabayAPI } from './js/pixabay.js';
import SimpleLightbox from "simplelightbox";

const refs = {
  form: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-form-input'),
  gallery: document.querySelector('.gallery'),
  body: document.querySelector('body'),
  spinner: document.querySelector('.js-spinner'),
};

spinnerPlay();

window.addEventListener('load', () => {
  console.log('All resources finished loading!');
  spinnerStop();
});

const pixaby = new PixabayAPI();

const onSubmitClick = async (event) => {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery;
  const search_query = searchQuery.value.trim().toLowerCase();
  if (!search_query) {
    clearPage();
    iziToast.error({
      color: 'red',
      position: 'topRight',
      message: `Enter data to search!`,
    });
    refs.searchInput.placeholder = 'What`re we looking for?';
    return;
  }

  if (search_query === pixaby.query) {
    iziToast.warning({
      color: 'yellow',
      position: 'topRight',
      message: `We already found images for "${search_query.toUpperCase()}. Please, enter another phrase`,
    });
    return;
  }

  pixaby.query = search_query;
  clearPage();

  try {
    spinnerPlay();
    const { hits, totalHits } = await pixaby.getPhotos();

    if (hits.length === 0) {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Sorry, there are no images matching your ${search_query}. Please try again.`,
      });
      return;
    }

    const markup = createMarkup(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    pixaby.setTotal(totalHits);

    const modalLightboxGallery = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
    });
    modalLightboxGallery.refresh();

    iziToast.show({
      color: 'blue',
      position: 'topRight',
      message: `Hooray! We found ${totalHits} images.`,
    });
  } catch (error) {
    iziToast.error({
      color: 'red',
      position: 'topRight',
      message: `${error.message}, 'Something went wrong!'`,
    });

    clearPage();
  } finally {
    spinnerStop();
  }
};

refs.form.addEventListener('submit', onSubmitClick);

function clearPage() {
  pixaby.resetPage();
  refs.gallery.innerHTML = '';
}

function spinnerPlay() {
  refs.body.classList.add('loading');
}

function spinnerStop() {
  window.setTimeout(function () {
    refs.body.classList.remove('loading');
    refs.body.classList.add('loaded');
  }, 1500);
}
