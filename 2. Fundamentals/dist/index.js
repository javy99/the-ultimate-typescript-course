"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numbers1 = [];
numbers1[0] = 1;
numbers1[1] = '2';
let numbers2 = [];
let user = [1, 'Javy'];
user[0].toFixed();
user.push(2);
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
calculateTax(10000);
let employee = {
    id: 1,
    name: 'Javy',
    retire: (date) => {
        console.log('Retiring on ' + date);
    }
};
//# sourceMappingURL=index.js.map