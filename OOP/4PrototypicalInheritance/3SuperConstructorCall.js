function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(radius, color){
    Shape.call(this,color);

    this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log('draw');
}


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const s = new Shape();
const c = new Circle(1, 'red');

console.log(c);