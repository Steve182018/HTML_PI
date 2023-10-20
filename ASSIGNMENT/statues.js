var arr = [6,10,15,22,29,28]
var arr_sort = arr.sort(function (a, b) { return a - b });
// console.log(arr_sort)
var new_arr = arr
var Missing_arr = []

for (let i = 0; i <= arr_sort.length - 2; i++) {
    var arr_diff = arr_sort[i + 1] - arr_sort[i]
    // console.log(arr_diff)

    if (arr_diff == 1) {
        // console.log("No Missing Values in an Array!!!")
    } else if (arr_diff > 1) {
        // console.log("diffrence",arr_diff-1)
        // console.log(arr[i]+1)
        new_arr.push(arr[i] + 1)
        Missing_arr.push(arr[i] + 1)
        // console.log("Missing Values:", Missing_arr)
        // console.log(new_arr)
        var new_arr_sort = new_arr.sort(function (a, b) { return a - b });
        // console.log(new_arr_sort)
    } else if (arr_diff <= 0) {
        console.log("Error")
        break;
    }
}
console.log("Missing Values:", Missing_arr)
