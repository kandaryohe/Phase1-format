//➊スタートボタンを押す
//➋3つの数字が1～9を繰り返し表示
//➌ストップを押すと数字が止まる
//➍3つ揃えば正解、外れれば再挑戦

//➊　スタートボタンの取得、
const startBtn = document.getElementById("startTimer");
const timeBtn = document.getElementsByClassName("slot-wrap");
//　　スタートボタンを押したときの関数の定義
//　　初期設定で３つで0を表示させる
//    スタートボタン押し3つ、1～9を繰り返し表示させる
let i = 0;
startBtn.addEventListener("click", function () {
  const numBtn = document.getElementById("nowTime");
});

//➋ストップボタンの取得、ストップボタン押した時の関数の定義
