const tileField = document.querySelector(".books-container");
const add = document.getElementById("addBtn");
const addBook = document.getElementById("addBook");
const addForm = document.getElementById("addForm");
const modal = document.getElementById("modal");
const form = document.getElementById("form");

var titleVal = document.getElementById("title");
var authorVal = document.getElementById("author");
var pagesVal = document.getElementById("pages");



const library = [];

const Book = function (title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
};

library.push(new Book("Liber Null & Psychonaut", "Peter J Caroll", 224));
library.push(new Book("Condensed Chaos", "Phil Hine", 192));

function addBookToLibrary() {
  library.push(new Book(titleVal.value, authorVal.value, pagesVal.value));
}

function createTile(book) {
  // create book tile
  const tile = document.createElement("div");
  tile.classList.add("tile");

  const tileBookInfo = document.createElement("div");
  tileBookInfo.classList.add("book-info");

  const tileTitle = document.createElement("p");
  tileTitle.setAttribute("id", "tileTitle");

  const tileAuthor = document.createElement("p");
  tileAuthor.setAttribute("id", "tileAuthor");

  const tilePages = document.createElement("p");
  tilePages.setAttribute("id", "tilePages");

  const tileIsRead = document.createElement("div");
  tileIsRead.setAttribute("id", "tileIsRead");

  // create delete button and container
  const delContainer = document.createElement("div");
  delContainer.classList.add("del-container");

  const del = document.createElement("div");
  del.classList.add("del");

  tileTitle.innerHTML = book.title;
  tileAuthor.innerHTML = book.author;
  tilePages.innerHTML = `${book.pages} pages`;

  //appending elements

  tileBookInfo.appendChild(tileTitle);
  tileBookInfo.appendChild(tileAuthor);
  tileBookInfo.appendChild(tilePages);
  tileBookInfo.appendChild(tileIsRead);

  delContainer.appendChild(del);
  tile.appendChild(delContainer);
  tile.appendChild(tileBookInfo);
  tileField.appendChild(tile);

  // if del is clicked, removes the element
  del.addEventListener("click", function () {
    library.shift();
    console.log(library);
  });

  modal.style.display = "none";
  addForm.style.display = "none";
}

const onSubmit = function (event) {
  event.preventDefault();
  addBookToLibrary();
  console.log(library);


  modal.style.display = "none";
  addForm.style.display = "none";
};

// renders book in tileField
function renderBooks() {
  for (let i = 0; i < library.length; i++) {
    createTile(library[i]);
  }
}

renderBooks();


add.addEventListener("click", function () {
  modal.style.display = "initial";
  addForm.style.display = "initial";

  modal.addEventListener("click", function () {
    modal.style.display = "none";
    addForm.style.display = "none";
  });
});

