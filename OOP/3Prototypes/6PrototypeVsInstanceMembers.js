function Circle(radius){
    // Instance Members
    this.radius = radius;
    this.move = function(){
        this.draw(); // will search in within this func. then go to prototype.
        console.log('move');
    }
    
}

// Circle.prototype === c1.__proto__ // Both are referencing same.
// So instead of using draw method, inside the function,
// we can add the method to the prototype

// Prototype Members
Circle.prototype.draw = function(){
    // this.move(); 
    console.log('draw');
}

const c1 = new Circle(1);
// const c2 = new Circle(1);

// and can still access draw
// c1.draw();
c1.move();

// can call instance within prototype and prototype within instance.