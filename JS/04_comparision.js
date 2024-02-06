// console.log(2>1);
// console.log(2<1)
// console.log(2==1)

console.log("2" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// the is reason is that an equality check == and comparisions > < >= <= work differently.
// Comparisions convert null to a number, treating it as 0. that's why null>=0 is true and null>0 is false and null==0 is false

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// === is called strict check :- it not only compares the values of the variables but also checks their datatypes

console.log("2" === 2)