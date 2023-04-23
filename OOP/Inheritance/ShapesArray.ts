import { Shape } from './Shape';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';

let shape = new Shape('Black');
let circle = new Circle('Green', 5.5);
let rectangle = new Rectangle('Red', 10, 8);

let shapes: Shape[] = [];

shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);

for (let shape of shapes) {
  console.log(shape.getInfo());
}
