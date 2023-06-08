function maleMarriageEligibility(gender, age, boyName) {
  const msg = gender === "Male" && age >= 21 ? `Hey ${boyName}, you are eligible for marriage` : "Not eligible for marriage";
  return msg;
}

// Test cases for maleMarriageEligibility
console.log(maleMarriageEligibility("Male", 25, "Bill Gates"));
console.log(maleMarriageEligibility("Male", 17, "Steve Jobs"));

function femaleMarriageEligibility(gender, age, girlName) {
  const msg = gender === "Female" && age >= 18 ? `Hey ${girlName}, you are eligible for marriage` : "Not eligible for marriage";
  return msg;
}

// Test cases for femaleMarriageEligibility
console.log(femaleMarriageEligibility("Female", 16, "Jennifer"));
console.log(femaleMarriageEligibility("Female", 27, "Melinda Gates"));
