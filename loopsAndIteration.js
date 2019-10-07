// ******************* Loops and Iteration

for (var i = 0; i <= 20; i++) {
    console.log(i);
}
// Simple basic for iteration

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i <= john.lenght; i++) {
    console.log(john[i]);
}
// Using a for loop with an array iteration
while (i < john.lenght) {
    console.log(john[i]);
    i++;
}

// continue and break statement

for (var i = 0; i <= john.lenght; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.lenght; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards

for (var i = john.lenght - 1; i >= 0; i--) {
    console.log(john[i]);
}
