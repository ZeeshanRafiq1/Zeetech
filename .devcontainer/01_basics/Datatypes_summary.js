// primitve datatypes are 7: 
// string, number, boolean, null, undefined, symbols, bigInt

// use of symbol
const id = Symbol("123")
const anotherID = Symbol("123")
// console.log(id === anotherID);
const bigNumber = 2736548n

// non-primitive (reference):
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

console.log(typeof myFunction);
console.log(typeof name);


