function enterYourNumber(){
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
