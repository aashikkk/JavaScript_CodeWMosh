/*
 Static methods belong to the class itself rather than 
 to instances of the class. This means you call the static
method on the class, not on an instance.

*/

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    // Instance method
    draw(){    
    }

    // Static method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

// const circle = new Circle(1);
const circle = Circle.parse('{"radius": 1}')
console.log(circle);

// kind of, can directly access without new. and that is 
// not an instance of class.

class Math2 {
    static abs(value){
        // ...
    }
}

Math2.abs()

