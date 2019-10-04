/********************************
 * Truthy and Falsy values and equality operators
 */
// Falsy values: undefined, null, ''(empty string), NaN(not a number)
// Truthy value: Not falsy values

var height = 23;

if (height){
    console.log('The variable is defined');
}   else{
    console.log('Variable is not defined');
}
// Testy way to find out is the variable is defined or not


// or we can use an OR operator

if (height || height === 0){
    console.log(' Variable is defined');
}   else{
    console.log(' Variable is not defined');
}

0==false   // true, because false is equivalent of 0
0===false  // false, because both operands are of different type
2=="2"     // true, auto type coercion, string converted into number
2==="2"    // false, since both operands are not of same type
// Equality operations
if(height == '23')
// it converts string to a number and then it compares, so thats the reason we get TRUE
{
    console.log('The operator == does type coercion!');
}