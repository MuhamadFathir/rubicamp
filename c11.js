
const quest = require("./data.json")



const { createInterface } = require('node:readline');
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tebakan:',
});
console.log("pertanyaan :", quest[0].definition)

rl.prompt();

rl.on('line', (line) => {
    if (line == quest[0].term){
        console.log("Selamat Anda Benar!")
        console.log("pertanyaan :", quest[1].definition)
    }else if (line == quest[1].term){
        console.log("Selamat Anda Benar!")
        console.log("pertanyaan :", quest[2].definition)
    }else if(line == quest[2].term){
        console.log("Selamat Anda Benar!")
        rl.close()
    }else{
        console.log("wkwkwk, Anda kurang beruntung!")
    }
 
  rl.prompt();
}).on('close', () => {
  console.log('Hore Anda Menang');
  process.exit(0);
});