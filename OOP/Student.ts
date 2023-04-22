class Student {
  constructor(private firstName: string, private lastName: string) {}
  getFirstName(): string {
    return this.firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
}
let student = new Student('Fairuz', 'Sharmee');
console.log(
  `The name of my student is ${student.getFirstName()} ${student.getLastName()}.`
);
