const movie = {
    title: 'a',
    releaseYear: 2014,
    rating: 4.5,
    director: 'b'
}


function showProperties(obj){
    for(let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}


console.log(showProperties(movie));

// console.log(typeof movie['title']);