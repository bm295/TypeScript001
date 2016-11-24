var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.getFullName = function () {
        return "My full name is " + this.firstName + " " + this.lastName;
    };
    return Student;
}());
var student = new Student("Harry", "Potter");
console.log(student.getFullName());
//# sourceMappingURL=Student.js.map