var arr = [0, 1, 2, 3, 5, 2]

let repeat 
sort_arr = arr.sort(function (a, b) { return a - b });
console.log(sort_arr)

let dif = 0

for (let i = 0; i < sort_arr.length; i++) {
    dif = arr[i + 1] - arr[i]
    if (dif == 0) {
        repeat = arr[i]
    }
}
console.log(repeat)


// const a =[0, 1, 2, 3, 5, 2];
// let inte = 3;

//     let out = "false"
    
//         for(let i = 0 ; i < a.length ; i++){
//             for(let j = i + inte ; j == i + inte ; j++){
//                 if(a[i] === a[j]){
//                     out = "true";
//                 }
//             }
//         }
// console.log(out);


// let res = arr.includes(2)
// console.log(arr.indexOf(res))
// for(let j=0;j<arr.length;j++){
    
// }

// const charCount = {};
// let dif, res;
// for (const char of arr) {
//     charCount[char] = (charCount[char] || 0) + 1;
// }

// console.log(charCount)

// for (const count of Object.values(charCount)) {
//     if (count > 1) {
//         for (let i = 0; i < arr.length; i++) {
//             res = arr.indexOf(arr[i])
//             console.log(res)
//         }
//     }
// }