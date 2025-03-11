// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    // come under prototype. if we need to as instance, move to constructor.
    draw(){
        console.log('draw');
    }
}

const circle = new Circle(1);
console.log(circle);
// console.log(typeof Circle); // function 