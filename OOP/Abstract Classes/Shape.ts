export abstract class Shape {
  constructor(private color: string) {}

  getColor(): string {
    return this.color;
  }

  getInfo(): string {
    return `Color: ${this.getColor()}`;
  }

  abstract getArea(): string;
}
