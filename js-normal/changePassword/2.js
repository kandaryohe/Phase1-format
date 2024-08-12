//今のパスワードを表示する要素を取得し、現在のパスワードを保持する変数を定義
//新しいパスワードを古いパスワードに再代入するのでconstではなくletを使用
const nowPassword = document.getElementById("nowPassword");
let PasswordValue = "aaaaa";

//現在のパスワードを画面に表示させ設定したパスワードを取得した要素で表示
nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;

//ボタンを押したら 2 つのテキストボックスから文字を受け取りセットできるようにする
//新しくセットしたパスワードを表示させるには古いパスワードに新しいパスワードを代入する必要がある
//代入する処理と画面に表示する処理をを加える
//もし現在のパスワードを確認する時に違うパスワードを入力しても変更できないようにする
//そして間違ってる旨を、また正しい時は新しいパスワードをアラートで表示
const setPassword = document.getElementById("setPassword");
setPassword.addEventListener("click", function () {
  const confirmPassword = document.getElementById("confirmPassword").value;
  const newPassword = document.getElementById("newPassword").value;
  if (PasswordValue === confirmPassword) {
    if (PasswordValue !== newPassword) {
      PasswordValue = newPassword;
      nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
      alert(`新しいパスワードは ${PasswordValue}です`);
    } else {
      alert("同じパスワードはつかえません！");
    }
  } else {
    alert("古いパスワードが間違っています！");
  }
});
