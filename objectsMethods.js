// ********************** Objects and methods

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1990',
    family: ['Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2019 - this.birthYear; // so we relate exactly to john object
    },
};

console.log(john.calcAge(john.birthYear));
