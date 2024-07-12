// every - matcher all criteria
// some - match atleast one

const numbers = [1, ,-1 ,2, 3]

const allPositive = numbers.every((value)=> value >=0);

console.log(allPositive);

// if negative number in midway, it will break and return false.

const atLeastOnePositive = numbers.some((value)=> value>=0);

console.log(atLeastOnePositive);