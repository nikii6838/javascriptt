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

const employees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log("--------------------------------------TCS employee details----------------------------------------------------");
employees.forEach((employee) => {
  if (employee.empCompany === "Tcs") {
    console.log("Name:", employee.empName,"Company:", employee.empCompany);
     console.log(" ");
  }
});


console.log("-----------------------------Employees with salary greater than or equal to 50000----------------------------------");
employees.forEach((employee) => {
  if (employee.empSalary >= 50000) {
    console.log("Employee ID:", employee.empId,"Name:", employee.empName,"Department:", employee.empDept,"Salary:", employee.empSalary,"Company:", employee.empCompany);
    console.log("");
  }
});

let totalSalary = 0;

employees.forEach((employee) => {
  totalSalary += employee.empSalary;
});

console.log("------------------------------------Total salary of all employees--------------------------------------------------------");
console.log("sum of all employees salary :",totalSalary)
console.log(" ");


const averageSalary = totalSalary / employees.length;
console.log("Average salary:", averageSalary);

console.log("----------------------------IT or HR department employees with salary greater than or equal to 75000------------------------------");
employees.forEach((employee) => {
  if ((employee.empDept === "IT" || employee.empDept === "HR") && employee.empSalary >= 75000) {
    console.log("Employee ID:", employee.empId,"Name:", employee.empName,"Department:", employee.empDept,"Salary:", employee.empSalary,"Company:", employee.empCompany);

    console.log(" ");
  }
});







