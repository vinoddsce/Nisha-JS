// In last session we discssed about the interfaces. 
// But there is problem in that. 
var PointImpl = /** @class */ (function () {
    function PointImpl() {
    }
    PointImpl.prototype.drawPoint = function () {
        console.log("X: ", this.x, ", Y: ", this.y);
    };
    PointImpl.prototype.getDistance = function (point) {
        return 100;
    };
    return PointImpl;
}());
var n = 100;
var p1 = new PointImpl();
p1.x = 100;
p1.y = 200;
p1.drawPoint();
// let p2: PointImpl = new PointImpl();
// p2.x = 28;
// p2.y = 50;
// p2.drawPoint();
// class PointClass {
//     private x: number;
//     private y: number;
//     constructor(n1: number, n2: number) {
//         this.x = n1;
//         this.y = n2;
//     }
//     drawPoint(): void {
//         console.log("X: ", this.x, ", Y: ", this.y);
//     }
//     getDistance(point: Point): number {
//         return 100;
//     }
//     setX(n: number): void {
//         this.x = n;
//     }
// }
// let point1: PointClass = new PointClass(1, 2);
// point1.setX(12121);
// point1.drawPoint();
// Using class
// class Point {
//     x: number;
//     y: number;
// constructor() {}
//     drawPoint(): void {
//         console.log("drawPoint");
//     };
//     getDistance(another: Point): Point {
//         console.log("getDistance");
//         return new Point();
//     }
// }
// class PointClass implements Point {
//     x: number;
//     y: number;
//     drawPoint(): void {
//         console.log("drawPoint");
//     };
//     getDistance(another: Point): Point {
//         console.log("getDistance");
//         return new PointClass();
//     }
// }
// let p = new Point();
// p.x = 100;
// p.y = 200;
// p.drawPoint();
// let p2 = new Point();
// p2.x = 100;
// p2.y = 200;
// p.getDistance(p2);
