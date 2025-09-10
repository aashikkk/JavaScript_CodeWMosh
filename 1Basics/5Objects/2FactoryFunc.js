// In modern JS, if the key and value are the same,
// we can remove value and simply put key
// Eg: radius: radius <==> radius

//Factory function - camelCase
function createCircle(radius){
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}

const circle1 = createCircle(1)
console.log(circle1);

const circle2 = createCircle(2)
console.log(circle2);

//single definition of draw method