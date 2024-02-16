// functions -> it is block of code, defined with a name, and can be used where ever it is needed

function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}

// function reference is only entering its name -> sayMyName
// function execution is entering its name with parenthesis -> sayMyName()

sayMyName();

// when creating a function, the inputs taken are called as parameters and when calling a function the inputs given are called arguements
// function addition (num1, num2) {
//     console.log(num1 + num2);
// }

function addition (num1, num2) {
    // let result = num1 + num2;
    return num1 + num2;
    // console.log("Akash"); // the code after return does not get executed
}

const result = addition(50, 5);

console.log("Result ", result);

function loginMessage(username = "RDJ" /* it is default value -> when the function call does not define the input arguements then this default value is taken as input */){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginMessage("akash"));
console.log(loginMessage());
console.log();

function calculateCartPrice(val1, val2, ...num1) /* rest operator used */ {
    return num1;
}
console.log(calculateCartPrice(2));
// suppose if more number of inputs are there for the function, we use rest operator denoted by "..."
// rest allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "akash",
    prices: 199
}

function handleObject (anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    username: "akshay",
    price: 399
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500, 600, 700, 800]));