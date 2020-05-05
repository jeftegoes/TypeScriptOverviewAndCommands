class Point {
    x: number;
    y: number;

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}
let point: Point;
point = new Point();
point.x = 3;
point.y = 10;
point.draw();