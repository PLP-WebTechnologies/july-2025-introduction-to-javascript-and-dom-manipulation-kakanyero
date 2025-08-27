// Part 1: JavaScript Basics
let name = prompt("What is your name?");
console.log(`Hello, ${name}!`);

let age = parseInt(prompt("How old are you?"));
if (age >= 18) {
    console.log("You are eligible to book a tour.");
} else {
    console.log("You are not eligible to book a tour.");
}

// Part 2: Functions
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

greet(name);
console.log(`Total: $${calculateTotal(100, 2)}`);

// Part 3: Loops
let destinations = ["Paris", "Rome", "New York"];
let packages = ["Package 1", "Package 2", "Package 3"];

for (let destination of destinations) {
    let li = document.createElement("li");
    li.textContent = destination;
    document.getElementById("destination-list").appendChild(li);
}

for (let packageItem of packages) {
    let li = document.createElement("li");
    li.textContent = packageItem;
    document.getElementById("package-list").appendChild(li);
}

// Part 4: DOM Manipulation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    console.log(`Name: ${name}, Email: ${email}`);
    alert("Form submitted successfully!");
});

// Additional DOM interactions
document.querySelector("header").style.background = "lightblue";
//document.querySelector("main").style.padding = "50px";
document.querySelectorAll("section").forEach(section => section.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)");
