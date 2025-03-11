const numbers = [1, -1 ,2, 3];

// let sum = 0;
// for (let n of numbers)
//     sum += n;

// when current value set to 0
// a = 0, c = 0 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// when no current value set, it will take first value.
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// const sum = numbers.reduce((accumulator, currentValue)=> {
//     return accumulator + currentValue;
// }, 0)

console.log(sum);

// accumulator is like sum, currentValue is n.
// reduce - 2nd arg => initial value  


const sum = numbers.reduce((accumulator, currentValue)=>  accumulator + currentValue)