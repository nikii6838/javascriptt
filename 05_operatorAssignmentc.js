console.log("---------------------------TCS INTERVIEW ELIGIBILITY-----------------------------------------------------------");
console.log("");
var  tcsEligibility = function(gradScore,hscScore,sscScore,candidateName){
    var result = gradScore>=70 || hscScore>=80 || sscScore>90 ? `'Congratulations' ${candidateName} you are eligible for Tcs interview ` : 
    `${candidateName} unfortunately you are not eligible for interview`;
    console.log (result);

}
tcsEligibility(80, 86 ,90,"Nikita mane");
console.log();
tcsEligibility(70, 65, 55,"pornima bhosale");
console.log();
tcsEligibility(60,79,88,"shivani shinde")
