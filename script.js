const tileField = document.querySelector(".books-container");
const add = document.getElementById("addBtn");
const addBook = document.getElementById("addBook");
const addForm = document.getElementById("addForm");
const modal = document.getElementById("modal");

const books = [];

const book = function (title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
};

const createTile = function () {
  // create book tile
  const tile = document.createElement("div");
  tile.classList.add("tile");

  // create delete button and container
  const delContainer = document.createElement("div");
  delContainer.classList.add("del-container");
  const del = document.createElement("div");
  del.classList.add("del");

  delContainer.appendChild(del);
  tile.appendChild(delContainer);
  tileField.appendChild(tile);

  del.addEventListener("click", function () {
    tileField.removeChild(tile);
  });
};

add.addEventListener("click", function () {
  modal.style.display = "initial";
  addForm.style.display = "initial";

  modal.addEventListener("click", function () {
    modal.style.display = "none";
    addForm.style.display = "none";
  });

  addBook.addEventListener("click", function () {
    createTile();
  });
});
