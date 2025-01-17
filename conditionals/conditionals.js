// Employee
let employee = {
    firsName: "David",
    lastName: "Hajdu",
    isActive: true,
    birthDay: new Date("January 1, 1999"),
    numYearsEmployment: 14,
    department: "Engeenering",
    title: "VP Engeenering",
    isActive: true
};

// Example from module introduction
if (employee.numYearsEmployment < 5) {
    employee.badgeColor = "blue";
} else if (employee.numYearsEmployment < 10) {
    employee.badgeColor = "yellow";
} else if (employee.numYearsEmployment < 15) {
    employee.badgeColor = "red";
} else if (employee.numYearsEmployment < 20) {
    employee.badgeColor = "purple";
} else {
    employee.badgeColor = "silver";
}
console.log(`Years: ${employee.numYearsEmployment} Badge color: ${employee.badgeColor}`);

// Evaluating multiple conditions for truthyness in all conditions
if (employee.numYearsEmployment > 5 && employee.department === "Engeenering") {
    console.log("Employee meets criteria");
}

if (employee.numYearsEmployment > 10 || employee.title.startsWith("VP")) {
    console.log("Employee meets second criteria");    
}

if (employee.numYearsEmployment > 20 && !employee.isActive) {
    console.log("Employee is retired with full retirement benefit");
}

// Using the ternary operator
if (employee.numYearsEmployment > 10) {
    employee.annualBonus = 1000;
} else {
    employee.annualBonus = 500;
}

employee.annualBonus = (employee.numYearsEmployment > 10) ? 1000 : 500;
console.log(employee.annualBonus);