function romawi(n) {
    if (n >= 1000) return "M" + romawi(n - 1000)
    if (n >= 900) return "CM" + romawi(n - 900)
    if (n >= 500) return "D" + romawi(n - 400)
    if (n >= 400) return "CD" + romawi(n - 400)
    if (n >= 100) return "C" + romawi(n - 100)
    if (n >= 90) return "XC" + romawi(n - 90)
    if (n >= 50) return "L" + romawi(n - 50)
    if (n >= 40) return "XL" + romawi(n - 40)
    if (n >= 10) return "X" + romawi(n - 10)
    if (n >= 9) return "IX" + romawi(n - 9)
    if (n >= 5) return "V" + romawi(n - 5)
    if (n >= 4) return "IV" + romawi(n - 4)
    if (n >= 1) return "I" + romawi(n - 1)
    if (n < 1) return ""
}
console.log(romawi(10))
// console.log(romawi(2))
// console.log(romawi(3))
// console.log(romawi(4))
// console.log(romawi(5))
// console.log(romawi(6))
// console.log(romawi(7))
// console.log(romawi(8))
// console.log(romawi(9))
// console.log(romawi(10))
// console.log(romawi(11))
// console.log(romawi(12))

// console.log(romawi(39))
// console.log(romawi(40))
// console.log(romawi(41))
// console.log(romawi(42))
// console.log(romawi(43))
// console.log(romawi(44))
// console.log(romawi(1001))