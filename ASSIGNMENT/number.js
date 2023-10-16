let arr = [1, 2, 1];
let replace = 1;
let choice = 3;

function replace_num(arr, replace, choice) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === replace) 
        {
            arr[i] = choice;
        }
    }
    return arr;
}

let output = replace_num(arr, replace, choice);
console.log(output);


