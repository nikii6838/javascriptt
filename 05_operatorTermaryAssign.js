console.log("")
console.log(" ------------------------1.male Marriage Eligibility--------------------------.");
console.log("")
var maleMarriageEligibility = function (gender,age , boyName){
    var result = gender=="Male" && age >= 21 ?  `Hey ${boyName} you are eligible for Marriage` :` Hey ${boyName} you are not eligible for Marriage`;
    console.log(result);
}
maleMarriageEligibility("Male" , 25, "Bill Gates");
maleMarriageEligibility("Male" , 17 , "stew jobs");

console.log("")
console.log("  ---------------------2.Female Marriage Eligibility -----------------------.");
console.log("")
var FemaleMarriageEligibility = function(gender,age ,girlName){
    var result = gender=="Female" && age >=18 ?  ` ${girlName} you are eligible for Marriage ` : ` ${girlName} you are Not eligible for Marriage`;
    console.log(result);
}
FemaleMarriageEligibility ("Female", 16,"Jenifer");
FemaleMarriageEligibility ("female",27,"Malida Gates");

console.log("");
console.log("");
