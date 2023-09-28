import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  marks:number=80;
  mycolor:string="";
  myClass:string="";
  b:boolean;
  country:string="";
  cities:string[]=["New Delhi","Mumbai","Kolkata","Chennai","Hyderabad","Bengaluru"];

  constructor(){
    if(this.marks>=35)
    {
      this.mycolor="green";
      this.myClass="class1";
      this.b=true;
    }
    else
    {
      this.mycolor="red";
      this.myClass="class2";
      this.b=false;
    }
  }

  employees:Employee[]=[
    new Employee(101,"Adam",5000.0),
    new Employee(102,"Anil",9000.0),
    new Employee(103,"Amrit",7000.0),
    new Employee(104,"Animesh",5000.0),
    new Employee(105,"Amit",5000.0),
    new Employee(106,"Aman",6000.0),
  ];
}
