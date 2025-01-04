let strValue = "Hi";
console.log(typeof(strValue));

let numValue = 1;
console.log(typeof(numValue));

let boolValue = true;
console.log(typeof(boolValue));

let age = 41;
let firstName = "Szabolcs";
let description = `${firstName} is ${age} years old`;
console.log(description);

let ageString = "41";
let ageNum = Number(ageString);
console.log(typeof(ageNum));

let ageNewNumber = new Number(ageString);
console.log(typeof(ageNewNumber));

let ageString2 = "fourty-one";
let ageNum2 = Number(ageString2);
console.log(`Age string 2: ${ageNum2}`);

let ageString3 = "41a";
let ageNum3 = Number(ageString3);
console.log(`Age string 2: ${ageNum3}`);
let isInvalid = isNaN(ageNum3);
console.log(`Is invalid: ${isInvalid}`);

let bool5 = true;
console.log(`bool 5: ${bool5}`);