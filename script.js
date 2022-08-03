// Classe NewBook and the constructor
let collectionBooks;
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
    collectionBooks.splice(input, 1);

    // Upgrade the DOM
    NewBook.printf(collectionBooks);

    // Upgrade the Local Storage
    localStorage.setItem('data', JSON.stringify(collectionBooks));

    return collectionBooks;
  }

  // Print the info in to the browser
  static printf(input) {
    document.getElementById('container-book').innerHTML = input.map((items, index) => `
    <div id="cards">
    <p>"${items.title}" by ${items.author} </p>
    <button class="buttonRemove" onclick="NewBook.delet(${index})">Remove</button>
    </div>
    `).join('');
  }

  static getBooks() {
    let books = [];
    if (localStorage.getItem('data')) {
      books = JSON.parse(localStorage.getItem('data'));
    }
    return books;
  }

  // Get date
  static sendDate() {
    const hora = Array.from(Date());
    let ordinal;

    const dayWeek = hora.splice(0, 3).join(''); // día de la semana
    const monthAndDay = hora.splice(1, 6).join(''); // Mes y día
    const year = hora.splice(2, 4).join(''); // Año
    const hour = hora.splice(3, 8).join(''); // Hora, minutos y segundos

    if (monthAndDay.substring(4, 6) === 1 || monthAndDay.substring(4, 6) === 21) {
      ordinal = 'st';
    } if (monthAndDay.substring(4, 6) === 2 || monthAndDay.substring(4, 6) === 22) {
      ordinal = 'nd';
    } if (monthAndDay.substring(4, 6) <= 3 || monthAndDay.substring(4, 6) === 23) {
      ordinal = 'rd';
    }

    if (monthAndDay.substring(4, 6) <= 20 && monthAndDay.substring(4, 6) > 3) {
      ordinal = 'th';
    } if (monthAndDay.substring(4, 6) >= 24 && monthAndDay.substring(4, 6) <= 31) {
      ordinal = 'th';
    }
    document.getElementById('date').innerHTML = `${dayWeek}, ${monthAndDay}${ordinal} ${year}, ${hour}`;
  }
}

// Call get date
window.addEventListener('DOMContenLoaded', NewBook.sendDate());
document.querySelector('body').addEventListener('mousemove', NewBook.sendDate);

// document.addEventListener('DOMContentLoaded', )
collectionBooks = NewBook.getBooks();

NewBook.printf(collectionBooks);

document.querySelector('#bookForm').addEventListener('submit', () => {
  localStorage.setItem('data', JSON.stringify(collectionBooks));
});
