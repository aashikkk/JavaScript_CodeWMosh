// Camel Notation: oneTwoThree
// Pascal Notation: 

//Factory function - camelCase
function createCircle(radius){
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);
// when we declare new, 3 things will happen
// 1. creating an empty object  ==> like const x = {}
// 2. set that 'this' to point this(x) object
// 3. it will return this new object from that function. like return this in constructor function


// Difference between factory function and constructor function
// 1. call function that will return this object
    // we use new operator, and use this keyword
// 2. Naming convention - camelCase
        // Pascal case 

// Both are equally good, pick one pattern and stick to that