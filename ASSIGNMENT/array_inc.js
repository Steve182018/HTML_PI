var arr = [2,1,10,1]

let moves = 0;

for (let i = 1; i< arr.length; i++) {
    // console.log(arr[i])
    if(arr[i] <= arr[i-1]){
        var diff = arr[i - 1] - arr[i];
        diff = diff + 1 
        // console.log("a",diff)
        arr[i] = arr[i]+diff;
        // console.log("b",arr[i])
        moves = moves + diff;
        
    }
}

console.log("Total Moves: ",moves)