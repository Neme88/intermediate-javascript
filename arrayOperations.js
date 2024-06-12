// creating array
let arr = ["Harry Potter", "Atomic Habits", "Long Walk to Freedom", "Outlander", "The Power of Habit", "Wolf Hall"]; 
// outputing the contents of our array
console.log(arr);

// Accessing elements from our array by index
let firstElement = arr[0];
 
// poping element from the end of our array
let lastElement = arr.pop();

// removing element from the beginning of our array
let firstElementremoved = arr.shift();

// getting the length of an array 
let length = arr.length;

// iterating over elements in an array and outputing the result
arr.forEach(element => console.log(element));

// modifying our array
arr[1] ="as a man thinketh";

// adding element to the beginning of our array
arr.push("When Breath Becomes Air");

// adding element to the end of our array
arr.unshift(0);

// searching for an element (by value)
let index = arr.indexOf(3);

// filtering content of our array based on the length
let filteredArr = arr.filter(str => str.length > 15 );
console.log(filteredArr);

// sorting our string array in an acceding order the default behavior
arr.sort();

// converting our array elements to uppercase using map and toUpperCase method
let mappedArr = arr.map(str => str.toUpperCase());
console.log(mappedArr);

// using the splice method to remove element from our array
arr.splice(0, 0);

// using splice to replace the elements of our array
arr.splice(1, 1, "the Ironman");

