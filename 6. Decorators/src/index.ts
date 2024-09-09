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