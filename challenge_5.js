// Coding chsllenge 5!

function Person(fullName, billsAr, tipsAr, billsNtips) {
    this.fullName = fullName;
    // var billsAr = new Array();
    // var tipsAr = new Array();
    // var billsNtips = new Array();
    this.calculateEverything = function() {
        // calculate tips, calculate bills and tips
        for (var i = 0; i <= billsAr.length - 1; i++) {
            switch (true) {
                case billsAr[i] < 50:
                    tipsAr[i] = Number(billsAr[i] * 0.2).toFixed();
                    billsNtips[i] = Number(tipsAr[i]) + Number(billsAr[i]);
                    break;
                case billsAr[i] > 50 && billsAr[i] < 200:
                    tipsAr[i] = Number(billsAr[i] * 0.15).toFixed();
                    billsNtips[i] = Number(tipsAr[i]) + Number(billsAr[i]);
                    break;
                default:
                    tipsAr[i] = Number(billsAr[i] * 0.1).toFixed();
                    billsNtips[i] = Number(tipsAr[i]) + Number(billsAr[i]);
                    break;
            }
        }
    };
    this.printTips = function() {
        console.log('Only tips!');
        for (var i = 0; i < tipsAr.length; i++) {
            console.log(tipsAr[i]);
        }
    };
    this.printBillsNtips = function() {
        console.log('Bills + Tips');
        for (var i = 0; i < billsNtips.length; i++) {
            console.log(billsNtips[i]);
        }
    };
    this.printBills = function() {
        console.log('Bills without tips!');
        for (var i = 0; i < billsAr.length; i++) {
            console.log(billsAr[i]);
        }
    };
}
var john = new Person(
    'John',
    [124, 48, 268, 180, 42],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
);
john.calculateEverything();
john.printBills();
john.printBillsNtips();
john.printTips();
