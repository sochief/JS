// ******************* Coding challenge ************

var bills = [124,48,268];
var onlyTips = [0,0,0];
var fullTips = [0,0,0];

var tipsCalculate = function(bills){
    var i;
    for( i = 0; i < bills.length; i++){
        switch(true){
            case (bills[i] < 50):
                onlyTips[i] = bills[i]*0.2;
                fullTips[i] = (bills[i]*0.2) + bills[i];
                break;
            case (bills[i] > 50 && bills[i]) < 200:
                onlyTips[i] = bills[i]*0.15;
                fullTips[i] = bills[i]*0.15 + bills[i];
                break;
            case (bills[i] > 200):
                onlyTips[i] = bills[i]*0.1;
                fullTips[i] = (bills[i]*0.1) + bills[i];
                break;

        }
    }
}
console.log('Okay, lets try to do that stuff \n');
console.log(bills)
console.log(onlyTips);
console.log(fullTips);

tipsCalculate(bills);
console.log(bills);
console.log(onlyTips);
console.log(fullTips);