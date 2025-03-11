let x = 10;
let y = x;

x = 20;

// x - 20, y - 10

let a = {value : 10}
let b = a;

a.value = 20;

// a - 20, b - 20
// a and b pointing same object in the memory. when we change
// one of variable it will affect other as well



// Primitives are copied by their value.
// Ref types or Objects are copied by their reference.

let number = 10;

// function increase(number){
//     number++;
// }

// increase(number)
// console.log(number);

// these 2 numbers are independent. number value copied into func.
// dealing with 2 independent copies.

//Lets try out for objects

let obj = {value : 10}

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);

// Any changes in the object will visible to other variable