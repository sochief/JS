function calculateAge(birthYear){
    return 2020 - birthYear;
}
var ageJohn = calculateAge(1997);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);


console.log(ageJane + " " + ageJohn + " " + ageMike);

// Function expression

var whatYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
            // no need of break
        case 'driver':
            return firstName + ' drives a car';
        case 'designer':
            return firstName + ' design clothes';
        default:
            return firstName + ' does something else'
    }
}
console.log(whatYouDo('teacher','John'));
//directly log to console the result of the function

console.log(whatYouDo('driver', 'Jane'));
console.log(whatYouDo('designer', 'Mark'));
console.log(whatYouDo('retired', 'Vasya'))
// euther way we can log the function directly to the console, and we will get the same answer
 console.log(typeof 23);
 console.log(typeof null);// prtints out thats its an object

 