const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
}



// Old METHOD - 1

// const another = {}
// for (let key in circle)
//     another[key] = circle[key];

// Modern METHOD - 2 

// const another = Object.assign({}, circle)

// Object.assign() 
// 1st argument - can be a blank or existing object (Where to copy)
// 2,3.. argument - what needs to be copied. - One or more source objects


// const another = Object.assign({
//     color: 'yellow',
// }, circle)

// Spread Operater - 3 - Simplest way to clone an object
const another = { ...circle}

console.log(another);