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