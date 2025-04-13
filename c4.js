function isPrime(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            result += 1
        }
    }
    if (result == 2) {
        return true
    } else {
        return false
    }
}

function indexPrime(param1) {
    let counter = 0
    for (let i = 1; i >= 0; i++) {
        if (isPrime(i)) {
            counter++
        }
        if (counter === param1) {
            return i
        }
    }
}
// indexPrime(20)
console.log(indexPrime(4))
console.log(indexPrime(10))
console.log(indexPrime(500))
console.log(indexPrime(37768))