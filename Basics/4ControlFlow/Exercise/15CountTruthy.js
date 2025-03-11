// const isActive = true;
// const name = "Mosh"; // Truthy (true)
// const name = ""; // Falsy (false)
// if (name) console.log('hello')

// Falsy values
// undefined
// null
// ''
// false
// 0
// NaN

// Truthy values
// Number, String, true,

// Idea - count the truthy values, check with for of iteration
// boolean or non-boolean check

function countTruthy(array){
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}

const array = [ 1, 2, 3, '', NaN, false]
console.log(countTruthy(array));
