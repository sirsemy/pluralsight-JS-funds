let date1 = new Date("2025-01-01");
console.log(date1);

let date2 = new Date("January 2, 2025");
console.log(date2);

let date3 = new Date();
console.log(date3);

let date4 = new Date("2023-01-01T02:30:04.312+05:00");
console.log(date4);

let date5 = new Date(2025, 0, 5, 2, 30, 4);
console.log(date5);

console.log("Full year: ", date5.getFullYear());
console.log("Month (zero-indexed): ", date5.getMonth());
console.log("Day of month: ", date5.getDate());
console.log("Hours: ", date5.getHours());

console.log("Time: ", date5.getTime());
let date6 = new Date(0);
console.log(date6.toUTCString());