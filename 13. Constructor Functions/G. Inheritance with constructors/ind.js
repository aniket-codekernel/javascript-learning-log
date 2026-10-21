function Student(name, age, course) {
  Person.call(this, name, age);   // borrow Person's setup
  this.course = course;
}

Student.prototype = Object.create(Person.prototype); // link the chains
Student.prototype.constructor = Student;             // fix the constructor pointer

Student.prototype.study = function () {
  return this.name + " studies " + this.course;
};

const s = new Student("Aniket", 20, "CS");
s.greet(); // inherited from Person
s.study(); // own method