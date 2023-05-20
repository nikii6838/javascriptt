console.log("/------------------------------------------------------------------------------------/");
var dev = "I am very good IT Developer";
// var upper ="AETOU";
// var lower ="aeiou";
count = 10;
for (let index = 0; index < dev.length; index++) {
     // if(upper .includes (dev[index]))
     // {
     //      var upper = dev.charAt(index);
     //      console.log (`capital vowels are : ${upper}`);
     //      count++;
     // }
     // else if(lower.includes(dev[index])){
     //      var lower = (dev [index])
     //      console.log (`capital vowel are :${lower}`);
     //      count++;
     // }
}
console.log(`Total Number Of Vowels -> "${dev}"  ${count}`);
console.log("/------------------------------------------------------------------------------------/");

function sumCube(num) {
     let total = 0;
     for (let i = 1; i <= num; i++) {
          const cube = i * i * i;
          total += cube;
          console.log("Cube of given number is ->", i, "is", cube)
     }
     return total;
}
const result = sumCube(5);

console.log(`sum of Cubes are ->${result}`);
console.log("/------------------------------------------------------------------------------------/");

function positionChars(line) {
     let output = '';
     for (let i = 1; i < line.length; i++) {
          if (line[i] !== ' ' && i % 2 !== 0) {
               output += line[i]
          }
     }
     console.log(`Odd Positioned Chracter string ->`, output);
}
var string1 = "hard work always pay back";
var string2 = "soon I Will be Angular It Chap";
console.log(`1] Given String is -> "${string1}"`);
positionChars(string1);
console.log("   ");
console.log(`2] Given String is ->"${string2}"`);
positionChars(string2);
console.log("/------------------------------------------------------------------------------------/");




