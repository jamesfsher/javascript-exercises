const findTheOldest = function (people) {
    // sort method
    // people.sort((a, b) => {
    //     const currentYear = new Date().getFullYear();
    //     if (!a.yearOfDeath) {
    //         a.yearOfDeath = currentYear;
    //     }
    //     if (!b.yearOfDeath) {
    //         b.yearOfDeath = currentYear;
    //     }
    //     const ageA = a.yearOfDeath - a.yearOfBirth;
    //     const ageB = b.yearOfDeath - b.yearOfBirth;
    //     return ageA > ageB ? -1 : ageA < ageB ? 1 : 0;
    // });
    // return people[0];
    // TODO a reduce method
    let result = people.reduce((currentOldest, currentPerson) => {
        if (getAge(currentOldest.yearOfBirth, currentOldest.yearOfDeath) < getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)) {
            currentOldest = currentPerson;
        }
        return currentOldest;
    });
    function getAge(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    };
    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
