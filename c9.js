function spiral(param1) {
    let arr = []
    let num = 1
    for (let i = 0; i <= param1; i++) {
        arr[i] = []
        for (let j = 0; j < param1; j++) {
            arr[i][j] = num
            num++
        }
    }
    console.log(arr)
}

spiral(6)