import { Shape } from './Shape';

export class Rectangle extends Shape {
  constructor(color: string, private height: number, private width: number) {
    super(color);
  }
  private getHeight(): number {
    return this.height;
  }
  private getWidth(): number {
    return this.width;
  }
  getInfo(): string {
    return `Info for this rectangle: ${super.getInfo()}, Height: ${this.getHeight()}, Width: ${this.getWidth()}`;
  }
  getArea(): string {
    return `Area of this rectangle: ${this.getHeight() * this.getWidth()}`;
  }
}
