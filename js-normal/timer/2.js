//秒数を表示する要素を取得し時間を定義、初期設定は 10 秒
const nowTime = document.getElementById("nowTime");
let sec = 10;

//セットボタンの要素を取得しクリックされた時に関数が実行されるようにし関数はsetTime仁書く
const setTime = document.getElementById("setTime");

setTime.addEventListener("click", function () {
  sec = document.getElementById("inputTime").value;
  nowTime.textContent = `${sec}:セット完了です`;
});

//セットした数字のカウントダウンを始め最初に 1 秒ごとに起きる以下の処理を新しい関数内に書く
//一秒ごとに数字が減っていく、残りの秒数を書き換える
//残り時間が 0 秒になったら処理をストップさせてアラートで「終了」それと一緒にタイマーも止める
const countDown = function () {
  sec -= 1;
  nowTime.textContent = sec;
  if (sec === 0) {
    alert("終了");
    clearInterval(timer);
  }
};

//スタートボタンを押したら１秒毎に呼び出す
//タイマーが２回起動しないようにclearIntervalを使う
let timer;
const startTimer = document.getElementById("startTimer");

startTimer.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval("countDown()", 1000);
});

//ストップボタンでタイマーを止める
//タイマーを止めたら残りの秒数に加えて「ストップしました」と表示
const stopTimer = document.getElementById("stopTimer");
stopTimer.addEventListener("click", function () {
  clearInterval(timer);
  nowTime.textContent = `${sec} + :ストップしました`;
});
