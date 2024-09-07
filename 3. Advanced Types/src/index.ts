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