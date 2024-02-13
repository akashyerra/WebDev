const marvelAvengers = ["ironman", "thor", "spiderman", "hulk"];
const dc = ["superman", "batman", "flash"];

//marvelAvengers.push(dc); // this doesn't merge the arrays, the problem that occurs is it inserts array into an array, in js array can take any type of the data into it

console.log(marvelAvengers);
// console.log(marvelAvengers[4][2]);

const allHeros = marvelAvengers.concat(dc); // concat combines 2 or more arrays and returns a new array
console.log(allHeros); 

const all_new_heros = [...marvelAvengers, ...dc]; // ... is called the spread operator in js, in concat we have only one value, but in spread we can concat any number of arrays
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // .flat returns a new array with all sub array elements concatenated into recursively upto the specified depth
console.log(real_another_array);

console.log(Array.isArray("Akash")); // tells whether the given data is an array or not
console.log(Array.from("Akash")); // converts the given input to the array
console.log(Array.from({name : "Akash"})); // Intresting concept, we need to specify whether to convert the keys or the values into an array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //returns a new array with the given set of elements