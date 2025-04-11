function romawi(n) {
    const angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const simbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let hasil = "";

    for (let i = 0; i < angka.length; i++) {
        while (n >= angka[i]) {
            hasil += simbol[i];
            n -= angka[i];
        }
    }

    return hasil;
}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input  | expected  | result");
console.log("------ | --------  | ------");
console.log("4      | IV        |", romawi(6));
console.log("9      | IX        |", romawi(7));
console.log("13     | XIII      |", romawi(8));
console.log("1453   | MCDLIII   |", romawi(9));
console.log("1646   | MDCXLVI   |", romawi(10));
