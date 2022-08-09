import { addClassDisplay } from './modules/display-sections.js';
import {
  add, delet, printf,
} from './modules/books.js';
import { getBooks, cleanInputs } from './modules/storage.js';
import { DateTime } from './modules/luxon.js';

// Call the function to add classes to the main sections
document.getElementById('nav-list').addEventListener('click', () => {
  addClassDisplay('list');
});

document.getElementById('nav-new').addEventListener('click', () => {
  addClassDisplay('addNew');
});

document.getElementById('nav-contact').addEventListener('click', () => {
  addClassDisplay('contact');
});
// Set the Add Books section as the main one.
addClassDisplay('addNew');

// Get date
const sendDate = () => {
  const myDate = DateTime.now();
  document.getElementById('date').innerHTML = myDate.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

// Call get date
window.addEventListener('DOMContenLoaded', sendDate());
setInterval(sendDate, 1000);

const keepBooks = getBooks();
printf(keepBooks);

document.getElementById('add-book').addEventListener('click', () => {
  add();
});

document.querySelector('#bookForm').addEventListener('submit', () => {
  cleanInputs();
});

const booksContainer = document.getElementById('container-book');
booksContainer.addEventListener('click', (e) => {
  const { id } = e.target;
  delet(id);
});

