// Immediately Invoked Function Expressions (IIFE)
// --> needs to be immediately executed
// --> should not pollute the global scope

// IIFE is used to create a function that is executed immediately and it should not pollute the global scope (variables) of the file/environment

// Syntax --> function wrapped in a paranthesis and a paranthesis continued
/* (function () {

}) () */

// Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
}) ();
// IIFE is generally executed without any problem but once started it doesn't know when to stop the execution, in order to overcome this problem we need to end the statement using a semi colon ; after the completion of the iife

// Unnamed IIFE
( (name) => {
    console.log(`DB connected ${name}`);
} )("Akash");