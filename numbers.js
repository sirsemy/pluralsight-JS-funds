/* let num1 = 6;
let num2 = -100000;
let num3 = 1.245644;

let num4 = 1560000000000000000000;
console.log(num4);
let num5 = -0.000000000000000000004;
console.log(num5);

let num6 = 1.2e+10;
console.log(num6);

console.log(`Minimum value: ${Number.MIN_VALUE}`);
console.log(`Minimum Safe Integer: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Maximum value: ${Number.MAX_VALUE}`);
console.log(`Maximum Safe Integer: ${Number.MAX_SAFE_INTEGER}`);

let bigInt1 = 1n;
let bigInt2 = 1_560_000_000_000_000_000_000n;
console.log(bigInt1);
console.log(bigInt2); */

let num7 = 5.63545;
console.log(`Round: ${Math.round(num7)}`);
console.log(`Ceiling: ${Math.ceil(num7)}`);
console.log(`Floor: ${Math.floor(num7)}`);

let fixed = num7.toFixed(3);
console.log(`Fixed type: ${typeof(fixed)} Fixed Value: ${fixed}`);

let num8 = 1_000_000;
console.log(`Hungary: ${num8.toLocaleString('hu-HU')}`);
console.log(`Greece: ${num8.toLocaleString('el-EL')}`);
console.log(`USA: ${num8.toLocaleString('en-US')}`);
console.log(`Bangladesh: ${num8.toLocaleString('bg-BG')}`);

let salary = 100000;
let monthlySalary = salary / 12;
console.log(`Monthly Salary: ${monthlySalary.toFixed(2)}`);

let formatter1 = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
console.log("US Dollars: ", formatter1.format(monthlySalary));

let formatter2 = new Intl.NumberFormat('de-DE', {style: "currency", currency: 'EUR'});
console.log("Euros: ", formatter2.format(monthlySalary));

let formatter3 = new Intl.NumberFormat('ja-JA', {style: "currency", currency: 'JPY'});
console.log("Yen: ", formatter3.format(monthlySalary));

let formatter4 = new Intl.NumberFormat('zh-ZH', {style: "currency", currency: 'NKD'});
console.log("Hong Kong Dollars: ", formatter4.format(monthlySalary));
