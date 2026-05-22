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