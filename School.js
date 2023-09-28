"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var School = /** @class */ (function () {
    function School() {
        this.students = [new Student_1.Student(101, "Ravi"),
            new Student_1.Student(102, "Ravish"), new Student_1.Student(103, "Raju"), new Student_1.Student(104, "Rakesh"), new Student_1.Student(105, "Ram")
        ];
    }
    School.prototype.display = function () {
        for (var i in this.students) {
            console.log(i);
            console.log(this.students[i]);
        }
    };
    return School;
}());
var school = new School();
school.display();
