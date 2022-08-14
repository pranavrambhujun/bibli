const tileField = document.querySelector(".books-container");
const add = document.getElementById("addBtn");
const addBook = document.getElementById("addBook");
const addForm = document.getElementById("addForm");
const modal = document.getElementById("modal");

const books = [];

function addBookToLibrary() {}

const createTile = function () {};

add.addEventListener("click", function () {
  modal.style.display = "initial";
  addForm.style.display = "initial";

  modal.addEventListener("click", function () {
    modal.style.display = "none";
    addForm.style.display = "none";
  });
});

const Book = function (title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
};

addBook.addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

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

  tileTitle.innerHTML = `"${title}"`;
  tileAuthor.innerHTML = author;
  tilePages.innerHTML = `${pages} pages`;

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
    tileField.removeChild(tile);
  });

  modal.style.display = "none";
  addForm.style.display = "none";
});

const onSubmit = function (event) {
  event.preventDefault();
};
