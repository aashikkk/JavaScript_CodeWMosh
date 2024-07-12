// const first = [1, 2, 3];
const first = [{ id:1}];
const second = [4, 5, 6];

const combined = first.concat(second);
first[0].id = 10

// cut 2,3
// const slice = combined.slice(2, 4)

// cut 2-end
// const slice1 = combined.slice(2)

// get copy of array
// when copy, object - copying reference | primitive - copying reference value
const slice2= combined.slice()

console.log(combined);
console.log(slice2);