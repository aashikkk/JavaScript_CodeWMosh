// In JS properties, attributes attached to them.
// Sometimes it prevent property being enumerated.

let person = {
    name: 'Aashik'
}

// console.log(Object.keys(person));
// we can only see name but we cannot see other attributes like
// prototypes, toString kind of.

let objectBase = Object.getPrototypeOf(person)

// descriptor of toString from objectBase

let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor);

// gonna customize name property
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
})

person.name = "Shihaab" // not gonna show change since writable: false
// enumerable: false - cannot see name property when enumerating.
delete person.name; // will not delete since configurable: false

// usually all will be true when we define.

console.log(person);