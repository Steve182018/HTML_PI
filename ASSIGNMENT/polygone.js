let n = 4
let result = 0;
for (let i = 0; i < n; i++) {
    if (i === 0) {
        result = 1
    }
    else {
        result = result + (i * 4);

    }
}
console.log(result)
