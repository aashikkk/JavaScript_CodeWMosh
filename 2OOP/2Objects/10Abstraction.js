// Hide the details
// Show the essentials

/*
Scope: is temporary and it dies.
Closure: determines what variables will be accessible to an inner function.

So everytime we call the draw method, these variables will be recreated(x,y)
and re initialized, then after this function they will die.
So Scope is temporary..
But closure stays there. So when we call the draw function
after finish executing this function
defaultLocation and computeOptimum will stay in memory.
They preserve in the memory state. bcz they are part of the closure of this draw function.

So here we abstact defaultLocation, computeOptimumLocation() here.
*/


function Circle(radius){
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function(factor){
        //...
    }

    this.draw = function(){
        // let x,y;

        computeOptimumLocation(0.1);
        // defaultLocation

        // to access members
        // this.radius 

        console.log('draw');
    }
}

const circle = new Circle(1);
circle.draw();