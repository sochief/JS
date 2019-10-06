// ******************* Coding challenge ************

var bills = [124,48,268];
var onlyTips = [0,0,0];
var fullTips = [0,0,0];

var tipsCalculate = function(bills){
    var i;
    for( i = 0; i < bills.length; i++){
        switch(true){
            case (bills[i] < 50):
                onlyTips[i] = (bills[i]*0.2).toFixed();
                fullTips[i] = ((bills[i]*0.2) + bills[i]).toFixed();
                break;
            case (bills[i] > 50 && bills[i]) < 200:
                onlyTips[i] = (bills[i]*0.15).toFixed();
                fullTips[i] = (bills[i]*0.15 + bills[i]).toFixed();

                break;
            case (bills[i] > 200):
                onlyTips[i] = (bills[i]*0.1).toFixed();
                fullTips[i] = ((bills[i]*0.1) + bills[i]).toFixed();
                break;

        }
    }
}
var billsOut = function(bills,onlyTips, fullTips){
    console.log('Here are the bills, only tips, bills and tips coloumns \n');
    console.log('Restaurant number           Bills          Only tips           Bills with tips');
    for(i = 0; i < bills.length ; i++){
        console.log('Restaraunt no:'+ bills.indexOf(bills[i])+'              '+bills[i]+'                '+ onlyTips[i] + '                 '+ fullTips[i]);
    }
}

tipsCalculate(bills);
billsOut(bills, onlyTips, fullTips);
