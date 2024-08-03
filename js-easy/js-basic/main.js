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

//! 8月2日学習記録

//条件分岐
const num = Math.random();

if (num >= 0.5) {
  //原則if文は条件式がtrueの場合実行される
  //文字列数値などは実行される
  //0、""、falseなどの条件式でfalseとみなされる値は実行されない
  console.log("大きめ");
  //numが0.5以上である場合
} else {
  console.log("小さめ");
}

console.log(`数: ${num}`);

//条件式
const a = 4;
const b = 5;
const c = 7;
const d = 7;

console.log(a === b);
console.log(a === b && c === d); //左辺がtrueかつ右辺がtrueの場合trueになる
console.log(a === b || c === d); //左辺がtrueまたは右辺がtrueの場合trueになる
console.log(!(a === b)); //真偽値が逆転する　trueならfalse falseならtrue

//条件式
for (let i = 0; i < 10; i++) {
  //iという変数に0を代入
  //条件が合致する限り処理される、i<10は満たしているか、満たしている場合は終了
  //条件が合致する場合繰り返し更新される、iに1加算代入する
  //コンソールに0から9までの値を表示する
  console.log(i);
}
//for(初期化処理; 継続処理； 更新処理；）　セミコロンで区切る

//while文

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//関数（処理をまとめて名前を付けるもの）

//定義
function cook(food1, food2) {
  //←（foodは引数）
  console.log(food1);
  console.log(food2);
} //関数を作成しメモリに用意しただけ

//function 関数（引数）
//実行(呼び出し)
//関数を実行する際は、関数に()をつける
cook("生姜焼き", "カレー");

//関数を一度作成すれば、何度でも呼びだすことが可能
//引数を用いて実行時に任意の値を呼び出せる
//関数の戻り値
function applyTax(price) {
  console.log(price * 1.1); //TODO: 消費税（１０％）込みの金額を出力する
  return price * 1.1;
}

const result1 = applyTax(1000);
const result2 = applyTax(580);

//上の結果を合計したい
console.log(applyTax(1000) + applyTax(580));
console.log(result1 + result2);
//return　戻り値→合計
//戻り値を指定して、っ関数内の任意の値を別の場所（コンテクスト）で使用することができる

//8月3日
function bar() {
  console.log;
}
