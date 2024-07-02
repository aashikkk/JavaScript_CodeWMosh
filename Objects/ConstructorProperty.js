// Factory function
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    }
}

const circle = createCircle(1);

// Constructer function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1)

// Every object in JS has a property called constructor.
// and that references the function that was used to construct the object
// or create that object
// here we have 2 objects, circle and another.

// JS have some built-in constructors.
let x = {}
// let x = new Object(); -- like this

// Other constructors
new String(); // '', "". `` --> String literals
new Boolean(); // true, false
new Number(); // 1, 2, 3,

// Every object has a constructor property,
// and that references a function that was used to create that object