import { Student } from "./Student";

class School{
    students:Student[]=[new Student(101,"Ravi"),
    new Student(102,"Ravish"),new Student(103,"Raju"),new Student(104,"Rakesh"),new Student(105,"Ram")
];

display():void{
    for(var i in this.students)
    {
        console.log(i);
        console.log(this.students[i]);
    }
}
}

let school:School =new School();
school.display();