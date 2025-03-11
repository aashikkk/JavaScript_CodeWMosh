const person = {
    firstName: 'Aashik',
    lastName: 'Shihaab',
    // fullName: function (){},
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person.fullName = 'Jhon Smith'

// getters => access properties
// setters => change (mutate) them.


// console.log(person.fullName()); --> for function
// console.log(person.fullName);
console.log(person);
