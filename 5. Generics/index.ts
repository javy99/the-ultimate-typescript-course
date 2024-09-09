// Understanding the problem
class KeyValuePair {
    constructor(public key: number, public value: string) { }
}

// let pair = new KeyValuePair('1', 'Aapple');  // Argument of type 'string' is not assignable to parameter of type 'number'.
// The problem - we are not able to specify the type of key and value in the KeyValuePair class.
// We can solve this problem using generics.