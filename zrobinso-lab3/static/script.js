
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2){
    var x3 = x1 + x2;
    // console.log(x3);
    return x3
}

console.log(SumNPrint(x, y));
console.log(SumNPrint(A, B));

if(C.length == z){
    console.log("good job!")
} else if (C.length > z){
    console.log(C)
} else {
    console.log(z)
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(array1){
//     for (var i = 0; i < array1.length; i++){
//         if (array1[i] == "Banana"){
//             window.alert("found the Banana in " + i); 
//         }
//     }
//     return -1
// }

function findTheBanana(fruit){
    if(fruit == "Banana"){
        window.alert("we found a Banana"); //in the right array?
    }
}

console.log(findTheBanana(L1));
console.log(findTheBanana(L2));

// notes:
// var d = new Date();
// var h = d.getHours();
// <head id="123"></head>
// to access:
// document.getElementById("123").innerHTML = h;