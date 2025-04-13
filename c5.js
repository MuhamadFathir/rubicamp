function stringManipulation(word) {
    if (word.startsWith("a", "i", "u", "e", "o")) {
        console.log(word)
    } else {
        console.log(word.slice(1).concat(word[0], "nyo"))
    }

}

stringManipulation("ikan")
stringManipulation("bebek")