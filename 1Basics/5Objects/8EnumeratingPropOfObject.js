const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
}

for (let key in circle)
    console.log(key, circle[key]);

// for (let key of circle)
//     console.log(key);
// cicle is not iterable
 
// for of used with iterable such as arrays and maps
// OBJECT IS NOT ITERABLE
// SO WE CANNOT USE for of loop

for (let key of Object.keys(circle))
    console.log(key);

// Object.keys(circle) -- return an array
// array is iterable, so we can get the values using for of.

// Object is built in constructor function

for (let entry of Object.entries(circle))
    console.log(entry);

// first element is key
// second element is value

// ==================

// If given object has given property or method, to check that
// can use in operator,

if ('radius' in circle) console.log('yes');

