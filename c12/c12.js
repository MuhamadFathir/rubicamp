

const { error } = require("node:console");
const quest = require(`../c12/${process.argv[2]}`)

const { createInterface } = require('node:readline');
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tebakan:',
});
// console.log("pertanyaan :", quest[0].definition)
let count = 1
let num = 0
console.log("pertanyaan :", quest[num].definition)
rl.prompt();

rl.on('line', (line) => {
    if (line == quest[num].term) {
        console.log("Selamat Anda Benar!")
        num++
        if (num === 3) {
            rl.close()
            i++
        }
        count = 1
        console.log("pertanyaan :", quest[num].definition)
    } else {
        console.log(`Anda kurang beruntung! anda telah salah ${count} kali, silahkan coba lagi`)
        count++
    }


    rl.prompt();
}).on('close', () => {
    console.log('Hore Anda Menang');
    process.exit(0);
});