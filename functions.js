//You manage a grocery store and need to keep track of the inventory of various items.
// You will use arrays to store the data and various functions
// to manipulate and analyze the data.
//Create an array containing the names of all items in the inventory.
//Create a separate array with the corresponding stock quantities of each item.
//Write a function to add a new item to the inventory, updating both arrays.
//Write a function to update the stock quantity of an existing item.
//Write a function to calculate the total number of items in the inventory.
//Write a function to find the item with the lowest stock quantity.
let inventoryItems = ["cabbages", "bananas", "oranges", "cereals","melons","potatoes"];
let inventoryStock = [20, 100, 3, 10, 15, 6];

function addItems(name,stock) {
    inventoryItems.push(name);
    inventoryStock.push(stock);
  

}
console.log(inventoryItems);
console.log(inventoryStock);

addItems("pineapples",12);
console.log(inventoryItems);
console.log(inventoryStock);



function updateStock(name,newStock) {
    let index = inventoryItems.indexOf(name);
    if (index !== -1) {
      inventoryStock[index] = newStock;
    }
    
}
updateStock("oranges",20);
console.log(inventoryItems);
console.log(inventoryStock);



function totalItems() {  
    let total = 0;
    for (let i = 0; i < inventoryStock.length; i++) {
      total += inventoryStock[i];
    }
    return total;
}
console.log(totalItems()); 

function lowestStock() {
    let lowest = inventoryStock[0];
    let lowestIndex = 0;
    for (let i = 1; i < inventoryStock.length; i++) {
      if (inventoryStock[i] < lowest) {
        lowest = inventoryStock[i];
        lowestIndex = i;
      }
    }
    return inventoryItems[lowestIndex];
    
}
console.log(lowestStock());