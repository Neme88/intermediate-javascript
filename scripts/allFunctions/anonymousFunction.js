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

/* Another code example of anonymous function in this 
instance it is used a callback function to perform the calculation
if certain parameters condition is true or false
*/

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

const calculateSum = function (numbers) {

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
  }
  return sum;
}

console.log(output1=calculateSum([3, 6, 3,9,2]))
let output2 = calculateSum([3, 6, 3, 9])
console.log(output2)

// example of anonymous function as used to multiply numbers
const multiplyNum = function(num) {
  return num * num;
}

console.log(output3=multiplyNum(5))




