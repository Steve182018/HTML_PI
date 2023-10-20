const a = [
    [true, false, false],
    [false, false, false],
    [false, false, false]
];

const res = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let count = 0;
console.log("a", a);
console.log("resp", res);

const myadj = ([i, j]) =>
    [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
    ]

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        if (a[i][j] === true) {
            let adj = myadj([i, j])
            for (let k = 0; k < 8; k++) {
                if (adj[k][0] >= 0 && adj[k][1] >= 0 && adj[k][0] < a.length && adj[k][1] < a[i].length) {
                    res[adj[k][0]][adj[k][1]]++;
                }
            }
        }
    }
}
for (let i = 0; i < a.length; i++) {
    console.log(res[i])
}
