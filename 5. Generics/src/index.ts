// Understanding the problem
class KeyValuePair {
    constructor(public key: number, public value: string) { }
}

// let pair = new KeyValuePair('1', 'Aapple');  // Argument of type 'string' is not assignable to parameter of type 'number'.
// The problem - we are not able to specify the type of key and value in the KeyValuePair class.
// We can solve this problem using generics.

// Generic Classes
class KeyValuePair1<T> { // T is a type parameter which is a placeholder for the actual type. T - template
    constructor(public key: T, public value: string) { }
}

let pair1 = new KeyValuePair1<number>(1, 'Apple');
let pair2 = new KeyValuePair1<string>('2', 'Ball');
let pair3 = new KeyValuePair1<boolean>(true, 'Cat');

class KeyValuePair2<K, V> {
    constructor(public key: K, public value: V) { }
}

let pair4 = new KeyValuePair2<number, string>(1, 'Apple');
let pair5 = new KeyValuePair2<string, number>('2', 2);
let pair6 = new KeyValuePair2<boolean, string>(true, 'Cat');
let pair7 = new KeyValuePair2('1', 'a'); // TypeScript can infer the type of key and value. So, we can skip the type parameters.

// So, we can create an instance of KeyValuePair1 class with any type of key.

// Generic Functions
function wrapInArray(value: number) {
    return [value];
}

// let numbers = wrapInArray('1'); // Argument of type 'string' is not assignable to parameter of type 'number'.

function wrapInArray1<T>(value: T) {
    return [value];
}

let nums = wrapInArray1<number>(1);
let strings = wrapInArray1<string>('1');
let booleans = wrapInArray1<boolean>(true);

class ArrayUtils {
    wrapInArray<T>(value: T) {
        return [value];
    }
}

let arrayUtils = new ArrayUtils();
let wrappedNumbers = arrayUtils.wrapInArray<number>(1);
let wrappedStrings = arrayUtils.wrapInArray<string>('1');
let wrappedBooleans = arrayUtils.wrapInArray<boolean>(true);

class ArrayUtils1 {
    static wrapInArray<T>(value: T) {
        return [value];
    }
}

let wrappedNumbers1 = ArrayUtils1.wrapInArray<number>(1);
let wrappedStrings1 = ArrayUtils1.wrapInArray<string>('1');

// Generic Interfaces
// https://mywebsite.com/users
// https://mywebsite.com/products

interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    console.log(url);
    return { data: null, error: null }
}

interface User {
    username: string,
}

interface Product {
    title: string,
}

let result = fetch<User>('https://mywebsite.com/users');
let result1 = fetch<Product>('https://mywebsite.com/products');

// Generic Constraints
// We can restrict/constrain the type of T using constraints.
function echo<T>(value: T): T {
    return value;
}
echo<number>(1);

function echo1<T extends number | string>(value: T): T {
    return value;
}
echo1<number>(1);
echo1<string>('1');
// echo1<boolean>(true); // Type 'boolean' does not satisfy the constraint 'number | string'.

function echo2<T extends { name: string }>(value: T): T {
    return value;
}
echo2({ name: 'Alex' });
// echo2({ age: 20 }); // Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'.

interface Person11 {
    name: string,
}

function echo3<T extends Person11>(value: T): T {
    return value;
}
echo3({ name: 'Alex' });

class Person2 {
    constructor(public name: string) { }
}
class Customer1 extends Person2 {
    constructor(name: string, public age: number) {
        super(name);
    }
}

function echo4<T extends Person2>(value: T): T {
    return value;
}
echo4(new Person2('Alex'));
echo4(new Customer1('Alex', 20));

// Extending Generic Classes
interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
}

// Pass on the generic type parameter to the base class
class CompressibleStore<T> extends Store<T> {
    compress(): void {
        // Compress the store objects
    }
}

let store = new CompressibleStore<Product>();
store.compress();

// Restrict the generic type parameter to a specific type
class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

// Fix the generic type parameter to a specific type, so that it cannot be changed
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        console.log(category)
        return [];
    }
}

// When extending Generic Class we have 3 options:
// 1. Fix the generic type parameter.
// 2. Restrict the generic type parameter to a specific type.
// 3. Pass on the generic type parameter to the base class.

// The keyof Operator
interface Product1 {
    name: string;
    price: number;
}

class Store1<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }

    // T is Product
    // keyof T is 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store1 = new Store1<Product1>();
store1.add({ name: 'Apple', price: 10 });
store1.find('name', 'Apple');
store1.find('price', 10);
// store1.find('nonExistingProperty', 'value'); // Argument of type '"nonExistingProperty"' is not assignable to parameter of type '"name" | "price"'.

// The keyof operator returns the keys of a type as a union of string literal types. It is used to restrict the property name to the keys of the type.

// Type Mapping
// Type mapping is a way to transform one type into another type.
interface Product2 {
    name: string;
    price: number;
}

type ReadOnlyProduct = {
    // Index signature
    // keyof
    readonly [K in keyof Product2]: Product2[K]; // what it does? It creates a new type by iterating over the keys of Product2 and creating a new property with the same name and type.
}

let product: ReadOnlyProduct = {
    name: 'Apple',
    price: 10
};

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
}

let product1: ReadOnly<Product2> = {
    name: 'Apple',
    price: 10
};

let product2: ReadOnly<{ name: string, price: number }> = {
    name: 'Apple',
    price: 10
};

type Optional<T> = {
    [K in keyof T]?: T[K];
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html