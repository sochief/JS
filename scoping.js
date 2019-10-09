// Scoping answers the  question "Where can we access a certain variable?"
//Example
var a = 'Hello! '; //global scopr
first();
function first() {
    // first scope
    var b = 'Hi ';
    second();

    function second() {
        // second scope
        var c = 'hey ';
        console.log(a + b + c);
    }
}
// children can see the upper values but the parents cant
// so the console will output a b and c as well from up to down, obviously
