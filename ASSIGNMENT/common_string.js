let string1 = "aabcc";
let string2 = "adcaa";

let temp = ""
const split1 = string1.split("");
const split2 = string2.split("");

let count = 1;

const res = split1.filter((item) => {
    for (let i = 0; i <= split2.length; i++) {
        if (split2[i] === item) {
            delete split2[i];
            return item;
        }
    }
})
console.log("Matched Chars:",res);
console.log("Matched Chars Length:",res.length)

let n1 = []
let n2 = []

for (let i = 0; i < res.length; i++) {
    let c = 0;
    for (let j = i; j < res.length; j++) {
        if (res[i] === res[j]) {
            c++;
        }
    }

    n1.push(c);
    n2.push(res[i])
}
console.log(n1, n2);
console.log(res)