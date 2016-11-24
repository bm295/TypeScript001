class Student {
    constructor(public firstName: string, public lastName: string) {}

    getFullName() {
        return "My full name is " + this.firstName + " " + this.lastName
    }
}

var student = new Student("Harry", "Potter");

console.log(student.getFullName());