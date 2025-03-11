function sum(){
    let total = 0;
    // console.log(arguments);
    for (let value of arguments)
        total += value;
    return total;
}

// console.log(sum(1,2));
// console.log(sum(1)); // 1 + undefined -> NaN
// console.log(sum()); // undefinde + undefined -> NaN

console.log(sum(1,2,3,4,5,10));

// every function in JS have arguments
// we can use for of loop, on arrays. 
// technically this loop can be used on any object that has an iterator.

/*
The plain object we create with the object literal syntax, 
they dont have an iterator, but this particular object
you see, here this have symbol.iterator

That means this object have iterator, so we can use the for loop.
*/