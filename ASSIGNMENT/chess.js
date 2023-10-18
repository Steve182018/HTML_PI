var cell1 = "C5"
var cell2 = "A3"

const letters = 'ABCDEFGH';
const col1 = letters.indexOf(cell1[0]) + 1; 
const row1 = parseInt(cell1[1]);
const col2 = letters.indexOf(cell2[0]) + 1;
const row2 = parseInt(cell2[1]);


if((col1 + row1) % 2 === (col2 + row2) % 2){
  console.log("Same Color Cell")
}else{
  console.log("No Same Color Cell")
}