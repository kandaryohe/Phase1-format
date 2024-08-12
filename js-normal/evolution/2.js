//関数を定義しボタンを呼び出す
const setBtn = document.getElementById("setBtn");
const reset = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");

//関数を定義しセットボタンが押された際ランダムで0～9までの数字が出力される
setBtn.addEventListener("click", function () {
  showImg.innerHTML = "";
  const checkEvo = Math.floor(Math.random() * 10);
  //画像１をいれる
  const first = document.createElement("div");
  first.innerHTML = "<img src='./img/evolution1.png' alt='原人' />";
  showImg.appendChild(first);
  //ランダムの数が４以上だった時二枚目の写真が出てくる
  if (checkEvo >= 4) {
    const second = document.createElement("div");
    second.innerHTML = "<img src='./img/evolution2.png' alt='旧人'  />";
    showImg.appendChild(second);
  } //ランダムの数が7以上だった時三枚目の写真が出てくる
  if (checkEvo >= 7) {
    const third = document.createElement("div");
    third.innerHTML = "<img src='./img/evolution3.png' alt='新人'/>";
    showImg.appendChild(third);
  } //ランダムの数が9以上だった時四枚目の写真が出てくる
  if (checkEvo >= 9) {
    const fourth = document.createElement("div");
    fourth.innerHTML = "<img src='./img/evolution4.png' alt='現代人'/>";
    showImg.appendChild(fourth);
  }
});
//リセットボタンを押した際画像が消える
reset.addEventListener("click", function () {
  showImg.innerHTML = "";
});
