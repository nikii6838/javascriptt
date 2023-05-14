
var stringHandson = function(){
    var givenString =" Hey are doing good,keep it up ";
    console.log(`    1.Given String is -> ${givenString}`);
    console.log(`    2. Length of String is : ${givenString.length}`);

    var trimLeadingAndTrailingSpaces = givenString.trimStart().trimEnd();
    console.log(`     3.after removing leading and trailing extra spaces : ${trimLeadingAndTrailingSpaces}`);
    console.log(`     Length of string After removing extra spaces :${trimLeadingAndTrailingSpaces}`);

    var numExtraSpaceRemoved = givenString.length- trimLeadingAndTrailingSpaces.length;
    console.log(`   4  .Total number of extra spaces that is removed in : ${numExtraSpaceRemoved}`);

    var firstCharacter = trimLeadingAndTrailingSpaces.charAt(0);
    var lastCharacter  = trimLeadingAndTrailingSpaces.charAt(trimLeadingAndTrailingSpaces-1); 
    console.log (`  5.First and last chrcter of given string after remove extra spaces -> ${firstCharacter} ${lastCharacter}`);

    console.log(`   6.Count the total word Available in the String after step 3 ->${trimLeadingAndTrailingSpaces.split("").length}`);

    console.log (`  7.Index of word "good" from given string : ${trimLeadingAndTrailingSpaces.indexOf("good")}`);
    console.log (`  8.Substring starting from the index 22,using Substring Method :->${trimLeadingAndTrailingSpaces.substring(22)}`);
    console.log(`   9.Is string ends with word"up" : ${trimLeadingAndTrailingSpaces.endsWith("up")}`);
    console.log(`   10.Is String start with word "Hey" :${trimLeadingAndTrailingSpaces.startsWith("Hey")}`);
}
stringHandson();