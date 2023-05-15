console.log("//-------------------------------------------------------------------------//");
function squareOfWordLength(str){
var lengthOFWord = str.length;
console.log(`string length is -> ${lengthOFWord}`);
var squareOfword =lengthOFWord*lengthOFWord;
console.log(`string length square is -> ${squareOfword}`)
}

squareOfWordLength ("JavaScript");
squareOfWordLength ("Google Chrome");
squareOfWordLength ("Developer Smart");

console.log("//--------------------------------------------------------------------------// ");

function angularDev(){
    var stringGiven ="I am Angular DEveloper";
    var strlength = stringGiven.length;
    console.log (`length of given string is -> ${strlength}`);
    var splittedAnd = stringGiven.split(" ");
    console.log(`splitted String is ->${splittedAnd}`);

    var splittedAndlength = splittedAnd .length;
    console.log(`Total no of word vailable in string is -> ${splittedAndlength}`);
    var divResult = strlength / splittedAndlength;

    console.log(`string length / total no of words-> ${divResult}`);
    var multiplyResult = strlength * splittedAndlength;

    console.log(`String length * total no in string is : ${multiplyResult}`);
}
angularDev();
console.log("//-------------------------------------------------------------------------//");


