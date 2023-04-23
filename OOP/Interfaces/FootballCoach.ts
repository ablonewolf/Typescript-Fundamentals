import { Coach } from './Coach';

export class FootballCoach implements Coach {
  constructor(private name: string) {}
  getDailyWorkOut(): string {
    return `Practice 100 freekick shots as a daily target.`;
  }
  getName(): string {
    return `Name: ${this.name}. He is a football coach.`;
  }
}
