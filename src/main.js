import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
/*=============================================================*/
import renderImages from './js/render-functions';
import { infoAPI } from './js/pizsbay-api';

const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const buttom = document.querySelector('.js-button');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const newInfoApi = new infoAPI();

form.addEventListener('submit', creatGallery);

function creatGallery(event) {
  event.preventDefault();
  const infoSearch = form.elements.text.value.trim();
  form.elements.text.value = '';
  loader.removeAttribute('hidden');
  removeGallery();
  if (infoSearch) {
    // loader.setAttribute('hidden', '');

    try {
      console.log(infoSearch);
      const data = newInfoApi.getInfoArticles(infoSearch);
      //   console.log(data);
      //   renderImages(data.hits);
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: err.message,
      });
    }
  } else {
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
}

function removeGallery() {
  const galleryItem = document.querySelectorAll('.gallery-item');
  for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].remove();
  }
}

// function getImages(infoSearch) {
//   const url = `https://pixabay.com/api/?key=42169950-0e8cca4ed1d3fcef898dec13a&q=${infoSearch}&image_type=photo&orientation=horizontal&safesearch=true`;

//   return fetch(url)
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         const myError = new Error(`${res.status}`);
//         throw myError;
//       }
//     })
//     .then(resolt => {
//       if (resolt.hits.length !== 0) {
//         renderImages(resolt.hits);
//       } else {
//         iziToast.error({
//           position: 'topRight',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//         });
//       }
//     })
//     .catch(err => console.log(err.message));
// }
