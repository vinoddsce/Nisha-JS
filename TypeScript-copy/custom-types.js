// let log = (message: string) => {
//     console.log("Message: ", message);
// }
// log("Hi");
// interface Point {
//     x: number;
//     y: number;
// }
// var point = {
//     x: 100,
//     y: 200
// }
// var box = {
//     length: 100,
//     breadth: 200,
//     width: 300
// }
// let drawPoint = (point: Point) => {
//     console.log("X:", point.x);
//     console.log("Y:", point.y);
// }
// drawPoint(point);
// drawPoint(box);
// interface Bird {
//     eyeSight: number;
//     colour: string;
//     makeNoise(): void
// }
// class class_name {
//     properties def
//     key: data_type
//     functions OR methods
// }
var Student = /** @class */ (function () {
    function Student(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
        console.log("Student Constructor !!!! ");
    }
    Student.prototype.getDetails = function () {
        console.log("ID: ", this.id, ", Name: ", this.name, ", Course: ", this.course);
    };
    return Student;
}());
var s1 = new Student(1, "Pallavi", "AngularJS");
var s2 = new Student(2, "Nisha", "AngularJS");
s1.getDetails();
s2.getDetails();
