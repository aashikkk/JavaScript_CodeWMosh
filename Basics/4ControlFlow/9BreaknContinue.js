//Ugly way of writing code, not recommended. just to know the things

// break - jump out of the loop
// continue - jump to the next iteration

let i = 0;
while ( i<10){
    // if ( i === 5) break;
    if ( i % 2 === 0 ){
        i++;
        continue;
    }
    console.log(i);
    i++;
}