const findTheOldest = function(persons) {
    let oldest = persons[0];
    let age = (yearOfDeath, yearOfBirth) => {
        if (yearOfDeath == undefined) {
            yearOfDeath = new Date().getFullYear();
        }
        return yearOfDeath - yearOfBirth;
    }
    persons.map((person) => {
        if (age(person.yearOfDeath, person.yearOfBirth) > age(oldest.yearOfDeath, oldest.yearOfBirth)) {
            oldest = person;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
