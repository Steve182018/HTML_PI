var bracket= "()"

var split = bracket.split("");
console.log(split)

for(let i=0; i<=split.length; i++){
    if(split.length % 2 == 0){
        console.log("True")
    }else{
        console.log("false")
    }
}

