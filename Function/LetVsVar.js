function start(){
    for (var i=0; i<5; i++){
        // console.log(i);
        if (true){
            let color = 'red';
        }
    }
    // console.log(i);
    // printing 5 with outside. -> issue

    // console.log(color);
}

// var => function-scoped
// ES6 (ES2015): let, var => block-scoped

start();

// -----------------------

var color = 'red';
let age = 30;

// now color attached to window object.
// we can access window.color (but not age) in console.


/*
- why is it bad to attach a window to variable object?
    window object is something central,
    there is only one instance of the window object.

    if im using 3rd party library, in that library also 
    has a variable with same name. it will override our variable
    so, you should avoid adding stuff to the window object.
    
*/ 

function sayHi(){
    console.log('hi');
}

// we can also access window.sayHi(). this also
// need to change using encapsulation.
// will see later section.
// Need to check, now its adding to window object.

// Avoid using var.