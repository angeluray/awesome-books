let collectionBooks = [];
const inputsObject = {};
const cont = 0;

const form = document.querySelector('#bookForm');
const title = document.querySelector('#input-title');
const author = document.querySelector('#input-author');

var position = -1;


class newBook {
  constructor (title,author,index){
    this.title = title;
    this.author = author;
    this.index = index;
  }
}



// check with every letter clicked
function saveInfo () {
  let newtitle = document.querySelector('#input-title').value;
  let newauthor = document.querySelector('#input-author').value;
  
  // Counter to define the index in the colections books
  position++;  

  // If the title or the author is empty, then don't add the book
  if( newtitle === '' || newauthor === '') {
    return null;
  } else {
  // Create a new Book
  let bookInfo = new newBook ( newtitle , newauthor, position );
  collectionBooks.push(bookInfo);
  }

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
  console.log(collectionBooks);
  { console.log(input)};

   collectionBooks = collectionBooks.filter((collectionBooks)=> {
      if(collectionBooks.index === input ){ 
        console.log('Eliminado:', input)
        position--;
      } else {
        return true;
      }
   });
  printf(collectionBooks);
  return collectionBooks;
}

function printf(collectionBooks){
  document.getElementById('container-book').innerHTML = collectionBooks.map((items) => 
  `<div id="cards">
    <h3>${items.title}</h3>
    <p>${items.author}</p>
    <button onclick="deletInfo(${items.index})">Remove</button>
    <hr>
    </div>`
).join('');
}

printf();
saveInfo();
deletInfo();