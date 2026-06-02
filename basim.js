// function showWelcome(name){
//     alert("welcome " + name);
// }

// function getUserName() {

//     let username = prompt("enter your name");
//     showWelcome(userName);
// }
// let name1 = prompt("Enter your Name")
// showWelcome(name1);

function addnubers(num1, num2){
    let result = num1 + num2;
    alert("Total = " + result);
}
function startAddition() {

    let firstnumber = number(prompt("enter your first num"))
    let secondnumber = number(prompt("enter your second num"))

    addnubers(firstnumber,secondnumber);

}
let num = prompt("enter your first num")
let num1 = prompt("enter your second num")
addnubers(num,num1);

// var remainder = 10 % 3;
// alert(remainder);

// var num = 5;
// num--;

// alert(num);

// var num = 4;
// if (num % 2 == 0){
//     alert("even")
// }
// else{
//     alert("odd")
// }

// var user = "admin";
// var pass = "1234";

// if (user === "admin" && pass === "1234") {
//     alert("Login Successful");
// }
// else {
//     alert("Wrong Details");
// }

// var cities = ["Karachi", "Lahore", "Islamabad"];

// alert(cities[0]);

// var fruits = ["Apple", "Banana"];

// fruits.pop("Mango");

// alert(fruits);

// var fruits = ["Apple", "Banana"];

// fruits.splice(0,1, "Mango");

// alert(fruits);

// for (var i = 1; i <= 5; i++) {
//     alert(i);
// }

// var matchFound = false;
// var city = "Karachi";

// if (city === "Karachi") {
//     matchFound = true;
// }

// alert(matchFound);

// for (var i = 1; i <= 3; i++) {

//     for (var j = 1; j <= 2; j++) {
//         alert(i + " " + j);
//     }

// }



let name = "Muhammad Yousuf";
console.log("My name is:", name);


// Q2: Add two numbers
let a = 20;
let b = 10;
console.log("Sum:", a + b);


// Q3: Check number is even or odd
let number = 7;

if (number % 2 === 0) {
  console.log(number + " is Even");
} else {
  console.log(number + " is Odd");
}


// Q4: Find largest number from three numbers
let x = 15;
let y = 30;
let z = 25;

if (x > y && x > z) {
  console.log("Largest:", x);
} else if (y > x && y > z) {
  console.log("Largest:", y);
} else {
  console.log("Largest:", z);
}


// Q5: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// Q6: Print multiplication table
let tableNumber = 5;

for (let i = 1; i <= 10; i++) {
  console.log(tableNumber + " x " + i + " = " + tableNumber * i);
}


// Q7: Calculate factorial
let factNum = 5;
let factorial = 1;

for (let i = 1; i <= factNum; i++) {
  factorial *= i;
}

console.log("Factorial:", factorial);


// Q8: Reverse a string
let text = "JavaScript";
let reverseText = "";

for (let i = text.length - 1; i >= 0; i--) {
  reverseText += text[i];
}

console.log("Reverse:", reverseText);


// Q9: Count vowels in a string
let sentence = "I am learning JavaScript";
let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < sentence.length; i++) {
  if (vowels.includes(sentence[i])) {
    count++;
  }
}

console.log("Vowels Count:", count);


// Q10: Find total and average of array
let marks = [80, 75, 90, 85, 70];
let total = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

let average = total / marks.length;

console.log("Total Marks:", total);
console.log("Average Marks:", average);


// Q11: Find highest marks
let highest = marks[0];

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  }
}

console.log("Highest Marks:", highest);


// Q12: Simple calculator using function
function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Invalid Operator";
  }
}

console.log("Calculator Result:", calculator(20, 5, "*"));
