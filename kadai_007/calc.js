// 変数(num)に1以上の正の数を代入
let num = 6;

// 変数(num)を出力（確認用）
console.log (num);

// 変数(num)の値が3と5の倍数の場合、「3と5の倍数です」という文字列を出力
if ((num % 3) === 0 && (num % 5) === 0) {
  console.log ('3と5の倍数です');
}



// 変数(num)の値が3の倍数の場合、「3の倍数です」という文字列を出力
else if ((num % 3) === 0) {
  console.log ('3の倍数です');
}



// 変数(num)の値が5の倍数の場合、「5の倍数です」という文字列を出力
else if ((num % 5) === 0) {
  console.log ('5の倍数です');
}

// それ以外の場合は変数(num)を出力
else {
  console.log (num);
}

