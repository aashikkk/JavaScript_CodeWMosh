// 2 - n-1 until, if that divided, not prime

function showPrime(limit){
    for(let number =2; number <= limit; number++){
        
        if (isPrime(number))
            console.log(number);
    
    }
}

console.log(showPrime(20))

function isPrime(number){
    for (let factor = 2; factor < number; factor++){
        if ( number % factor == 0)
            return false;
    }
    return true;
}