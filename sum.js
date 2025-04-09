function deretKaskus(n) {
  let num = []

  for (let i = 1; i <= n; i++) {
    num.push(i * 3)
    if (num % 5 === 0 && num % 6 === 0) {

    }
  }
  return num
}

console.log(deretKaskus(10))