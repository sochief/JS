// ************ Object *******************

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'designer',
    isMarried: false,
    'a b': 1, // all of the stuff up there and down there, we can call out with an dot notation, except this one
    a: 2,
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
console.log(john);
