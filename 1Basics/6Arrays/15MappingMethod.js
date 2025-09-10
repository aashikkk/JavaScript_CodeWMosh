// can map each element in an array.
// here mapping to strings and objects.

const numbers = [1, ,-1 ,2, 3]

// const filtered = numbers.filter((number) => number >= 0)

// const items = filtered.map((n)=> `<li>${n}</li>`)

// const html = '<ul>' +  items.join('')  + '</ul>'

// console.log(html);


// const filtered = numbers.filter((number) => number >= 0)
// const items = filtered.map((n) => ({ value : n}))


/*
(n) => { value : n}
ipdi pota object da curly braces a arrow func da curly braces ndu edukum, 
edutha undefined varum, 
so to tackle, we put () paranthesis around
(n) => ({ value : n})

*/ 

// To get more cleaner code
// we didnt use filtered anywhere else, so can use chain

const items = numbers
    .filter((number) => number >= 0)
    .map((n) => ({ value : n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value)

console.log(items);