export class Point {
    constructor(private _x?: number, private _y?: number) {
        this._x = _x;
        this._y = _y;
    }
    drawPoint() {
        console.log('X: ' + this._x);
        console.log('Y: ' + this._y);
    };

    getX() {
        return this._x;
    }

    setX(value) {
        if (value < 0) {
            throw new Error('Value cannot be negative');
        }
        this._x = value;
    }
}