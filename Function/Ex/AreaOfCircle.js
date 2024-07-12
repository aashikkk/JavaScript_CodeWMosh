const circle = {
    radius: 2,
    get area(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}

circle.radius = 5;

console.log(circle.area);

/*
        return Math.PI * circle.rad * circle.rad;
    or 
        return Math.PI * this.rad * this.rad;
    
*/