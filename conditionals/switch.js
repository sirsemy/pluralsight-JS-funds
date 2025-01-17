// Employee
let employee = {
    firsName: "David",
    lastName: "Hajdu",
    isActive: true,
    startDay: new Date(2016, 1, 3),
    numYearsEmployment: 7,
    department: "Engeenering",
    title: "VP Engeenering",
    isActive: true
};

switch (employee.department) {
    case 'Engeenering':
        console.log("Meet in Building 1");
        break;

    case 'Marketing':
        console.log("Meet in Building 2");
        break;

    case 'HR':
        console.log("Meet in Building 1");
        break;
        
    default:
        console.log("Meet in Building 3");
}

switch (employee.department) {
    case 'Engeenering':
    case 'HR':
        console.log("Meet in Building 1");
        break;

    case 'Marketing':
        console.log("Meet in Building 2");
        break;
        
    default:
        console.log("Meet in Building 3");
}