import { Shape } from './Shape';

export class Circle extends Shape {
  constructor(color: string, private radius: number) {
    super(color);
  }
  getRadius(): number {
    return this.radius;
  }
  getInfo(): string {
    return `${super.getInfo()}, Radius: ${this.getRadius()}`;
  }
}
