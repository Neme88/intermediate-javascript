// 15 javascript string operations
let string = "The string to run all our operations on";

// first operation console log our string
console.log(string);

// second operation console log the length of our string
let operation2 = string.length
console.log(operation2);

// third operation console log our string in uppercase
let operation3 = string.toUpperCase();
console.log(operation3);

// fourth operation console log our string in lowercase
let operation4 = string.toLowerCase();
console.log(operation4);

// fifth operation console log our string in reverse
let operation5 = string.split("").reverse().join("");
console.log(operation5);

// sixth operation  console logging the substring of our string using the slice method
let operation6 = string.slice(3, 17);
console.log(operation6);

// seventh operation console log the substring of our string using the substring method 
let operation7 = string.substring(3, 17);
console.log(operation7);


// Eight operation searching for the index of a substring in our string using the search method
let operation8 = string.search("string");
console.log(operation8);

// Ninth operation repeating string with repeat method
let name = "Neme"
let operation9 = name.repeat(3);
console.log(operation9);

// Tenth operation console log the index of the substring of our string using the indexOf method
let operation10 = string.indexOf("operations");
console.log(operation10);

// eleventh operation console log the index of the substring of our string using the lastIndexOf method
let operation11 = string.lastIndexOf("operations");
console.log(operation11);


// twelfth operation replace substring with the replace method
let operation12 = string.replace("string", "strings");
console.log(operation12);

// thirteenth operation console log replace the occurance of a char in our string using the replaceAll method
let operation13 = string.replaceAll("r", "R");
console.log(operation13);

// fourteenth operation console log the split of words in our string 
let operation14 = string.split(" ");
console.log(operation14);

// fifteenth operation console log checking if a word is included in our string using the include method
let operation15 = string.includes("string"); // true 
console.log(operation15);

// sixteenth operation console log checking if a word is included in our string using the startsWith method
let operation16 = string.startsWith("The"); // true
console.log(operation16);

// seventeenth operation console log checking if a word is included in our string using the endsWith method
let operation17 = string.endsWith("string"); // false

console.log(operation17);

// eighteenth operation console log checking if a word is included in our string using the match method
let operation18 = string.match("string");
console.log(operation18);


