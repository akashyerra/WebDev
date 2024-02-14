// There are two ways of declaring the objects in js
// 1. By creating it as a literal - singleton object is not created
// 2. By using a constructor - always singleton object is created - created by using -> Object.create
// Singleton - it has a simple meaning that, when an object is created using the constructor, the object is one single type of its kind

const mySym = Symbol("key1");


// object literal is always a dealing with the key - value pairs
const JsUser = {
    name: "Akash",
    "full name": "Yerra Akash",
    [mySym] : "myKey1", // using a symbol already declared in object, we use [Symbol_Name]: Value
    age: 21,
    location: "Hyderabad",
    email: "akash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
};

console.log(JsUser.email); // using dot operator
console.log(JsUser["email"]); // using square brackets
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]); // accessing a symbol in object

JsUser.email = "akash@microsoft.com"
// Object.freeze(JsUser);
JsUser.email = "akash@chatgpt.com";
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())