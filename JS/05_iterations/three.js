// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const val of arr) {
    console.log(val);
}

const greetings = "Hello World !!!!";
for(const greet of greetings){
    console.log(`Each character is ${greet}`);
}
console.log();

// Maps -> same as arrays but differ in iteration, stores only unique values
// refer mdn docs for total information about maps :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map();
map.set("IN", "India");
map.set("UAE", "United Arab Emirates");
map.set("FR", "France");

console.log(map);

for (const [key, value] of map) {
    console.log(key + " :- " + value);
}

const myObject = {
    game1 : "NFS",
    game2 : "GTA VICE CITY"
}
// for (const [key, value] of myObject) {
//     console.log(key + " :- " + value);
// }