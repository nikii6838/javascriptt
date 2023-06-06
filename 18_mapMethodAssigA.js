const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

// 1. Add 10 to each element and log the new array result on the console
const newArray1 = arrayNumbers.map((num) => num + 10);
console.log("------------------------------New array after adding 10-----------------------------------------") ;
console.log(newArray1);

// 2. Square each array element and log it on the console
const newArray2 = arrayNumbers.map((num) => num ** 2);
console.log("------------------------------New array after squaring--------------------------------------------");
console.log(newArray2);

// 3. Add the index value to each corresponding array element and log the new array result on the console
const newArray3 = arrayNumbers.map((num, index) => num + index);
console.log("-------------------------New array after adding the index value------------------------------");
console.log(newArray3);