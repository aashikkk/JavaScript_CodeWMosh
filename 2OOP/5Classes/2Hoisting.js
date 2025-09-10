// const c = new Circle(); // will return ref error.
// Both methods are not hoisted.

// Class declaration -- use this as default.
class Circle{
}

// Class expression
const Square = class {   
};



// For functions, func declarations is hoisted.
sayHi();
// sayBye(); // will return ref error.

// Function declaration
function sayHi(){}

// Function expression
const sayBye = function(){}