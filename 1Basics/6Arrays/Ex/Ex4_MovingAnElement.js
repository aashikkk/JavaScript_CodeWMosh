 const numbers = [1, 2, 3, 4];

 const output = move(numbers,1, -2)

 console.log(output);

 function move(array, index, offset){
    const position = index + offset;
    if (position >= array.length || position < 0){
        console.error("Invalid offset");
        return;
    }

    const output = [...array];
    const removedItem = output.splice(index, 1)[0];
    output.splice(position,0, removedItem)
    return output;
}

 // no need to put else since we retun nothing in condition, so it will break there.