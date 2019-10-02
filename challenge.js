// Compare Body Mass Index
// BMI = mass / height^2 (mass in kg and height in meters)
var massMark, massJohn, heightMark, heighJohn, isMarkHigher, bmiMark, bmiJohn;
massMark = 60;
massJohn = 64;
heighJohn = 1.8;
heightMark = 1.89;
bmiJohn = massJohn/(heighJohn^2);
bmiMark = massMark/(heightMark^2);
console.log('Is Marks BMI is higher than Johns? \n');
isMarkHigher = bmiMark >bmiJohn;
console.log(isMarkHigher);