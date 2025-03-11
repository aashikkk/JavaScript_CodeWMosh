const now = new Date()
const date1 = new Date('May 11 2020 12:04')
const date2 = new Date(2012, 0, 11, 13)

now.setFullYear(2021)
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toUTCString());

// console.log(date1.toDateString(), date2.toDateString());