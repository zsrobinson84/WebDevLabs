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
    console.log(x3);
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

function findTheBananaForEach(arr) {
    arr.forEach((item, index) => {
        if (item === "Banana") {
            alert("Banana found in the array at index " + index);
        }
    });
}

// findTheBananaForEach(L1);
// findTheBananaForEach(L2);

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    let name = ", I am Zoe";
    let message = "";

    if (h < 12) {
        message = "Good morning" + name;
    } else if (h >= 12 && h < 18) {
        message = "Good afternoon" + name;
    } else if (h >= 18 && h < 20) {
        message = "Good evening" + name;
    } else {
        message = "Good night" + name;
    }

    document.getElementById("greeting").innerHTML = message;
}

greetingFunc();

function addYear() {
    var d = new Date()
    var y = d.getFullYear(); //found with documentation
    var e = document.getElementById("copyYear");
    e.innerHTML += " " + y;
}

function showList() {
    document.getElementById("List").style.display = "block";
    document.getElementById("seeMore").style.display = "none";
}

$("#showLess").click(function() {
    $("#intro2").hide();
    $("#showLess").hide();
    $("#showMore").show();
});

$("#showMore").click(function() {
    $("#intro2").show();
    $("#showLess").show();
    $("#showMore").hide();
});

function validate(){
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        document.getElementById("validateMsg").innerHTML = "Please fill out all fields correctly.";
    }
}
