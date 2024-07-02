// Functions are Objects

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

// Circle is object here.
// Circle. --> blue icons - property
//  --> purple icons - method


// This is how internally JS, built in constructor function create objects
const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    `);

    const circle = new Circle1(1)


const another = new Circle(1)

/*

Circle.constructor
ƒ Function() { [native code] }

this function constructor create this obj

Circle.call({}, 1)
new Circle(1)
-- both are same. {} is pointing this keyword. and creating 
that object.

if we don't put new keyword, it will point out global obj.
like this.

Circle.call(window, 1);
Circle(1);

{} - first argument in call function is target of this.
*/ 

Circle.call({},1)
Circle.apply({}, [1,2,3])

// we pass arguments in an array in apply method.
// it will be useful if you have already an array
// somewhere else in our application as 2nd argument

// Takeaway - Functions are objects.