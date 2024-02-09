const name = "Akash";
const repoCount = 14;

// console.log(name + repoCount + " repos"); //This technique is little bit old way of concatenation

// new method using ``(back ticks) - this method is called as string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is a newer method, by which we can perform many functions on the string while concatenating the strings

const gameName = new String("Akash yerra");

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));

