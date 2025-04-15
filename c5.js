function stringManipulation(word) {
    if ("aiueo".includes(word[0].toLowerCase())) {
        console.log(word)
    } else {
        console.log(word.slice(1).concat(word[0], "nyo"))
    }

}
stringManipulation("ikan dan ayam")
stringManipulation("ayam")
stringManipulation("bebek dan anjing")