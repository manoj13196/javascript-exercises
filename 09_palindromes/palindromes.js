const palindromes = function (string) {
    string=string.toLowerCase();
    newString="";
    for(let i=string.length-1;i>=0;i--)
    {
        if((string[i]>='a'&&string[i]<='z')||(string[i]>='0'&&string[i]<='9'))
        {
            newString+=string[i];
        }
    }
    
    let reverse=newString;
    let newreverse="";
    for(let i=newString.length-1;i>=0;i--)
    {   

        newreverse+=newString[i];
    }

    if(newreverse===reverse)
    {
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
