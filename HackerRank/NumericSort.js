var numbers = [40, 100, 1, 5, 25, 10];
let uniqueNum = [...new Set(numbers)]
// Descending
let sortedNum = uniqueNum.sort((a,b)=> {return b-a});
console.log(sortedNum[1]);


//Ascending
// return a-b


// Compare function

/*
The purpose of the compare function is to define an alternative sort order.
The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
*/ 