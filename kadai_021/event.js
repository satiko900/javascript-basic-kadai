// textというidを持つHTML要素を取得し、定数に代入
let Text = document.getElementById('text');
// btnというidを持つHTML要素を取得し、定数に代入
const Btn = document.getElementById('btn');
// NTML要素(btn)がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
  setTimeout(() => {
    Text.textContent = 'ボタンをクリックしました';
    console.log(Text.textcontent);
  }, 2000);
});

