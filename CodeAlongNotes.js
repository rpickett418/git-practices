// Boilerplate nonsense
const { ReadStream } = require('fs');
const readline = require('readline')
// typing the command node <file-name> will run your javascript


// console log is a prebuilt function that prints a value to the console
console.log("Hello, World!")
// Creating variables with different datatypes
const firstName = "I'm Rah";
let age = "25";

console.log(firstName, age)

const isKool = true;
console.log(isKool)

// Numbers 

let x = 4;
let favNum = 12;
console.log(favNum + x)

// Strings

let favRobot = ' Where you at ?'
let favDino = " T-rx"
console.log(`Where you at?, ${favDino}`)
console.log("Come on" + favDino + favRobot + " we out!")

// User Input
const redline = readline.createInterface({
    input: process.stdin,
    output:process.stdout,

})
