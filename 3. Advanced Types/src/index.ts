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
