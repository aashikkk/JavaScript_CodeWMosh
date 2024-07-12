// Scope of variable of constant means 
// where that variable is accessible.

/*
defining global variable is bad practice
it's like having toothbrush as global var. and
each function as person. think like that

in each function, that same variable name can up, and 
mess up the program and bugs.
*/

const color = "red";

function start(){
    const message = 'hi';
    const color = "blue";
    console.log(color);
}

// take local precedence over global precedence.


function stop(){
    const message = 'bye';
}

start();

// we cant access like message like log(message).
// that particular variable can accessible with 
// specific code block.