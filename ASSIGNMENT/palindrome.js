
let str = "aabb"

const temp = str.split('');
temp.sort();

let count = 0;

let out = "";


for (let i = 0; i < temp.length; i++) {
    let c = 0;

    for (let j = 0; j < temp.length; j++) {
        if (i !== j) {
            if (temp[i] === temp[j]) {
                c++;
            }
        }
    }
    if (c == 0) {
        count++;
    }
}
if (count <= 1) {
    out = "true"
}
else {
    out = "false";
}

console.log(out)
