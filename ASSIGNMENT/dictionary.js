const wordDict1 = ["apple", "pen"];
let string1 = "applepenapple";

const wordDict2 = ["cats", "dog", "sand", "and", "cat"];
let string2 = "catsandog";

function check(dic, str) {
    let result;
    for (let i = 0; i < dic.length; i++) {
        result = str.includes(dic[i]);
        if (result) {
            str = str.replace(dic[i], '*')
        }
    }
    return result;
}

console.log(check(wordDict1,string1))