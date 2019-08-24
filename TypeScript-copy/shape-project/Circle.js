// Circle.ts 
// import shape = require("./IShape");
// export class Circle extends shape.Shape {
//     public draw(): void {
//         console.log("Cirlce is drawn (external module)", this.name);
//     }
// }
import { displayName } from './IShape.js';
export default class Circle {
    constructor() { }
    draw() {
        console.log("Cirlce is drawn (external module)", displayName);
    }
}
