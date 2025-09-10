/* 
There are 3 different approaches to use private methods and properties using ES6.
1. Using underscore as naming convention
    Ex: _radius
    terrible approach. bcz still can access.

2. 

Symbol() === Symbol()
// false
// everything will be a unique value.
we can use this unique value as the property name of the object.

All are same.
    this.radius = radius;
    this['radius'] = radius;
    this[_radius] = radius;

*/

const _radius = Symbol(); // Symbol is not a constructor. A unique identifier.
const _draw = Symbol(); 

class Circle {
    constructor(radius){
        this[_radius] = radius; // use symbol as property name.

    }

    [_draw](){

    }
}

const c = new Circle(1);
// const key = Object.getOwnPropertySymbols(c)[0]; // access key.
// console.log(c[key]);
console.log(c); 