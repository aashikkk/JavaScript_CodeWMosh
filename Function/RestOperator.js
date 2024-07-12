/*

When we use this along with parameters of the function
refer to this as rest operater.

    function sum(...args){}

rest parameters is the last parameter in the function.
nothing cannot be after that.  
*/

// function sum(...args){
//     // console.log(args);
//     return args.reduce((a,b)=> a + b)
// }

// console.log(sum(1,2,3,4,5,10));


// Sum with discount

function sumWithDiscount(discount, ...args){
    let total = args.reduce((a,b)=> a + b)
    return total * (1 - discount)
}


console.log(sumWithDiscount(0.1, 20, 30));
