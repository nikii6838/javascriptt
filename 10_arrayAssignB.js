const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array`, arrayNumber);
console.log(" ");

let arrayLength = arrayNumber.length
console.log(`1] Length of given array -> ${arrayLength}`);
console.log(" ");

let firstElement = arrayNumber[0];
console.log(`2] first element of given array ->${firstElement} `);
console.log("  ");

let lastElement = arrayNumber[arrayNumber.length - 1];
console.log(`2] last element of given array ->${lastElement}`);
console.log(" ");

let thirdLastElement = arrayNumber[arrayNumber.length - 3];
console.log(`3] third last element of given array->${thirdLastElement}`);
console.log(" ");

let evenNumbers = []
for (const even of arrayNumber) {
    if (even % 2 === 0) {

        evenNumbers.push(even)
    }
}
console.log(` 4] Even number in given array -> ${evenNumbers} `);
console.log("");

let oddNumbers = [];
for (const odd of arrayNumber) {
    if (odd % 2 != 0) {
        oddNumbers.push(odd)
    }
}
console.log(` 5] odd number in given array -> ${oddNumbers} `);
console.log("");

console.log(" ");
var sum =0;
for(let index in arrayNumber)
{
    if (index % 2=== 0)
    {
        sum += arrayNumber[index];
    }
}
console.log(`6] sum of even number ->`,sum);
console.log(" ");

var sum = 0;
for (let oddposition in arrayNumber)
{
    if (oddposition % 2 !==0)
    {
        sum += arrayNumber[oddposition]
    }
}
console.log(`7] sum of odd number ->`,sum);
console.log(" ");

let sum1=0;
for(let index = 0 ; index < arrayNumber.length;index++)
{
    sum1 += arrayNumber [index];
}
console.log (`8] sum of all element in given array ->`,sum1);
console.log(" ");

console.log(`9] number which are multiple by five`);
let multipleFive =[];
for (let index = 0; index < arrayNumber.length ; index++)
{
    if (arrayNumber[index] % 5 == 0)
    {
        multipleFive.push(arrayNumber[index]);
    }
}
console.log(multipleFive);
console.log(" ");

let includesNumber = arrayNumber .includes (115);
console.log (`10] "115" available in [${arrayNumber}]->`,includesNumber);
console.log(" ");

let includesNumber23 = arrayNumber.includes(23);
console.log(`11] "23" available in [${arrayNumber}]->`,includesNumber23);
console.log(" ");

arrayNumber.splice(3,0,55,66);
console.log(` 12] insert number 55 66 before index 3  ->` ,arrayNumber);
console.log(" ");

let deletethree = arrayNumber.splice(4,3);
console.log(`13] delete 3 element starting frome index 4 ->`,arrayNumber);
console.log(" ");
