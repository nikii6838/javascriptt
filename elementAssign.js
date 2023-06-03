console.log("  ");

const arrayNum = [11, 3, 4, 11, 4, 7, 3];

const uniqueArray = [...new Set(arrayNum)];

console.log(`Given Array :${arrayNum }`);
console.log("Removing dupalicate element from array ->",uniqueArray)
console.log(  "  ");

const str = "How are you mate";

const words = str.split(" ");
const formattedWords = [];

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  const formattedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  formattedWords.push(formattedWord);
}

const formattedString = formattedWords.join(" ");
console.log(`Given String Value :`,str);
console.log(" expected Output ->",formattedString);