/* Syntax Example of Anonymouse function expression 

const functionName = functionkeyword (params) {
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

/*
 Syntax Example for named function expression

 const variableName = functionKeyword functionName (params) {
     function body with return statement if applicable
};
*/


// Code example of named function expression

const factorial = function fact (n) {
    if (n == 0) {
        return 1;
    }
    return n * fact(n-1);
}

console.log(factorial(5)); // Output: 120

// Another code example of named function expression

const addnums = function add(a, b) {
    return a + b;
};

console.log(addnums(4,5)); // Output: 9

// Named function expression with no parameters
 const printHello = function printHello() {
    console.log("Hello!");
};

printHello(); // Output: Hello!

// Named function expression with a default parameter
const greetUser = function greetUser(name = "Guest") {
    console.log("Hello, " + name + "!");
};

greetUser("John Doe"); // Output: Hello, John Doe!
greetUser(); // Output: Hello, Guest!