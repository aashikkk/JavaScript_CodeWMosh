function findSecondLargest(arr) {
    // Use a Set to remove duplicates, as we only need unique values
    const uniqueNumbers = Array.from(new Set(arr));

    // Check if there are less than 2 unique numbers
    if (uniqueNumbers.length < 2) {
        // Return the largest number if there's no second largest
        return Math.max(...uniqueNumbers);
    }

    // Sort the unique numbers in descending order
    uniqueNumbers.sort((a, b) => b - a);

    // Return the second largest number
    return uniqueNumbers[1];
}

// Test cases
console.log(findSecondLargest([10, 5, 8, 12, 3, 12])); // Should output 10
console.log(findSecondLargest([5, 5, 5, 5])); // Should output 5


const mySet = new Set();
mySet.add(1);    // Set: {1}
mySet.add(2);    // Set: {1, 2}
mySet.add(1);    // Set: {1, 2} (duplicate, not added)
console.log(mySet); // Output: Set(2) {1, 2}
