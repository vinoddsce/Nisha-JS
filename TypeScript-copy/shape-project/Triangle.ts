// Triangle.ts 
// import shape = require("./IShape");
// export class Triangle implements shape.IShape {
//    public draw(): void {
//       console.log("Triangle is drawn (external module)");
//    }
// }

import IShape, { displayName } from './IShape';

export default class Triangle implements IShape {
   public draw(): void {
      console.log("Triangle is drawn (external module)", displayName);
   }
} 