function myFunction() {
    console.log("First Function with no argument and no return type");
}
myFunction();
function show() {
    console.log("second Function with no argument and no return type");
}
show();


console.log("");
console.log("/---------------Personal Details----------------------/")
function personalDetails(firstName, lastName, collegeName) {
    console.log("firstName=", firstName);
    console.log("lastName=", lastName);
    console.log("collegeName=", collegeName);

}
personalDetails("nikita", "mane", "hnimr.clg");
console.log("");
console.log("/--------------SwapValuesDude-------------------------/");

function SwapValuesDude(a,b) {
    console.log("Before Swap:a=",a,"b=",b)
    temp=a;
    a=b;
    b=temp;
    console.log("After Swap: a:",a,"b=",b);
}
SwapValuesDude("virat","Anushaka");
SwapValuesDude(1000,2000);


console.log("");
console.log("/---------------Add Three Value-------------------------/");
function addthreevalue(a, b, c) {
    return a + b + c;
}

console.log("");
console.log(addthreevalue(10.23, 600, 40));
console.log(addthreevalue("Hello ", "Good ", "Morning"));
console.log("");

