// street
// city
// zipcode
// showAddress(address)

const address = {
    street: 'St. Pauls Lane',
    city: 'London',
    zipCode: '11000'
}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address)