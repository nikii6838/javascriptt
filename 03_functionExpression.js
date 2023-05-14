var sqaure = function (num){
    var result = num* num;
    console.log (` square of Given number is : ${result}`);

}
console.log(`1. Write a function Expression to get sqaure of the nuber Ex -> 5,6,25 100`);
sqaure (5);
sqaure(6);
sqaure(25);
sqaure(100);

//-------------------------------------------------------------------------------------------//
console.log("");
console.log(`2. check and log type of function`);
console.log(`      Type of Square variable os :-> $[typeof sqaure] `);
//----------------------------------------------------------------------------------------------//
console.log("");
console.log(` 3. Write a FE to get the area of rectangle plot[length=499 and width =917]`);
var react = function(length,width){
     area = length* width;
     console.log (`  Area of Reactangle plot -> ${area}`);
}
react(499,917);
//--------------------------------------------------------------------------------------------------//
console.log("");
console.log(`4.write a FE with two args and should swap the passed values and log on console`);
console.log (`  before swap and after swap values inside function itself.`);
console.log("")

var swapvalues = function(a,b){
    console.log(`     Before swap values are :-> ${a} ${b}`);
     [a,b]= [b,a]
    console.log(`      After swap values are :->${a} ${b}`);

}
swapvalues("Anushka","Virat")
swapvalues(1000,2000)

console.log("");
console.log(`5.write a FE which can perfect the below steps for string"js the most popular language of internet"`);
var show = "js the most popular of internet";
console.log(`        5.1 total character in the given string :-> ${show.length}`);
console.log (`        5.2 character at index 6  :-> $ {show.charAt(6)}`);
console.log(`         5.3 character at index 11 :-> ${show.charAt(11)}`);
console.log(`         5.4 Last character using length property :-> ${show.charAt(show.length-1)}`);
console.log(`         5.6 First character form given String : ->${show.charAt(0)}`);

var abc  = show.split("");
console.log (`      5.6 Total number of given String : ${abc.length}`);
sqaure(7);