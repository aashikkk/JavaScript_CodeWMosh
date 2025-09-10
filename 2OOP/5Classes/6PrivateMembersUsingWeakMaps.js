/*
Weakmap is essentially a dictionary where keys are
objects and values can be eliminated.
reason for calling weakMap, Keys are weak.
If there no references to the keys, they will be garbage
collecter.
*/

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius){
        _radius.set(this, radius);

        _move.set(this, () => {
            console.log('move', this);
        })
    }

    draw(){
        // console.log(_radius.get(this));
        _move.get(this)(); // function call, athan end la ();
        console.log('draw');
    }
}


const c = new Circle(1);
console.log(c.draw());