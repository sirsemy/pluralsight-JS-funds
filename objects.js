let obj1 = {};

let obj2 = new Object();

obj1.firsName = "David";
obj1.lastName = "Hajdu";
obj1.isActive = true;
obj1.startDate = new Date("January 1, 2025");
obj1.vacationDays = 14;
console.log(obj1);

let obj3 = {
    firsName: "David",
    lastName: "Hajdu",
    isActive: true,
    startDate: new Date("January 1, 2025"),
    vacationDays: 14
};
console.log(obj3);

console.log(`Fist Name: ${obj3.firsName}`);
console.log(`Last Name: ${obj3["lastName"]}`);

delete obj3.firsName;
console.log(obj3);

console.log(`Non-existent valu: ${obj3.middleName}`);

let obj4 = obj3;
obj4.lastName = "Smith";
console.log(`Last Name (obj3): ${obj3.lastName}`);