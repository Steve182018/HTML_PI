const edge1 = [
    [0, 1],
    [1, 2],
    [3, 4]
];
const edge2 = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4]
];

let n = 5;
function count(arr) {
    let temp;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === 0 && j === 0) {
                count++;
            }
            else {
                if (j === 0 && temp !== arr[i][j]) {
                    count++
                }
            }
            temp = arr[i][j];
        }
    }
    return count;
}
console.log(count(edge1));
console.log(count(edge2));
