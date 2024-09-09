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

