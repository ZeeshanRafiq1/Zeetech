// primitve datatypes are 7: Call by value 
// string, number, boolean, null, undefined, symbols, bigInt

// use of symbol
const id = Symbol("123")
const anotherID = Symbol("123")
// console.log(id === anotherID);
const bigNumber = 2736548n

// non-primitive (reference): Call by reference
// array, objects, functions

// array example: 
const heros = ["Khalid bin waleed", "Muhammad bin qasim", "Abu Ubaida"]
let myObj = {
    name: "Zeeshan",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction);
// console.log(typeof name);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory in javascript: there are two types of memory in JS

// Stack memory, heap memory
// Stack use in primitive datatypes
// Heap use in non-primitive

let myName = "ZeeshanRafiq"
let anotherName = myName

anotherName = "Zeeshan"

console.log(myName);
console.log(anotherName);


let userOne = {
    email: "Zeeshan@.com",
    number: "030051"
}

let userTwo = userOne
userTwo.email = "Zeeshan123.com"

console.log(userOne.email);
console.log(userTwo.email);




