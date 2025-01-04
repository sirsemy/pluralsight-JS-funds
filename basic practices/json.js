let employee = {
    firsName: "David",
    lastName: "Hajdu",
    isActive: true,
    birthDay: new Date("January 1, 1999"),
    numYearsEmployment: 14,
    department: "Engeenering",
    title: "CTO",
    isActive: true,
    salary: 100000
};

let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue);

let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);

let jsonString = `{
    "firstName": "Elizabeth",
    "lastName": "Jones"
}`;
let obj = JSON.parse(jsonString);
console.log(obj);

let notJSON = "hello!";
let obj2 = JSON.parse(notJSON);
console.log(obj2);
