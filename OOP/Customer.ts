class Customer {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  public getFirstName(): string {
    return this.firstName;
  }
  public getLastName(): string {
    return this.lastName;
  }
  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  public setLastName(lastName: string) {
    this.lastName = lastName;
  }
}

let customer = new Customer('Arka', 'Bhuiyan');
console.log(
  `The name of the customer is ${customer.getFirstName()} ${customer.getLastName()}`
);
let customer1 = new Customer('', '');
customer1.setFirstName('Deb');
customer1.setLastName('Sourav');

console.log(
  `The name of the customer is ${customer1.getFirstName()} ${customer1.getLastName()}`
);
