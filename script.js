const collectionBooks = [];

// const form = document.querySelector('#bookForm');
const booksContainer = document.querySelector('#container-book');
// const button = document.querySelector('#add-book');

class NewBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// check with every letter clicked
function saveInfo() {
  const newtitle = document.querySelector('#input-title').value;
  const newauthor = document.querySelector('#input-author').value;

  // Create a new Book
  const bookInfo = new NewBook(newtitle, newauthor);

  // Push the book inside the collection
  collectionBooks.push(bookInfo);

  const addingBooks = () => {
    const booksCards = '';

    document.getElementById('container-book').innerHTML = collectionBooks.map((items) => `<div id="cards">
      <h3>${items.title}</h3>
      <p>${items.author}</p>
      <button id="remove">Remove</button>
      <hr>
      </div>`).join('');

    booksContainer.insertAdjacentHTML('beforeend', booksCards);
  };
  return addingBooks();
}
saveInfo();