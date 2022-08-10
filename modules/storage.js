import { collectionBooks } from './books.js';

const getBooks = () => {
  let books = [];
  if (localStorage.getItem('data')) {
    books = JSON.parse(localStorage.getItem('data'));
  }
  return books;
};

const cleanInputs = () => {
  localStorage.setItem('data', JSON.stringify(collectionBooks));

  // Clean inputs info
  document.querySelector('#input-title').value = '';
  document.querySelector('#input-author').value = '';
};

export { getBooks, cleanInputs };