const title = document.getElementById("title");
console.log(`<h1>タグの中身のテキストは ${title.textContent} です。`);

const list = document.querySelector(".list");
console.log(
  `<ul>タグの2つ目の子要素のテキストは ${list.children[1].textContent} です。`
);
const newItem = document.createElement("li");
newItem.textContent = "もも";
list.appendChild(newItem);

//削除ボタンをクリックした時　確認画面を出す→イベントリスナー
//何か対象要素にイベントが起こった際に、実行したい処理を記述できる要素

const button = document.getElementById("button");

button.addEventListener("click", (Event) => {
  confirm("削除してよろしいですか？");
});
