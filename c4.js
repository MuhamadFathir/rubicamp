function isPrime(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            result += 1
        }
    }
     if(result == 2){
        return true
     }else{
        return false
     }
}

// console.log(isPrime(1))
// console.log(isPrime(17))
// console.log(isPrime(51))




function indexPrime(param1) {
    for(let i = 1; i <= param1; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}
indexPrime(20)
// console.log(indexPrime(5))
// console.log(indexPrime(4))
// console.log(indexPrime(500))
// console.log(indexPrime(37768))