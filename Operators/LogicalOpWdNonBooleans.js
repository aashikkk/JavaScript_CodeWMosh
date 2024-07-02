// Falsy (false)
    // undefined
    // null
    // 0 
    // false
    // ''
    // Nan (Not a number)

// Anything that is not Falsy --> Truthy

// Short-circuting
// console.log(false || 1 || 2); // 1
// Will return 1 and completely ignore those are in right hand
// side after founding true

/*
    false || true
    - true

    false || 'Mosh'
    - 'Mosh'

    false || 1
    - 1

    false || 1 || 2
    - 1

    In OR operator it will continue the search until find
    true or Truthy. 
    if that founds, it will return THAT, 
    and COMPLETELY IGNORE the left items. -- Short Circuiting

    NOW CAN understand how (Logical Op)it works with Non boolean values
*/ 

// Scenerio, if user doesnt select the color, it will go
// with defaultColor 

// let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);