const score = 400; // js detects that the given value is 400

const balance = new Number(500); // this is to define that the balance will store a number datatype in it for sure 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num2 = 568.65451
console.log(num2.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // converts the big number into the indian numbers representation

/*************************************************   MATHS    **********************************************/
//  Math library is a very intresting thing in js

console.log(Math); // print the same value in the console of the browser to get all the functions of the js

console.log(Math.abs(-4)); // converts the neg number to positive
console.log(Math.round(5.6));
console.log(Math.ceil(4.2)); // rounds the number to the higher number, i.e., the next number
console.log(Math.floor(4.8)); // rounds the number to the lesser number, i.e., the before number

console.log(Math.min(4,2,5,8,-1));
console.log(Math.max(4,2,5,8,-1));

console.log(Math.random()); // always gives the the random value between 0 and 1
console.log(Math.random()*10 + 1); // *10 shifts the decimal by 1 and +1 used to avoid the case of 0.00 to get the number between 1 and 10
console.log((Math.random()*10) + 1);


// to print random values within a given range of min and max
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);