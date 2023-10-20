let s = "saumil"; 
let maxLength = 0;
let currst = "";

for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charIndex = currst.indexOf(char);
    console.log("starting : ",charIndex)
    
    if (charIndex !== -1) {
        currst = currst.slice(charIndex + 1);
        console.log("in if loop : ",currst)
    }

    currst += char;
    console.log("char add : ",currst);
    maxLength = Math.max(maxLength, currst.length);
}

console.log("Longest String",maxLength); 
