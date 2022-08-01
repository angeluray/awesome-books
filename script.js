let collectionBooks = {};

const form = document.querySelector('#bookForm');
const title = document.querySelector('#input-title');
const author = document.querySelector('#input-author');
const button = document.querySelector('#add-book');

button.forEach('submit',() => {
  console.log('funciona');
});

const getValueInput = () =>{
  let inputValue = document.getElementById("input-title").value; 
  console.log(inputValue);
}


// document.getElementById('container-book').innerHTML = collectionBooks.map((items) => 
// `<div id="cards">
//   <h3>${title}</h3>
//   <p>${author}</p>
//   <button>Remove</button>
//   <hr>
//   </div>`
// ).join('');