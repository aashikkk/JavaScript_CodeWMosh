function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log('draw');
}

// Object.create(Object.prototype) // Object Base
// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() -> new Circle();

// Inherit from Shape  
Circle.prototype = Object.create(Shape.prototype);
// Reset to the Circle constructor
Circle.prototype.constructor = Circle;

const s = new Shape();
const c = new Circle(1);



