
if(!process.argv[2]){
    console.log("Harus di isi!!!")
    process.exit(0);
}
const quest = require(`../c12/${process.argv[2]}`)

const { createInterface } = require('node:readline');
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tebakan:',
});

let count = 1 // salah
let num = 0 //urutan array
console.log("pertanyaan :", quest[num].definition)
rl.prompt();

rl.on('line', (line) => {
    if (line == quest[num].term) {
        console.log("Selamat Anda Benar!")
        num++
        if (num == quest.length) {
            rl.close()
        }
        count = 1
        console.log("pertanyaan :", quest[num].definition)

    } else if (line == "skip") {
        quest.push(quest[num])
        num++
        console.log("pertanyaan :", quest[num].definition)
        count = 1
    } else {
        console.log(`Anda kurang beruntung! anda telah salah ${count} kali, silahkan coba lagi`)
        count++
    }


    rl.prompt();
}).on('close', () => {
    console.log('Hore Anda Menang');
    process.exit(0);
});