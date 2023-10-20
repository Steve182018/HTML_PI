var value = 5

for(let i =     1; i<=value;i++){
    var first_column = 1;

    for(j=1; j<=i;j++){
        document.write(first_column+" ")
        console.log(first_column * (i-j) / j)
        first_column = first_column * (i-j) / j;
    }
    document.write("<br>");
}