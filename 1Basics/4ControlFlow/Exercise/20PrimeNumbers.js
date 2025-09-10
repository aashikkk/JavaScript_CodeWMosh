// Prime (whose factors are only 1 and itself)
// Composite

// 12 = 1,2,3,4,6,12
// Can be divided evenly by its factors

// 11 = 1,11
// 13 = 1,13

// 2 - n-1
// n 

//M1
function showPrime(limit) {
    for (let number=0; number < limit; number++) {
        if (isPrime(number))
            console.log(number);
    }
}

function isPrime(number) {
    if (number === 0 || number === 1)
        return false;

    // 2 - n-1
    for (let factor = 2; factor< number; factor++) {
        if (number % factor === 0)
            return false;
    }
    return true;
}


console.log(showPrime(20));



// // m2 = without single resposibility
function showPrime(limit){
    for(let number =2; number <= limit; number++){
        let isPrime = true;

        for (let factor = 2; factor < number; factor++){
            if ( number % factor == 0)
                isPrime = false;
                break;
        }
        if (isPrime)
            console.log(number);
    }
}

console.log(showPrime(20))


