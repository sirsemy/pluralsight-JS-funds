import date from 'date.js';

// This example takes 2 seconds to run
const start = date('now');

console.log('starting timer...');
// Expected output: "starting timer..."

setTimeout(() => {
    const millis = date('now') - start;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000);

/* // This example takes 2 seconds to run
const start = Date.now();

console.log('starting timer...');
// Expected output: "starting timer..."

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000); */