//body要素とhtmlで付与したbtnを取得
const startBtn = document.getElementById("diceBtn");
const body = document.querySelector("body");

//次にサイコロの画像を載せるimgを作成します。
//HTML要素を追加する
const dice = document.createElement("img");

//上記lのものをbodyタグに追加する
//cssも指定する
body.appendChild(dice);
dice.width = "100px";
dice.height = "100px";

//ページをロードした際にサイコロの１が表示されるようにすうる

//画像のパスを入れる変数を定義する
//diceのsrc属性に入れる
let diceNum = "./img/saikoro1.png";

dice.setAttribute("src", diceNum);

//サイコロの目の画像をランダムで表示させる関数を作成する
//画像のパスの./img/saikoro?.pngの?の部分の数字をランダムで変える事でマスの画像を変更
//それをdiceのsrc属性に入れて画像を更新する
const random = function () {
  diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
  dice.setAttribute("src", diceNum);
};

//上記の関数を、ボタンをクリックしたら、0.1秒ごとに実行されるようにする
//取得したボタンのIDにイベントリスナーを使用しクリックされた時に0.1秒ごとにrandom関数を呼び出す
startBtn.addEventListener("click", function () {
  let timer = setInterval("random()", 100);

  //起動した0.1秒ごとに繰り返されている関数を３秒後に止める処理を記述
  //0.1秒毎に実行されている関数を止めるプログラムを書く
  //次に書いたプログラムを３秒後に実行されるように書く
  //これらをstartBtnに書き足す
  setInterval(() => {
    clearInterval(timer);
  }, 3000);
});
