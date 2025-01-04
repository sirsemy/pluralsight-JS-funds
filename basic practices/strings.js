
let firstName = "David";
let lastName = "Hajdu";
let title = "VP Engineering";
title = "CTO";

let fullName = firstName + " " + lastName;

fullName = `${firstName} ${lastName}`;
console.log(fullName);

let secondCharacter = title[1];
console.log("Second char: " + secondCharacter);

let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName);
let lowerCaseName = fullName.toLowerCase();
console.log(lowerCaseName);