// Multiple references original array illanda, when we empty,
// it will remove by garbage collector.
// if we assign to another variable, it will not.
// Ex:

let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1 - 
// numbers = [];

// Solution 2 - for this, it will remove reference as well
// numbers.length = 0;

// Solution 3 - for this, it will remove reference as well
numbers.splice(0, numbers.length)

// solutin 4 - for this, it will remove reference as well
// not recommended - performance issue
while (numbers.length > 0)
    numbers.pop()

console.log(another);
console.log(numbers);


// Sol 1 and 2 are good,