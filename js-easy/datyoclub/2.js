//何回押したかカウントするボタンを作成

//➊回数の低義
let cntPerson = 0;

//➋階数を数える関数
const cntUp = function () {
  cntPerson += 1;
  console.log(cntPerson); //実際に出力
};

//➌作成した関数をbuttonの属性のonclickにセット
//↑ＨＴＭＬにセット

//➍カウントされた分だけ同じ文字列を生成
//➎どうぞのボタンが押されたらカウントを0にする
const reply = function () {
  const str = "どうぞどうぞ";
  const action = str.repeat(cntPerson);
  alert(action);
  cntPerson = 0;
};

const cntDown = function () {
  cntPerson -= 1;
  if (cntPerson < 0) {
    alert("もう誰もいない、、、");
    cntPerson = 0;
  }
};
