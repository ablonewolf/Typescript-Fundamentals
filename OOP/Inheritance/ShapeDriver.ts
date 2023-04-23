import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let shape = new Shape('Blue');
console.log(shape.getInfo());

let circle = new Circle('Green', 5.5);
console.log(circle.getInfo());

let rectangle = new Rectangle('Red', 10, 20);
console.log(rectangle.getInfo());
