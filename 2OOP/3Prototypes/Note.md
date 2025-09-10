Take properties and methods from another object.
Easy to reuse 

![Classical Inheritance](image-1.png)

Classical vs Prototypical Inheritance

In JS, we don't have classes, we only have objects.
So, that's when prototypical inheritance comes in.

![Prototype Inheritance](image.png)

![Object of x](image-2.png)
- Same as define let y = {}

Every object has a constructor property which references the
function that was used to construct or create the object.

![Prototype Parent to x and y](image-3.png)

![getPrototypeOf(obj)](image-4.png)

x.__proto__ in debug mode. but deprecated.

How prototypical inheritance works ?
Initially JS engine lookout x object properties and methods object itself, if that couldn't find it will go to (parent)prototype for that object. And if it can find that member, it will look at the prototype of that object all the way up to the root object which we call here objectBase.

A prototype is just a regular object in memory. There is nothing special about it.
Every object has a prototype or parent, except the root object.

### Multilevel inheritance
![Array inherit from base](image-5.png)

![Properties of Array](image-6.png)

![Object also in array as well](image-7.png)

![Multi level Inheritance](image-8.png)

![Circle object](image-9.png)
Object created by a given constructor will have the same prototype.

![Circle Multilevel Inheri](image-10.png)

### Property Descriptor
![Property Descriptor](image-11.png)

![Property Descriptor 2](image-12.png)

### Constructor Prototypes

Since we create that using object literal. Under the hood, we call Object constructor like new Object();

![Constructor Prototypes](image-13.png)

Same as like,
Array base
![Array Base](image-14.png)

let array = []

array.__proto__

Array.prototype


Same as like,
Using Circle class constructor
![Circle class](image-15.png)

### Prototype vs Instance Members
![Prototype vs Instance Members](image-16.png)


![Instance within prototype](image-17.png)

Prototype within instance.
![alt text](image-18.png)

Own property vs Prototype
![alt text](image-19.png)


### Avoid Extending the Builtin Objects
Don't modify objects you don't own!.
