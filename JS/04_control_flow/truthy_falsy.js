//  truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

const email = "akash@outlook.com" //--> true
// const email = "" // --> false
// const email = [] // --> truthy

if(email) {
    console.log("got the email address of the user");
} else {
    console.log("No email found");
}

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){} -> empty function, 

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined --> safety check for the null and undefined, when we recieve a null and a number while retrieving from the db, then it assigns the value to the variable

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10; --> val1 = 10
// val1 = undefined ?? 15; --> val2 = 15

val1 = null ?? 10 ?? 20;

console.log(val1);


// Terniary operator
// condition ? true : false

const price = 1005
price >= 1000 ? console.log("greater than 1000") : console.log("less than 1000");