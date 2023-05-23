console.log(" ");
const arrayFruits = [" banana","orange","Apple","Mango","Water melon"];
console.log(`Given array :${arrayFruits}`);
console.log(" ");

console.log(`1.Log the first and last element ->`)
let elementOne = arrayFruits[0];
let elementTWo = arrayFruits[arrayFruits.length-1]
console.log(`First element in array ->${elementOne}`);
console.log(`last element in array -> ${elementTWo}`);
console.log(" ");

console.log(`2. Add papaya before Element Banana ->`);
arrayFruits.splice(4,1);
console.log(`${arrayFruits}`);
console.log(" ");

console.log(`3.Remove "Mango " from the  Array ->`);
arrayFruits.splice(0,0,"papaya");
console.log(`${arrayFruits}`);
console.log(" ");

console.log(`4.Added "Pineapple" at the last position ->`)
arrayFruits.push("Pineapple");
console.log(`${arrayFruits}`);
console.log(" ");

console.log(`5.Inserch "Dragon Fruit" Before water Melon ->`);
arrayFruits.splice(5,0,"Dragon Fruit");
console.log(`${arrayFruits}`);
console.log(" ");

console.log(`6. Replace Orange with kiwi ->`);
arrayFruits[0,2] = "kiwi";
console.log(`${arrayFruits}`);
console.log(" ");

console.log(`7.Log Element Starting Form index 1 to 4 ->`);
var newindex = arrayFruits.slice(1,4);
console.log(`${arrayFruits}`);
console.log(" ");

var lastElement1= arrayFruits.slice(-3);
console.log(`8.Only select last 3 Element ->`);
console.log(`${arrayFruits}`);







