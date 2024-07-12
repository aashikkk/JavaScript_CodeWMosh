const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
// console.log(last);

// Start
const first = numbers.shift();

// Middle
numbers.splice(2,1);
console.log(numbers);