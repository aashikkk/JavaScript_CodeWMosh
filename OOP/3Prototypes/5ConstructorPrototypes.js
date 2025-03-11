Object.getPrototypeOf(myObj)
// Equal to 
// myObj.__proto__ (parent of myObj)
// Constructor.prototype (parent of myObj)
/// Constructor ki irukira antha prototype same myObj parent.

// Object.prototype
// itha vachi than ella constructor um create aakura as the prototype.

function Circle(radius){
    this.radius = this.radius
}

// Circle.prototype 

const circle = new Circle(1);