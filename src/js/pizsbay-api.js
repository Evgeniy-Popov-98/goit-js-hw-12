import axios from 'axios';

export class infoAPI {
  static PAGE_SIZE = 15;

  constructor(infoSearch) {
    this.BASE_URL = 'https://pixabay.com/api/docs/';
    this.END_POINT = '';
    this.query = '&image_type=photo&orientation=horizontal&safesearch=true';
    this.page = 1;
    this.totalResult = 0;
  }

  async getInfoArticles(infoSearch) {
    const params = {
      apiKey: '42169950-0e8cca4ed1d3fcef898dec13a',
      q: `${infoSearch}` + this.query,
      pageSize: infoAPI.PAGE_SIZE,
      page: this.page,
    };
    console.log(infoSearch);
    console.log(params.q);
    // ${this.END_POINT}`
    const url = `${this.BASE_URL}`;
    console.log(url);
    const test = await axios.get(url, { params });
    console.log(test);
    // return test;

    // return fetch(url)
    //   .then(res => {
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       const myError = new Error(`${res.status}`);
    //       throw myError;
    //     }
    //   })
    //   .then(resolt => {
    //     if (resolt.hits.length !== 0) {
    //       renderImages(resolt.hits);
    //     } else {
    //       iziToast.error({
    //         position: 'topRight',
    //         message:
    //           'Sorry, there are no images matching your search query. Please try again!',
    //       });
    //     }
    //   })
    //   .catch(err => console.log(err.message));
  }
}
