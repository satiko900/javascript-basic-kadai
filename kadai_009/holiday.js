// 配列の宣言・値を代入
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

console.log(holidays);

let i = 0;

while (i < holidays.length) {
  let s = 0;
  s++;
  console.log(holidays[i]);
  console.log(holidays[s]);
  i++;
}

console.log('今のカウント: ' + i);


for (let j =0; j < holidays.length; j++) {
  console.log(j);
}


let age = 0;
const childLimitAge = 18;
// 18才まではチケットが買える
while(age <= 18) {
  console.log(age + '才なのでチケットが買えます。');
}

