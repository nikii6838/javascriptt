console.log(" ");
console.log(` 1] with no args and no return value,log message on console inside arrow function`);
let msg =() =>{
    console.log(`Good Morning,Today is Monday`);
}
msg();
console.log(" ");
console.log(` 2] with 3 args and no retur values ,fpr received 3 parameters perform the multiplication`);
let multipl =(num1,num2,num3=1) =>{
    let result = num1*num2*num3
    console.log(`Multiplication of number ${num1} x ${num2} x ${num3} : ${result}`);
}
multipl(5,5,2);
console.log(" ");
console.log(` 3] with 5 args and return values such as, for received if should do the addition`);
let addition = (num1,num2,num3,num4,num5)=> {
    let result = num1 +num2 + num3 + num4 +num5;
    return result;
}
let add = addition(100,100,200,349,756);
console .log(`Addition of number is : ${add}`);
let addchar =addition (" I am" ," learning"," features"," in depth");
console.log(`addition of words :${addchar}`);
