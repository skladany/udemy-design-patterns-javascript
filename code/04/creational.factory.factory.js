class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static get factory() {
    return new PointsFactory();
  }
}

class PointsFactory {
  newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

let p1 = Point.factory.newCartesianPoint(5, 4);
let p2 = Point.factory.newPolarPoint(5, 4);
console.log(p1);
console.log(p2);
