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