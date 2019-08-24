
import { Point } from './point';


let p = new Point(1, 2);
p.setX(100);
p.drawPoint();


console.log(global);


// tsc --module amd main.ts
// tsc --module es5 main.ts
// tsc --module es6 main.ts
// tsc --module commonjs main.ts