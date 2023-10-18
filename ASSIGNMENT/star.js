let arr_string = ["abc","def"]

var width = arr_string[0].length+2;
console.log("width",width)

var topb = '*'.repeat(width);
console.log("top",topb);
arr_string.unshift(topb);

var down = '*'.repeat(width);
console.log("down",down);
arr_string.push(down);

for(let i =1;i<arr_string.length-1;i++){
    arr_string[i] = '*' +arr_string[i]+ '*';
    console.log(arr_string)
}
console.log("Final",arr_string)