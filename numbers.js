let num1 = 6;
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
console.log(bigInt2);
