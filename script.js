// Classe NewBook and the constructor 
class NewBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    // this.index = index;
  }

  // ADD book
  static add() {
  const newtitle = document.querySelector('#input-title').value;
  const newauthor = document.querySelector('#input-author').value;

   // If the title or the author is empty, then don't add the book
  if (newtitle === '' || newauthor === '') {
    return null;
  }

  // Counter to define the index in the colections books
  // position += 1;

  // Create a new Book
  const bookInfo = new NewBook(newtitle, newauthor);
  collectionBooks.push(bookInfo);

  // Print in the html file
  NewBook.printf(collectionBooks);
  return collectionBooks;
  }

  // DELET book
  static delet(input) {

  // Delet the number by index position
  collectionBooks.splice(input,1);

  // Upgrade the DOM
  NewBook.printf(collectionBooks);

  // Upgrade the Local Storage
  localStorage.setItem('data', JSON.stringify(collectionBooks));
  
  return collectionBooks;
  }

  // Print the info in to the browser
  static printf(input) {
    document.getElementById('container-book').innerHTML = input.map((items,index) => 
    `
    <div id="cards">
    <p>"${items.title}" by ${items.author} </p>
    <button class="buttonRemove" onclick="NewBook.delet(${index})">Remove</button>
    </div>
    `
    ).join('');
  }
}

const lsOldData = class Storage {
  static getBooks() {
    let books = [];
    if (localStorage.getItem('data')) {
      books = JSON.parse(localStorage.getItem('data'));
    }
    return books;
  } 
}

// document.addEventListener('DOMContentLoaded', )
let collectionBooks = lsOldData.getBooks();
console.log('información encontrada', collectionBooks);

NewBook.printf(collectionBooks);

document.querySelector('#bookForm').addEventListener('submit', () => {
  localStorage.setItem('data', JSON.stringify(collectionBooks));
  }
);
