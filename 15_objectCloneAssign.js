
const arrayNums1 = [20, 3, 4, 56, 90, 400, 49, ];
const clonedArray = arrayNums1.slice();

clonedArray.push(55, 66);

console.log("1] Performing shallow clone")
console.log("Original Array:", arrayNums1);
console.log("Cloned Array:", clonedArray);
console.log(" ");

const arrayNums2 = [20, 3, 4, 56, 90, 400, 49, 55, 66];
const deepClonedArray = [...arrayNums2];

arrayNums2.push(10, 25);
console.log("2]performing Deep clone")
console.log("Original Array:", arrayNums2);
console.log("Deep Cloned Array:", deepClonedArray);
console.log(" ");

const arrayNums3 = [20, 3, 4, 56, 90, 400, 49 , 55, 66];
const arrayEven = [2, 30, 14, 8];

const mergedArray = [...arrayNums3, ...arrayEven];
console.log(" 3]performing Merge or Concatting Array")
console.log("Original Array:", arrayNums3);
console.log("Merged Array:", mergedArray);
console.log("");

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
      july_month: "40,000 INR",
      aug_month: "50,000 INR",
      jun_month: "65,000 INR"
    },
    address: {
      locality: {
        colony: "OM Vrindavan Society",
        street: "Kanch Pokli, 431202",
      },
      city: "Mumbai",
      state: "Maharashtra",
      country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800 - 4567 32", "+91-9096 5678 77"]
  };
  console.log(" 4] Create the employee info object")
  console.log(" ", employee_info)
  console.log(" ");
  console.log(" 5] Log the employee info object ")
  console.log(" ");
  console.log(" 5.A] Address:", `${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country}`);
  console.log(" 5.B] Mobile numbers:", employee_info.mobiles);
  console.log(" ");
  
  
  const clonedEmployeeInfo = JSON.parse(JSON.stringify(employee_info));

   
   console.log("6] perform deep copy using json.strigfy()");
  clonedEmployeeInfo.salary.july_month = "80,000 ";
  employee_info.address.country = "United Kingdom";
  
  console.log("Updated  propetry july month salary :", clonedEmployeeInfo.salary.july_month);
  console.log("Updated propetry country  :", employee_info.address.country);
  



