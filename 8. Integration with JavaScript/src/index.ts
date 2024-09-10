import { calculateTax } from "./tax";
import * as _ from "lodash";

// Including JS Code in TS Projects
const tax = calculateTax(100); // 30

console.log(tax);

// Type Checking JS Code
// const tax1 = calculateTax() // NaN
// console.log(tax1);

// Describing Types Using JSDoc
const tax2 = calculateTax(10_000)
console.log(tax2);

// Creating Declaration Files
// tax.js - js file
// tax.d.ts - declaration file
// Declaration files are used to describe the types of the JS code
// Using declaration files, we can type information to the TypeScript compiler

// Using Definitely Typed Declaration Files
// https://github.com/DefinitelyTyped/DefinitelyTyped
_.clone([1, 2, 3]);