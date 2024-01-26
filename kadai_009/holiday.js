// 配列の宣言・値を代入
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// while文で記述
// カウンタ変数の初期値を宣言・代入
let i = 0;

while (i < holidays.length) {
  console.log(holidays[i]);
  i++;
}

// 改行
console.log('　');

// for文で記述
for (let j =0; j < holidays.length; j++) {
  console.log(holidays[j]);
}



