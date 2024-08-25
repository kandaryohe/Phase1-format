// プレイヤーはそれぞれ3桁の好きな数字を決める(同じ数字を使用してないけない)
// 相手が決めた数字を予測し入力する（３桁より多く入力すると、3桁の数を入れて下さいとアラート）
// 自分が最初に決めた数字と相手が予測した数字を比較する
// 数字と桁が合っていたら「EAT」、数字はあっていて桁が違っているときは「BITE」と返す
// ３つの数字が出たら３EATを表示した後、正解！と表示する

//➀ボタンの取得
const checkBtn = document.getElementById("numCheck");

//➁ボタンを押したときの関数の定義
//➂inputタグの取得
checkBtn.addEventListener("click", function () {
  //➂inputタグの取得
  const inputTag = document.getElementById("answerNum");
  //➃入力値の取得
  const inputText = inputTag.value;
  inputTag.innerHTML = `${inputText}`;
  console.log(inputText);
  //３桁以上入力された場合、3桁の数を入れて下さいとアラート
  if () {
    alert("3桁の数を入れて下さい");
  } else 
});

//➄三桁の数字の設定（数字の順番も設定する）

//➅入力されたら、EAT（数、場所が合致）、BITE（数のみ合致）とアラート
//➆入力された数字と設定の数字が場所共に合致していれば上記のアラート表示後正解のアラート
//➇再度三桁の数字を設定
