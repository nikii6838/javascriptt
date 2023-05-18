function voteEligibility(age){
    if (age < 0 || age == 0 || age > 120) {
        console.log (`you have Enter invalid Data -> ${age}`);

    } else{
        if (age == undefined || age == null) {
            console.log(`you have Enter Invalid Data  -> ${age}`);
        } else{
            if (age>=18 && age <= 90) {
                console.log (`you are Eligible for vating  -> ${age}`);

            }else {
                console.log(`you are not eligible for Voting -> ${age}`);
            }
        }
    }
}
console.log("  ");
console.log("check Voter Eligibility");
console.log("  ");
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(null);
voteEligibility();
console.log("");