const circle = {
    radius: 1
}

circle.color = "red"
circle.draw = function() {
    console.log('draw');
}

console.log(circle);

// here circle is const right. But we can add or remove properties of object.
// actually const is 
// const circle = {}; 
// cant change or reassign constant object
