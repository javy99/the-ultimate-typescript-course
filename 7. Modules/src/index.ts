// import { Square5 } from "./shapes/Square5"
// import { Circle5 } from "./shapes/Circle5"
import { Circle5, Square5 } from "./shapes"
import Store5, { Format } from "./storage"

const circle5 = new Circle5(5)
const square5 = new Square5(10)

console.log(circle5.radius)
console.log(square5.width)

// Module Formats
// AMD, UMD, CommonJS, ES2015/ES6
// AMD (Asynchronous Module Definition) is a module format that is used in web development. It is a way to define modules so that they can be imported into other modules using the require function.
// UMD (Universal Module Definition) is a module format that is used in web development. It is a way to define modules so that they can be imported into other modules using the require function.
// CommonJS is a module format that is used in Node.js. It is a way to define modules so that they can be imported into other modules using the require function.
// ES2015/ES6 is a module format that is used in modern web development. It is a way to define modules so that they can be imported into other modules using the import and export keywords.

// Default Exports
// Default exports are used to export a single value from a module. When importing a default export, you can give it any name you want.
const store5 = new Store5()
console.log(store5)
console.log(Format.Raw)

// Wildcard Imports
// Wildcard imports are used to import all the exports from a module. When importing all the exports from a module, you can give them any name you want.
// import * as Shapes from "./shapes" - wildcard import
// import * as Storage from "./storage" - wildcard import

// Re-exporting
// Re-exporting is used to export all the exports from one module in another module. When re-exporting, you can give the exports any name you want.