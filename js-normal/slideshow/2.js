//4 つの変数にそれぞれの季節の画像のパスとボタン用の文字を宣言
let imgNum = 0;
const data = [
  { img: "./img/slide1.png", text: "春へ" },
  { img: "./img/slide2.png", text: "夏へ" },
  { img: "./img/slide3.png", text: "秋へ" },
  { img: "./img/slide4.png", text: "冬へ" },
];
//ボタンを押したらボタンの文字をオブジェクトの配列のtextの中身に書き換える
//bottunを DOM で取得してクリックした時に実行される関数をセット
//ページを開いた時にもボタンの文字が表示されるようにする
//ボタンと同じように最初から写真を表示した上でボタンを押したら写真を変更できるようにする
const pushBtn = document.getElementById("pushBtn");
const imgSection = document.getElementById("viewImg");
pushBtn.textContent = data[imgNum].text;
imgSection.setAttribute("src", data[imgNum].img);

pushBtn.addEventListener("click", function () {
  if (imgNum === 3) {
    imgNum = 0;
  } else {
    imgNum += 1;
  }
  imgSection.setAttribute("src", data[imgNum].img);
  pushBtn.textContent = data[imgNum].text;
});
