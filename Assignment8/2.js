function Student(firstName, lastName, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = grades;
}
Student.prototype.inputNewGrade = function (grade) {
  this.grades = [grade, ...this.grades];
};
Student.prototype.computeAverageGrade = function (grade) {
  return this.grades.reduce((sumR, num) => sumR + num, 0) / this.grades.length;
};
Array.prototype.sort = function (a, b) {
  return a - b;
};
let student1 = new Student("Kalab", "Afex", [2, 4]);
let student2 = new Student("Eyob", "Kir", [3, 4]);
let student3 = new Student("Rob", "Stark", [4, 4]);
let students = [];
students.push(student1);
students.push(student2);
students.push(student3);
let AverageForAll =
  students.reduce(
    (avgT, num) => avgT + num.computeAverageGrade(num.grades),
    0
  ) / students.length;
console.log(student2.grades.sort());
