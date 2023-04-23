import { Coach } from './Coach';
import { CricketCoach } from './CricketCoach';
import { FootballCoach } from './FootballCoach';

let footballCoach1 = new FootballCoach('Romario');
let cricketCoach1 = new CricketCoach('John Wright');
let footballCoach2 = new FootballCoach('Maradona');
let cricketCoach2 = new CricketCoach('Whatmore');

let coaches: Coach[] = [];

coaches.push(footballCoach1);
coaches.push(cricketCoach1);
coaches.push(cricketCoach2);
coaches.push(footballCoach2);

for (let coach of coaches) {
  console.log(coach.getName());
  console.log(coach.getDailyWorkOut());
}
