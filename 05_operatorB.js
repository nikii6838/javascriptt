console.log("")
console.log("1, Find the Grestest number among two number.");
console.log("")
var greterName = function (num1,num2){
   var result =num1>=num2 ?`${num1} is greater ` : `${num2} is greater`
   console.log (`            Greatest Number is -> ${result}`);
}
 greterName(10,-10);
 greterName(800,899);
 console.log("")
 console.log(" 2. check whether the given number is Even or Odd.");
 console.log("")
 var isEvenOrodd = function(num1){
   var result = num1%2==0 ? `Even Number` : `is Odd number`
   console.log (`             The Given Number ${num1} is -> ${result}`);
 }
 isEvenOrodd(29);
 isEvenOrodd(44);
 isEvenOrodd(0);
 isEvenOrodd(101);

 console.log("")
 console.log(" 3. check Whether the given word has Even og Odd length.")
 console.log("")

 var wordlength = function(word){
   var len = word.length;
   var result = len % 2 ==0 ? `Even` : `Odd`
   return result;

}
var returnValue = wordlength("javaScript");
console.log(`            Given Word javaScriptn has -> ${returnValue}`);
var returnValue = wordlength("Developer");
console.log(`            Given Word Developer has ->${returnValue}`) ;
var returnValue = wordlength ("Google");
console.log(`            Given word Google has -> ${returnValue}`);
console.log("")

