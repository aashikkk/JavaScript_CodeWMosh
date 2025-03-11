const numbers = [2, 3, 1];
numbers.sort()
console.log(numbers);

numbers.reverse();
console.log(numbers);

// sort is useful when you  have numbers and strings.
// but when you have objects???

const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javaScript'}
]

courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();


    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);

// what if we have javascript instead of JavaScript.???
// it will be in below order.
// for that, change to uppercase or lowercase of both.