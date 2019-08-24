// Triangle.ts 
// import shape = require("./IShape");
// export class Triangle implements shape.IShape {
//    public draw(): void {
//       console.log("Triangle is drawn (external module)");
//    }
// }
import { displayName } from './IShape';
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log("Triangle is drawn (external module)", displayName);
    };
    return Triangle;
}());
export default Triangle;
