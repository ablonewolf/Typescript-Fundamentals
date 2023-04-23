import { Shape } from './Shape';

export class Circle extends Shape {
  constructor(color: string, private radius: number) {
    super(color);
  }
  private getRadius(): number {
    return this.radius;
  }
  getInfo(): string {
    return `Info for this circle: ${super.getInfo()}, Radius: ${this.getRadius()}`;
  }
  getArea(): string {
    return `Area of the circle: ${Math.PI * Math.pow(this.getRadius(), 2)}`;
  }
}
