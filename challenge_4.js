function Person(fullName, mass, height, bMI) {
    this.fullName = fullName;
    this.mass = mass;
    this.height = height;
    this.bMI = bMI;
    this.calculateBMI = function() {
        return (bMI = this.mass / (this.height ^ 2));
    };
}

var mark = new Person('Mark', 56, 179);
var john = new Person('John', 75, 190);
mark.bMI = mark.calculateBMI().toFixed(2);
john.bMI = john.calculateBMI().toFixed(2);
switch (true) {
    case mark.bMI > john.bMI:
        console.log(
            'Marks BMI is bigger than Johns \n' +
                'Marks bmi:' +
                mark.bMI +
                '\n' +
                'Johns BMI:' +
                john.bMI
        );
        break;
    case john.bMI < mark.bMI:
        console.log(
            'Johns BMI is bigger than Marks\n' +
                'Johns BMI:' +
                john.bMI +
                '\nMarks BMI:' +
                mark.bMI
        );
        break;
    default:
        console.log('BMIs are equal\n' + mark.bMI);
}
