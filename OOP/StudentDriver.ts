import { Student } from './Student';

let myStudent = new Student('Fairuz', 'Sharmee');
console.log(
  `The name of my student is ${myStudent.getFirstName()} ${myStudent.getLastName()}`
);
