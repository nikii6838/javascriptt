class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee(22, "Anil", "It", 50000, "Tcs");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "Tcs");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(22, "Monika", "It", 40000, "Wipro");
const empViny = new Employee(22, "Vinayak", "It", 75000, "Tcs");
const empMahi = new Employee(22, "Mahesh", "HR", 85000, "Infy");

let array_employees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi]


console.log(" ---------------------------------------------------Employees working in TCS--------------------------------------------------------------------------");
array_employees.forEach(emp => {
  if (emp.empCompany === "Tcs") {
    console.log("Employee Name:", emp.empName,"Company Name:", emp.empCompany);
    
  }
});
console.log(" ");

console.log("------------------------------------------------Finance department employees-------------------------------------------------------------------------------");
array_employees.forEach(emp => {
  if (emp.empDept === "Finance") {
    console.log("Department:", emp.empDept,"Employee Name:", emp.empName);
    
  }
});
console.log(" ");

console.log("----------------------------------------------Employees whose names start with 'R'------------------------------------------------------------------------------");
for (const emloyee of array_employees) {
    if (emloyee.empName.startsWith("R")) {
        console.log(`complete details of  whors name start with " R" :${JSON.stringify(emloyee)}`);
    }
}
console.log(" ");
console.log(" -----------------------------------------Employees with salary greater than 75000-----------------------------------------------------------------------------------");
for (const employee of array_employees) {
    if (employee.empSalary > 75000) {
        console.log(`Whoes salary greater than 75000 => emp name :${employee.empName} Employee Company : ${employee.empCompany} Employee Salary : ${employee.empSalary}`)
    }
}
console.log(" ");
console.log("---------------------------------------Employees with salary greater than or equal to 50000 and from the 'IT' department-------------------------------------------");
for (const emloyee of array_employees) {
    if (emloyee.empSalary >= 50000 && emloyee.empDept == "IT") {
        console.log(`whoes salary >= 50000 and from It Dept : ${JSON.stringify(emloyee)} `)
    }
}

console.log(" ");
console.log("------------------------------------------------------Employees from the company 'Infy'-----------------------------------------------------------------------------");
for (const employee of array_employees) {
    if (employee.empCompany == "Infy") {
        console.log(`Employee Details with company "Infy : ${JSON.stringify(employee)}`);
    }
}
