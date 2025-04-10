function romawi(n) {
    if (n < 1) return "";
    if (n >= 1000) return "M" + romawi(n - 1000);
    if (n >= 900) return "CM" + romawi(n - 900);
    if (n >= 500) return "D" + romawi(n - 500);
    if (n >= 400) return "CD" + romawi(n - 400);
    if (n >= 100) return "C" + romawi(n - 100);
    if (n >= 90) return "XC" + romawi(n - 90);
    if (n >= 50) return "L" + romawi(n - 50);
    if (n >= 40) return "XL" + romawi(n - 40);
    if (n >= 10) return "X" + romawi(n - 10);
    if (n >= 9) return "IX" + romawi(n - 9);
    if (n >= 5) return "V" + romawi(n - 5);
    if (n >= 4) return "IV" + romawi(n - 4);
    if (n >= 1) return "I" + romawi(n - 1);
  }
  
  console.log("Script Testing untuk Konversi Romawi\n");
  console.log("input  | expected  | result");
  console.log("------ | --------  | ------");
  console.log("4      | IV        |", romawi(4));
  console.log("9      | IX        |", romawi(9));
  console.log("13     | XIII      |", romawi(13));
  console.log("1453   | MCDLIII   |", romawi(1453));
  console.log("1646   | MDCXLVI   |", romawi(1646));
  