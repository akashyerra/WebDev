// this refers to the current context of the object

const user = {
    username : "Akash",
    price: 9999,

    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to website`)
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "RDJ";
// user.welcomeMessage();

console.log(this); // we are in the node environment, this refers to an empty object
// but when in the browser, this refers to the window

function cake() {
    let username = "Akash";
    console.log(this.username);
    // we cant use this to refer the current function
    // console.log(this) -> this holds a lot of data of the function
}
cake();

const chai = function () {
    let username = "akash";
    console.log(this.username);
    // here also this fails to refer the current function
}

// Arrow function
const coffee = () => {
    let username = "Doraemon";
    console.log(this); // -> gives an empty paranthesis
    // console.log(this.username) -> also gives undefined output
}
coffee();

/************Arrow FUNCTION************************/
// syntax ====>> name = () => {}
const addTwo = (num1, num2) => {
    return num1+num2;
}

// Implicit return type in arrow function --> we can use this return type when we have only one line to execute and the calculated value is to be returned
const subtraction = (num1, num2) => (num1-num2); // very much used in react

console.log(subtraction(3,5));

// returning an object
const objReturn = () => ({username : "Yerra Akash"}); // to return an object we must enclose the object in the paranthesis only 
console.log(objReturn());

const myArray = [2, 3, 5, 6, 8];

// myArray.forEach(function () {}); // -> normal function
// myArray.forEach(() => {}); // -> arrow function