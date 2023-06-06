const arrayNums = [10, 5, 70, 90, 100, 30, 47 ];

const array = ["Bill", "Stew Jobs", "Elon Musk", "Mark", "Sundar"];
// Length of the word and square it and then sum it all
let result = 0; // 16
array.forEach( (element) => {
     const wordLength = element.length;
     result = result + wordLength * wordLength;
} );
console.log(result);


// WAP to get the sum of all salary of Infy employees
let sumSalaryOfInfy = 0;
array_employees.forEach( (employee)=> {
    if (employee.emp_company == "Infy") {
        sumSalaryOfInfy = sumSalaryOfInfy + employee.emp_salary;
    }
});
console.log(sumSalaryOfInfy);

// WAP to find the average salary of an employee 
let sumSalary = 0;
array_employees.forEach( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
let averageSalary = sumSalary / array_employees.length;
console.log(`Average Salary is : ${averageSalary}`);