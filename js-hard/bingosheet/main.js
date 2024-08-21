//5×6のマスを作る
//一番上の段はBINGO、、真ん中はfree
//Bの列には1～15
//Iも列には16～30
//Nの列には31～45＋真ん中はfree
//Gの列には46～60
//Oの列には61～75
//それぞれ更新したら毎回ランダムに表示

const bingoview = document.querySelector(".view");

const item1 = document.createElement("td");
item1.textContent = "B";
view.appendChild(item1);

const item2 = document.createElement("td");
item2.textContent = "I";
view.appendChild(item2);

const item3 = document.createElement("td");
item3.textContent = "N";
view.appendChild(item3);

const item4 = document.createElement("td");
item4.textContent = "G";
view.appendChild(item4);

const item5 = document.createElement("td");
item5.textContent = "O";
view.appendChild(item5);

//<tr>
//<td>John</td>
//<td>Doe</td>
//</tr>
//<tr>
//<td>Jane</td>
//<td>Doe</td>
//</tr>
