/* Given the definitions shown in code, you are asked to implement Line.deepCopy() to perform a deep copy of the given Line object. This method should return a copy of a Line that contains copies of its start/end points.*/

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  deepCopy() {
    return JSON.parse(JSON.stringify(this));
  }
}

const line = new Line(new Point(0, 0), new Point(9, 9));
const line2 = line.deepCopy();
line2.start.x = -1;

console.log(line);
console.log(line2);
