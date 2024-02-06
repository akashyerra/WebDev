"use strict"; // treat all the JS code as the newer version;

// alert(9+6) // we are using node.js not the browser where there is html document from which the js is launched

/*
Generally while writing code in js, react, node we dont use the ; and other symbols
The main aim of writing the code is to increase the readability of the code, such that other coders/developers can also read the code and understand it easily
*/

console.log(6 + 6)
console.log("Yerra Akash")
// Code readability should be high

let name = "Akash"
let age = 20
let loggedIn = false

// Datatypes

// **********Primitive***********
// number => range{-2^53 to 2^53}
// bigint => used for the larger numeric value that is exceeding the range of the number
// string => ""
// boolean => true/false
// null => standalone value
// undefined => indicates the value is not assigned to the variable 
//  symbol => it is used very much in react, used to find the uniqueness of the element

// object
console.log(typeof undefined) // undefined
console.log(typeof null) // null is an object