var string1 = "Aabcc"
var string2 = "Adcaa"

var value1 = new Array(52);
var value2 = new Array(52)
value1.fill(0);
value2.fill(0);

let count = 0;

for(let i=0; i<string1.length; i++){
    value1[string1[i].charCodeAt() - 'A'.charCodeAt()]++;
    console.log("1st",value1)
}

for(let j=0; j<string2.length; j++){
    value2[string2[j].charCodeAt() - 'A'.charCodeAt()]++;
    console.log("2nd",value2)
}

for(let k=0;k<52;k++){
    count += (Math.min(value1[k], value2[k]));
    
}

console.log("Freqency",count)
