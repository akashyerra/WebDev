// primitive
// these perform call by value, i.e., the original data's address is not given to a function, but only a copy of the value is given, any changes made to the copy are not reflected in the original data
// there are 7 types : string, number, boolean, null, undefined, symbol, BigInt

const val = false;
const num = 12546;

let temp = null;
let mailAdd;

const id = Symbol("123");
const anotherId = Symbol("123");

const x = '123'
const y = '123'

console.log(x === y)

console.log(id === anotherId);

const bigInteger = 398522147852985214725893652587412582n
console.log(bigInteger)

// Javascript is a dynamically typed language

// Reference (Non primitive datatypes)

// Array, Objects, Functions
// the return type of the derived datatypes is called as object, and especially of function is called as object function
const heros = ["shaktiman", "hero", "chota bheem"] //array
let values = {
    name : "Akash",
    age : 18,
}

const myfunc = function() {
    console.log("Hello world")
}

console.log(typeof myfunc)
console.log(typeof bigInteger)
console.log(typeof temp)

// for reference https://262.ecma-international.org/5.1/#sec-11.4.3


// ******************************************************************************************************************

// Stack memory(used in primitive memory), heap memory(Non-primitive)

let ytname = "akashyerra"

let anotherName = ytname
anotherName = "comrade2003"
console.log(ytname)
console.log(anotherName)

let user1 = { // user is an object
    email : "user@google.com",
    upi : "user@axis"
}

let user2 = user1;
user2.email = "user2@yahoo.com";

console.log(user1.email)
console.log(user2.email)