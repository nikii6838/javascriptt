function countCharct(string)
{
    var lowerCount = 0;
    var upperCount = 0;
    for (var i= 0; i <string.length;i++ )
    {
        if (string[i] === `a`)
        {
            lowerCount++;

        } else if (string[i] ===`A`)
        {
            upperCount++;
        }
    }
    return{
        lowerCasA :lowerCount ,
        upperCaseA :upperCount
    };
}

console.log(" ");
var string1 ="I AM Learning JavaScript,the Language of internet";
console.log(`${string1}`);
var totalCount = countCharct(string1);

console.log("Total Count of `a` Chracters is :" , totalCount.lowerCasA);
console.log("Total Count of `A` Chracters is :" , totalCount.upperCaseA);

console.log(" ");

var string2 ="My favourite movie is LAggAn";
console.log(`${string2}`);
var totalCount = countCharct(string2);

console.log("Total Count of `a` Chracters is :" , totalCount.lowerCasA);
console.log("Total Count of `A` Chracters is :" , totalCount.upperCaseA);
console.log(" ");

