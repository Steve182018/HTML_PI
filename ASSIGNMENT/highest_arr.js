function mul(arr) {
    let maxmul = 0;

    for (let i = 1; i < arr.length - 1; i++) {
        let curmul = arr[i] * arr[i + 1];
        // console.log("Current",curmul);
        maxmul = Math.max(maxmul, curmul);
    }
    return maxmul;
}

let arr = [3, 6, -2, -5, 7, 3];
let result = mul(arr);
console.log("Answer",result); 
