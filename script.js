// selecting 
const tileField = document.querySelector(".books-container");
const add = document.getElementById("addBtn");
const addBook = document.getElementById("addBook");
const addForm = document.getElementById("addForm");
const modal = document.getElementById("modal");
const form = document.getElementById("form");
const tile = document.getElementById('tile');

// selecting input
var titleVal = document.getElementById("title");
var authorVal = document.getElementById("author");
var pagesVal = document.getElementById("pages");
var isRead = document.getElementById('isRead');

const library = [];


// book constructor
const Book = function (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // func that toggles read status
  this.readToggle = function() {
    if(this.read == "Read") {
      this.read = "Not read";
    } else {
      this.read = "Read";
    }
  }
};

// appending some books for testing
library.push(new Book("Liber Null & Psychonaut", "Peter J Caroll", 224, "Read"));
library.push(new Book("Condensed Chaos", "Phil Hine", 192, "Not read"));


function addBookToLibrary() {
  library.push(new Book(titleVal.value, authorVal.value, pagesVal.value, isRead.value));
}

// func that creates a tile
function createTile(book) {

  // create book tile
  const tile = document.createElement("div");
  tile.classList.add('tile');

  // 
  const tileBookInfo = document.createElement("div");
  tileBookInfo.classList.add("book-info");

  // title
  const tileTitle = document.createElement("p");
  tileTitle.setAttribute("id", "tileTitle");

  // author
  const tileAuthor = document.createElement("p");
  tileAuthor.setAttribute("id", "tileAuthor");

  // pages
  const tilePages = document.createElement("p");
  tilePages.setAttribute("id", "tilePages");

  // read status
  const tileIsRead = document.createElement("div");
  tileIsRead.setAttribute("id", "tileIsRead");

  // create delete button and container
  const delContainer = document.createElement("div");
  delContainer.classList.add("del-container");

  const del = document.createElement("div");
  del.classList.add("del");

  // setting dom elements to input values 
  tileTitle.innerHTML = book.title;
  tileAuthor.innerHTML = book.author;
  tilePages.innerHTML = `${book.pages} pages`;
  tileIsRead.innerHTML = book.read;



  //appending elements

  tileBookInfo.appendChild(tileTitle);
  tileBookInfo.appendChild(tileAuthor);
  tileBookInfo.appendChild(tilePages);
  tileBookInfo.appendChild(tileIsRead);

  // appending del button
  delContainer.appendChild(del);
  tile.appendChild(delContainer);
  tile.appendChild(tileBookInfo);
  tileField.appendChild(tile);

  // func to set color of read status
  function readColor() {
    if(book.read == "Read") {
      tileIsRead.style.backgroundColor = '#9fff9c';
    } else {
      tileIsRead.style.backgroundColor = '#ff9c9c';
    }
  }
  readColor();

  // delete function
  del.addEventListener("click", function() {
    library.splice(del.dataset.tile, 1)
    console.log(library)
    renderBooks();
  })

  // read status toggle
  tileIsRead.addEventListener('click', function() {
    book.readToggle();
    tileIsRead.innerHTML = `${book.read}`;
    readColor();
  })

  //
  modal.style.display = "none";
  addForm.style.display = "none";
}

// func for when a book is submitted
const onSubmit = function (event) {
  event.preventDefault();
  addBookToLibrary();
  console.log(library);
  renderBooks();

  modal.style.display = "none";
  addForm.style.display = "none";
};


// renders book in tileField
function renderBooks() {
  tileField.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    createTile(library[i]);
    tileField.childNodes[i].firstChild.firstChild.dataset.tile = i;
  }
}

renderBooks();

// toggles modal
add.addEventListener("click", function () {
  modal.style.display = "initial";
  addForm.style.display = "initial";

  modal.addEventListener("click", function () {
    modal.style.display = "none";
    addForm.style.display = "none";
  });
});





