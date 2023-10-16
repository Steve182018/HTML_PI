var name = "f(ooh)fabaz"
var split = name.split("");
console.log(split)

var p1 = p2 = 0;

var p3 = []

for(let i=0; i<=split.length; i++){
    if(split[i] == "(" | split[i] == ")"){
        p1= split.indexOf("(")
        p2= split.indexOf(")")
    }
}

for(let j=p1+1; j<=p2-1; j++){
    p3.push(split[j])
    console.log(p3)
}

var rev = p3.reverse()
console.log(rev)



