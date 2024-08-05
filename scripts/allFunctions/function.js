/*function enterYourNumber(){
    let userInput = prompt("Enter a number? ")
    return userInput;

}
let userInput = enterYourNumber();
function checkIfEvenOrOdd(num){
    if(num % 2 === 0) {
        console.log(`${num} is an even number`)
    }else{
     b   console.log(`${num} is an odd number`)
    }
};
checkIfEvenOrOdd(userInput);


function findLargestNumber(array) {
    if (array.length === 0) {
        throw new Error("Empty Array");
    }

    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

// Example usage
const numbers = [10, 5, 100, 19, 35, 99];
const largestNumber = findLargestNumber(numbers);
console.log(largestNumber); // Outputs is 100
*/b
function addNumber(numA, numB) {
    sum = numA + numB;
    return sum;
}

sum = addNumber(numA = 10, numB = 15);
console.log(sum);


function multiNumber(numA, numB) {
    sum = numA * numB
    return sum;
}
sum = multiNumber(numA = 15, numB = 15);
console.log(sum);


function divideNumber(numA, numB) {
    if (numB === 0) {
        throw new Error("Cannot divide by zero");
    }
    sum = numA / numB;
    return sum;
}

sum = divideNumber(numA = 15, numB = 3);
console.log(sum);


function squareNumber(num) {
    sum = num * num;
    return sum;
}

sum = squareNumber(num = 5);
console.log(sum);