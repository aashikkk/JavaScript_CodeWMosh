const numbers = [1, 2, 3, 4];

const max = getMax(numbers);
console.log(max);

// M3
function getMax(array){
    if (array.length === 0)
        return undefined;
    

    return array.reduce((a, b)=> a > b ? a : b);
    // return array.reduce((accumulator, current)=> accumulator > current ? accumulator : current));
}

// oru array la irunthu single result edukaporinga enda, 
// think about reduce method.

// initial value set panalana, accumulator than initial val.



/*
---M1----
function getMax(array){
    if (array.length === 0)
        return undefined;
    
    const maxNo = array.sort().reverse()[0];
    return maxNo;
}

-----M2-----
function getMax(array){
    if (array.length === 0) return undefined;

    let max = array[0];

    for (let i=1; i<array.length; i++) 
        if (array[i] > max)
            max = array[i];
    return max;
}

*/