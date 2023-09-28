import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  employees:Employee[]=[
    new Employee(101,"Adam",5000.0),
    new Employee(102,"Anil",9000.0),
    new Employee(103,"Amrit",7000.0),
    new Employee(104,"Animesh",5000.0),
    new Employee(105,"Amit",5000.0),
    new Employee(106,"Aman",6000.0),
  ];

  newemployee:Employee=new Employee(0,"",0);

  onInsertClick()
  {
    this.employees.push(new Employee(this.newemployee.empId,this.newemployee.empname,this.newemployee.salary));
  this.newemployee.empId=0;
  this.newemployee.empname="";
  this.newemployee.salary=0;
  }

  onDeleteClick(indx:number)
  {
    if(confirm("Are you sure to delete this employee ?"))
    {
      this.employees.splice(indx,1);
    }
  }
}
