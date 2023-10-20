const array = ["abaa", "aa", "ad", "vcd", "aba"];

let maxLength = 0;

const output = [];

for (let i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
        maxLength = array[i].length
    }
}
console.log(maxLength);
for (let i = 0; i < array.length; i++) {
    if (array[i].length === maxLength) {
        output.push(array[i]);
    }
}
console.log(output);

