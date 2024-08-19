//追加ボタンの取得
//追加ボタンを押した時の関数の定義
//inputタグを取得
//入力値の取得
//完了ボタンと共にタスク下に表示
//<div></div>を作成
//<div>入力値<button>完了<button></div>
//HTML上のどこに表示するか
//完了ボタンを押すとタスクから削除

const addBtn = document.getElementsByClassName("add-btn")[0];

addBtn.addEventListener("click", function () {
  const inputTag = document.getElementById("add-area");
  const inputText = inputTag.value;
  const newTag = document.createElement("div");
  newTag.innerHTML = `${inputText}<button>完了 `;
  const lists = document.getElementById("todo");
  lists.appendChild(newTag);
  newTag.addEventListener("click", function () {
    lists.removeChild(lists.lastElementChild);
  });
});
