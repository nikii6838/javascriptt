const sbiBank = {
    bankName : "SBI Bank ",
    accountNo : 4567332288,
    ifsc : "SBI0005644",
    interestRate : 6.50,
};

const bankLocation = {
    street : "karve nagar",
    city : "Pune",
    pin : 411057
};

const rateOfInterest = {
    homeLoanInterest : 10.5,
    personalLoanInterest : 6.30,
    dueInterest : 7.50
};

const sbiDetails = {

};
console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log(`--------------------------------------------Object Cloning and Traversing ---------------------------------`);
console.log(`--------------------------------------------------------------------------------------------`);

console.log("--------------------------------------------Step 1 ----------------------------------------------------- ");
console.log(`---------------------------------------- Clone "SBI Bank" and "Bank Location" in SBI Bank ---------------------------`);
console.log(`Before Clone SBI Bank Properties are : `);
console.table(sbiBank);
console.log(`-----------------------------------------`);
Object.assign(sbiBank, bankLocation);
console.log(`After Clone SBI Bank Properties are : `);
console.table(sbiBank);

console.log(`---------------------------------------------------------------------------------------------------------`);
console.log("                                              Step 2: ");
console.log(`-----------------------------Merge Step 1, Step 2 and Step 4 into SBI Details ------------------------------`);
console.log(`Before Merge in SBI Details`);
console.table(sbiDetails);
console.log(`---------------------------`);
Object.assign(sbiDetails, sbiBank, bankLocation ,rateOfInterest);
console.log(`After Merge in SBI Details`);
console.table(sbiDetails);


console.log(`====================================================================================================`);
console.log("                                              Step 3 : ");
console.log(`==============================>> Traversing Merge(SBI Details) Object <<============================`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key} : ${value}`);   
    }
}