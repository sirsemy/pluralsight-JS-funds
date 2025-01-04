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

let dateForm = new Date("2025-01-05T05:05:05-05:00");
console.log("Date 1: ", dateForm);

console.log("Calendar Date: ", dateForm.toDateString());

// Display a locale-specific date string
console.log("Locale en-US: ", dateForm.toLocaleDateString('en-US'));
console.log("Locale en-GB: ", dateForm.toLocaleDateString('en-GB'));
console.log("Locale ja-JP: ", dateForm.toLocaleDateString('ja-JP'));

// Display just time string
console.log("Date Time: ", dateForm.toTimeString());

// Display a locale-specific time string
console.log("Locale en-GB: ", dateForm.toLocaleTimeString('en-GB'));
console.log("Locale en-US: ", dateForm.toLocaleTimeString('en-US'));
console.log("Locale ja-JP: ", dateForm.toLocaleTimeString('ja-JP'));

// custom date string
let options = { dateStyle: "short", timeStyle: "short"};
console.log('Custom Date: ', dateForm.toLocaleString('en-US', options));
console.log('Custom Date: ', dateForm.toLocaleString('ar-KW', options));

