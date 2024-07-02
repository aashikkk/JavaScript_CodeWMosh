/* 
[] - array literal (Empty Array)

Array is a DataStructure that we used to represent a list of items

use to store list of objects
We can have multiple types in Array
Dynamically can change the length of the array by adding or removing items
Technically array is an object
*/

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);

// Access the single item
console.log(selectedColors[0]);

// console.log(typeof selectedColors);
// --> Object

console.log(selectedColors.length);