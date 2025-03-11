'use strict'; // no need to use for Class

const Circle = function(){
    this.draw = function(){ console.log(this)}
}

const c = new Circle();

// Method call- calling method on object.
c.draw();

const draw = c.draw; // reference draw here.

// Function call
draw(); // will call global object. bcz this call like standalone draw function. not on object right.

/*

Earlier we told, if we forget to add new,that will point to global object.
if add new, that will point this to the particular(Circle) object
same principle applies here.

When you enable strict mode,
if you call method as function, will return undefined. so this is no longer point
to the global object.
This prevents us from accidentally modifying the global object. bcz thats bad practice.

*/

// But if we use Class, body of the Class explicitly executed within strict mode.

class Circle2{
    draw(){
        console.log(this);
    }
} 

const c2 = new Circle2();
const draw2 = c2.draw; // reference draw here.
draw2();