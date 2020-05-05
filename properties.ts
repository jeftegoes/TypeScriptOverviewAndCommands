class Point {
    constructor(private _x?: number, private _y?: number) {
        this._x = _x;
        this._y = _y;
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.')
        }

        this._x = value;
    }
}

let point = new Point(6, 4);
let x = point.x;
point.x = 10;
point.draw();