// traditional function with no Parameters

function printSomething() {
    console.log("something...");
}

printMe = printSomething();
console.log(printMe)

// traditional function with one Parameters

function squareNumber(num) {
    let result = num * num;
    return result;
}

squareNumber = squareNumber(9);
console.log(squareNumber)

// traditional function with multiple parameters
function addThreeNumbers(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum;
}

addthreeNumbers = addThreeNumbers(5, 6, 9)

console.log(addthreeNumbers)

// traditional function with default parameters
function greetUser(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greetUser("John Doe");
greetUser();

// traditional function with a Rest parameter
function multiplyNumbers(...nums) {
    let product = 1;
    for (let num of nums) {
        product *= num;
    }
    return product;
}

multiplyNumbers = multiplyNumbers(2, 8, 4, 10);
console.log(multiplyNumbers)

