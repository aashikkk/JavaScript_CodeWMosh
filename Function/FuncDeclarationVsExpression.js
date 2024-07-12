// There are two ways to define a function

// Function declaration
function walk(){
    console.log('walk');
}

// Named function Expression
const run1 = function walk(){
    console.log('run');
};

// Anonymous function Expression
const run = function(){
    console.log('run');
};
// run is reference for function.

let move = run;
run();
move();