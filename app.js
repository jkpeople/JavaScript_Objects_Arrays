// console.log("Hello World!\n==========\n");

// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129]

function arraysum(arr) {
    // iterate over the values in an array
    // reduce and return a sum

    let sum = 0;

    for (let i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum; 
}

console.log(arraySum(numbers));