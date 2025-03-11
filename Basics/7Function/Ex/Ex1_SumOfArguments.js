function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));

/*
Method 1
function sum(){
    let total = 0;
    // console.log(arguments[0]);
    if (Array.isArray(arguments[0])){
        for (let i of arguments[0])
            total += i;
        return total;
    }

    for (let i of arguments)
        total += i;
    return total;

}

*/
