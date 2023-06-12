const array = [10, 5, 'a', 'b', 'h', 11];

// Separate numbers and alphabets
const numbers = array.filter(item => typeof item === 'number');
const alphabets = array.filter(item => typeof item === 'string');

// Sort numbers and alphabets separately
numbers.sort((a, b) => a - b);
alphabets.sort();

// Print the sorted arrays
console.log(`Given array= [10, 5, 'a', 'b', 'h', 11]`)
console.log('Numbers:', numbers);
console.log('Alphabets:', alphabets);