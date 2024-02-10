import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
/*=============================================================*/
import renderImages from './js/render-functions';
import { infoAPI } from './js/pizsbay-api';

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.js-load-more');

const newInfoApi = new infoAPI();

form.addEventListener('submit', creatGallery);
loadMore.addEventListener('click', addNewInfo);

async function creatGallery(event) {
  event.preventDefault();
  const infoSearch = form.elements.text.value.trim();
  form.elements.text.value = '';
  loader.removeAttribute('hidden');
  gallery.innerHTML = '';
  if (infoSearch) {
    newInfoApi.page = 1;
    newInfoApi.query = infoSearch;
    const data = await newInfoApi.getInfoArticles(infoSearch);
    renderImages(data.hits);
    loadMore.classList.remove('visually-hidden');
  } else {
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
}

async function addNewInfo() {
  if (true) {
    newInfoApi.page += 1;
    const data = await newInfoApi.getInfoArticles();
    renderImages(data.hits);

    const heightElement = document.querySelector('.gallery-item');
    const height = heightElement.getBoundingClientRect();

    window.scrollBy({
      top: height.width * 2,
      behavior: 'smooth',
    });
  } else {
  }
}
