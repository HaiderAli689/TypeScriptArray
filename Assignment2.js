"use strict";
// Insert any value in array
function insertAnyValue(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(insertAnyValue(arr, 4, 12));
//Adding and removing value in arrray
//Add Items
var shoppingCart = ['Apple', 'Mangoe', 'Banana'];
function addItems(itemIndex, name) {
    shoppingCart.splice(itemIndex, 0, name);
    return shoppingCart;
}
console.log(addItems(0, 'Orange'));
//Remove Items
function removeItems(itemIndex, numberOfRemoveItem) {
    shoppingCart.splice(itemIndex, numberOfRemoveItem);
    return shoppingCart;
}
console.log(removeItems(0, 1));
//Update Items
function updataQuntity(index, updateItem) {
    for (var i = 0; i < shoppingCart.length; i++) {
        if (index === i) {
            shoppingCart.splice(i, 1, updateItem);
        }
    }
    return shoppingCart;
}
console.log(updataQuntity(1, 'Apples'));
