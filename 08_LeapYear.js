function checkLeapYear(leapyear) {
    if (leapyear == null || leapyear == undefined || isNaN(leapyear)) {
        console.log(`${leapyear}  is not a valid Year`);
    } else {
        if ((leapyear % 4 == 0 && leapyear % 100 != 0) || leapyear % 400 == 0) {
            console.log(`${leapyear}  is leap year `);
        } else {
            console.log(`${leapyear}  is not Leap year`);
        }
    }
}
console.log(" ");
console.log("----------Check Given Year Is Leap Or Not------------- ");
console.log(" ");
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945)
checkLeapYear(null);
checkLeapYear("twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);