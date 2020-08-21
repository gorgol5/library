let myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}
let takeData = function () {
  let title = prompt("Please enter title of your book", "Harry Potter");
  let author = prompt("Please enter author of your book", "Harry Potter");
  let pages = prompt("Please enter pages of your book", "Harry Potter");
  let read = prompt("Did you read the book", "Harry Potter");
  book1 = new Book(title, author, pages, read);
  myLibrary.push(book1);
};
// console.log(book1.info());
let book1 = {};
let timesClicked = 0;
let addBookToLibrary = function () {
  takeData();
  for (let i = timesClicked; i < myLibrary.length; i++) {
    title = `${myLibrary[i].title}`;
    render(title, document.querySelector(".book-title"));
    author = `${myLibrary[i].author}`;
    render(author, document.querySelector(".book-author"));
    pages = `${myLibrary[i].pages}`;
    render(pages, document.querySelector(".book-pages"));
    read = `${myLibrary[i].read}`;
    render(read, document.querySelector(".book-status"));
    render("", document.querySelector(".book-remove"));
  }
  timesClicked++;
  console.log(timesClicked);
};
let button = document.querySelector(".add-book");
button.addEventListener("click", addBookToLibrary);
let table = document.querySelector(".table");
let div = document.createElement("div");

let render = function (template, div) {
  table = document.querySelector(".table");
  div = document.createElement("div");
  div.classList.add("book");
  div.classList.add("cell");
  table.appendChild(div);
  div.innerHTML = template;
};
