function getAge(birth,death){
    if(!death)
    {
        death=new Date().getFullYear();
    }
    return death-birth;
};

const findTheOldest = function(people) {
    return people.reduce((oldest,currentPerson)=>{
        oldestAge=getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        currentAge=getAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);

        return oldestAge>currentAge?oldest:currentPerson;
    } );

};

// Do not edit below this line
module.exports = findTheOldest;
