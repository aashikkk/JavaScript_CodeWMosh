// if that item not in the array, will return -1.
// type also matters
// indexOf 2nd argument - from index

const numbers = [1,2,3,1,4];

// console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(1,2));
console.log(numbers.lastIndexOf(1));

// use 2nd, 1st one is ugly
console.log(numbers.indexOf(1) ==! -1);
console.log(numbers.includes(1));