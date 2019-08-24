class Point {
    x: number = 100;
    y: number = 200;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    drawPoint() {
        console.log('X: ' + this.x);
        console.log('Y: ' + this.y);
    };

    getDistance(another: Point) {
        // ...
    }
}

// let n: number;
// let point: Point;
// point.drawPoint();

// But we get error of drawPoint() is undefined. 
// ? Because we have declared the variable but 
// not allocated the memory for the custom types. 


// let n:number = 100;
// let point: Point = new Point(1, 2000);
// OR
// let n = 100;
let point = new Point(1, 2000);
point.drawPoint();


// tsc 9.ts && node 9.js
