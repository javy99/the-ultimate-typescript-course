import { calculateTax } from './text';

// Including JS Code in TS Projects
const tax = calculateTax(100); // 30

console.log(tax);

// Type Checking JS Code
const tax1 = calculateTax() // NaN
console.log(tax1);
