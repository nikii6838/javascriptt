function interview ( gradScore,hscScore,sscScore,candidateNmae){
    if (gradScore >=70 || hscScore>=80 || sscScore >=90){
        console.log(`${candidateNmae} you are eligible for TCS interview`);
    } else{
        console.log(`${candidateNmae} you are not eligible for interview`)
    }
}
interview(80,86,90,"kalyani");
interview(70,65,55, "pornima");
interview(60,79,88,"shivani");
