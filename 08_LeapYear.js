function chekLeapYear(leapyear){
    if(leapyear == null || leapyear == undefined || isNaN (leapyear)){
        console.log (`${leapyear}  is not a valid Year`);
    } else{
        if ((leapyear % 4 == 0 && leapyear % 100 !=0)|| leapyear %400 ==0){
            console.log (`${leapyear}  Year is leap year `);
        } else{
            console.log(`${leapyear}  Year is not Leap year`);
        }
    } 
}
console.log(" ");
console.log("----------Check Given Year Is Leap Or Not------------- ");
console.log(" ");
chekLeapYear(2020);
chekLeapYear(1999);
chekLeapYear(1600);
chekLeapYear(2022);
chekLeapYear(1945);
chekLeapYear(null);
chekLeapYear("twenty Twenty");
chekLeapYear(undefined);
chekLeapYear(NaN);
chekLeapYear(1750);