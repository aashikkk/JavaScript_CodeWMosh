function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

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

extend(Circle, Shape)

const s = new Shape();
const c = new Circle(1, 'red');

function Square(size){
    this.size = size;
}

extend(Square, Shape);

const sq = new Square(10);

console.log(sq.duplicate());