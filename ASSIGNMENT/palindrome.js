// function canFormPalindrome(inputString) {
//     const charCount = {};

//     // Count the occurrences of each character
//     for (const char of inputString) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // Count how many characters have an odd count
//     let oddCount = 0;
//     for (const count of Object.values(charCount)) {
//         if (count % 2 !== 0) {
//             oddCount += 1;
//         }
//     }

//     // Check the conditions for forming a palindrome
//     return oddCount <= 1;
// }

// // Example
// const inputString = "aabb";
// const result = canFormPalindrome(inputString);
// console.log(result); // Output: true

// var string = "a"

// var count = {};

// for (var char in string) {
//     count[char] = (count[char] || 0) + 1;
// }

// let oddCount = 0;
// for (const count of Object.values(char)) {
//     if (count % 2 !== 0) {
//         oddCount += 1;
//     }
// }

// console.log(oddCount<=1)