

let random = 'abcdefghijklmnopqrstuvwxyz0123456789'
let result = ''
for (let i = 0; i < 10; i++) {
  result += huruf[Math.floor(Math.random() * huruf.length)];

}
console.log(result);


