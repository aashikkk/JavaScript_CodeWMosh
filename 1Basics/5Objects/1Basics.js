/*  
-Purpose of Object is group related variables, functions
    functions and methods
If a function is part of an object, in 2OOP terms,
we refers to that function as a method.

*/

// Object literal syntax

const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
}

circle.draw(); // Method

// If I need to create multipe circle Object, what will happen 
// I can duplicate, but not best practice,
// so, we use factory functions.