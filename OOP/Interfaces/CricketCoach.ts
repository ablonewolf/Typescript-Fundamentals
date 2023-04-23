import { Coach } from './Coach';
export class CricketCoach implements Coach {
  constructor(private name: string) {}
  getDailyWorkOut(): string {
    return 'Practice 100 cover drives for as your target for the day.';
  }
  getName(): string {
    return `Name: ${this.name}. He is a cricket coach.`;
  }
}
