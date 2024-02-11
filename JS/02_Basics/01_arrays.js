// array
// follow mdn documentation for detailed explaination https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const myArr = [0, 1, 2, 3, 4];
const myHeros = ["ironman", "captain america"];
const myArr2 = new Array(1, 2, 3, 4, 5, 6);

console.log(myArr[0]);

// Array methods

myArr.push(7); // adds the given data in the end of the array
myArr.push(8);
console.log(myArr);

myArr.pop(); // removes/deletes the last element of the array
console.log(myArr);

myArr.unshift(9); // inserts the data in the start of the array
console.log(myArr);
myArr.shift(); // removes the starting element in the array
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3)); // if the element is not present in array then it returns -1

const newArr = myArr.join(); // .join() - converts the array into a string 
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice & splice
// Generally in interviews when they ask for the difference between the slice and splice, majority of the people say that one excludes max in range and the other includes the max in range respectively

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
// But the actual difference is that in slice it gives the subArray but when it comes to splice it remmoves that subarray from the array

