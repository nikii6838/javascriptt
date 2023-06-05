console.log("  ");

const arrayNum = [11, 3, 4, 11, 4, 7, 3];

const uniqueArray = [...new Set(arrayNum)];

console.log(` 1]Given Array :${arrayNum }`);
console.log("   Removing dupalicate element from array ->",uniqueArray)
console.log(  "  ");

const str = "How are you mate";
let newchar =" ";
const arrywords = str.split(" ");
for(const element of arrywords){
  for (let index =0; index < element.length;index++){
    let char =" "
    if (index ==0 || index == element.length-1){
      char = element [index].toUpperCase();
    } else{
      char = element[index];
    }
    newchar = newchar + char;
  }
  newchar =newchar +" ";
}
console.log(newchar);

