// Circle.ts 
// import shape = require("./IShape");

// export class Circle extends shape.Shape {
//     public draw(): void {
//         console.log("Cirlce is drawn (external module)", this.name);
//     }
// }

import IShape, { displayName } from './IShape';

export default class Circle implements IShape {

    constructor() { }

    public draw(): void {
        console.log("Cirlce is drawn (external module)", displayName);
    }
} 