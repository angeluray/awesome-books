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
  let bookInfo = new newBook (newtitle, newauthor);
  collectionBooks.push(bookInfo);
  
  const addingBooks = () => {
    let booksCards = '';
  
    for (let i = 0; i < collectionBooks.length; i += 1) {
      const newBookAdded = `<div id="cards">
         <h3>${collectionBooks[i].title}</h3>
         <p>${collectionBooks[i].author}</p>
         <button>Remove</button>
        <hr>
        </div>`;
      booksCards += newBookAdded;
    }
    booksContainer.insertAdjacentHTML('beforeend', booksCards);
  };
  return addingBooks();
}



console.log('Fuera de función:',collectionBooks);




// document.getElementById('container-book').innerHTML = collectionBooks.map((items) => 
// `<div id="cards">
//   <h3>${items.newBook.title.value}</h3>
//   <p>${items.author.value}</p>
//   <button>Remove</button>
//   <hr>
//   </div>`
// ).join('');