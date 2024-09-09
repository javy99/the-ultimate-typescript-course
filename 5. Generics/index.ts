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

let numbers = wrapInArray1<number>(1);
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