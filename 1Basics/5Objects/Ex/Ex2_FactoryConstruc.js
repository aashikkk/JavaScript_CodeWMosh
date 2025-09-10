// Using object literals
// const address = {
//     street: 'St. Pauls Lane',
//     city: 'London',
//     zipCode: '11000'
// }

const address = createAddress("a", "b", "c")
const address2 = new Address("a", "b", "c")

// Factory func
function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}

// Constructor func
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

console.log(address);
console.log(address2);