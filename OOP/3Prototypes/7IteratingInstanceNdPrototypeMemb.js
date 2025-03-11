function Circle(radius){
    // Instance Members
    this.radius = radius;

    this.move = function(){
        this.draw(); 
        console.log('move');
    }
    
}

const c1 = new Circle(1);

// Prototype Members
Circle.prototype.draw = function(){
    console.log('draw');
}

// even create prototype after c1, still can accessible
// bcz we are dealing with objects reference.
c1.draw();

// Returns instance members.
console.log(Object.keys(c1)); // can't see draw, bcz its prototype.

// Returns all members(instance(own) + prototype)
// Like own vs prototype.
for (let key in c1) console.log(key);

console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('draw'));