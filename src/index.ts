let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

let level;

function render(document: any) {
    console.log(document);
}

// Array
let numbers: number[] = [1, 2, 3];
let numbers1 = [];
numbers1[0] = 1;
numbers1[1] = '2';

let numbers2: number[] = [];

// Tuples
let user: [number, string] = [1, 'Javy'];
user[0].toFixed();
user.push(2); // this is allowed, but it's not a good practice to use tuples! It's bug in TypeScript

// Enums
const small = 1;
const medium = 2;
const large = 3;

const enum Size { // if we add const keyword, it will be removed from the compiled code and it will be replaced by the value of the enum. This is to generate more optimized code
    Small = 1, // 's'
    Medium = 2, // 'm'
    Large = 3 // 'l'
}
let mySize: Size = Size.Medium
console.log(mySize);

// Functions
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;

    return income * 1.3;
}

calculateTax(10_000, 2022);
calculateTax(10_000);