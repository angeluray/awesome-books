let collectionBooks = [];
const inputsObject = {};

const title = document.querySelector('#input-title');
const author = document.querySelector('#input-author');

let position = -1;

class NewBook {
  constructor(title, author, index) {
    this.title = title;
    this.author = author;
    this.index = index;
  }
}

function printf(collectionBooks) {
  document.getElementById('container-book').innerHTML = collectionBooks.map((items) => 
  `
  <div id="cards">
  <p>"${items.title}" by ${items.author} </p>
  <button class="buttonRemove" onclick="deletInfo(${items.index})">Remove</button>
  </div>
`).join('');
}

// check with every letter clicked
function saveInfo() {
  const newtitle = document.querySelector('#input-title').value;
  const newauthor = document.querySelector('#input-author').value;

  // Counter to define the index in the colections books
  position += 1;

  // If the title or the author is empty, then don't add the book
  if (newtitle === '' || newauthor === '') {
    return null;
  }
  // Create a new Book
  const bookInfo = new NewBook(newtitle, newauthor, position);
  collectionBooks.push(bookInfo);

  // Print in the html file
  printf(collectionBooks);
  return collectionBooks;
}

document.querySelector('#bookForm').addEventListener('submit', () => {
  inputsObject.title = title.value;
  inputsObject.author = author.value;
  localStorage.setItem(title.value, JSON.stringify(inputsObject));
});

function deletInfo(input) {
  collectionBooks = collectionBooks.filter((collectionBooks) => {
    if (collectionBooks.index === input) {
      position -= 1;
    } else {
      return true;
    }
    return null;
  });
  printf(collectionBooks);
  return collectionBooks;
}

printf();
saveInfo();
deletInfo();