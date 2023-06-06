console.log("Given Array is : [1, -7, 40, 502, -77, 91, 0, 108, 89, -601] ");
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];


console.log("---------------------------Log the array element with its index using forEach() with arrow function----------------------------")
arrayNumbers.forEach((number, index) => {
  console.log(`Element at index ${index}: ${number}`);
});


console.log("---------------------Find the positive numbers and log on console using forEach() with arrow function --------------------");

console.log("Positive numbers:");
arrayNumbers.forEach((number) => {
  if (number > 0) {
    console.log(number);
  }
});

console.log("-------------Find the negative numbers, add into a new array, and log the new array on console using arrow function----------")
console.log("Negative numbers:");
const negativeNumbers = [];
arrayNumbers.forEach((number) => {
  if (number < 0) {
    negativeNumbers.push(number);
  }
});

console.log(negativeNumbers)


console.log("------------------Find the even numbers and log on console using forEach() with arrow function--------------------------")

console.log("Even numbers:");
arrayNumbers.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});


console.log("---------------------Find the sum of all elements from arrayNumbers and log the sum value on console-----------------------")
 
const sum = arrayNumbers.reduce((acc, number) => acc + number, 0);
console.log("Sum:", sum);


console.log("-------------------Log only the even indexed array values on console using forEach() with arrow function--------------------")
 
console.log("Even indexed array values:");
arrayNumbers.forEach((number, index) => {
  if (index % 2 === 0) {
    console.log(number);
  }
});
