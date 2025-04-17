function weirdMultiply(sentence) {
    let num = 1 //3
    let result = sentence.toString()
    for (let i = 0; i < result.length; i++) {
        num *= result[i]
    }
    if (result < 10) {
        return num
    } else {
        return weirdMultiply(num)
    }

    
}

console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))