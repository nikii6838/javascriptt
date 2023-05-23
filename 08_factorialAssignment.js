function factorialOfNum(num)
{
    if (num == null || num == undefined || isNaN(num)){
        console.log(`You have Entered "${num}" is Invalid Data`);
        return;
    }
    var result=1;
    for(var index =num; index >=1; index--)
    {
        result = result * index ;
    }
    console.log (`factorial of ${num} is -> ${result}`);
    return result;
}
console.log(' ');
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
