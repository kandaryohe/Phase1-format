//アラート表示
alert();
//window.の部分を省略し書けるルールがある

//documentのプロパティにアクセスする例
console.log(document.doctype);
console.log(document.title);

// <p id="intro">...</p>要素を取得
const intro = document.getElementById("intro");
console.log(intro.textContent);

// <ul class="list">...</ul>要素を取得
const list = document.querySelector(".list");
console.log(list.children.length);

// <ul class="list">...</ul>の中にある<li>要素を取得]
// itemsは配列（のようなもの）なので、forEachで繰り返しができる
const items = document.querySelectorAll(".list li");
items.forEach((item) => {
  console.log(item.textContent);
});

//要素も情報を取得、操作する

const elem = document.querySelector(".list");

console.log(elem.textContent);
console.log(elem.innerHTML);
for (let i = 0; i < elem.children.length; i++) {
  console.log(elem.children[i]);
}

console.log(elem.firstElementChild);
console.log(elem.lastElementChild);
console.log(elem.parentElement);

const elem2 = document.querySelector("img");

console.log(elem2.getAttribute("src"));

elem2.setAttribute("src", "https://placehold.it/400x200");

//子要素の追加・削除
const newitem = document.createElement("li");
newitem.textContent = "新しいアイテム";
list.appendChild(newitem);
list.removeChild(list.firstElementChild);

//イベントリスナー
const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

addButton.addEventListener("click", (Event) => {
  const newItem = document.createElement("li");
  newItem.textContent = "新しいアイテム";
  list.appendChild(newItem);
});

removeButton.addEventListener("click", (Event) => {
  list.removeChild(list.lastElementChild);
});
