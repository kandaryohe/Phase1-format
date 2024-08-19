//タイマー設定
//日付選択
//要素の追加
//日時などの関数の定義
//日時の表示

let timer;
const will = moment("2112-09-03 12:00");

const dora = document.createElement("p");
const body = document.querySelector("body");
body.appendChild(dora);

function count() {
  let date = moment();
  let sec = will.diff(date, "second") % 60;
  let minute = will.diff(date, "minute") % 60;
  let hour = will.diff(date, "hour") % 24;
  let day = will.diff(date, "days");
  dora.textContent = `ドラえもんが生まれるまで後${day}日${hour}時間${minute}分${sec}秒`;
}

count();
timer = setInterval("count()", 1000);
