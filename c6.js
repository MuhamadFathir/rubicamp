
function sentencesManipulation(sentence) {
    let hasil = []
    let test = sentence.split(" ")
    for (let i = 0; i < test.length; i++) {
        if ("aiueo".includes(test[i][0].toLowerCase())) {
            hasil.push(test[i])
        } else {
            hasil.push(test[i].slice(1).concat(test[i][0], "nyo"))
        }

    }
    console.log(hasil.join(" "))
}

sentencesManipulation("ibu pergi ke pasar bersama aku")