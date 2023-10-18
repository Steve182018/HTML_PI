var string = "applepenapple"
var wordDict = ["apple", "pen"]

var arr = new Array(string.length +1 ).fill(false)
arr[0] = true
console.log(arr)

for (let i = 1; i <= string.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[j] && wordDict.includes(string.substring(j, i))) {
            console.log(arr[i] = true)
            arr[i] = true;
            break;
        }
    }
}

console.log(arr[string.length])