const movies = [
    { title: 'a',year: 2018, rating: 4.5 },
    { title: 'b',year: 2018, rating: 4.7 },
    { title: 'c',year: 2018, rating: 3 },
    { title: 'd',year: 2017, rating: 4.5 },
];

// All movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

// 'b', 'a'

const movie = movies
    .filter(m=>m.year === 2018 && m.rating > 4)
    .sort((a, b)=> b.rating - a.rating)
    .map(m=>m.title )
    

console.log(movie);    


// const movie = movies
//     .filter(({year, rating})=> year === 2018 && rating > 4)
//     .sort((a, b)=> b.rating - a.rating)
//     .map(m=> m.title)