function cetakAngka(n) {
  let hasil = [];

  for (let i = 2; i <= n; i++) {
    hasil.push(i);
  }

  return hasil;
}

// console.log di luar fungsi

console.log(cetakAngka(4));
