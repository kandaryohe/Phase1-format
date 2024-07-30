//文字列
console.log("Hello,world!");
console.log("ありがとう");

//数値
console.log(100);
console.log(1.5);

//配列
console.log([1, 2, 3, 4, 5]);

//真偽値
console.log(true);
console.log(false);

//オブジェクト
console.log({ one: 1, two: 2 });

//変数
const myName = "kanda";
//const 名前＝値
console.log(myName);
//変数myNameに値'kanda'を代入する

const number = 100;
const isVAlid = true;
const userIds = [1, 3, 10];

console.log(number);
console.log(isVAlid);
console.log(userIds);

let learning = "javaScript";
//constは変数を必ず初期化する必要がある
//letは初期化しなくてもok
//constは再代入はできない
//letは再代入できる
learning = "Ruby";

console.log(learning);

//文字列処理
("I'm kanda ryohe.");

//文字列の結合
const breakfast = "トースト";

console.log("今日の朝ご飯は" + breakfast + "でした。\nとても美味しかった。");

//テンプレート文字列
console.log(`今日の朝ごはんは${breakfast}でした。
とても美味しかった。 `);

//配列
const days = ["日", "月", "火", "水", "木", "金", "土"];
//数え方は0からなので水になる

console.log(days[3]); //→[]の中にインデックスを指定して配列の要素を所得
console.log(["日", "月", "火", "水", "木", "金", "土"].length);
console.log(days.length);

//配列の操作
const nengou = ["明治", "大正", "昭和", "平成"];
console.log(nengou);

//要素の追加
nengou.push("令和");
console.log(nengou);

nengou.splice(3, 1); //配列.splice(削除したい要素のインデックス、削除したい要素の個数)

console.log(nengou);

nengou[2] = "showa";
console.log(nengou);

//条件分岐
const num = Math.random();

if (num >= 0.5) {
  console.log("大きめ");
  //numが0.5以上である場合
} else {
  console.log("小さめ");
}

console.log(`数: ${num}`);
