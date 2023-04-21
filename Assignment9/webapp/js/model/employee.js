class Employee extends Person {
  constructor(name, dateOfBirth, salary, hireDate) {
    super(name, dateOfBirth);
    this.salary = salary;
    this.hireDate = hireDate;
  }
  doJob(jobTitle) {
    console.log(this.name + " is a " + jobTitle + " who earns $" + this.salary);
  }
}
