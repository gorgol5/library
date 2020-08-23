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
  let status = document.querySelector(".input-status").checked;
  book1 = new Book(title, author, pages, status);
  myLibrary.push(book1);
};
let form = document.querySelector(".form");
let addForm = function () {
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "book-title");
  input.setAttribute("class", "input-title");
  input.setAttribute("placeholder", "title of your book");
  var x = document.createElement("LABEL");
  x.innerHTML = "Title: ";
  form.appendChild(x);
  form.appendChild(input);
  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "book-author");
  input.setAttribute("class", "input-author");
  input.setAttribute("placeholder", "author of your book");
  var x = document.createElement("LABEL");
  x.innerHTML = "Author: ";
  form.appendChild(x);
  form.appendChild(input);
  input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", "book-pages");
  input.setAttribute("class", "input-pages");
  input.setAttribute("placeholder", "number of pages in your book");
  var x = document.createElement("LABEL");
  x.innerHTML = "Pages: ";
  form.appendChild(x);
  form.appendChild(input);
  input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "book-status");
  input.setAttribute("class", "input-status");
  input.setAttribute("value", "Read");
  var x = document.createElement("LABEL");
  x.innerHTML = "Read: ";
  form.appendChild(x);
  form.appendChild(input);
  var s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  s.setAttribute("class", "input-submit");
  form.appendChild(s);
  let inputSubmit = document.querySelector(".input-submit");
  inputSubmit.addEventListener("click", () => {
    addBookToLibrary();
    removeForm();
  });
};
let removeForm = function () {
  document
    .querySelectorAll("INPUT")
    .forEach((e) => e.parentNode.removeChild(e));
  document
    .querySelectorAll("LABEL")
    .forEach((e) => e.parentNode.removeChild(e));
};
let book1 = {};
let timesClicked = 0;
let bookRemove = "";

let addBookToLibrary = function () {
  takeData();
  let j = 0;
  for (let i = timesClicked; i < myLibrary.length; i++) {
    j = myLibrary.length * 5 + 1;
    k = myLibrary.length * 5 + 2;
    l = myLibrary.length * 5 + 3;
    m = myLibrary.length * 5 + 4;
    n = myLibrary.length * 5 + 5;
    let title = `${myLibrary[i].title}`;
    render(title, document.querySelector(".book-title"));
    let bookTitle = document.querySelector(`.table div:nth-of-type(${j})`);
    bookTitle.dataset.place = i;
    let author = `${myLibrary[i].author}`;
    render(author, document.querySelector(".book-author"));
    let bookAuthor = document.querySelector(`.table div:nth-of-type(${k})`);
    bookAuthor.dataset.place = i;
    let pages = `${myLibrary[i].pages}`;
    render(pages, document.querySelector(".book-pages"));
    let bookPages = document.querySelector(`.table div:nth-of-type(${l})`);
    bookPages.dataset.place = i;
    let status = `${myLibrary[i].status}`;
    render(status, document.querySelector(".book-status"));
    render("", document.querySelector(".book-remove"));
    let bookStatus = document.querySelector(`.table div:nth-of-type(${m})`);
    bookStatus.dataset.place = i;
    bookRemove = document.querySelector(".table").lastElementChild;
    let btn = document.createElement("button");
    btn.innerHTML = "Remove";
    bookRemove.appendChild(btn);
    let bookRemoveBtn = document.querySelector(`.table div:nth-of-type(${n})`);
    bookRemoveBtn.dataset.place = i;
  }
  timesClicked++;
  j = j + 5;
};
let button = document.querySelector(".add-book");
button.addEventListener("click", () => {
  removeForm();
  addForm();
});
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
