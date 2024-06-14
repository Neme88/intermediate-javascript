/*function enterYourNumber(){
    let userInput = prompt("Enter a number? ")
    return userInput;

}
let userInput = enterYourNumber();
function checkIfEvenOrOdd(num){
    if(num % 2 === 0) {
        console.log(`${num} is an even number`)
    }else{
        console.log(`${num} is an odd number`)
    }
};
checkIfEvenOrOdd(userInput);
*/

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

