// Coding chsllenge 5!

function Person(fullName, billsAr, tipsAr, billsNtips) {
    this.fullName = fullName;
    var billsAr = new Array();
    var tipsAr = new Array();
    var billsNtips = new Array();
    this.calculateEverything = function() {
        // calculate tips, calculate bills and tips
        for (var i = 0; i <= billsAr.lenght; i++) {
            switch (true) {
                case billsAr[i] < 50:
                    tipsAr[i] = (billsAr[i] * 0.2).toFixed(1);
                    billsNtips[i] = (tipsAr[i] + billsAr[i]).toFixed(1);
                    break;
                case billsAr[i] > 50 && billsAr[i] < 200:
                    tipsAr[i] = (billsAr[i] * 0.15).toFixed(1);
                    billsNtips[i] = (tipsAr[i] + billsAr[i]).toFixed(1);
                    break;
                case billsAr[i] > 200:
                    tipsAr[i] = (billsAr[i] * 0.1).toFixed(1);
                    billsNtips[i] = (tipsAr[i] + billsAr[i]).toFixed(1);
                    break;
            }
        }
    };
    this.printTips = function() {
        console.log('Only tips!');
        for (var i = 0; i <= tipsAr.lenght; i++) {
            console.log(tipsAr[i] + '\n');
        }
    };
    this.printBillsNtips = function() {
        console.log('Bills + Tips');
        for (var i = 0; i <= billsNtips.lenght; i++) {
            console.log(billsNtips[i] + '\n');
        }
    };
    this.printBills = function() {
        console.log('Bills withou tips!');
        for (var i = 0; i <= billsAr.lenght; i++) {
            console.log(billsAr[i] + '\n');
        }
    };
}
