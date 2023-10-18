let arr_matrix = [
    [0,1,1,2],
    [0,5,0,0],
    [2,0,3,3]
]

let total =0;

for(let i =0; i< arr_matrix.length;i++){
    for(let j=0;j< arr_matrix[i].length; j++){
        if (arr_matrix[i][j] !== 0 && (i === 0 || arr_matrix[i - 1][j] !== 0)) {
            total = total + arr_matrix[i][j]
        }
    }
}

console.log(total)