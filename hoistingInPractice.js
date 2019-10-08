/////////////////
// Lecture: Hoising
// So, we can declare the function, everywhere(end/beginning/middle) of the code
calculateAge(1965);
function calculateAge(year) {
    console.log(2019 - year);
}
// if we will do it like that, it will throwback an error, because its not a function declaration, it's a function expression
// retirement(1990); error

var retirement = function(year) {
    console.log(65 - (2016 - year));
};

retirement(1990);

//variables
var age = 23;
console.log(age);
// if we call it before defining it, it will say, that it's undefined

// and if we wont define it at all, it will throwback an error

function foo() {
    var age = 65;
    console.log(age); // this one will print out 65
}
foo();
console.log(age); // and then it will print 23
//
