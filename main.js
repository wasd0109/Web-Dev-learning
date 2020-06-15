var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");
var deleteBtns = document.querySelectorAll(".del");

function inputLength() {
  return input.value.length;
}

function createDeleteBtn() {
  var delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("Delete"));
  delBtn.classList.add("del");
  return delBtn;
}

function createListElement() {
  var li = document.createElement("li");
  var delBtn = createDeleteBtn();
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(delBtn);
  li.addEventListener("click", toggleDone);
  delBtn.addEventListener("click", deleteItem);
  ul.appendChild(li);
  input.value = "";
}

function addListOnClick() {
  if (inputLength() > 0) createListElement();
}

function addListOnKeyPress(event) {
  if (inputLength() > 0 && event.which === 13) createListElement();
}

function toggleDone() {
  this.classList.toggle("done");
}

function addToggleDone(item) {
  item.addEventListener("click", toggleDone);
}

function deleteItem() {
  this.parentElement.remove();
}

function addDeleteItem(deleteBtn) {
  deleteBtn.addEventListener("click", deleteItem);
}

button.addEventListener("click", addListOnClick);
input.addEventListener("keypress", addListOnKeyPress);
items.forEach(addToggleDone);
deleteBtns.forEach(addDeleteItem);
