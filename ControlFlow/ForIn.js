const person = {
    name: "Aashik",
    age: 25,
}

// for ( key in object)

for (let key in person) {
    console.log(key , person[key]);
}

// Dot Notation 
// person.name

// Bracket Notation
// person['name']

/* 
here person.key, we cannot use, bcz we dont have object like, thats meant if we do like
==>undefined
so here we use bracket notation for, we dont know until run time.

*/

const colors = ["red", "green", "blue"]

for (let index in colors){
    console.log(index, colors[index]);
}