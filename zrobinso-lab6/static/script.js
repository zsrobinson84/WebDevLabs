// Basic JavaScript Statement
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = 'Hello';
var B = ' world!';
var C = A + B;
console.log(C);

// Basic JavaScript Function
function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
 }
 SumNPrint(x,y);
 SumNPrint(A,B);

 // Conditional Statement
 if (C.length > z) {
    console.log(C);
 } else if (z > C.length) {
    console.log(z);
 } else {
    console.log("good job!");
 }

/*
// For Loop
// Define two arrays containing fruit names
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// Function to find "Banana" using a for loop
function findTheBanana(array) {
    // Loop through each item in the array
    for (let index = 0; index < array.length; index++) {
        // Check if the current element is "Banana"
        if (array[index] === "Banana") {
            // Show an alert with the index where "Banana" was found
            alert("found the Banana in index " + index);
        }
    }
}

// Call the function for both arrays
findTheBanana(L1);
findTheBanana(L2);

// Using a forEach loop to check for "Banana" in L1 and L2
L1.forEach((element, index) => {
    if (element === "Banana") {
        alert("We found a banana in the first array at index " + index);
    }
});

L2.forEach((element, index) => {
    if (element === "Banana") {
        alert("We found a banana in the second array at index " + index);
    }
});



// Conditional Date Greeting for Console
function greetingFunc() {
    var d = new Date();  // Create a new Date object to get the current time
    var h = d.getHours();  // Get the current hour (0-23)

    if (h>=5 && h<12) {
        console.log("Good morning!"); // Morning greeting (5 AM - 11:59 AM)
    } else if (h>=12 && h<18) {
        console.log("Good afternoon!"); // Afternoon greeting (12 PM - 5:59 PM)
    } else if (h>=18 && h<20) {
        console.log("Good evening!"); // Evening greeting (6 PM - 7:59 PM)
    } else if (h>=20 && h<24 ||  h<5) {
        console.log("Good night!"); // Night greeting (8 PM - 4:59 AM)
    }
 }
greetingFunc();
*/

 /*
// Conditional Date Greeting for Broswer
function greetingFunc() {
    var d = new Date();  // Create a new Date object to get the current time
    var h = d.getHours();  // Get the current hour (0-23)
    var E = document.getElementById("greeting");  // Select the HTML element with ID "greeting"

 // Check the time and update the greeting accordingly
    if (h >= 5 && h < 12) {  
        E.innerHTML = "Good morning, my name is your name.";  // Morning greeting (5 AM - 11:59 AM)
    } else if (h >= 12 && h < 18) {  
        E.innerHTML = "Good afternoon, my name is your name.";  // Afternoon greeting (12 PM - 5:59 PM)
    } else if (h >= 18 && h < 20) {  
        E.innerHTML = "Good evening, my name is your name.";  // Evening greeting (6 PM - 7:59 PM)
    } else {  
        E.innerHTML = "Good night, my name is your name.";  // Night greeting (8 PM - 4:59 AM)
    } 
}
greetingFunc();
*/

// Conditional Date Greeting for index.html ONLY

// Function to display a time-based greeting
function greetingFunc() {
    var d = new Date();  // Create a new Date object to get the current time
    var h = d.getHours();  // Get the current hour (0-23)
    var E = document.getElementById("greeting");  // Select the HTML element with ID "greeting"

    // Check the time and update the greeting accordingly
    if (h >= 5 && h < 12) {  
        E.innerHTML = "Good morning, my name is Zoe Robinson.";  // Morning greeting (5 AM - 11:59 AM)
    } else if (h >= 12 && h < 18) {  
        E.innerHTML = "Good afternoon, my name is Zoe Robinson.";  // Afternoon greeting (12 PM - 5:59 PM)
    } else if (h >= 18 && h < 20) {  
        E.innerHTML = "Good evening, my name is Zoe Robinson.";  // Evening greeting (6 PM - 7:59 PM)
    } else {  
        E.innerHTML = "Good night, my name is Zoe Robinson.";  // Night greeting (8 PM - 4:59 AM)
    } 
}

// Get the current page URL
var L = window.location.href;
console.log(L);  // Log the full URL to the console for debugging

// Check if the current page is "index.html" before running the greeting function
if (L.includes("index.html")) {  
   greetingFunc();  // Call the function to update the greeting
}

// Get the Year for the Footer
function addYear() {
    var d = new Date(); // Creates a new Date object
    var y = d.getFullYear(); // Extracts the current year (e.g., 2025)
    var E = document.getElementById("copyYear"); // Finds the element with ID "copyYear"
    E.innerHTML+=y;  // Appends the year to the existing content
 } 



// function showList() {
//     document.getElementById("List").style.display = "block";
//     document.getElementById("seeMore").style.display = "none";
// }

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

  // Form validation
  function validate(){
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        document.getElementById("validateMsg").innerHTML = "Please fill out all fields correctly.";
    }
}

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            document.getElementById("adviceText").innerText = "Error fetching advice: " + error.message;
        });
}

// Create a function called getAdvice().
// Use fetch() to request advice from https://api.adviceslip.com/advice
// Convert the response to JSON and extract the "advice" text
// Update the webpage by setting document.getElementById("adviceText").innerText to the advice
// Handle errors using .catch() to display an error message if something goes wrong
// Call getAdvice() when a button is clicked by adding onclick="getAdvice()" to your button in the HTML


