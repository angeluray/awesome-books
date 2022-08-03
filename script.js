let collectionBooks = [];
let position = -1;

// Classe NewBook and the constructor 
class NewBook {
  constructor(title, author, index) {
    this.title = title;
    this.author = author;
    this.index = index;
  }

  // ADD book
  static saveInfo() {
  const newtitle = document.querySelector('#input-title').value;
  const newauthor = document.querySelector('#input-author').value;

   // If the title or the author is empty, then don't add the book
  if (newtitle === '' || newauthor === '') {
    return null;
  }

  // Counter to define the index in the colections books
  position += 1;

  // Create a new Book
  const bookInfo = new NewBook(newtitle, newauthor, position);
  collectionBooks.push(bookInfo);

  // Print in the html file
  printf(collectionBooks);
  return collectionBooks;
  }

  // DELET book
  static deletInfo(input) {
  collectionBooks = collectionBooks.filter((collectionBooks) => {
    let num = 0;
    if (collectionBooks.index === input) {
      if(num == 0) {
        position -= 1;
        num += 1; 
      }
    } else {
      return true;
    }
    return null;
  });
  printf(collectionBooks);
  return collectionBooks;
  }
}

// Print the info in the browser
function printf(input) {
  document.getElementById('container-book').innerHTML = input.map((items) => 
  `
  <div id="cards">
  <p>"${items.title}" by ${items.author} </p>
  <button class="buttonRemove" onclick="NewBook.deletInfo(${items.index})">Remove</button>
  </div>
  `
).join('');
}

// Local Storage
const box = [];
const inputsObject = {};

document.querySelector('#bookForm').addEventListener('submit', () => {

  const lsTitle = document.querySelector('#input-title');
  const lsAuthor = document.querySelector('#input-author');

  inputsObject.title = lsTitle.value;
  inputsObject.author = lsAuthor.value;
  box.push(inputsObject);

  localStorage.setItem('data', JSON.stringify(inputsObject));
  console.log('Caja', box);
});





