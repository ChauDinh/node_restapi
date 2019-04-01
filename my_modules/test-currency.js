let Currency = require("./currency");
let canadianDollar = 0.91;

let currency = new Currency(canadianDollar);
console.log(currency.canadianToUs(50));
console.log(currency.UsToCanadian(50));