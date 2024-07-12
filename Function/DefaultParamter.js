/*
If you wanna use functional parameter with default value,
use that as last parameter.

function interest(principal, rate = 3.5, years){
    return principal * rate / 100 * years;
}

console.log(interest(10000,4));
this 4 will go for rate, so years will be undefined.
so NaN.

for that
console.log(interest(10000,undefined, 4));
but this is ugly and not recommended.

*/

function interest(principal, rate = 3.5, years = 5){
    // get as default value if not given.
    // rate = rate || 3.5;
    // years = years || 5;

    return principal * rate / 100 * years;
}

console.log(interest(10000,4));