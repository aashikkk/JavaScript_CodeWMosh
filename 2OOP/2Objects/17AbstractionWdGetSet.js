// Need to access defaultLocation


function Circle(radius){
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.draw = function(){
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('Invalid location')

            defaultLocation = value;
        }
    })
}

const circle = new Circle(1);
// circle.defaultLocation = {x: 10, y: 20} 
console.log(circle.defaultLocation);
circle.draw();