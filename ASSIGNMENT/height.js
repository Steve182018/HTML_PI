let arr1  = [150, 190,-1, 170, -1, -1, 160, 180];
let arr2 = []

let count = 0;

function pos(value){
    return value > 0
}

var positive = arr1.filter(pos)
// console.log(positive)

var arr_sort = positive.sort(function (a, b) { return a - b });
// console.log(arr_sort)


for(let i =0; i<arr1.length; i++){
    if(arr1[i] === -1)
    {
        arr2.push(-1)
    }else if(arr1[i] > 0){
        arr2.push(positive[count])
        count++
    }
}

console.log(arr2)



