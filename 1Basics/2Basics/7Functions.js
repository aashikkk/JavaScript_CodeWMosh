/**
 we will not use ; in the end of the function. but use in 
 end of the body.

 *Parameter vs Argument*

 function declare () - parameter pass
 Aashik is an argument to the greet function.

 function can have multiple parameters

 Function is a set of statments that either performs a task or calculate and returns a value 
 */


 // Performing a task
function greet(name, lastName){
    // body of function
    console.log('Hello, ' + name + ' ' + lastName);
}

// Calculating a value
function Square(number){
    return number * number;
}

console.log(Square(2));
/* Two function calls
    1. Square(2);
    2. console.log() --> to this function we pass a function as argument
*/

greet('Aashik', 'Shihaab');