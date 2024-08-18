/* Syntax Example of Anonymouse function expression 

const functionName = functionkeyword (params) {
     function body with return statement if applicable
};
*/
/*
 Syntax Example for named function expression

 const functionName = function namedFunction (params) {
     function body with return statement if applicable
};
*/

// Code example of Anonymous function expression

const calculateArea = function(radius) {
    return Math.PI * radius * radius;
};

console.log(calculateArea(5)); // Output: 78.53981633974483


// Another code example of anonymous function expression
    let isAdd = true;
    let operation;
    if (isAdd) {
        operation = function(a, b) {
            return a + b;
        }

    }else{
        operation = function(a, b) {
            return a - b;
        }
    }
console.log(operation(4,5)); // Output:


// Code example of named function expression

const factorial = function fact (n) {
    if (n == 0) {
        return 1;
    }
    return n * fact(n-1);
}

console.log(factorial(5)); // Output: 120