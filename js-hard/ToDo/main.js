//追加ボタンの取得
const addBtn = document.getElementsByClassName("add-btn")[0];

//追加ボタンを押した時の関数の定義
//inputタグを取得
addBtn.addEventListener("click", function () {
  const inputTag = document.getElementById("add-area");

  //入力値の取得
  const inputText = inputTag.value;

  //<div></div>を作成
  //<div></div>という枠組みを作成
  const newTag = document.createElement("div");

  //newTagの中には入力された値が入る
  newTag.innerHTML = `${inputText}`;

  //<div>入力値<button>完了<button></div>
  //完了ボタンを、作成、取得する
  const compBtn = document.createElement("button");
  compBtn.textContent = "完了";
  newTag.appendChild(compBtn);

  //完了ボタンと共にタスク下に表示
  //HTML上のどこに表示するか
  //完了ボタンを押すとタスクから削除
  const lists = document.getElementById("todo");
  lists.appendChild(newTag);
  compBtn.addEventListener("click", function () {
    lists.removeChild(lists.lastElementChild);
  });
});
