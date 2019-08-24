// class Point {
//     constructor(private x?: number, private y?: number) {
//         this.x = x;
//         this.y = y;
//     }
//     drawPoint() {
//         console.log('X: ' + this.x);
//         console.log('Y: ' + this.y);
//     };
// }



// Properties

class Point {
    constructor(private x?: number, private y?: number) {
        this.x = x;
        this.y = y;
    }
    drawPoint() {
        console.log('X: ' + this.x);
        console.log('Y: ' + this.y);
    };

    getX() {
        return this.x;
    }

    setX(value) {
        if (value < 0) {
            throw new Error('Value cannot be negative');
        }
        this.x = value;
    }
}


// let point: Point = new Point(1, 2);
let point = new Point(1, 2);
point.setX(-100);
point.drawPoint();



// Properties

// class Point {
//     constructor(private x?: number, private y?: number) {
//         this.x = x;
//         this.y = y;
//     }
//     drawPoint() {
//         console.log('X: ' + this.x);
//         console.log('Y: ' + this.y);
//     };

//     get X() {
//         return this.x;
//     }

//     set X(value) {
//         if (value < 0) {
//             throw new Error('Value cannot be negative');
//         }
//         this.x = value;
//     }
// }

// let point = new Point(1, 2);
// point.X = 100;
// point.drawPoint();
// console.log(point.X);



// class Point {
//     constructor(private _x?: number, private _y?: number) {
//         this._x = x;
//         this._y = y;
//     }
//     drawPoint() {
//         console.log('X: ' + this._x);
//         console.log('Y: ' + this._y);
//     };

//     get x() {
//         return this._x;
//     }

//     set x(value) {
//         if (value < 0) {
//             throw new Error('Value cannot be negative');
//         }
//         this._x = value;
//     }
// }

// let point = new Point(1, 2);
// point.x = 100;
// point.drawPoint();