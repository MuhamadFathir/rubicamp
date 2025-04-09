function deretKaskus(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
    let num = i * 3
    if (num % 5 === 0 && num % 6 === 0) {
      result.push("KASKUS")
    }else if(num % 5 === 0){
      result.push("KAS")
    }else if(num % 6 === 0){
      result.push("KUS")
    }else {
      result.push(num)
    }
  }
  return result
}

console.log(deretKaskus(10))