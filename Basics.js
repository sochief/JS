/*console.log('Hello World!!!');
var firstName = 'John';
console.log(firstName);//you will see the name in the console, coz we load directly into the console itself
var lastName = 'Smith';
var age = 28;
console.log(firstName + lastName + age );
// JS has a dynamic typing: data types are automaticly assgned to variables
var fullAge = true;
console.log(fullAge);
var job;
console.log(job)
job = 'Teacher';
console.log(job)

var firstName = 'John';
var age = 28;

console.log(firstName + " " + age);
// define at the same time, define in the other
 var job, isMarried;
 jod = 'teacher';
 isMarried = false;
 console.log(job + isMarried + '\n' + 'Yeah, false')
 //Variable notation
 age = 'twenty eight';
 // it's automaticaly figures out the last type, so no worries!
 alert('Finally, Ive learned something new');
var lastName = prompt('What is his last name? ');
alert('Last name has changed! ');
console.log(firstName + " " + lastName);
*************************************************************/
//******************Basic operators *****************/





/* Math operators */
/*
var now, ageJohn, ageMark;
now = 2018;
ageMark = now -33;
ageJohn = now -28;
console.log(yearJohn);

console.log(now + 2);
now += 2;
console.log(now);

// Logical operators

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// Type of operator
console.log(typeof johnOlder) //Which will tell us the type of the variable

console.log(typeof ageJohn);

console.log(typeof ageMark);

var x;
console.log(typeof x);
// Will show up that its undefined


//Welcome to very basics of the operators


// If else statements

var firstName = 'John';
var civilStatus = 'Single';

if(civilStatus == 'married'){
    console.log('John is married');
}
    else{
        console.log(firstName + ' will soon ')
}
/*switch(statement){
    case(){
        do
    }
    case(){
        do
    }
} */





/** The Ternary Operator and Switch Statements */



var filmName = 'John';
var age = 16;
// first if statement variation
age >= 16 ? console.log(firstName + ' drinks beer'): console.log(firstName + ' drinks juice');
  
//second one
var drink = age >= 18 ?/*true */ 'beer' : /*false*/'juice';
console.log(drink);
  if (age>=18){
      var drink = 'beer';
  } else {
      var drink = 'juice';
  }
//third one Switch statement

var job = 'instructor';
switch(job){
    // if you want 2 similar cases with different choises you can do:
    case 'instructor':
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'designer':
        console.log(firstName + ' designe beautiful web pages');
        break;
    default:
        console.log(firstName + ' does something else.')
}


