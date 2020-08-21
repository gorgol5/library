let myLibrary = [];
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${status}`;
  };
}
let takeData = function () {
  let title = document.querySelector(".input-title").value;
  let author = document.querySelector(".input-author").value;
  let pages = document.querySelector(".input-pages").value;
  let status = document.querySelector(".input-status").value;
  book1 = new Book(title, author, pages, status);
  myLibrary.push(book1);
};
let addForm = function () {
  let form = document.querySelector(".form");
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "book-title");
  input.setAttribute("class", "input-title");
  input.setAttribute("placeholder", "title of your book");
  form.appendChild(input);
  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "book-author");
  input.setAttribute("class", "input-author");
  input.setAttribute("placeholder", "author of your book");
  form.appendChild(input);
  input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", "book-pages");
  input.setAttribute("class", "input-pages");
  input.setAttribute("placeholder", "number of pages in your book");
  form.appendChild(input);
  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "book-status");
  input.setAttribute("class", "input-status");
  input.setAttribute("placeholder", "did you read the book?");
  form.appendChild(input);
  var s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  s.setAttribute("class", "input-submit");
  form.appendChild(s);
  let inputSubmit = document.querySelector(".input-submit");
  inputSubmit.addEventListener("click", addBookToLibrary);
};

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
    status = `${myLibrary[i].status}`;
    render(status, document.querySelector(".book-status"));
    render("", document.querySelector(".book-remove"));
  }
  timesClicked++;
  console.log(timesClicked);
};
let button = document.querySelector(".add-book");
button.addEventListener("click", addForm);
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
