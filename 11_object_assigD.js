const professor = {
    name : "Aditya",
    age : 50,
    gender : "Male",
    city : "Pune",
    college : "Sinhgad College of Engineering,Pune",
    degrees :{
            PHD : "Adv Computing",
            Engineering : "csc",
            Master :"computer Science",
            Bachelor : "  Computer Science",
            bachelor : "Mathematic",
            
    },
    certificates : {
        deggreeArray :[
        `Hacker Rank Participation`,
        `Certificate in IFE Cource`,
        `Certificate in ADV Programming`,
    ],
},
 allDegrees :function(){
    let details = `${this.degrees.PHD},${this.degrees.Engineering},${this.degrees.Master},${this.degrees.Bachelor}` ;
    console .log(`Teacher Degrees are :`, details);
    console.log(`Total Degrees are : `,Object.keys(this.degrees).length);
 }
};

professor.allDegrees();
professor.totalExperience = "14 years";
console.log(" Total Experience :", professor.totalExperience);
console.log("");

console.log(`Before Update  professor age : `);
console.log(professor);
console.log(" ");
professor.age ='45';

console.log(`after Update age  professor:`);
console.log(professor);
console.log(" ");


console.log(`Before add element :`, professor.certificates.deggreeArray);
 let addElement = professor.certificates.deggreeArray.push("oracle certified");
 console.log(`after add element :`,professor.certificates.deggreeArray);


let lastElement = professor.certificates.deggreeArray[professor.certificates.deggreeArray.length-1];
console.log(`Last Element of an Array :`,lastElement);


