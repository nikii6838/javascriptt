function gradeCalculation(marks){
    if (marks <= 0 || marks >100 || isNaN (marks)){
        console.log (`please provide the valid marks`);
 } else{
    if (marks == undefined || marks == null){
        console.log(`please provide the valid marks`);
    } else{
        if (marks >= 90){
            console.log(`Fantastic Marks ${marks},  your Grade is A+`);
        } else{
           if (marks >= 75){
                console.log(`Fantastic Marks ${marks},  Your Grade is A`);
            } else{
                if (marks >= 50){
                    console.log(`Excellent Marks ${marks},  your Grade is B`);

                } else{
                    if (marks >= 35){
                        console.log(`Mark is ${marks},  your grade is c,  Need improvement`);
                    } else{
                        console.log (`your marks${marks},   very less, hence your are Failed......`)
                    }
                }
            }

            }
        }
    }
 }
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(35);
gradeCalculation(150);
gradeCalculation(29);
gradeCalculation(-7);
gradeCalculation(49);
gradeCalculation(null);
    
   