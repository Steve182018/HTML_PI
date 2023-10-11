// Simple Array

const arr1 = ["Steve", "Saumil", "Mali", "Modi"]
const arr2 = ["Radhe", "Krishna", "Hare", "Hare"]
document.getElementById("first").innerHTML = arr1;

// Change Array Element

arr1[0] = "Abhi";
document.getElementById("second").innerHTML = arr1;

// Accessing the Array Element

let ele = arr2[arr2.length, 0]
console.log(ele)

// Looping Array Elements

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

// Methods in Array 

// 1. length
let length = arr2.length;
console.log(length)

// 2. An Array to a String
document.getElementById("third").innerHTML = arr2.toString();

// 3. Pop
arr2.pop();
console.log(arr2);

// 4. Push
arr2.push("Hare Krishna");
console.log(arr2);

// 5. Shift
arr2.shift();
console.log(arr2);

// 6. Unshift
arr2.unshift("Radhe");
console.log(arr2);

// 7. Concat
const con = arr1.concat(arr2)
console.log(con)

// 8. Splice
arr1.splice(2, 0, "Yash", "Viken")
console.log(arr1)

arr1.splice(0, 1)
console.log(arr1)

// Sorting an Array

arr1.sort()
console.log(arr1)

arr1.reverse()
console.log(arr1)

const num = [10, 50, 5, 40, 70]
num.sort(function (a, b) { return a - b });
console.log(num)

for (let i = 0; i < arr1.length + 1; i++) {
    let a = Math.round(Math.random() * 10);
    console.log(a)
}

// ternary operator
let a = 5
let n = (a < 0) ? "Negative" : "Positive";
console.log(n)

// Switch

let month;
switch (new Date().getMonth()) {
    case 0:
        month = "jan";
        break;
    case 1:
        month = "feb";
        break;
    case 2:
        month = "mar";
        break;
    case 3:
        month = "apr";
        break;
    case 4:
        month = "may";
        break;
    case 5:
        month = "june";
        break;
    case 6:
        month = "july";
    case 7:
        month = "aug";
        break;
    case 8:
        month = "sept";
        break;
    case 9:
        month = "oct";
        break;
    case 10:
        month = "nov";
        break;
    case 11:
        month = "dec";
        break;
    default:
        print("Error in Date")
}

console.log(month)

//  for in loop

for(let i in num){
    console.log(num[i]);
}

// JS OBJECTS

const person = {firstName:"Steve", lastName:"Mali", age:22, eyeColor:"black"};

console.log(person.firstName)


// Nested Objects

const no = {firstName:"Steve", lastName:"Mali", age:22, eyeColor:"black", cars: {
    car1: "Red", car2: "Blue"
}};

console.log(no.cars.car1);
console.log(no["cars"]["car1"])
console.log(no.cars["car2"])

// Nested Array
let x=""

const na = {firstName:"Steve", lastName:"Mali", age:22, eyeColor:"black", cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
], fullname: function(){
    return this.firstName + " " + this.lastName;
}};

console.log(na.cars[0].name)


for(i in na){
    x = na.firstName + " " + na.lastName + " " + na.age + "\n"
    for(j in na.cars){
        x += na.cars[j].name + "\n"
        for(k in na.cars[j].models){
            x+= na.cars[j].models[k] + "\n";
        }
    }
}

document.getElementById("disp").innerHTML = x;


// This keyword
document.getElementById("full").innerHTML = na.fullname();

// Getter setter

const g = {name: "Steve Mali", language: "guj", get lang(){
    return this.language;
}}
document.getElementById("get").innerHTML = g.lang;

const s = {name: "Steve", language: "", set lang(lang){
    this.language = lang
}}

s.lang = "Gujarati";

document.getElementById("set").innerHTML = s.language;




