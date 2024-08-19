/* Syntax Example of Anonymouse function expression 

const functionName = functionkeyword (params) {
     function body with return statement if applicable
};
*/

// Code example of Anonymous function expression

const calculateArea = function (radius) {
  return Math.PI * radius * radius;
};

console.log(calculateArea(5)); // Output: 78.53981633974483

// Another code example of anonymous function expression
let isAdd = true;
let operation;
if (isAdd) {
  operation = function (a, b) {
    return a + b;
  };
} else {
  operation = function (a, b) {
    return a - b;
  };
}
console.log(operation(4, 5)); // Output:

// code example of anonymous function as IIFE(immediate invoked function expression)
(function (numbers) {
  let sum = 0;
  for (let num = 0; num < numbers.length; num++) {
    sum += numbers[num];
  }
  console.log(sum);
})([8, 6, 3, 7, 2]);

// example of anonymous function assigned to a variable


