function cetakAngka(n) {
  let hasil = [];
  let num1 = 0
  let num2 = 0
  for (let i = 1; i <= n; i++) {
    num1 = (6 * i) - 1
    hasil.push(num1)
  }

  for (let i = 1; i <= n; i++) {
    num2 = (6 * i) + 1
    hasil.push(num2);
  }

  return hasil
}

// console.log di luar fungsi

console.log(cetakAngka(10));
