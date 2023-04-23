import { Shape } from './Shape';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';

let circle1 = new Circle('Green', 5.5);
let rectangle1 = new Rectangle('Red', 10, 8);
let circle2 = new Circle('Blue', 8);
let rectangle2 = new Rectangle('Violet', 9, 9);

let shapes: Shape[] = [];

shapes.push(circle1);
shapes.push(rectangle1);
shapes.push(circle2);
shapes.push(rectangle2);

for (let shape of shapes) {
  console.log(shape.getInfo());
  console.log(shape.getArea());
}
