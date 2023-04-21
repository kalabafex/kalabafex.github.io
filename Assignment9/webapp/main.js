let persons = [
  new Person("Kalab", new Date(2009 - 1 - 1)),
  new Person("Eyob", new Date(2001 - 0 - 1)),
  new Person("Rob", new Date(2011 - 11 - 1)),
];
persons.forEach((element) => {
  console.log(element.toString());
});
let employee1 = new Employee("Kai", new Date(1995 - 7 - 22), 200000);
employee1.doJob("Software Engineer");
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
 console.log("x1: "+ x);
 console.log("a2: "+ a);
 var f = function() {
 b = a;
 console.log("b3: " + b);
 b = c;
 var a = 3;
 }
 f();
 console.log("b4: " + b);
 x = 6;
}
c(8, 9, 7);
console.log("b5: " + b);
console.log("x6: "+ x);
