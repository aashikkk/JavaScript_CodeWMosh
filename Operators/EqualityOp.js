// We use mostly Strict Equality bcz its more precise and accurate

// Strict equality (Type + Value)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality (Value)
console.log(1 == 1);
console.log('1' == 1);
// Steps
// it will change the left hand side value to String
// '1' == '1'

console.log(true == 1);
// Steps
// it will change the right hand side value to boolean
// true == true (0 - false , 1 - true)

