const fibonacci = function(n) {
    let a=0;
    let b=1;
    let sum=0;
    let value;
    if(n>=0)
    {
        for(let i=0;i<=n;i++)
            {
                value=sum;
                a=b;
                b=sum;
                sum=a+b;
            }
    }
    else{
        return "OOPS";
    }
 
    return value;
};

// Do not edit below this line
module.exports = fibonacci;
