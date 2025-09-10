Function --> ES6 Classes
![alt text](image.png)

### Function Declaration

sayHello();

function sayHello(){}
- Hoisted
-- Can call before function.

### Function Expression

sayBye(); // error.

const sayBye = function(){};
const num = 1;

- should terminate at the end for function expression.
- Not hoisted

Only Function declaration is hoisted.
![alt text](image-2.png)

but for Class nothing is hoisted
![alt text](image-1.png)


### Private Members using Symbols
![alt text](image-3.png)