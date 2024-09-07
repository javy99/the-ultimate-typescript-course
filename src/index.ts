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