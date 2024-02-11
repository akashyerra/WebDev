const name = "Akash";
const repoCount = 14;

// console.log(name + repoCount + " repos"); //This technique is little bit old way of concatenation

// new method using ``(back ticks) - this method is called as string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is a newer method, by which we can perform many functions on the string while concatenating the strings

const gameName = new String("Akash yerra");

console.log(gameName[0]);
console.log(gameName.__proto__) // in the current program it shows that the object is empty but when we run in the browser's console it is a object containing alphabets

console.log(gameName.length);
console.log(gameName.toUpperCase()); // this doesn't change the original value as the string is an primitive datatype 
console.log(gameName.charAt(6)); 
console.log(gameName.endsWith('a'));
console.log(gameName.indexOf('a')); // returns the index at which the given alphabet is first occured

// knowing the maximum number of methods of the string is very helpful as it is quiet useful in case of dsa

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(1, 4);
console.log(anotherString);

const newStr1 = "     Akash      ";
console.log(newStr1);
console.log(newStr1.trim());

const url = "https://akash.com/akash%20yerra";

console.log(url.replace('%20', '-'));

console.log(url.includes('akash'));

console.log(gameName.split(' '));