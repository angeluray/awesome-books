let collectionBooks = [];

// const form = document.querySelector('#bookForm');
const title = document.querySelector('#input-title');
const author = document.querySelector('#input-author');
const booksContainer = document.querySelector('#container-book')
// const button = document.querySelector('#add-book');

class newBook {
  constructor (title,author){
    this.title = title;
    this.author = author; 
  }
}

// check with every letter clicked
function saveInfo () {
  let newtitle = document.querySelector('#input-title').value;
  let newauthor = document.querySelector('#input-author').value;

  // Create a new Book
  let bookInfo = new newBook (newtitle, newauthor );

  // Push the book inside the collection
  collectionBooks.push(bookInfo);
  console.log(collectionBooks);
  
  const addingBooks = () => {
    let booksCards = '';  

    document.getElementById('container-book').innerHTML = collectionBooks.map((items) => 
    `<div id="cards">
      <h3>${items.title}</h3>
      <p>${items.author}</p>
      <button>Remove</button>
      <hr>
      </div>`
    ).join('');

    booksContainer.insertAdjacentHTML('beforeend', booksCards);
  };
  return addingBooks();
}

console.log(addingBooks);





