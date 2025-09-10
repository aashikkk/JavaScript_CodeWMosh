// Mean Many forms
// Circle and Square Inherit from Shape.

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(){}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(){}

extend(Circle, Shape)

// Override duplicate func
Circle.prototype.duplicate = function(){
    console.log('duplicate circle');
}

const c = new Circle()

function Square(){}

extend(Square, Shape)

Square.prototype.duplicate = function(){
    console.log('duplicate square');
}

const shapes = [
    new Circle(),
    new Square(),
]

for (let shape of shapes)
    shape.duplicate();



/*
Using OO way is easy. if we have multiple we had to use

for (let shape of shapes)
    if (shape.type === 'circle')
        duplicateCircle();
    else if (shape.type === 'square')
        duplicateSquare();
    else
        duplicateShape();


        Think what if we have 10 shapes....
*/