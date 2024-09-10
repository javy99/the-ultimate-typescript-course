import { calculateTax } from './text';

// Including JS Code in TS Projects
const tax = calculateTax(100); // 30

console.log(tax);

// Type Checking JS Code
// const tax1 = calculateTax() // NaN
// console.log(tax1);

// Describing Types Using JSDoc
const tax2 = calculateTax(10_000)
console.log(tax2);