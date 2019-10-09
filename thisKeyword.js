// ************ This Keyword

calculateAge(1985);
/*
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
// will refer to the window
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    },
};

john.calculateAge();
// so if we want to use another objects method, we can use methodborrowing
var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
// Here we treat a function as a variable so we make mike.calculateAge to be the same as john.calculateAge

mike.calculateAge();
