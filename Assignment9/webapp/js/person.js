class Person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    if (typeof name !== "string") {
      alert("Name should be a string");
    } else {
      this.name = name;
    }
  }
  getDateOfBirth() {
    return this.name;
  }
  setDateOfBirth(DOB) {
    this.dateOfBirth = DOB;
  }
  toString() {
    return (
      "Name: " +
      this.name +
      " Date Of Birth " +
      this.dateOfBirth.toLocaleDateString()
    );
  }
}
