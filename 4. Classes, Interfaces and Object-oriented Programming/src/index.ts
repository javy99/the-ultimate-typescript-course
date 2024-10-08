// Creating Classes
// A class is a blueprint for creating objects with specific properties and methods already attached to them.
class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}

// Creating Objects
let account = new Account(1, 'Javy', 1000);
account.deposit(100);
console.log(account.balance); // 1100
console.log(account); // Account { id: 1, owner: 'Javy', balance: 1100 }
console.log(typeof account); // object
console.log(account instanceof Account); // true

// Read-Only and Optional Properties
class Account1 {
    readonly id: number;
    owner: string;
    balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}

// Access Control Keywords
class Account2 {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner
        this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }

    // private calculateTax() {
    // }

    getBalance(): number {
        return this._balance;
    }
}

let account2 = new Account2(1, 'Javy', 1000);
console.log(account2.getBalance());

// Parameter Properties
class Account3 {
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number
    ) {
        this.id = id;
        this.owner = owner
        this._balance = _balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }

    getBalance(): number {
        return this._balance;
    }
}

// Getters and Setters
class Account4 {
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number
    ) {
        this.id = id;
        this.owner = owner
        this._balance = _balance;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if (value < 0)
            throw new Error('Invalid value');
        this._balance = value;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
}

let account4 = new Account4(1, 'Javy', 1000);
console.log(account4.balance); // 1000

// Index Signatures
class SeatAssignment {
    // A1, A2, A3, B1, B2, B3, etc.
    // Javy, Mosh, etc.
    // Index signature property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats['A1'] = 'Javy';
seats['A2'] = 'Mosh';

// Static Members
class Ride {
    // passenger
    // pickupLocation
    // dropOffLocation
    private static _activeRides: number = 0;

    static get activeRides(): number {
        return Ride._activeRides;
    }

    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

// Inheritance
class Person {
    constructor(public firstName: string, public lastName: string) { }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    walk() {
        console.log('Walking...');
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log('Taking a test...');
    }
}

const student = new Student(1, 'Javy', 'Kosimov');

// Method Overriding
class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName;
    }
}

let teacher = new Teacher('Mosh', 'Hamedani');
console.log(teacher.fullName);

// Polymorphism
// Poly - many, morph - forms, polymorphism - many forms
function printNames(people: Person[]) {
    for (let person of people) {
        console.log(person.fullName);
    }
}

class Principal extends Person {
    override get fullName() {
        return 'Principal ' + super.fullName;
    }
}

printNames([
    new Person('Javy', 'Kosimov'),
    new Student(1, 'Mosh', 'Hamedani'),
    new Teacher('Mosh', 'Hamedani'),
    new Principal('Javy', 'Kosimov')
]);

// Open Closed Principle
// Classes should be open for extension but closed for modification.

// Private vs Protected Members
class Person1 {
    constructor(public firstName: string, public lastName: string) { }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    protected walk() {
        console.log('Walking...');
    }
}

class Student1 extends Person1 {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        this.walk();
        console.log('Taking a test...');
    }
}

// Abstract Classes and Methods
abstract class Shape {
    constructor(public color: string) { }

    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render() {
        console.log(`Drawing a circle with radius ${this.radius} and color ${this.color}`);
    }
}

// Interfaces
// Classes - Blueprint for creating objects
// Interfaces - To define the shape of objects
// abstract class Calendar {
//     constructor(public name: string) { }

//     abstract addEvent(): void
//     abstract removeEvent(): void
// }

interface Calendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calendar {
    sync(): void;
}

class GoogleCalendar implements Calendar {
    constructor(public name: string) { }

    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}