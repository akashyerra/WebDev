const instaUser = new Object(); // it is a singleton object
// const instaUser = {}; // it is not a singleton object

instaUser.id = "theRock";
instaUser.name = "Rock";
instaUser.isLoggedIn = false;

console.log(instaUser);
// nested objects can be created in js, and to access the inner objects just use the '.' operator
const fbUser = {
    email: "user@fb.com",
    fullName : {
        userFullName : {
            firstName: "akshay",
            lastName: "raja"
        }
    }
}

console.log(fbUser.fullName.userFullName);

// we also have an option of "optional chaining", it adds a layer of security or protection, in cases where we use api calls, it checks whether the inner object is present, if present perform one operation and if not present then do other operation
// it is done by using ? symbol
// console.log(fbUser.fullName?.userFullName.firstName)

// merging or combining of objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2} // it creates a object containing of 2 seperate objects, that is, it contains {{},{}}
// .assign() Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object. -> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = Object.assign({}, obj1, obj2, obj4); 
// giving an empty object paranthesis at the start is a good practice because it ensures that all the objects are combined into one single object only
console.log(obj3);

const obj5 = {...obj1, ...obj2, ...obj4}; // using the spread operator
console.log(obj5);
console.log();

// when retrieving the values from database, it retrives as the array of objects
const users = [
    {
        id: 1,
        email: "a@google.com"
    },
    {
        id: 2,
        email: "k@google.com"
    },
    {
        id: 3,
        email: "aa@google.com"
    },
    {
        id: 4,
        email: "sh@google.com"
    }
];

console.log(instaUser);
console.log(Object.keys(instaUser)); // it returns an array containing of keys of objects
console.log(Object.values(instaUser)); // it returns an array containing of values of objects
console.log(Object.entries(instaUser)); // it returns an array containing of key value pair as an array, and key value pairs are returned in the form of nested array

console.log(instaUser.hasOwnProperty("isLoggedOut")); // returns a boolean, whether the object contains the specified parameter or not

// to know the important properties of the object just use the inspect and console tab in the browser.