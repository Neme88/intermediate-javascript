document.addEventListener ("DOMContentLoaded", (event) => {
    const addButton = document.getElementById ("addButton");
    const removeButton = document.getElementById ("removeButton");
    const changeColorButton = document.getElementById ("changeColorButton");
    const itemList = document.getElementById("itemList");   
});

// Function to add a new item to the list 
addButton.addEventListener('click', (event) => {
    const newItem = document.createElement("li");
    newItem.innerText = 'Item ${itemList.children.length + 1}';
    itemList.appendChild(newItem);
    updateRemoveButtonVisibility();
});

// Function to remove an item from the list
removeButton.addEventListener('click', (event) => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastChild);
        updateRemoveButtonVisibility();
    }
});

// Function to change the  background color of the entire button
changeColorButton.addEventListener('click', (event) => {
    document.body.style.backgroundColor = getRandomColor();
});

// Function to update the visibility of the removed button 
function updateRemoveButtonVisibility() {
    if (itemList.children.length === 0) {
        removeButton.style.display= "none";
    } else {
        removeButton.style.display = "inline-block";
    }
}

// Function to generate a random color
 function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initial check to set the correct visibility of the remove button
updateRemoveButtonVisibility();

