// What are Decorators?
// Decorators - are attributes that we apply to our classes and their members and with this we can change how they behave. They are frequently used in Angular and vue Applications.

// Class Decorators
// class Component {
//     insertInDOM() { }
// }

// class ProfileComponent extends Component { }

function Component(constructor: Function) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    }
}

@Component
class ProfileComponent { }

// Parameterized Decorators
type ComponentOptions = {
    selector: string;
}

// Decorator Factory
function Component1(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        }
    }
}

@Component1({ selector: '#my-profile' })
class ProfileComponent1 { }

// Decorator Composition
function Pipe(constructor: Function) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}

@Component1({ selector: '#my-profile' })
@Pipe
// f(g(x)) - Pipe -> Component
class ProfileComponent2 { }

// Method Decorators
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;

    descriptor.value = function (...args: any) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After');
    }

}

class Person5 {
    @Log
    say(message: string) {
        console.log('Person says ' + message);
    }
}

let person5 = new Person5();
person5.say('Hello');