// create array of inventory 

const inventory = [];

// Define three product objects
let product1 = {
        
        name: "Samsung",
        model: "P33", 
        cost: 300, 
        quantity: 5
        
};

let product2 = {

        name: "Iphone",
        model: " Iphone15 Pro max", 
        cost: 1000, 
        quantity: 10
   
};

let product3 = {

        name: "Huawei",
        model: "P34", 
        cost: 500, 
        quantity: 8
};

// Add the three products to the inventory array
inventory.push(product1, product2, product3);

// Log the inventory array to the console
console.log(inventory);

// Access the element of the third product 
let product3quantity = inventory[2].quantity;

// Log the quantity of the third element to the console
console.log(product3quantity);

// Loop through the first product and console log the value of all keys
for (let keys in inventory[0]) {
    console.log(inventory[0][keys]);
}

// Define two more products to the inventory array

let product4 = {
    name: "Screenguard",
    model: " Iphone11", 
    cost: 100, 
    quantity: 16
};

let product5 = {
    name: "smartwatch",
    model: "Apple Apple", 
    cost: 200, 
    quantity: 15
}

// Add the three products to the inventory array
inventory.push(product4, product5);

// console.log the updated inventory
console.log(inventory);
console.log("Second product name:", inventory[1].name); // Accessing name of the second product
console.log("Fourth product cost:", inventory[3].cost); // Accessing cost of the fourth product
console.log("Fifth product quantity:", inventory[4].quantity); // Accessing quantity of the fifth product




