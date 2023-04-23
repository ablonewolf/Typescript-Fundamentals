import { Shape } from './Shape';

export class Rectangle extends Shape {
  constructor(color: string, private width: number, private height: number) {
    super(color);
  }
  getWidth(): number {
    return this.width;
  }
  getHeight(): number {
    return this.height;
  }
  getInfo(): string {
    return `${super.getInfo()}, Width: ${this.getWidth()}, Height: ${this.getHeight()}`;
  }
}
