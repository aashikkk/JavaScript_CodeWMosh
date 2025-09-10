// Override the object from that base object.

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

// Override duplicate func
Circle.prototype.duplicate = function(){
    // Shape.prototype.duplicate.call(this); // if we need to duplicate parent as well

    console.log('duplicate circle');
}

const c = new Circle(1)
console.log(c.duplicate());