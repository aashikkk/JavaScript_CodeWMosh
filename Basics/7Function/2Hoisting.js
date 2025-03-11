// Function declaration
walk();

function walk(){
    console.log('walk');
}


// function Expression
run();

const run = function(){
    console.log('run');
};

/*
The difference between Function declarations and
function expressions is 
    Can run function before in function definition method.
    But not for function expressions.

Because of hoisting. 
It moves the all the functions declarations code
to the top.

Hoisting -->
    is the process of moving function declarations to
    the top the file. this is done automatically by
    the JS engine when executing the code.

*/