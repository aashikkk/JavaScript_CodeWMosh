// Shift + alt+ down - copy down

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
]

// console.log(courses.includes({ id:1, name: 'a' }))
// false, reason - here it will check for the reference. bcz these two are not same.
//  both are in different locations, thats why it returns false
// so, if you have an array with reference type, you have to use find method instead

// called predicate / callback function
// const course = courses.find(function(course){
//     return course.name === "a";
// })

//ES6
const course = courses.find((course)=> course.name ==="a")
// const course1 = courses.findIndex((course)=> course.name ==="b")

console.log(course);
// return a first element that matches the criteria, else undefined. - find method.
