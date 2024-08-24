// //１段目
const line1 = document.createElement("tr");
view.appendChild(line1);

const item1 = document.createElement("td");
item1.textContent = "B";
line1.appendChild(item1);

const item2 = document.createElement("td");
item2.textContent = "I";
line1.appendChild(item2);

const item3 = document.createElement("td");
item3.textContent = "N";
line1.appendChild(item3);

const item4 = document.createElement("td");
item4.textContent = "G";
line1.appendChild(item4);

const item5 = document.createElement("td");
item5.textContent = "O";
line1.appendChild(item5);

//Bの列には1～15
//Iも列には16～30
//Nの列には31～45
//Gの列には46～60
//Oの列には61～75
//それぞれ更新したら毎回ランダムに表示

let numArr = []; //５つの数字を生成していれる処理を５回繰り返した
for (let i = 1; i <= 5; i++) {
  let randomNumArr = []; //５つの数字を生成していれる
  while (randomNumArr.length < 5) {
    let bingoNum =
      Math.floor(Math.random() * (15 * i - 15 * (i - 1))) + 15 * (i - 1) + 1;

    //重複を避ける処理を追加
    //randomNumArrにbingoNumがすでに含まれているかを確認
    if (randomNumArr.includes(bingoNum) === false) {
      randomNumArr.push(bingoNum);
    }
    console.log(randomNumArr);
    numArr.push(randomNumArr);
  }
}

//幹　table、枝　tr、葉　td
//親に子供を付ける
//親.appendChild(子)
// const line6 = document.createElement("tr");
// view.appendChild(line6);

const bingoView = document.querySelector(".view");

//マス目を５個作成する処理を５回まで繰り返す
let masuss = [];
for (let i = 0; i < 5; i++) {
  let masus = [];
  while (masus.length < 5) {
    let masu = document.createElement("td");
    masus.push(masu);
    masuss.push(masus);
  }
}
console.log(masuss);

//行を５つ作成する処理を５回繰り返す
let gyouss = [];
for (let i = 0; i < 5; i++) {
  let gyous = [];
  while (gyous.length < 5) {
    let gyou = document.createElement("tr");
    gyous.push(gyou);
    gyouss.push(gyous);
  }
}
console.log(gyouss);
