
const sumAll = function(a,b) {
    let sum=0;
    if(a<0||b<0||typeof(a)=='string'||typeof(b)=='string'||
        Array.isArray(a)||Array.isArray(b)||
        !Number.isInteger(a)||!Number.isInteger(b))
        {
            return "ERROR";
        }
    else if(a===b)
    {
        return a;
    }
    else if(a>b)
    {
        a=a+b;
        b=a-b;
        a=a-b;
    }

        for(let i=a;i<=b;i++)
        {
            sum+=i;
        }
        return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
