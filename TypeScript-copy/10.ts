// CONSTRUCTORS

// class Point {
//     x: number;
//     y: number;

//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }

//     drawPoint() {
//         console.log('X: ' + this.x);
//         console.log('Y: ' + this.y);
//     };
//     getDistance(another: Point) {
//         // ...
//     }
// }

// let point = new Point(1, 2);
// point.x = 10;
// point.y = 2999;
// point.drawPoint();

// point.x = 1;
// point.y = 2;
// We can initialise the values of attributes like above OR we can use constructors.
//     tsc 9.ts && node 9.js



// There is no multiple constructors. 

// You can also make parameters optional 

// class Point {
//     x: number;
//     y: number;

//     // Optional parameters
//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }

//     drawPoint() {
//         console.log('X: ' + this.x);
//         console.log('Y: ' + this.y);
//     };
//     getDistance(another: Point) {
//         // ...
//     }
// }

// let point = new Point();
// point.drawPoint();


// Access modifiers. 
// public is by default
// private 
// protected

// class Point {
//     private x: number;
//     private y: number;

//     // Optional parameters
//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }

//     // public drawPoint() {
//     // Redundant and more noise. You don't need to add public because it's by default
//     drawPoint() {
//         console.log('X: ' + this.x);
//         console.log('Y: ' + this.y);
//     };
// }

// let point = new Point(1, 2);
// // point.x = 10;
// // point.y = 2999;
// point.drawPoint();


