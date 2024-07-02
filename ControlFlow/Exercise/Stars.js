console.log(showStars2(5))

function showStars(rows){
    for (let i=1;i<=rows;i++) 
        console.log('*'.repeat(i));
}

// M2
function showStars2(rows){
    for (let row=1; row<=rows;row++){
        let pattern =''
        for (let i=0; i<row;i++)
            pattern += '*'
        console.log(pattern);
    }
}
