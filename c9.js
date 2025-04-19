function spiral(param1) {
    let arr = []
    let num = 0
    for (let i = 0; i < param1; i++) {
        for (let j = 0; j < param1; j++) {
            arr.push([i][j] = num)
            num++
        }
    }
    console.log(arr)
}

spiral(5)