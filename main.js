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
let bookRemove = "";
let bookRemoveBtn = "";
let bookAuthor = "";
let j = 0;
let k = 0;
let l = 0;
let m = 0;
let n = 0;
let addBookToLibrary = function () {
  takeData();

  for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
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
    bookAuthor = document.querySelector(`.table div:nth-of-type(${k})`);
    bookAuthor.dataset.place = i;
    let pages = `${myLibrary[i].pages}`;
    render(pages, document.querySelector(".book-pages"));
    let bookPages = document.querySelector(`.table div:nth-of-type(${l})`);
    bookPages.dataset.place = i;
    let status = `${myLibrary[i].status}`;
    render(status, document.querySelector(".book-status"));
    let bookStatus = document.querySelector(`.table div:nth-of-type(${m})`);
    let btnSecond = document.createElement("button");
    btnSecond.innerHTML = "Change Status";
    btnSecond.classList.add("change-status");
    bookStatus.appendChild(btnSecond);
    bookStatus.dataset.place = i;
    render("", document.querySelector(".book-remove"));
    bookRemove = document.querySelector(".table").lastElementChild;
    let btn = document.createElement("button");
    btn.innerHTML = "Remove";
    btn.classList.add("book-remove-button");
    bookRemove.appendChild(btn);
    bookRemoveBtn = document.querySelector(`.table div:nth-of-type(${n})`);
    bookRemoveBtn.dataset.place = i;
  }
  changeStatus();
  RemoveLine();
};

let RemoveLine = function () {
  let bookRemoveButton = document.querySelectorAll(".book-remove-button");
  bookRemoveButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      z = btn.parentElement.dataset.place;
      myLibrary.splice(z, 1);
      let elements = document.querySelectorAll(`[data-place="${z}"]`);
      elements.forEach((e) => e.parentNode.removeChild(e));
    });
  });
};
let changeStatus = function () {
  z = myLibrary.length * 5 + 4;
  let changeSatusButton = document.querySelector(`.table div:nth-of-type(${z})`)
    .lastElementChild;

  changeSatusButton.addEventListener("click", () => {
    z = changeSatusButton.parentElement.dataset.place;

    if (myLibrary[z].status == false) {
      myLibrary[z].status = true;
    } else {
      myLibrary[z].status = false;
    }
    let element = document.querySelector(
      `.table div:nth-of-type(${5 + z * 5 + 4})`
    );
    element.firstChild.data = `${myLibrary[z].status}`;
  });
  // });
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
