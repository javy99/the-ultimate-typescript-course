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