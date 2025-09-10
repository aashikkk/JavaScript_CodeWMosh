// Array is also an object. 
// using dot notation, can access properties and methods.

const numbers = [3,4];
// numbers = [] - constant variable, cannot reassign.
// but can add or remove elements.

// End
numbers.push(5,6)

// Beginning
numbers.unshift(1,2)

// Middle
numbers.splice(2,0, 'a', 'b')
console.log(numbers);

// splice used to delete elements also in the array