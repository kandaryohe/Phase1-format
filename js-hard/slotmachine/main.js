//➊スタートボタンを押す、中央に数字を表示
//➋3つの数字が1～9を繰り返し表示
//➌数字の下のストップボタンが押されると１つずつ止まる
//➍押したストップボタンは終わるまで押せない
//➎3つ揃えば正解、外れれば再挑戦
//➏外れた場合止まった数字から始まる

//➊　スタートボタンの取得、中央に0を3つ表示させる
//　　中央に３つ0を表示させる

const startBtn = document.getElementById("startTimer");

let num1 = 0;
let num2 = 0;
let num3 = 0;

let time1 = document.getElementById("nowTime");
time1.textContent = `${num1}`;
console.log(time1);
let time2 = document.getElementById("nowTime2");
time2.textContent = `${num2}`;

let time3 = document.getElementById("nowTime3");
time3.textContent = `${num3}`;
//　　スタートボタンを押したときの関数の定義
//    スタートボタン押し３つの数値を１～９表示させる
//　　numに＋１ずつ足していく
//　　その後９になったら0に表示したいのでー１する
//　　上記の処理が同時に行われる

let number1;
startBtn.addEventListener("click", function () {
  clearInterval(number1);
  stopBtn1.disabled = false;
  number1 = setInterval(function () {
    num1 = num1 + 1;
    time1.textContent = num1;
    if (num1 === 9) {
      num1 = -1;
    }
  }, 100);
});

let number2;
startBtn.addEventListener("click", function () {
  clearInterval(number2);
  stopBtn2.disabled = false;
  number2 = setInterval(function () {
    num2 = num2 + 1;
    time2.textContent = num2;
    if (num2 === 9) {
      num2 = -1;
    }
  }, 100);
});

let number3;
startBtn.addEventListener("click", function () {
  clearInterval(number3);
  stopBtn3.disabled = false;
  number3 = setInterval(function () {
    num3 = num3 + 1;
    time3.textContent = num3;
    if (num3 === 9) {
      num3 = -1;
    }
  }, 100);
});

//➋ストップボタンの取得、ストップボタン押した時の関数の定義

let stopBtn1 = document.getElementById("setTime1");
let stopBtn2 = document.getElementById("setTime2");
let stopBtn3 = document.getElementById("setTime3");

stopBtn1.addEventListener("click", function () {
  console.log(time1.textContent);
  stopBtn1.disabled = true;
  clearInterval(number1);

  //ストップボタンの1～3のdisabledがすべてtrueになった場合以下の処理が実行される
  if (
    stopBtn1.disabled === true &&
    stopBtn2.disabled === true &&
    stopBtn3.disabled === true
  ) {
    if (
      time1.textContent === time2.textContent &&
      time3.textContent === time1.textContent
    ) {
      confirm("おめでとう");
    } else {
      confirm("再挑戦");
    }
  }
});
console.log(time1);
stopBtn2.addEventListener("click", function () {
  console.log(time2.textContent);
  stopBtn2.disabled = true;
  clearInterval(number2);

  if (
    stopBtn1.disabled === true &&
    stopBtn2.disabled === true &&
    stopBtn3.disabled === true
  ) {
    if (
      time1.textContent === time2.textContent &&
      time3.textContent === time1.textContent
    ) {
      confirm("おめでとう");
    } else {
      confirm("再挑戦");
    }
  }
});

stopBtn3.addEventListener("click", function () {
  console.log(time3.textContent);
  stopBtn3.disabled = true;
  clearInterval(number3);

  if (
    stopBtn1.disabled === true &&
    stopBtn2.disabled === true &&
    stopBtn3.disabled === true
  ) {
    if (
      time1.textContent === time2.textContent &&
      time3.textContent === time1.textContent
    ) {
      confirm("おめでとう");
    } else {
      confirm("再挑戦");
    }
  }
});
