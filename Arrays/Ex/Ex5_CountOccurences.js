const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement){
    return array.reduce((accumulator, current)=> {
        const occurence = current === searchElement ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
    
}

// M1
// function countOccurrences(array, searchElement){
//     let count = 0;
    
//     for (let element of array)
//         if (element === searchElement)
//             count++;
//     
//     return count;
// }

// M2
// function countOccurrences(array, searchElement){
//     return array.reduce((count, element)=> {
//         if (element === searchElement){
//             count = count + 1;
//         }
//         return count;
//     }, 0);
    
// }