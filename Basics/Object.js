/* 
    Object is like a real life object.
    When we are dealing with multiple related variables, 
    Where object comes.
    Think of a person, person has name, address, age etc

    {} - Object literal
    Key: 'value'
    keys are properties of the object 

    Access the object.
    1. Dot notation
        person.targetProperty
    2. Bracket notation
        person['targetProperty']

    Dot notation more concise, shorter. Default choice
    - Sometimes you don't know the name of target property 
    until runtime
        Ex: user may select the target property

        let selection = 'name'  // Selected property
        person[selection] = 'Mary'
*/


const person = {
    name: 'John',
    age: 20
} 


// Dot notation
person.name = 'Mosh'

// Bracket notation
person['name'] = 'Mary'

console.log(person.name);

