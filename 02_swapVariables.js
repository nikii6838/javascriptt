//swap two variable

var sweety = "sweety";
var cutie = "cutie";

console.log("");
console.log("/-----------------Before Swap---------------/");
console.log("sweety=", sweety);
console.log("cutie", cutie);

var temp = sweety;
sweety = cutie;
cutie = temp;

console.log("");
console.log("/-----------------After Swap------------------/");
console.log("sweety=", sweety);
console.log("cutie", cutie);



//swap three variable
var num1 = 100;
var num2 = 200;
var num3 = 300;

console.log("");
console.log("/-----------------Before Swap ------------------/");
console.log("num1=", num1, "num2 =", num2, "num3=", num3);

var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;

console.log("");
console.log("/-------------------After Swap--------------------/");
console.log("num1=", num1, "num2=", num2, "num3=", num3);
