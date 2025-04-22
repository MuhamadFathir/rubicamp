function spiral(size) {
    let matrix = []
    let num = 0
    for (let i = 0; i < size; i++) {
        matrix[i] = []
        for (let j = 0; j < size; j++) {
            matrix[i][j] = num
            num++
        }
    }

    let atas = size
    let bawah = 0
    let result = []
    let x = 0, y = 0
    while (result.length < size * size) {


        // result.push(matrix)
        for (; x < atas; x++) {
            result.push(matrix[y][x])
        }

        x--
        y++
        for (; y < atas; y++) {
            result.push(matrix[y][x])
        }
        y--
        x--

        for (; x >= bawah; x--) {
            result.push(matrix[y][x])
        }
        
        x++
        y--

        for (; y > bawah; y--) {
            result.push(matrix[y][x])
        }
        x++
        y++
        atas--
        bawah++
    }
    console.log(result)
}

spiral(5)
spiral(6)
spiral(7)