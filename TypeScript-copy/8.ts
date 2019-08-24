

// In last session we discssed about the interfaces. 
// But there is problem in that. 

// Cohesion
// In OOP language we have concept called Cohesion. Which means things that 
// are related shoud be part of one unit and they should go togeter. 

// Classes

// interface Point {
//     x: number,
//     y: number
// }
// // With this interface i am defining an shape of an object.

// let drawPointObjectInterface = (point: Point) => {
//     console.log('X: ' + point.x);
//     console.log('Y: ' + point.y);
// }

// drawPointObjectInterface({
//     x: 1,
//     y: 2
// });

// // // What if we write another function as below ??

// let getDistance = (pointA: Point, pointB: Point) => {
//     // ..
// }

// Again we have voilated the concept of Cohesion principle. We have 
// two functions hanging in there saperate from the point object. 
// Since these functions are highly related they should part of one Unit. 

// Class 
// In OOP we called that unit as classes. 

// A class is group of variable (properties) and 
// functions (methods) that are highly related. 

// In interface we cann't have implementations, we can have only declarations. 
// Rewriting the Point interface

interface Point {
    x: number,
    y: number,
    drawPoint: () => void,
    getDistance: (another: Point) => number
}


// class PointImpl {
//     x: number;
//     y: number;
//     drawPoint(): void {
//         console.log("X: ", this.x, ", Y: ", this.y);
//     }
//     getDistance(point: PointImpl): number {
//         return 100;
//     }
// }

// let n: number = 100;

// let p1: PointImpl = new PointImpl();
// p1.x = 100;
// p1.y = 200;
// p1.drawPoint();


// let p2: PointImpl = new PointImpl();
// p2.x = 28;
// p2.y = 50;
// p2.drawPoint();





class PointClass {
    private x: number;
    private y: number;

    constructor(n1: number, n2: number) {
        this.x = n1;
        this.y = n2;
    }

    drawPoint(): void {
        console.log("X: ", this.x, ", Y: ", this.y);
    }
    getDistance(point: Point): number {
        return 100;
    }

    setX(n: number): void {
        this.x = n;
    }
}

let point1: PointClass = new PointClass(1, 2);
point1.setX(12121);
point1.drawPoint();


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