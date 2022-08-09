const collectionBooks = [];

class NewBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Print the info into the browser
const printf = (input) => {
  document.getElementById('container-book').innerHTML = input.map((items, index) => `
      <div id="cards" class"${index}">
      <p>"${items.title}" by ${items.author} </p>
      <button class="buttonRemove" id="${index}">Remove</button>
      </div>
      `).join('');
};

// ADD book
const add = () => {
  const newtitle = document.querySelector('#input-title').value;
  const newauthor = document.querySelector('#input-author').value;

  if (newtitle === '' || newauthor === '') {
    return null;
  }
  // Create a new Book
  const bookInfo = new NewBook(newtitle, newauthor);
  collectionBooks.push(bookInfo);

  // Print in the html file
  printf(collectionBooks);
  return collectionBooks;
};

// DELET book
const delet = (input) => {
  // Delet the number by index position
  collectionBooks.splice(input, 1);

  // Upgrade the DOM
  printf(collectionBooks);

  // Upgrade the Local Storage
  localStorage.setItem('data', JSON.stringify(collectionBooks));

  return collectionBooks;
};

const initCollectionBooks = (keepBooks) => {
  keepBooks.forEach((book) => {
    const bookInfo = new NewBook(book.title, book.author);
    collectionBooks.push(bookInfo);
  });
};

export {
  add, delet, printf, collectionBooks, initCollectionBooks,
};