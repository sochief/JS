//*********** */ Operator precedence**********

var now = 2018;
var yearJohn = 1989;
 var fullAge = 18;
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);
 // returns true
 //*************First it will do all the operations, and only then it will start to compare them */
/*Check up operator presedence table in JS */

// Lets calculate the average age

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn+ageMark)/2;
console.log(average);


// Multiple assigments
var x,y;
y = x =(3+5) * 4 - 6;//Usuall laws of presedence
console.log(x,y);
// Associativity - the way operation is executed


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);