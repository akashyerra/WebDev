let score = 29;
console.log("score type " + typeof score);

// conversion of a string-made of numbers to numeric results in number
let strScore = "29";
console.log("strScore type " + typeof strScore);
console.log();
let valueInNumber = Number(strScore);
console.log("type of valueInNumber " + typeof valueInNumber);

// conversion of a non-numeric datatype to numeric give NaN
let scoreException = "32ab";
let numericScoreException = Number(scoreException);
console.log("type of numericScoreException " + typeof numericScoreException);
console.log("value of numericScoreException " + numericScoreException);
console.log();

// conversion of null to numeric gives 0
let test = null;
let numericTest = Number(test);
console.log(numericTest);
console.log();

// conversion of undefined value to numeric gives NaN
let undefinedTest = undefined;
let nUndefinedTest = Number(undefinedTest);
console.log(nUndefinedTest);

// true => 1 and false => 0
// "" => false
// "akash" => true
let isLoggedIn = 1;
let boolIsLodggedIn = Boolean(isLoggedIn);
console.log(boolIsLodggedIn);

let trial = 33;
let stringNumber = String(trial);
console.log(stringNumber);
console.log(typeof stringNumber);

/************************************************** Operations *******************************/

let val = 3;
let negVal = -val;
console.log(negVal);

// console.log(2 + 2)
// console.log(3 - 3)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello";
let str2 = " akash";
let str3 = str1 + str2;
console.log(str3);

/* miscellanous */
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1"+2+2)
// console.log(1+2+"2")
// console.log( (3+4) *5 %3)

// console.log(+true)
// console.log(+"") donot use these kind of statements

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// // https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion