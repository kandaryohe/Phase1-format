//5×6のマスを作る
//一番上の段はBINGO、、真ん中はfree

const bingoView = document.querySelector(".view");

//１段目
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

//２段目
const line2 = document.createElement("tr");
view.appendChild(line2);

const item6 = document.createElement("td");
item6.textContent = "";
line2.appendChild(item6);

const item7 = document.createElement("td");
item7.textContent = "";
line2.appendChild(item7);

const item8 = document.createElement("td");
item8.textContent = "";
line2.appendChild(item8);

const item9 = document.createElement("td");
item9.textContent = "";
line2.appendChild(item9);

const item10 = document.createElement("td");
item10.textContent = "";
line2.appendChild(item10);

//３段目
const line3 = document.createElement("tr");
view.appendChild(line3);

const item11 = document.createElement("td");
item11.textContent = "";
line3.appendChild(item11);

const item12 = document.createElement("td");
item12.textContent = "";
line3.appendChild(item12);

const item13 = document.createElement("td");
item13.textContent = "";
line3.appendChild(item13);

const item14 = document.createElement("td");
item14.textContent = "";
line3.appendChild(item14);

const item15 = document.createElement("td");
item15.textContent = "";
line3.appendChild(item15);

//４段目
const line4 = document.createElement("tr");
view.appendChild(line4);

const item16 = document.createElement("td");
item16.textContent = "";
line4.appendChild(item16);

const item17 = document.createElement("td");
item17.textContent = "";
line4.appendChild(item17);

const item18 = document.createElement("td");
item18.textContent = "free";
line4.appendChild(item18);

const item19 = document.createElement("td");
item19.textContent = "";
line4.appendChild(item19);

const item20 = document.createElement("td");
item20.textContent = "";
line4.appendChild(item20);

//５段目
const line5 = document.createElement("tr");
view.appendChild(line5);

const item21 = document.createElement("td");
item21.textContent = "";
line5.appendChild(item21);

const item22 = document.createElement("td");
item22.textContent = "";
line5.appendChild(item22);

const item23 = document.createElement("td");
item23.textContent = "";
line5.appendChild(item23);

const item24 = document.createElement("td");
item24.textContent = "";
line5.appendChild(item24);

const item25 = document.createElement("td");
item25.textContent = "";
line5.appendChild(item25);

//６段目
const line6 = document.createElement("tr");
view.appendChild(line6);

const item26 = document.createElement("td");
item26.textContent = "";
line6.appendChild(item26);

const item27 = document.createElement("td");
item27.textContent = "";
line6.appendChild(item27);

const item28 = document.createElement("td");
item28.textContent = "";
line6.appendChild(item28);

const item29 = document.createElement("td");
item29.textContent = "";
line6.appendChild(item29);

const item30 = document.createElement("td");
item30.textContent = "";
line6.appendChild(item30);

//Bの列には1～15
//Iも列には16～30
//Nの列には31～45
//Gの列には46～60
//Oの列には61～75
//それぞれ更新したら毎回ランダムに表示

//１行目
//let bingoNum = Math.floor(Math.random() * 15) + 1;
//item6.innerHTML = bingoNum;
let bingoNum = [item6, item11, item16, item21, item21];
function getRandom() {
  let randomNumber = Math.floor(Math.random() * 15) + 1;
  bingoNum.textContent = randomNumber;
}
