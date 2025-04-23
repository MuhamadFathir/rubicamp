const { createInterface } = require('node:readline');
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini> ',
});

rl.prompt();

rl.on('line', (line) => {
  let hasil = []
    let test = line.split(" ")
    for (let i = 0; i < test.length; i++) {
        if ("aiueo".includes(test[i][0].toLowerCase())) {
            hasil.push(test[i])
        } else {
            hasil.push(test[i].slice(1).concat(test[i][0], "nyo"))
        }

    }
    console.log("hasil konversi :", hasil.toString().replace(/,/g, " "))
  rl.prompt();
}).on('close', () => {
  console.log('Good Bye!');
  process.exit(0);
});
