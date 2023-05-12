console.log("-------------------- Assignment 1  ------------------ 1")
console.log("");
function stringBasic()
{
    var result ="International Business Machines (IBM)"
    console.log("my dream company ->",result);
}
stringBasic();

console.log("");
console.log("---------------------------------------------------")
console.log("");

function show(hobbiesone,hobbiestwo,hobbiesthree)
{
    //Define Variables
    var hobbiesone ="Listening to music";
    var hobbiestwo = "Programing";
    var hobbiesthree = "Reading"
    console.log("My Hobbies are ->", hobbiesone,hobbiestwo,hobbiesthree);
    console.log("");
    var totalcharacters = hobbiesone.length + hobbiestwo.length + hobbiesthree.length ;
    console.log("total numbers of characters are : ->",totalcharacters);
}
show();
console.log("");
console.log("-------------------------- Asssignment 2 ----------------------------")
console.log("");
function stringHandson()
{
var givenstring ="Hey you are doing Good,keep it up";
console.log("1,Given Srting as it is ->",givenstring);
console.log("2.Total length of the given string is ->",givenstring.length)

console.log("---------------------------------------------------")
console.log("");

var trimLeadingAndTrailingSpaces = givenstring.trimStart().trimEnd();
console.log("3.After remove leading and Trailing Extra lenth is ->",trimLeadingAndTrailingSpaces.length);
var abc = givenstring.length - trimLeadingAndTrailingSpaces.length;
console.log ("4. Total Number of Removed extra space count are ->",abc);

console.log("---------------------------------------------------")
console.log("");

var firstcharacter = trimLeadingAndTrailingSpaces.charAt(0);
var lasrcharacter = trimLeadingAndTrailingSpaces. charAt (trimLeadingAndTrailingSpaces.length-1);
console.log ("5. First and last character of given string after remove extra spaces ->",firstcharacter,lasrcharacter);
}
stringHandson();
console.log("---------------------------------------------------")
console.log("");