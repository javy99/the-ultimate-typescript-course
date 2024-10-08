// Type Aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
};

let employee1: Employee = {
    id: 1,
    name: 'Javy',
    retire: (date: Date) => {
        console.log('Retiring on ' + date);
    }
};

// Union Types
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(150);
kgToLbs('150');

// Intersection Types
let weight: number & string; // Error: Type 'number' is not assignable to type 'string'.

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {
        console.log('Dragging');
    },
    resize: () => {
        console.log('Resizing');
    }
};
// console.log(textBox);

// Literal Types
// Literal (exact, specific)

// let quantity: 50 | 100 = 100;

type Quantity = 50 | 100; // Literal Type is a subset of Union Type (50 | 100)
let quantity: Quantity = 100;

type Metric = 'cm' | 'm' | 'km';

// Nullable Types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

// greet(null); // Error: Argument of type 'null' is not assignable to parameter of type 'string'.
greet('Javy');

// Optional Chaining
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// ? - Optional property access operator (Optional Chaining) - If the property is null or undefined, it will return undefined.
console.log(customer?.birthday?.getFullYear());

// ? - Optional element access operator
// customer[0]?.birthday?.getFullYear();

// ? - Optional call operator
let log: any = null;
log?.('Hello');

// The Nullish Coalescing Operator
let speed: number | null = null;
let ride = {
    speed: speed ?? 50 // ?? - here means if speed is null or undefined, use 50. ?? is the nullish coalescing operator.
}

// Type Assertions
let phone1 = document.getElementById('phone') as HTMLInputElement;
let phone2 = <HTMLInputElement>document.getElementById('phone');
// HTMLElement is the base type of all HTML elements. We can use type assertion to cast it to a more specific type.
// HTMLInputElement is a more specific type of HTMLElement.

// The unknown Type
function render1(document: unknown) {
    // Narrowing
    if (typeof document === 'string') {
        document.toUpperCase();
    }
    if (document instanceof HTMLElement) {
        document.innerText = 'Hello';
    }

    // document.move();
    // document.fly();
    // document.whateverWeWant();
}

// The never Type
function reject(message: string): never {
    throw new Error(message);
}

function processEvents(): never {
    while (true) {
        // Read a message from a queue
    }
}

processEvents();
// reject('Something went wrong!'); // Error: Unreachable code detected.
// console.log('This will never be executed.'); // Error: Unreachable code detected.