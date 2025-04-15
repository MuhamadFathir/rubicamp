function stringManipulation(word) {
    if ("aiueo".includes(word[0].toLowerCase())) {
        return word
    } else {
        return word.slice(1).concat(word[0], "nyo")
    }

}


function sentencesManipulation(sentence) {
    let hasil = []
    let test = sentence.split(" ")
    for (let i = 0; i < test.length; i++) {
        hasil.push(stringManipulation(test[i]))
    }
    console.log(hasil.toString().replace(/,/g, " "))
}

sentencesManipulation("ibu pergi ke pasar bersama aku")