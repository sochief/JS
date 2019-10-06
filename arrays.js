// *********************** Arrays in js **************************
var names = ['John', 'Mark', ' Johanna'];
console.log(names[0]);
// Same indexing as in the other langs
// Another way to call an array

var years = new Array(1990,1999, 1998);


console.log(names);
console.log(names.length);
console.log(years);
console.log(years.length);
console.log(names[2]);
console.log(years[2]);
// Same way to call varibles from the array

names[1]='Ben';
console.log(names);
// Adding the last to an array
// First, you call the lenght of an array, and then you add the last element to it



// Mutate array data
names[names.length] = 'Mary';
console.log(names);



// You can store different data types in the array
// Also, you can apply different methods to it
// push method -- add the element to the last position in the array
//Ex


var john = ['John','Smith',1998,'teacher',false];

john.push('blue');

console.log(john);

// unshift method will add the element to the beginning of the array

john.unshift('Mr.');
console.log(john);

// Remove methods 
// pop methid will remove the last element in the array

john.pop();
console.log('We removed the last element \n');
console.log(john);
// shift method will remove the first element from the array

john.shift();
console.log('\n We removed first element from the element \n');
console.log(john);



// Find out the index of an element

console.log(john.indexOf(1998));

// If the element is not in the array the indexOf will return -1

// Now, lets check the existence of the element with an if statement


var isDesigner = john.indexOf('designer') === -1 ?
 'John is not a designer' : 'John is a designer';

console.log(isDesigner);
//