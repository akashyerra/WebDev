// The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope,
// it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

// var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // var c = 30;
  console.log(a);

}

// {block scope - scope of the code written in this braces is defined by these braces, if any variable or function defined in this braces, is being accessed outside the braces then it doesnt work}

console.log(a);
// console.log(b);
// console.log(c);
