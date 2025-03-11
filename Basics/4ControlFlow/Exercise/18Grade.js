const array = [80,80,50];


function calculateGrade(marks){
    let averageMarks = calculateAverage(marks);

    if (averageMarks  < 60)
        return "F"
    if (averageMarks < 70)
        return "D"
    if (averageMarks < 80)
        return "C"
    if (averageMarks < 90)
        return "B"
    return "A"
}

function calculateAverage(array){
    let sum = 0;
    for (let value of array) 
        sum += value;
    
    return sum / array.length;
}

console.log(calculateGrade(array));

// Every function should have single responsibility
// inorder to have clean code practice 