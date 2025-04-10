function jumlahkanAngka(n) {
  const angka = []
  let total = 1;

  for (let i = 0; i < n.length; i++) {
    total *= n[i]
  }

  return total
}

console.log(jumlahkanAngka(10)); // Output: undefined ❌
