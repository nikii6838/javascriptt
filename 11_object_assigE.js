const sbiBank = {
    bankName: "SBI Bank",
    branchName: "Karmala",
    AccountName: "Rutuja Chaskar",
    AccountNo: "2345672435667",
    IFSCcode: "SBIN0001656",
    location: "karmala",
    showDetails: function () {
        console.log(`Bank Name : ${this.bankName},
         Branch Name :${this.branchName},
         Account Name: ${this.AccountName}, 
         Account Number : ${this.AccountNo}, 
         IFSC Code : ${this.IFSCcode},
         Location : ${this.location},`)
    }
};

const axisBank = {
    bankName: "AXIS Bank",
    branchName: "Nashik",
    AccountName: "Rupali kale",
    AccountNo: "876549085433",
    IFSCcode: "UTIB0000115",
    location: "Nashik",
    showDetails: function () {
        console.log(`Bank Name : ${this.bankName},
        Branch Name :${this.branchName},
        Account Name: ${this.AccountName}, 
        Account Number : ${this.AccountNo}, 
        IFSC Code : ${this.IFSCcode},
        Location : ${this.location},`)
    }
};

const HdfcBank = {
    bankName: "HDFC Bank",
    branchName: "Nagar ",
    AccountName: "Arjun Satav",
    AccountNo: "234356498763",
    IFSCcode: "HDFC0009506",
    location: "Nagar",
    showDetails: function () {
        console.log(`Bank Name : ${this.bankName},
        Branch Name :${this.branchName},
        Account Name: ${this.AccountName}, 
        Account Number : ${this.AccountNo}, 
        IFSC Code : ${this.IFSCcode},
        Location : ${this.location},`)
    }

};
const yesBank  = {
    bankName: "YES Bank",
    branchName: "Latur ",
    AccountName: "Sanika Bhosale",
    AccountNo: "4546483796653",
    IFSCcode: "YESC0005678",
    location: "Latur",
    showDetails: function () {
        console.log(`Bank Name : ${this.bankName},
        Branch Name :${this.branchName},
        Account Name: ${this.AccountName}, 
        Account Number : ${this.AccountNo}, 
        IFSC Code : ${this.IFSCcode},
        Location : ${this.location},`)
    }
};
sbiBank.showDetails();
axisBank.showDetails();
HdfcBank.showDetails();
yesBank.showDetails();

